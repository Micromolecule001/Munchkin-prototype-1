const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://God:admin@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
      console.error('Error connecting to MongoDB', err);
      return;
    }
  
    const collection = client.db("test").collection("devices");
  
    // Insert a document
    collection.insertOne({ name: 'Test Device', price: 999 }, (err, result) => {
      if (err) {
        console.error('Error inserting document', err);
        return;
      }
      console.log('Document inserted:', result.ops[0]);
  
      // Fetch the document
      collection.find({ name: 'Test Device' }).toArray((err, devices) => {
        if (err) {
          console.error('Error fetching devices', err);
          return;
        }
        console.log('Fetched devices:', devices);
      });
    });
  
    client.close();
  });