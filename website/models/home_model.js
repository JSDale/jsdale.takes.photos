
exports.getFilenames = function(dirPath) 
{
    try
    {
        fs = require('fs');
        path = require('path')
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        var col = entries.filter(entry => !entry.isDirectory())
            .map(entry => entry.name);
        col.forEach((element, i) => {
            col[i] = path.join('photos', element);
        });
        return col;
    }
    catch(error)
    {
        console.log('Error getting filenames. ', error.message);
        return [];
    }
}
