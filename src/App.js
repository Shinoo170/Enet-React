import logo from './logo.svg';
import './App.css';
import {Header, Content, Footer} from './func-components' 
import MsgBox from './class-props';

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <MsgBox 
        text="React & Reatc Native" 
        color="blue" 
        bgColor="#ccc" 
        fontSize="18pt" 
        border="solid 1px black"
        />
      <Footer/>
    </>
  );
}

export default App;
