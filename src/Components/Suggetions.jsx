
import "../Css/Suggetion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../assets/a.item-1.png'
import img2 from '../assets/a.item-2.png'
import img3 from '../assets/a.item-3.png'
import img4 from '../assets/a.item-4.png'
import img5 from '../assets/a.item-5.png'
import img6 from '../assets/a.item-6.png'

export const Suggetions = () => {
  return (
      <div className="outer-con-suggesion">

        <div className="container text-center con-suggisions">
        <div className="row">
          <div className="col-4 p-3">
            <div>
                <img className="iconsWithwhite" src={img1} alt="" />
            </div>
            <h4 className="headingForicons">Clinically Studied</h4>
            <p className="paraforHeading">All Products that we offer have<br/> undergone lab and safety tests</p>
          </div>
          <div className="col-4 p-3">
            <div>
                <img className="iconsWithwhite" src={img2} alt="" />
            </div>
            <h4 className="headingForicons">Clinically Studied</h4>
            <p className="paraforHeading">All Products that we offer have<br/> undergone lab and safety tests</p>
          </div>
          <div className="col-4 p-3">
            <div>
                <img className="iconsWithwhite" src={img3} alt="" />
            </div>
            <h4 className="headingForicons">Clinically Studied</h4>
            <p className="paraforHeading">All Products that we offer have<br/> undergone lab and safety tests</p>
          </div>
          <div className="col-4 p-2">
            <div>
                <img className="iconsWithwhite" src={img4} alt="" />
            </div>
            <h4 className="headingForicons">Clinically Studied</h4>
            <p className="paraforHeading">All Products that we offer have<br/> undergone lab and safety tests</p>
          </div>

          <div className="col-4 p-2">
            <div>
                <img className="iconsWithwhite" src={img5} alt="" />
            </div>
            <h4 className="headingForicons">Clinically Studied</h4>
            <p className="paraforHeading">All Products that we offer have<br/> undergone lab and safety tests</p>
          </div>

          <div className="col-4 p-2">
            <div>
                <img className="iconsWithwhite" src={img6} alt="" />
            </div>
            <h4 className="headingForicons">Clinically Studied</h4>
            <p className="paraforHeading">All Products that we offer have<br/> undergone lab and safety tests</p>
          </div>
        </div>
      </div>

      </div>
  );
};
