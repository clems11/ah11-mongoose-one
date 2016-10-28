const foodCtrl = require( "./foodCtrl" );

module.exports = app => {
	app.post( "/api/food", foodCtrl.postFood );
	app.get( "/api/food", foodCtrl.getFood );
	app.put( "/api/food/:foodId/price", foodCtrl.setPrice );
	app.get( "/api/food/search", foodCtrl.searchFood );
	app.put( "/api/food/:foodId", foodCtrl.updateFood );
	app.delete( "/api/food/:foodId", foodCtrl.deleteFood );
};
