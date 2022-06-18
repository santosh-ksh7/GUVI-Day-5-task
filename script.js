// Do the below programs in anonymous function & IIFE

// Problem 1: Print odd numbers in an array

// (function (arr){
//     let res = []
//     for(x of arr){
//         if(x%2!==0){
//             res.push(x)
//             continue
//         }else{
//             continue
//         }
//     }
//     console.log(res);
// })([1,2,3,4,5,6,7,8,9])



// Problem 2: Convert all the strings to title caps in a string array

// (function (arr){
//     let res=[];
//     for(x of arr){
//         let temp = x[0].toUpperCase() + x.slice(1,x.length);
//         res.push(temp)
//     }
//     console.log(res);
// })(["array", "json", "number", "boolean", "string", "objects", "function"])



// Problem 3: Sum of all numbers in an array

// (function (arr){
//     let res=0;
//     for(x of arr){
//         res+=x
//     }
//     console.log(res);
// })([1,2,3,4,5,6,7,8,9])



// Problem 4: Return all the prime numbers in an array

// (function (arr){
//     let res=[]
//     for(x of arr){
//         if(x<=0){
//             continue
//         } 
//         if(x===1 || x===2){
//             res.push(x)
//         }else{
//             let temp = x;
//             let status ="";
//             for(i=2;i<temp;i++){
//                 if(x%i!=0){
//                     status = "primetillnow";
//                     continue
//                 }else{
//                     status = "";
//                     break
//                 }
//             }
//             if(status==="primetillnow"){
//                 res.push(x)
//             }
//         }
//     }
//     console.log(res);
// })([-1,-2,-3,0,1,2,3,4,5,6,7,8,9])



// Problem 5: Return all the palindromes in an array

// (function (arr){
//     let res=[];
//     for(items of arr){
//         let temp = String(items);
//         let fin=temp.split("").reverse().join("");
//         if(temp===fin){
//             res.push(items)
//         }
//     }
//     console.log(res);
// })([121, 131, 20,"array", "json", "number", "radar", "level"])



// Problem 6: Return median of two sorted arrays of the same size

// (function (arr1,arr2){
//     let temp1 = arr1.sort((a,b) => a-b);
//     let temp2 = arr2.sort((a,b) => a-b);
//     let median1 = temp1[Math.floor(temp1.length/2)];
//     let median2 = temp2[Math.floor(temp2.length/2)];
//     console.log(median1, median2, temp1, temp2);
// })([121, 131, 20,34,56,78,879,8],[9,8,7,6,5,4,3,2,1])



// Problem 7: Remove duplicates from an array

// (function (arr){
//     let res=[];
//     for(x of arr){
//         if(res.includes(x)){
//             continue
//         }else{
//             res.push(x)
//         }
//     }
//     console.log(res);
// })([1,2,3,1,2,3,1,2,3,4,5,6,3,4,5,6,7,8,54,7,89,9])



// Problem 8: Rotate an array by k times

// (function (arr,k){
//     let temp=0;
//     while(temp!=k){
//         let d1 = arr.pop();
//         arr.unshift(d1);
//         temp+=1;
//     }
//     console.log(arr);
// })([1,2,3,4,5,6,7,8,9],4)








// Do the below programs in arrow functions

// Problem 1: Print odd numbers in an array

// const run = (arr) =>{
//     let res = []
//     for(x of arr){
//         if(x%2!==0){
//             res.push(x)
//             continue
//         }else{
//             continue
//         }
//     }
//     console.log(res);
// }

// run([1,2,3,4,5,6,7,8,9])



// Problem 2: Convert all the strings to title caps in a string array

// const run = (arr) =>{
//     let res=[];
//     for(x of arr){
//         let temp = x[0].toUpperCase() + x.slice(1,x.length);
//         res.push(temp)
//     }
//     console.log(res);
// }

// run(["array", "json", "number", "boolean", "string", "objects", "function"])



// Problem 3: Sum of all numbers in an array

// const run = (arr) => {
//     let res=0;
//     for(x of arr){
//         res+=x
//     }
//     console.log(res);
// }

// run([1,2,3,4,5,6,7,8,9])



// Problem 4: Return all the prime numbers in an array

// const run =  (arr) =>{
//     let res=[]
//     for(x of arr){
//         if(x<=0){
//             continue
//         } 
//         if(x===1 || x===2){
//             res.push(x)
//         }else{
//             let temp = x;
//             let status ="";
//             for(i=2;i<temp;i++){
//                 if(x%i!=0){
//                     status = "primetillnow";
//                     continue
//                 }else{
//                     status = "";
//                     break
//                 }
//             }
//             if(status==="primetillnow"){
//                 res.push(x)
//             }
//         }
//     }
//     console.log(res);
// }

// run([-1,-2,-3,0,1,2,3,4,5,6,7,8,9])



// Problem 5: Return all the palindromes in an array

// const run = (arr) =>{
//     let res=[];
//     for(items of arr){
//         let temp = String(items);
//         let fin=temp.split("").reverse().join("");
//         if(temp===fin){
//             res.push(items)
//         }
//     }
//     console.log(res);
// }

// run([121, 131, 20,"array", "json", "number", "radar", "level"])