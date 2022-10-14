
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

/** Question: 
In this exercise, we're going to use the constructor function that we created in the last exercise to create two address objects, address1 and address2. 
I want you to create two functions. One is called areEqual, so we pass two address objects and we check to see if these two objects are equal. 
Now as I told you before, objects are reference types, so we can have two objects with the exact same properties, but these objects are in different 
memory locations, so when we use the equality operator we're essentially checking to see if these objects have the same reference. Now, to properly 
check to see if two objects are equal, we need to check their properties, we need to make sure that all their properties are equal. So that's the job of 
this function areEqual. If all the properties of these two objects are equal, this function should return true, otherwise it should return false. 
Now the other function I want you to write is areSame. And this function simply tells us if address 1 and address 2 are pointed to the exact same object. 
In other words, they're referencing the same object. Go ahead and solve this.
*/

// using areEqual function "Does a shallow check"
// Helper function: to check if both objects has the same properties
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

const addressThree = new CreateAddress("Mo tower", "Abuja", 54321);
const addressFour = new CreateAddress("Molinear tower", "Lagos", 12345)

console.log(areEqual(addressThree, addressFour)) // true

addressThree["country"] = "Sweden"; // one more property is added
console.log(areEqual(addressThree, addressFour)) // false


// using areSame function
// Helper function: to check if both objects reference the same object
// INPUT: takes 2 object parameters as input
// OUTPUT: returns true if they reference same object and false if otherwise
function areSame(addressOne, addressTwo){
  if(addressOne === addressTwo){
    return true
  }
  
  return false;
}

console.log(areSame(addressThree, addressFour)) // false

const addressFive = addressThree

console.log(areSame(addressThree, addressFive)) // true



/// Exercise Four ///
/**
In this exercise I want you to create a blog post object with these properties. title, body, author, views, which represents the number of 
times this post has been viewed. Comments, now each comment should have a couple properties, author and body. And finally, another property, 
that each post should have is isLive. Now that can be either true or false. So once again you should use the object literal syntax to create and 
initialize a blog post. Give each property some value, the actual value doesn't really matter. I just want you to get comfortable with the object 
literal syntax.
*/


let blogPost = {
  title: "God is Great!",
  body: "Lorem nostru exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute esse cillum dolore eu fugiat nulla pariatur",
  author: "Jane Doe",
  views: 5000,
  comments:{
    commentOne: {
      author: "Johan D",
      body: "100 percent on point"
    }
  },
    isLive: true
}


blogPost["comments"].commentTwo = {
  author: "XXD",
  body: "I don't agree with JD"
}


console.log(blogPost)


