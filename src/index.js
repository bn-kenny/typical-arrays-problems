
exports.min = function min (array) {
  if(!array){
    return 0;
  }else{
    let res=0;    
    for(let val of array){
      res = Math.min(res, val);
    }
    return res;
  }   
}


exports.max = function max (array) {
  if(!array){
    return 0;
  }else{
    let res=0;    
    for(let val of array){
      res = Math.max(res, val);
    }
    return res;
  }   
}

exports.avg = function avg (array) {
  if(!array||array.length==0){
    return 0;
  }else{
    let res=0;    
    for(let val of array){
      res = res + val; 
    }
    return res = res / array.length;
  }   
} 


