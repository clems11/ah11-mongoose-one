const mongoose = require( "mongoose" );

const Food = new mongoose.Schema( {
	  name: { type: String, required: true, trim: true, minlength: 1 }
	, calories: { type: Number, min: 0, required: true }
	, seasonal: { type: Boolean, default: false }
	, price: { type: Number, required: true, min: 0.01, max: 20 }
	, cookedBy: { type: String, enum: [ "Dontavious", "Joe" ], required: true }
} );

module.exports = mongoose.model( "Food", Food );
