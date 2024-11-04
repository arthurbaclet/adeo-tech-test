const Repository = require("./repository");
const dataMock = [{
    name: 'Dillauti',
    people:
      [{
        name: 'Winifred Graham',
        animals:
          [{name: 'Anoa'},
            {name: 'Duck'},
            {name: 'Narwhal'},
            {name: 'Badger'},
            {name: 'Cobra'},
            {name: 'Crow'}]
      }]
}];

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
        it ("Should return the same data the repository was initialized with", () => {
            // Given
            const repo = new Repository(dataMock);
            // When
            const result = repo.getAllEntries();
            // Then
            expect(result).toStrictEqual(dataMock);
        });
    });
});