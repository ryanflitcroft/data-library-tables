export function generateColumns(arr) {
  const keys = Object.keys(arr[0]);
  console.log(keys);

  const columns = keys.map((key) => {
    return {
      field: key,
      headerName: key
    };
  });

  return columns;
}