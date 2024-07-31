
class HomeModel
{
    getFilenames(dirPath) 
    {
        fs = require('fs');
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        return entries.filter(entry => !entry.isDirectory()).map(entry => entry.name);
    }
}
