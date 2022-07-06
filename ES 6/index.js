//rest operator

function addnumbers(a,b,c,...abc) {
    console.log(abc[1]);
    return a+b+c;
}
const res=addnumbers(2,4,6,8,9)
console.log(res);

//spread operator

var names=['anuj','ajay','raj','vivek']
function getnames(name1,name2,name3){  //not force to pass all arguments using spread
    console.log(name1,name2,name3);
}
getnames(...names) //best
// getnames(names)

//object ke sath rest
var student={
    name: 'ajay',
    age: '28',
    hobbies: ["cricket","singing"]
}
const {...nam}=student;
console.log(nam);