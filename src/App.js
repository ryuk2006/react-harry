import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App(){
  return(
    <>
     <Navbar title="TEXTUTILS" about="contact" />

     <div className="container my-3">
     <TextForm heading="Enter The Text To Analyize Below" />
     </div>
  </>
  );
}

export default App;