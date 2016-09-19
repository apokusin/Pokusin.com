(function() {
    document.body.addEventListener('keydown', function(event) {
        window.postMessage(event, window.location.origin);
    });
})();