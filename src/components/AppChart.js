import React, {Component} from 'react';
import Plot from 'react-plotly.js';

class ApiChart extends Component{

    constructor(props){
        super(props);
        this.state={data: [] }
    }


    handlePlot1 = () => {
        Axios.get("http://localhost:9000/plot2_json"),{
            "url":"..."
        }
            .then(resp => {console.log(resp.data); Plotly
            .newPlot('distChart',resp.data.data,resp.data.layout);})
        }

    componentDidMount() {
        const endpoint="https://data.cityofnewyork.us/resource/cwmx-mvra.json"

        fetch(endpoint)
            .then(response => response.json())
            .then(data =>{
                this.setState({data: data})
            })
    }

    transformData(data){
        let plot_data=[];

        let x=[1,2,3];
        let y=[5,7,10];
        data.map(each => {
            x.push(each.data_of_interest)
            y.push(each.case_count)
        })
        plot_data['x']=x;
        plot_data['y']=y;

        return plot_data;
    }

    render(){
        return(

            <div>
                <div>
                    <h1>data</h1>
                    {console.log(this.state.data)}
                </div>
                <Plot
                    graphDiv="graph"
					data = {[
							{type: 'scatter',
							 mode: 'lines',
							 x: this.transformData(this.state.data)['x'],
							 y: this.transformData(this.state.data)['y'],
							 marker: { color: '#ed022d'}}
						]}
					layout = { {width: 1000, height: 500, title: 'Covid Case Count'} }
				 />
            </div>
        )
    }
}

export default ApiChart;