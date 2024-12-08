import "../Css/Latest.css";
import termeric from "../assets/termaric-jar.png";
import handcaps from "../assets/caps-inhand.png";

export const Latestnews = () => {
  return (
    <>
      <div>
        <p className="head-para text-center">OUR BLOG</p>
        <h1 className="head-heading text-center">Latest News</h1>
      </div>

      <div className="main-container d-flex p-1 flex-wrap">
        <div className=""></div>
        <div className="hand-jar-container col-3 ">
          <div className="fulljar-con">
            <img className="full-jar" src={termeric} alt="" />
            <div className="apr20">
              <span>20 APR</span>
            </div>
            <p className="para-jar">
              The Covid-19 Epidemic In 2022 <br /> is Back
            </p>
          </div>

          <div className="half-hand-container">
            <div className="halfhand-con">
              <img className="half-hand" src={handcaps} alt="" />
              <p className="para-jar pt-2">
                The Covid-19 Epidemic In 2022 <br /> is Back
              </p>
            </div>
            <div className="apr20">
              <span>20 APR</span>
            </div>
          </div>
        </div>

        <div className="hand-jar-container col-3">
          <div className="half-hand-container mb-3">
            <div className="halfhand-con">
              <img className="half-jar" src={termeric} alt="" />
              <p className="para-jar pt-2">
                The Covid-19 Epidemic In 2022 <br /> is Back
              </p>
            </div>
            <div className="apr20">
              <span>20 APR</span>
            </div>
          </div>

          <div className="fulljar-con">
            <img className="full-jar" src={handcaps} alt="" />
            <div className="apr20">
              <span>20 APR</span>
            </div>
            <p className="para-jar">
              The Covid-19 Epidemic In 2022 <br /> is Back
            </p>
          </div>
        </div>


        <div className="hand-jar-container col-3">
          <div className="fulljar-con">
            <img className="full-jar" src={termeric} alt="" />
            <div className="apr20">
              <span>20 APR</span>
            </div>
            <p className="para-jar">
              The Covid-19 Epidemic In 2022 <br /> is Back
            </p>
          </div>



          <div className="half-hand-container">
            <div className="halfhand-con">
              <img className="half-hand" src={handcaps} alt="" />
              <p className="para-jar pt-2">
                The Covid-19 Epidemic In 2022 <br /> is Back
              </p>
            </div>
            <div className="apr20">
              <span>20 APR</span>
            </div>
          </div>
        </div>



        <div className="hand-jar-container col-3">
          <div className="half-hand-container mb-3">
            <div className="halfhand-con">
              <img className="half-jar" src={termeric} alt="" />
              <p className="para-jar pt-2">
                The Covid-19 Epidemic In 2022 <br /> is Back
              </p>
            </div>
            <div className="apr20">
              <span>20 APR</span>
            </div>
          </div>



          <div className="fulljar-con">
            <img className="full-jar" src={handcaps} alt="" />
            <div className="apr20">
              <span>20 APR</span>
            </div>
            <p className="para-jar">
              The Covid-19 Epidemic In 2022 <br /> is Back
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
