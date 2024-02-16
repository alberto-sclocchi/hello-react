import './App.css'
import logo from './assets/ironhack-logo.png'
import buttonDown from './assets/button-down.png'
import image1 from './assets/info-image1.png'
import image2 from './assets/info-image2.png'
import image3 from './assets/info-image3.png'
import image4 from './assets/info-image4.png'




function App() {

  return (
    <div className="container">
        <div className="intro">
          <div className="intro-img">
            <img src= {logo} alt="logo"/>
            <img src={buttonDown} alt="button"/>
          </div>

          <div className="intro-info">
            <div>
              <h1>Say hello to ReactJS</h1>
              <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            </div>

            <button>Awesome!</button>
          </div>
        </div>

        <div className="info">
          <div className="info-box">
            <img src={image1}/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive Uls.</p>
          </div>

          <div className="info-box">
            <img src={image2}/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>

          <div className="info-box">
            <img src={image3}/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component&apos;s.</p>
          </div>

          <div className="info-box">
            <img src={image4}/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
    </div>
  )
}

export default App
