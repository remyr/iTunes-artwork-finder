import React, { Component } from 'react'
require('../styles/main.min.css');

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            language: navigator.language.toLocaleUpperCase() || 'US'
        }
    }

    HandlerSubmit(event) {
		event.preventDefault();
		this.props.actions.search(this.state.search, this.state.language);
        this.setState({
            search: ''
        })
	}

    HandlerChange(e) {
        this.setState({
            search: e.target.value,
        });
    }

    render(){
        return(
            <form className="form-group" onSubmit={this.HandlerSubmit.bind(this)}>
                <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control input-search"
                        placeholder="Search Artwork"
                        onChange={this.HandlerChange.bind(this)}
                        value={this.state.search}
                        autoComplete="off"
                    />
                </div>
                <div className="col-sm-12 col-btn">
                    <button type="submit" className="btn btn-success btn-lg btn-submit">Search</button>
                </div>
            </form>
        )
    }
}

export default SearchForm