
import './App.css'
import SignIn from './pages/SignIn'
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'
import Navbar from './component/Navbar'
import ContactList from './pages/ContactList'
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ContactList />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App
