const testArray = [5,"+",5,"*",2];

function calculateArray(arr){
  return arr.reduce((el,accu,indx) => {
    if(indx == 0 && !isNaN(el)){
      return el
    }
    if(isNaN(el)){

    }else{
      return accu
    }
  })
};
