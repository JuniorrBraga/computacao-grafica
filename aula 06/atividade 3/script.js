const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

// COR ALTERADA AQUI
const cube = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xff }));
scene.add(cube);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.9);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

camera.position.set(0, 0, 5); 