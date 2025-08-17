console.log("dhoni bio data");

let dhoni = {
  player_name: "mahendra singh dhoni",
  age: 42,
  role: "capitain",
  teams: ["india", "csk"],
  statics: {
    matches: 539,
    runs: 17266,
    centuries: 16,
  },
  retire() {
    return `${this.player_name} retired from international circket in 2020.`;
  },
};
console.log(dhoni.player_name);
console.log(dhoni.statics.runs);
console.log(dhoni.teams[0]);
console.log(dhoni.retire());
