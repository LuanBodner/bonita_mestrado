// Lodash library
import "reflect-metadata";
import { createConnection } from 'typeorm';
import express from "express";
import routes from './routes'

var cors = require('cors')

const port = 3000;

const app = express();

createConnection();

app.use(cors())
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));

app.use(express.json());
app.use(routes);

app.listen(port);