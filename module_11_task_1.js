function typeOfNumber() {
    const arr = [0, 1, 2, 3, 4, NaN, 5, 6, 0, 7, 8, 9, 0, null];
    let even = 0,
        odd = 0,
        zero = 0;
    for (let i = 0; i < arr.length; i++) {
       if (typeof (arr[i]) === 'number' && !isNaN(arr[i])) {
          if (arr[i] === 0) {
             zero += 1;
          } else if (arr[i] % 2 === 0) {
             even += 1;
          } else {
             odd += 1;
          }
       }
    }
    console.log('The quantity of odd numbers is:', odd);
    console.log('The quantity of even numbers is:', even);
    console.log('The quantity of zeros is:', zero);
    };
    
    typeOfNumber();
    