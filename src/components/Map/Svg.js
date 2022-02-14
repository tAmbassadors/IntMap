import "./Map.css";

function Svg(props) {
  const { map } = props;
  const lobby = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1643.28 841.92"
    >
      <a href="www.google.com" target="_blank">
        <rect
          x="112.29"
          y="141.52"
          width="391.66"
          height="386.02"
          style={{ fill: "rgb(235, 235, 235, 11)" }}
        />
      </a>
      <rect
        x="723.86"
        y="137.52"
        width="118.41"
        height="166.55"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="630.17"
        y="308.07"
        width="212.1"
        height="167.86"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="112.29"
        y="534.82"
        width="391.66"
        height="223.37"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="846.6"
        y="252.72"
        width="419.86"
        height="221.2"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
    </svg>
  );
  const lvl3 = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 824.4 580.8"
    >
      <polygon
        points="88.65 78.29 505.9 78.29 505.9 336.8 336.75 336.8 336.75 207.54 88.65 207.54 88.65 78.29"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <polygon
        points="507.37 78.29 746.14 78.29 746.14 407.49 610.17 407.49 610.17 335.93 507.37 335.93 507.37 78.29"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
    </svg>
  );

  const lvl17 = (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 842.16 541.44"
    >
      <rect
        x="157.67"
        y="160.35"
        width="34.7"
        height="60.29"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="341.58"
        y="179.43"
        width="83.71"
        height="70.7"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <polygon
        points="212.76 322.57 264.37 322.57 264.37 383.72 285.19 383.72 285.19 403.24 121.67 403.24 121.67 382.42 213.63 382.42 212.76 322.57"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="531.99"
        y="322.57"
        width="69.4"
        height="57.69"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
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
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="285.81"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="425.04"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="803.04"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="942.94"
        y="164.54"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="942.94"
        y="372.88"
        width="136"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
      />
      <rect
        x="148.84"
        y="374.23"
        width="273.93"
        height="170"
        style={{ fill: "rgb(235, 235, 235, 11)" }}
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
