const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:0penhackday@ds125322.mlab.com:25322/reshop', { useNewUrlParser: true });

module.exports = mongoose;
