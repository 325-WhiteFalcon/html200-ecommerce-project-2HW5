var cart = []

// Click handler function for each product's purchase button.
function cartAdd(product) {
  event.preventDefault()
  
  // Add product to cart.
  // Remove product from cart.
  var i = containsObject(product)
  if (i == -1) {
    cart.push(product)
  } else {
    cart.splice(i, 1)
  }

  createCartConsole()
  createCart()
}

// create cart contents for console
function createCartConsole() {
  

// Indicate number of items in the cart:
  console.log("")
  if (cart.length == 0){
    console.log("0 items in cart")
  }
  else if (cart.length == 1) {
    console.log("1 item in cart:")
  }
  else {
    console.log(cart.length + " items in cart:")
  }
 
  // Show items in cart:
  cart.forEach(function(element) {
    console.log(element.price + ": " + element.name)
  })
  
  console.log("------------------------")
  console.log("$" + totalCost() + " total")

  // display cart count next to cart icon
  document.getElementById("cartQty").textContent = cart.length
}
  
// create cart contents for webpage
function createCart() {
  var cartContent = document.getElementById("cartInfo")  
  cartContent.innerHTML = ''


// show/hide cart, initially hidden/empty
var isCartVisible = false
document.getElementById("cartInfo").style.display = 'none'

function showHideCart() {
  var div = document.getElementById("cartInfo")
  if (isCartVisible){
    div.style.display = 'none'
    isCartVisible = false 
  } else {
    div.style.display = 'block'
    isCartVisible = true
  }  
}

// See if cart contains product
function containsObject(obj) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name == obj.name) {
      return i;
    }
  }
  return -1;
}

function totalCost(){
    var total = 0
    for (var i = 0; i < cart.length; i++) {
      total = total + Number(cart[i].price.substr(1))
    }
    // round and truncate cents
    total = (Math.round(total * 100) / 100).toFixed(2)
    return total;
}
