import Speaker from "../assets/img/speaker.svg";

function getAudioUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}

export default function About() {
  const playAudio = () => {
    const audio = document.getElementById("audio");
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <div className="page container page-about">
      <h2 className="page-title">about me</h2>
      <div className="page-content container flex w-full items-end justify-end">
        <div className="flex flex-col w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 xl:mr-[100px] md:mb-[80px]">
          <div className="flex flex-col items-end mb-12">
            <h2 className="title-2 w-full text-right mb-4 blur-in">csongor</h2>
            <div className="flex items-end gap-4">
              <button
                title="Hear it!"
                onClick={playAudio}
                className="cursor-pointer block audio-button h-auto w-28 mb-2">
                <img src={Speaker} alt="hello" className="h-auto w-full" />
                <audio id="audio" src={getAudioUrl("sound.wav")}></audio>
              </button>
            </div>
          </div>
          <div className="">
            <ol className="about-text-list">
              <li className="mb-8">
                <span>a)</span> ancient Hungarian name of Turkic origin, meaning ‘gamebird, bird of prey’
              </li>
              <li className="mb-8">
                <span>b)</span> a versatile self-taught designer with over 15 years of experience working on logos,
                branding projects, user interfaces, layouts and creating design projects from inception to execution,
                preferring to work on large, long-term projects
              </li>
              <li>
                <span>c)</span> someone who has the experience to provide you with all the solutions that are typically
                expected to require a larger design company
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
