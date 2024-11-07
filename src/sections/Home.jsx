import Csongor from "../assets/img/csongor.jpg";

export default function HomePage(props) {
  const { setActivePage } = props;

  const handleCTA = () => {
    setActivePage(1);
  };

  return (
    <div className="page container h-full">
      <div className="w-full h-full flex pt-0 md:items-center justify-center relative z-1">
        <div className="intro-text">
          <div className="top translate-y-[20svh] md:translate-y-0">
            <div className="top-line">
              <span className="block md:inline">Hello, I&apos;m </span>
              <span className="blur-in mighty-kennygore">Csongor</span>
            </div>
            <div className="bottom-line">
              <span>and I design</span>
              <div className="rotas">
                <div className="slider">
                  <div className="mask">
                    <ul>
                      <li className="anim1">
                        <div className="word1">logos</div>
                      </li>
                      <li className="anim2">
                        <div className="word2">UIs</div>
                      </li>
                      <li className="anim3">
                        <div className="word3">websites</div>
                      </li>
                      <li className="anim4">
                        <div className="word4">prints</div>
                      </li>
                      <li className="anim5">
                        <div className="word5">stuff</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom text-center md:text-left">
            <button onClick={handleCTA} className="btn">
              Come see my portfolio!
            </button>
          </div>
        </div>
        <img src={Csongor} alt="" className="intro-image" />
      </div>

      <span className="dot">&bull;</span>
    </div>
  );
}
