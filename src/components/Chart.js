import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import '../styles/style.css';

const average = (data) => {
  const sum = data.reduce((total, num) => total + Math.round(num), 0);
  return sum / data.length;
};

const Chart = (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.unit}
      </div>
    </div>
  );
};

export default Chart;
