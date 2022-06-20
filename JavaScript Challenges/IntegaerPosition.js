function lessOrMoreThanZero(number) {
    if (number > 0)
    return "Greater than zero";
    else if (number <0)
    return "Less than zero";
    else
      return "Equal to zero";
    
  }

  console.log(lessOrMoreThanZero(9));
  console.log(lessOrMoreThanZero(0));
  console.log(lessOrMoreThanZero(-2));
  console.log(lessOrMoreThanZero(-3));
  console.log(lessOrMoreThanZero(49));
  