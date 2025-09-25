const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/samskara', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// File upload configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit

// Database Schemas
const StateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capital: { type: String, required: true },
  region: { type: String, required: true },
  description: { type: String, required: true },
  festivals: [String],
  traditions: [String],
  culture: [String],
  artForms: [String],
  languages: [String],
  famousFor: [String],
  createdAt: { type: Date, default: Date.now }
});

const FestivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  description: { type: String, required: true },
  season: { type: String, required: true },
  significance: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const TraditionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  region: { type: String, required: true },
  significance: { type: String, required: true },
  practices: [String],
  createdAt: { type: Date, default: Date.now }
});

const CultureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  region: { type: String, required: true },
  details: [String],
  significance: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ArtFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  origin: { type: String, required: true },
  characteristics: [String],
  significance: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ContributionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  fileName: String,
  fileUrl: String,
  status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
  createdAt: { type: Date, default: Date.now }
});

// Models
const State = mongoose.model('State', StateSchema);
const Festival = mongoose.model('Festival', FestivalSchema);
const Tradition = mongoose.model('Tradition', TraditionSchema);
const Culture = mongoose.model('Culture', CultureSchema);
const ArtForm = mongoose.model('ArtForm', ArtFormSchema);
const Contribution = mongoose.model('Contribution', ContributionSchema);

// API Routes

// Get all states
app.get('/api/states', async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single state
app.get('/api/states/:id', async (req, res) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) {
      return res.status(404).json({ message: 'State not found' });
    }
    res.json(state);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all festivals
app.get('/api/festivals', async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.json(festivals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all traditions
app.get('/api/traditions', async (req, res) => {
  try {
    const traditions = await Tradition.find();
    res.json(traditions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all culture elements
app.get('/api/culture', async (req, res) => {
  try {
    const culture = await Culture.find();
    res.json(culture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all art forms
app.get('/api/artforms', async (req, res) => {
  try {
    const artForms = await ArtForm.find();
    res.json(artForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit contribution
app.post('/api/contributions', upload.single('file'), async (req, res) => {
  try {
    const { name, email, subject, category, content } = req.body;
    
    const contributionData = {
      name,
      email,
      subject,
      category,
      content
    };

    if (req.file) {
      contributionData.fileName = req.file.filename;
      contributionData.fileUrl = `/uploads/${req.file.filename}`;
    }

    const contribution = new Contribution(contributionData);
    await contribution.save();

    res.status(201).json({ 
      message: 'Contribution submitted successfully',
      id: contribution._id 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all contributions (admin)
app.get('/api/contributions', async (req, res) => {
  try {
    const contributions = await Contribution.find().sort({ createdAt: -1 });
    res.json(contributions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed initial data
app.post('/api/seed', async (req, res) => {
  try {
    // Clear existing data
    await State.deleteMany({});
    await Festival.deleteMany({});
    await Tradition.deleteMany({});
    await Culture.deleteMany({});
    await ArtForm.deleteMany({});

    // Insert sample data
    const sampleStates = [
      {
        name: 'Kerala',
        capital: 'Thiruvananthapuram',
        region: 'South India',
        description: 'Known as "God\'s Own Country", Kerala is famous for its backwaters, spice plantations, and rich cultural heritage.',
        festivals: ['Onam', 'Thrissur Pooram', 'Theyyam', 'Boat Races', 'Vishu'],
        traditions: ['Ayurveda', 'Backwater Tourism', 'Spice Trade', 'Matrilineal System'],
        culture: ['Malayalam Literature', 'Coconut Cuisine', 'Traditional Architecture'],
        artForms: ['Kathakali', 'Mohiniyattam', 'Theyyam', 'Koodiyattam'],
        languages: ['Malayalam', 'Tamil', 'English'],
        famousFor: ['Backwaters', 'Spices', 'Ayurveda', 'Houseboats', 'Coconuts']
      },
      {
        name: 'Rajasthan',
        capital: 'Jaipur',
        region: 'North India',
        description: 'The "Land of Kings" renowned for magnificent palaces, desert landscapes, and vibrant folk culture.',
        festivals: ['Pushkar Fair', 'Desert Festival', 'Teej', 'Gangaur'],
        traditions: ['Royal Heritage', 'Desert Life', 'Puppet Shows', 'Folk Music'],
        culture: ['Rajasthani Cuisine', 'Colorful Turbans', 'Haveli Architecture'],
        artForms: ['Ghoomar Dance', 'Kalbeliya Dance', 'Folk Music', 'Miniature Paintings'],
        languages: ['Hindi', 'Rajasthani', 'Marwari'],
        famousFor: ['Thar Desert', 'Palaces', 'Forts', 'Folk Culture', 'Gemstones']
      }
    ];

    await State.insertMany(sampleStates);

    const sampleFestivals = [
      {
        name: 'Diwali',
        state: 'All India',
        description: 'Festival of lights celebrated across India',
        season: 'Autumn',
        significance: 'Victory of light over darkness'
      },
      {
        name: 'Onam',
        state: 'Kerala',
        description: 'Harvest festival marking homecoming of King Mahabali',
        season: 'Monsoon',
        significance: 'Celebration of prosperity and unity'
      }
    ];

    await Festival.insertMany(sampleFestivals);

    res.json({ message: 'Database seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Samskara API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Samskara server running on port ${PORT}`);
});

module.exports = app;