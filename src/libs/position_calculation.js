export default function calculate(
  elementRef = null,
  byPercent = 0,
  position = 0,
) {
  const height = parseInt(getComputedStyle(elementRef.current).height);
  const ratio =
    height / parseInt(getComputedStyle(elementRef.current.parentNode).height);
  const top = position - (ratio * byPercent).toFixed(2);
  return top;
}
