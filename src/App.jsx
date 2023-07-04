import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-navy">
      <button
        className="rounded-none hover:p-5 bg-purple-600 text-peach bg-dark-navy p-4 text-3xl"
        onClick={() => {
          navigate("/start-quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default App;
