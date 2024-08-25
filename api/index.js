const express = require('express');
const app = express();
const cors=require('cors');
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://bajaj-frontend-xi.vercel.app' // Replace with your frontend's URL
}));

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

// POST /bfhl
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: 'Invalid input' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestLowercaseAlphabet = alphabets
    .filter(char => char.length === 1 && char === char.toLowerCase())
    .sort((a, b) => b.localeCompare(a))[0] || [];

  const response = {
    is_success: true,
    user_id: "shankhaneel_roy_19042001",
    email: "shankhroy123@gmail.com",
    roll_number: "21BCT0203",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  };

  res.json(response);
});

// GET /bfhl
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;