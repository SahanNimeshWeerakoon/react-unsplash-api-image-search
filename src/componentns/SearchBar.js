import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
    }
    
    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} type="text" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar