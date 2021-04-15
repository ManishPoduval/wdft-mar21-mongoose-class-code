const mongoose = require('mongoose');

let MySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Why so serious?']
    },
    age: {
        type:  Number,
        min: 15,
        max: 98
    }
})    

// mongoose.model( Name of your collection to create, Schema  )
let MyModel = mongoose.model( 'ironhacker', MySchema  )


module.exports = MyModel