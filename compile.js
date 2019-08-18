const path = require('path');
const fs = require('fs');
const solc = require('solc');

const votepath = path.resolve(__dirname, 'contracts', 'Voting.sol');
const source = fs.readFileSync(votepath, 'utf8');

console.log(solc.compile(source, 1));