import React,{Component} from 'react'
import Plot from 'react-plotly.js'

class TimePlot extends Component{

    render(){
        return(
            <div>
                <Plot
                    data={[{
                        x:['26-5-2022 14:50:00','24-5-2022 18:50:00','29-4-2022 22:30:00'],
                        y:[1,3,5],
                        type: 'scatter'

                    }]}
                />
            </div>
        )
    }
}
export default TimePlot;