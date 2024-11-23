import Header from "./components/Navbar"
import Review from "./sections/Review";
import CreateCard from "./sections/CreateCard";
import FindCard from "./sections/FindCard";
import Hero from './sections/Hero';
import Offer from "./sections/Offer";
import Vision from "./sections/Vision";

function App() {
  return (
    <main className="space-y-[128px]">
      <Header />
      <div className="flex justify-end items-center pl-20 lg:pl-16 xl:pl-64">
        <Hero />
      </div>
      <Vision />
      <Offer />
      <CreateCard />
      <FindCard />
      <Review />
    </main>
  )
}

export default App
