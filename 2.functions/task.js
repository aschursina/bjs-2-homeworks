

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
      if (arr[i] < min) {
        min = arr[i];
      } 
      sum += arr[i];
  }
  
  let avg = sum / arr.length;

  return {
    max: max, 
    min: min, 
    avg: parseFloat(avg.toFixed(2))
  };
}


function summElementsWorker(...arr) {
  let sum = arr.reduce((sumArr, a) => sumArr + a, 0);
 /*arr = reduce(sumArr, 0); // 
   function sumArr(accumulator, a) {
   return accumulator + a;
  }
  console.log(arr);*/

  return sum;
}


function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;
  if (arr.length < 1) {
    return 0;
  } 

  min = Math.min(...arr);
  max = Math.max(...arr);
  
  return max - min;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length < 1) {
  return 0; 
  } 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0;
  countEvenElement = 0;
  if (arr.length < 1) {
    return 0;
  } 
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement ++;
      }
    } 
      
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
     const result =  func(...arrOfArr[i]);
     if (result > maxWorkerResult){
      maxWorkerResult = result;
     }
  }
  return maxWorkerResult;
}