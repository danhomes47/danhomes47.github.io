
function CargaUsuario() {
    const url =' https://randomuser.me/api/ ';
/*
    let avatar = document.getElementById('avatar');
    let fullname = document.getElementById('fullname');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let city = document.getElementById('city');
    let btn = document.getElementById('btn');
*/

    const titulacion = document.getElementById('titulacion');

    /* Seccion Quien Soy */
    const nomyapQS      = document.getElementById('nomyapQS');
    const fechnacQS     = document.getElementById('fechanacQS');
    const emailQS       = document.getElementById('emailQS');
    const direccionQS   = document.getElementById('direccionQS');
    const telefonoQS    = document.getElementById('telefonoQS');
    const websiteQS     = document.getElementById('websiteQS');
    
    /* Seccion Contactos */
    const emailC        = document.getElementById('emailC');
    const direccionC    = document.getElementById('direccionC');
    const telefonoC     = document.getElementById('telefonoC');
    const whatsappC     = document.getElementById('whatsappC');
    const telegramC     = document.getElementById('telegramC');
    const instagramC    = document.getElementById('instagramC');
    const websiteC      = document.getElementById('websiteC');

    
    fetch(url)
        .then(controlErrores)
        .then(convertirJSON)
        .then(actualizarPerfil)
        .catch(printError);
}

function controlErrores (res){
    if(!res.ok){
        throw error(res.status);
    }
    
    return res;
}

function convertirJSON (res){
    return res.json();
}

function actualizarPerfil (profile){
    /*
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
  username.innerHTML = profile.results[0].login.username; 
  email.innerHTML = profile.results[0].email;
  city.innerHTML = profile.results[0].location.city;
  */
 
    if ( profile.results[0].gender == 'female' ) {
        titulacion.textContent = "Doctora en Sistemas"
    } else {
        titulacion.textContent = "Doctor en Sistemas"
    }

    /* Seccion Quien Soy */
    nomyapQS.textContent    = profile.results[0].name.first +" "+profile.results[0].name.last; 
    /*fechnacQS.textContent   = Date.parse( profile.results[0].dob.date );*/
    fecha                   = profile.results[0].dob.date;
    fechnacQS.textContent   = fecha.slice(0, 10);
    emailQS.textContent     = profile.results[0].email;
    direccionQS.textContent = profile.results[0].location.street.name + " " + profile.results[0].location.street.number + ", " +profile.results[0].location.city;
    telefonoQS.textContent  = profile.results[0].phone;
    websiteQS.textContent   = profile.results[0].login.username + ".untik.com.ar";
    
    /* Seccion Contactos */
    emailC.textContent      = emailQS.textContent;
    direccionC.textContent  = direccionQS.textContent + ", " + profile.results[0].location.state + "," + profile.results[0].location.country;
    telefonoC.textContent   = profile.results[0].phone;
    whatsappC.textContent   = profile.results[0].cell;
    telegramC.textContent   = profile.results[0].cell;
    instagramC.textContent  = "@" + profile.results[0].login.username;
    websiteC.textContent    = websiteQS.textContent;    
    
    /* Fotografia */
    const foto = document.getElementById('mifoto');
    foto.src = profile.results[0].picture.medium;

    console.log( profile );
    console.log("Salida");
    console.log(profile.results[0].picture.large);

    return 1;
}

function printError (error){
  console.log(error);
}


