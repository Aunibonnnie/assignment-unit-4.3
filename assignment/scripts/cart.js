console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// - Create a global variable named `basket` and set it to an empty array.
let basket = [];

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
function addItem( newItem ){
    console.log( 'addItem:', newItem );
    basket.push( newItem );
    return true;
}

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(){
    console.log( 'in listItems' );
    for( let i=0; i<basket.length; i++ ){
        console.log( basket[ i ]);
    }
    return true;
}

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//   - do not use `basket = []` to reset the array
function empty(){
    while(basket.length > 0) {
        basket.pop();
    }
}
// or 
// function empty(){
//     basket.length = 0;  
// }

// Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull(){
    if (basket.length >= maxItems ) {
        return true;
      } else {
        (basket.length < maxItems )
        return false;
      }
    }

    // other code
//     for (let i = 1; i < maxItems.length; i++) {
//         if (maxItems[i] > basket) {
//             basket = maxItems[i];
//         }
//     }
//     return true;
// }

// - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
// - If an item was added to the array, return `true`
// - If there was no room and the item could not be added return `false`
function isFull(){
    if (basket.length === maxItems ) {
        return true;
      } else {
        (basket.length < maxItems )
        return false;
      }
    }

//  Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
