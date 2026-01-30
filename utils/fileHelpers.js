const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname,'..','data','users.json');

function readUsers()
{
    const data = fs.readFileSync(dataPath,'utf8');
    return JSON.parse(data);
}

function writeUsers(users)
{
    fs.writeFileSync(dataPath, JSON.stringify(users , null ,2));
}

module.exports = {readUsers , writeUsers};

