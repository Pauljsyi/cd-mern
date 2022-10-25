const { Unit, RedBeltNinja, BlackBeltNinja } = require("./unit.js");
const {
  Effect,
  HardAlgorithm,
  UnhandledPromiseRejection,
  PairProgramming,
} = require("./effect.js");

// red belt instance
const jetli = new RedBeltNinja("jet li");
const hardAlgo = new HardAlgorithm("Hard Algorithm");
hardAlgo.play(jetli);

// black belt instance
const bruceLee = new BlackBeltNinja("Bruce Lee");
const unhandledPromiseRej = new UnhandledPromiseRejection(
  "Unhandled Promise Rejection"
);
unhandledPromiseRej.play(bruceLee);

// instance of pair programming and play it on red belt instance

const pairProgramming = new PairProgramming("Pair Programming");
pairProgramming.play(jetli);
