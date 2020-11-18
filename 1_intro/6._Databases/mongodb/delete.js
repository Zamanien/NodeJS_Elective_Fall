const e = require("express");
const { Db } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;

const connectionUrl = 'mongodb://localhost:/27017'; 

MongoClient.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {

    const memes = client.db('memes');
    const favourites = memes.collection('Favourites');

    /*
    favourites.deleteOne({template: 'Hello there'}, (error, result) => {
        if(error) throw new Error(error);

        console.log(result);
        client.close(); 
    });
    */

    favourites.deleteMany({template: 'Hello there'}, (error, result2) => {
        console.log(result2); 
        client.close(); 
    })

}); 