import { useDispatch, useSelector } from "react-redux";

const counterSelector = (store) => store.counter.counter;
const increaseCounterAction = { type: "INCREASE_COUNTER" };

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);

  const onClick = () => dispatch(increaseCounterAction);

  return (
    <div>
      <span>counter: {counter}</span>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
