const mongoose = require('mongoose');
const Schema = mongoose.Schema

const home = new Schema({

    topTitle: {
        type: 'String',
    },
    topSubTitle: {
        type: 'String',
    }

},{
    timestamps: true, // serve para cadastrar time na db quando estiver cadastrando ou salvando na db
})

mongoose.model('Home', home)