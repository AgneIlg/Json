// Import required modules
const express = require('express');

// Create an instance of express app
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for a sample API endpoint
app.get('/api/sample', (req, res) => {
  res.json({ message: 'This is a sample API endpoint' });
});

// Define a route for handling 404 errors
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
