import Favorite from "@/schema/FavoriteSchema";
import User from "@/schema/UserSchema";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { userId, videoId } = req.body;

      const newFavorite = new Favorite({
        userId,
        videoId,
      });

      const savedFavorite = await newFavorite.save();

      const user = await User.findById(userId);
      user.favorites.push(savedFavorite);
      await user.save();

      res.status(201).json(savedFavorite);
    } catch (error) {
      res.status(500).json({ error: "Failed to add favorite" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { favoriteId, userId } = req.query;

      // Check if the favorite exists
      const favorite = await Favorite.findById(favoriteId);
      if (!favorite) {
        return res.status(404).json({ error: "Favorite not found" });
      }

      // Check if the favorite belongs to the user
      if (favorite.userId.toString() !== userId) {
        return res.status(401).json({ error: "Unauthorized access" });
      }

      // Delete the favorite
      await Favorite.deleteOne({ _id: favoriteId });

      // Remove the favorite from the user's favorites array
      await User.findByIdAndUpdate(userId, {
        $pull: { favorites: favoriteId },
      });

      res.status(200).json({ message: "Favorite deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete favorite" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
