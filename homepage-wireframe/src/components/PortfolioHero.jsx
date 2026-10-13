import { useEffect, useRef, useState } from 'react';
import ShinyText from './ShinyText.jsx';

export default function PortfolioHero() {
  const mount = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let disposed = false;
    let renderer;
    let observer;
    let model;
    let animationRoot;
    let visibilityObserver;
    let stopMotion = () => {};
    const textures = new Set();
    const releaseModel = (root) => {
      root.traverse((object) => {
        object.geometry?.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.filter(Boolean).forEach((material) => {
          Object.values(material).forEach((value) => {
            if (value?.isTexture) textures.add(value);
          });
          material.dispose();
        });
      });
      textures.forEach((texture) => {
        texture.source?.data?.close?.();
        texture.dispose();
      });
      textures.clear();
    };

    async function initialize() {
      try {
        const [THREE, { GLTFLoader }] = await Promise.all([
          import('three'), import('three/addons/loaders/GLTFLoader.js'),
        ]);
        if (disposed) return;
        const host = mount.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 100);
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0xffffff, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.15;
        host.appendChild(renderer.domElement);
        scene.add(new THREE.HemisphereLight(0xffffff, 0x8b919b, 2.5));
        const key = new THREE.DirectionalLight(0xffffff, 3);
        key.position.set(-3, 5, 4);
        scene.add(key);
        const fill = new THREE.DirectionalLight(0xffffff, 1);
        fill.position.set(3, 2, -2);
        scene.add(fill);

        const resize = () => {
          if (disposed) return;
          const { width, height } = host.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          if (model) {
            const size = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
            const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
            const distance = Math.max(size.y / 2 / Math.tan(halfFov), size.x / 2 / (Math.tan(halfFov) * camera.aspect)) * 1.12 + size.z / 2;
            camera.position.set(0, size.y * 0.04, distance);
            camera.lookAt(0, 0, 0);
          }
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        };
        observer = new ResizeObserver(resize);
        observer.observe(host);
        resize();
        const gltf = await new GLTFLoader().loadAsync('/models/sitting-person.glb');
        if (disposed) {
          releaseModel(gltf.scene);
          return;
        }
        model = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(model);
        const center = bounds.getCenter(new THREE.Vector3());
        model.position.sub(center);
        animationRoot = new THREE.Group();
        animationRoot.add(model);
        scene.add(animationRoot);
        resize();
        setStatus('ready');
        const motion = matchMedia('(prefers-reduced-motion: reduce)');
        let visible = true;
        let frame = 0;
        let lastTime;
        let elapsed = 0;
        const animate = (time) => {
          frame = 0;
          if (disposed || !visible || document.hidden || motion.matches) return;
          if (lastTime !== undefined) elapsed += Math.min((time - lastTime) / 1000, .05);
          lastTime = time;
          animationRoot.rotation.y = Math.sin(elapsed * .6) * .045;
          renderer.render(scene, camera);
          frame = requestAnimationFrame(animate);
        };
        const updateMotion = () => {
          cancelAnimationFrame(frame);
          frame = 0;
          lastTime = undefined;
          if (motion.matches) {
            animationRoot.rotation.y = 0;
            renderer.render(scene, camera);
          } else if (visible && !document.hidden) frame = requestAnimationFrame(animate);
        };
        visibilityObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          updateMotion();
        });
        visibilityObserver.observe(host);
        motion.addEventListener('change', updateMotion);
        document.addEventListener('visibilitychange', updateMotion);
        stopMotion = () => {
          cancelAnimationFrame(frame);
          motion.removeEventListener('change', updateMotion);
          document.removeEventListener('visibilitychange', updateMotion);
        };
        updateMotion();
      } catch (error) {
        if (!disposed) {
          console.error('Unable to display portfolio model', error);
          setStatus('error');
        }
      }
    }
    initialize();
    return () => {
      disposed = true;
      observer?.disconnect();
      visibilityObserver?.disconnect();
      stopMotion();
      if (model) releaseModel(model);
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return (
    <section className="portfolio-hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="portfolio-title">Portfolio</h1>
      <div className="portfolio-model" ref={mount} role="img" aria-label="A seated person, rendered as a 3D model" aria-busy={status === 'loading'} />
      <p className="hero-corner-heading"><span className="hero-heading-line"><ShinyText text="Precise" color="#171b1d" shineColor="#003ffd" speed={2.5} delay={1.5} shineWidth={35} pauseOnHover /> thinking.</span><span className="hero-heading-line">Purposeful <ShinyText text="execution" color="#171b1d" shineColor="#003ffd" speed={2.5} delay={1.5} shineWidth={35} pauseOnHover />.</span></p>
      {status !== 'ready' && <p className="portfolio-model-status" role="status">{status === 'error' ? 'The 3D model could not load.' : 'Loading 3D model…'}</p>}
    </section>
  );
}
