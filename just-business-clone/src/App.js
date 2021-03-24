import './App.css';
import Header from'./components/Header/Header';
import MainBanner from'./components/MainBanner/MainBanner';
import FeatureSection from'./components/FeatureSection/FeatureSection';

function App() {
  return (
    <div className="container">
      <Header />
      <MainBanner />
      <FeatureSection />
    </div>
  );
}

export default App;
