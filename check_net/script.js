document.getElementById('start-button').addEventListener('click', function() {
    measureSpeed();
});

function measureSpeed() {
    const downloadUrl = '/download';
    const uploadUrl = '/upload';

    measureDownloadSpeed(downloadUrl, function(downloadSpeed) {
        document.getElementById('download-speed').innerText = downloadSpeed.toFixed(2);
    });

    measureUploadSpeed(uploadUrl, function(uploadSpeed) {
        document.getElementById('upload-speed').innerText = uploadSpeed.toFixed(2);
    });
}

function measureDownloadSpeed(url, callback) {
    const startTime = new Date().getTime();
    fetch(url)

    di

        .then(response => response.blob())
        .then(blob => {
            const endTime = new Date().getTime();
            const duration = (endTime - startTime) / 1000;
            const bitsLoaded = blob.size * 8;
            const speedMbps = (bitsLoaded / duration) / (1024 * 1024);
            callback(speedMbps);
        })
        .catch(error => console.error('Error:', error));
}

function measureUploadSpeed(url, callback) {


    const startTime = new Date().getTime();
    const blob = new Blob([new ArrayBuffer(20 * 1024 * 1024)], { type: 'application/octet-stream' });

    fetch(url, {
        method: 'POST',
        body: blob,
    })
        .then(response => response.text())
        .then(() => {
            const endTime = new Date().getTime();
            const duration = (endTime - startTime) / 1000;
            const bitsLoaded = blob.size * 8;
            const speedMbps = (bitsLoaded / duration) / (1024 * 1024);
            callback(speedMbps);
        })
        .catch(error => console.error('Error:', error));

}
bitsLoaded
visualViewport + JSON 