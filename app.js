// var myage = 'I am 14 years old.'
// alert(myage)

// if(localStorage.getItem('visitCount')) {
//     var visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
//   } else {
//     var visitCount = 1;
//   }
//   localStorage.setItem('visitCount', visitCount);
//   document.write("You have visited this site " + visitCount + " times.");


//   var ageLine = 'My birth year is 2003.';

//   document.write(ageLine + 'Data type of my declared variable is number');



  let visitorName = prompt("Please enter your name:");
  let productTitle = prompt("Enter the product title:");
  let quantity = parseInt(prompt("How many products do you want to order?"));

  let message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on Unofficial Clothing store";
  document.write(message);
