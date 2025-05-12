//Load images from folders, return src/alt
export type ImageData = {
  src: string;
  alt: string;
};

export function getFilteredImages(
  modules: Record<string, string>,
  selectedNames: string[]
): ImageData[] {
  return Object.entries(modules)
    .map(([path, src]) => {
      const fileNameWithExt = path.split("/").pop() || "";
      const fileName = fileNameWithExt.split(".")[0];
      return { src, alt: fileName };
    })
    .filter((img) => selectedNames.includes(img.alt))
    .sort(
      (a, b) => selectedNames.indexOf(a.alt) - selectedNames.indexOf(b.alt)
    );
}
