const person = {
    name: "salim",
    dish:"halim",
    frandes:["kamal","jamal","kobir"],
    mony:500,
};

console.log(person,typeof person)
const persionJSON = JSON.stringify(person);
console.log(persionJSON,typeof persionJSON)

const persionJSONn = JSON.parse(persionJSON);
console.log(persionJSON);