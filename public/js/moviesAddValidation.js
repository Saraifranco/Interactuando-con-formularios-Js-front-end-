window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('form.form');
    let article = document.querySelector('article');
    let title = document.getElementById("title")
    let awards = document.getElementById("awards");
    let release_date = document.getElementById("release_date");
    let duracion = document.getElementById("length");
    let genreId = document.getElementById("genreID");
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    title.focus();
   formulario.addEventListener("submit", function(e){ 
        let errors = [];
       if(title.value == ''){
        errors.push("el campo title esta vacio");
        title.classList.add('is-invalid');
    } else {
      title.classList.add('is-valid');
      title.classList.remove('is-invalid');
  };
    
  if (rating.value <= 0 || rating.value > 10.0) {
    errors.push('El campo calificación no puede ser menor a cero ni mayor a 10');
    rating.classList.add('is-invalid');
} else {
    rating.classList.add('is-valid');
    rating.classList.remove('is-invalid');
};
if (awards.value <= 0 || awards.value > 10) {
  errors.push('El campo premios no puede ser menor a cero ni mayor a 10');
  awards.classList.add('is-invalid');
} else {
  awards.classList.add('is-valid');
  awards.classList.remove('is-invalid');
};
    if(release_date.value == ""){
      errors.push('El campo fecha de creación no puede estar vacio');
      release_date.classList.add('is-invalid');
  } else {
      release_date.classList.add('is-valid');
      release_date.classList.remove('is-invalid');
  };
  if (duracion.value < 60 || duracion.value > 360) {
    errors.push('El campo duración no puede ser menor a 60 ni mayor a 360 minutos');
    duracion.classList.add('is-invalid');
} else {
  duracion.classList.add('is-valid');
  duracion.classList.remove('is-invalid');
};
    //   if(genreId.value == ''){
    //     errors.push('El campo género no puede estar vacío');
    //     genreId.classList.add('is-invalid');
    // } else {
    //   genreId.classList.add('is-valid');
    //   genreId.classList.remove('is-invalid');
    // };
    if (errors.length > 0) {
    e.preventDefault();
      alert("hay errores");
        // let ulErrors = document.querySelector('.errores');
        //     ulErrors.classList.add('alert-warning');
        //     ulErrors.innerHTML = '';
        //     for (let i = 0; i < errors.length; i++) {
        //         ulErrors.innerHTML += <li >  ${errors[i]} </li>;
        //     };
        // }else{
        //     alert('La validación fué exitosa')
        //     form.submit();
    }

  });
    

}