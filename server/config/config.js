//============
// Puerto
//============
process.env.PORT = process.env.PORT || 3000;

//============
// Entorno
//============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//============
// DATABASES
//============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://rafael:rafael123@cafe-pkoom.mongodb.net/test?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;