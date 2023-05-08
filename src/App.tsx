import Layout from "./components/layout";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

function App() {
  return (
    <Layout header={<Header />} main={<h1>Home</h1>} footer={<Footer />} />
  );
}

export default App;
