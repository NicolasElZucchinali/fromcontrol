import LoginButton from './components/Login';
import { GoogleOAuthProvider} from '@react-oauth/google';

const clientID = "104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com";


const HomePage = () => {

    return (
        <div class="row">
            <div class='col-4 offset-4'>
                <h2>Welcome to HomePage</h2>
            </div>
            <div class='col-4 offset-4'>
                <GoogleOAuthProvider clientId={clientID} >
                    <LoginButton/>
                </GoogleOAuthProvider>
            </div>
        </div>
    )
};
export default HomePage;