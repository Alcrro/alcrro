const { response } = require('express');
const moment = require('moment');
const { Query } = require('mongoose');
const bonusModel = require('../models/bonusModel')
const bonusTableModel = require('../models/bonusTableModel')
const monthsList = require('../models/monthsModel')
const pool = require('../util/MySqlConnection').pool



const {MongoClient} = require("mongodb");

const client = new MongoClient('mongodb+srv://mycula:1Samsung95@cluster0.giv7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
client.connect().then(() => console.log("connected to db"));

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

		const inputSearch = req.body.jsHolder

		const tableHeaderList = await bonusTableModel.find()

		const peopleDetails = await bonusModel.find(
		)
				res.render('bonus/add-perslinie', {
					pepDetId: peopleDetails.id + 1,
					pepDet: peopleDetails,
					tbHeader: tableHeaderList,
					pageTitle: 'Adauga Angajat',
					path: '/add-perslist',
					moment: moment,
					isAuthenticated: req.session.isLoggedIn,
					inputSearchs:peopleDetails
				});
			}
    catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
	}
}



exports.searchOne = async (req, res, next) => {
	try{
		
		if(req.query.marca){
			let results;
			if(req.query.marca.includes(",") || req.query.marca.includes(" ")){
				let results = await client
				.db("myFirstDatabase")
				.collection("peoplelists")
				.aggregate([
					{
						$search: {
							index: "autocomplete",
							autocomplete: {
								query: req.query.marca,
								path: "marca",
								fuzzy:{
									maxEdits: 1,
								},
								tokenOrder: "sequential",
							},
						},
					},
					{
						$project: {
							marca: 1,
							_id: 1,
							nume: 1,
						},
					},
					{
						$limit:1,
					},
				])
				.toArray();

				return res.send(results);
			}

			results = await client
				.db("myFirstDatabase")
				.collection("peoplelists")
				.aggregate([
					{
						$search: {
							index: "autocomplete",
							autocomplete: {
								query: req.query.marca,
								path: "marca",
								fuzzy:{
									maxEdits: 1,
								},
								tokenOrder: "sequential",
							},
						},
					},
					{
						$project: {
							marca: 1,
							_id: 1,
							nume: 1,
						},
					},
					{
						$limit:1,
					}
				])
				.toArray();

				return res.send(results);
			}
			fetch('http://localhost:3000/searchone?marca=' + req.query.marca)
			then(res => res.json(results))
			then(
				res.render('bonus/add-perslinie', {
					pageTitle: "searchOne",
					path: "/searchone",
				})
			)
	} catch(error){
		console.error(error);
		res.send([]);
	}
};
	

exports.searchtwo = async (req, res, next) => {
	try{
		if(req.query.marca){
			let results;
			if(req.query.marca.includes(",") || req.query.marca.includes(" ")){
				let results = await client
				.db("myFirstDatabase")
				.collection("peoplelists")
				.aggregate([
					{
						$search: {
							index: "default",
							compound: {
								must:{
										text:{
											query: req.query.marca,
											path: "marca",
											fuzzy:{
												maxEdits: 1,
											},
										},
									},
								},
							},
						},
						{
							$limit:1,
						},
						{
							$project: {
								marca: 1,
								_id: 1,
								nume: 1,
							},
						},
				])
				.toArray();

				return res.send(results);
			}

			results = await client
				.db("myFirstDatabase")
				.collection("peoplelists")
				.aggregate([
					{
						$search: {
							index: "default",
							compound: {
								must:{
										text:{
											query: req.query.marca,
											path: "marca",
											fuzzy:{
												maxEdits: 1,
											},
										},
									},
								},
							},
						},
						{
							$limit:1,
						},
						{
							$project: {
								marca: 1,
								_id: 1,
								nume: 1,
							},
						},
					])
					.toArray();

					return res.send(results);
				}
		res.send([])
	}
	catch(error){
		console.error(error);
		res.send([])
	}
};



exports.getMarca = async (req, res, next) => {
	const marca = req.query.marca;
	let queryMarca = ('Select * from test');
	try{
		const resultMarca = await pool.query(queryMarca ,(error,results) =>{
			res.render('bonus/add-perslinie',{
				pageTitle: 'test',
				path: '/add-perslist',
				marca: results
			})
			console.log(results)
		})
	}catch(error){
		next(error)
	}

}