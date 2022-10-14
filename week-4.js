
/** Here’s your first exercise for this section. I want you to create an address object with three properties, street, city, and zip code 
using the object literal syntax. When you do that, then create a function called showAddress that takes an address object and displays all the 
properties of this object along with their value. */

const objAddress = {
  street: "Molinear tower",
  city: "Lagos",
  zip_code: 12345
}

function showAddress(anObj){
  for(let prop in anObj){
    console.log(`${prop}: ${anObj[prop]}`)
  }
}
  
  showAddress(objAddress)

/** So in the last exercise we used the object literal syntax to initialize an address object. In this exercise, I want you to initialize an address 
object, first using a factory function and then using a constructor function. So your exercise is to write two different functions, one is a factory 
function, the other is a constructor function, to initialize an address object.  */


/// Exercise 2 ///

// Factory function

function createAddress(street, city, zipCode){
  return{
    street,
    city,
    zipCode,
    showAddress(){
    	console.log(`Full address: ${street}, ${city}, ${zipCode}`)
    }
  }
}

const addressOne = createAddress("Molinear tower", "Lagos", 12345)

console.log(addressOne["street"]) // 'Molinear tower'
console.log(addressOne["city"]) // 'Lagos'
console.log(addressOne.showAddress()) // 'Full address: Molinear tower, Lagos, 12345'


// Constructor Function //

function CreateAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.showAddress = function(){
    	console.log(`Full address: ${this.street}, ${this.city}, ${this.zipCode}`);
    }
}

const addressTwo = new CreateAddress("Molinear tower", "Lagos", 12345)

console.log(addressTwo) // return { street: 'Molinear tower', city: 'Lagos', zipCode: 12345, showAddress: function (){ console.log(`Full address: ${street}, ${city}, ${zipCode}`) } }
console.log(addressTwo.street) //'Molinear tower'
console.log(addressTwo.showAddress()) //'Full address: Molinear tower, Lagos, 12345'



/// Exercise 3 ///

// using areEqual function
// Helper function: to check if both objec has same properties
// INPUT: takes 2 object parameters as input
// OUTPUT: returns true if they have same properties and false if otherwise
function areEqual(addressOne, addressTwo){
  // loop through both
  let addOneKeys = Object.keys(addressOne);
  let addTwoKeys = Object.keys(addressTwo);

  // first is to check if they have same length
  if(addOneKeys.length === addTwoKeys.length){
    for(let i = 0; i < addOneKeys.length; i++){
      if(addOneKeys[i] !== addTwoKeys[i]){
         return false
      }
    }
    
    // then they have same property
    return true
  }
  
  return false
  
}

const addressThree = new CreateAddress("Mo tower", "Lagos", 54321);
const addressFour = new CreateAddress("Molinear tower", "Lagos", 12345)

console.log(areEqual(addressThree, addressFour)) // true

addressThree["country"] = "Sweden"; // one more property is added
console.log(areEqual(addressThree, addressFour)) // false
