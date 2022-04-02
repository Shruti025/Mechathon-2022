import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path='question1' element={<Question1 />} />
                    <Route exact path='question2' element={<Question2 />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;