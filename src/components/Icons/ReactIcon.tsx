const ReactIcon = ({ size = 70 }) => (
  <svg viewBox="0 0 100 100" height={size} width={size}>
    <title>React</title>
    <circle cx="50" cy="50" r="6.23" style={{ fill: "#61dafb" }} />

    <g
      style={{
        fill: "none",
        stroke: "#61dafb",
        strokeWidth: 2,
      }}
    >
      <ellipse cx="50" cy="50" rx="33.44" ry="12.77" />
      <ellipse
        cx="50"
        cy="50"
        rx="12.77"
        ry="33.44"
        transform="translate(-18.3 31.7) rotate(-30)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="33.44"
        ry="12.77"
        transform="translate(-18.3 68.3) rotate(-60)"
      />
    </g>
  </svg>
);

export default ReactIcon;
