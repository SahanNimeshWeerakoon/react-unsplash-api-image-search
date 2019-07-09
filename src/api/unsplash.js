import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 0edc2c289ddb88a5d250d3c8bba9882e5bb144ad47dd50ef37f57449f98c20d8'
    }
})