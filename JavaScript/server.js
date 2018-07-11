const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const util = require('util');
const myGraphQLSchema =require('./schema'); // ... define or import your schema here!
const PORT = 3000;
const DataLoader = require('dataloader');
const parseXML = util.promisify(require('xml2js').parseString);
const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.listen(PORT);