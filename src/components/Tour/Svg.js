import "./Tour.css";
import changeMap from "../Map/Map.js";
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
      viewBox="0 0 1920 1080"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Level 1</Tooltip>}
      >
        <polygon
          points="1827.92 924.26 1625.74 1025.36 1701.56 924.26 1625.74 823.18 1827.92 924.26"
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
      viewBox="0 0 1920 1080"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Corridor</Tooltip>}
      >
        <polygon
          points="698.09 1046.73 615.6 881.77 698.09 943.63 780.56 881.77 698.09 1046.73"
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
      viewBox="0 0 1920 1080"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Basement 1</Tooltip>}
      >
        <polygon
          points="36.94 959.88 223.58 866.55 153.59 959.88 223.58 1053.2 36.94 959.88"
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
      viewBox="0 0 1920 1080"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Learn Lobe Basement 1</Tooltip>}
      >
        <polygon
          points="1860.31 954.81 1675.18 1047.38 1744.6 954.81 1675.18 862.25 1860.31 954.81"
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
          points="578.59 288.2 519.9 317.54 541.91 288.2 519.9 258.85 578.59 288.2"
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
          points="1051.38 983.59 964.37 1157.61 1051.38 1092.35 1138.38 1157.61 1051.38 983.59"
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
      <rect
        x="1607.3"
        y="780.5"
        width="77.45"
        height="75.18"
        rx="3.89"
        fill="#c7d0d8"
        stroke="#3c5447"
        stroke-miterlimit="10"
        stroke-width="8px"
        onClick={() => changeLocation("misty-garden")}
      />
      <path d="M1625.09,804.23h5.77v24.31h13.49v4.26h-19.26Z" />
      <path d="M1647.09,829.4l2.72-3.21a11.15,11.15,0,0,0,7.49,3c3.46,0,5.83-1.57,5.83-4.2,0-2.86-2.09-4.72-9.27-4.72v-3.68c6.18,0,8.2-1.89,8.2-4.44,0-2.32-1.75-3.72-4.67-3.72a9.6,9.6,0,0,0-6.31,2.62l-3-3.11a15,15,0,0,1,9.51-3.51c6,0,10.19,2.65,10.19,7.35,0,3.1-2.08,5.18-5.5,6.38v.18c3.73.85,6.57,3.21,6.57,6.92,0,5.07-5,8-11.11,8C1652.7,833.34,1649.31,831.61,1647.09,829.4Z" />
      <rect
        x="1607.3"
        y="698.83"
        width="77.45"
        height="75.18"
        rx="3.89"
        fill="#c7d0d8"
        stroke="#3c5447"
        stroke-miterlimit="10"
        stroke-width="8px"
      />
      <path d="M1617.59,722.43h5v23.88h11.76v4.18h-16.77Z" />
      <path d="M1638.9,746.45h6.16V728.54H1640v-3.11a17.73,17.73,0,0,0,6.34-2.25H1650v23.27h5.42v4H1638.9Z" />
      <path d="M1672.78,727.37h-13v-4.19h18.45v3c-6.45,7.93-7.56,13.61-8,24.26h-5C1665.62,740.8,1667.47,734.69,1672.78,727.37Z" />
      <rect
        x="1607.3"
        y="862.39"
        width="77.45"
        height="75.18"
        rx="3.89"
        fill="#c7d0d8"
        stroke="#3c5447"
        stroke-miterlimit="10"
        stroke-width="8px"
        onClick={() => changeLocation("lobby")}
      />
      <path d="M1625.09,886.12h5.77v24.3h13.49v4.27h-19.26Z" />
      <path d="M1649.57,910.59h7.07V892.34h-5.83v-3.16a22,22,0,0,0,7.29-2.29h4.27v23.7h6.22v4.11h-19Z" />
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
      <g>
        <rect
          x="2217.99"
          y="1066.72"
          width="107.03"
          height="103.89"
          rx="5.37"
          fill="#c7d0d8"
          stroke="#3c5447"
          stroke-miterlimit="10"
          stroke-width="11px"
          onClick={() => changeLocation("misty-garden")}
        />

        <path d="M2242.57,1099.52h8v33.58h18.64v5.9h-26.61Z" />
        <path d="M2273,1134.3l3.76-4.44a15.39,15.39,0,0,0,10.35,4.2c4.78,0,8.06-2.17,8.06-5.8,0-4-2.89-6.52-12.82-6.52v-5.09c8.54,0,11.34-2.61,11.34-6.13,0-3.22-2.43-5.15-6.45-5.15-3.38,0-6.1,1.42-8.73,3.62l-4.09-4.3a20.8,20.8,0,0,1,13.15-4.85c8.35,0,14.08,3.67,14.08,10.16,0,4.28-2.88,7.16-7.61,8.82v.24c5.16,1.19,9.09,4.45,9.09,9.57,0,7-6.95,11.09-15.35,11.09C2280.72,1139.74,2276,1137.34,2273,1134.3Z" />
      </g>
      <g>
        <rect
          x="2217.99"
          y="953.86"
          width="107.03"
          height="103.89"
          rx="5.37"
          fill="#c7d0d8"
          stroke="#3c5447"
          stroke-miterlimit="10"
          stroke-width="11px"
          onClick={() => changeLocation("corridor")}
        />
        <path d="M2232.2,986.47h6.93v33h16.25v5.79H2232.2Z" />
        <path d="M2261.65,1019.66h8.51V994.91h-7v-4.3a24.55,24.55,0,0,0,8.78-3.1H2277v32.15h7.49v5.57h-22.87Z" />
        <path d="M2308.48,993.29h-18v-5.78H2316v4.19c-8.91,11-10.44,18.81-11.11,33.53h-7C2298.58,1011.85,2301.14,1003.41,2308.48,993.29Z" />
      </g>
      <g>
        <rect
          x="2217.99"
          y="1179.88"
          width="107.03"
          height="103.89"
          rx="5.37"
          fill="#c7d0d8"
          stroke="#3c5447"
          stroke-miterlimit="10"
          stroke-width="11px"
        />
        <path d="M2242.57,1212.68h8v33.59h18.64v5.89h-26.61Z" />
        <path d="M2276.4,1246.5h9.77v-25.22h-8.06v-4.37a30.46,30.46,0,0,0,10.08-3.17h5.9v32.76h8.59v5.67H2276.4Z" />
      </g>

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
          points="47.79 1202.54 217.73 1287.51 154 1202.54 217.73 1117.57 47.79 1202.54"
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
      <rect
        x="5474.85"
        y="2651.76"
        width="264.43"
        height="256.69"
        rx="13.28"
        fill="#c7d0d8"
        stroke="#3c5447"
        stroke-miterlimit="10"
        stroke-width="27px"
      />
      <path d="M5535.59,2732.79h19.68v83h46v14.56h-65.73Z" />
      <path d="M5610.68,2818.73l9.3-11c6.55,5.72,14.76,10.38,25.58,10.38,11.79,0,19.91-5.37,19.91-14.32,0-9.79-7.15-16.12-31.67-16.12v-12.57c21.1,0,28-6.45,28-15.15,0-7.95-6-12.72-15.94-12.72-8.34,0-15.06,3.52-21.57,8.95l-10.11-10.62c9.16-7.16,19.54-12,32.5-12,20.62,0,34.79,9.06,34.79,25.09,0,10.59-7.12,17.71-18.81,21.81v.6c12.75,2.92,22.45,11,22.45,23.63,0,17.3-17.16,27.39-37.91,27.39C5629.85,2832.16,5618.29,2826.25,5610.68,2818.73Z" />
      <rect
        x="5474.85"
        y="2372.93"
        width="264.43"
        height="256.69"
        rx="13.28"
        fill="#c7d0d8"
        stroke="#3c5447"
        stroke-miterlimit="10"
        stroke-width="27px"
        onClick={() => changeLocation("corridor")}
      />
      <path d="M5510,2453.48h17.13V2535h40.15v14.3H5510Z" />
      <path d="M5582.73,2535.5h21v-61.16h-17.38v-10.61c9.33-1.69,15.76-4.1,21.67-7.67h12.69v79.44h18.49v13.76h-56.49Z" />
      <path d="M5698.41,2470.36H5654v-14.3h63v10.36c-22,27.09-25.8,46.47-27.46,82.83h-17.21C5674,2516.21,5680.29,2495.34,5698.41,2470.36Z" />
      <rect
        x="5474.85"
        y="2931.35"
        width="264.43"
        height="256.69"
        rx="13.28"
        fill="#c7d0d8"
        stroke="#3c5447"
        stroke-miterlimit="10"
        stroke-width="27px"
        onClick={() => changeLocation("lobby")}
      />
      <path d="M5535.59,3012.38h19.68v83h46v14.56h-65.73Z" />
      <path d="M5619.17,3095.93h24.14v-62.31H5623.4v-10.79c10.71-1.73,18.11-4.19,24.89-7.83h14.58v80.93h21.24v14h-64.94Z" />
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
      viewBox="0 0 1920 1080"
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip>Back to Learn Lobe B1</Tooltip>}
      >
        <polygon
          points="1484.34 1041.92 1383.25 839.74 1484.34 915.56 1585.43 839.74 1484.34 1041.92"
          style={{ fill: "rgb(255, 255, 255, 0.6)" }}
          onClick={() => changeLocation("learnlobe-walkway-B1-2")}
        />
      </OverlayTrigger>
    </svg>
  );

  const startImage = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2450 1614"
    >
      <rect
        width="2450"
        height="1614"
        style={{ fill: "rgb(255, 255, 255, 0)" }}
        onClick={() => changeLocation("entrance")}
      />
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
          case "start-image":
            return startImage;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Svg;
