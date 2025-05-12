import { getFilteredImages } from "../utils/loadImages";

export const menuIcons = {
    icons: import.meta.glob("/src/assets/signs/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  
  };
  
  export const ICONS_CONFIG = {
    icons: [
        { text: "For You", iconName: "Heart" },
        { text: "Popular", iconName: "Star" },
        { text: "Lobby", iconName: "L" },
        { text: "New", iconName: "N" },
        { text: "Hits", iconName: "H" },
        { text: "More", iconName: "Star" },
        { text: "Extra", iconName: "Heart" },
      ],
    
  };
  
  export function generateIconsList(
    type: "icons"
  ) {
    return ICONS_CONFIG[type].map((item) => {
      const icons = {
        type,
        text: item.text,
        iconName: item.iconName,
        backgroundImage: getFilteredImages(menuIcons[type], [item.iconName]),
      };
      return icons;
    });
  }
  