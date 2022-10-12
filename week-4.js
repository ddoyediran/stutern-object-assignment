
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
