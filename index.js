const fs = require("fs")

const File = module.exports = {

    PathExists: () => {
        
        return fs.existsSync("./Anagrams.txt")

    }

}