const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let velocidade_base = 0.01;
let mouseX = 0;
let mouseY = 0;

const desliza_velocidade = document.createElement('input');
desliza_velocidade.type = 'range';
desliza_velocidade.min = '0';
desliza_velocidade.max = '200';
desliza_velocidade.value = '50'; 
desliza_velocidade.style.position = 'absolute';
desliza_velocidade.style.top = '20px';
desliza_velocidade.style.left = '20px';
document.body.appendChild(desliza_velocidade);

desliza_velocidade.addEventListener('input', (event) => {
    velocidade_base = (event.target.value / 100) * 0.02;
});

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});


const geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xff }));
scene.add(cube);

const geometrySphere = new THREE.SphereGeometry(0.7, 32, 16);
const materialSphere = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
sphere.position.x = -2;
scene.add(sphere);

const geometryTorus = new THREE.TorusGeometry(0.8, 0.2, 16, 100);
const materialTorus = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const torus = new THREE.Mesh(geometryTorus, materialTorus);
torus.position.x = 2;
scene.add(torus);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.9);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += velocidade_base;
    cube.rotation.y += velocidade_base;

    sphere.rotation.y += velocidade_base * 0.5; 
    torus.rotation.x += velocidade_base * 2;  

    camera.position.x = mouseX * 3;
    camera.position.y = mouseY * 3;
    
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();

camera.position.set(0, 0, 7);