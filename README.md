🚀 Setup Instructions (From Scratch)
🔹 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Meghanakummara/InternPortal.git
cd InternPortal
🔹 2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Run the backend:

bash
Copy
Edit
node server.js
By default, server runs at:
👉 http://localhost:5000

🔹 3. Setup Frontend
Open a new terminal in project root:

bash
Copy
Edit
cd frontend
npm install
Start frontend:

bash
Copy
Edit
npm start
Runs at:
👉 http://localhost:3000

🧪 API Used from Backend
The frontend fetches dummy intern data from:

bash
Copy
Edit
GET http://localhost:5000/api/intern
Returns:

json
Copy
Edit
{
  "name": "Meghana",
  "referralCode": "meghana2025",
  "totalDonations": 5000
}
🌐 Deployment Tips
Frontend: Deploy on Netlify or Vercel

Backend: Deploy on Render (as Web Service)

📸 Features
Dummy login/signup page
Dashboard with name, referral code, donation amount
Static rewards/unlockables section
Optional: Static leaderboard page
