const validarSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        const errores = error.errors.map(e => e.message);
        res.status(400).json({ errors: errores });
    }
};

module.exports = validarSchema;