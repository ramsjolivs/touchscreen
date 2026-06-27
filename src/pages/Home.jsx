import logoImg from "/imgs/RamsjoLivs_Logo.png";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Ramsjö Livs</h1>

      <img id="logo-main" src={logoImg} alt="Ramsjö Livs" />
    </div>
  );
}

export default Home;
