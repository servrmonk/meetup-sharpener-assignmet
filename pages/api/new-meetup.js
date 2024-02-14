// import { MongoClient } from "mongodb";
import MongoClient from "mongodb/lib/mongo_client";

async function handler(request, response) {
  try {
    if (request.method === "POST") {
      const data = request.body;

      const client = await MongoClient.connect(
        "mongodb+srv://roushankumarsingh2018:Raushan@cluster0.uh9dynj.mongodb.net/meetups?retryWrites=true&w=majority"
        
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close();

      response.status(201).json({ message: "Meetup inserted!" });
    }
  } catch (err) {
    console.log("Error ", err);
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export default handler;


// cluster -> browse collection 