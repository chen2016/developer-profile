function Avatar() {
  return (
    <div>
      <img
        // style={{ width: "100%", height: "100%" }}
        className="avatar"
        src="monkey.jpg"
        alt="Chen Lin"
      ></img>
      <div
        style={{
          fontWeight: "bolder",
          padding: ".5em 1.2em 0em",
          fontSize: "1.6em",
        }}
      >
        Chen Lin
      </div>
    </div>
  );
}

export default Avatar;
