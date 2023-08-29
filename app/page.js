import Header from "./Components/Header/Header";
import Hero from "./Components/Home/Hero/Hero";
import Reasons from "./Components/Home/Reasons/Reasons";
import Services from "./Components/Home/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reasons />
        <Services />
      </main>
    </>
  )
}
