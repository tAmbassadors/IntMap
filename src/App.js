import { useEffect, useState } from "react";
import "./App.css";
import IntMap from "./components/IntMap";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      `${process.env.PUBLIC_URL}/assets/College_logo.png`,
      `${process.env.PUBLIC_URL}/assets/tour-img/abbey.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/abbey.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/blank-canvas.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/blank-canvas.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/box-office.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/box-office.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/common-lounge.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/common-lounge.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/corridor.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/dining-hall.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/drop-off-point.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/entrance.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/launchpad.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/launchpad.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/laundry.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/learnlobe-walkway-B1-2.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/learnlobe-walkway-B1.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/learnlobe-walkway-l1-2.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/learnlobe-walkway-l1.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/level-lounge-1.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/level-lounge-1.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/level-lounge-2.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/level-lounge-3.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/level-lounge-4.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/level-lounge-5.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/lobby.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/mcl.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/misty-garden.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/mph.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/mph.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/oasis.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/pantry.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/reading-room.gif`,
      `${process.env.PUBLIC_URL}/assets/tour-img/reading-room.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/entrance.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/room-1.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/room-2.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/sem-room.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/start-image.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/suite.JPG`,
      `${process.env.PUBLIC_URL}/assets/tour-img/walkway-to-learnlobe.JPG`,
    ]
    cacheImages(imgs);
  })

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;

        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  }

  return (
    <div className="App">
      {isLoading ? <ClipLoader /> : <IntMap />}
    </div>
  );
}

export default App;
