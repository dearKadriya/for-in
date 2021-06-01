export default function orderByProps(obj, order) {
  const result = [];
  order.forEach((prop) => {
    for (const property in obj) {
      if (prop === property) {
        result.push({ key: property, value: obj[property] });
        delete obj[property];
      }
    }
  });
  const sorted = Object.fromEntries(Object.entries(obj).sort());
  for (const property in sorted) {
    result.push({ key: property, value: obj[property] });
  }
  return result;
}
