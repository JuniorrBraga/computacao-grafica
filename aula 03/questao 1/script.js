// A `main()` só deve ser executada quando tudo estiver carregado
window.onload = main; // nome da função a ser chamada 'onload'

// Lista de variáveis globais
var ctx; // contexto com a API para desenhar
var canvas;

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function corAleatoriaRandom() {
    const r = RandomInt(0, 255);
    const g = RandomInt(0, 255);
    const b = RandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function main() {
    // veja o canvas id definido no arquivo index.html
    const canvas = document.getElementById('meucanvas');
    // vamos definir um contexto para desenhar em 2D
    ctx = canvas.getContext('2d');
    if (!ctx) alert("Não consegui abrir o contexto 2d :-( ");

    const numero_quadrados = 50;

    for(let i = 0; i < numero_quadrados; i++){
        let cor_aleatoria = corAleatoriaRandom();
        let largura_aleatoria = RandomInt(10,80);
        let altura_aleatoria = RandomInt(10,80);
        let left_aleatorio = RandomInt(0, canvas.width - largura_aleatoria);
        let top_aleatorio = RandomInt(0, canvas.height - altura_aleatoria);
        desenheRect(cor_aleatoria, left_aleatorio, top_aleatorio, largura_aleatoria, altura_aleatoria);
    }
};

function desenheRect(cor, left, top, width, height) {
    console.log("Desenhando retângulo ", cor);
    ctx.fillStyle = cor;
    ctx.fillRect(left, top, width, height);
};