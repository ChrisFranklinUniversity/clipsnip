# ClipSnip

ClipSnip is a full-stack AI-powered app for automatically generating short-form video highlights using OpenAI's Whisper model.

---

## ✨ Features

- 🎥 Upload Videos (via frontend)
- 🧠 AI Transcription & Highlight Detection (via Python microservice)
- 🛠️ Backend API (Java Spring Boot)
- ⚛️ Frontend UI (React + Tailwind CSS)

---

## 📁 Project Structure

```
clipsnip/
├── ai-service/      # Python Flask microservice w/ Whisper
├── backend/         # Java Spring Boot API (handles video uploads)
├── frontend/        # React + Tailwind UI
```

---

## 🧠 AI Microservice

- Model: Whisper
- Endpoint: `POST http://localhost:5001/transcribe`
- Returns:
  - Full transcript
  - Highlight timestamps (currently mocked)

---

## 🛠️ How to Run Locally

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend (React + Tailwind)
```bash
cd frontend
npm install
npm run dev
```

### AI Service (Python + Flask + Whisper)
```bash
cd ai-service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

📌 **Note**: You must have `ffmpeg` installed and accessible via system PATH for Whisper to function correctly.

---

## ✅ Current Status

- ✅ Upload working
- ✅ Frontend UI styled
- ✅ Whisper AI endpoint running
- 🔜 Connecting everything for real highlight generation

---

## 👨‍💻 Author

**Chris**

This project is for learning, experimenting, and building real AI video tools. Stay tuned for updates!
