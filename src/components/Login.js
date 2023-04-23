import { GoogleLogin} from '@react-oauth/google';

const clientID = "104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com";


// 104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com  , https://www.googleapis.com/auth/classroom.courses

function Login(){

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    const handleLoginNetCore = (res) => {
        
        console.log(res);

        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);

        var dataGoogle = new FormData();
        dataGoogle.append("code", JSON.stringify(res));

        fetch('https://localhost:5173/Account/GoogleUserLogin',{
            method: 'POST',
            body: dataGoogle,
        }).then(r=>r.json()).then(res=>{
            console.log(res);
            /* if(res){
                this.setState({message:'Accepted'});
            } */
        });
    }

    return(
        
        <div id='signInButton'>
            <GoogleLogin
            buttonText='Login'
            onSuccess={handleLoginNetCore}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            flow= 'auth-code'
            />
        </div>
        
    )
}


export default Login;