function sumarUno( numero ) {
    let promise = new Promise( function(resolve, reject)  {

        setTimeout( function() {
            resolve( numero + 1 );
        }, 800); 
    });

    return promise;
} 

sumarUno( 5 )
    .then( sumarUno )
    .then( sumarUno )
    .then( nuevoNumero => {
        console.log(nuevoNumero);
    })