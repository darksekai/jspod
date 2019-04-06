function Rectangle (x,y){
   console.log (x * y)
}

Rectangle(6,5)

var PI = 3.14;

function Circle(r) {
 let vg = PI * r * r

  return vg;
}

console.log( Circle(5))

function days(ch){
  switch(ch){
  case "s": console.log("Sunday")
          break;

  case "n": console.log("Monday")
          break;

  case 2: console.log("Tuesday")
          break;
  }
}
console.log(days("s"))

function calc(x, y, b){
  switch(b){
  case "add":
      console.log(x + y)
    break;



  case "mul":
    console.log(x * y)
    break;


  case "div":
  console.log(x / y)
    break;
  }

}


console.log(calc(4,3,"mul"))

for(i=0; i<= 201; i+=2){
    //if(i % 2 === 0) {
      console.log(i);
    }
