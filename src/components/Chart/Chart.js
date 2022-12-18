import ChartBar from "./ChartBar";
import './Chart.css'

function Chart(props) {

    //To deal with the maxValue below: 

    const dataPointValues = props.dataPoints.map((dataPoint) =>{
        return dataPoint.value;
    })
    const totalMax = Math.max(...dataPointValues);

  return (

    <div className="chart">

      {props.dataPoints.map((datapoint) => (

        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        ></ChartBar>
        

      ))}

    </div>
  );
}

export default Chart;
