import React, { Component, createRef } from 'react'

class ImageCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            spans: 0
        }
        this.imageRef = createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil((height/10) + 1)
        this.setState({ spans })
    }

    render () {
        const { urls, description } = this.props.image;
        return (
            <div className='image-card' style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img src={urls.regular} ref={this.imageRef} alt={description}/>
            </div>
        )
    }
}

export default ImageCard