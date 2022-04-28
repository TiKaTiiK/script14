// 1.

// let array = [5, 25, 89, 120, 36]
// array.push('javascript', 'python');
// array.unshift ('html', 'css');

// console.log(array.length);

// array.pop('html')
// array.shift('python')

// console.log(array);


// 2.

// let array = ['orange', 'banana', 'pear']
// console.log(array.length);

// array.push('apple', 'pineapple')
// console.log(array);

// array.unshift('watermelon')
// console.log(array);

// console.log(array.length);

// array.splice(2,0,'mango')
// console.log(array);

// // let newArray = array.slice(1,6);
// // console.log(newArray);

// array.shift('watermelon')
// array.pop('pineapple')

// console.log(array.length);


// 2.7

// var arr=[
//     'watermelon',
//     'orange',
//     'mango',
//     'banana',
//     'pear',
//     'apple',
//     'pineapple'
//   ];
// var newarr = [];
// for(var i=1; i<arr.length-1; i++) {
//     newarr[i-1]=arr[i];
// }
// console.log(newarr);


// 3.

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray = array.map( x => x / 3 )
// console.log(newArray);


// 4.

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let result = array.filter(Number)
// console.log(result);


// 5. 

// let languages = ['html', 'css', 'javascript', 'python', 'php']
// let newArray = languages.filter(x => x.length > 3)
// console.log(newArray);


// 6.

// let array =  ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator,currentValue) {
//         return accumulator + ' ' + currentValue;
//     }
// )
// console.log(array);


// 7.

// let item = [12, 'google', 32, null, 'yahoo', 25];

// let result = item.map( 
//     x => typeof(x)=='number' ? x*x :
//          typeof(x)=='string' ? x.toUpperCase() : 
//     x
// )
// console.log(result);


// 8.
// var words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// var newwords = words.filter(function (masivi) {
//     if(masivi.includes('M') || masivi.includes('m'))
//     return masivi;
//   });

// console.log(newwords);
