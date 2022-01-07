const colors = require('colors/safe');
const { option } = require('yargs');
const {crearArchivo}= require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

//console.log(argv);


crearArchivo(argv.b, argv.l,argv.h)
.then( mensaje=> console.log(colors.rainbow(`el archivo ${mensaje} pudo crearse`)))
.catch(err=>console.log(err));
