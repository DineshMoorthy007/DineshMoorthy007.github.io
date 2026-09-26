import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Laptop, Monitor, Coffee, Play, CheckCircle2, RotateCcw, Code, Terminal, Sparkles, UserCheck, Maximize2, X, Copy, Check } from 'lucide-react';

interface IsometricWorkspaceProps {
  onSelectProject?: (projectId: string) => void;
}

export type EditorFile = 'recruiter_summary.json' | 'AIVidya.py' | 'BB84_qkd.py' | 'QuickNote.go';

interface FileContent {
  filename: string;
  lang: string;
  lines: Array<{ num: string; tokens: Array<{ text: string; color: string }> }>;
  rawContent: string;
  terminalOutput: string;
  stats: string;
}

const FILES_DATA: Record<EditorFile, FileContent> = {
  'recruiter_summary.json': {
    filename: 'recruiter_summary.json',
    lang: 'JSON (Recruiter Summary)',
    lines: [
      {
        num: '1',
        tokens: [{ text: '{', color: '#F8FAFC' }],
      },
      {
        num: '2',
        tokens: [
          { text: '  "candidate"', color: '#38BDF8' },
          { text: ': ', color: '#F8FAFC' },
          { text: '"Dinesh Moorthy"', color: '#FDE047' },
          { text: ',', color: '#94A3B8' },
        ],
      },
      {
        num: '3',
        tokens: [
          { text: '  "degree"', color: '#38BDF8' },
          { text: ': ', color: '#F8FAFC' },
          { text: '"B.E. CSE (2024-2028)"', color: '#FDE047' },
          { text: ', ', color: '#94A3B8' },
          { text: '"cgpa"', color: '#38BDF8' },
          { text: ': ', color: '#F8FAFC' },
          { text: '8.3', color: '#C084FC' },
          { text: ',', color: '#94A3B8' },
        ],
      },
      {
        num: '4',
        tokens: [
          { text: '  "minor"', color: '#38BDF8' },
          { text: ': ', color: '#F8FAFC' },
          { text: '"Quantum Computing"', color: '#FDE047' },
          { text: ',', color: '#94A3B8' },
        ],
      },
      {
        num: '5',
        tokens: [
          { text: '  "status"', color: '#38BDF8' },
          { text: ': ', color: '#F8FAFC' },
          { text: '"OPEN TO INTERNSHIPS (Chennai)"', color: '#4ADE80' },
          { text: ',', color: '#94A3B8' },
        ],
      },
      {
        num: '6',
        tokens: [
          { text: '  "stack"', color: '#38BDF8' },
          { text: ': [', color: '#F8FAFC' },
          { text: '"React 19"', color: '#FDE047' },
          { text: ', ', color: '#94A3B8' },
          { text: '"Go"', color: '#FDE047' },
          { text: ', ', color: '#94A3B8' },
          { text: '"Python"', color: '#FDE047' },
          { text: ', ', color: '#94A3B8' },
          { text: '"Qiskit"', color: '#FDE047' },
          { text: ', ', color: '#94A3B8' },
          { text: '"Docker"', color: '#FDE047' },
          { text: ']', color: '#F8FAFC' },
        ],
      },
      {
        num: '7',
        tokens: [{ text: '}', color: '#F8FAFC' }],
      },
    ],
    rawContent: `{\n  "candidate": "Dinesh Moorthy",\n  "degree": "B.E. CSE (2024-2028)",\n  "cgpa": 8.3,\n  "minor": "Quantum Computing",\n  "status": "OPEN TO INTERNSHIPS · Chennai & Nearby",\n  "stack": ["React 19", "Go", "Python", "Qiskit", "Docker"],\n  "credentials": ["UiPath Associate", "MongoDB Vector", "IBM Docker"],\n  "leadership": "Bug Event Coordinator · CSE Symposium"\n}`,
    terminalOutput: '✓ Candidate Verified: 8.3 CGPA · 2028 Grad · Quantum Minor · Ready for Hire',
    stats: 'RECRUITER SUMMARY · VERIFIED CANDIDATE',
  },
  'AIVidya.py': {
    filename: 'AIVidya.py',
    lang: 'Python (Multilingual NLP)',
    lines: [
      {
        num: '1',
        tokens: [
          { text: 'import ', color: '#F472B6' },
          { text: 'torch, transformers', color: '#F8FAFC' },
          { text: '  # Indic NLP Engine', color: '#94A3B8' },
        ],
      },
      {
        num: '2',
        tokens: [
          { text: 'class ', color: '#818CF8' },
          { text: 'VidyaEngine', color: '#38BDF8' },
          { text: ':', color: '#F8FAFC' },
        ],
      },
      {
        num: '3',
        tokens: [
          { text: '  def ', color: '#818CF8' },
          { text: '__init__', color: '#34D399' },
          { text: '(self, langs=[', color: '#F8FAFC' },
          { text: '"ta"', color: '#FDE047' },
          { text: ', ', color: '#94A3B8' },
          { text: '"hi"', color: '#FDE047' },
          { text: ', ', color: '#94A3B8' },
          { text: '"en"', color: '#FDE047' },
          { text: ']):', color: '#F8FAFC' },
        ],
      },
      {
        num: '4',
        tokens: [
          { text: '    self.model = AutoModel.from_pretrained(', color: '#F8FAFC' },
          { text: '"indic-bert"', color: '#FDE047' },
          { text: ')', color: '#F8FAFC' },
        ],
      },
      {
        num: '5',
        tokens: [
          { text: '  async def ', color: '#818CF8' },
          { text: 'predict', color: '#34D399' },
          { text: '(self, query: str):', color: '#F8FAFC' },
        ],
      },
      {
        num: '6',
        tokens: [
          { text: '    return ', color: '#F472B6' },
          { text: '{"status": 200, "latency_ms": 38}', color: '#38BDF8' },
        ],
      },
    ],
    rawContent: `import torch, transformers\nclass VidyaEngine:\n  def __init__(self, langs=["ta", "hi", "en"]):\n    self.model = AutoModel.from_pretrained("indic-bert")\n  async def predict(self, query: str):\n    return {"status": 200, "latency_ms": 38}`,
    terminalOutput: '✓ Indic NLP token pipeline ready: 4 regional dialects online (38ms)',
    stats: 'AI VIDYA · 99.8% ACCURACY',
  },
  'BB84_qkd.py': {
    filename: 'BB84_qkd.py',
    lang: 'Python (Qiskit QKD)',
    lines: [
      {
        num: '1',
        tokens: [
          { text: 'from ', color: '#F472B6' },
          { text: 'qiskit ', color: '#38BDF8' },
          { text: 'import ', color: '#F472B6' },
          { text: 'QuantumCircuit, Aer', color: '#F8FAFC' },
        ],
      },
      {
        num: '2',
        tokens: [
          { text: 'class ', color: '#818CF8' },
          { text: 'BB84Protocol', color: '#C084FC' },
          { text: ':', color: '#F8FAFC' },
        ],
      },
      {
        num: '3',
        tokens: [
          { text: '  def ', color: '#818CF8' },
          { text: 'encode_key', color: '#34D399' },
          { text: '(self, n_qubits=128):', color: '#F8FAFC' },
        ],
      },
      {
        num: '4',
        tokens: [
          { text: '    qc = QuantumCircuit(n_qubits, n_qubits)', color: '#F8FAFC' },
        ],
      },
      {
        num: '5',
        tokens: [
          { text: '    qc.h(range(n_qubits))', color: '#38BDF8' },
          { text: '  # Superposition', color: '#94A3B8' },
        ],
      },
      {
        num: '6',
        tokens: [
          { text: '    return ', color: '#F472B6' },
          { text: 'qc.measure_all()  # QBER: 0.00%', color: '#34D399' },
        ],
      },
    ],
    rawContent: `from qiskit import QuantumCircuit, Aer\nclass BB84Protocol:\n  def encode_key(self, n_qubits=128):\n    qc = QuantumCircuit(n_qubits, n_qubits)\n    qc.h(range(n_qubits))\n    return qc.measure_all()`,
    terminalOutput: '✓ Qiskit circuit simulated: 128 qubits sifted | QBER: 0.00% (Secure Key Established)',
    stats: 'BB84 QKD · 128 QUBITS SIFTED',
  },
  'QuickNote.go': {
    filename: 'QuickNote.go',
    lang: 'Go (Polyglot Sync)',
    lines: [
      {
        num: '1',
        tokens: [
          { text: 'package ', color: '#F472B6' },
          { text: 'main', color: '#F8FAFC' },
          { text: '  // Multi-stack Polyglot Sync Hub', color: '#94A3B8' },
        ],
      },
      {
        num: '2',
        tokens: [
          { text: 'type ', color: '#818CF8' },
          { text: 'SyncHub ', color: '#38BDF8' },
          { text: 'struct {', color: '#F8FAFC' },
        ],
      },
      {
        num: '3',
        tokens: [
          { text: '    Broadcast chan []byte', color: '#F8FAFC' },
        ],
      },
      {
        num: '4',
        tokens: [
          { text: '    Clients   map[*websocket.Conn]bool', color: '#F8FAFC' },
        ],
      },
      {
        num: '5',
        tokens: [
          { text: '}', color: '#F8FAFC' },
        ],
      },
      {
        num: '6',
        tokens: [
          { text: 'func ', color: '#818CF8' },
          { text: '(h *SyncHub) ', color: '#F8FAFC' },
          { text: 'StreamUpdates', color: '#34D399' },
          { text: '() { ... }', color: '#F8FAFC' },
        ],
      },
    ],
    rawContent: `package main\ntype SyncHub struct {\n    Broadcast chan []byte\n    Clients   map[*websocket.Conn]bool\n}\nfunc (h *SyncHub) StreamUpdates() {\n    for note := range h.Broadcast { go broadcast(note) }\n}`,
    terminalOutput: '✓ Go Goroutines active: WebSocket stream online, sub-5ms sync to React client',
    stats: 'QUICK-NOTE · REALTIME SYNC',
  },
};

