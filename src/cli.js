class CliInterpretor {
    #args;

    constructor(argArray) {
        this.#args = argArray;
    }

    hasOption(optionName) {
        return (this.#args.indexOf(`--${optionName}`) >= 0);
    }
}

module.exports = CliInterpretor;