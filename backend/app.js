const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
//middleware functions are executed sequentially in the order they are added 
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // Destination directory for uploaded images
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname) // Unique filename
    }
  });
  const upload = multer({ storage: storage });

/* DEFINE API ROUTES */

app.post('/upload', (req, res) => {
    // Handle image upload logic here
    // For example, you can use multer to save the uploaded image
    console.log("post")
});

app.get('/get', (req, res) => {
  console.log("get")
});

app.put('/put', (req, res) => {
   console.log("update");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

