import React, { Component } from 'react'

class SingleResult extends Component {

    HandlerClick(){
        let u = this.props.result.artworkUrl100;
        let url = u.replace("100x100", "1600x1600");
        window.location.href = url;
    }

    render(){
        return(
            <tr style={{'cursor': 'pointer'}} onClick={this.HandlerClick.bind(this)}>
               <td><img src={this.props.result.artworkUrl60} alt=""/></td>
               <td>{this.props.result.artistName}</td>
               <td>{this.props.result.collectionName}</td>
               <td>{this.props.result.releaseDate}</td>
           </tr>
        )
    }
}

export default SingleResult