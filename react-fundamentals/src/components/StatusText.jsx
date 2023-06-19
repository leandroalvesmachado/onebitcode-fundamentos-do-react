export default () => {
  const status = true

  return (
    <h2
      style={{
        color: status ? "#00FF9F" : "#F64348"
      }}
    >
      Current status: {status ? "ON" : "OFF"}
    </h2>
  )
}