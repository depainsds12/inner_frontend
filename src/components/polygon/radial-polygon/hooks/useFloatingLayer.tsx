export function useFloatingLayer(
  parent: HTMLElement = document.body,
  id = "radial-polygon-floating-container",
) {
  if (!document.getElementById(id)) {
    const container = document.createElement("div");
    container.id = id;
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.zIndex = "0";
    container.style.overflow = "hidden";
    container.style.pointerEvents = "none";

    // make it the first child of the parent
    parent.insertBefore(container, parent.firstChild);
  }
  return document.getElementById(id);
}
