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

    describe("getOptionValue", () => {
        it("Should return value when providing an option followed by its value", () => {
            // Given
            const args = ["node", "app.js", "--filter", "test"];
            const cli = new CliInterpretor(args);
            // When
            const result = cli.getOptionValue("filter");
            expect(result).toStrictEqual("test");
        });

        it("Should return null when providing an option with no value", () => {
            // Given
            const args = ["node", "app.js", "--count"];
            const cli = new CliInterpretor(args);
            // When
            const result = cli.getOptionValue("count");
            expect(result).toStrictEqual(null);
        });

        it("Should return undefined when providing an undefined option", () => {
            // Given
            const args = ["node", "app.js", "--count"];
            const cli = new CliInterpretor(args);
            // When
            const result = cli.getOptionValue("filter");
            expect(result).toStrictEqual(undefined);
        });
    });
});