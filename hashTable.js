"use strict";


const DoublyList = require ("./doublyList");




class HashTable {


  constructor () {

    this. table = {};

  }



  verify (hashKey) {

    if (typeof this. table [hashKey]  ===  "undefined") {

      return "undefined";

    }


    if (typeof this. table [hashKey]  ===  "object") {

      return "object";

    }

  }



  hashing (key) {

    const hashKey = key / 10;


    return hashKey;

  }



  createList () {

    const list = new DoublyList ();


    return list;

  }



  add (ke, value = null) {

    const message = {

      "failure": "no-valid key equ undefined and not number",

      "addedInTable": "key and item added this hash table",

      "addedInList": "key conflict! Item key added in list this key this hash table",

    };


    if (typeof key === "undefined" || typeof key !== "number") {

      return message. failure;

    }


    const hashKey = this. hashing (key);


    if (this. verify (hashKey) === "undefined") {

      this. table [hashKey] = value;


      return message. addedInTable;;

    }


    if (this. verify (hashKey) === "object") {

      this. table [hashKey]. add (value);


      return message. addedInList;

    }


    const tableValue = this. table [hashKey];


    this. table [hashKey] = this. createList ();

    this. table [hashKey]. add (value);


    return message. addedInTable;

  }



  search (ke) {

    const message = {

      "failure": "no-valid key equ undefined and not number",

      "addedInTable": "key and item added this hash table",

      "addedInList": "key conflict! Item key added in list this key this hash table",

    };


    if (typeof key === "undefined" || typeof key !== "number") {

      return message. failure;

    }


    const hashKey = this. hashing (key);


    if (this. verify (hashKey) === "object") {

      console. log (this. table [hashKey]);


      return message. addedInTable;;

    }



    this. table [hashKey]. print ();


    return true;

  }



  remove (key) {

    const message = {

      "failure": "Key equ undefined or not number",

      "success": "Value binded key successs deleted",

    };


    if (typeof key === "undefined" || typeof key !== "number") {

      return message. failure;

    }


    const hashKey = this. hashing (key);


    delete this. hashTable [hashKey];


    return message. success;

  }

}




module. exports = HashTable;
