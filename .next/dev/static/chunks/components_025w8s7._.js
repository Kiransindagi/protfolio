(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SmoothScroll({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                // @ts-ignore
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false
            });
            window.lenis = lenis;
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    lenis.destroy();
                    delete window.lenis;
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CursorFog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorFog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
class SmokeParticle {
    x;
    y;
    size;
    speedX;
    speedY;
    life;
    maxLife;
    constructor(x, y){
        this.x = x;
        this.y = y;
        // Base size between 15 and 35
        this.size = Math.random() * 20 + 15;
        // Drift slightly left/right and mostly upwards
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * -1.5 - 0.5;
        // Live for 40 to 80 frames
        this.maxLife = Math.random() * 40 + 40;
        this.life = this.maxLife;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size += 0.8; // Smoke expands as it dissipates
        this.life--;
    }
    draw(ctx) {
        // Fade out as life decreases. Max opacity 0.15 for subtle effect.
        const opacity = Math.max(0, this.life / this.maxLife * 0.15);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(34, 34, 34, ${opacity})`);
        gradient.addColorStop(1, `rgba(34, 34, 34, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function CursorFog() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        moved: false
    });
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorFog.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Handle Resize
            const resizeCanvas = {
                "CursorFog.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["CursorFog.useEffect.resizeCanvas"];
            window.addEventListener("resize", resizeCanvas);
            resizeCanvas();
            // Handle Mouse Move
            const handleMouseMove = {
                "CursorFog.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current.x = e.clientX;
                    mouseRef.current.y = e.clientY;
                    mouseRef.current.moved = true;
                    // Spawn 1-2 particles per mouse movement tick
                    const spawnCount = Math.random() > 0.5 ? 2 : 1;
                    for(let i = 0; i < spawnCount; i++){
                        // Add slight scatter to spawn location
                        const offsetX = Math.random() * 10 - 5;
                        const offsetY = Math.random() * 10 - 5;
                        particlesRef.current.push(new SmokeParticle(e.clientX + offsetX, e.clientY + offsetY));
                    }
                }
            }["CursorFog.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            // Animation Loop
            const animate = {
                "CursorFog.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Update and draw all particles
                    for(let i = 0; i < particlesRef.current.length; i++){
                        particlesRef.current[i].update();
                        particlesRef.current[i].draw(ctx);
                    }
                    // Remove dead particles
                    particlesRef.current = particlesRef.current.filter({
                        "CursorFog.useEffect.animate": (p)=>p.life > 0
                    }["CursorFog.useEffect.animate"]);
                    animationFrameId.current = requestAnimationFrame(animate);
                }
            }["CursorFog.useEffect.animate"];
            animate();
            return ({
                "CursorFog.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                    window.removeEventListener("mousemove", handleMouseMove);
                    cancelAnimationFrame(animationFrameId.current);
                }
            })["CursorFog.useEffect"];
        }
    }["CursorFog.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "pointer-events-none fixed inset-0 z-[9999] mix-blend-multiply"
    }, void 0, false, {
        fileName: "[project]/components/ui/CursorFog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(CursorFog, "xa47clv0OLqpZmQRWJ5TrvtAUnw=");
_c = CursorFog;
var _c;
__turbopack_context__.k.register(_c, "CursorFog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_025w8s7._.js.map