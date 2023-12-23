import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Chat from './components/Chat';
import { ThemeProvider } from './contexts/ThemeContext';
function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/chat/:id" element={<Chat/>}/>
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App
