
import BlueTacticalLogo from "../assets/Blue-Tactical-Logo.png";
import {SignOutUser} from "./SignOutUser.jsx";
function LogoAndHeader() {
    return (
        <main>
            <div className="bg-background flex justify-center items-center px-4">
                <div className="flex-1 flex items-start w-1/6">
                    <img src={BlueTacticalLogo} alt="Blue Tactical Company Logo"/>
                </div>
                <h1 className="text-5xl text-center w-5/6">Shopify Order Data Excel Sync Tool</h1>
                <SignOutUser/>
            </div>
        </main>

    );
}

export default LogoAndHeader
