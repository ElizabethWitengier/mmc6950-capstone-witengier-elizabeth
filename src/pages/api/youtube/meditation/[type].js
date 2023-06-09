// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // how to do a bow yoga pose
  // how to do dash meditation
  // dash meditaition techniques
  const responseFilter = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=meditation+for+${req.query.type}&maxResults=10&&safeSearch=moderate&key=${process.env.YOUTUBE_KEY}`
  );
  const allVideos = await responseFilter.json();
  res.status(200).json(allVideos);
}
