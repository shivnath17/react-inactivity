## Installation
To install react-inactivity, simply run the following command:

For npm:

```bash
npm install react-inactivity
```

Yarn:

```bash
yarn add react-inactivity
```

pnpm:

```bash
pnpm add react-inactivity
```

## Usage

This is a simple overview of how to set up this library with all the options.

```js
// App.js
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
```

## Support and Suggestions

Submit any queries or suggestions in our [Github Repo](https://github.com/shivnath17/react-inactivity/issues).