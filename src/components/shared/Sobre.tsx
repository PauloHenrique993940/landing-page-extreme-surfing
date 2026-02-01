import Image_1 from '../../assets/figures/figure1.png';
import Image_2 from '../../assets/figures/figure2.png';
import Image_3 from '../../assets/figures/figure3.png';
import Image_4 from '../../assets/figures/figure4.png';
import '../../styles/Sobre.css'

const Sobre = () => {
  const imgagesSobre = [
    {
      img: Image_1,
      name: "Surfista com a prancha na mão"
    },
    {
      img: Image_2,
      name: "Surfista na onda"
    },
    {
      img: Image_3,
      name: "Surfista pegando onda"
    },
    {
      img: Image_4,
      name: "Surfista deitado na praia"
    }
  ]
  return (
    <section className='about-surf'>
      <div className='images-grid'>
        {imgagesSobre.map((image, index) => (
          <img key={index}
            src={image.img}
            alt={image.name}
            className='imagem'
          />
        ))};
      </div>
      <div className='content'>
        <span>About us</span>
        <h3>
          Get TOP SURF
          LESSONS With Us
        </h3>
        <p>
          Quis autem vel eum iure reprehenderit rui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui
          dolorem eum fugiat ruo voluptas nulla pariatur
        </p>
        <p>
          Reiciendis voluptatibus maiores alias consequatur aut perfe
          rendis doloribus asperiores repellat
        </p>
        <button>

        </button>
      </div>
    </section>
  );
}

export default Sobre;