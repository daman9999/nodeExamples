// import the database file
const { insert } = require('./insert');
const dbConnect = require('./MongoDB');

// making a connection with MONGOdb


dbConnect();
insert();