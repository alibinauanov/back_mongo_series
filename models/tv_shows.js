const {Schema, model} = require('mongoose')

export const Tv_show = new Schema({
    name: {
        type: String,
    },
    url: {
        type: String,
    },
    img: {
        type: String,
    },
    seriesDetails: {
        type: String,
    },
    description: {
        type: String,
    },
    Released: {
        type: String,
    },
    Genre: {
        type: String,
    },
    Casts: {
        type: String,
    },
    Duration: {
        type: String,
    },
    Country: {
        type: String,
    },
    Production: {
        type: String,
    }
})