export function generateColumns(arr) {
  const keys = Object.keys(arr[0]);

  const columns = keys.map((key) => {
    return {
      field: key,
      headerName: key
    };
  });

  return columns;
}

export function averageAgeByGender(arr) {
  const allAges = arr.reduce((acc, curr) => {
    acc[curr.gender]
      ? acc[curr.gender].push(curr.age)
      : acc[curr.gender] = [curr.age];

    return acc;
  }, {});


  const avgAge = Object.entries(allAges)
    .reduce((acc, curr) => {
      const totalAge = curr[1].reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      const averageAge = totalAge / curr[1].length;
      acc[curr[0]] = averageAge;

      return acc;
    }, {});
  // console.log(avgAge);

  const entries = Object.entries(avgAge)
    .reduce((acc, curr) => {
      acc.push({
        x: curr[0],
        y: curr[1]
      });
      return acc;
    }, []);
  // console.log(entries);
  return entries;
}

export function carMakeTotals(arr) {
  const makes = arr.reduce((acc, curr) => {
    acc[curr.car_make]
      ? acc[curr.car_make]++
      : acc[curr.car_make] = 1;
    return acc;
  }, {});

  const entries = Object.entries(makes)
    .reduce((acc, curr) => {
      acc.push({ 
        x: curr[0],
        y: curr[1]
      });

      return acc;
    }, []);
    
  return entries;
}