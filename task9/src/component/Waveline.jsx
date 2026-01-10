const WavyLine = ({width, mr}) => {
  return (
    <div style={{marginLeft:`${mr}vw`}} className="w-full flex justify-center items-center">
      <svg
        width={width}
        height="120"
        viewBox="0 0 620 120"
        className="overflow-visible"
      >
        <path
          d="
            M 10 100
            C 100 40, 120 40, 170 70
            S 260 110, 310 70
            S 380 40, 410 60
          "
          fill="none"
          stroke="#f28c28"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default WavyLine;
