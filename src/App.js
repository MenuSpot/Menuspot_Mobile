import React, { useContext, useEffect } from "react"
import { MSContainer, MSModal } from "./components";
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar';
import { useDispatch, useSelector } from "react-redux";
import HamburgerMenu from "./components/navbar/hamburgerMenu/HamburgerMenu";
import { changeScreenSize } from "./store/slices/innerWidthSlice";
import { AuthContext } from "./context/AuthContext";
import Authenticated from "./navigation/Authenticated";
import Unauthenticated from "./navigation/Unauthenticated";

const App = () => {
  const dispatch = useDispatch()
  const Context = useContext(AuthContext)
  const { isHamburgerOpen: hamburgerMenu } = useSelector((state) => state.innerWidthSlice)
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
        localStorage.getItem("token") || Context.isLogin ?
          <>
            <Navbar />
            <HamburgerMenu style={{ display: hamburgerMenu ? "flex" : "none" }} />
            <Authenticated />
            <Footer />
          </> :
          <>
            <Unauthenticated />
          </>
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


// skeleton loading yapılmalı.


//refactoring yap!
//ekran boyutunu dinamik hesaplamayı düzenle, daha iyi çalıştır.
// menü ekranında iken navbarda restaurants aktif olmamalı.
// About Us Mobile görünümde fonksiyonabiliteyi düzenle.
// Readme dosyasının güncellenmesi 