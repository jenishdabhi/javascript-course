let firstname='jenis'
let lastname='dabhi'

let person={
    firstname,
    lastname
}
// console.log(firstname);
// console.log(lastname);
function create(firstname,lastname){
    let fullname=firstname+""+lastname;
    return {firstname,lastname,fullname}
}

let p=create("clark","alice");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);