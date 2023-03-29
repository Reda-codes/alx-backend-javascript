// <reference path = "./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
    firstName: 'Guillame',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {...row, age: 23};

console.log(row);

CRUD.updateRow(newRowID, updatedRow);

console.log(row);

CRUD.deleteRow(newRowID);

console.log(row);