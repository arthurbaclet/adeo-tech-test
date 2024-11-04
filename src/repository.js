class Repository {
    #data;

    constructor(data) {
        this.#data = data || [];
    }

    getAllEntries() {
        return this.#data;
    }
}

module.exports = Repository;