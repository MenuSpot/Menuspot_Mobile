import React, { useEffect } from "react"
import { MSContainer, MSModal } from "./components";
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/navbarOverlay/Navbar';
import { useDispatch, useSelector } from "react-redux";
import HamburgerMenu from "./components/navbar/hamburgerMenu/HamburgerMenu";
import { changeScreenSize } from "./store/slices/innerWidthSlice";
import Authenticated from "./navigation/Authenticated";
import Unauthenticated from "./navigation/Unauthenticated";

const App = () => {
  const dispatch = useDispatch()
  const { isVisible: isErrorMessageVisible } = useSelector((state) => state.errorMessageSlice)

  useEffect(() => {
    const handleResize = () => {
      dispatch(changeScreenSize(window.innerWidth))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [dispatch])

  return (
    <MSContainer style={styles.appContainer}>
      {
        isErrorMessageVisible && <MSModal />
      }
      {
        localStorage.getItem("token") ?
          <>
            <Navbar />
            <HamburgerMenu />
            <Authenticated />
            <Footer />
          </> :
          <Unauthenticated />
      }
    </MSContainer >
  );
}
export default App;

const styles = {
  appContainer: {
    height: "100%",
    width: "100%",
  }
}

//TODOS
// Readme dosyasının güncellenmesi.