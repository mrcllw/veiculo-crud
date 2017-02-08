var express = require ('express');
var router = express.Router();
var Veiculo = require('../models/veiculo');

router.route('/')
.get(function(req,res){
	Veiculo.find(function(erro, rows){
		if(erro){
			res.send(erro);
		}
		res.json(rows);
	});
})
.post(function(req,res){
	var model = new Veiculo();
	model.marca = req.body.marca;
	model.ano = req.body.ano;
	model.modelo = req.body.modelo;
	model.placa = req.body.placa;

	model.save(function(erro){
		if(erro){
			res.send(erro);
		}
		res.json({message : 'Veiculo Cadastrado!'});
	})
});

router.route('/:id')
.get(function(req,res){
	Veiculo.findById(req.params.id, function(erro, row){
		if(erro){
			res.send(erro);
		}
		res.json(row);
	});
})
.put(function(req,res){
	Veiculo.findById(req.params.id, function(erro, row){
		if(erro){
			res.send(erro);
		}
		row.marca = req.body.marca;
		row.ano = req.body.ano;
		row.modelo = req.body.modelo;
		row.placa = req.body.placa;

		row.save(function(erro){
			if(erro){
				res.send(erro);
			}
			res.json({ message : 'Veiculo atualizado.'});
		})
	})
})
.delete(function(req,res){
	Veiculo.remove({_id: req.params.id}, function(erro, row){
		if(erro){
			res.send(erro);
		}
		res.json({ message : 'Veiculo removido.'});
	})
});

module.exports = router;