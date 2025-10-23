window.onload = main;
var ctx;

function main() {
  // veja o canvas id definido no arquivo index.html
  const canvas = document.getElementById('meucanvas');
  // vamos definir um contexto para desenhar em 2D
  ctx = canvas.getContext('2d');
  if (!ctx) {
    alert("Não consegui abrir o contexto 2d :-( ");
    return;
  }

  const grade_tamanho = 10;
  const largura_cel = canvas.width / grade_tamanho;
  const altura_cel = canvas.height / grade_tamanho;

  setInterval(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const cor_aleatoria = `rgb(${r}, ${g}, ${b})`;

    const tamanho_x = Math.floor(Math.random() * grade_tamanho);
    const tamanho_y = Math.floor(Math.random() * grade_tamanho);

    const posicao_x = tamanho_x * largura_cel;
    const posicao_y = tamanho_y * altura_cel;

    desenheRect(cor_aleatoria, posicao_x, posicao_y, largura_cel, altura_cel);
  }, 50);
};

function desenheRect(cor, left, top, width, height) {
  ctx.fillStyle = cor;
  ctx.fillRect(left, top, width, height);
};