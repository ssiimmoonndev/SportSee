// src/components/ActivityTooltip.jsx

function ActivityTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#E60000",
          color: "#FFFFFF",
          padding: "10px",
          fontSize: "12px",
        }}
      >
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </div>
    );
  }

  return null;
}

export default ActivityTooltip;