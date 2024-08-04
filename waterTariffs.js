//use validation
let totalWater = prompt("How much water did your household used in kl?");

//took me a while to figure out, but this is the way I found that works
let stepTwo = Number(totalWater - 6);
let stepThree = Number(totalWater - 10.5);
let stepFour = Number(totalWater - 35);

if (totalWater <= 6) {
  alert("Your total amount is R" + totalWater * 15.73);
} else if (totalWater > 6 && totalWater <= 10.5) {
  alert("Your total amount is R" + (94.38 + stepTwo * 22.38));
} else if (totalWater > 10.5 && totalWater <= 35) {
  alert("Your total amount is R" + (329.37 + stepThree * 31.77));
} else {
  alert("Your total amount is R" + (1441.32 + stepFour * 69.76));
}
//checked the calculations separately
