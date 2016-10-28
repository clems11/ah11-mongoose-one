const Food = require( "./Food" );

module.exports = {
	postFood( req, res ) {
		new Food( req.body ).save( ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( food );
		} );
	}

	, getFood( req, res ) {
		Food.find( {}, ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( food );
		} );
	}

	, updateFood( req, res ) {
		Food.findByIdAndUpdate( req.params.foodId, req.body, ( err, updatedFood ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				Food.findById( req.params.foodId, ( err, food ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}

					return res.status( 200 ).json( food );
				} );
		} );
	}

	, deleteFood( req, res ) {
		Food.findByIdAndRemove( req.params.foodId, ( err, deletedFood ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( deletedFood );
		} );
	}

	, setPrice( req, res ) {
		Food.findByIdAndUpdate( req.params.foodId, { $set: { price: req.body.price } }, ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( { msg: "success" } );
		} );
	}

	, searchFood( req, res ) {
		Food
			.find()
			.where( "price" ).lt( parseFloat( req.query.price ) )
			.where( "calories" ).lt( parseFloat( req.query.calories ) )
			.limit( 1 )
			.exec()
			.then( ( food, err ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 200 ).json( food );
			} );
	}
};
