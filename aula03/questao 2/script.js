window.onload = main;

var ctx;

function main() {
    const canvas = document.getElementById('meucanvas');
    ctx = canvas.getContext('2d');
    if (!ctx) {
        alert("Não consegui abrir o contexto 2d :-( ");
        return;
    }

    const raio = 30;
    const posicao_y = canvas.height/2 

    let pos_x1 = 40;
    let pos_x2 = 110;
    let pos_x3 = 180;
    let pos_x4 = 250;

    desenhando_circulo(pos_x1, posicao_y, raio, 8); 
    desenhando_circulo(pos_x2, posicao_y, raio, 16);
    desenhando_circulo(pos_x3, posicao_y, raio, 32); 
    desenhando_circulo(pos_x4, posicao_y, raio, 64);
}

function desenhando_circulo(centro_x, centro_y, raio, numero_segmentos) {
    console.log("Desenhando círculo com", numero_segmentos, "segmentos.");

    ctx.beginPath();

    for (let i = 0; i <= numero_segmentos; i++) {
        const angulo = (i / numero_segmentos) * 2 * Math.PI;
        const x = centro_x + raio * Math.cos(angulo);
        const y = centro_y + raio * Math.sin(angulo);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
}