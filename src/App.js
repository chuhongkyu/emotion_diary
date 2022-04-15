import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from './components/MyButtton';
import { type } from '@testing-library/user-event/dist/type';
import MyHeader from './components/MyHeader';


function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <MyHeader headText={"App"} 
                    leftChild={<MyButton text={"왼쪽 버튼"} onClick={()=>{alert("왼쪽 클릭")}}/>}
                    rightChild={<MyButton type={"positive"} text={"오른쪽 버튼"} onClick={()=>{alert("오른쪽 클릭")}}/>}
                    
                    />
            <h2>App.js</h2>

            <MyButton text={'버튼'} onClick={()=>alert("포지티브")} type={"positive"}/>
            <MyButton text={'버튼'} onClick={()=>alert("네거티브")} type={"negative"}/>
            <MyButton text={'버튼'} onClick={()=>alert("디폴트")} type={"default"}/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/new' element={<New/>} />
              <Route path='/edit' element={<Edit/>} />
              <Route path='/diary/:id' element={<Diary/>} />
            </Routes>
            
        </div>
    </BrowserRouter>
  );
}

export default App;
