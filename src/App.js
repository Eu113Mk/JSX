import imageInSrc from "./imageInSrc.jpg";
import MyVideo from "./MyVideo.mp4";
import './style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title"> Welcome </h1>

                <br />
        

                <img className="img1" src={imageInSrc} alt="imageInSrc" />

                <br />

                <img className="img2" src="imageInPublic.jpg" alt="imageInPublic" />
            </div>
            
            <div>
            <video width="320" height="240" controls="controls"  autoplay="true">
                
                <source src={MyVideo} type="video/mp4" />
            </video>
            </div> 
      </header>
    </div>
  );
}

export default App;
