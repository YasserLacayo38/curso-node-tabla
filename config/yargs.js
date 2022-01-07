
const argv= require('yargs')
                        .options('b',{
                                alias:'base',
                                demandOption:true,
                                type:'number',
                                describe:'es la base de la tabla de multiplicar'
                            })
                        .option('l',{
                                alias: 'listar',
                                type:'boolean',
                                demandOption:false,
                                default: false,
                                describe:'es para saber si quieres la tabla en consola'
                            })
                        .option('h',{
                            alias:'hasta',
                            type:'number',
                            demandOption:false,
                            default:10,
                            describe:'hasta que numero multiplicar'
                        })
                        .check((argv,option)=>{
                                if( isNaN(argv.b)){
                                    throw 'la base tiene que ser un numero'
                                }
                                return true;
                            })
                        .argv;

module.exports= argv;