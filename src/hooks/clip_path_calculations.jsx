const useClipBuilder = () => {
  const hexagonClip = (shapeRef, anglePixel = 12, pseudo = false) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      const path = `polygon(${leftEdge1.toFixed(2)}% 0%, ${rightEdge1.toFixed(2)}% 0%, 100% 50%, ${rightEdge2.toFixed(2)}% 100%, ${leftEdge2.toFixed(2)}% 100%, 0% 50%)`;
      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return { leftEdge1, rightEdge1, rightEdge2, leftEdge2 };
    }
  };

  const halfHexagonClip = (
    shapeRef,
    lowerAnglePixel = 50,
    upperAnglePercent = 25,
    pseudo = false,
  ) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const upperAnglePercent =
        50 -
        Math.round(
          (shapeRef.current.clientHeight /
            shapeRef.current.parentElement.offsetHeight) *
            100,
        );

      const lowerLeftEdge = (lowerAnglePixel / width) * 100;
      const lowerRightEdge = 100 - lowerLeftEdge;

      const upperLeftEdge = (upperAnglePercent / width) * 100;
      const upperRightEdge = 100 - upperLeftEdge;

      const path = `polygon(${upperLeftEdge}% 0, ${upperRightEdge}% 0, ${lowerRightEdge}% 100% ,${lowerLeftEdge}% 100%)`;
      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return { lowerLeftEdge, lowerRightEdge, upperLeftEdge, upperRightEdge };
    }
  };

  const squareClip = (
    shapeRef,
    upperAnglePercent = 20,
    lowerAnglePercent = 12,
    pseudo = false,
  ) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;

      const leftEdge1 = upperAnglePercent;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = upperAnglePercent;
      const leftEdge2 = upperAnglePercent;

      const leftEdge4 = lowerAnglePercent;
      const rightEdge3 = 100 - leftEdge4;
      const rightEdge4 = 100 - leftEdge4;
      const leftEdge3 = 100 - leftEdge4;

      const path = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`;
      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return { leftEdge1, rightEdge1, rightEdge2, leftEdge2 };
    }
  };

  const arrowClip = (
    shapeRef,
    anglePixel = 80,
    side = "left",
    pseudo = false,
  ) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      const path = `polygon(0% 0%, ${rightEdge1}% 0%, ${side === "right" ? 100 - leftEdge1 : 100}% 50%, ${rightEdge2}% 100%, 0% 100%, ${side === "left" ? 0 + leftEdge1 : 0}% 50%)`;
      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return { leftEdge1, rightEdge1, rightEdge2, leftEdge2 };
    }
  };

  const rectClip = (
    shapeRef,
    upperAnglePercent = 20,
    lowerAnglePercent = 20,
    pseudo = false,
  ) => {
    if (shapeRef.current) {
      const leftEdge1 = upperAnglePercent + upperAnglePercent / 2;
      const leftEdge2 = upperAnglePercent + upperAnglePercent;

      const rightEdge1 = 100 - upperAnglePercent - upperAnglePercent / 2;
      const rightEdge2 = upperAnglePercent + upperAnglePercent;

      const rightEdge4 = 100 - lowerAnglePercent - lowerAnglePercent / 2;
      const rightEdge3 = 100 - lowerAnglePercent - lowerAnglePercent;

      const leftEdge4 = lowerAnglePercent + lowerAnglePercent / 2;
      const leftEdge3 = 100 - lowerAnglePercent - lowerAnglePercent;

      const path = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`;
      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return { leftEdge1, rightEdge1, rightEdge2, leftEdge2 };
    }
  };

  const rectClipBanner = (
    shapeRef,
    outerAngle = 2,
    innerAngle = 12,
    pseudo = false,
  ) => {
    if (shapeRef.current) {
      const leftEdge1 = outerAngle;
      const leftEdge2 = innerAngle;
      const leftEdge3 = 100 - innerAngle;
      const leftEdge4 = outerAngle;

      const rightEdge1 = 100 - outerAngle;
      const rightEdge2 = innerAngle;
      const rightEdge3 = 100 - innerAngle;
      const rightEdge4 = 100 - outerAngle;

      const path = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`;
      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return { leftEdge1, rightEdge1, rightEdge2, leftEdge2 };
    }
  };

  const octagonClip = (shapeRef, pseudo = false) => {
    if (shapeRef.current) {
      const path =
        "polygon(50% 0, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0 50%, 15% 15%)";

      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return null;
    }
  };

  const authBannerClip = (
    shapeRef,
    outerAngle = 12,
    innerAngle = 5,
    pseudo = false,
  ) => {
    if (shapeRef.current) {
      const path = `polygon(0 0, 100% 0, 100% ${100 - outerAngle}%, ${100 - innerAngle}% 100%, ${innerAngle}% 100%, 0 ${100 - outerAngle}%)`;

      if (pseudo) {
        shapeRef.current.style.setProperty("--path", path);
      } else {
        shapeRef.current.style.clipPath = path;
      }

      return null;
    }
  };

  return {
    hexagonClip,
    squareClip,
    arrowClip,
    rectClip,
    rectClipBanner,
    octagonClip,
    halfHexagonClip,
    authBannerClip,
  };
};

export default useClipBuilder;
