function sumarLento( numero ) {
    let promise = new Promise( function(resolve, reject)  {
        setTimeout( function() {
            resolve( numero + 1 );
        }, 900); 
    });

    return promise;
} 

let sumarRapido = ( numero ) =>  {
    let promise = new Promise( function(resolve, reject)  {
        setTimeout( function() {
            resolve( numero + 1 );
        }, 100); 
    });

    return promise;
}

let valores = [sumarLento(5), sumarRapido(8)];

Promise.race( valores )
    .then( respuestas => console.log(respuestas))
    .catch( error => console.log(error))