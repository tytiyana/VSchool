const express = require(`express`);
const app = express();

const bounties = []

app.use(express.json())

app.listen(8000, () => {
    console.log(`App is listening on port 8000!`)
})

app.get(`/`, (req, res, next) => {
    res.send(bounties);
});

app.post(`/bounties`, (req, res, next) => {
    const newBounty = req.body
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the database!`)
}) 