class CliInterpretor {
    #args;

    constructor(argArray) {
        this.#args = argArray;
    }

    hasOption(optionName) {
        return (this.#args.indexOf(`--${optionName}`) >= 0);
    }

    getOptionValue(optionName) {
        const optionIndex = this.#args.indexOf(`--${optionName}`);
        if (optionIndex === -1) {
            return undefined;
        } else {
            return this.#args[optionIndex + 1] || null;
        }
    }
}

module.exports = CliInterpretor;