import React from "react";

import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

import data from "./data/sankey";

import "./App.css";

HighchartsSankey(Highcharts);

function App() {
  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={data} />
    </div>
  );
}

export default App;
