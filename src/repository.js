class Repository {
    #data;

    constructor(data) {
        this.#data = data || [];
    }
}

module.exports = Repository;