// import React from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import * as THREE from  'three'

// const randomRange = (min, max) => Math.random() * (max - min) + min;
// let curves = [] ;

// for(let i = 0;i < 100 ; i++)
// {
//     let points = [];
//     let length = randomRange(0.1, 1);
//     for(let j = 0; j < 100 ; j++)
//     {
//             points.push(
//                 new THREE.Vector3().setFromSphericalCoords(
//                     1,
//                     Math.PI - (j / 100) * Math.PI * length,
//                     (i / 100) * Math.PI * 2
//                 )
//             );
//         let tempcurve = new THREE.CatmullRomCurve3(points)
//         curves.push(tempcurve);
//     } 
// }


// console.log(curves);

// function Tube({curve}) {
//     return(
//         <mesh>
//             <tubeGeometry args={[curve, 64, 0.01, 8, false]}/>
//             <meshStandardMaterial color="#475812"/>
//         </mesh>
//     )
// } 

// function Tubes() {
//     return(  
//         <>
//         {curves.map((curve, index)=>(
//             <Tube curve={curve} key ={index} />
//         ))}
//         </>
//     )
// };

// export default function ThreeD() {
//   return (
//     <div className='flex flex-col items-center justify-center w-full h-[100vh]'>
//         <Canvas>
//             <ambientLight intensity={2}/>
//             <pointLight position={[10, 10, 10]}/>
//             <Tubes/>
//             <OrbitControls/> 
//         </Canvas>
//     </div>
//   )
// }







// 3d brain model


// import React, { Suspense,
//   useRef, 
//   useState, 
//   useCallback, 
//   forwardRef, 
//   useImperativeHandle, 
//   useEffect } from 'react';
// import { Canvas, useLoader, useFrame } from '@react-three/fiber';
// // import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// // import { OBJLoader} from 'three/addons/loaders/OBJLoader';
// // import { MeshLambertMaterial} from 'three';
// // import { PointLight } from 'three';
// // import { TextureLoader } from 'three';
// // import * as THREE from 'three';

// import {
//   ViewerApp, 
//   AssetManagerPlugin, 
//   GBufferPlugin, 
//   ProgressivePlugin, 
//   TonemapPlugin, 
//   SSRPlugin, 
//   SSAOPlugin, 
//   BloomPlugin, 
//   GammaCorrectionPlugin, 
//   addBasePlugins, 
//   mobileAndTabletCheck, 
//   FileTransferPlugin, 
//   CanvasSnipperPlugin} from "webgi";
// import gsap from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';

// // const BrainModel = () => {
// //   // const materials = useLoader(MTLLoader, './Mars_2K.mtl');
// //   const brainObject = useLoader(OBJLoader, './Mars_2K.obj');

// // // const textureLoader = new TextureLoader();

// // // const colorMap = textureLoader.load('./Rust003_4K-JPG_Color.jpg');

// // // const normalMap = textureLoader.load('./Rust003_4K-JPG_NormalGL.jpg');

// // // const displacementMap = textureLoader.load('./Rust003_4K-JPG_Roughness.jpg');

// // // Create a material with the loaded textures
// // // const material = new MeshLambertMaterial({
// // //   map: colorMap,
// // //   normalMap: normalMap,
// // //   // envMap: cubeRenderTarget.texture
// // //   // displacementMap: displacementMap,
// // // });

// // // { color: 0xffffff, envMap:cubeRenderTarget.texture }


// //   // brainObject.traverse((child) => {
// //   //   if (child.isMesh) {
// //   //     child.material = material;
// //   //   }
// //   // }); 


// // const scene = new THREE.Scene();
// //   const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );

// //   const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget );
// //   scene.add( cubeCamera );


// //   const groupRef = useRef();

// //   useFrame((state, delta) => {
// //     groupRef.current.rotation.y += 0.01 * delta; 
// //   });
// //   return <group ref={groupRef}> <primitive object={brainObject}/> </group>;
// //   };


// const ThreeD = () => {

//  const canvasRef =  useRef(null);

//  const setupViewer = useCallback (async () => 
//   {

//     const viewer = new ViewerApp({
//         canvas: canvasRef.current,
//     })

//     const manager = await viewer.addPlugin(AssetManagerPlugin)

//     // await viewer.addPlugin(GBufferPlugin)
//     // await viewer.addPlugin(new ProgressivePlugin(32))
//     // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
//     // await viewer.addPlugin(GammaCorrectionPlugin)
//     // await viewer.addPlugin(SSRPlugin)
//     // await viewer.addPlugin(SSAOPlugin)
//     // await viewer.addPlugin(BloomPlugin)
   
//     await addBasePlugins(viewer)

//     await viewer.addPlugin(FileTransferPlugin)

//     await viewer.addPlugin(CanvasSnipperPlugin)

//     viewer.renderer.refreshPipeline()
  
//     await viewer.load("./scene-new.glb")  

//     viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

//     viewer.scene.activeCamera.setCameraOptions({controlsEnable: false});

//     window.scrollTo(0, 0);
//   },[]); 

//   useEffect(()=>{
//   setupViewer();    
//   },[]);



//   return (
//     <div className='relative z-10 flex flex-row items-center justify-end w-full h-auto'>
//        {/* <div className='absolute rounded-[50%] w-[150px] h-[150px] blur-[20px] bg-[#56321f] z-[0]'></div> */}
//       <Canvas id="Mars_global" style={{ width: '100%', height: '100vh' }} ref={canvasRef}/>
//     </div>
//   );
// };

// export default ThreeD;







// 3d Ball rotaion

// import React, { Suspense, useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { MeshStandardMaterial , PointLight, TextureLoader  } from 'three';

// const Sphere = ({ position, onClick, skill }) => {
//   const mesh = useRef();

//   // Rotate the sphere around the y-axis
//   useFrame(() => {
//     if (mesh.current) {
//       mesh.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh
//       ref={mesh}
//       position={position}
//       onClick={() => onClick(skill)}
//     >
//       <sphereGeometry args={[0.5, 52, 52]} />
//       <meshStandardMaterial color="#00E0FF" />
//     </mesh>
//   );
// };

// const SkillPopup = ({ skill, onClose }) => {
//   return (
//     <div className="skill-popup">
//       <p>{skill}</p>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// const App = () => {
//   const [selectedSkill, setSelectedSkill] = useState(null);

//   const handleBallClick = (skill) => {
//     setSelectedSkill(skill);
//   };

//   const handleClosePopup = () => {
//     setSelectedSkill(null);
//   };

//   return (
//     <div className="app">
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={2}/>
//         <directionalLight position={[10, 10, 5]} intensity={5} />
        
//         {/* Create 6 spheres */}
//         {[...Array(6)].map((_, index) => (
//           <Sphere
//             key={index}
//             position={[Math.sin(index), 0, Math.cos(index)]}
//             onClick={handleBallClick}
//             skill={`Skill ${index + 1}`}
//           />
//         ))}
//         <OrbitControls />
//       </Canvas>

//       {selectedSkill && (
//         <SkillPopup skill={selectedSkill} onClose={handleClosePopup} />
//       )}
//     </div>
//   );
// };

// export default App;







