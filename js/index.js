import * as SPLAT from "https://cdn.jsdelivr.net/npm/gsplat@latest";

const canvas = document.getElementById("canvas");

const renderer = new SPLAT.WebGLRenderer(canvas);
const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const controls = new SPLAT.OrbitControls(camera, canvas);


const fpsDisplay = document.getElementById("FPS");
fpsDisplay.style.position = "absolute";
fpsDisplay.style.top = "10px";
fpsDisplay.style.left = "10px";
fpsDisplay.style.color = "white";
fpsDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
fpsDisplay.style.padding = "5px 10px";
fpsDisplay.style.fontFamily = "Arial, sans-serif";
fpsDisplay.style.fontSize = "14px";
fpsDisplay.style.zIndex = "1000";
document.body.appendChild(fpsDisplay);


async function main() {
    const splatFile = "images/splats/500.1_pictures.splat";

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
