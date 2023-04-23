import { useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

const clientID = "405532619153-fdd53vgtreamje4resjdt4cgcehnj41j.apps.googleusercontent.com";


// 104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com

function Login(){



    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            console.log(codeResponse);
            /* const tokens = await axios.post(
                'http://localhost:3001/auth/google', {
                    code: codeResponse.code,
                });

            console.log(tokens); */
        },
        onError: errorResponse => console.log(errorResponse),
    });


    const onSuccess = (res) => {
        console.log(res);
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return(
        
        <div id='signInButton'>
            <button onClick={googleLogin} className='btn btn-primary'/>
            {/* <GoogleLogin
            buttonText='Login'
            scope = {"https://www.googleapis.com/auth/drive', https://www.googleapis.com/auth/classroom.courses"}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            flow= 'auth-code'
            /> */}
        </div>
        
    )
}



export default Login;