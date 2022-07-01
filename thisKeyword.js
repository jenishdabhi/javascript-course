//this keyword
prototype;
function persoon(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
}
const person1 = new person("bruc", "wayn");
const person2 = new person("bob", "alice");

person.getFullName = function () {
  return this.firstname + "" + this.lastname;
};
console.log(person1.getFullName());




function saymyname(name) {
  console.log(`my name is ${name}`);
}
saymyname("jenish dabhi");

const person = {
  name: "jenish",
  saymyname: function () {
    console.log(`my name is ${this.name}`);
  },
};
person.saymyname();
