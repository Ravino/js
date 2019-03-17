"use strict";


const fs = require ("fs");

const HashTable = require ("./hashTable");




const hashTable = new HashTable ();


fs. readFile ("./data", (err, data) => {

  if (err) {

    console. log (err);


    return err;

  }


  const dataSet = data. toString ();


  const dataSetStrs = dataSet. split ("\n");


  for (const i in dataSetsStrs) {

    dataSetsStrs [i] = dataSetsStrs [i]. split (" ");

  }



  return "undefined";

});
