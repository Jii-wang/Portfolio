function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var parameter = getParams();
	var Button = document.getElementById("myLogin");
	Button.onsubmit = checkLogin;
}

function checkLogin(){
	var parameter = getParams();
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var login = document.getElementById("myLogin");
	if(login.username.value == parameter["username"] && login.password.value == parameter["password"])
	{
		alert("ถูกต้อง");
		return true;
	}

	else 
	{
		alert("ไม่ถูกต้อง");
		return false;
	}
}
