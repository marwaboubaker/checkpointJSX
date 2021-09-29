import './Style.css';
import img from "./imageInSrc.jpg"
import myvideo from "./myVideo.mp4"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 2px black",maxWidth:"100vw"}}>
        <h1 className="title">HELLO MY NAME IS: MAROUA BOUBAKER</h1> <br />
        <div Id="profile">
          <img style={{width:"60vw", height:"30vw"}} src={img} /> <br />
          <img src="/imageInPublic.jpeg" />
        </div>
      </div>

      <video width="320" height="240" controls>
        <source src={myvideo} type={"video/mp4"} />
      </video>
      </div>
  );
}
export default App;