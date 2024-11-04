const { formatNamesWithChildrenCount } = require("./utils");

describe("Utils", () => {
    it("Should append the length of children to the name of elements", () => {
        // Given
        const data = [
            {
                name: "Uzuzozne",
                people: [
                    {
                        name: "Lillie Abbott",
                        animals: [{name: "John Dory"}]
                    },
                    {
                        name: 'Harold Patton',
                        animals: [
                            {name: 'Bearded Dragon'},
                            {name: 'Chicken'},
                            {name: 'Sand Cat'}
                        ]
                    }
                ],
            },
            {
                name: "Satanwi",
                people: [
                    {
                        name: "Anthony Bruno",
                        animals: [
                            {name: "Oryx"},
                            {name: "Tyranid"},                      
                        ]
                    }
                ]
            }
        ];
        //When
        const result = formatNamesWithChildrenCount(data);
        //Then
        expect(result).toStrictEqual([
            {
                name: "Uzuzozne [2]",
                people: [
                    {
                        name: "Lillie Abbott [1]",
                        animals: [{name: "John Dory"}]
                    },
                    {
                        name: 'Harold Patton [3]',
                        animals: [
                            {name: 'Bearded Dragon'},
                            {name: 'Chicken'},
                            {name: 'Sand Cat'}
                        ]
                    }
                ],
            },
            {
                name: "Satanwi [1]",
                people: [
                    {
                        name: "Anthony Bruno [2]",
                        animals: [
                            {name: "Oryx"},
                            {name: "Tyranid"},                      
                        ]
                    }
                ]
            }
        ]);
    });
});