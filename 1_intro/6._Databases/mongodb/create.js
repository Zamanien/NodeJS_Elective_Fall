const MongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) throw new Error(error);

    const memes = client.db("memes");

    const favorites = memes.collection("Favourites");

    favorites.insertOne({template: "Hello there", person: "Obi Wan", human: "Sapien", animal: "dunno"}, (error, result) => {
        if (error) throw new Error(error);

        console.log(result);
        client.close();
    });


});




