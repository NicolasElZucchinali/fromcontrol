import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

const clientID = "405532619153-fdd53vgtreamje4resjdt4cgcehnj41j.apps.googleusercontent.com";


// 104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com

function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return(
        <GoogleOAuthProvider clientId={clientID}>
            <div id='signInButton'>
                <GoogleLogin
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
            </div>
        </GoogleOAuthProvider>
    )
}

export default Login;