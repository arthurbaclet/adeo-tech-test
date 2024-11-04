class CliInterpretor {
    #options;

    constructor(argArray) {
        const isOption = new RegExp("^--");

        this.#options = argArray
            .reduce((options, optionStr) => {
                if (isOption.test(optionStr)) {
                    const option = optionStr.split("=");
                    const optionName = option[0];
                    const optionValue = option[1];

                    return {
                        ...options,
                        [optionName]: optionValue || null
                    } 
                }
            }, {});
    }

    hasOption(optionName) {
        return this.#options[`--${optionName}`] !== undefined;
    }

    getOptionValue(optionName) {
        return this.#options[`--${optionName}`];
    }
}

module.exports = CliInterpretor;