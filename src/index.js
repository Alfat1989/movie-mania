console.log('Movie')


// function dublicateCount(text) {
//     const unique = []
//     const textUnigue = [...text]
//         .filter((course, index, array) => {
//             array.indexOf(course) === index
//         });
//     console.log(textUnigue)
//     // for (let i = 0; i < text.length; i += 1){
        
//     // }

// }
// console.log(dublicateCount('aaabbbctil'))

////////////////////////////////////////////////////////

function duplicateCount(str) {
    
    const myObj = {};
    const newStr = str.toLowerCase();
        counter = 0;    
    for(var i = 0; i < newStr.length; i++){   

      if(!myObj[newStr[i]]){
          myObj[newStr[i]] = 1;
      } 
      else if(myObj[newStr[i]] < 2) {
          myObj[newStr[i]]+=1;
          counter++;
      }    
    }
    return counter;
}
//   const x = text.toLowerCase().split('');
//   let iterable = new Set(x);

//   const w = Array.from(iterable);
  
//   // console.log(w);

//   console.log(x.includes(...w));
  // const y = new Set();

  // let intersection = new Set([...x].filter(e => set2.has(e)));

  
  // let count = 0;
  
  // for(let i = 0; i < x.length; i += 1){
  //   if(x[i] === x[i+1]){
  //     // count += 1;
  //     y.add(x[i]);
  //   } 
  // }
  // console.log(y);


  // return y.size;


  // console.log(x);

  // for (let value of iterable) {
  //   console.log(value);
  // }



console.log(duplicateCount("")) //, 0);
console.log(duplicateCount("abcde")) //, 0);
console.log(duplicateCount("aabbcde")) //, 2);
console.log(duplicateCount("aabBcde")) //, 2,"should ignore case");
console.log(duplicateCount("Indivisibility")) //, 1)
console.log(duplicateCount("Indivisibilities")) //, 2, "characters may not be adjacent")



// function countDuplicates(str) {
//     var myObj = {},
//         counter = 0;    
//     for(var i = 0; i < str.length; i++){   

//       if(!myObj[str[i]]){
//           myObj[str[i]] = 1;
//       } 
//       else if(myObj[str[i]] < 2) {
//           myObj[str[i]]+=1;
//           counter++;
//       }    
//     }
//     return counter;
// }
