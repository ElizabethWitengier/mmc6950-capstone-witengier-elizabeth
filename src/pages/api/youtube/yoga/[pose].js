import axios from "axios";
function formatDuration(durationString) {
  const match = durationString.match(/PT(\d+)M(\d+)S/);
  if (match) {
    const minutes = match[1];
    const seconds = match[2];
    const formattedDuration = `${minutes.padStart(2, "0")}:${seconds.padStart(
      2,
      "0"
    )}`;
    return formattedDuration;
  }
}

export default async function handler(req, res) {
  try {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${req.query.pose}+yoga+pose&maxResults=15&safeSearch=moderate&key=${process.env.YOUTUBE_KEY}`;
    const searchResponse = await axios.get(searchUrl);

    const videoIds = searchResponse.data.items.map((item) => item.id.videoId);
    const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(
      ","
    )}&key=${process.env.YOUTUBE_KEY}`;
    const videoDetailsResponse = await axios.get(videoDetailsUrl);

    const searchResults = searchResponse.data.items;
    const videoDetails = videoDetailsResponse.data.items;

    const combinedResults = searchResults.map((item, index) => ({
      ...item,
      duration: formatDuration(videoDetails[index].contentDetails.duration),
    }));

    res.status(200).json(combinedResults);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
}
