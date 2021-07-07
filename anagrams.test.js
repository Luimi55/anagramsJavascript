const File = require("./index")


describe("All test of Anagrams", () => {

    it("Verify If The File Path Exists", () => {

        expect(File.PathExists()).toBe(true);

    })

    it("Verify that there are anagrams", () => {
        const array = ["frase", "fresa", "hola", "adios"];
        expect(File.AreAnagrams(array)).toBe(true);

    })

    it("Verify if amount of anagrams is 20683", () => {
        expect(File.CountAnagrams(File.AreAnagrams())).toBe(20683)
    })

    it("Check is the duration is less than 2 seconds", () => {
        expect(File.AnagramsDuration()).toBeLessThan(2000)
    })

})