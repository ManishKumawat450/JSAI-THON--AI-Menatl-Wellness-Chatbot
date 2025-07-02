import { AzureOpenAI } from "openai";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || '*',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
const apiVersion = process.env["OPENAI_API_VERSION"];
const deployment = "gpt-4.1"; // Azure deployment name

// Initialize AzureOpenAI client
const client = new AzureOpenAI({
    azure_endpoint: endpoint,
    api_key: process.env.AZURE_OPENAI_API_KEY,
    api_version: apiVersion
});

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const response = await client.chat.completions.create({
            model: deployment,
            messages: [
                { role: "system", content: "You are a Mental Wellness Assistant. Provide stress management tips, mental health support, and practical advice to improve well-being." },
                { role: "user", content: message }
            ],
            max_tokens: 500,
            temperature: 0.7
        });

        res.json({
            response: response.choices[0].message.content
        });
    } catch (error) {
        console.error('Error in chat endpoint:', error);
        res.status(500).json({ error: 'Failed to process chat request' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
