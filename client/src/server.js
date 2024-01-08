// index.js

const express = require('express');
const fs = require('fs');
const app = express();

// Endpoint for getting metadata dynamically
app.get('/get_meta_data/:module_name/:screen_name', (req, res) => {
  const { module_name, screen_name } = req.params;
  const filePath = `./src/ui-config/specification/${module_name}/${screen_name}.json`;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    const metaData = JSON.parse(data);
    res.json(metaData);
  });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
