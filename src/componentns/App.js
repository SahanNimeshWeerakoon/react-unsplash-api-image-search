import React, { Component } from 'react'

import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList';

import '../css/app.css'

class App extends Component{

    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: { query: term },
        })
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className='ui container app'>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App