import './About.css';

import { aboutText, aboutImage } from './Constants';

function About() {
  return (
    <>
      <section className="about">
        <div className="about__bckground">
          <div className="about__content page__spacing">
            <div className="about__block-left">
              <div className="about__block-left-content">
                <h3 className="about__title categories__title">Каталог оборудования</h3>
                <p className="about__subtitle categories__subtitle">
                  Заказывайте оборудование или запасные части
                </p>
                <ul className="about__categories">
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                  <li className="about__equipment">asdvgasdvfasd</li>
                  <li className="about__equipment">asdfasdxzcasd</li>
                  <li className="about__equipment">12314123</li>
                </ul>
              </div>
            </div>
            <div className="about__block-right">
              <h3 className="about__title categories__title">О нас</h3>
              <div className="about__text-block">{aboutText}</div>
              <div className="about__image">
                <img
                  className="about__img"
                  src={aboutImage[0].image}
                  alt={aboutImage[0].name}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
