function sortArray(array) {
  let arr =[]
  for(let i = 0; i <array.lenght; i++)
  {
      if (array[i] < array[i+1])
      arr[i] = array[i]
      else
      temp = array[i]
      array[i] = array[i+1]
      array[i+1] = temp
  }
  return array;
}

console.log(sortArray([2 , 4 , 9 , 23 , 435]))
console.log(sortArray([32 , 44 , 9 , 3 , 8]))
console.log(sortArray([99 , 314 , 8 , 200 , 23]))
console.log(sortArray([72 , 86 , 23 , 70 , 1]))
console.log(sortArray([55 , 64 , 1 , 11 , 4]))
console.log(sortArray([7]))