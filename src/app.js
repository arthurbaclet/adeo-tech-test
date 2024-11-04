const { formatNamesWithChildrenCount } = require("./utils");
const Repository = require("./repository");
const CliInterpretor = require("./cli");
const { data } = require("../data");

const repo = new Repository(data);
const cli = new CliInterpretor(process.argv);

const result = cli.hasOption("filter")
    ? repo.getEntriesByAnimalName(cli.getOptionValue("filter"))
    : repo.getAllEntries()

const output = cli.hasOption("count")
    ? formatNamesWithChildrenCount(result)
    : result;

console.log(
    JSON.stringify(output, null, 2)
);