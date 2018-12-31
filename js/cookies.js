var username;

function setCookie(){
  
  var d = new Date();
  var u = document.getElementById("signup-modal-input-email").value;
  var p = document.getElementById("signup-modal-input-password").value;
 
    if(u==""||p=="")
    {
      alert("请补全资料");
    }
    else {
      
      alert(u+" "+p);
      d.setTime(d.getTime()+(30*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie = u+"="+p+"; "+expires;
      alert("注册成功");
      document.getElementById("signup-modal-input-email").value="";
      document.getElementById("signup-modal-input-password").value="";
      tlogIn();
    }


}
function getCookie(){

  var u = document.getElementById("email").value+"="+document.getElementById("password").value;

  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(u)==0)

    { 
      var tname = c.split("=");
      username = tname[0];
      alert("欢迎回来"+tname[0]);logIn(); return 0; }
  }
  alert("验证失败");
}


function getLikes(){
    var u = username+'@';
    alert(u);
   
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(u)==0) { 
			var tc = c.split("@");
			alert(tc[1]); return tc[1]; }
	}
	return "";
}



function setLikes(){
    var i = 100;
 	if(rain_playing == 1)
 	{
 		i=0;
 	}
 	else if(thunderstorm_playing == 1)
 	{
 		i=1;
 	}
 	else if(wind_playing == 1)
 	{
 		i=2;	
 	}
 	else if(forest_playing == 1)
 	{
 		i=3;
 	}
 	else if(leaves_playing == 1)
 	{
 		i=4;
 	}
 	else if(waterstream_playing == 1)
 	{
 		i=5;
 	}
 	else if(seaside_playing == 1)
 	{
 		i=6;
 	}
 	else if(water_playing == 1)
 	{
 		i=7;
 	}
 	else if(water_playing == 1)
 	{
 		i=8;
 	}
 	else if(water_playing == 1)
 	{
 		i=9;
 	}
 	else if(water_playing == 1)
 	{
 		i=10;
 	}
 	else if(water_playing == 1)
 	{
 		i=11;
 	}
 	else if(water_playing == 1)
 	{
 		i=12;
 	}
 	else if(water_playing == 1)
 	{
 		i=13;
 	}
 	else if(water_playing == 1)
 	{
 		i=14;
 	}
 	else if(water_playing == 1)
 	{
 		i=15;
 	}
 	else if(water_playing == 1)
 	{
 		i=15;
 	}
 	else{
 		alert("点击一个喜欢的进行收藏");
 		
 	}
 	alert("收藏");
 	if(i!=100)
 	{
 	var d = new Date();
	d.setTime(d.getTime()+(1*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	var tu = username+"@"+i+"; "+expires;
	document.cookie = tu;
	alert(tu);
	
	alert("收藏成功");
 	}




}