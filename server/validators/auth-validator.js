const {z} = require("zod");

// Create a Schema
const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"}).
    trim()
    .min(3, {message: "Name must be at least 3 characters"})
    .max(20, {message: "Name can not be more than 20 characters"}),
    email: z
    .string({required_error: "Email is required"}).
    trim()
    .email({message: "Invalid Email Address"})
    .min(3, {message: "Email must be at least 3 characters"})
    .max(20, {message: "Email can not be more than 20 characters"}),
    phone: z
    .string({required_error: "Phone is required"}).
    trim()
    .min(10, {message: "Phone must be at least 10 characters"})
    .max(12, {message: "Phone can not be more than 12 characters"}),
    password: z
    .string({required_error: "Password is required"}).
    trim()
    .min(7, {message: "Password must be at least 7 characters"})
    .max(12, {message: "Password can not be more than 12 characters"}),

});

module.exports = signupSchema;