import './App.css';
import Tables from './Components/Table';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';


function App() {

  const [content,setContent] = useState('albums')
  const [theme,setTheme] = useState('light')
  
  return (
    <div className="App">
      
      <Header content = {content} setContent={setContent} theme={theme} setTheme={setTheme}/>
      <Tables content = {content} theme={theme}/>
      
    </div>
  );
}

export default App;
