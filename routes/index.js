//var express = require('express');
const express = require('express');
const app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', success: false, errors: req.session.erros});
  req.session.errors = null; 
}); 


/*GET Userlist page */
router.get('/userlist', function(req, res){
	var db = require("../db");
	var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Users.find({}).lean().exec(
		function(e, docs){
			res.render('userlist', {"userlist": docs});
		}
	);
});
/* GET New User page. */
router.get('/newusers', function(req, res) {
res.render('newusers', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function (req, res) {
	var erros = []; 
	if(!req.body.username || typeof req.body.username == undefined || req.body.username == null){
		erros.push({texto: "Nome invalido"})
	}

	if (req.body.username.lenght < 2){
		erros.push({texto: "Nome invalido"})
	}

	if(erros.lenght > 0){
		res.render("views/newusers", {erros: erros})
	}
	else{
		 var db = require("../db");
		var userName = req.body.username;
		var userEmail = req.body.useremail;
		var userCPF = req.body.cpf;
 
		var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
		var user = new Users({ username: userName, email: userEmail, cpf:userCPF });
		user.save(function (err) {
			if (err) {
				console.log("Error! " + err.message);
				return err;
			}
			else {
				console.log("Post saved");
				res.redirect("userlist");
			}
		});
	}
});




module.exports = router;


