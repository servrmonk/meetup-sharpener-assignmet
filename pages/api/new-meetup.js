// api/new-meetup
//only post request is trigger POST/api/new-meetup

import { MongoClient } from "mongodb";

export default async function handler(request, response) {
  //request: incoming request (headers,request body , method)
  if (request.method === "POST") {
    const data = request.body;

    // const { title, image, address, description } = data;
    // npm i mongodb
    // cluster -> connect-> connect ur apk -> connect mongodb native driver
    // https://cloud.mongodb.com/v2/65cc5baa957e4711a4372c30#/clusters/detail/Cluster0/connect?clusterId=Cluster0

    const client = MongoClient.connect(
      "mongodb+srv://roushankumarsingh2018:3XMq83a6G6aFoOvS@cluster0.uh9dynj.mongodb.net/apnaDatabase?retryWrites=true&w=majority"
    ); //mongodb+srv://roushankumarsingh2018:<password>@cluster0.uh9dynj.mongodb.net/?retryWrites=true&w=majority connect wants this string
    const db = client.db();
    const meetupsCollection = db.collection("newName");
    // mongodb is nosql db that works with collection full of documents,  collection is kind of table in sql database and document could be ur entries in ur tables

    const result = await meetupsCollection.insertOne(data) //one of the query commands for inserting one new document into this collection
    console.log(result);

    client.close() //to close the db collection
    // then we need response to sending back the response
    response.status(201).json({message:'Meetup inserted!'});//set http status code of the response , 201 status code  forsomething inserted successfully succesfully u can chain json call here to prepare the json data that will be added to outgoing response
  }
}
