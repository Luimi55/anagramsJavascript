const File = require("./index")


describe("All test of Anagrams", () => {

    it("Verify If The File Path Exists", () => {

        expect(File.PathExists()).toBe(true);

    })


})