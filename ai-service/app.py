from flask import Flask, request, jsonify
import whisper
import os
import tempfile

app = Flask(__name__)
model = whisper.load_model("base")

@app.route('/transcribe', methods=['POST'])
def transcribe():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    video = request.files['file']

    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp:
        video.save(temp.name)
        temp_path = temp.name  # Save path before closing
        temp.close()  # ✅ Needed for Windows

    try:
        print("🔍 Transcribing:", temp_path)
        result = model.transcribe(temp_path)

        transcript = result["text"]
        highlights = mock_highlight_analysis(transcript)

        return jsonify({
            "transcript": transcript,
            "highlights": highlights
        })
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)  # ✅ Safe cleanup

def mock_highlight_analysis(transcript):
    return [
        {"start": 12.5, "end": 25.0, "summary": "Exciting moment"},
        {"start": 42.0, "end": 50.0, "summary": "Big reaction"}
    ]

if __name__ == '__main__':
    app.run(port=5001)