export const IsometricWorkspace: React.FC<IsometricWorkspaceProps> = ({ onSelectProject }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Default active file is recruiter_summary.json!
  const [activeFile, setActiveFile] = useState<EditorFile>('recruiter_summary.json');
  const [buildStatus, setBuildStatus] = useState<'READY' | 'RUNNING' | 'COMPILED'>('READY');
  const [monitorMode, setMonitorMode] = useState<'SERVICES' | 'ARCHITECTURE' | 'LATENCY'>('SERVICES');
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [webGlAvailable, setWebGlAvailable] = useState<boolean>(true);
  const [inspectModalOpen, setInspectModalOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // References for render loop
  const activeFileRef = useRef<EditorFile>('recruiter_summary.json');
  activeFileRef.current = activeFile;

  const buildStatusRef = useRef<'READY' | 'RUNNING' | 'COMPILED'>('READY');
  buildStatusRef.current = buildStatus;

  const monitorModeRef = useRef<'SERVICES' | 'ARCHITECTURE' | 'LATENCY'>('SERVICES');
  monitorModeRef.current = monitorMode;

  const animTimeRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const isInteractingRef = useRef<boolean>(false);
  isInteractingRef.current = isInteracting;

  // On-screen cursor coordinates on laptop screen [0..2048, 0..1280]
  const screenCursorRef = useRef<{ x: number; y: number; isOver: boolean }>({ x: 1024, y: 640, isOver: false });

  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const registerInteraction = useCallback(() => {
    setIsInteracting(true);

    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }

    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2500);
  }, []);

  const handleRunCode = () => {
    registerInteraction();
    setBuildStatus('RUNNING');
    setTimeout(() => {
      setBuildStatus('COMPILED');
      setTimeout(() => {
        setBuildStatus('READY');
      }, 1800);
    }, 1100);
  };

  const handleSelectFile = (file: EditorFile) => {
    registerInteraction();
    setActiveFile(file);
  };

  const handleCopyProfile = () => {
    navigator.clipboard.writeText(FILES_DATA[activeFile].rawContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvasTest = document.createElement('canvas');
    const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
    if (!gl) {
      setWebGlAvailable(false);
      return;
    }

    let animationFrameId: number;
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. ZOOMED-OUT PERSPECTIVE CAMERA
    // Pull camera back to 7.0–8.5 distance with 38° FOV so the ENTIRE desk (4.4 units),
    // both screens, and all accessories fit comfortably with generous margin on all screens!
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    // ========================================================
    // USER-CONTROLLED 3D CAMERA ORBIT & ZOOM WITH DAMPING
    // ========================================================
    const targetLookAt = new THREE.Vector3(0, 0.42, 0);

    let defaultDist = 7.1;
    let defaultPosY = 2.85;
    let targetFov = 38;

    const maxDeltaAngle = Math.PI / 4; // Approximately ±45° limit

    let defaultRadius = Math.sqrt(
      (defaultPosY - targetLookAt.y) * (defaultPosY - targetLookAt.y) +
        defaultDist * defaultDist
    );
    let defaultPhi = Math.atan2(defaultDist, defaultPosY - targetLookAt.y);
    const defaultTheta = 0;

    let minRadius = defaultRadius * 0.72;
    let maxRadius = defaultRadius * 1.35;
    let minPhi = Math.max(0.65, defaultPhi - maxDeltaAngle);
    let maxPhi = Math.min(1.50, defaultPhi + maxDeltaAngle);

    const targetSpherical = {
      radius: defaultRadius,
      theta: defaultTheta,
      phi: defaultPhi,
    };

    const currentSpherical = {
      radius: defaultRadius,
      theta: defaultTheta,
      phi: defaultPhi,
    };

    const userHasInteractedRef = { current: false };

    // Zoomed-out camera calculation ensuring ZERO clipping across mobile, tablet, and desktop
    // Default camera angle is slightly lowered so workspace sits naturally within the viewport
    const updateResponsiveCamera = (w: number, h: number) => {
      const aspect = w / h;
      camera.aspect = aspect;

      if (w < 480) {
        defaultDist = 8.8;
        defaultPosY = 3.5;
        targetFov = 40;
      } else if (w < 768) {
        defaultDist = 8.0;
        defaultPosY = 3.1;
        targetFov = 38;
      } else if (w < 1024) {
        defaultDist = 7.5;
        defaultPosY = 2.95;
        targetFov = 38;
      } else {
        defaultDist = 7.1;
        defaultPosY = 2.85;
        targetFov = 38;
      }

      const rDy = defaultPosY - targetLookAt.y;
      const rDz = defaultDist;
      defaultRadius = Math.sqrt(rDy * rDy + rDz * rDz);
      defaultPhi = Math.atan2(rDz, rDy);

      minRadius = defaultRadius * 0.72;
      maxRadius = defaultRadius * 1.35;
      minPhi = Math.max(0.65, defaultPhi - maxDeltaAngle);
      maxPhi = Math.min(1.50, defaultPhi + maxDeltaAngle);

      if (!userHasInteractedRef.current) {
        targetSpherical.radius = defaultRadius;
        targetSpherical.phi = defaultPhi;
        currentSpherical.radius = defaultRadius;
        currentSpherical.phi = defaultPhi;
      }

      camera.fov = targetFov;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    updateResponsiveCamera(width, height);

    // 3. Studio Daylight Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfffbf2, 2.4);
    mainKeyLight.position.set(4, 8, 5);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    mainKeyLight.shadow.bias = -0.00005;
    scene.add(mainKeyLight);

    const blueFill = new THREE.DirectionalLight(0x5b8def, 0.9);
    blueFill.position.set(-5, 4, 2);
    scene.add(blueFill);

    const screenGlowLight = new THREE.PointLight(0x38cfa3, 1.4, 4.0);
    screenGlowLight.position.set(0.2, 1.2, 0.4);
    scene.add(screenGlowLight);

    const mouseLight = new THREE.PointLight(0xffffff, 0.8, 6.0);
    mouseLight.position.set(1.5, 4.0, 4.0);
    scene.add(mouseLight);

    // Master Workspace Group
    const workspaceGroup = new THREE.Group();
    workspaceGroup.position.set(0, -0.4, 0);
    scene.add(workspaceGroup);

    // ========================================================
    // MATERIALS
    // ========================================================
    const woodMat = new THREE.MeshStandardMaterial({
      color: 0xecdcc9,
      roughness: 0.4,
      metalness: 0.05,
    });

    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.35,
      metalness: 0.8,
    });

    const deskMatMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.7,
      metalness: 0.1,
    });

    const silverAluminumMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.25,
      metalness: 0.85,
    });

    const potMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.5,
      metalness: 0.05,
    });

    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.3,
      metalness: 0.1,
    });

    const mugMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.1,
    });

    // ========================================================
    // 1. DESK (Proportioned so all 4 legs & edges are visible)
    // ========================================================
    const deskGroup = new THREE.Group();
    workspaceGroup.add(deskGroup);

    const tabletop = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.1, 2.6), woodMat);
    tabletop.position.set(0, 0.7, 0);
    tabletop.receiveShadow = true;
    tabletop.castShadow = true;
    deskGroup.add(tabletop);

    const legGeo = new THREE.CylinderGeometry(0.045, 0.035, 1.4, 16);
    const legPositions: [number, number, number][] = [
      [-1.95, 0.0, -1.1],
      [1.95, 0.0, -1.1],
      [-1.95, 0.0, 1.1],
      [1.95, 0.0, 1.1],
    ];
    legPositions.forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(legGeo, darkMetalMat);
      leg.position.set(lx, ly, lz);
      leg.castShadow = true;
      deskGroup.add(leg);
    });

    const deskMatMesh = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.012, 1.8), deskMatMaterial);
    deskMatMesh.position.set(0, 0.755, 0.1);
    deskMatMesh.receiveShadow = true;
    deskGroup.add(deskMatMesh);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(5.4, 3.6),
      new THREE.ShadowMaterial({ opacity: 0.12 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -0.7, 0);
    shadowPlane.receiveShadow = true;
    workspaceGroup.add(shadowPlane);

    // ========================================================
    // 2. THE LAPTOP (Prominent Display with 2048x1280 Texture)
    // ========================================================
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0.35, 0.76, 0.35);
    laptopGroup.rotation.y = -0.04;
    workspaceGroup.add(laptopGroup);

    // Enlarged laptop base to make screen prominent
    const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.035, 1.15), silverAluminumMat);
    laptopBase.castShadow = true;
    laptopGroup.add(laptopBase);

    const keyboardWell = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.005, 0.58), darkMetalMat);
    keyboardWell.position.set(0, 0.018, -0.16);
    laptopGroup.add(keyboardWell);

    const trackpad = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.005, 0.32), silverAluminumMat);
    trackpad.position.set(0, 0.018, 0.3);
    laptopGroup.add(trackpad);

    // Screen Lid: Angled at 0.22 rad for optimal perpendicular viewing angle from elevated camera
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.02, -0.57);
    lidGroup.rotation.x = 0.22;
    laptopGroup.add(lidGroup);

    const screenBezel = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.22, 0.025), darkMetalMat);
    screenBezel.position.set(0, 0.61, 0);
    screenBezel.castShadow = true;
    lidGroup.add(screenBezel);

    const screenBack = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.22, 0.005), silverAluminumMat);
    screenBack.position.set(0, 0.61, -0.014);
    lidGroup.add(screenBack);

    // 2048x1280 Ultra-Crisp Canvas
    const laptopCanvas = document.createElement('canvas');
    laptopCanvas.width = 2048;
    laptopCanvas.height = 1280;
    const laptopCtx = laptopCanvas.getContext('2d')!;
    laptopCtx.imageSmoothingEnabled = true;

    const laptopTexture = new THREE.CanvasTexture(laptopCanvas);
    laptopTexture.generateMipmaps = true;
    laptopTexture.minFilter = THREE.LinearMipmapLinearFilter;
    laptopTexture.magFilter = THREE.LinearFilter;
    laptopTexture.anisotropy = maxAnisotropy;

    const screenDisplay = new THREE.Mesh(
      new THREE.PlaneGeometry(1.8, 1.15),
      new THREE.MeshBasicMaterial({ map: laptopTexture })
    );
    screenDisplay.position.set(0, 0.61, 0.014);
    lidGroup.add(screenDisplay);

    // ========================================================
    // 3. EXTERNAL MONITOR (Enlarged 2048x1280 Display)
    // ========================================================
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(-1.05, 0.76, -0.28);
    monitorGroup.rotation.y = 0.12;
    monitorGroup.rotation.x = 0.08;
    workspaceGroup.add(monitorGroup);

    const standBase = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.02, 0.45), darkMetalMat);
    standBase.position.set(0, 0.01, 0);
    standBase.castShadow = true;
    monitorGroup.add(standBase);

    const standNeck = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.95, 0.1), darkMetalMat);
    standNeck.position.set(0, 0.475, -0.05);
    standNeck.castShadow = true;
    monitorGroup.add(standNeck);

    const monitorBezel = new THREE.Mesh(new THREE.BoxGeometry(2.35, 1.48, 0.045), darkMetalMat);
    monitorBezel.position.set(0, 1.0, 0);
    monitorBezel.castShadow = true;
    monitorGroup.add(monitorBezel);

    const monitorCanvas = document.createElement('canvas');
    monitorCanvas.width = 2048;
    monitorCanvas.height = 1280;
    const monitorCtx = monitorCanvas.getContext('2d')!;
    monitorCtx.imageSmoothingEnabled = true;

    const monitorTexture = new THREE.CanvasTexture(monitorCanvas);
    monitorTexture.generateMipmaps = true;
    monitorTexture.minFilter = THREE.LinearMipmapLinearFilter;
    monitorTexture.magFilter = THREE.LinearFilter;
    monitorTexture.anisotropy = maxAnisotropy;

    const monitorDisplay = new THREE.Mesh(
      new THREE.PlaneGeometry(2.28, 1.4),
      new THREE.MeshBasicMaterial({ map: monitorTexture })
    );
    monitorDisplay.position.set(0, 1.0, 0.024);
    monitorGroup.add(monitorDisplay);

    // ========================================================
    // 4. DESK ACCESSORIES
    // ========================================================
    const extKeyboard = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.025, 0.35), darkMetalMat);
    extKeyboard.position.set(-1.05, 0.77, 0.4);
    extKeyboard.castShadow = true;
    workspaceGroup.add(extKeyboard);

    const mouseMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.28), silverAluminumMat);
    mouseMesh.position.set(1.4, 0.78, 0.4);
    mouseMesh.castShadow = true;
    workspaceGroup.add(mouseMesh);

    // Coffee Mug with steam
    const coffeeGroup = new THREE.Group();
    coffeeGroup.position.set(1.55, 0.76, -0.2);
    workspaceGroup.add(coffeeGroup);

    const mugCyl = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.28, 24), mugMat);
    mugCyl.position.set(0, 0.14, 0);
    mugCyl.castShadow = true;
    coffeeGroup.add(mugCyl);

    const coffeeLiquid = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.02, 24), new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.2 }));
    coffeeLiquid.position.set(0, 0.25, 0);
    coffeeGroup.add(coffeeLiquid);

    const mugHandle = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.025, 12, 24), mugMat);
    mugHandle.position.set(0.14, 0.14, 0);
    mugHandle.rotation.y = Math.PI / 2;
    coffeeGroup.add(mugHandle);

    const steamPuffs: Array<{ mesh: THREE.Mesh; speed: number; phase: number }> = [];
    for (let i = 0; i < 4; i++) {
      const puff = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 })
      );
      puff.position.set(0, 0.3 + i * 0.12, 0);
      coffeeGroup.add(puff);
      steamPuffs.push({ mesh: puff, speed: 0.4 + i * 0.15, phase: i * 1.5 });
    }

    // Desk Plant on the left
    const plantGroup = new THREE.Group();
    plantGroup.position.set(-1.75, 0.76, -0.6);
    workspaceGroup.add(plantGroup);

    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.13, 0.28, 20), potMat);
    pot.position.set(0, 0.14, 0);
    pot.castShadow = true;
    plantGroup.add(pot);

    const plantLeaves: THREE.Mesh[] = [];
    const leafAngles = [0, (Math.PI * 2) / 4, (Math.PI * 4) / 4, (Math.PI * 6) / 4, Math.PI / 3];
    leafAngles.forEach((ang) => {
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.02), leafMat);
      leaf.position.set(Math.cos(ang) * 0.08, 0.32, Math.sin(ang) * 0.08);
      leaf.rotation.set(0.4, ang, 0.3);
      leaf.castShadow = true;
      plantGroup.add(leaf);
      plantLeaves.push(leaf);
    });

    // ========================================================
    // CURSOR, POINTER DRAG ORBIT & RAYCASTING INTERACTION
    // ========================================================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    let isPointerDown = false;
    let isDragging = false;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;
      isPointerDown = true;
      isDragging = false;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      try {
        container.setPointerCapture(event.pointerId);
      } catch (_) {}
    };

    const handlePointerMove = (event: PointerEvent) => {
      registerInteraction();
      const rect = container.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      mouse.x = nx;
      mouse.y = ny;

      mouseLight.position.x = nx * 3.0;
      mouseLight.position.y = 4.0 + ny * 2.0;

      if (isPointerDown) {
        const moveDist = Math.hypot(event.clientX - pointerStartX, event.clientY - pointerStartY);
        if (moveDist > 4) {
          isDragging = true;
          userHasInteractedRef.current = true;
          container.style.cursor = 'grabbing';

          const deltaX = event.clientX - lastPointerX;
          const deltaY = event.clientY - lastPointerY;
          lastPointerX = event.clientX;
          lastPointerY = event.clientY;

          const rotSpeed = 0.0055;
          targetSpherical.theta = THREE.MathUtils.clamp(
            targetSpherical.theta - deltaX * rotSpeed,
            defaultTheta - maxDeltaAngle,
            defaultTheta + maxDeltaAngle
          );
          targetSpherical.phi = THREE.MathUtils.clamp(
            targetSpherical.phi - deltaY * rotSpeed,
            minPhi,
            maxPhi
          );
          return;
        }
      }

      // If not dragging, perform raycasting hover
      raycaster.setFromCamera(mouse, camera);
      const screenIntersects = raycaster.intersectObject(screenDisplay, false);

      if (screenIntersects.length > 0 && screenIntersects[0].uv) {
        const uv = screenIntersects[0].uv;
        screenCursorRef.current = {
          x: uv.x * 2048,
          y: (1 - uv.y) * 1280,
          isOver: true,
        };
        container.style.cursor = 'crosshair';
        setHoveredObject('CODE EDITOR · CLICK TO RUN');
      } else {
        screenCursorRef.current.isOver = false;

        const generalIntersects = raycaster.intersectObjects([laptopGroup, monitorGroup, coffeeGroup, plantGroup], true);
        if (generalIntersects.length > 0) {
          let hit = generalIntersects[0].object;
          let isLap = false;
          let isMon = false;
          let isCof = false;
          let curr: THREE.Object3D | null = hit;
          while (curr) {
            if (curr === laptopGroup) isLap = true;
            if (curr === monitorGroup) isMon = true;
            if (curr === coffeeGroup) isCof = true;
            curr = curr.parent;
          }

          if (isLap) setHoveredObject('LAPTOP · CLICK TO RUN OR INSPECT');
          else if (isMon) setHoveredObject('MONITOR · CLICK TO CYCLE VIEW');
          else if (isCof) setHoveredObject('BUILD FUEL');
          else setHoveredObject('IDEAS');
          container.style.cursor = 'pointer';
        } else {
          setHoveredObject(null);
          container.style.cursor = 'grab';
        }
      }
    };

    const handleClickInteraction = () => {
      raycaster.setFromCamera(mouse, camera);

      // Check click on Laptop Screen
      const screenIntersects = raycaster.intersectObject(screenDisplay, false);
      if (screenIntersects.length > 0) {
        handleRunCode();
        return;
      }

      // Check click on Monitor
      const monitorIntersects = raycaster.intersectObjects([monitorGroup], true);
      if (monitorIntersects.length > 0) {
        setMonitorMode((prev) => {
          if (prev === 'SERVICES') return 'ARCHITECTURE';
          if (prev === 'ARCHITECTURE') return 'LATENCY';
          return 'SERVICES';
        });
        return;
      }

      const laptopIntersects = raycaster.intersectObjects([laptopGroup], true);
      if (laptopIntersects.length > 0) {
        handleRunCode();
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (isPointerDown) {
        try {
          container.releasePointerCapture(event.pointerId);
        } catch (_) {}
        isPointerDown = false;
        container.style.cursor = 'grab';

        if (!isDragging) {
          handleClickInteraction();
        }
        isDragging = false;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      userHasInteractedRef.current = true;
      registerInteraction();
      const zoomFactor = event.deltaY * 0.0022;
      targetSpherical.radius = THREE.MathUtils.clamp(
        targetSpherical.radius + zoomFactor * targetSpherical.radius,
        minRadius,
        maxRadius
      );
    };

    // Touch pinch-to-zoom
    let touchBaseDist = 0;
    let touchBaseRadius = targetSpherical.radius;
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 2) {
        touchBaseDist = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        touchBaseRadius = targetSpherical.radius;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 2 && touchBaseDist > 0) {
        event.preventDefault();
        userHasInteractedRef.current = true;
        registerInteraction();
        const curDist = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        if (curDist > 0) {
          const ratio = touchBaseDist / curDist;
          targetSpherical.radius = THREE.MathUtils.clamp(
            touchBaseRadius * ratio,
            minRadius,
            maxRadius
          );
        }
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    // ========================================================
    // RENDER LAPTOP SCREEN: BOLD, 2048x1280 HIGH-CONTRAST TEXT
    // ========================================================
    const renderLaptopScreen = (elapsed: number, fileKey: EditorFile, status: string) => {
      const fileData = FILES_DATA[fileKey];

      // Solid Obsidian Background
      laptopCtx.fillStyle = '#040711';
      laptopCtx.fillRect(0, 0, 2048, 1280);

      // Top Header Bar
      laptopCtx.fillStyle = '#0B1120';
      laptopCtx.fillRect(0, 0, 2048, 115);

      // macOS control dots
      laptopCtx.fillStyle = '#EF4444';
      laptopCtx.beginPath();
      laptopCtx.arc(55, 58, 16, 0, Math.PI * 2);
      laptopCtx.fill();

      laptopCtx.fillStyle = '#F59E0B';
      laptopCtx.beginPath();
      laptopCtx.arc(105, 58, 16, 0, Math.PI * 2);
      laptopCtx.fill();

      laptopCtx.fillStyle = '#10B981';
      laptopCtx.beginPath();
      laptopCtx.arc(155, 58, 16, 0, Math.PI * 2);
      laptopCtx.fill();

      // Active File Pill
      laptopCtx.fillStyle = '#1E293B';
      laptopCtx.beginPath();
      laptopCtx.roundRect(210, 20, 680, 75, 12);
      laptopCtx.fill();

      laptopCtx.font = 'bold 42px "JetBrains Mono", monospace';
      laptopCtx.fillStyle = fileKey === 'recruiter_summary.json' ? '#FDE047' : '#38BDF8';
      laptopCtx.fillText(`📁 ${fileKey}`, 240, 72);

      // Status indicator on right of titlebar
      laptopCtx.font = 'bold 38px "JetBrains Mono", monospace';
      laptopCtx.fillStyle = status === 'RUNNING' ? '#F59E0B' : '#10B981';
      laptopCtx.textAlign = 'right';
      laptopCtx.fillText(status === 'RUNNING' ? '⟳ VALIDATING' : '● READY', 1980, 72);
      laptopCtx.textAlign = 'left';

      // Editor Body: Large, Bold Code Lines with High Contrast
      const lineSpacing = 96;
      fileData.lines.forEach((line, idx) => {
        const y = 220 + idx * lineSpacing;

        // Line Number
        laptopCtx.fillStyle = '#475569';
        laptopCtx.font = 'bold 44px "JetBrains Mono", monospace';
        laptopCtx.fillText(line.num, 50, y);

        // Tokens
        let curX = 130;
        line.tokens.forEach((tok) => {
          laptopCtx.fillStyle = tok.color;
          laptopCtx.font = 'bold 52px "JetBrains Mono", monospace';
          laptopCtx.fillText(tok.text, curX, y);
          curX += laptopCtx.measureText(tok.text).width;
        });

        // Blinking typing cursor on last line
        if (idx === fileData.lines.length - 1 && Math.floor(elapsed * 2.5) % 2 === 0) {
          laptopCtx.fillStyle = '#38BDF8';
          laptopCtx.fillRect(curX + 8, y - 44, 10, 52);
        }
      });

      // Terminal Output Drawer (Bottom of screen)
      laptopCtx.fillStyle = '#020617';
      laptopCtx.fillRect(30, 870, 1988, 380);
      laptopCtx.strokeStyle = '#1E293B';
      laptopCtx.lineWidth = 4;
      laptopCtx.strokeRect(30, 870, 1988, 380);

      // Terminal Header
      laptopCtx.fillStyle = '#0F172A';
      laptopCtx.fillRect(30, 870, 1988, 75);

      laptopCtx.fillStyle = '#38BDF8';
      laptopCtx.font = 'bold 40px "JetBrains Mono", monospace';
      laptopCtx.fillText('TERMINAL · VERIFIED CANDIDATE SUITE', 65, 922);

      laptopCtx.fillStyle = '#10B981';
      laptopCtx.fillText('● ACTIVE', 1840, 922);

      // Terminal Output lines
      laptopCtx.font = 'bold 48px "JetBrains Mono", monospace';
      laptopCtx.fillStyle = status === 'RUNNING' ? '#F59E0B' : '#34D399';
      const outputMsg = status === 'RUNNING' ? '⟳ validating candidate profile & running unit tests...' : fileData.terminalOutput;
      laptopCtx.fillText(outputMsg, 65, 1025);

      laptopCtx.font = 'bold 38px "JetBrains Mono", monospace';
      laptopCtx.fillStyle = '#94A3B8';
      laptopCtx.fillText('Status: READY · Chennai & Nearby · Contact: dineshmoorthysrr@gmail.com', 65, 1140);

      // Draw On-Screen Mouse Cursor
      if (screenCursorRef.current.isOver) {
        const scx = screenCursorRef.current.x;
        const scy = screenCursorRef.current.y;

        laptopCtx.save();
        laptopCtx.shadowColor = 'rgba(0,0,0,0.85)';
        laptopCtx.shadowBlur = 14;
        laptopCtx.fillStyle = '#FFFFFF';
        laptopCtx.strokeStyle = '#000000';
        laptopCtx.lineWidth = 4.5;

        laptopCtx.beginPath();
        laptopCtx.moveTo(scx, scy);
        laptopCtx.lineTo(scx, scy + 44);
        laptopCtx.lineTo(scx + 12, scy + 34);
        laptopCtx.lineTo(scx + 24, scy + 48);
        laptopCtx.lineTo(scx + 32, scy + 44);
        laptopCtx.lineTo(scx + 20, scy + 26);
        laptopCtx.lineTo(scx + 34, scy + 26);
        laptopCtx.closePath();
        laptopCtx.fill();
        laptopCtx.stroke();
        laptopCtx.restore();
      }

      laptopTexture.needsUpdate = true;
    };

    // ========================================================
    // RENDER EXTERNAL MONITOR: BOLD, 2048x1280 HIGH-CONTRAST TELEMETRY
    // ========================================================
    const renderMonitorScreen = (elapsed: number, mode: string) => {
      monitorCtx.fillStyle = '#040711';
      monitorCtx.fillRect(0, 0, 2048, 1280);

      // Monitor Top Header
      monitorCtx.fillStyle = '#0B1120';
      monitorCtx.fillRect(0, 0, 2048, 130);

      monitorCtx.font = 'bold 54px "JetBrains Mono", monospace';
      monitorCtx.fillStyle = '#38BDF8';
      monitorCtx.fillText('DINESH MOORTHY — SYSTEMS & AI', 65, 88);

      monitorCtx.fillStyle = '#10B981';
      monitorCtx.beginPath();
      monitorCtx.arc(1860, 75, 16, 0, Math.PI * 2);
      monitorCtx.fill();

      monitorCtx.fillStyle = '#F8FAFC';
      monitorCtx.font = 'bold 44px "JetBrains Mono", monospace';
      monitorCtx.fillText('LIVE', 1900, 90);

      // 3 High-Impact, Spacious System Cards
      const services = [
        {
          name: 'AI VIDYA FOR BHARAT',
          role: 'Multilingual NLP API · FastAPI & PyTorch Pipelines',
          status: 'ONLINE',
          load: '38ms',
          color: '#10B981',
          y: 190,
        },
        {
          name: 'BB84 QUANTUM KEY DIST.',
          role: 'Quantum Cryptography · Qiskit Statevector Simulator',
          status: 'ACTIVE',
          load: '100% Sift',
          color: '#C084FC',
          y: 535,
        },
        {
          name: 'QUICK-NOTE POLYGLOT',
          role: 'Go Microservices + React 19 Real-Time Sync Hub',
          status: 'READY',
          load: '<2ms Sync',
          color: '#38BDF8',
          y: 880,
        },
      ];

      services.forEach((s) => {
        monitorCtx.fillStyle = '#0F172A';
        monitorCtx.fillRect(60, s.y, 1928, 280);
        monitorCtx.strokeStyle = '#1E293B';
        monitorCtx.lineWidth = 4;
        monitorCtx.strokeRect(60, s.y, 1928, 280);

        monitorCtx.font = 'bold 54px "JetBrains Mono", monospace';
        monitorCtx.fillStyle = '#FFFFFF';
        monitorCtx.fillText(s.name, 110, s.y + 110);

        monitorCtx.font = '40px "JetBrains Mono", monospace';
        monitorCtx.fillStyle = '#94A3B8';
        monitorCtx.fillText(s.role, 110, s.y + 195);

        monitorCtx.fillStyle = s.color;
        monitorCtx.font = 'bold 46px "JetBrains Mono", monospace';
        monitorCtx.textAlign = 'right';
        monitorCtx.fillText(`● ${s.status} [${s.load}]`, 1900, s.y + 150);
        monitorCtx.textAlign = 'left';
      });

      monitorTexture.needsUpdate = true;
    };

    // ========================================================
    // MAIN 60FPS LOOP WITH SMOOTH ORBIT DAMPING
    // ========================================================
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;

      if (!isInteractingRef.current) {
        animTimeRef.current += delta;
      }

      const elapsed = animTimeRef.current;

      renderLaptopScreen(elapsed, activeFileRef.current, buildStatusRef.current);
      renderMonitorScreen(elapsed, monitorModeRef.current);

      steamPuffs.forEach((puff, idx) => {
        const t = (elapsed * puff.speed + puff.phase) % 2.0;
        puff.mesh.position.y = 0.28 + t * 0.24;
        puff.mesh.position.x = Math.sin(t * 3.0 + idx) * 0.02;
        const mat = puff.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.max(0, 0.3 * (1 - t / 2.0));
      });

      plantLeaves.forEach((leaf, idx) => {
        leaf.rotation.z = 0.3 + Math.sin(elapsed * 1.5 + idx * 0.7) * 0.03;
      });

      // Subtle idle camera sway before user interaction
      if (!userHasInteractedRef.current && !prefersReducedMotion) {
        targetSpherical.theta = defaultTheta + Math.sin(elapsed * 0.4) * 0.015;
        targetSpherical.phi = defaultPhi + Math.cos(elapsed * 0.3) * 0.008;
      }

      // Smooth camera damping
      const damping = prefersReducedMotion ? 1.0 : 0.08;
      currentSpherical.theta += (targetSpherical.theta - currentSpherical.theta) * damping;
      currentSpherical.phi += (targetSpherical.phi - currentSpherical.phi) * damping;
      currentSpherical.radius += (targetSpherical.radius - currentSpherical.radius) * damping;

      camera.position.x =
        targetLookAt.x +
        currentSpherical.radius * Math.sin(currentSpherical.phi) * Math.sin(currentSpherical.theta);
      camera.position.y =
        targetLookAt.y + currentSpherical.radius * Math.cos(currentSpherical.phi);
      camera.position.z =
        targetLookAt.z +
        currentSpherical.radius * Math.sin(currentSpherical.phi) * Math.cos(currentSpherical.theta);
      camera.lookAt(targetLookAt);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      updateResponsiveCamera(nw, nh);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      resizeObserver.disconnect();
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [registerInteraction]);

  return (
    <div
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[530px] flex flex-col justify-between select-none"
      onMouseEnter={registerInteraction}
      onTouchStart={registerInteraction}
    >
      {/* 3D WebGL Canvas Container - Fully zoomed out with zero clipping */}
      <div className="absolute inset-0 z-0">
        {webGlAvailable ? (
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 text-center">
            <div className="p-6 rounded-2xl bg-white/80 border border-slate-200 shadow-2xs max-w-sm">
              <Laptop className="w-6 h-6 text-[#3B6FD8] mx-auto mb-2" />
              <div className="text-sm font-bold text-slate-900">DEVELOPER WORKSPACE</div>
              <p className="text-xs text-slate-500 mt-1">
                Recruiter summary, Indic NLP AI, Qiskit Quantum Computing & Polyglot Backends.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Top Overlay: Active File & Status Badges + Inspect Screen Trigger */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/80 shadow-2xs flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-tight text-slate-900">
            {activeFile} · {buildStatus === 'RUNNING' ? 'VALIDATING...' : 'READY'}
          </span>
          {isInteracting && (
            <span className="text-[10px] font-mono text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
              INSPECTING
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Quick Screen Inspector Button */}
          <button
            onClick={() => setInspectModalOpen(true)}
            className="px-2.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/80 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-2xs transition-all active:scale-95"
            title="Open ultra-clear screen inspector modal"
          >
            <Maximize2 className="w-3 h-3 text-[#3B6FD8]" />
            <span className="hidden sm:inline">INSPECT SCREEN</span>
          </button>

          {/* Dynamic Hover Badge */}
          {hoveredObject && (
            <div className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-mono font-bold tracking-wider shadow-md animate-fade-in hidden sm:block">
              {hoveredObject}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Overlay: Direct Interactive File Switcher & Code Runner */}
      <div className="relative z-10 px-2 sm:px-3 pb-2 sm:pb-3 w-full">
        <div className="p-1 sm:p-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-sm flex items-center justify-between gap-1 w-full max-w-full">
          {/* File Switcher Tabs */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-1 min-w-0 overflow-x-auto overscroll-contain scrollbar-hide">
            {(['recruiter_summary.json', 'AIVidya.py', 'BB84_qkd.py', 'QuickNote.go'] as EditorFile[]).map((file) => {
              const isSelected = activeFile === file;
              const isRecruiter = file === 'recruiter_summary.json';
              return (
                <button
                  key={file}
                  type="button"
                  onClick={() => handleSelectFile(file)}
                  className={`py-1.5 px-2 sm:px-2.5 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold tracking-tight transition-all whitespace-nowrap text-center flex items-center gap-1 sm:gap-1.5 shrink-0 ${
                    isSelected
                      ? isRecruiter
                        ? 'bg-amber-500 text-slate-950 shadow-2xs font-extrabold'
                        : 'bg-[#0F172A] text-white shadow-2xs'
                      : isRecruiter
                      ? 'text-amber-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {isRecruiter && <UserCheck className="w-3 h-3 text-amber-700 shrink-0" />}
                  <span>
                    {isRecruiter ? (
                      <>
                        <span className="hidden sm:inline">recruiter_summary.json</span>
                        <span className="sm:hidden">recruiter.json</span>
                      </>
                    ) : (
                      file
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-slate-300 hidden md:inline shrink-0" aria-hidden="true">|</span>

          {/* Trigger Run */}
          <button
            type="button"
            onClick={handleRunCode}
            className="py-1.5 px-2.5 sm:px-3 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold tracking-tight bg-blue-50 text-[#3B6FD8] hover:bg-blue-100 border border-blue-200/80 flex items-center gap-1 sm:gap-1.5 transition-all active:scale-95 shrink-0"
            title="Click to execute or validate code"
          >
            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
            <span>RUN</span>
          </button>
        </div>
      </div>

      {/* Crystal-Clear Screen Inspect Modal Drawer */}
      {inspectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#030712] border border-slate-800 shadow-2xl p-6 text-left select-text">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-2 text-sm font-mono font-bold text-white tracking-wide">
                  BUILD LAB — {activeFile}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyProfile}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all"
                  title="Copy code to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>

                <button
                  onClick={() => setInspectModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="mt-4 p-4 rounded-xl bg-[#090D16] border border-slate-800/80 font-mono text-sm leading-relaxed overflow-x-auto text-slate-100">
              <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap break-words">
                {FILES_DATA[activeFile].rawContent}
              </pre>
            </div>

            {/* Terminal status */}
            <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">
                {FILES_DATA[activeFile].terminalOutput}
              </span>
              <span className="text-slate-500 hidden sm:inline">VERIFIED 2028 GRAD</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
