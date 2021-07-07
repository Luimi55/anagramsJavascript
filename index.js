const fs = require("fs");
const words = fs.readFileSync("./Anagrams.txt").toString().split("\n");
const startTime = Date.now()
const File = module.exports = {

    PathExists: () => {
        
        return fs.existsSync("./Anagrams.txt")

    },


    AreAnagrams: (test = words) => {
        const anagrams =  new Map();
        for(let i = 0; i < test.length; i++) {
            const word_sorted = test[i].split('').sort().join("");
            const ana = anagrams.get(word_sorted)
            if(ana){
               ana.push(test[i]);
               if(test != words) return true                
            }
            else anagrams.set(word_sorted, [test[i]]);
        }

        return anagrams
    },

    CountAnagrams: (anagrams) => {
        let count = 0;
        for(let v of anagrams.values()){
            if(v.length > 1) count++
        }

        return count
    },

    showAnagrams: () => {
        for(let v of anagrams.values())
            if(v.length > 1) console.log(v)
    },

    AnagramsDuration: () => {
        const duration = Date.now() - startTime
        return duration 
    }


}