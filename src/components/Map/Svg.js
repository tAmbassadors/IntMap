import "./Map.css";

function Svg(props) {
  const { map, changeLocation } = props;
  const lobby = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1643.28 841.92"
    >
      <a href="javascript:void(0);" onClick={() => changeLocation("mph")}>
        <rect
          x="112.29"
          y="141.52"
          width="391.66"
          height="386.02"
          style={{ fill: "rgb(235, 235, 235, 0)" }}
        />
      </a>
      <a
        href="javascript:void(0);"
        onClick={() => changeLocation("common-lounge")}
      >
        <rect
          x="723.86"
          y="137.52"
          width="118.41"
          height="166.55"
          style={{ fill: "rgb(235, 235, 235, 0)" }}
        />
      </a>
      <a href="javascript:void(0);" onClick={() => changeLocation("lobby")}>
        <rect
          x="630.17"
          y="308.07"
          width="212.1"
          height="167.86"
          style={{ fill: "rgb(235, 235, 235, 0)" }}
        />
      </a>
      <a
        href="javascript:void(0);"
        onClick={() => changeLocation("drop-off-point")}
      >
        <rect
          x="112.29"
          y="534.82"
          width="391.66"
          height="223.37"
          style={{ fill: "rgb(235, 235, 235, 0)" }}
        />
      </a>
      <a
        href="javascript:void(0);"
        onClick={() => changeLocation("dining-hall")}
      >
        <rect
          x="846.6"
          y="252.72"
          width="419.86"
          height="221.2"
          style={{ fill: "rgb(235, 235, 235, 0)" }}
        />
      </a>
    </svg>
  );
  const lvl3 = (
    <>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2068.08 1484.4"
      >
        <polygon
          points="95.55 177.66 1252.75 177.66 1252.75 892.46 782.64 892.46 784.36 535.06 95.55 535.06 95.55 177.66"
          style={{ fill: "rgb(235, 235, 235, 0)" }}
          onClick={() => changeLocation("misty-garden")}
        />
        <polygon
          points="1934.58 177.66 1934.58 1098.05 1559.84 1098.05 1559.84 888.71 1271.84 886.98 1271.84 177.66 1934.58 177.66"
          style={{ fill: "rgb(235, 235, 235, 0)" }}
          onClick={() => changeLocation("mcl")}
        />
      </svg>
    </>
  );

  const lvl17 = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2067.84 1484.4"
    >
      <rect
        x="225.9"
        y="1150.1"
        width="102.36"
        height="176.96"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("room-1")}
      />
      <rect
        x="1353.61"
        y="900.27"
        width="208.19"
        height="171.76"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("laundry")}
      />
      <rect
        x="781.52"
        y="466.53"
        width="252.4"
        height="213.83"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("level-lounge-1")}
      />
      <rect
        x="225.9"
        y="414.22"
        width="102.36"
        height="173.49"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("pantry")}
      />
      <polygon
        points="388.25 899.26 545.7 899.26 545.7 1077.53 610.76 1077.53 610.76 1149.1 116.3 1149.1 116.3 1080.13 388.25 1078.83 388.25 899.26"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("suite")}
      />
    </svg>
  );

  const learnlobe = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1146.96 657.36"
    >
      <rect
        x="83"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("abbey")}
      />
      <rect
        x="285.81"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("blank-canvas")}
      />
      <rect
        x="425.04"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("launchpad")}
      />
      <rect
        x="803.04"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("oasis")}
      />
      <rect
        x="942.94"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("box-office")}
      />
      <rect
        x="942.94"
        y="372.88"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("sem-room")}
      />
      <rect
        x="148.84"
        y="374.23"
        width="273.93"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 0)" }}
        onClick={() => changeLocation("reading-room")}
      />
    </svg>
  );
  return (
    <div>
      {(() => {
        switch (map) {
          case "Lobby":
            return lobby;
          case "Lvl3":
            return lvl3;
          case "Lvl17":
            return lvl17;
          case "Learnlobe":
            return learnlobe;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Svg;
