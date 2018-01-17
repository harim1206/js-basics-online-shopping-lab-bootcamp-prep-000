var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var item = {[`${itemName}`] : Math.floor(Math.random()*100)}
 cart.push(item)

 console.log(`${itemName} has been added to your cart.`)

 return cart
}

function viewCart() {
  // write your code here
  var content = ``

  if(cart.length===0){
    return `Your shopping cart is empty.`
  }else{
    for(var i=0; i<cart.length; i++){
      var key = Object.keys(cart[i])[0]
      var price = cart[i][key]

      if(i!==cart.length-1){
        console.log(`${key} at ${price}, `)
        content += `${key} at ${price}, `
      }else{
        content += `${key} at ${price}.`
      }
    }

    console.log(`In your cart, you have ${content}`)
    return `In your cart, you have ${content}`
  }

}

function total() {
  // write your code here
  var total = 0
  if(cart.length===0){
    return total
  }else{
    for(var i=0; i<cart.length; i++){
      var key = Object.keys(cart[i])[0]
      var price = cart[i][key]
      total += price
      console.log(`${i}: ${total}`)
    }
    return total
  }
}


function removeFromCart(item) {
  // write your code here
  console.log(cart)
  var itemIndex = 0
  for(var i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      //remove item from this array index
      itemIndex = i
      console.log(itemIndex)

      cart.splice(itemIndex,1)

      console.log(`cart without ${item}:  `)
      console.log(cart)
      return cart
    }
  }

  console.log(`That item is not in your cart.`)
  return `That item is not in your cart.`

}



function placeOrder(cardNumber) {

  var totalAmt = total()
  if(cardNumber===undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }else{
    cart.splice(0,cart.length)
    
    return `Your total cost is $${totalAmt}, which will be charged to the card ${cardNumber}.`
  }
}
