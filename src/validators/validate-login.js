import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().strip(),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({ "string.empty": "Password is required." })
    .messages({
      "string.pattern.base":
        "Must bt at least 6 character and contain only alphabet and number",
    }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateLogin;
