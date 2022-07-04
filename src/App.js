import ArcadeLand from "./components/ArcadeLand/ArcadeLand";
import Intro from "./components/Intro/Intro";
import Investors from "./components/Investors/Investors";
import Navbar from "./components/Navbar/Navbar";
import NftLand from "./components/NftLand/NftLand";
import Vision from "./components/Vision/Vision";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <NftLand />
      <Vision />
      <ArcadeLand />
      <Investors />
    </div>
  );
}

export default App;
