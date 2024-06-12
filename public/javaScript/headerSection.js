document.addEventListener('DOMContentLoaded', function() {
    fetch('./header')
        .then(response => response.text())
        .then(html => {
            document.getElementById('headerId').innerHTML = html;
            var script = document.createElement('script');
            script.src = './public/javascript/nav.js';
            document.body.appendChild(script);
        });
});
