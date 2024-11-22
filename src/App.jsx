import Header from "./components/Navbar"
import Hero from './sections/Hero';
import Vision from "./sections/Vision";

function App() {
  return (
    <main className="space-y-[128px]">
      <Header />
      <div className="flex justify-end items-center pl-20 lg:pl-16 xl:pl-64">
        <Hero />
      </div>
      <Vision />
    </main>
  )
}

export default App
