import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
const App = () => {

  return (
    <div className="bg-[#0b0617] min-h-screen w-full overflow-hidden p-3 flex">
      <Sidebar />

      <div className="aside flex-1 px-6 py-1">
        <Header />
        <Hero />
        <Section />
      </div>
    </div>
  )
}

export default App
