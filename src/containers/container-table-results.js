import React, { Component } from 'react'
import SingleResult from '../components/single-result'
require('../styles/main.min.css');

class ContainerTableResults extends Component {

    renderRows() {
        this.props.results.map((result) => {
            return (<SingleResult result={result} key={result.collectionId}/>)
        })
    }

    render(){
        if(this.props.display){
            var rows = [];
        this.props.results.forEach(function(result, i) {

            rows.push(<SingleResult result={result} key={i}/>);
        }.bind(this));

        return(
            <table className="table table-striped table-hover table-result">
                <thead>
                    <tr>
                        <th className="col-md-3">Artwork</th>
                        <th className="col-md-3">Artist</th>
                        <th className="col-md-3">Album Name</th>
                        <th className="col-md-3">Release Date</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
        } else {
            return( <div></div> )
        }

    }
}

export default ContainerTableResults