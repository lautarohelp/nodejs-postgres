const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      // Si hay un error, envía una respuesta de error y no continúes con el siguiente middleware
      return next(boom.badRequest(error));
    }
    // Si no hay error, continúa con el siguiente middleware
    next();
  };
}

module.exports = validatorHandler;
