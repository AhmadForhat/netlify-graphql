const mongoose = require('mongoose')

const uri = {process.env.MONGO_URL}
mongoose.connect(uri, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose
