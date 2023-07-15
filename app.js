const person1 = {
    fname: "ahmed",
    lname: "hossam",
    age: "20",
    city: "alex"
 }

 console.log(person1)

 const person1Json = JSON.stringify(person1)
 console.log(person1Json)

 const fs = require("fs")
 fs.writeFileSync("data.json" , person1Json)

 console.log(fs.readFileSync("data.json").toString())

 const person1Obj = JSON.parse(person1Json)
 console.log(person1Obj)

 const person2 = {
    fname: "adel",
    lname: "ahmed",
    age: "40",
    city: "cairo"
 }
 const person2Json = JSON.stringify(person2)
 fs.writeFileSync("data.json" , person2Json)

 
 console.log(person2Json)

 fs.writeFileSync("data.json" , person2Json)

 
