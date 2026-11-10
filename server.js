const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Supabase konfiqurasiyasını frontend-ə ötürmək üçün API
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || "",
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ""
  });
});

app.listen(PORT, () => {
  console.log(`SevgiMatch serveri ${PORT} portunda işləyir 🚀`);
});
