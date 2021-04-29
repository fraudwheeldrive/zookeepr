const apiRoutes = require('./routes/apiRoutes');
const hitmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('zookeepr-public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', hitmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
