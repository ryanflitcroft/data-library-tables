import { AssignmentReturnedTwoTone } from '@mui/icons-material';

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

export function average(arr) {
  {/* average age for each gender */}
  {/* {
          m: 25,
          f: 33,
          x: 22
        } */}
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
  return avgAge;
}

export function carMakeTotals(arr) {
  // how many objects in arr have diff values for prop car_make
  // [
  //   { x: 'Ford', y: 10 },
  //   { x: 'Kia', y: 3 },
  //   { x: 'Honda', y: 7}
  // ]
  // Array of objects with key/value make/total
    // {
    //   ford: 8,
    //   kia: 3,
    //   toyota: 9
    // }
  const makes = arr.reduce((acc, curr) => {
    acc[curr.car_make]
      ? acc[curr.car_make]++
      : acc[curr.car_make] = 1;
    return acc;
  }, {});

  const entries = Object.entries(makes)
    .reduce((acc, curr) => {
      acc.push({ x: curr[0],
        y: curr[1] });

      return acc;
    }, []);
    
  return entries;
}