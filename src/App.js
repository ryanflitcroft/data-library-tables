import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { VictoryGroup, VictoryChart, VictoryBar, VictoryAxis } from 'victory';

import data from './data';
import { generateColumns,
  carMakeTotals } from './data-utils';

const columnData = generateColumns(data);
// console.log('colData', colData);

export default function App() {

  // const driverData = [
  //   { quarter: 1, earnings: 13000 },
  //   { quarter: 2, earnings: 16500 },
  //   { quarter: 3, earnings: 14250 },
  //   { quarter: 4, earnings: 19000 }
  // ];
  

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
            data={carMakeTotals(data)}
            height={300}
            // style={{
            //   labels: {
            //     fontSize: 2
            //   }
            // }}
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

    </>
  );
}