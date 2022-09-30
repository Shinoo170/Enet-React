//import logo from './logo.svg';
import './App.css';
import {Header, Content, Footer} from './func-components' 
import MsgBox from './class-props';
import MsgBox2 from './func-props';
import Banner from './banner';
import {EventData2} from './event-data'
import RefsArray from './refs-array';
import MessageBox from './state-func';
import FormBootstrap from './form-bootstrap';

function App() {
  return (
    <>

      <Header/>
      <Content/>
      <FormBootstrap />

      <div >
        <div id="cosine">value</div>
        <button className="btn btn-success" onClick={cosine}>Get cosineSimilarity</button>
      </div>  

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
      <MessageBox/>
      <Footer/>
    </>
  );
}

export default App;

function cosine(){
  const book1 = ['school', 'romantic', 'love']
  const book2 = ['school', 'romantic', 'love']
  const set = new Set()
  book1.forEach( data => {
    set.add(data)
  })
  book2.forEach( data => {
    set.add(data)
  })
  const data = Array.from(set)

  const book1Keyword = []
  data.forEach( (element, index) => {
    book1Keyword[index] = 0

    for(let i=0; i<book1.length; i++){
      if(element === book1[i]){
        book1Keyword[index] = 1
        break
      }
    }
  });

  const book2Keyword = []
  data.forEach( (element, index, arr) => {
    book2Keyword[index] = 0

    for(let i=0; i<book2.length; i++){
      if(element === book2[i]){
        book2Keyword[index] = 1
        break
      }
    }
  });

  var AdotB = 0;
  var sumA = 0;
  var sumB = 0;
  for(let i=0; i<book1Keyword.length; i++){
    AdotB += book1Keyword[i] * book2Keyword[i]
    sumA += book1Keyword[i]
    sumB += book2Keyword[i]
  }
  const result = AdotB / (Math.sqrt(sumA) * Math.sqrt(sumB))

  document.getElementById('cosine').innerHTML = result
}