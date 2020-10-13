function multiplesOf3and5(number){
  let sum_set = new Set(); 
  let sum = 0;
  for (let i = 0; i < number; i++){
    if (i % 3 == 0){
      sum_set.add(i);
    } 
    }
  for (let i = 0; i < number; i++){
    if (i % 5  == 0){
        sum_set.add(i);
       }
       }


  let lst = Array.from(sum_set);
  for (let i = 0; i < lst.length; i++){
    sum = sum + lst[i];
  }
  return sum;
  }