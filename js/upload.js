import * as SPLAT from "https://cdn.jsdelivr.net/npm/gsplat@latest";

const canvas = document.getElementById("canvas");

const renderer = new SPLAT.WebGLRenderer(canvas);
const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const controls = new SPLAT.OrbitControls(camera, canvas);
const  fileInput = document.getElementById("splatInput");
const fpsDisplay = document.getElementById("FPS");


document.body.appendChild(fpsDisplay);

async function loadSplat(file) {
    // Create a URL for the file
    if (file.name.endsWith('.splat')){
        document.getElementById("errorMessage").innerHTML="";
        const inputURL = URL.createObjectURL(file);


        scene.reset();
        // Load the new splat file into the scene
        await SPLAT.Loader.LoadAsync(inputURL, scene, null);

        // Revoke the Blob URL to free memory
        URL.revokeObjectURL(inputURL);
    }else{
    document.getElementById("errorMessage").innerHTML="Error: Please Input a .splat file";
    }

}

async function main() {

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
// Handle file input change
fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (file) {
        try {
            await loadSplat(file);
            console.log("Splat file loaded successfully!");
        } catch (error) {
            console.error("Failed to load splat file:", error);
        }
    }
});
main();