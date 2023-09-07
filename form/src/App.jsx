import Form from './Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitPage from './SubmitPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/submitpage" element={<SubmitPage />} />
      </Routes>
    </Router>
  )
}

export default App;