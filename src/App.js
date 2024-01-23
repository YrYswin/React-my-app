import './App.css';

// import Apps from './components/lesson/App';

import Todo from './components/Todo/Todo'
import Wrapper from './components/Wrapper/Wrapper'
import Main from './components/UseEffect/Main'

import Post from './components/UseEffect/Post'

export default function App() {
   return (
      <div className="App">
         {/* <Todo /> */}
         {/* <Apps /> */}

         <Wrapper color='Lightgreen'>
            <Post />
         </Wrapper>


         {/* <Wrapper color='Lightgreen'>
        <Main />
        <Todo></Todo>
      </Wrapper> */}
      </div>
   );
}

