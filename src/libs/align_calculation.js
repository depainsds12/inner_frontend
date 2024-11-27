export default function calculate(elementRef = null, position = "center") {
  if (!elementRef || !elementRef.current) return;

  const element = elementRef.current;

  switch (position) {
    case "top":
      element.style.top = `${-(element.clientHeight / 2)}px`;
      break;

    case "bottom":
      element.style.bottom = `${-(element.clientHeight / 2)}px`;
      break;

    default:
      // element.style.left = "50%";
      // element.style.top = "50%";
      // element.style.transform = "translate(-50%, -50%)"; // Combine both translations
      break;
  }
}
