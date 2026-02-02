import '../../styles/Registre.css';
import Mulher from '../../assets/Regitre/mulherPrancha.png';
import Prancha from '../../assets/Regitre/prancha.png';

const RegistreNow = () => {
  return (
    <section
      className="
        registre-container
      "
    >
      <div
        className="
          form-content
        "
      >
        <span
          className="
            subtitle
          "
        >REGISTER NOW</span>
        <h2>BOOK YOUR SURFING LESSON NOW!</h2>
        
        <form
          className="
            surf-form
          "
        >
          <div
            className="
              input-row
            "
          >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
          </div>
          <div
            className="
              input-row
            "
          >
            <input type="email" placeholder="Email" />
            <select>
              <option>Select Lesson</option>
              
            </select>
          </div>
          <textarea placeholder="Message (optional)"></textarea>
          <button
            type="submit"
            className="
              btn-submit
            "
          >
            SUBMIT NOW &rarr;
          </button>
        </form>
      </div>
      <div
        className="
          image-wrapper
        "
      >
        <img
          src={Mulher}
          alt="Mulher com prancha"
          className="
            img-oval
          "
        />
      </div>
    </section>
  );
};

export default RegistreNow;