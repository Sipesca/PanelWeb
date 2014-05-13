function init() {
    //document.addEventListener("deviceready", deviceInfo, true);			
}

function cargaConfiguracion(name){
	if($.cookie(name)==null){
	 return localStorage.getItem(name)
	}else{
	 return $.cookie(name); 
	}
}

function guardaConfiguracion(clave,valor,duracion){
	$.cookie(clave,valor,{expires:duracion});
	localStorage.setItem(clave,valor);
}
