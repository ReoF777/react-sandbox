import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="side">
      <Sidebar>
        <Menu>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem> Component</MenuItem>
          <MenuItem> Component</MenuItem>
          <MenuItem> Component</MenuItem>
          <MenuItem> Component</MenuItem>
        </Menu>
      </Sidebar>
      </div>
      
      <h1>Hello Vite + React!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        {count}
      </button>
    </>
  )
}

export default App
