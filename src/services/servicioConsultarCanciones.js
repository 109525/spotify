let URI="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US";

let buscar =document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()
    let artista=document.getElementById("artista").value 
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN=" Bearer BQCHZE5u-LXkBBj-9FyYBsxLVosopsuX5RlOH1T3CtXkXcxRF2V4NH0Fj9RvPah8_gB7YHqRQZBqRphBjfDOxQEjunBLeBuVI3n3RdWgb65ysssWLNnEhuIuG9HuYr6LDJPV9QHhtXF8gjyDMX-rtzLdfDRX14PECfBRJqxw0s5clWnaE-u3fWLPJ4omFmZCca8"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    } 
    fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //garantizo formato JSON5
})
.then(function(respuesta){
    console.log(respuesta) //hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo 
    let fila=document.getElementById("fila")
    fila.innerHTML=""
    respuesta.tracks.forEach(function(cancion){
       /*console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)*/
        let imagen=document.createElement("img")
        imagen.classList.add("h-100","w-100","img-fluid")
        imagen.src=cancion.album.images[0].url

        let nombre=document.createElement("h3")
        nombre.classList.add("text-dark","h-50","fs-6","text-center")
        nombre.textContent=cancion.name

        let popularity=document.createElement("p")
        popularity.classList.add("text-center")
        popularity.textContent= textcontent="popularidad: "+ cancion.popularity



        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta =document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","bg-secondary")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        //padres e hijos
        
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(popularity)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})
.catch(function(respuestaError){
    console.log(respuestaError)
})
})






//Receta para consumir apis con JS puro

// si yo quiero consumir un api debop saber para donde ir y a que servicio
//debo configurar la URI



//2. configuro datos especiales o de control en el servidor


//3. Configuro la peticioón 
//NOTA: solo post y PUT configuran body
//para js la petición es un objeto


//4. arranque pues mijo
//consuma el API
