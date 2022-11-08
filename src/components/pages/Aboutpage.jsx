import mario from '../../assets/mario2-modified.png'

function About() {
  return (
    <section id="aboutme" className="aboutme">

    <h2>About Me</h2>
    <img className="image2" src={mario} alt="Mario"/>
    <p>
        My name is Mario Ulloa. I am a Software development student at UCSD extension. My hope is to be a full stack
        developer. Here are a few of my projects that will showcase my growth as a developer.
    </p>
</section>



  );
}

export default About;
