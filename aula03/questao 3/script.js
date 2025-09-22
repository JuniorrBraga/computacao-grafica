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

  const numElementos = 50;
  const tamanho_grade = 10;
  const cel_largura = canvas.width / tamanho_grade;
  const cel_altura = canvas.height / tamanho_grade;


  for (let i = 0; i < numElementos; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const corAleatoria = `rgb(${r}, ${g}, ${b})`;

    const grade_x = Math.floor(Math.random() * tamanho_grade);
    const grade_y = Math.floor(Math.random() * tamanho_grade);

    const posicao_x = grade_x * cel_largura;
    const posicao_y = grade_y * cel_altura;

    desenheRect(corAleatoria, posicao_x, posicao_y, cel_largura, cel_altura);
  }
};

function desenheRect(cor, left, top, width, height) {
  ctx.fillStyle = cor;
  ctx.fillRect(left, top, width, height);
};