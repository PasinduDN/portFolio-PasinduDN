import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Home from './assets/Component/Home/Home'
import HowIWork from './assets/Component/HowIWork/HowIWork'
import Projects from './assets/Component/Projects'

function App() {
  const [count, setCount] = useState(0)
  const [component, setComponent] = useState(<Home></Home>)

  function setMenu(menu) {
    switch (menu) {
      case 'home': {
        setComponent(<Home></Home>);
        break;
      }
      case 'howIWork': {
        setComponent(<HowIWork></HowIWork>);
        break;
      }
      case 'projects': {
        setComponent(<Projects></Projects>);
        break;
      }
    }
  }

  return (
    <>
      <div className='full-page-background'>
        <div className='row'>
          <div className="row justify-content-center sticky-top">
            <nav class="navbar navbar-expand-lg justify-content-center">
              <div >
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <div className="btn" onClick={() => { setMenu('home') }}> <a class="nav-link text-light" href="#">Home</a> </div>
                    </li>
                    <li class="nav-item">
                      <div className="btn" onClick={() => { setMenu('howIWork') }}> <a class="nav-link text-light" href="#">How I Work</a> </div>
                    </li>
                    <li class="nav-item">
                      <div className="btn" onClick={() => { setMenu('projects') }}> <a class="nav-link text-light" href="#">Projects</a> </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='row'>
          {component}
        </div>

      </div>
    </>
  )
}

export default App
