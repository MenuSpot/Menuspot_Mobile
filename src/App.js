import React, { useContext, useEffect } from "react"
import { MSContainer, MSModal } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { changeScreenSize } from "./store/slices/innerWidthSlice";
import { AuthContext } from "./context/AuthContext";
import AuthScreens from "./navigation/AuthScreens";

const App = () => {
  const dispatch = useDispatch()
  const context = useContext(AuthContext)
  const { isVisible: isErrorMessageVisible } = useSelector((state) => state.errorMessageSlice)

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

//TODOS
//card'ların description'ının maksimum 8 satır yazılabilmesini sağla.
//navigation sayfasına spinning loading.
// Readme dosyasının güncellenmesi.