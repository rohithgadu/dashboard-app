import React, {useContext} from 'react';
import Plot from 'react-plotly.js';
import {AppContext} from "../App";

const BarChart = () => {

    const {xValues, yValues} = useContext(AppContext)

    return (
        <Plot
            data={
                [{
                    type: 'bar',
                    x: xValues,
                    y: yValues,
                    orientation: 'h'
                }]
            }
            layout={{width: '100%', height: 500, title: 'Data Visualization'}}
        />
    );
}

export default BarChart