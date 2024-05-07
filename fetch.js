let fetchdata = async() =>{
    let response = await fetch('https://jsonplaceholder.org/users')
    let data = await response.json()
    console.log(data);


    
    data.map((p)=>{
        let newelement =  document.getElementById("first-name")
        newelement.textContent += "firstname:" + " " + p.firstname + " "
        console.log(newelement);
        document.body.appendChild(newelement)

        let newElement = document.getElementById("last-name")
        newElement.textContent += "lastname:" + " " + p.lastname + " "
        console.log(newElement);
        document.body.appendChild(newElement)

        let newEl = document.getElementById("e-mail")
        newEl.textContent += "email:" + " " + p.email
        console.log(newEl);
        document.body.appendChild(newEl)

    })
}

fetchdata()


