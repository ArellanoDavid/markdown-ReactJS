import React from "react";
import { render } from "react-dom";
import marked from "marked";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            markDown: ""
        }
    };

    outputChange(event) {
        this.setState({
            markDown: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Mark Down</h1>
                        <textarea  onChange={this.outputChange.bind(this)} value={this.state.markDown} rows="10" style={{width: "500", height: "500"}}></textarea>
                    </div>
                    <div className="col-md-6">
                        <h1>Output</h1>
                        <span dangerouslySetInnerHTML={{__html: marked(this.state.markDown)}}></span>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"));
