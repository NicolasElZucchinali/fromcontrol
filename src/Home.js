import LoginButton from './components/Login';
import { GoogleOAuthProvider} from '@react-oauth/google';

const clientID = "104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com";


const HomePage = () => {

    return (
        <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                <h1>Welcome to HomePage</h1>                
                    <GoogleOAuthProvider clientId={clientID} >
                        <LoginButton/>
                    </GoogleOAuthProvider> 
                </div>
        </div>
    )
};
export default HomePage;