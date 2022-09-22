export function pintarCanciones(canciones){


    let fila=document.getElementById("fila")
    fila.innerHTML=""

    canciones.tracks.forEach(function(cancion){
        
         let imagen=document.createElement("img")
         imagen.classList.add("h-100","w-100","img-fluid")
         imagen.src=cancion.album.images[0].url
 
         let nombre=document.createElement("h3")
         nombre.classList.add("text-dark","h-50","fs-6","text-center")
         nombre.textContent=cancion.name
 
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
         tarjeta.appendChild(audio)
         columna.appendChild(tarjeta)
         fila.appendChild(columna)
     })
    }