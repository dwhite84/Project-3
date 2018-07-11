const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const PlanItSeed = [
  {
    title: "test0.0",
    author: "J-Dawg",
    members: ['Ashley', 'Donald', 'Justin', 'Tyler', 'Walker'],
    date: new Date(Date.now())
  }
];

db.PlanIt
  .remove({})
  .then(() => db.PlanItSeed.collection.insertMany(PlanItSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });