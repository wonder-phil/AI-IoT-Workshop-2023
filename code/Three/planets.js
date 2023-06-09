

console.clear();

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js";
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/controls/OrbitControls.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.set(0, 20, 20).setLength(15);
let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x202020);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);

let light = new THREE.PointLight();
scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

scene.add(new THREE.GridHelper(10, 10));

let g = new THREE.SphereGeometry(1, 32, 16); // the same geometry for re-use

let sun = new THREE.Mesh(g, new THREE.MeshBasicMaterial({color: 0xffff7f}));
scene.add(sun);

let spheres = [];
let spheresCount = 200;
for(let i = 0; i < spheresCount; i++){
	addSphere();
}

let clock = new THREE.Clock();

renderer.setAnimationLoop( _ => {
	let t = clock.getElapsedTime();
  spheres.forEach( s => {
  	let ud = s.userData;
  	let a = (ud.speed * t) + ud.phase;
  	s.position.set(Math.cos(a), 0, -Math.sin(a))
    	.multiplyScalar(ud.radius)
    	.setY(ud.posY);
  });
	renderer.render(scene, camera);
})

function addSphere(){
	let s = new THREE.Mesh(g, new THREE.MeshLambertMaterial({color: Math.random() * 0x7f7f7f + 0x7f7f7f}));
  s.scale.setScalar(THREE.MathUtils.randFloat(0.1, 0.25)); // sise of a sphere
  s.userData = {
  	posY: THREE.MathUtils.randFloat(-10, 10),			// at what height
    radius: THREE.MathUtils.randFloat(5, 10),			// how far from Y-axis
    phase: Math.random() * Math.PI * 2,						// where to start
    speed: (0.1 - Math.random() * 0.2) * Math.PI	// how fast to circulate
  };
  spheres.push(s);
  scene.add(s);
}
