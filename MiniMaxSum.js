function miniMaxSum(arr) {
  let arrNew = arr.sort();
  let somaMaior = 0;
  let somaMenor = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    somaMenor = somaMenor + arrNew[i];
  }

  for (var i = 1; i < arr.length; i++) {
    somaMaior = somaMaior + arrNew[i];
  }
  console.log(somaMenor + " " + somaMaior);
}

miniMaxSum([1, 2, 3, 4, 5]);
