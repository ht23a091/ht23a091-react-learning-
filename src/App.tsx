import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const name = "Patty";
  const greet = (name: string) => <p>Hello, {name || "Guest"}!</p>

  const n = Math.floor(Math.random() * 10);
  const threshold = 5;

  const List = ['Patty', 'Rolley', 'Bobby'];

  const elems = (
    <>
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </>
  );

  return (
    <>
      <div>
        <div>{greet(name)}</div>

        {n > threshold && (
            <p>
              {n}は {threshold}よりも大きい値です
            </p>
          )}
        {n > threshold || (
          <p>
            {n}は{threshold}以下の値です
          </p>
        )}
        <p>
          {n}は{n % 2 === 0 ? '偶数' : '奇数'}です
        </p>

        <ul>
          {List.map((name) => (
            <li>Hello, {name}!</li>
          ))}
        </ul>

        <div>
          {
            // インラインコメント
          }
          {/*
            複数行に
            渡るコメント
          */}
        </div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
