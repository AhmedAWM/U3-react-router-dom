import {Routes, Route} from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Students from './components/Students';
import StudentDetails from './components/StudentDetails';
import Homepage from './components/homepage';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/students' element={ <Students /> } />
        <Route path='/students/:studentID' element={ <StudentDetails /> } />
        {/* <Route path='/homepage' element={ <Homepage /> } /> */}
      </Routes>
    </>
  )
}

export default App;