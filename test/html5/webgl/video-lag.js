const div = document.createElement('div');
document.body.appendChild(div);
document.body.style.minHeight = '100vh';
changeColor('red');

const logDiv = document.createElement('div');
logDiv.innerHTML = '';
document.body.appendChild(logDiv);

function log(str) {
    logDiv.innerHTML += str;
    logDiv.innerHTML += "/ ";
}

const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');

const videoTexture = gl.createTexture(); // as WebGLTexture;
gl.bindTexture(gl.TEXTURE_2D, videoTexture);
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

function refresh() {
    div.innerHTML = 'now: ' + Date.now();
    requestAnimationFrame(refresh);
}

const videoUrl = 'https://cdnfile.corp.kuaishou.com/kc/files/a/world-editor/demo/lottie/mp4/penhongbao.mp4';

refresh();
setTimeout(async () => {
    loadVideo(videoUrl);
}, 1000);

function toBlob(url/*: string | URL*/) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType('video/mp4');
        xhr.onerror = function (e) {
            reject(e);
        };
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(URL.createObjectURL(xhr.response));
            }
        };
        xhr.responseType = 'blob';
        xhr.open('GET', url);
        xhr.send();
    });
}

async function loadVideo(url) {
    const video = document.createElement('video');
    video.setAttribute('crossorigin', 'anonymous');
    video.setAttribute('muted', 'muted');
    video.setAttribute('preload', 'auto');
    video.setAttribute('x-webkit-airplay', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('playsinline', '');

    video.loop = true;
    video.muted = true;
    video.poster =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC';

    video.addEventListener(
        'seeked',
        () => {
            console.log('seek');
            refresh();
        },
        {
            once: true,
        },
    );

    function refresh() {
        render(video);

        requestAnimationFrame(refresh);
    }

    video.style.cssText = 'width:100vw;';

    document.body.appendChild(video);

    const vUrl = (await toBlob(url)); // as string;
    video.src = vUrl;
    // video.src = videoUrl;
    // video.playbackRate = 10;
    video.play();

}

function changeColor(color) {
    document.body.style.background = color;
}

let firstRender = true;

function render(video/*: TexImageSource*/) {
    if (!gl) return;
    // gl.uniform1i(this.programParameters.isPa, this.premultipliedAlpha ? 1 : 0);
    // if (!this.videoTexture) {
    //     this.videoTexture = gl.createTexture() as WebGLTexture;
    //     gl.bindTexture(gl.TEXTURE_2D, this.videoTexture);
    //     gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // }

    console.log('render+++++');
    // gl.uniform1i(this.programParameters.video, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, videoTexture);

    const t1 = Date.now();

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);

    const d = Date.now() - t1;
    if (d > 2) {
        log(d + '');
        firstRender = false;
    }
    if (d > 1000) {
        console.error('lag:', d);
    }

    // gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, -1]), gl.STATIC_DRAW);

    // gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(0);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
}
