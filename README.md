Mental Wellness AI Assistant 🧠💬
A supportive AI chatbot designed to promote mental wellness by providing empathetic conversations, safety tips, and helpful resources. Perfect for individuals seeking guidance, stress relief, or emotional support.

🚀 Features
✅ Empathetic Conversations — Listens to users with compassion and provides supportive responses
✅ Safety & Wellness Guidance — Shares relaxation tips, mood boosters, and mental health suggestions
✅ Memory Aware — Maintains conversation context for smooth, coherent interaction
✅ Resource Integration (RAG) — Fetches reliable information from curated mental health documents (PDF-based)
✅ Crisis Detection (Optional) — Identifies potential crisis indicators and provides appropriate resources
✅ Calming, Responsive UI — A visually soothing, accessible web interface tailored for mental wellness

⚠️ Important Notice
This AI Assistant is NOT a substitute for professional mental health care or emergency intervention. If you or someone you know is facing a crisis, contact emergency services or a certified mental health provider immediately.

🛠 Setup Instructions
Prerequisites
✔️ Node.js (v14 or newer)
✔️ Azure Account with OpenAI Service Enabled

Environment Setup
1️⃣ Create a .env file in the project root with:

bash
Copy
Edit
AZURE_INFERENCE_SDK_KEY=your_azure_openai_key  
INSTANCE_NAME=your_azure_openai_instance_name  
DEPLOYMENT_NAME=your_deployment_name  
2️⃣ Add your mental health PDFs to:

bash
Copy
Edit
/data/mental_health_resources  
📦 Installation
Install dependencies:

bash
Copy
Edit
npm install  
Start the backend server:

bash
Copy
Edit
npm start  
In a new terminal, launch the frontend:

bash
Copy
Edit
cd packages/webapp  
npm start  
📚 Mental Health & Crisis Resources
National Suicide Prevention Lifeline (US): 988

Crisis Text Line (US): Text HOME to 741741

International Suicide Prevention Resources: iasp.info

✅ Responsible Use Guidelines
This chatbot complements, but does not replace, mental health professionals

Always inform users they are interacting with AI

Ensure clear access to human help for critical situations

Regularly update health resources for accuracy

