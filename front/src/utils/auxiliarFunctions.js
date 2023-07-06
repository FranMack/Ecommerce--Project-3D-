

export function finalPrice(arrayJson) {
    let array = JSON.parse(arrayJson);

  if(array===null){return 0}
  
    return array.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }

  