import React,{Component} from 'react'
import Plot from 'react-plotly.js'

class PiePlot extends Component{
    render(){
        return(
            <div>
            <Plot
            data={[{
                values: [33,33,34],
                labels: ['Iphone','Samsung','Huawei'],
                type: 'pie'
            }]}
            layout={{width: 500, height: 500, title: 'Piechart demo'}}
            />
        </div>
        )
    }
}
export default PiePlot;