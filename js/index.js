import * as SPLAT from "https://cdn.jsdelivr.net/npm/gsplat@latest";

const canvas = document.getElementById("canvas");
const renderer = new SPLAT.WebGLRenderer(canvas);
const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const controls = new SPLAT.OrbitControls(camera, canvas);
const  fileInput = document.getElementById("splatInput");
const fpsDisplay = document.getElementById("FPS");
document.body.appendChild(fpsDisplay);


// Use the modelFile variable defined in display.phtml
async function main() {
    const splatFile = "images/" + modelFile;  // dynamically load based on selection
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

        // Disable browser zoom inside the container (if needed)
        const splineContainer = document.getElementById("splineContainer");
        if (splineContainer) {
            splineContainer.addEventListener("wheel", (event) => {
                if (event.ctrlKey) {
                    event.preventDefault(); // Prevent browser zoom
                }
            });
        }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    requestAnimationFrame(frame);
}

main();
