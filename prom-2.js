function sumarUno( numero ) {
    let promise = new Promise( function(resolve, reject)  {

        console.log(numero);
        if ( numero>= 7) {
            reject('El numero es muy alto');
        }
 
        setTimeout( function() {
            resolve( numero + 1 );
        }, 800); 
    });

    return promise;
} 

sumarUno( 5 )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .catch(error => {
        console.log(error);
    });