import { create } from "zustand";

export const useBigTrapezoidStore = create((set) => ({
  selectedPosition: 0,
  selectedData: null,
  inner_octagon: {
    avatar: "/assets/avatar/avatar.svg",
    color: "transparent",
    stroke: {
      value: 4,
      color: "#000",
    },
  },
  main_octagon: {
    background: {
      color: "#3E3576",
      stroke: {
        value: 1,
        color: "#000",
      },
    },
    non_selected_zones: {
      color: "#000",
      weight: 6,
    },
    zones: [
      {
        keyword: {
          name: "aaaaaaa",
          color: "#fff",
          font: "Cursive",
          weight: "900",
        },
        icon: {
          url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.png",
          color: "#fff",
        },
        pos: 1,
      },
      {
        keyword: {
          name: "asdf323",
          color: "#fff",
          font: "Verdana",
          weight: "normal",
        },
        icon: {
          url: "https://images.pexels.com/photos/10815587/pexels-photo-10815587.jpeg",
          color: "#000",
        },
        pos: 2,
      },
      {
        keyword: {
          name: "Sustainabilitysd",
          color: "#fff",
          font: "Helvetica",
          weight: "bold",
        },
        icon: {
          url: "https://images.pexels.com/photos/628663/pexels-photo-628663.jpeg",
          color: "#000",
        },
        pos: 3,
      },
      {
        keyword: {
          name: "asfsdda",
          color: "#fff",
          font: "Courier New",
          weight: "bold",
        },
        icon: {
          url: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
          color: "#FFC300",
        },
        pos: 4,
      },
      {
        keyword: {
          name: "dasdssds",
          color: "#fff",
          font: "Cursive",
          weight: "bold",
        },
        icon: {
          url: "/assets/avatar/avatar.svg",
          color: "#fff",
        },
        pos: 5,
      },

      {
        keyword: {
          name: "Quality",
          color: "#fff",
          font: "Times New Roman",
          weight: "normal",
        },
        icon: {
          url: "https://images.pexels.com/photos/3705439/pexels-photo-3705439.jpeg",
          color: "#FF5733",
        },
        pos: 6,
      },
      {
        keyword: {
          name: "ffff",
          color: "#fff",
          font: "Arial",
          weight: "bold",
        },
        icon: {
          url: "https://images.pexels.com/photos/1767437/pexels-photo-1767437.jpeg",
          color: "#C70039",
        },
        pos: 7,
      },
      {
        keyword: {
          name: "Agility",
          color: "#FF5733",
          font: "Verdana",
          weight: "normal",
        },
        icon: {
          url: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg",
          color: "#900C3F",
        },
        pos: 8,
      },
    ],
  },
  changeBigTrapezoidPosition: (payload) =>
    set((state) => ({
      selectedPosition: payload.position,
      selectedData: payload.data,
    })),
  changeData: (payload) =>
    set((state) => ({
      inner_octagon: payload.inner_octagon,
      main_octagon: payload.main_octagon,
    })),
}));
