const Listing = require("../models/listing");
const maptilerClient= require('@maptiler/client');
const mapToken = process.env.MAP_TOKEN;
maptilerClient.config.apiKey = mapToken;

// (async () => {
//   const result = await maptilerClient.geocoding.forward('paris');
//  // ...
// })()

module.exports.index = async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{ allListings });
};
 

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path:"reviews",
            populate:{
                path:"author",  
            }
        }).populate("owner");
    if(!listing) {
        req.flash("error","Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{ listing });
}; 


module.exports.createListing = async (req,res,next) => {
    // let {title,description,image,price,country,location} = req.body;
    // if(!req.body.listing) {
    //     throw new ExpressError(400,"Send valid data for listing");
    // }
    // if(!newListing.title) {
    //     throw new ExpressError(400,"Title is missing!");
    // }
    // if(!newListing.description) {
    //     throw new ExpressError(400,"Description is missing!");
    // }
    // if(!newListing.location) {
    //     throw new ExpressError(400,"Location is missing!");
    // }
    let response = await maptilerClient.geocoding.forward(req.body.listing.location);
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    console.log(response.features[0].geometry)
    newListing.geometry = response.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error","Listing you requested for does not exist");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};


module.exports.updateListing = async (req, res) => {
    console.log(req.file);
    try {
        let { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

        console.log(req.file); // Log the file data

        if (typeof req.file !== "undefined") {
            let url = req.file.path;
            let filename = req.file.filename;
            listing.image = { url, filename };
            await listing.save();
        }

        req.flash("success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    } catch (error) {
        console.error(error); // Log the error for debugging
        req.flash("error", "Something went wrong while updating the listing");
        res.redirect(`/listings/${id}/edit`);
    }
};



// module.exports.updateListing = async (req, res) => {
//     // if(!req.body.listing) {
//     //     throw new ExpressError(400,"Send valid data for listing");
//     // }
//     let {id} = req.params;
//     let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

//     console.log(req.file);

//     if(typeof req.file !== "undefined") {
//         let url = req.file.path;
//         let filename = req.file.filename;
//         listing.image = { url , filename };
//         await listing.save();
//     }

//     req.flash("success","Listing Updated!");
//     res.redirect(`/listings/${id}`);
// };

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    console.log(deletedListing);
    res.redirect("/listings");
}