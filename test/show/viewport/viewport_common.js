(function(){
    function isMobile(){
      let info = navigator.userAgent;
      let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
      for(let i = 0; i < agents.length; i++){
          if(info.indexOf(agents[i]) >= 0) return true;
      }
      return false;
  }
  if (!isMobile()) {
    //alert("请手机端查看页面");
  }

  setTimeout(() => {
    let c = document.querySelector("canvas");
    if (c) {
      let info = document.querySelector("#info");
      info ? info.innerHTML = "canvas size(" + c.width + "," + c.height + ")" : 0;
    }
  }, 1000);
})();