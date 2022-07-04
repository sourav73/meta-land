import ArcadeLand from "./components/ArcadeLand/ArcadeLand";
import Footer from "./components/Footer/Footer";
import Games from "./components/Games/Games";
import Intro from "./components/Intro/Intro";
import Investors from "./components/Investors/Investors";
import Navbar from "./components/Navbar/Navbar";
import NftLand from "./components/NftLand/NftLand";
import Team from "./components/Team/Team";
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
      <Games />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
