function plusMinus(arr) {
  // Write your code here
  let somaPositivo = 0;
  let somaNegativo = 0;
  let somaZero = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      somaPositivo = somaPositivo + 1;
    } else if (arr[i] < 0) {
      somaNegativo = somaNegativo + 1;
    } else {
      somaZero = somaZero + 1;
    }
  }
  console.log((somaPositivo / arr.length).toFixed(5));
  console.log((somaNegativo / arr.length).toFixed(5));
  console.log((somaZero / arr.length).toFixed(5));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
