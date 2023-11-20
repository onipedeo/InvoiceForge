function validateDto(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (error) {
      res.status(422)
      next(error);
    }
  };
}

module.exports = validateDto;
