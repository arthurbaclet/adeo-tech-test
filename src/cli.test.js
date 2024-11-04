const CliInterpretor = require("./cli");

describe("CliInterpretor", () => {
    describe("HasOption", () => {
        it("Should return true when providing a defined option", () => {
            // Given
            const args = ["node", "app.js", "--count"];
            const cli = new CliInterpretor(args);
            // When
            const result = cli.hasOption("count");
            expect(result).toStrictEqual(true);
        });

        it("Should return false when providing an undefined option", () => {
            // Given
            const args = ["node", "app.js", "--count"];
            const cli = new CliInterpretor(args);
            // When
            const result = cli.hasOption("filter");
            expect(result).toStrictEqual(false);
        });
    });
});