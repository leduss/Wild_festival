import { Link } from "react-router-dom";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <h1>Informations</h1>
      <form>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Prénom</span>
        </div>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Nom</span>
        </div>
        <div className="inputBox">
          <input type="email" required="required" />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="tel" required="required" />
          <span>Téléphone</span>
        </div>
        <div>
          <Link to="/home">
            <button type="button" className="button-paiement">
              Je valide ma réservation
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
