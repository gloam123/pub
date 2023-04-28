// Worker线程代码
var lastUpdateTime = new Date().getTime(); // 记录上次更新时间

// 监听主线程发送的信息
self.onmessage = function(event) {
  var currentTime = event.data;
  if (currentTime - lastUpdateTime > 500) {
    reportData();
    // 时间差大于500毫秒，认为卡顿了
    var stack = getStackTrace(); // 获取主线程的堆栈信息
    self.postMessage({type: 'freeze', stack: stack}); // 发送堆栈信息给主线程
  }
  lastUpdateTime = currentTime; // 更新上次更新时间
}

// 获取堆栈信息的函数
function getStackTrace() {
  var stackTrace = '';
  try {
    throw new Error(''); 
  } catch (e) {
    stackTrace = e.stack || '';
  }
  return stackTrace;
}


function reportData() {

  // 在 Worker 线程中创建 XMLHttpRequest 对象
  const xhr = new XMLHttpRequest();

  // 设置请求方法和 URL
  xhr.open('POST', 'http://172.17.14.13:8081');

  // 设置请求头
  xhr.setRequestHeader('Content-Type', 'application/json');

  // 监听响应事件
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  // 发送请求
  xhr.send(JSON.stringify({ data: 'some data to report' }));


}

