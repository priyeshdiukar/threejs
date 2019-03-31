import { Scene, PerspectiveCamera, WebGLRenderer, Color, TorusGeometry, MeshBasicMaterial, Mesh } from 'three';

let scene, camera, renderer;
scene = new Scene();
scene.background = new Color(0x000);
camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 50;
renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

let donuts = [];
let ADD = 0.2;

const randomInRange = (from, to) => {
    let x = Math.random() * (to - from);
    return x + from;
}

const createTorus = (geometryParams, materialParams) => new Mesh(
    new TorusGeometry(...geometryParams),
    new MeshBasicMaterial(materialParams));

const createDonut = () => {
    let donut = createTorus([1, 0.3, 5, 50], { color: Math.random() * 0xffffff });
    donut.position.x = randomInRange(-50, 50);
    donut.position.y = 50;
    donut.position.z = randomInRange(-50, 50);
    donut.rotation.x = Math.random();
    donut.rotation.y = Math.random();
    donut.rotation.z = Math.random();
    scene.add(donut);
    donuts.push(donut);
}

const init = () => document.body.appendChild(renderer.domElement);

const mainLoop = () => {
    Math.random() < 0.2 && createDonut();
    donuts.forEach(d => {
        d.position.y -= ADD;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
}

init();
mainLoop();