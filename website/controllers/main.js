
exports.main = async (req, res) =>
{
    const model = require('../models/home_model');
    const filePath = `${__dirname}/../public/photos`;
    console.log(filePath);
    const imageFileNames = model.getFilenames(filePath);
    imageFileNames.forEach(element => {
        console.log(element);
    });
    res.render("index", {imageLocations: imageFileNames});
}
