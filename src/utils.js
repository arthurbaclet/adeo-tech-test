module.exports = {
    formatNamesWithChildrenCount(data) {
        return data.map((country) => ({
            ...country,
            name: `${country.name} [${country.people.length}]`,
            people: country.people.map((people) => ({
                ...people,
                name: `${people.name} [${people.animals.length}]`
            }))
        }));
    }
}