function subArrays(arr1, arr2) {
  arr3 =[]
  for (let i =0 ; i < arr2.length; i++)
  {
      arr3[i] = arr2[i] - arr1[i];
  }
  return arr3
}


console.log(subArrays([4 , 2 , 88], [2 , 4 , 88]))
console.log(subArrays([93 , 22 , 7], [-3 , 4 , 0]))
