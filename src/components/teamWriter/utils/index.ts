export const getImageSelectorIds = (
  imageCount: number,
  sectionId: string = "",
  divClass: string = ""
) => {
  let array: string[] = [];
  for (let i = 1; i <= imageCount; i++) {
    array.push("#" + sectionId + " ." + divClass + " .img" + i);
  }
  return array;
};

export const bottomToTop = {
  y: window.innerWidth * 1,
  opacity: 0,
  scale: 0.5,
};