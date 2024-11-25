import Header from "./components/Navbar"
import Review from "./sections/Review";
import CreateCard from "./sections/CreateCard";
import FindCard from "./sections/FindCard";
import Hero from './sections/Hero';
import Offer from "./sections/Offer";
import Vision from "./sections/Vision";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="space-y-[128px]">
      <Header />
      <Hero />
      <Vision />
      <Offer />
      <CreateCard />
      <FindCard />
      <Review />
      <Faq />
      <Footer />
    </main>
  )
}

export default App
