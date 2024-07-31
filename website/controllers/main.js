import {HomeModel} from "../models/home_model.js";

exports.main = async (req, res) =>
{
    var model = new HomeModel();
    var imageFileNames = model.getFilenames("photos/");
    imageFileNames.forEach(element => {
        element = "photos/" + element;
        console.log(element);
    });
    res.render("index", {imageLocations: imageFileNames});
}
