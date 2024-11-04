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
      }, {
        name: 'Philip Murray',
        animals:
          [{name: 'Sand Dollar'},
            {name: 'Buzzard'},
            {name: 'Elephant'},
            {name: 'Xenops'},
            {name: 'Dormouse'},
            {name: 'Anchovy'},
            {name: 'Dinosaur'}]
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
    describe("GetEntriesByAnimalName", () => {
        it("Should return all entries when no name pattern is provided", () => {
            // Given
            const repo = new Repository(dataMock);
            // When
            const result = repo.getEntriesByAnimalName();
            // Then
            expect(result).toStrictEqual(dataMock);            
        });
        it("Should return all entries when name pattern is null", () => {
            // Given
            const repo = new Repository(dataMock);
            // When
            const result = repo.getEntriesByAnimalName(null);
            // Then
            expect(result).toStrictEqual(dataMock);            
        });
        it("Should return filtered entries based on provided name pattern", () => {
            // Given
            const repo = new Repository(dataMock);
            const namePattern = "ar";
            // When
            const result = repo.getEntriesByAnimalName(namePattern);
            // Then
            expect(result).toStrictEqual([{
              name: 'Dillauti',
              people:
                [{
                  name: 'Winifred Graham',
                  animals: [
                    {name: 'Narwhal'}
                  ]
                }, {
                  name: 'Philip Murray',
                  animals:
                    [{name: 'Sand Dollar'},
                      {name: 'Buzzard'}
                    ]
                }]
          }]);            
        });
        it("Should not return people with no animals after filtering", () => {
          // Given
          const repo = new Repository(dataMock);
          const namePattern = "Cobra";
          // When
          const result = repo.getEntriesByAnimalName(namePattern);
          // Then
          expect(result).toStrictEqual([{
            name: 'Dillauti',
            people:
              [{
                name: 'Winifred Graham',
                animals: [
                  {name: 'Cobra'}
                ]
              }]
          }]);
      });
      it("Should not return countries with no people after filtering", () => {
        // Given
        const repo = new Repository(dataMock);
        const namePattern = "NoMatchPattern";
        // When
        const result = repo.getEntriesByAnimalName(namePattern);
        // Then
        expect(result).toStrictEqual([]);
    });
  });
});