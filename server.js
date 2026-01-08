const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const v1Routes = require('./routes/v1/userRoutes');
const v2Routes = require('./routes/v2/userRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
