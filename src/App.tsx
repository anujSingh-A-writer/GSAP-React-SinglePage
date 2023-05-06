import DigitCover from "./components/digitCover";
import Layout from "./components/layout";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

function App() {
  return (
    <Layout header={<Header />} main={<DigitCover />} footer={<Footer />} />
  );
}

export default App;
