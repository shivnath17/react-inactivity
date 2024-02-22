import './App.css';
import { useReactInactivity } from 'react-inactivity'

function App() {
  const { isIdeal } = useReactInactivity({ minute: 1 })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ideal for 1 min? -- {isIdeal.toString()}
        </p>
      </header>
    </div>
  );
}

export default App;
