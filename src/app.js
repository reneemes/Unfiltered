require('dotenv').config();
const mysql = require('mysql2');
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 8080;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// routes for Journal and Mood endpoints
app.use('/journal', journalRoutes);
app.use('/mood', moodRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: 'Something went wrong',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});