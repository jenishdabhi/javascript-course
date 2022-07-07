console.log("this is tutorial 43")

async function harry(){
    console.log("inside fun");
    const responce= await fetch('https://api.github.com/user')
    console.log("before responce");
    const users=await responce.json();
    console.log("resolved");

    return users;
return "harry";
}
console.log("before calling harry");
let a =harry();
console.log("after calling harry");
console.log(a);
a.then(data=>console.log(data));
console.log("last time calling harry");