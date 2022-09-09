//import logo from './logo.svg';
import './App.css';
import {Header, Content, Footer} from './func-components' 
import MsgBox from './class-props';
import MsgBox2 from './func-props';
import Banner from './banner';
import {EventData2} from './event-data'
import RefsArray from './refs-array';

function App() {
  return (
    <>

      <Header/>
      <Content/>
      <div style={{marginLeft:'12px'}}>This props class</div>
      <MsgBox 
        text="React & Reatc Native" 
        color="blue" 
        bgColor="#ccc" 
        fontSize="18pt" 
        border="solid 1px black"
      />
      <div style={{marginLeft:'12px'}}>This props function</div>
      <MsgBox2
        text="React & Reatc Native" 
        color="blue" 
        bgColor="#ccc" 
        fontSize="18pt" 
        border="solid 1px black"
      />
      <Banner/>
      <EventData2/>
      <RefsArray/>
      <Footer/>
    </>
  );
}

export default App;
