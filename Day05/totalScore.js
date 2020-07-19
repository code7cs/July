// get the total score of force users only
// (map, reduce, filter)

const personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

let totalScore = personnel.filter(item => item.isForceUser === true).reduce((acc, cur)=> {
    return acc + cur.pilotingScore + cur.shootingScore;
}, 0)

console.log(totalScore);

// display all employee names from the json data
let names = personnel.map(item => {
    return item.name;
})
console.log(names);
