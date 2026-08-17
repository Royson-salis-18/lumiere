import React, { useEffect, useRef } from 'react';

const IMAGE_PATHS = [
  'https://images.unsplash.com/photo-1605100804763-247f6612089fb?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573408301145-b98c4af06b8f?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599643478514-4a4e06d528c8?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?w=400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=400&q=85&auto=format&fit=crop'
];

export default function CollectionsIntro() {
  const containerRef = useRef(null);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (!window.THREE) {
      console.error("Three.js not loaded");
      return;
    }
    const THREE = window.THREE;
    const container = containerRef.current;
    const loadingEl = loadingRef.current;
    
    let layers = [];
    const textures = [];
    let loaded = 0;
    let lastTime = 0;
    const DEPTH_LAYERS = 5;
    const IMAGES_PER_LAYER = 10;
    const MAX_WIDTH = 160;
    const MAX_HEIGHT = 160;
    let dragActive = false;
    let lastX = 0;
    let dragVelocity = 0;
    let speedFactor = 1;
    let animationFrameId;

    const LAYER_CONFIG = [
      { scale: 1.5, speed: 80, opacity: 1.0 },
      { scale: 1.0, speed: 40, opacity: 0.85 },
      { scale: 0.8, speed: 30, opacity: 0.7 },
      { scale: 0.6, speed: 20, opacity: 0.55 },
      { scale: 0.5, speed: 15, opacity: 0.4 }
    ];

    let shuffledImages = [];
    let currentImageIndex = 0;

    function shuffleArray(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }

    function getNextRandomImage() {
      if (currentImageIndex >= shuffledImages.length) {
        shuffledImages = shuffleArray(IMAGE_PATHS);
        currentImageIndex = 0;
      }
      const image = shuffledImages[currentImageIndex];
      currentImageIndex++;
      return image;
    }

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background to show through our CSS
    container.appendChild(renderer.domElement);
    let camera;

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function fallbackTexture(layer) {
      const c = document.createElement("canvas");
      c.width = MAX_WIDTH;
      c.height = MAX_HEIGHT;
      const ctx = c.getContext("2d");
      ctx.fillStyle = ["#4a6572", "#344955", "#232f34", "#1c2529", "#0f1518"][layer];
      ctx.fillRect(0, 0, c.width, c.height);
      return new THREE.CanvasTexture(c);
    }
    
    for (let l = 0; l < DEPTH_LAYERS; l++) {
      layers[l] = [];
    }

    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      if (!camera) {
        camera = new THREE.OrthographicCamera(0, w, h, 0, -1000, 1000);
        camera.position.z = 10;
      } else {
        camera.right = w;
        camera.top = h;
        camera.updateProjectionMatrix();
      }
      for (const layer of layers) {
        if (!layer) continue;
        for (const s of layer) {
          scene.remove(s);
          if (s.material.map) s.material.map.dispose();
          s.material.dispose();
          s.geometry.dispose();
        }
      }
      layers = [];
      for (let l = 0; l < DEPTH_LAYERS; l++) layers[l] = [];
      if (textures.length === DEPTH_LAYERS * IMAGES_PER_LAYER) fillViewport();
    }
    
    window.addEventListener("resize", resize);
    resize();
    
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";
    const TOTAL = DEPTH_LAYERS * IMAGES_PER_LAYER;

    function loadAll() {
      shuffledImages = shuffleArray(IMAGE_PATHS);
      currentImageIndex = 0;
      for (let l = 0; l < DEPTH_LAYERS; l++) {
        for (let i = 0; i < IMAGES_PER_LAYER; i++) {
          const path = getNextRandomImage();
          loader.load(path, tex => onLoaded(tex), undefined, () => onLoaded(fallbackTexture(l)));
        }
      }
    }

    function onLoaded(tex) {
      textures.push(tex);
      loaded++;
      if (loadingEl) {
        loadingEl.textContent = `Loading Galleries... ${Math.round((loaded / TOTAL) * 100)}%`;
      }
      if (loaded === TOTAL) initSprites();
    }

    function initSprites() {
      fillViewport();
      if (loadingEl) loadingEl.style.display = "none";
      lastTime = performance.now();
      animate();
    }

    function addSprite(layerIndex, startX) {
      const cfg = LAYER_CONFIG[layerIndex];
      const texIndex = Math.floor(Math.random() * textures.length);
      const texture = textures[texIndex] || fallbackTexture(layerIndex);
      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: cfg.opacity
      });
      const sprite = new THREE.Sprite(mat);
      const image = texture.image;
      let width = MAX_WIDTH;
      let height = MAX_HEIGHT;
      if (image && image.width && image.height) {
        const ratio = image.width / image.height;
        if (ratio > 1) {
          width = MAX_WIDTH;
          height = MAX_WIDTH / ratio;
        } else {
          height = MAX_HEIGHT;
          width = MAX_HEIGHT * ratio;
        }
      }
      const sizeVar = rand(0.85, 1.15);
      const w = width * cfg.scale * sizeVar;
      const h = height * cfg.scale * sizeVar;
      const spacing = w * rand(0.5, 0.9);
      sprite.scale.set(w, h, 1);
      sprite.position.set(startX + w / 2 + spacing, rand(h / 2, container.clientHeight - h / 2), -layerIndex * 50);
      const speedVariation = rand(0.45, 1.15);
      sprite.userData = {
        speed: cfg.speed * speedVariation,
        width: w,
        height: h,
        seed: rand(0, 1000),
        baseY: sprite.position.y,
        opacity: cfg.opacity
      };
      layers[layerIndex].push(sprite);
      scene.add(sprite);
      return sprite;
    }

    function cleanupSprites() {
      if (!container) return;
      const w = container.clientWidth;
      const bufferZone = w * 0.5;
      for (let l = 0; l < DEPTH_LAYERS; l++) {
        if (!layers[l] || layers[l].length === 0) continue;
        const sprites = layers[l];
        const maxSprites = IMAGES_PER_LAYER + 3;
        if (sprites.length > maxSprites) {
          for (let i = sprites.length - 1; i >= 0; i--) {
            const s = sprites[i];
            const ud = s.userData;
            let shouldRemove = false;
            if (speedFactor > 0) {
              shouldRemove = (s.position.x - ud.width / 2) > (w + bufferZone);
            } else if (speedFactor < 0) {
              shouldRemove = (s.position.x + ud.width / 2) < (-bufferZone);
            }
            if (shouldRemove) {
              scene.remove(s);
              if (s.material.map) s.material.map.dispose();
              s.material.dispose();
              sprites.splice(i, 1);
              if (sprites.length <= maxSprites) break;
            }
          }
        }
      }
    }

    function fillViewport() {
      if (!container) return;
      const w = container.clientWidth;
      for (let l = 0; l < DEPTH_LAYERS; l++) {
        let sprites = layers[l];
        if (!sprites) continue;
        let rightMost = sprites.length > 0 ? Math.max(...sprites.map(s => s.position.x + s.userData.width / 2)) : -container.clientWidth * 1.2;
        while (rightMost < w) {
          addSprite(l, rightMost);
          sprites = layers[l];
          rightMost = Math.max(...sprites.map(s => s.position.x + s.userData.width / 2));
        }
      }
    }

    function animate() {
      const now = performance.now();
      const dt = Math.min(40, now - lastTime) / 1000;
      lastTime = now;
      if (!container) return;
      const w = container.clientWidth;
      dragVelocity *= 0.92;
      speedFactor = dragVelocity !== 0 ? Math.sign(dragVelocity) : speedFactor;
      if (Math.random() < 0.01) {
        cleanupSprites();
      }
      for (const sprites of layers) {
        if (!sprites || !sprites.length) continue;
        for (const s of sprites) {
          const ud = s.userData;
          s.position.x += ud.speed * speedFactor * dt;
          if (speedFactor > 0 && s.position.x - ud.width / 2 > w) {
            s.position.x = -ud.width / 2 - rand(0, ud.width);
          } else if (speedFactor < 0 && s.position.x + ud.width / 2 < 0) {
            s.position.x = w + ud.width / 2 + rand(0, ud.width);
          }
          const pulse = 1 + Math.sin(now * 0.001 + ud.seed) * 0.015;
          s.scale.x = ud.width * pulse;
          s.scale.y = ud.height * pulse;
          s.position.y = ud.baseY + Math.sin(now * 0.001 + ud.seed) * 5;
          s.material.opacity = ud.opacity;
        }
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }
    
    loadAll();

    function getX(e) {
      return e.touches ? e.touches[0].clientX : e.clientX;
    }
    
    const handleMouseDown = e => {
      dragActive = true;
      lastX = getX(e);
    };
    const handleMouseMove = e => {
      if (!dragActive) return;
      const x = getX(e);
      const dx = x - lastX;
      lastX = x;
      dragVelocity = dx * 0.02;
    };
    const handleMouseUp = () => {
      dragActive = false;
    };
    const handleTouchStart = e => {
      dragActive = true;
      lastX = getX(e);
    };
    const handleTouchMove = e => {
      if (!dragActive) return;
      const x = getX(e);
      const dx = x - lastX;
      lastX = x;
      dragVelocity = dx * 0.02;
    };
    const handleWheel = e => {
      e.preventDefault();
      const wheelDelta = Math.sign(e.deltaY);
      const direction = wheelDelta > 0 ? 1 : -1;
      const acceleration = 0.8;
      speedFactor = direction * (Math.abs(speedFactor) + acceleration);
      const maxSpeed = 5;
      const sign = Math.sign(speedFactor);
      const absSpeed = Math.min(maxSpeed, Math.abs(speedFactor));
      speedFactor = sign * absSpeed;
      dragVelocity = 0;
      cleanupSprites();
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp);
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("wheel", handleWheel);
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      cancelAnimationFrame(animationFrameId);
      
      for (const layer of layers) {
        if (!layer) continue;
        for (const s of layer) {
          scene.remove(s);
          if (s.material.map) s.material.map.dispose();
          s.material.dispose();
          s.geometry.dispose();
        }
      }
      textures.forEach(t => t.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: 'calc(100vh - 98px)', overflow: 'hidden', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 5, pointerEvents: 'none', background: 'radial-gradient(circle, transparent 40%, var(--cream) 100%)' }}></div>
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, cursor: 'grab' }}></div>
      
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <span className="label" style={{ marginBottom: 12, background: 'rgba(253, 251, 247, 0.8)', padding: '6px 12px', borderRadius: 20 }}>The Collections</span>
        <h1 className="hero-headline" style={{ textAlign: 'center', background: 'rgba(253, 251, 247, 0.8)', padding: '0 20px', borderRadius: 4 }}>Curated For <em>You</em></h1>
      </div>

      <div ref={loadingRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 20, color: 'var(--gold)', fontFamily: 'var(--ff-serif)', fontSize: '1.2rem' }}>
        Loading Galleries...
      </div>
    </div>
  );
}
