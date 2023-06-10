import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", FavoriteSchema);

export default Favorite;
