// function check(){
//   console.log(this);
// }
// check()
// console.log(this);

let person={
  Name:"pree",
  age:23,
  getName:function(){
    console.log(this.Name);
  }
}
let per={
  Name:"resh",
  age:23,
  
}
let f=person.getName.bind(per);
setTimeout(f,1000)


// let person={
//     Name:"pree",
//     age:23,
//     getName(wel){
//       console.log(`Hi i am ${this.Name} ${wel}`);
//     }
//   }
//   let per={
//     Name:"resh",
//     age:23,
//   }
//   // person.getName.call(per,);

//   person.getName.apply(per,["welcome"]);
  