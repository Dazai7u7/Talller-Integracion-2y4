const validarSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        const errores = error.errors.map(e => e.message);
        res
            .status(400)
            .json(error.errors.map((error) => error.message));
    }
};

module.exports = validarSchema;