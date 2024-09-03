"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoCarousel3DProps {
  videos: Video[];
}

const VideoCarousel3D: React.FC<VideoCarousel3DProps> = ({ videos }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 15;
    camera.position.y = -2; // Move the camera down

    const group = new THREE.Group();
    scene.add(group);

    group.rotation.x = Math.PI / 8;

    const shapes = [
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.ConeGeometry(1.5, 3, 32),
      new THREE.CylinderGeometry(1.5, 1.5, 3, 32),
      new THREE.TorusGeometry(1.5, 0.5, 16, 100),
      new THREE.OctahedronGeometry(1.5),
    ];

    videos.forEach((video, index) => {
      const shape = shapes[index % shapes.length];
      const texture = new THREE.TextureLoader().load(
        `/api/thumbnail?videoId=${video.id}`
      );
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(shape, material);

      const angle = (index / videos.length) * Math.PI * 2;
      const radius = 8;
      mesh.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      mesh.userData = {
        video,
        rotationSpeed: Math.random() * 0.02 - 0.01, // Random rotation speed
        rotationAxis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(), // Random rotation axis
      };

      group.add(mesh);
    });

    scene.background = new THREE.Color(0x000000);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(group.children);

      if (intersects.length > 0) {
        const intersectedMesh = intersects[0].object;
        setHoveredVideo(intersectedMesh.userData.video);
      } else {
        setHoveredVideo(null);
      }
    };

    const onMouseClick = (event: MouseEvent) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(group.children);

      if (intersects.length > 0) {
        const selectedMesh = intersects[0].object;
        setSelectedVideo(selectedMesh.userData.video);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.00175; // Main rotation speed
      group.children.forEach((child) => {
        // Individual shape rotation
        child.rotateOnAxis(
          child.userData.rotationAxis,
          child.userData.rotationSpeed
        );
        // Removed the lookAt function to allow free rotation
      });
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Capture the current value of mountRef
    const currentMount = mountRef.current;

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onMouseClick);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [videos]);

  return (
    <div className="relative w-full h-screen">
      <div ref={mountRef} className="w-full h-full" />
      {hoveredVideo && (
        <>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 p-2 rounded">
            <p className="text-white text-center">{hoveredVideo.title}</p>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 p-2 rounded">
            <p className="text-white text-center">{hoveredVideo.title}</p>
          </div>
        </>
      )}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-muted p-4 rounded-lg w-full max-w-[90vh] aspect-video">
            <div className="relative w-full h-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="btn-custom w-full mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel3D;
