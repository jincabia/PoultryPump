import { AuthContextProvider } from "./_utils/auth-context";
import Footer from "./components/footer/myfooter";
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children} <Footer/></AuthContextProvider>;
};
 
export default Layout;