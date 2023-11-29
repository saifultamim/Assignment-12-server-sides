const express=require('express')
const app=express()
const cors=require('cors')
const port = process.env.PORT || 5000

app.use(cors(
//   {
//     origin: ['http://localhost:5173'],
//     credentials:true
// }
))
app.use(express.json())

app.get('/',(req,res)=>{
    const user='connection successfully'
    res.send(user)
  })
  app.get('/firstTime',(req,res)=>{
    const user={name:'rakib',roll:'2A',location:'airport'}
    res.send(user)
  })

//===========================database start====================================

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Assignment-12:A8t9Ons3Fqme7trd@cluster0.qg0rmqm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//=====================database collection strt===================



//======================database collection end===================
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    //===================database code start===============================

  

    //====================database code end=================================
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

//===========================database end======================================

  app.listen(port,(req,res)=>{
    console.log(`port number ${port}`)
})
