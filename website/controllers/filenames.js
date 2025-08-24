exports.main = async (req, res) =>
{
    const prefix = "public/photos/highlights";
    const currentDir = process.cwd() + "/" + prefix;
    //console.debug("dir: " + currentDir);
    var filenames = readDirectory(currentDir);
    filenames.forEach((element, index, filenames) => {
        filenames[index] = "photos/highlights/" + element;
    });
    //console.debug(filenames);
    res.setHeader('Content-Type', 'application/json');
    const lst = JSON.stringify(filenames);
    //console.debug(lst);
    res.end(lst);
}

const fs = require('fs');
function readDirectory(directoryPath) {
    try
    {
        const filenames = fs.readdirSync(directoryPath);
        return filenames;
    }
    catch (error)
    {
        console.error(error);
    }
}
