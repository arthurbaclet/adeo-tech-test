const Repository = require("./repository");

describe("Repository", () => {
    describe("GetAllEntries", () => {
        it("Should return an empty array when initialized with no data", () => {
            // Given
            const repo = new Repository();
            // When
            const result = repo.getAllEntries();
            // Then
            expect(result).toStrictEqual([]);
        });
    });
});