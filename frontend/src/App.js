import ReactDOM from "react-dom/client";

import AuthUser from "./components/AuthUser";
import AuthNavbar from "./components/navbar/AuthNavbar";
import GuestNavbar from "./components/navbar/guestNavbar";
function App() {
  const {getToken}= AuthUser();
  if(!getToken()){
    return <GuestNavbar/>
  }
  return (
       <AuthNavbar/>
  );
}

export default App;
