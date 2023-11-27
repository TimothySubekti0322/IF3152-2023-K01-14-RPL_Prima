const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function camelCaseToTitle(str: string): string {
  // Break the camelCase: insert a space before all caps
  let result = str.replace(/([A-Z])/g, " $1");

  // Capitalize the first letter of each word
  return result.replace(/\b\w/g, (char) => char.toUpperCase());
}

export {capitalize, camelCaseToTitle};