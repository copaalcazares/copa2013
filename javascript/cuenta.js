    var f = new Date();
	var cuentaInicial = f.getDate();
	var mes = f.getMonth();
	var dia = f.getDate();
	var febrero = 28;
	var marzo = 27;
	function fin() {
		window.location="http://www.google.com";
		alert ("Ha iniciado la copa.");
	}
	function arreglo(){
		if(mes == 1){
			febrero = febrero - cuentaInicial;
			cuentaInicial =  febrero + marzo; 
			with (document.forms["cuenta"]["regresiva"]) value = 'Será redireccionado a la página principal en '+cuentaInicial+' dias.';
		}else if(mes == 2){
			cuentaInicial = marzo - cuentaInicial;
			with (document.forms["cuenta"]["regresiva"]) value = 'Será redireccionado a la página principal en '+cuentaInicial+' dias.';
		}else if(mes == 2 && dia == 27){
			with (document.forms["cuenta"]["regresiva"]) value = 'Será redireccionado a la página principal en '+cuentaInicial+' dias.';
			fin();
		}
	}
	function ini() {
		setTimeout("arreglo()", 1000);
	}