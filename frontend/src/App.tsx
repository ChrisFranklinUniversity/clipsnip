import UploadForm from "./components/UploadForm";
import VideoFeed from "./components/VideoFeed";

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🎬 ClipSnip</h1>

      <div className="max-w-4xl mx-auto mb-10">
        <UploadForm />
      </div>

      <VideoFeed />
    </div>
  );
}

export default App;
