import { Scene, PerspectiveCamera, WebGLRenderer, Color, AxesHelper } from 'three';
import createCube from './cube.js';
import createSphere from './sphere.js';
import createTorus from './torus.js';

let scene, camera, renderer, cube, axes, sphere, torus;
let ADD = 0.01;

let init = () => {
    scene = new Scene();
    scene.background = new Color(0xababab);

    camera = new PerspectiveCamera(30,
        window.innerWidth / window.innerHeight,
        1, 1000);
    camera.position.z = 15;

    /* axes = new AxesHelper(10);
    scene.add(axes); */
    cube = createCube([1, 1, 1], { color: 0x00a1cb });
    scene.add(cube);

    sphere = createSphere([1, 30, 40, 0, Math.PI, 0, Math.PI / 2], { color: 0xffffff, wireframe: true });
    scene.add(sphere);

    torus = createTorus([3, 1, 30, 30], { color: 0xffffff, wireframe: true });
    scene.add(torus);

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
};

const mainLoop = () => {
    // cube.position.x += ADD;
    cube.rotation.y -= ADD;
    sphere.rotation.y -= ADD;
    if (cube.position.x <= -3 || cube.position.x >= 3) {
        ADD *= -1;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();