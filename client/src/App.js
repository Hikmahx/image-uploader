import FileUpload from "./components/FileUpload";
import { UploadProvider } from "./context/UploadContext";

function App() {
  return (
    <UploadProvider>
      <main className="App font-poppins bg-light-grayish-blue w-full h-screen relative flex items-center justify-center">
        <FileUpload />
      </main>
    </UploadProvider>
  );
}

export default App;
