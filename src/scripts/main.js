document.getElementById('btnCor').addEventListener('click', function () {
    const cores = ['#e74c3c', '#8e44ad', '#f39c12', '#16a085'];
    const cor = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.background = cor;
});
