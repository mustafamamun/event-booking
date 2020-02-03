require("dotenv").config();

import { Model } from "objection";
import Knex from "knex";
import knexFile from "./knexfile";
// require('./query-builder/soft-delete');

// Init knex from knexfile
const knex = Knex(knexFile);

// Give the knex object to objection.
Model.knex(knex);
