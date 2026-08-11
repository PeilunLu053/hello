(() => {
  const mounts = Array.from(document.querySelectorAll('[data-liquid-ether-bg]'));
  if (!mounts.length) return;

  const liquidEtherConfig = {
    colors: ['#010103', '#EF4444', '#EAB308'],
    mouseForce: 24,
    cursorSize: 245,
    resolution: 0.5,
    autoDemo: true,
    autoSpeed: 0.5,
    autoIntensity: 2.9,
    takeoverDuration: 0.25,
    autoResumeDelay: 900,
    autoRampDuration: 0.6,
    pixelRatioCap: 1.5
  };

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uPointer;
    uniform vec2 uPointerVelocity;
    uniform sampler2D uPalette;
    uniform float uCursorSize;
    uniform float uMouseForce;
    uniform float uAutoIntensity;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amp = 0.5;
      for (int i = 0; i < 5; i++) {
        value += amp * noise(p);
        p = mat2(1.62, -1.18, 1.18, 1.62) * p + 0.17;
        amp *= 0.52;
      }
      return value;
    }

    void main() {
      vec2 uv = vUv;
      vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
      vec2 p = (uv - 0.5) * aspect;
      vec2 cursor = (uPointer - 0.5) * aspect;
      vec2 delta = p - cursor;
      vec2 stretchedDelta = vec2(delta.x * 0.42, delta.y * 1.04);
      float radius = max(0.045, uCursorSize / max(uResolution.x, uResolution.y));
      float field = exp(-dot(stretchedDelta, stretchedDelta) / max(radius * radius, 0.0001));
      float velocityWeight = smoothstep(0.035, 0.16, length(uPointerVelocity));
      vec2 wakeDirection = normalize(mix(vec2(0.86, -0.22), normalize(uPointerVelocity + vec2(0.001)), velocityWeight));
      float wakeLength = max(dot(delta, -wakeDirection), 0.0);
      vec2 wakeCross = delta + wakeDirection * wakeLength;
      float wake = exp(-(dot(wakeCross, wakeCross) / max(radius * radius * 0.3, 0.0001) + wakeLength * wakeLength / max(radius * radius * 14.0, 0.0001)));
      field = max(field, wake * 0.9);
      float curl = atan(delta.y, delta.x) + uTime * 0.72;
      vec2 vortex = vec2(cos(curl), sin(curl)) * field;
      vec2 flow = uPointerVelocity * uMouseForce * field * 0.058 + vortex * uAutoIntensity * 0.034;
      vec2 q = uv * vec2(1.72, 1.38) + flow + vec2(uTime * 0.035, -uTime * 0.02);
      float ether = fbm(q * 3.15 + fbm(q * 2.0 + flow * 7.0));
      float ripple = sin((length(stretchedDelta) * 16.0) - uTime * 2.0) * field * 0.24;
      float energy = clamp(length(flow) * 1.2 + ether * 0.82 + ripple, 0.0, 1.0);
      vec3 color = texture2D(uPalette, vec2(energy, 0.5)).rgb;
      float edge = smoothstep(0.92, 0.18, length((uv - 0.5) * vec2(1.0, 0.72)));
      float alpha = clamp((energy * 0.86 + field * 0.28) * edge, 0.0, 0.92);
      vec3 glow = color * (0.7 + field * 1.4);
      gl_FragColor = vec4(glow, alpha);
    }
  `;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const lerp = (from, to, amount) => from + (to - from) * amount;

  const initLiquidEther = (mount, THREE) => {
    const config = liquidEtherConfig;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
    } catch (error) {
      mount.classList.add('is-liquid-ether-unavailable');
      return;
    }

    renderer.setClearColor(new THREE.Color(0x000000), 0);
    renderer.autoClear = true;
    renderer.domElement.className = 'liquid-ether-canvas';
    mount.prepend(renderer.domElement);

    const makePaletteTexture = (stops) => {
      const palette = Array.isArray(stops) && stops.length ? (stops.length === 1 ? [stops[0], stops[0]] : stops) : ['#ffffff', '#ffffff'];
      const data = new Uint8Array(palette.length * 4);
      palette.forEach((stop, index) => {
        const color = new THREE.Color(stop);
        data[index * 4] = Math.round(color.r * 255);
        data[index * 4 + 1] = Math.round(color.g * 255);
        data[index * 4 + 2] = Math.round(color.b * 255);
        data[index * 4 + 3] = 255;
      });
      const texture = new THREE.DataTexture(data, palette.length, 1, THREE.RGBAFormat);
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;
      return texture;
    };

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uPointerVelocity: { value: new THREE.Vector2(0, 0) },
      uPalette: { value: makePaletteTexture(config.colors) },
      uCursorSize: { value: config.cursorSize },
      uMouseForce: { value: config.mouseForce },
      uAutoIntensity: { value: config.autoIntensity }
    };

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        depthWrite: false,
        depthTest: false
      })
    );
    scene.add(mesh);

    const pointer = new THREE.Vector2(0.5, 0.5);
    const pointerPrevious = new THREE.Vector2(0.5, 0.5);
    const pointerTarget = new THREE.Vector2(0.5, 0.5);
    const velocity = new THREE.Vector2(0, 0);
    let width = 1;
    let height = 1;
    let raf = 0;
    let isVisible = true;
    let isRunning = false;
    let hasUserControl = false;
    let lastUserInteraction = performance.now();
    let startTime = performance.now();
    let lastTime = startTime;

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, config.pixelRatioCap);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width * dpr, height * dpr);
    };

    const setPointerFromClient = (clientX, clientY) => {
      const rect = mount.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      const inside = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
      if (!inside) return false;
      pointerTarget.set(clamp((clientX - rect.left) / rect.width, 0, 1), clamp(1 - ((clientY - rect.top) / rect.height), 0, 1));
      hasUserControl = true;
      lastUserInteraction = performance.now();
      return true;
    };

    const onPointerMove = (event) => {
      setPointerFromClient(event.clientX, event.clientY);
    };

    const onTouchMove = (event) => {
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      setPointerFromClient(touch.clientX, touch.clientY);
    };

    const updateAutoPointer = (elapsedSeconds, now) => {
      if (!config.autoDemo) return;
      const idle = now - lastUserInteraction;
      if (hasUserControl && idle < config.autoResumeDelay) return;
      const ramp = clamp((idle - config.autoResumeDelay) / Math.max(config.autoRampDuration * 1000, 1), 0, 1);
      const smoothRamp = ramp * ramp * (3 - 2 * ramp);
      const t = elapsedSeconds * config.autoSpeed;
      const x = 0.5 + Math.sin(t * 1.37) * 0.26 * smoothRamp;
      const y = 0.5 + Math.cos(t * 0.93 + 1.7) * 0.22 * smoothRamp;
      pointerTarget.set(x, y);
    };

    const render = (now) => {
      if (!isRunning) return;
      const elapsedSeconds = (now - startTime) * 0.001;
      const dt = Math.min(Math.max((now - lastTime) / 1000, 0.001), 0.08);
      lastTime = now;
      updateAutoPointer(elapsedSeconds, now);
      const ease = 1 - Math.exp(-dt / Math.max(config.takeoverDuration, 0.001));
      pointer.x = lerp(pointer.x, pointerTarget.x, ease);
      pointer.y = lerp(pointer.y, pointerTarget.y, ease);
      velocity.subVectors(pointer, pointerPrevious).multiplyScalar(1 / Math.max(dt, 0.001));
      velocity.multiplyScalar(config.resolution);
      pointerPrevious.copy(pointer);
      uniforms.uTime.value = elapsedSeconds;
      uniforms.uPointer.value.copy(pointer);
      uniforms.uPointerVelocity.value.copy(velocity);
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };

    const start = () => {
      if (isRunning || document.hidden || !isVisible) return;
      isRunning = true;
      lastTime = performance.now();
      raf = window.requestAnimationFrame(render);
    };

    const pause = () => {
      isRunning = false;
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        pause();
      } else {
        start();
      }
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize, { passive: true });
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) start();
        else pause();
      }, { threshold: [0, 0.01, 0.1], rootMargin: '120px 0px' }).observe(mount);
    }

    resize();
    renderer.render(scene, camera);
    start();
  };

  import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js')
    .then((THREE) => mounts.forEach((mount) => initLiquidEther(mount, THREE)))
    .catch(() => {
      mounts.forEach((mount) => mount.classList.add('is-liquid-ether-unavailable'));
    });
})();
