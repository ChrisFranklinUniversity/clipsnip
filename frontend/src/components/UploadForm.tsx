import { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const res = await axios.post("http://localhost:8080/api/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-8 bg-gray-800 rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-semibold mb-4">Upload a Video</h2>
      <input
        type="file"
        accept="video/mp4"
        onChange={handleFileChange}
        className="mb-4 w-full bg-gray-700 rounded px-4 py-2"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-2 rounded-lg font-semibold"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {message && <p className="mt-4 text-green-400">{message}</p>}
    </div>
  );
};

export default UploadForm;
