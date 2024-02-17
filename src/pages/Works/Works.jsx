import Cards from "../../components/Cards/Cards";
import "./Works.css";
function Works() {
  return (
    <section className="works" id="works">
      <h2 className="title-works">My Works</h2>
      <section className="projects">
        <Cards
          title="WeatherApp"
          description="WeatherApp is a simple application to check the weather for different cities around the world. "
          image="assets/picture1.jpg"
          link="https://github.com/Fajardo-dev/WeatherApp"
          downstyle="true"
        />{" "}
        <Cards
          title='The "Fast Fourier Transform" (FFT)'
          description="This code analyzes the frequency content of a simple sine wave using the Fast Fourier Transform (FFT)."
          image="assets/picture2.jpg"
          link="https://github.com/Fajardo-dev/FFT"
        />{" "}
        <Cards
          title="VideoGame"
          description="In development"
          image="assets/game.gif"
          downstyle="false"
          link="#"
          indev="true"
        />
        <Cards
          title="Portfolio v1 John Fajardo"
          description="Version 1 of John Fajardo's portfolio, made with html, css and javascript"
          image="assets/picture3.jpg"
          downstyle="true"
          link="https://github.com/Fajardo-dev/Portfolio"
        />{" "}
      </section>
    </section>
  );
}

export default Works;