export const replaceUnderscores = (obj) => {
  if (typeof obj === "string") {
    return obj.replace(/_/g, " ");
  } else if (Array.isArray(obj)) {
    return obj.map(replaceUnderscores);
  } else if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      const newKey = key.replace(/_/g, " ");
      newObj[newKey] = replaceUnderscores(obj[key]);
    }
    return newObj;
  }
  return obj;
};
