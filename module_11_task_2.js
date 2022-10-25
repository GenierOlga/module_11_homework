let Number = +prompt('Enter any number up to 1000');

function sympleNumber(){
   let x = true;
   if (1 < Number && Number <= 1000) {
         for (let i = 2; i < Number; i++) {
         if (Number % i === 0) {
            x = false;
         }
      }
      if (x === true) {
         console.log('The number is symple')
      }
      if (x === false) {
         console.log('The number is composite')
      }
   } else {
      console.log('Data is not correct!');
   }
}

sympleNumber()