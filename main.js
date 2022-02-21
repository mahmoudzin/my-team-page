/*
1- Call the elemnt 
2- create the element
3- loop the element
*/ 

// The names of the people
let people = [
    {name: "Bill Mahoney", jop: "Product owner", photo: "imeges/photo1.png"},
    {name: "Saba Cabrera", jop: "Art director", photo: "imeges/photo2.png"},
    {name: "Shae Le", jop: "Tech Lead", photo: "imeges/photo3.png"},
    {name: "Skylah Lu", jop: "UX Designer", photo: "imeges/photo4.png"},
    {name: "Griff Richards", jop: "Developer", photo: "imeges/photo5.png"},
    {name: "Stan John", jop: "DEverloper", photo: "imeges/photo6.png"}
]
// Get the Parent of the elements
let parent = document.querySelector(".members");
// Create the element Row
let row = document.createElement("div");
// Add Row Class to the Row Elements
row.classList.add("row");

// loop and create children elemnts
people.forEach (person => {
    // Create div container 
    let container = document.createElement("div");
    container.classList.add("col-xs-12");
    // create Col ELement
    let col = document.createElement("div");
    // Add Grid class to the col elements
    col.classList.add("col-md-4", "person-box", "col-sm-6", "col-xs-12");
    // create Img element
    let img = document.createElement("img");
    // Add Img Source 
    img.src = person.photo
    // Create Div for Icons Parent
    let iconsParent = document.createElement("div");
    iconsParent.classList.add("icons-parent")
    iconsParent.innerHTML = `<img src='imeges/facebook.png'/><img src='imeges/twitter.png'/>
    <img src='imeges/linkedin.png'/><img src='imeges/gmail.png'/>`
    // Create P element for name 
    let name = document.createElement("h4");
    name.innerText = person.name 
    // Create P elemnt for title
    let jop = document.createElement("p");
    jop.innerText = person.jop 
    // Append all elements for Each Img to col Element
    container.append(img)
    container.append(iconsParent)
    container.append(name)
    container.append(jop)
    // append col to container element
    col.append(container)
    //append col to row Element
    row.append(col)
})
// append the row for parent element
parent.append(row);