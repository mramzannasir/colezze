import { useRef, useState, useEffect } from "react";
import Player from "@vimeo/player";
import "../styles/globals.css";
import Head from "../components/Head";
import { IoPlaySharp } from "react-icons/io5";
import { RiPauseLargeLine } from "react-icons/ri";

const Home = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const newPlayer = new Player(iframeRef.current);
      setPlayer(newPlayer);

      newPlayer.on("play", () => {
        setIsPlaying(true);
      });

      newPlayer.on("pause", () => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (player) {
        player.off("play");
        player.off("pause");
      }
    };
  }, [iframeRef, player]);

  const togglePlay = () => {
    if (!player) return;

    if (isPlaying) {
      player
        .pause()
        .then(() => {
          setIsPlaying(false);
        })
        .catch((error) => {
          console.error("Error pausing the video:", error);
        });
    } else {
      player
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing the video:", error);
        });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Head title={"COLEZZE | Official Website"} />
      <div className="videoBackground">
        <button className={`pauseButton`} onClick={togglePlay}>
          <span className={isPlaying ? "pauseIcon" : "playIcon"}>
            {isPlaying ? (
              <div className="" style={{ marginTop: "5px" }}>
                <RiPauseLargeLine size={22} color="white" />
              </div>
            ) : (
              <IoPlaySharp size={20} color="white" />
            )}
          </span>
        </button>
        <iframe
          ref={iframeRef}
          className="videoIframe"
          src="https://player.vimeo.com/video/925403936?background=1&autoplay=1&muted=1"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background"
        ></iframe>
      </div>

      {/* Additional content */}
      <div className="ourStory">
        <h2>My Story</h2>
        <p>
          Founded in 2023, Colezze is a luxury fashion brand that prides itself
          on exquisite design, exceptional craftsmanship, and a commitment to
          sustainable luxury. Our journey began with a passion for blending
          traditional techniques with modern aesthetics, creating timeless
          pieces for the discerning individual. As the seasons change, so does
          our creativity and innovation. This coming autumn-winter, we are
          excited to unveil our 2024 collection, a curated selection of garments
          designed to inspire anticipation and allure. Scheduled for release in
          October/November, this collection embodies our belief that every piece
          of clothing should not only be worn but looked forward to – a
          celebration of personal style and individuality. Join us as we
          continue to craft our story, one garment at a time, with the goal of
          turning every piece into a cherished wardrobe highlight.
        </p>
      </div>
      <div className="ourManufacture">
        <h3>Manufacturing</h3>
        <p>
          With over two decades of manufacturing expertise, our manufacturer has
          established a distinguished reputation rooted in a resolute dedication
          to quality. Our production facility is governed by stringent
          Environment, Health, and Safety (EHS) protocols that align with both
          local and global standards. We hold a deep commitment to ethical
          practices, especially concerning our workforce, by rigorously adhering
          to laws and regulations that protect human rights and ensure fair
          labor practices. It's this principled approach that enables us to
          deliver products that not only meet but exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default Home;
