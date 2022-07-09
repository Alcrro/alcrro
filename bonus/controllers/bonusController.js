const moment = require('moment');
const { Query } = require('mongoose');
const bonusModel = require('../models/bonusModel')
const bonusModel1 = require('../models/bonusModel')
const bonusTableModel = require('../models/bonusTableModel')
const monthsList = require('../models/monthsModel')

exports.peopleList = async (req, res, next) => {
	
	try{;
		const peopleDetails = await bonusModel.find()	;
		const tableHeaderList = await bonusTableModel.find();
		const monthsLists = await monthsList.find()

				res.render('bonus/peoplelist', {
					monthsList: monthsLists,
					pepDetId: peopleDetails.id + 1,
					pepDet: peopleDetails,
					tbHeader: tableHeaderList,
					pageTitle: 'Lista oameni',
					path: '/',
					moment: moment
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

		bonusModel.findOne()
				res.render('bonus/add-person', {
					pepDetId: peopleDetails.id + 1,
					pepDet: peopleDetails,
					tbHeader: tableHeaderList,
					pageTitle: 'Adauga Angajat',
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

exports.postPerson =  (req, res, next) => {
	let salariu = 1440; //req.body.
	let oreLucrateZi = 8;
	let zileLucratePeLuna = 21; //req.body.zileLucratePeLuna
	let totalOreLuna = oreLucrateZi + zileLucratePeLuna;
	let totalOreLucrateLuna = totalOreLuna ;
	let procentajLinie = req.body.procentajLinie ;  //req.body.procentajLinie
	let procentajLinie2 = procentajLinie/100


	monthsList.find()

	bonusModel.find().sort({unitNo : -1}).limit(0).then((data)=>{
			if(data){
				// console.log(data[0].unitNo);
				// updateId = +data[0].unitNo+1;
			
				const person = new bonusModel({
					pageTitle: 'Adauga Angajat',
					path: "/add-person",
					marca: req.body.marca,
					nume: req.body.nume,
					prenume: req.body.prenume,
					linia: req.body.linia,
					// unitNo: updateId
					bonus: ((salariu/totalOreLuna)*totalOreLucrateLuna*procentajLinie)
				})
				console.log(person);
				return person.save()
			.then(result => {
					res.redirect('/list');
				})
				.catch(err => {
					console.log(err);
				})
			}
	})
}


exports.persList = async (req, res, next) => {
	
	try{

		
		const peopleDetails = await bonusModel.find();
		const tableHeaderList = await bonusTableModel.find()
				res.render('bonus/add-perslinie', {
					pepDetId: peopleDetails.id + 1,
					pepDet: peopleDetails,
					tbHeader: tableHeaderList,
					pageTitle: 'Adauga Angajat',
					path: '/add-perslist',
					isAuthenticated: req.session.isLoggedIn,
					currentDate: new Date,
					moment: moment
				});
			}
    catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
	}
}