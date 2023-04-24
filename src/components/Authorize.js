import { useGoogleLogin} from '@react-oauth/google';

const clientID = "104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com";


// 104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com  , https://www.googleapis.com/auth/classroom.courses

function Authorize(){



    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/classroom.courses",
        onSuccess: async (codeResponse) => {
            handleAuthNetCore(codeResponse.code);
        },
        onError: errorResponse => console.log(errorResponse),
    });


    /* const onSuccess = (res) => {
        console.log(res);
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
        handleLoginNetCore(res);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }
 */
    const handleAuthNetCore = (code) => {
        console.log(code);

        var dataGoogle = new FormData();
        dataGoogle.append("GoogleAccessToken", code);


        fetch('https://localhost:5173/Account/GoogleTokenTrafficLight',{
            method: 'POST',
            body: dataGoogle,
        }).then(r=>r.json()).then(res=>{
            if(res){
                this.setState({message:'New student access token'});
            }
        });
    }

    return(
        
        <div id='signInButton'>
            <button onClick={googleLogin} className='btn btn-primary'> Google Login </button> 
        </div>
        
    )
}


export default Authorize;