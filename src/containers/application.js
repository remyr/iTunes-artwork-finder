import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/index'
import SearchForm from '../components/search-form'
import ContainerTableResults from '../containers/container-table-results'
import Loader from '../components/loader'
require('../styles/main.min.css');

class Application extends Component {

	HandlerClick(){
		this.props.actions.resetData();
	}

    render(){
        return(
            <div className="container">
				<h1 className="title" style={{'cursor': 'pointer'}} onClick={this.HandlerClick.bind(this)}>iTunes Artwork Finder</h1>
				<SearchForm actions={this.props.actions} />
				<Loader loading={this.props.isLoading} />
				<ContainerTableResults results={this.props.results} display={this.props.display}/>
			</div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)