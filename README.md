AI Interview Simulator
Overview

AI Interview Simulator is an AI-powered mock interview platform that conducts personalized interviews based on a candidate's resume, selected company, and target role.

The application generates realistic interview questions, evaluates candidate responses, provides constructive feedback, and simulates a real interview experience through voice interaction.

Features
Resume-Based Interviews
Upload PDF resumes
Extract skills, projects, and technologies
Generate personalized interview questions based on resume content
Company-Specific Interview Simulation

Supports company-focused interview experiences, including:

Amazon
Google
Microsoft

Questions are tailored according to the selected company's interview style and expectations.

Role-Based Question Generation

Supports multiple roles such as:

Software Engineer
Frontend Developer
Backend Developer
Machine Learning Intern
Voice Interaction
AI asks interview questions
Users answer using voice input
Speech is converted to text in real time
AI-Powered Evaluation

Provides:

Technical assessment
Communication feedback
Strength analysis
Improvement suggestions
Multi-Round Interviews
Dynamic question generation
Follow-up interview rounds
Continuous performance assessment
Technology Stack
Frontend
HTML
CSS
JavaScript
Web Speech API
Backend
Node.js
Express.js
Artificial Intelligence
Google Gemini API
Resume Processing
Multer
PDF-Parse
Additional Libraries
dotenv
cors
Project Structure
AI-Interview-Simulator/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── uploads/
│
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
Installation
Clone the Repository
git clone https://github.com/yourusername/ai-interview-simulator.git

cd ai-interview-simulator
Install Dependencies
npm install

Or install manually:

npm install express cors dotenv multer pdf-parse
Environment Variables

Create a .env file in the root directory:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
Running the Application

Start the development server:

node server.js

The application will run on:

http://localhost:3000
System Workflow
Resume Upload
      ↓
Resume Parsing
      ↓
Company Selection
      ↓
Role Selection
      ↓
Question Generation
      ↓
Voice Response
      ↓
Speech-to-Text Processing
      ↓
AI Evaluation
      ↓
Feedback Generation
Sample Feedback
Score: 8/10

Strength:
Good understanding of object-oriented programming concepts.

Improve:
Provide practical examples and explain implementation details.

Next Question:
What is the difference between a process and a thread?
Future Enhancements
Resume skill matching and gap analysis
Performance analytics dashboard
Interview history tracking
Difficulty levels (Easy, Medium, Hard)
Additional company-specific interview datasets
AI-generated follow-up questions
User authentication and profile management
Cloud deployment
Video interview support
Confidence and sentiment analysis
Security
API keys stored using environment variables
.env file excluded from version control
Uploaded files managed securely using Multer

Example .gitignore:

node_modules/
.env
uploads/
Author

Mannat Garg

B.Tech Computer Science Engineering (2028)
UIET Kurukshetra University

LinkedIn: www.linkedin.com/in/mannat-garg-19447a32b

GitHub: https://github.com/mannat-cd

LeetCode: https://leetcode.com/u/mannat-cd/

Project Objective

The objective of this project is to provide students and job seekers with a realistic interview preparation platform that delivers personalized, company-specific interview experiences through AI-driven voice interactions, helping users improve both technical and communication skills.
