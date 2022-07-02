
const bonusModel = require('../models/bonusModel')
const bonusTableModel = require('../models/bonusTableModel')

exports.peopleList = async (req, res, next) => {

	try{
		const peopleDetails = await bonusModel.find();
		const tableHeaderList = await bonusTableModel.find()

				res.render('bonus/peoplelist', {

					pepDetId: peopleDetails.id + 1,
					pepDet: peopleDetails,
					tbHeader: tableHeaderList,
					pageTitle: 'Lista oameni',
					path: '/',
					
				});
				
		}
    catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
	}
}

exports.addPerson = async (req, res, next) => {

	try{
		const peopleDetails = await bonusModel.find();
		const tableHeaderList = await bonusTableModel.find()

				res.render('bonus/add-person', {

					pepDetId: peopleDetails.id + 1,
					pepDet: peopleDetails,
					tbHeader: tableHeaderList,
					pageTitle: 'Lista oameni',
					path: '/',
					isAuthenticated: req.session.isLoggedIn,
				});
				
		}
    catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
	}
}

exports.postPerson = (req, res, next) => {
  bonusModel.find()
    .then(products => {
			console.log(products);
      res.render('bonus/add-person', {
        prods: products,
        pageTitle: 'Products',
        path: '',
				isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
