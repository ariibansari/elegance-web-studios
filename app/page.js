import Header from "./Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <div id="hero-texture">
            <img src="./dot-texture-dark.png" />
          </div>
          <div id="hero-content">
            <div id="hero-title-container">
              <h1>With Our Expert Web Design Services, We Can Elevate Online Presence for Your <br/> Event Planning Brand</h1>
              <div className="custom-underline" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
