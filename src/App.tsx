import "./App.css";
import MainButton from "./components/atoms/MainButton";
import { DownloadIcon } from "lucide-react";
function App() {
  const handleDownloadNowButton = () => {
    alert("Test Test Test");
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline bg">Tailwind CSS WORK!</h1>
      <MainButton icon={DownloadIcon} onClick={handleDownloadNowButton}>
        حمله الان
      </MainButton>
    </>
  );
}

export default App;
