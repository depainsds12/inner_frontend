const newViewports = {
  // Mobile devices
  iphoneSE: {
    name: "iPhone SE",
    styles: {
      width: "375px",
      height: "667px",
    },
    type: "mobile",
  },
  iphone12: {
    name: "iPhone 12/13",
    styles: {
      width: "390px",
      height: "844px",
    },
    type: "mobile",
  },
  iphone12ProMax: {
    name: "iPhone 12/13 Pro Max",
    styles: {
      width: "428px",
      height: "926px",
    },
    type: "mobile",
  },
  pixel5: {
    name: "Google Pixel 5",
    styles: {
      width: "393px",
      height: "851px",
    },
    type: "mobile",
  },
  galaxyS21: {
    name: "Samsung Galaxy S21",
    styles: {
      width: "360px",
      height: "800px",
    },
    type: "mobile",
  },

  // Tablets
  ipadMini: {
    name: "iPad Mini",
    styles: {
      width: "768px",
      height: "1024px",
    },
    type: "tablet",
  },
  ipadPro11: {
    name: 'iPad Pro 11"',
    styles: {
      width: "834px",
      height: "1194px",
    },
    type: "tablet",
  },
  ipadPro129: {
    name: 'iPad Pro 12.9"',
    styles: {
      width: "1024px",
      height: "1366px",
    },
    type: "tablet",
  },

  // Laptops & Desktops
  laptop13: {
    name: 'Laptop 13"',
    styles: {
      width: "1280px",
      height: "800px",
    },
    type: "desktop",
  },
  laptop15: {
    name: 'Laptop 15"',
    styles: {
      width: "1440px",
      height: "900px",
    },
    type: "desktop",
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1920px",
      height: "1080px",
    },
    type: "desktop",
  },
  desktop4k: {
    name: "4K Desktop",
    styles: {
      width: "3840px",
      height: "2160px",
    },
    type: "desktop",
  },

  // Common Breakpoints
  xs: {
    name: "XS (< 576px)",
    styles: {
      width: "375px",
      height: "800px",
    },
    type: "breakpoint",
  },
  sm: {
    name: "SM (≥ 576px)",
    styles: {
      width: "576px",
      height: "800px",
    },
    type: "breakpoint",
  },
  md: {
    name: "MD (≥ 768px)",
    styles: {
      width: "768px",
      height: "800px",
    },
    type: "breakpoint",
  },
  lg: {
    name: "LG (≥ 992px)",
    styles: {
      width: "992px",
      height: "800px",
    },
    type: "breakpoint",
  },
  xl: {
    name: "XL (≥ 1200px)",
    styles: {
      width: "1200px",
      height: "800px",
    },
    type: "breakpoint",
  },
  xxl: {
    name: "XXL (≥ 1440px)",
    styles: {
      width: "1440px",
      height: "800px",
    },
    type: "breakpoint",
  },
};

export default newViewports;
