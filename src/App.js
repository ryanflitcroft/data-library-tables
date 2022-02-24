import './App.css';
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
      <h2>Participant data</h2>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columnData}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>

      <h2>Vehicle make ownership of data participants</h2>

      <VictoryChart>
        <VictoryGroup>
          <VictoryBar
            data={carMakeTotalsData}
            height={300}
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 }
            }}
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

      <h2>Average age of data participants by gender</h2>
      <VictoryPie
        data={averageAgeByGenderData}
        height={300}
        innerRadius={50}
        colorScale={['#388659', '#52AA5E', '#52AA8A', '#3AAED8', '#2BD9FE', '#F2C14E', '#F78154', '#B4436C']}
      />
    </>
  );
}