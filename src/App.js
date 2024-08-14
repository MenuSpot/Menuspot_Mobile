import React, { useContext, useEffect, useLayoutEffect } from "react"
import { MSContainer, MSModal } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { changeScreenSize } from "./store/slices/innerWidthSlice";
import { AuthContext } from "./context/AuthContext";
import AuthScreens from "./navigation/AuthScreens";
import { useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch()
  const context = useContext(AuthContext)
  const { isVisible: isErrorMessageVisible } = useSelector((state) => state.errorMessageSlice)

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);


  useEffect(() => {
    const handleResize = () => {
      dispatch(changeScreenSize(window.innerWidth))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [dispatch])

  useEffect(() => {
    const fetchToken = () => {
      const token = localStorage.getItem("token")
      if (token) context.onSignIn(token)
    }
    fetchToken()
  }, [context])


  return (
    <MSContainer style={styles.appContainer}>
      {
        isErrorMessageVisible && <MSModal />
      }
      <AuthScreens />
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

//loading ekranlarının render işlemini düzenle, skeleton loading ekranını düzenle, sayfa refresh etkisini düzelt.
//spinningloading ekle