const mongoose = require('mongoose');

let MyModel = require('./models/MyModel')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((self) => {
        console.log('Yayyyy MongoDB is connected')
        return mongoose.connection.dropDatabase()
        //or
        //self.connection.dropDatabase()
    })
    .then(() => {
        //create here
        return MyModel.create([
            {country: 'Spain', age:18} , 
            {name: 'Jorge', age:21}
        ])
        
    })
    .then(() => {
        console.log('Data added')
        /*
        MyModel.find({ name: 'Rutul' })
            .then((data) => {
                // data is an array of objects as a parameter
                console.log('Data fetched', data)
            })
            .catch(() => {
                console.log('Failed to create')
            })
          */  
        // MyModel.findById('60784724ce34f63c68af2d1d')
        
        /*
        MyModel.updateOne({name: 'Luis'}, { name: 'Luis2'})
            .then()
            .catch()

        MyModel.findByIdAndUpdate('60784724ce34f63c68af2d1d', {name: 'Manish'})
            .then()
            .catch()

        // MyModel.findOneAndUpdate('60784724ce34f63c68af2d1d', {name: 'Manish'})
        //     .then()
        //     .catch()    

        MyModel.updateMany({name: 'Luis'}, { name: 'Luis2'})
            .then()
            .catch()
        */
       
        /*
        MyModel.findByIdAndDelete('60784724ce34f63c68af2d1d')
            .then()
            .catch()
        
        MyModel.deleteOne({name: 'Jorge'})
            .then()
            .catch()

        MyModel.deleteMany({name: 'Luis'})
            .then()
            .catch()    
        */    
            
         
    })
    .catch((err) => {
        console.log('Failed to add', err)
    }) 