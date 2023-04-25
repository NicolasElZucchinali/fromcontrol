import Authorize from './components/Authorize';
import {GoogleOAuthProvider} from '@react-oauth/google';

const clientID = "104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com";


const AskPermissions = () => {

    return (
        <div class="row">
            <div class='col-4 offset-4'>
                <h2>We ask your permissions to access Google Drive, Classroom for you. This make possible our app to work</h2>
            </div>
            <div class='col-4 offset-4'>
                <GoogleOAuthProvider clientId={clientID}>
                    <Authorize/>
                </GoogleOAuthProvider>
            </div>
        </div>
    )
};
export default AskPermissions;