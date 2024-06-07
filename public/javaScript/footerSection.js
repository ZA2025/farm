 
console.log('footerSection.js loaded');
document.addEventListener('DOMContentLoaded', function() {
    fetch('footer')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footerId').innerHTML = html;
            var script = document.createElement('script');
            script.src = './public/javascript/footer.js';
            document.body.appendChild(script);
        });
});
