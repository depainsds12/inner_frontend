// gradientUtils.js
export const createGradientDefinition = (fill, gradientId) => {
  if (typeof fill === "string") return null;

  const { type = "linear", stops = [], ...gradientProps } = fill;

  if (type === "linear") {
    const { x1 = "0%", y1 = "0%", x2 = "100%", y2 = "0%" } = gradientProps;
    return (
      <linearGradient id={gradientId} x1={x1} y1={y1} x2={x2} y2={y2}>
        {stops.map((stop, index) => (
          <stop
            key={index}
            offset={stop.offset}
            stopColor={stop.color}
            stopOpacity={stop.opacity}
          />
        ))}
      </linearGradient>
    );
  }

  if (type === "radial") {
    const {
      cx = "50%",
      cy = "50%",
      r = "50%",
      fx = cx,
      fy = cy,
    } = gradientProps;
    return (
      <radialGradient id={gradientId} cx={cx} cy={cy} r={r} fx={fx} fy={fy}>
        {stops.map((stop, index) => (
          <stop
            key={index}
            offset={stop.offset}
            stopColor={stop.color}
            stopOpacity={stop.opacity}
          />
        ))}
      </radialGradient>
    );
  }

  return null;
};

export const getFillValue = (fill, gradientId) => {
  return typeof fill === "string" ? fill : `url(#${gradientId})`;
};
