import Counter from "./components/Counter";
import ParentTimer from "./components/ParentTimer";
import User from './components/User';
import ReducerCounter from './components/ReducerCounter';
import Form from './components/Form';
import Form2 from "./components/Form2";

function App() {
  return (
    <>
      <pre>Single change 2
      </pre>
      <h1 >Hello world - React + TS </h1>
      <hr />

      <h2>UseState</h2>
      <hr />
      <Counter />
      <br />
      <User />
      <br />

      <h2>UseEffect - useRef</h2>
      <hr />
      <ParentTimer />
      <br />

      <h2>UseReducer</h2>
      <hr />
      <ReducerCounter />
      <br />

      <h2>Custom hooks</h2>
      <hr />
      <Form />
      <br />
      <Form2 />

    </>
  );
}

export default App;
