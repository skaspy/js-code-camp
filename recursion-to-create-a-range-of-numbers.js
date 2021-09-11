function rangeOfNumbers(startNum, endNum) {
  if(startNum == endNum){
      return [startNum];
    } else if (startNum < endNum){
      var numbers = rangeOfNumbers(startNum+1, endNum);
      numbers.unshift(startNum);
      return numbers;

    }

};