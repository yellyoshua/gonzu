export const copyObject = <T = Object>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};
