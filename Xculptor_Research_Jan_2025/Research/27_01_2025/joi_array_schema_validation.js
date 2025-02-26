const Joi = require('joi');

// Define a schema for the objects in the array
const objectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().integer().min(18).required(),
  email: Joi.string().email().required(),
});

// Define a schema for the array
const arraySchema = Joi.array().items(objectSchema).min(1).required();

// Example data
const data = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
];

// Validate the data
const { error, value } = arraySchema.validate(data);

if (error) {
  console.error("Validation error:", error.details);
} else {
  console.log("Validated data:", value);
}