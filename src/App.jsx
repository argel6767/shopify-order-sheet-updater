import {Dashboard} from "./component/Dashboard.jsx";
import LogoAndHeader from "./component/LogoAndHeader.jsx";
import {SignedIn, SignedOut} from "@clerk/clerk-react";
import {SignInPage} from "./component/SignInPage.jsx";

function App() {

  return (
      <header>
          <SignedOut>
              <SignInPage/>
          </SignedOut>
          <SignedIn>
              <LogoAndHeader></LogoAndHeader>
              <Dashboard/>
          </SignedIn>
      </header>
  )
}

export default App
