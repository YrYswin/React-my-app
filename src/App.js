import './App.css';

// import Apps from './components/lesson/App';

import Todo from './components/Todo/Todo'
import Wrapper from './components/Wrapper/Wrapper'
import Main from './components/UseEffect/Main'

export default function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Apps /> */}

      {/* <Wrapper color='Lightblue'>
        <div>Hello Danel</div>
        <button>Click me!</button>
      </Wrapper> */}


      <Wrapper color='Lightgreen'>
        <Main />
        <Todo></Todo>
      </Wrapper>
    </div>
  );
}

