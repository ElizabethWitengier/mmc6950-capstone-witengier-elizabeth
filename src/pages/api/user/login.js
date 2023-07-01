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
        // Handle login request
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare the provided password with the hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        // Compare the hashed provided password with the hashed password
        const isPasswordMatchHashed = password == user.password;

        // Check if the passwords match
        if (!isPasswordMatch && !isPasswordMatchHashed) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        // Return a success message or user data
        res.status(200).json({ message: "Login successful", user });
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
