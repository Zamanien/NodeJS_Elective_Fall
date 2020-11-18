const MongoClient = require('mongodb').MongoClient; 

const connectionUrl = 'mongodb://localhost:27017'; 


MongoClient.connect(connectionUrl, {useUnifiedTopology: true }, (error, client) => {

    const memes = client.db('memes'); 
    const favourites = memes.collection('Favourites'); 

    /*
    //Updates single item in DB 
    favourites.updateOne({type:'kajkage'}, {$set:{keyboard:'UHK'}}, (error, theResult) => {
        if(error) throw new Error(error); 

        console.log(theResult);
        client.close(); 
    });
    */
    

    
    favourites.updateMany({template: 'Hello there'}, {$set:{keyboard:'UHK'}}, (error, result2) => {
        if(error) throw new Error(error);

        console.log(result2); 
        client.close;
    });
    

});