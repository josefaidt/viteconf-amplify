import LogoVite from './assets/vite.svg'
import LogoAmplify from './assets/aws-amplify.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={LogoVite} className="logo" alt="Vite logo" />
        </a>
        <a href="https://docs.amplify.aws" target="_blank">
          <img
            src={LogoAmplify}
            className="logo amplify"
            alt="AWS Amplify logo"
          />
        </a>
      </div>
      <h1>Vite + AWS Amplify</h1>
      <p className="read-the-docs">
        Click on the Vite and AWS Amplify logos to learn more
      </p>
    </div>
  )
}

export default App
