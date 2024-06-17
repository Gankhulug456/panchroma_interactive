const scene = new THREE.Scene();

// Create a camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
camera.position.z = 20;
// Create a renderer with transparent background
const renderer = new THREE.WebGLRenderer({ alpha: true });
//renderer.setSize(window.innerWidth, window.innerHeight+100);


camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
const canvasContainer = document.getElementById('three-js-canvas-container');
canvasContainer.appendChild(renderer.domElement);
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
}
// Create four planes
const planeGeometry = new THREE.PlaneGeometry(3, 2); // You can adjust the size as needed

// Create materials for each plane with different images
 material1 = new THREE.TextureLoader().load('images/1.png')
 material2 = new THREE.TextureLoader().load('images/2.png')
 material3 = new THREE.TextureLoader().load('images/3.png')
 material4 = new THREE.TextureLoader().load('images/4.png')
 material5 = new THREE.TextureLoader().load('images/5.png')
 material6 = new THREE.TextureLoader().load('images/6.png')
 material7 = new THREE.TextureLoader().load('images/7.png')
 material8 = new THREE.TextureLoader().load('images/8.png')
const geometry = new THREE.PlaneGeometry( 12, 12 );

// Use MeshPhongMaterial for reflective properties
const material = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material1, 
    //alphaMap: material1,


  });
const material22 = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material2, 
    //alphaMap: material1,


  });
const material33 = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material3, 
    //alphaMap: material1,


  });
const material44 = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material4, 
    //alphaMap: material1,


  });
  const material55 = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material5, 
    //alphaMap: material1,


  });
  const material66 = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material6, 
    //alphaMap: material1,


  });
  const material77 = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material7, 
    //alphaMap: material1,


  });
  const material88 = new THREE.MeshBasicMaterial({
    transparent : true,
    map: material8, 
    //alphaMap: material1,


  });


  const spheres = []; // Array to hold our spheres

  for (let i = 0; i < 1; i++) { // Create 5 spheres
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = -6; 
    sphere.position.y = 5;
    sphere.originalPosition = { x: sphere.position.x, y: sphere.position.y, z: 0};
    spheres.push(sphere);
    scene.add(sphere);
  }

  //////////
const geometry_2 =  new THREE.PlaneGeometry( 9,9);
const torus = new THREE.Mesh( geometry_2, material22 ); 


torus.position.x = 5; 
torus.position.y = 5;


torus.originalPosition = { x: torus.position.x, y: torus.position.y, z: 0};
scene.add( torus );

const geometry_3 =  new THREE.PlaneGeometry( 9,9 );
const geo3 = new THREE.Mesh( geometry_3, material33 ); 


geo3.position.x = -9; 
geo3.position.y = -6;
geo3.originalPosition = { x: geo3.position.x, y: geo3.position.y, z: 0};
scene.add( geo3 );

const geometry_4 =  new THREE.PlaneGeometry( 12,12 );
const geo4 = new THREE.Mesh( geometry_4, material44 ); 


geo4.position.x = 5; 
geo4.position.y = -6;
geo4.originalPosition = { x: geo4.position.x, y: geo4.position.y, z: 0};
scene.add( geo4 );

const geometry_5 =  new THREE.PlaneGeometry( 3,3 );
const geo5 = new THREE.Mesh( geometry_5, material55 ); 


geo5.position.x = 12; 
geo5.position.y = 1;
geo5.originalPosition = { x: geo5.position.x, y: geo5.position.y, z: 0};
scene.add( geo5 );

const geometry_6 =  new THREE.PlaneGeometry( 3,3 );
const geo6 = new THREE.Mesh( geometry_6, material66 ); 


geo6.position.x = -15; 
geo6.position.y =1;
geo6.originalPosition = { x: geo6.position.x, y: geo6.position.y, z: 0};
scene.add( geo6 );

const geometry_7 =  new THREE.PlaneGeometry( 3,3 );
const geo7 = new THREE.Mesh( geometry_7, material77 ); 


geo7.position.x = 1; 
geo7.position.y = 10;
geo7.originalPosition = { x: geo7.position.x, y: geo7.position.y, z: 0};
scene.add( geo7 );

const geometry_8 =  new THREE.PlaneGeometry( 2.5,2.5);
const geo8 = new THREE.Mesh( geometry_8, material88 ); 


geo8.position.x = -3; 
geo8.position.y = -12;
geo8.originalPosition = { x: geo8.position.x, y: geo8.position.y, z: 0};
scene.add( geo8 );

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

// Mouse movement interaction
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function onMouseMove(event) {
  // Calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
 
}

window.addEventListener('mousemove', onMouseMove, false);

function animate() {
    requestAnimationFrame(animate);

    // Update the raycaster with the current mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with all objects
    const intersects_sphere = raycaster.intersectObjects(spheres);
    const intersects_torus = raycaster.intersectObject(torus);
    const intersects_geo3 = raycaster.intersectObject(geo3);
    const intersects_geo4 = raycaster.intersectObject(geo4);

    // Handle interactions for the sphere
    spheres.forEach((sphere) => {
        let isIntersecting = intersects_sphere.find(intersect => intersect.object === sphere);
        if (isIntersecting) {
            let direction = new THREE.Vector3().subVectors(sphere.position, isIntersecting.point).normalize();
            sphere.position.x += direction.x * 0.1;
            sphere.position.y += direction.y * 0.1;
        } else {
            let targetPosition = new THREE.Vector3(sphere.originalPosition.x, sphere.originalPosition.y, sphere.position.z);
            sphere.position.lerp(targetPosition, 0.005);
        }
    });

    // Handle interactions for the torus
    if (intersects_torus.length > 0) {
        let isIntersecting = intersects_torus[0];
        let direction = new THREE.Vector3().subVectors(torus.position, isIntersecting.point).normalize();
        torus.position.x += direction.x * 0.1;
        torus.position.y += direction.y * 0.1;
    } else {
        let targetPosition = new THREE.Vector3(torus.originalPosition.x, torus.originalPosition.y, torus.position.z);
        torus.position.lerp(targetPosition, 0.005);
    }

    // Handle interactions for geo3
    if (intersects_geo3.length > 0) {
        let isIntersecting = intersects_geo3[0];
        let direction = new THREE.Vector3().subVectors(geo3.position, isIntersecting.point).normalize();
        geo3.position.x += direction.x * 0.1;
        geo3.position.y += direction.y * 0.1;
    } else {
        let targetPosition = new THREE.Vector3(geo3.originalPosition.x, geo3.originalPosition.y, geo3.position.z);
        geo3.position.lerp(targetPosition, 0.005);
    }

    // Handle interactions for geo4
    if (intersects_geo4.length > 0) {
        let isIntersecting = intersects_geo4[0];
        let direction = new THREE.Vector3().subVectors(geo4.position, isIntersecting.point).normalize();
        geo4.position.x += direction.x * 0.1;
        geo4.position.y += direction.y * 0.1;
    } else {
        let targetPosition = new THREE.Vector3(geo4.originalPosition.x, geo4.originalPosition.y, geo4.position.z);
        geo4.position.lerp(targetPosition, 0.005);
    }

    // Render the scene
    renderer.render(scene, camera);
}

animate();



console.log("running")
