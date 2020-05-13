const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = " '{PATH}' is mandatory."
mongoose.Error.messages.Number.min = 
    "The '{VALUE}' informed is smaller than the minimum value '{MIN}'."
mongoose.Error.messages.Number.max = 
    "The '{VALUE}' informed is bigger than the maximum value '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' isn´t a value atribute for '{PATH}' (PAYED, PENDING or SCHEDULED)."