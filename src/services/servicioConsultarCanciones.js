//Receta para consumir apis con JS puro

// si yo quiero consumir un api debop saber para donde ir y a que servicio
//debo configurar la URI

const URI="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"

//2. configuro datos especiales o de control en el servidor
const TOKEN=" Bearer BQCt6Pqt3Cq9KmG1oS04riyFX3PPOkwSx2I5TCv45g5yfJbgg8cYTaS-4jjEVEt5NU3aSdWDo7YhmcBfhfK1GyLt7CFEy2r1b8MRBHY8bLtx4Hmo4BvW348DXwWsyZChr5_ZiBQTYTtG4AIAb3HKC007Ld0tJf_Hia16OPK875YddcIAVMY2BBTS5AkJ-XpcvUA"

//3. Configuro la peticioón 
//NOTA: solo post y PUT configuran body
//para js la petición es un objeto
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
} 

//4. arranque pues mijo
//consuma el API
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //garantizo formato JSON5
})
.then(function(respuesta){
    console.log(respuesta) //hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo 
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)
    })
})
.catch(function(respuestaError){
    console.log(respuestaError)
})