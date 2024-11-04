class Repository {
    #data;

    constructor(data) {
        this.#data = data || [];
    }

    getAllEntries() {
        return this.#data;
    }

    getEntriesByAnimalName(namePattern) {
        return this.#data
            .map((country) => {
                const people = country.people
                    .map((people) => {
                        const animals = people.animals
                            .filter((animal) => {
                                const regex = new RegExp(namePattern);
                                return regex.test(animal.name);
                            });
                        return {
                            ...people,
                            animals
                        }
                    })
                    .filter((people) => people.animals.length);
                return {
                    ...country,
                    people
                }
            })
            .filter((country) => country.people.length);
    }
}

module.exports = Repository;