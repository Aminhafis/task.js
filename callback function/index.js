const s = parseInt(prompt('Enter a side of the square'))

const Area = function (s){
 return (s*s)                           
}

const perimeter = function (s){
    return (4*s)
}

const calculate = function(s, logic){

    return logic(s)
    
}

console.log(calculate(s,Area))
console.log(calculate(s,perimeter))

let x = document.getElementById("area-rl")
x.textContent = 'Area = ' + calculate(s,Area)

let y = document.getElementById("perimeter-rl")
y.textContent = 'Perimeter = ' + calculate(s,perimeter)


