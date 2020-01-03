const mongodb = require("mongodb");
const uri = "mongodb+srv://daomtthuan:V7gPx8TOmdWt6T16@daomtthuan-83mbv.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function getCollection() {
  return client.db("rfid-checkin").collection("student");
}

client.connect(err => {
  if (err) {
    console.log(err);
  } else {
    const collection = getCollection();
    collection.find({}).toArray((err, students) => {
      console.log(students);
      client.close();
    });
  }
});
