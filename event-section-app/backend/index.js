const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for cross-origin requests
app.use(cors());

// Sample events data
const eventsData = [
  {
    id: 1,
    name: "Sample Event",
    date: "2024-12-15",
    location: "Sample Location",
    description: "This is a sample event description.",
    category: "Sample Category",
  },
];

// Define the /events endpoint
app.get("/events", (req, res) => {
  console.log("GET /events endpoint hit");
  res.json(eventsData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
