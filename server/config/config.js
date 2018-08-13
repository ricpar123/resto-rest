// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de Datos
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/almacen';
} else {
    urlDB = 'mongodb://almacen-user:458ric@ds121312.mlab.com:21312/almacen';
}

process.env.urlDB = urlDB;