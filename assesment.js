//Write a function that takes in a string and returns it when reversed

function reverse(food) {
    let food='eating'

    let food1=food.split('').reverse()
    console.log(food1)

}
console.log(reverse(food));




//Write a function that takes in the following array and consoles the target if it is found else
//null
//let array = [2,8,0,23,5,45,76]
//let target=23


function mergeSort(array) {
    if (array.length<2) {
        return array;
    }
    let middle=Math.floor(array.length/2);
    let right=array.slice(0,middle);
    let left=array.slice(middle);
    return merge(mergeSort(right),mergeSort(left));
}
function merge(left,right) {
    let sorted=[];
    while (left.length && right.length) {
        if (left[0]<right[0]) {
            sorted.push(left.shift());
        }
        else{
            sorted.push(right.shift());
        }
    }
    return[...sorted,...left,...right]
    
}
let array = [2,8,0,23,5,45,76];
console.log(mergeSort(array));
function bInarySearch(arr,target) {
    let leftindex=0;
    let rightindex=arr.length -1
    while (leftindex<=rightindex) {
        let mid=Math.floor((leftindex+rightindex)/2);
        if (target===arr[mid]) {
            return mid;
        }
        else if (target<arr[mid]) {
           rightindex=mid -1; 
        }
        else{
            leftindex=mid +1;
        }
    }
    return null
}
let arr=mergeSort(array);
let target=23;
console.log(bInarySearch(arr,target))

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let z = 0; z < array.length; z++) {
    console.log(array[z]);
    if (z %4==0) {
        console.log("{z} is a leap year")
    }
    else{
        console.log("[z] is not a leap year")
    }
}




//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
  
for (nums in 1<=100) {
   if (nums %3==0) {
    console.log("fizz")
   }
   else if (nums %5==0 ) {
    console.log("fizzbuzz")
   }
   else if (nums %5==0 && nums %3==0) {
    console.log("fizzbuzz")
   }

   }
   
   



//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
function multiply(array) {
    
let multiplication=1;
let i=1
while (i<numArray.length) {
    console.log(i);
    multiplication+=numArray[i]
    
    i++

}


}
let numArray = [12,87,45,75,23,64,73] 
console.log(multiply(numArray))

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
