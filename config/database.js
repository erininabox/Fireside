const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, 
  { useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
