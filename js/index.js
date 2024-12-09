import * as SPLAT from "https://cdn.jsdelivr.net/npm/gsplat@latest";

const canvas = document.getElementById("canvas");

const renderer = new SPLAT.WebGLRenderer(canvas);
const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const controls = new SPLAT.OrbitControls(camera, canvas);


const fpsDisplay = document.getElementById("FPS");
document.body.appendChild(fpsDisplay);

async function main() {
    const splatFile = "images/splats/bench500pic.splat  ";
    await SPLAT.Loader.LoadAsync(splatFile, scene, null);


    const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);

    };
    let lastTime = performance.now();
    let frameCount = 0;

    const frame = () => {
        controls.update();
        renderer.render(scene, camera);

        requestAnimationFrame(frame);
        const now = performance.now();
        frameCount++;

        // Update FPS every second
        if (now - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (now - lastTime));
            fpsDisplay.textContent = `FPS: ${fps}`;
            lastTime = now;
            frameCount = 0;
        }


    };


    handleResize();
    window.addEventListener("resize", handleResize);

    requestAnimationFrame(frame);
}

main();
