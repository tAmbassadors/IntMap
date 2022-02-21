import "./Tour.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ToggleButtonGroup } from "react-bootstrap";

function Svg(props) {
  const { location, changeLocation } = props;

  const boxOffice = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2476.8 1651.2"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Level 1</Tooltip>}
      >
        <polygon
          points="2378.39 1420.35 2067.55 1575.77 2184.12 1420.35 2067.55 1264.93 2378.39 1420.35"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-l1-2")}
        />
      </OverlayTrigger>
    </svg>
  );

  //Commonlounge svg code missing
  const commonLounge = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 324"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Lobby</Tooltip>}
      >
        <polygon
          points="532.19 306.94 502.04 246.63 532.19 269.25 562.35 246.63 532.19 306.94"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("lobby")}
        />
      </OverlayTrigger>
    </svg>
  );

  const diningHall = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6016 4016"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Lobby</Tooltip>}
      >
        <polygon
          points="4329.56 3885.28 4036.16 3298.47 4329.56 3518.54 4622.96 3298.47 4329.56 3885.28"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("lobby")}
        />
      </OverlayTrigger>
    </svg>
  );

  const levelLounge = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2476.8 1651.2"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Corridor</Tooltip>}
      >
        <polygon
          points="917.32 1576.89 771.02 1284.29 917.32 1394.02 1063.62 1284.29 917.32 1576.89"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("corridor")}
        />
      </OverlayTrigger>
    </svg>
  );

  const launchpad = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2330.4 1553.7"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Basement 1</Tooltip>}
      >
        <polygon
          points="102.59 1340.21 361.83 1210.59 264.61 1340.21 361.83 1469.83 102.59 1340.21"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1-2")}
        />
      </OverlayTrigger>
    </svg>
  );

  const laundry = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1782 1189.5"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Corridor</Tooltip>}
      >
        <polygon
          points="1688.43 976.67 1494 1073.89 1566.91 976.67 1494 879.46 1688.43 976.67"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("corridor")}
        />
      </OverlayTrigger>
    </svg>
  );

  const mcl = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1443.84 963.84"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Misty Garden</Tooltip>}
      >
        <polygon
          points="1392.93 813.76 1241.57 889.44 1298.33 813.76 1241.57 738.07 1392.93 813.76"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("misty-garden")}
        />
      </OverlayTrigger>
    </svg>
  );

  const oasis = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4032 3024"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Level 1</Tooltip>}
      >
        <polygon
          points="1284.91 2886.47 1064.56 2445.78 1284.91 2611.05 1505.26 2445.78 1284.91 2886.47"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-l1-2")}
        />
      </OverlayTrigger>
    </svg>
  );

  const readingRoom = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2476.8 1651.2"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Basement 1</Tooltip>}
      >
        <polygon
          points="2425.67 1434.68 2138.52 1578.25 2246.21 1434.68 2138.52 1291.11 2425.67 1434.68"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1-2")}
        />
      </OverlayTrigger>
    </svg>
  );

  const room = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6016 4016"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Suite</Tooltip>}
      >
        <polygon
          points="4345.13 3877.34 4063.13 3313.35 4345.13 3524.86 4627.12 3313.35 4345.13 3877.34"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("suite")}
        />
      </OverlayTrigger>
    </svg>
  );

  const semRoom = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1443.84 963.84"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Level 1</Tooltip>}
      >
        <polygon
          points="57.76 829.52 227.9 744.45 164.09 829.52 227.9 914.59 57.76 829.52"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-l1-2")}
        />
      </OverlayTrigger>
    </svg>
  );

  const abbey = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.2 329.76"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Basement 1</Tooltip>}
      >
        <polygon
          points="578.59 39.2 519.9 68.54 541.91 39.2 519.9 9.85 578.59 39.2"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1")}
        />
      </OverlayTrigger>
    </svg>
  );

  const learnlobeB1 = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1780.5 1188.6"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Abbey</Tooltip>}
      >
        <polygon
          points="1641.67 880.86 1467.66 793.85 1532.92 880.86 1467.66 967.87 1641.67 880.86"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("abbey")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>More Rooms</Tooltip>}
      >
        <polygon
          points="499.92 880.86 673.93 967.87 608.67 880.86 673.93 793.85 499.92 880.86"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1-2")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe L1</Tooltip>}
      >
        <polygon
          points="1051.37 1157.61 1138.38 983.59 1051.37 1048.85 964.37 983.59 1051.37 1157.61"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-l1")}
        />
      </OverlayTrigger>
    </svg>
  );

  const learnlobeB1Choice = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1804.8 1204.8"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Blank Canvas</Tooltip>}
      >
        <polygon
          points="332.5 1037.7 472.01 1107.45 419.69 1037.7 472.01 967.95 332.5 1037.7"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("blank-canvas")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Reading Room</Tooltip>}
      >
        <polygon
          points="1377.85 1037.7 1238.34 1107.45 1290.66 1037.7 1238.34 967.95 1377.85 1037.7"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("reading-room")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe B1 Entrance</Tooltip>}
      >
        <polygon
          points="921.88 1165.76 838.71 999.42 921.88 1061.8 1005.05 999.42 921.88 1165.76"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Launchpad</Tooltip>}
      >
        <polygon
          points="522.35 837.01 637.81 779.28 594.51 837.01 637.81 894.74 522.35 837.01"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("launchpad")}
        />
      </OverlayTrigger>
    </svg>
  );

  const learnlobeL1 = (
    <svg
      id="Layer_7"
      data-name="Layer 7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1804.8 1204.8"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe B1</Tooltip>}
      >
        <polygon
          points="1731.89 844.06 1605.93 781.08 1653.17 844.06 1605.93 907.04 1731.89 844.06"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>More Rooms</Tooltip>}
      >
        <polygon
          points="622.16 842.8 748.11 905.78 700.88 842.8 748.11 779.82 622.16 842.8"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-l1-2")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Exit Learn Lobe</Tooltip>}
      >
        <polygon
          points="1155.83 1154.14 1218.81 1028.18 1155.83 1075.42 1092.86 1028.18 1155.83 1154.14"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("walkway-to-learnlobe")}
        />
      </OverlayTrigger>
    </svg>
  );

  const learnlobeL1Choice = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1804.8 1204.8">
      <g id="Layer_7" data-name="Layer 7">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 200 }}
          overlay={<Tooltip>Box Office</Tooltip>}
        >
          <polygon
            points="675.06 830.66 790.52 772.93 747.22 830.66 790.52 888.39 675.06 830.66"
            style={{ fill: "rgb(255, 255, 255, 0.6)" }}
            onClick={() => changeLocation("box-office")}
          />
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 200 }}
          overlay={<Tooltip>Seminar Room</Tooltip>}
        >
          <polygon
            points="1231.28 830.66 1115.82 772.93 1159.12 830.66 1115.82 888.39 1231.28 830.66"
            style={{ fill: "rgb(255, 255, 255, 0.6)" }}
            onClick={() => changeLocation("sem-room")}
          />
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 200 }}
          overlay={<Tooltip>Oasis</Tooltip>}
        >
          <polygon
            points="579.56 965 732.79 888.39 675.33 965 732.79 1041.62 579.56 965"
            style={{ fill: "rgb(255, 255, 255, 0.6)" }}
            onClick={() => changeLocation("oasis")}
          />
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 200 }}
          overlay={<Tooltip>Back to Learn Lobe Entrance</Tooltip>}
        >
          <polygon
            points="964.26 1173.15 1041.17 1019.32 964.26 1077.01 887.34 1019.32 964.26 1173.15"
            style={{ fill: "rgb(255, 255, 255, 0.6)" }}
            onClick={() => changeLocation("learnlobe-walkway-l1")}
          />
        </OverlayTrigger>
      </g>
    </svg>
  );

  const learnlobeWalkway = (
    <svg
      id="Layer_7"
      data-name="Layer 7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1644.6 1098"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Tembusu Entrance</Tooltip>}
      >
        <polygon
          points="905.1 1073.9 986.98 910.15 905.1 971.56 823.23 910.15 905.1 1073.9"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("entrance")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe</Tooltip>}
      >
        <polygon
          points="1011.93 680.54 1049.81 762.55 1051.37 712.07 1100.27 699.44 1011.93 680.54"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-l1")}
        />
      </OverlayTrigger>
    </svg>
  );

  const corridor = (
    <svg
      id="Layer_7"
      data-name="Layer 7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1762.2 1176.3"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Laundry</Tooltip>}
      >
        <polygon
          points="881.1 1092.44 772.21 927.52 785.42 1037.21 683.82 1080.6 881.1 1092.44"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("laundry")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Level Lounge</Tooltip>}
      >
        <polygon
          points="529.37 770.57 419.37 777.17 476.02 801.37 468.65 862.53 529.37 770.57"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("level-lounge-1")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Suite</Tooltip>}
      >
        <polygon
          points="492.03 624.01 420.31 588.15 447.21 624.01 420.31 659.87 492.03 624.01"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("suite")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Pantry</Tooltip>}
      >
        <polygon
          points="214.28 624.01 285.99 659.87 259.1 624.01 285.99 588.15 214.28 624.01"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("pantry")}
        />
      </OverlayTrigger>
    </svg>
  );

  const lobby = (
    <svg
      id="Layer_7"
      data-name="Layer 7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2435.1 1623.3"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Dining Hall</Tooltip>}
      >
        <polygon
          points="370.76 996.47 374.58 1134.77 407.25 1064.66 483.69 1076.39 370.76 996.47"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("dining-hall")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Common Lounge</Tooltip>}
      >
        <polygon
          points="46.52 1460.81 244.38 1559.73 170.18 1460.81 244.38 1361.88 46.52 1460.81"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("common-lounge")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Entrance</Tooltip>}
      >
        <polygon
          points="1217.55 1599.2 1316.48 1401.35 1217.55 1475.55 1118.62 1401.35 1217.55 1599.2"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("entrance")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Drop-off Point</Tooltip>}
      >
        <polygon
          points="2029.05 1069.05 1869.38 1078.63 1951.61 1113.76 1940.91 1202.54 2029.05 1069.05"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("drop-off-point")}
        />
      </OverlayTrigger>
    </svg>
  );

  const entrance = (
    <svg
      id="Layer_7"
      data-name="Layer 7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2476.8 1651.2"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Walkway to Learn Lobe</Tooltip>}
      >
        <polygon
          points="2403 1368.34 2145.97 1239.82 2242.36 1368.34 2145.97 1496.85 2403 1368.34"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("walkway-to-learnlobe")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Multi-Purpose Hall (MPH)</Tooltip>}
      >
        <polygon
          points="1894.73 956.79 1823.92 1098.4 1894.73 1045.3 1965.53 1098.4 1894.73 956.79"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("mph")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Lobby</Tooltip>}
      >
        <polygon
          points="546.74 1249.48 513.08 1467.23 584.35 1366.77 700.75 1407.06 546.74 1249.48"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("lobby")}
        />
      </OverlayTrigger>
    </svg>
  );

  const suite = (
    <svg
      id="Layer_7"
      data-name="Layer 7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5081.59 3392.23"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Corridor</Tooltip>}
      >
        <polygon
          points="4063.21 3289.74 4281.53 2853.11 4063.21 3016.85 3844.89 2853.11 4063.21 3289.74"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("corridor")}
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Room</Tooltip>}
      >
        <polygon
          points="152.22 1573.4 588.86 1791.72 425.11 1573.4 588.86 1355.08 152.22 1573.4"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("room-1")}
        />
      </OverlayTrigger>
    </svg>
  );

  const mistyGarden = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6016 4016"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Master's Common Lounge</Tooltip>}
      >
        <polygon
          points="5485.81 3847.31 5704.13 3410.67 5485.81 3574.42 5267.49 3410.67 5485.81 3847.31"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("mcl")}
        />
      </OverlayTrigger>
    </svg>
  );

  const dropOffPoint = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6016 4016"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Lobby</Tooltip>}
      >
        <polygon
          points="5474.49 3157.93 5830.16 3869.27 5474.49 3602.51 5118.82 3869.27 5474.49 3157.93"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("lobby")}
        />
      </OverlayTrigger>
    </svg>
  );

  const mph = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6000 4000"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Back to Tembusu Entrance</Tooltip>}
      >
        <polygon
          points="5791.53 2032.02 5329.34 2263.11 5502.67 2032.02 5329.34 1800.92 5791.53 2032.02"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("entrance")}
        />
      </OverlayTrigger>
    </svg>
  );

  const pantry = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6016 4016"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Back to Corridor</Tooltip>}
      >
        <polygon
          points="4121.98 3788.55 3839.99 3224.56 4121.98 3436.07 4403.98 3224.56 4121.98 3788.55"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("corridor")}
        />
      </OverlayTrigger>
    </svg>
  );

  const blankCanvas = (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8256 5504"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Back to Learn Lobe B1</Tooltip>}
      >
        <polygon
          points="5820.36 5201.29 5391.71 4343.99 5820.36 4665.49 6249.01 4343.99 5820.36 5201.29"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1-2")}
        />
      </OverlayTrigger>
    </svg>
  );

  return (
    <div>
      {(() => {
        switch (location) {
          case "box-office":
            return boxOffice;
          case "common-lounge":
            return commonLounge;
          case "dining-hall":
            return diningHall;
          case "level-lounge-1":
            return levelLounge;
          case "launchpad":
            return launchpad;
          case "laundry":
            return laundry;
          case "mcl":
            return mcl;
          case "oasis":
            return oasis;
          case "reading-room":
            return readingRoom;
          case "room-1":
            return room;
          case "sem-room":
            return semRoom;
          case "abbey":
            return abbey;
          case "learnlobe-walkway-B1":
            return learnlobeB1;
          case "learnlobe-walkway-B1-2":
            return learnlobeB1Choice;
          case "learnlobe-walkway-l1":
            return learnlobeL1;
          case "learnlobe-walkway-l1-2":
            return learnlobeL1Choice;
          case "walkway-to-learnlobe":
            return learnlobeWalkway;
          case "corridor":
            return corridor;
          case "lobby":
            return lobby;
          case "entrance":
            return entrance;
          case "suite":
            return suite;
          case "misty-garden":
            return mistyGarden;
          case "drop-off-point":
            return dropOffPoint;
          case "mph":
            return mph;
          case "pantry":
            return pantry;
          case "blank-canvas":
            return blankCanvas;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Svg;
