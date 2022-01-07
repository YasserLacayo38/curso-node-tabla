const colors = require('colors/safe');
const fs = require('fs');
const crearArchivo=(base=5, listar,hasta)=>{
    return new Promise((resolve, reject)=>{
        
        let salida='';
        for(let i=0; i<=hasta; i++){
            salida+=`${base}${colors.blue('x')}${i} = ${base*i}\n`;
        }
        if(listar){
        console.log(colors.green('==================='));
        console.log(colors.green(`Tabla del ${base}`));
        console.log(colors.green('==================='));
        console.log(colors.red(salida));
        }
    
            let nombreArchivo=null;
            fs.writeFile(`salida/tabla-${base}.txt`, salida, (err)=>{
                if(err){ 
                    reject("El archivo no pudo crearse");
                    throw err;                  
                };
                nombreArchivo=`tabla-${base}`;
                resolve(nombreArchivo);
                
            });
            
    });
    
    
}
/*const crearArchivo= async(base=5)=>{
    try {
        console.log('===================');
        console.log(`Tabla del ${base}`);
        console.log('===================');
        let salida='';
        for(let i=0; i<=10; i++){
            salida+=`${base}x${i} = ${base*i}\n`;
        }
        console.log(salida);
    
            
            fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
                if(err) throw err;
                
            });
            
    
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
        
    
}*/

module.exports={
    crearArchivo
}