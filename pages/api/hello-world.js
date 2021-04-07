export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ method: "This was a get" });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
