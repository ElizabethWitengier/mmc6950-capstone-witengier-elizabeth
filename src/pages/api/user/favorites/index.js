import Favorite from "@/schema/FavoriteSchema";
import User from "@/schema/UserSchema";
import axios from "axios";

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
      const favorite = await Favorite.findOne({ videoId: favoriteId, userId });
      if (!favorite) {
        return res.status(404).json({ error: "Favorite not found" });
      }
      console.log(favorite);

      // Delete the favorite
      await Favorite.deleteOne({ _id: favorite._id });

      // Remove the favorite from the user's favorites array
      await User.findByIdAndUpdate(userId, {
        $pull: { favorites: favorite._id },
      });

      res.status(200).json({ message: "Favorite deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete favorite" });
    }
  } else if (req.method === "GET") {
    try {
      const { userId } = req.query;

      // Remove the favorite from the user's favorites array
      const fav = await Favorite.find({ userId });
      const videoIds = fav.map((item) => item.videoId);
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds.join(
        ","
      )}&key=${process.env.YOUTUBE_KEY}`;

      // Send the API request and retrieve video details
      const data = await axios.get(apiUrl);

      res.status(200).json({
        fav: data.data.items.map((item) => ({ ...item, _id: fav._id })),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get favorite" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
