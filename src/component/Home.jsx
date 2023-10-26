import React, { useEffect, useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from local storage or use "light-theme" as default
    return localStorage.getItem("theme") || "light-theme";
  });

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      localStorage.setItem("theme", "light-theme");
    } else {
      setTheme("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="Home">
      <div className="my-Name">
        <h1>Aniket Balu Doke</h1>
      </div>
      <div className="skills">
        <h3>WebDevoloper | UI-UX Designer | Full-stackDevoloper</h3>
      </div>
      <div className="des">
        <p>
          "Experienced web developer adept in creating user-friendly, responsive
          digital experiences. Proficient in front-end and back-end
          technologies. Let's bring your vision to life!"
        </p>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/aniket-d-86401b211/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/aniketdoke35">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/mr_aniketdoke/?igshid=YmMyMTA2M2Y%3D">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com/AniketD97748533">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
      <label className="dark">
        <input onClick={() => toggleTheme()} type="checkbox"></input>
        <i class="sun fa-solid fa-sun"></i>
        <i class="moon fa-solid fa-moon"></i>
        <span className="toggle"></span>
      </label>

      <div className="mouse">
        <i class="fa-solid fa-computer-mouse fa-bounce"></i>
      </div>
      <div className="DarkMode">
        {/* <a href="#" className="btn" onClick={()=> toggleTheme()}>jfu</a> */}
      </div>
    </div>
  );
};

export default Home;
