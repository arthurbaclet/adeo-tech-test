const { formatNamesWithChildrenCount } = require("./src/utils");
const Repository = require("./src/repository");
const CliInterpretor = require("./src/cli");
const { data } = require("./data");

const repo = new Repository(data);
const cli = new CliInterpretor(process.argv);

const result = cli.hasOption("filter")
    ? repo.getEntriesByAnimalName(cli.getOptionValue("filter"))
    : repo.getAllEntries()


if (result.length) {
    const output = cli.hasOption("count")
        ? formatNamesWithChildrenCount(result)
        : result;

    console.log(
        JSON.stringify(output, null, 2)
    );
}