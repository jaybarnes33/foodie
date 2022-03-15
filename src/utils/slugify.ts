export const slugify = (text: string) =>
  text.toLowerCase().split(" ").join("-");
