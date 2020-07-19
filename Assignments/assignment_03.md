1. forEach VS map
`forEach`: This iterates over a list and applies some operation with side effects to each list member 
(example: saving every list item to the database)

`map`: This iterates over a list, transforms each member of that list, and returns another list of the same size
 with the transformed members (example: transforming list of strings to uppercase)
 
2.var personnel = [

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

Our objective: get the total score of force users only
(map, reduce, filter)

Answer: see `Day05/totalScore.js` file

3. display all employee names from the json data
Answer: see `Day05/totalScore.js` file
