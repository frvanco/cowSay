const myInfo = require("./information.js");

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello my name is ${myInfo.name} from ${myInfo.campus} campus.`,
    e: "oO",
    T: "U",
  })
);
