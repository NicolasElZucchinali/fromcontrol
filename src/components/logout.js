import { googleLogout, GoogleOAuthProvider} from '@react-oauth/google';

const clientID = "405532619153-fdd53vgtreamje4resjdt4cgcehnj41j.apps.googleusercontent.com";

function Logout(){
    
    const onSuccess = () => {
        console.log("Log out successfull!");
    }
    
    return(
        <div id='signOutButton'>
            <googleLogout
                clientId={clientID}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;