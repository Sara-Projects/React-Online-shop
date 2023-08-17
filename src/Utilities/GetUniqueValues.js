export default function GetUniqueValues(value, dataArray) {
  const uniqueValues = dataArray.map((item) => item[value]);
  return [...new Set(uniqueValues)];
}