import logo from '../images/logo.jpeg';

import './Footer.css';

function Footer() {
  let currentFullYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__bckground"></div>
      <div className="footer__content page__spacing">
        <div className="footer__block">
          <div className="footer__block-left">
            <div className="footer__block-logo">
              <a href="/">
                <img className="logo logo__type_footer" alt="логотип студсовета" src={logo} />
              </a>
            </div>
            <p className="footer__block-icon">Мы в соц. сетях</p>
            <ul className="footer__block-socials">
              <li className="footer__social">
                <a href="google.com" className="footer__link">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z"
                      fill="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li className="footer__social">
                <a href="google.com" className="footer__link">
                  <svg
                    fill="#000000"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    height="22px"
                    viewBox="0 0 512 512"
                    enable-background="new 0 0 512 512">
                    <g id="e6c6b53d3c8160b22dad35a0f710525a">
                      <path
                        display="inline"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M509.365,393.284c-5.913,6.651-21.665,8.124-21.665,8.124
		h-83.951c0,0-11.737,2.74-32.498-18.957c-14.263-14.907-28.922-36.897-40.621-46.038c-6.977-5.45-13.541-2.708-13.541-2.708
		s-12.25,0.587-13.541,13.541c-2.269,22.752-5.416,35.205-5.416,35.205s-1.494,9.619-5.416,13.541
		c-4.191,4.191-10.832,5.416-10.832,5.416S166.019,427.526,76.066,282.251C11.151,177.407,2.947,146.846,2.947,146.846
		s-5.506-7.407,0-16.249c5.813-9.334,13.541-8.124,13.541-8.124h75.827c0,0,8.384,0.903,13.541,5.416
		c5.652,4.945,8.125,13.541,8.125,13.541s16.622,40.193,35.206,70.411c25.68,41.754,37.914,37.914,37.914,37.914
		s22.175-6.17,8.124-100.201c-1.944-13.008-27.081-16.249-27.081-16.249s-0.233-11.228,5.416-16.249
		c6.479-5.761,13.541-5.416,13.541-5.416s11.245-1.964,51.454-2.708c20.326-0.375,35.205,0,35.205,0s9.894-0.329,21.665,8.125
		c5.696,4.09,5.416,13.541,5.416,13.541s-2.388,67.862,0,102.909c1.029,15.074,8.125,16.249,8.125,16.249s7.622,5.902,37.913-37.914
		c19.169-27.727,35.206-67.703,35.206-67.703s3.97-11.401,8.124-16.249c3.965-4.625,10.833-5.416,10.833-5.416h97.492
		c0,0,6.011-0.221,8.124,5.416c1.941,5.176,0,16.249,0,16.249s-1.065,12.264-10.832,27.082
		c-23.062,34.989-67.703,92.075-67.703,92.075s-3.351,7.752-2.708,13.541c0.708,6.371,5.416,10.832,5.416,10.832
		s33.647,30.445,56.87,56.871c12.547,14.278,21.665,32.497,21.665,32.497S514.168,387.881,509.365,393.284z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="footer__social">
                <a href="google.com" className="footer__link">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-300.000000, -7599.000000)"
                        fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path
                            d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                            id="whatsapp-[#128]"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__block-right">
            <h3 className="footer__title">Каталог оборудования</h3>
            <ul className="footer__categories">
              <li className="footer__category">Автоматика и электроника</li>
              <li className="footer__category">Гидравлическое оборудование</li>
              <li className="footer__category">Кабели промышленные</li>
              <li className="footer__category">Лабораторное оборудование</li>
              <li className="footer__category">Медицинское оборудование</li>
              <li className="footer__category">Муфты</li>
              <li className="footer__category">Ремни</li>
              <li className="footer__category">Фильтры</li>
              <li className="footer__category">Электрика высокого напряжения</li>
              <li className="footer__category">Электроприводы двигателя</li>
              <li className="footer__category">Автоматика и электроника</li>
              <li className="footer__category">Гидравлическое оборудование</li>
            </ul>
          </div>
        </div>
        <div className="footer__block-bottom">
          <p className="footer__copyright">
            &copy; 2020 - {currentFullYear} ENGINEERING INTELLIGENCE TEAM
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
