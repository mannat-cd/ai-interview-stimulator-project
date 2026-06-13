require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/start-interview', async (req, res) => {
  const { jobTitle, interviewType } = req.body;

  const prompt = `You are a professional interviewer for the role of ${jobTitle}. 
  This is a ${interviewType} interview.
  Ask the first interview question only. Just the question, nothing else. Keep it short and clear.`;

  const reply = await callGemini(prompt);
  res.json({ question: reply });
});

app.post('/evaluate-answer', async (req, res) => {
  const { question, answer, jobTitle, questionNumber, totalQuestions } = req.body;

  const prompt = `You are evaluating an interview answer for the role of ${jobTitle}.
  
  Question: ${question}
  Candidate's Answer: ${answer}
  
  Give a short evaluation in exactly this format:
  Score: X/10
  Strength: (one sentence about what was good)
  Improve: (one sentence about what to improve)
  
  Then if question number ${questionNumber} is less than ${totalQuestions}, add:
  Next Question: (ask the next interview question)
  
  Keep everything brief and encouraging.`;

  const reply = await callGemini(prompt);
  res.json({ feedback: reply });
});

async function callGemini(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

app.listen(3000, () => console.log('Server running on port 3000'));