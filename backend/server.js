const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/user', (req, res) => {
  res.json({
    name: 'Meghana',
    referralCode: 'meghana2025',
    totalDonations: 12000
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Meghana', donations: 12000 },
    { name: 'Ajay', donations: 9500 },
    { name: 'Sneha', donations: 8700 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
