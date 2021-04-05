const mongoose = require('mongoose');
const Schema = mongoose.Schema

const product = new Schema({

    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
}, {
    timestamps: true,  // serve para cadastrar time na db quando estiver cadastrando ou salvando na db
});

mongoose.model('Product', product)