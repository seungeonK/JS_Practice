// object is something like an array.
// but it is a bit different
// object can contain different data types
// object can even contain arrays, or another object inside

const seungeon = {
  name:"Seungeon",
  age:22,
  origin:"South Korea",
  gender:"male",
  isHandsome:false,
  favMovie:["Harry Potter", "Parasite"],
  family:{
    sibling:1,
    mom:"mom",
    dad:"dad",
    numOfFamily:4
  }
}

console.log(seungeon,'\n');

seungeon.gender = "Female"; // object instance variable can be changed

console.log(seungeon.gender);