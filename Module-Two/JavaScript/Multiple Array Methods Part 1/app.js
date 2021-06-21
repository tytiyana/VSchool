const people = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const matureAudiencesOnly = people.filter(people => people.age >= 18)
console.log(matureAudiencesOnly)

const aToZ = matureAudiencesOnly.sort((a,b) => a.lastName < b.lastName ? -1 : 1)
console.log(aToZ)

const domReady = aToZ.map(aToZ => `<li>${aToZ.firstName} ${aToZ.lastName} is ${aToZ.age}</li>`)
console.log(domReady)