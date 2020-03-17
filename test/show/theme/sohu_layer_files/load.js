/*
    不阻塞onload事件
*/

function jdAdNShow(jdAdId, jdAdWidth,jdAdHeight,ratio,jdAdFlag,mobileType,clkmn,expose) {
    var x = parseInt(Math.random()*1000);
    var iframe = document.createElement('iframe');
    document.open();
    document.write("<a id='jdAdplace" + x + "' style='display:block'></a>");
    
    document.getElementById('jdAdplace' + x).parentNode.appendChild(iframe, null);
    var doc = iframe.contentWindow.document;
    var jdAdRatio = ratio || 4;
    var anchor = document.getElementById("jdAdplace" + x);
    var jdAdWidth = jdAdWidth || anchor.scrollWidth;
    var jdAdHeight = jdAdHeight || (jdAdWidth / ratio);
    var adFlag = jdAdFlag || 0;
    iframe.width = jdAdWidth;
    iframe.height = jdAdHeight;
    iframe.style.margin = 0;
    iframe.style.border = 0;
    iframe.style.padding = 0;
    iframe.frameBorder = 0;
    var adflag = jdAdFlag||0;
    doc.open();
    doc.write('<script>var width="' + jdAdWidth + '";var height="' + jdAdHeight + '";var id="' + jdAdId + '";var adflag="' + adflag + '";var mobileType="'+(mobileType!=null?mobileType:1)+'";var clkmn="'+clkmn+'";var expose="'+expose+'";</script>\
        <html style="overflow:hidden;"><body style="margin:0;overflow:hidden;" onload="\
　　var d = document;\
    var script = d.createElement(\'script\');\
    script.src = \'//static.360buyimg.com\/jzt\/temp\/js\/jztshow.js\';\
    d.getElementsByTagName(\'head\')[0].appendChild(script)" ></body></html>');
    doc.close(); //iframe onload event happens
}