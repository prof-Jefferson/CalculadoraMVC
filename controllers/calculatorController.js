const express = require('express');
const router = express.Router();
const calculatorModel = require('../models/calculatorModel');

router.get('/', (req, res) => {
    res.render('calculator', { result: null });
});

router.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operation = req.body.operation;

    let result;
    switch (operation) {
        case "add":
            result = calculatorModel.add(num1, num2);
            break;
        case "subtract":
            result = calculatorModel.subtract(num1, num2);
            break;
        case "multiply":
            result = calculatorModel.multiply(num1, num2);
            break;
        case "divide":
            if (num2 !== 0) {
                result = calculatorModel.divide(num1, num2);
            } else {
                result = "Não pode dividir por zero!";
            }
            break;
    }

    res.render('calculator', { result: result });
});

module.exports = router;
