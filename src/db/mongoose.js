const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });

/* const Test = mongoose.model('Test', {
    name: {
        type: String
    }
})

const something = new Test({
    name: 'test'
});
something.save().then((test) => {
    console.log(test);
}).catch((error) => {
    console.log(error);
}) */