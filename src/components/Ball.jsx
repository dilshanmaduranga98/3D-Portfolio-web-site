import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { SphereBufferGeometry, MeshPhysicalMaterial, Color } from 'three';
import * as THREE from 'three';



export default function Ball(props) {


    const Cube = () => {
        const mesh = useRef();
        const group = useRef();

        useFrame(() => {
            group.current.rotation.y += (props.speedX);
            mesh.current.rotation.y += (props.speedY);
        });

        // Load Earth texture
        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load(props.TexturePath);

        return (
            <group ref={group}>
                <mesh ref={mesh}>
                    <sphereGeometry args={[2.0, 50, 50]} />

                    <meshPhysicalMaterial
                        clearcoat={1}
                        clearcoatRoughness={0}
                        shininess={50}
                        roughness={1}
                        metalness={0}
                        color={props.color}
                        map={earthTexture}
                        flatShading='false'
                        shadowSide={50}
                    />

                    <hemisphereLight
                        skyColor={'#FFF'}
                        groundColor={'#000000'}
                    />
                    <pointLight
                        decay={10}
                        distance={5}
                        skyColor={'#fff'}
                        groundColor={'0x000000'}
                        position={[40, 30, 10]}
                        intensity={10}
                    />
                    <ambientLight intensity={0.4} />
                </mesh>
                <hemisphereLight
                    skyColor={'#FFF'}
                    groundColor={'#000000'}
                />
                <ambientLight intensity={0} color="black" />
                <pointLight decay={1.6} distance={0} color="white" intensity={10000} position={[30, 50, 100]} />
                {/* <pointLight decay={1.2} color="white" intensity={50} position={[10, 20, 80]} />
                <pointLight decay={1.2} color="white" intensity={50} position={[1, 30, 60]} /> */}
            </group>
        )
    };



    return (
        <Canvas alpha='true' >

            <Cube />
        </Canvas>
    )
}
