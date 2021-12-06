const express = require('express');
const app = express()
const port = 3000

const repository = require('./peoploRepository');

app.get('/', async (req, res) => {   
    const output = await renderOutput();
    res.send(output);
});

async function renderOutput() {
    const title = getH1Tag("Full Cycle Rocks!");
    
    const people = await repository.findPeople();
    const peopleList = getListTag(people);

    return title.concat("\n").concat(peopleList);
}

function getH1Tag(content) {
    return "<h1>" + content + "</h1>"
}

function getListTag(people) {
    item = ""

    people.forEach(element => {
        item = item.concat(getLiTag(element)).concat("\n");
    });

    return getUlTag(item);
}

function getLiTag(content) {
    return "<li>" + content + "</li>";
}

function getUlTag(content) {
    return "<ul>" + content + "</ul>"
}

app.listen(port, () => {
    repository.addPerson();
    console.log('Server is running on port ' + port);
});

