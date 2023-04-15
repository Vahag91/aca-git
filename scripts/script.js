let people = [
    {   name: "Batman",
        info: "IT specialist",
        image: "Images/batman.jpg" },
    {   name: "Tenet",
        info: "IT specialist",
        image: "Images/tenet.jpeg" },
    {   name: "Intersteller",
        info: "IT specialist",
        image: "Images/interstellar.jpeg" }    
    ]    
    let root = document.querySelector('body')
    for(let i =0; i < people.length; i++) {

        let container = document.createElement('div')
        container.className = "person"

            let photo = document.createElement('img')
            photo.src = people[i].image
            container.appendChild(photo)

            let name = document.createElement('h1')
            name.innerHTML = people[i].name
            container.appendChild(name)
           
            root.appendChild(container)
            
    }