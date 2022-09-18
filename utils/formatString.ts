export const formatString = (string: string) => {
  const replaced = string.replaceAll("-", " ");
  return replaced[0].toUpperCase() + replaced.slice(1);
};
