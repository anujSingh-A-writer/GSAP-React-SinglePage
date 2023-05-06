import DigitCover from "./components/digitCover";
import Layout from "./components/layout";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import TeamWriter from "./components/teamWriter";
import { layout } from "./styles";

function App() {
  return (
    <Layout
      header={<Header />}
      main={
        <div
          className={`${layout.flex.directionCol.itemsCenter} gap-40 bg-black`}
        >
          <TeamWriter />
          <DigitCover />
        </div>
      }
      footer={<Footer />}
    />
  );
}

export default App;
