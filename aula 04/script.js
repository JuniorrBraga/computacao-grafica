window.onload = function () {
    const canvas = document.getElementById('meucanvas');
    const ctx = canvas.getContext('2d');
    const controle_cor = document.getElementById('controle-cor');
    const r_desliza = document.getElementById('r');
    const g_desliza = document.getElementById('g');
    const b_desliza = document.getElementById('b');

    let modo = 'desenho';
    let desenhando = false;
    let cor_retangulo = 'rgb(50,100,200)';

    function modoClique(e) {
        if (modo !== 'clique') return;
        const pos = getMousePos(e);
        ctx.fillStyle = 'black';
        ctx.fillText('clique!', pos.x, pos.y);
    }

    function iniciarDesenho(e) {
        if (modo !== 'desenho') return;
        desenhando = true;
        ctx.beginPath();
        const pos = getMousePos(e);
        ctx.moveTo(pos.x, pos.y);
    }

    function desenhar(e) {
        if (!desenhando || modo !== 'desenho') return;
        const pos = getMousePos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }

    function pararDesenho() {
        desenhando = false;
    }

    function desenharRetangulo() {
        if (modo !== 'cor') return;
        limparCanvas();
        ctx.fillStyle = cor_retangulo;
        ctx.fillRect(150, 100, 300, 200);
    }

    function atualizarCor() {
        cor_retangulo = `rgb(${r_desliza.value}, ${g_desliza.value}, ${b_desliza.value})`;
        desenharRetangulo();
    }

    document.getElementById('btnClick').onclick = function () {
        modo = 'clique';
        contador_cliques = 0;
        controle_cor.style.display = 'none';
        limparCanvas();
    };

    document.getElementById('btnColor').onclick = function () {
        modo = 'cor';
        controle_cor.style.display = 'block';
        desenharRetangulo();
    };

    document.getElementById('btnDraw').onclick = function () {
        modo = 'desenho';
        controle_cor.style.display = 'none';
        limparCanvas();
    };

    function limparCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    document.getElementById('btnClear').onclick = limparCanvas;

    canvas.addEventListener('click', modoClique);
    canvas.addEventListener('mousedown', iniciarDesenho);
    canvas.addEventListener('mousemove', desenhar);
    canvas.addEventListener('mouseup', pararDesenho);
    canvas.addEventListener('mouseout', pararDesenho);

    r_desliza.addEventListener('input', atualizarCor);
    g_desliza.addEventListener('input', atualizarCor);
    b_desliza.addEventListener('input', atualizarCor);

    function getMousePos(evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
};