const Anthropic = require('@anthropic-ai/sdk');
const cors = require('cors');
const express = require('express');
const herbController = require('./controllers/herbController.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Herbs!');
});

app.get('/ai', async (req, res) => {
  try {
    const anthropic = new Anthropic({
      apiKey: 'sk-ant-api03-bMcjEKLigZQKR540FbX8zUFdjztSZwL-AHBVj682VHxgcMIJUV-alaaPW-yp7eDy_P0eyLTB5pBuvVZj9ldGqg-F3qCiwAA',
    });

    const msg = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [{ role: 'user', content: 'Hello, Claude' }],
    });

    console.log(msg);
    res.json(msg); // Send the response back to the client
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    res.status(500).json({ error: 'Failed to communicate with AI' });
  }
});

app.use('/herbs', herbController);

module.exports = app; 