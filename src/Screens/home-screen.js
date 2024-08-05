import { useContext, useState, useEffect } from "react";
import NavbarEx1 from "../NavBar/navbarEx1";
import { DataContext } from "../App";

const HomeScreen = () => {
  const { username, darkG } = useContext(DataContext);
  const [hello1, hello2] = useState("");

  useEffect(() => {
    if (darkG) {
      hello2(darkG);
    }
  }, [darkG]);

  return (
    <>
      <NavbarEx1 />
      <h3 style={{ color: hello1 }}>Welcome to HomeScreen {username}</h3>
    </>
  );
};

export default HomeScreen;
