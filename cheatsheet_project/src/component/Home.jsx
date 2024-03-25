const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome to the CheatSheet of Group Number 7!</h1>
      <img src="/Dealing-w-Cheating.png" alt="" />
      <h2
        style={{
          fontSize: "3rem",
          backgroundColor: "rgb(54, 162, 162)",
          marginBottom: "2rem",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        Well, sometimes it's worth it! 😈
      </h2>
    </div>
  );
};

export default Home;
