import connectDB from "@/db/connection";
import User from "@/schema/UserSchema";
import bcrypt from "bcrypt";

// Connect to the database
connectDB();

// Login route
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        // Handle signup request
        const { email, password, name } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ email, password: hashedPassword, name });
        await newUser.save();

        // Return a success message or user data
        res.status(201).json({ message: "Signup successful", user: newUser });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;

      try {
        // Handle logout request

        // Perform any necessary logout actions

        // Return a success message
        res.status(200).json({ message: "Logout successful" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
