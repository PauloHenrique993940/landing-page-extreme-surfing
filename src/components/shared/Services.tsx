import '../../styles/Services.css';
import Service1 from '../../assets/services/service-icon1.png';
import Service2 from '../../assets/services/service-icon2.png';
import Service3 from '../../assets/services/service-icon3.png';


const Services = () => {

  const cards = [
    {
      img: Service1,
      title: "Kite Surfing",
      describle: "Rolestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus aut reiciendis...",
      link: "Learn More ->"
    },
    {
      img: Service2,
      title: "Professional Coach",
      describle: "Qolestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus aut reiciendis...",
      link: "Learn More ->"
    },
    {
      img: Service3,
      title: "Surf Lessons",
      describle: "Rolestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus aut reiciendis...",
      link: "Learn More ->"
    },

  ]
  return (
    <section className='services-Container'>
      <div className='services-content'>
        <span>our servises</span>
        <h3>what we offer</h3>
      </div>
      <div className='Card-Container'>
        {cards.map((item, index) => (
          <div
            key={index}
            className="
              card-grid
            "
          >
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.describle}</p>
            <a href="#">{item.link}</a>
          </div>

        ))}
      </div>

    </section>

  );
}

export default Services;