const { body, validationResult } = require("express-validator");

// Middleware para validar resultados
const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validadores para crear usuario
const createProductValidators = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isString()
    .withMessage("El nombre debe ser un texto"),

  body("dimensiones")
    .notEmpty()
    .withMessage("El dimensiones es obligatorio")
    .isObject()
    .withMessage("El dimensiones debe ser un texto"),

  body("descripcion")
    .notEmpty()
    .withMessage("La descripción es obligatoria")
    .isString()
    .withMessage("La descripción debe ser un texto"),

  body("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => value >= 0 || "El precio no puede ser negativo"),

  body("stock")
    .notEmpty()
    .withMessage("El stock es obligatorio")
    .isNumeric()
    .withMessage("El stock debe ser un número")
    .custom((value) => value >= 0 || "El stock no puede ser negativo"),

  body("categoria")
    .notEmpty()
    .withMessage("La categoría es obligatoria")
    .isString()
    .withMessage("La categoría debe ser un texto"),

  body("marca")
    .notEmpty()
    .withMessage("La marca es obligatoria")
    .isString()
    .withMessage("La marca debe ser un texto"),

  body("codigoProducto")
    .notEmpty()
    .withMessage("El código del producto es obligatorio")
    .isString()
    .withMessage("El código del producto debe ser un texto"),

  body("fechaFabricacion")
    .notEmpty()
    .withMessage("La fecha de fabricación es obligatoria")
    .isISO8601()
    .withMessage("La fecha de fabricación debe ser una fecha válida"),

  body("garantiaMeses")
    .notEmpty()
    .withMessage("La garantía es obligatoria")
    .isNumeric()
    .withMessage("La garantía debe ser un número")
    .custom((value) => value >= 0 || "La garantía no puede ser negativa"),

  body("peso")
    .notEmpty()
    .withMessage("El peso es obligatorio")
    .isNumeric()
    .withMessage("El peso debe ser un número")
    .custom((value) => value >= 0 || "El peso no puede ser negativo"),

  body("alto")
    .notEmpty()
    .withMessage("El alto es obligatorio")
    .isNumeric()
    .withMessage("El alto debe ser un número")
    .custom((value) => value >= 0 || "El alto no puede ser negativo"),

  body("ancho")
    .notEmpty()
    .withMessage("El ancho es obligatorio")
    .isNumeric()
    .withMessage("El ancho debe ser un número")
    .custom((value) => value >= 0 || "El ancho no puede ser negativo"),

  body("profundidad")
    .notEmpty()
    .withMessage("La profundidad es obligatoria")
    .isNumeric()
    .withMessage("La profundidad debe ser un número")
    .custom((value) => value >= 0 || "La profundidad no puede ser negativa"),

  validateResult,
];

module.exports = createProductValidators;

