import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { VictoryGroup, VictoryChart, VictoryBar, VictoryAxis, VictoryPie } from 'victory';

import data from './data';
import { generateColumns,
  carMakeTotals, averageAgeByGender } from './data-utils';

const columnData = generateColumns(data);
const carMakeTotalsData = carMakeTotals(data);
const averageAgeByGenderData = averageAgeByGender(data);


export default function App() {

  return (
    <>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columnData}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>

      <VictoryChart>
        <VictoryGroup>
          <VictoryBar
            data={carMakeTotalsData}
            height={300}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{ tickLabels: { angle :90, fontSize: 5, textAnchor: 'start' } }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          style={{ tickLabels: { fontSize: 10 } }}
        />
      </VictoryChart>


      <VictoryPie
        data={averageAgeByGenderData}
        height={300}
        innerRadius={50}
      />
    </>
  );
}