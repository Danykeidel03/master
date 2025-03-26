const {body, param, validationResult} = require('express-validator')

const validateResult = (req, res, next) => {
    const errors = validateResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    next()
}

const createUserValidators = [
    body('name')
        .noEmpty()
        .withMessage('El nombre es reuqrido')
        .isString()
        .withMessage('El nombre debe ser un texto'),

    validateResult
]

module.exports = createUserValidators