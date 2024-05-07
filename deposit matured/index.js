
const year = parseInt(prompt("Enter the number of year in YYYY !"))

const a = new Date() 

const d =  a.getFullYear()
console.log(d);
let getYear = d + year 
let y = document.getElementById("date-el") 
y.textContent = getYear