import canvascConfetti, { CreateTypes } from "canvas-confetti";

export const createCanvasConfetti = (
  confettiCallback: (confetti: CreateTypes) => void
) => {
  const ssrMode = typeof window === "undefined";
  const canvasConfettiId = "canvas-confetti-container";

  if (ssrMode) {
    return null;
  }

  var myCanvas = document.createElement("canvas");

  myCanvas.id = canvasConfettiId;
  myCanvas.style.position = "fixed";
  myCanvas.style.top = "0px";
  myCanvas.style.left = "0px";
  myCanvas.style.pointerEvents = "none";
  myCanvas.style.zIndex = "100";
  myCanvas.style.width = "100%";
  myCanvas.style.height = "100vh";

  document.body.appendChild(myCanvas);

  const confetti = canvascConfetti.create(myCanvas, {
    resize: true,
    // useWorker: true,
  });
  confettiCallback(confetti);

  return () => {
    console.log("deleted");
    confetti.reset();
    document.getElementById("canvasConfettiId")?.remove();
  };
};
