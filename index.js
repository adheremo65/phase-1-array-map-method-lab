const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
//}
function titleCased(array2) {
  return tutorials.map((element)=>(element.split(' ').map((value) => value[0].toUpperCase()+ value.slice(1)).join(' ')))}


// function titleCased(array1){
//   let array2 = [];
//  for (let element of array1){
//     array2.push(element.split(' ').map((value)=> value[0].toUpperCase()+ value.slice(1)).join(' '))
//  }
//  return array2;
// }