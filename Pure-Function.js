// Que 1 

// write a pure function that calculate factorial of positive integer


function positiveInteger(n){
    if(n < 0){
        throw new Error("SOry from this Number")
    }
    if(n === 0){
        return 1
    }else{
        return n * positiveInteger(n - 1)
    }
}
const ans1 = positiveInteger(5)
// console.log(ans1);

// ---------------------------------------------------


// Que 2

// write a pure function that computes the length of existing array

function computesLength(arr){
  if(!Array.isArray(arr)){
    throw new Error("this is not a array");
  }else{
    return arr.length
  }
}

// console.log(computesLength([1,2,3,4,5]));

// ---------------------------------------------------

// write a pure function that cheack if a number is prime or not

// ---------------------------------------------------
// Implement a Pure function to reverse a string
function Reverse(str){
   if(typeof(str)=== "string"){
    return str.split("").reverse().join("")
   }
 throw new Error("this is not a String")
}

// console.log(Reverse("hsinaD"))
// console.log(Reverse(1))
// ---------------------------------------------------


function FilteringEven(num){
  return num.filter((n)=>{
     return n %2 === 0
  })
}
// console.log(FilteringEven([1,2,3,4,5,6,7,8,9]));