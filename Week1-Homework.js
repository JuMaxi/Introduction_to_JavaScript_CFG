//Alert
window.alert("Let's calculate your age!")

//Constants variables
const greetings = "Hello "
const name = prompt("What is your name? ")
const gender = prompt("What is your gender? ")
const year = prompt("What year did you born? ")
const currentyear = 2023

if(year > currentyear){
  //Alert
  window.alert("The year must be less or equal the current year. Change the year to continue.")
}
else{
  const calculate = currentyear - year
  
  //Contatenation
  const answer = greetings + name + "!"
  console.log(answer)

  //Interpolation
  const age = `You are ${calculate} years old, and your gender is ${gender}.`
  console.log(age)
}

//Guessing a random number, using alert and Math.random()
window.alert("Now, let's guess a number!")
const number = prompt("Choice a random number, between 0 and 10: ")

//Checking if the number is valid.
if(number < 0 || number > 9){
  window.alert("The number must be greater than 0 and less than 10. ")
}
else{
  //Using Math.random()
  function RandomNumberInt(N){
  return Math.floor(Math.random() * N);
  }
  const random = RandomNumberInt(10)
  
  //Checking if the chosen number is equal to random number
  if(random == number){
    console.log("Congratulations 🤗! The chosen number " + number + "is the Random Number " + random + ".")
  }
  else{
    console.log("Sorry 😔. The chosen number " + number + " is not the Random Number " + random + " try again!")
  }
}
