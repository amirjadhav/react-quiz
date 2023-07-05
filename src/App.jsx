import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="hover:p-5 bg-yellow  text-white p-4 text-3xl font-semibold"
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
