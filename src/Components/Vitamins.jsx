import caps from "../assets/caps.png";
import vitamin from "../assets/Vitamins.png";
import weight from "../assets/Weight_loss.png";
import "../Css/Vitamin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suggetions } from "./Suggetions";

export const Vitamins = () => {
  return (
    <div className="essential-con ">
      <h1 className="text-center heading">Essential Vitamins</h1>
      <div className="container ">
        <div className="container-for-top-hero d-flex">
          <div className="col-4 d-flex flex-column align-center medical-con ">
            <div className="medical-sup">
              <p className="para">Online Medical Supplies</p>
              <h2 className="h4-heading">Get Your Vitamins & Minarals</h2>
              <button className="button">EXPLORE</button>
            </div>
          </div>
          <div className="col-4">
            <div className="probiotics-con p-3">
              <div className="image">
                <img className="probiotics" src={caps} alt="probiotics" />
              </div>
            </div>
          </div>
          <div className=" col-4 con-details">
            <div className="vitamin d-flex">
              <div>
                <img className="icons" src={vitamin} alt="vitamin caps" />
              </div>
              <div>
                <h4 className="benfits">vitamins</h4>
                <p className="para">
                  Incresed Vitamins and
                  <br /> minerals in your diet
                </p>
              </div>
            </div>

            <div className="vitamin d-flex">
              <div>
                <img className="icons" src={weight} alt="vitamin caps" />
              </div>
              <div>
                <h4 className="benfits">Weight Loss</h4>
                <p className="para">
                  Weight Loss <br /> Find scientifically proven solutions
                </p>
              </div>
            </div>

            <div className="vitamin d-flex">
              <div>
                <img className="icons" src={weight} alt="vitamin caps" />
              </div>
              <div>
                <h4 className="benfits">Functional Foods</h4>
                <p className="para">
                  Functional Foods <br /> From Protein Powers to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="suggesion-con">
        <div className="suggesions">
        <Suggetions/>
        </div>
      </div>
      
    </div>
  );
};
