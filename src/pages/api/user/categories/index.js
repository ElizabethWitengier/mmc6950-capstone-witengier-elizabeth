import { allCategories } from "@/lib/categories";
import Category from "@/schema/CategorySchema";
import User from "@/schema/UserSchema";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { userId, name } = req.body;

      const checkCategory = allCategories.find((item) => item === name);

      if (!checkCategory) {
        return res.status(404).json({ error: "Category not found" });
      }

      const newCategory = new Category({
        userId,
        name,
      });

      const savedCategory = await newCategory.save();

      await User.findByIdAndUpdate(
        userId,
        { $push: { categories: savedCategory._id } },
        { new: true }
      );

      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(500).json({ error: "Failed to add Category" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { categoryId, userId } = req.query;

      // Check if the Category exists
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      // Check if the Category belongs to the user
      if (category.userId.toString() !== userId) {
        return res.status(401).json({ error: "Unauthorized access" });
      }

      // Delete the Category
      await Category.deleteOne({ _id: categoryId });

      // Remove the Category from the user's Categorys array
      await User.findByIdAndUpdate(userId, {
        $pull: { categories: categoryId },
      });

      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete Category" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
