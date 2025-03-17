const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const path = require('path');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});