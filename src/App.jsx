import Header from "./components/Navbar"
import Hero from './sections/Hero';

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-end items-center pl-20 lg:pl-16 xl:pl-64">
        <Hero />
      </div>
    </>
  )
}

export default App
