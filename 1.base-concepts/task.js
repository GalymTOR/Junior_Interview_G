function solveEquation(a, b, c) {
  let arr=[];

  let D=(b*b)-(4*a*c);

  if (D<0){
    let arr=[];
  }
  if (D==0){
    arr.push(-b/(2*a));
  }
  if (D>0){
    arr.push((-b + Math.sqrt(D) )/(2*a));
    arr.push((-b - Math.sqrt(D) )/(2*a));
  }
  
  return arr; // array
}
