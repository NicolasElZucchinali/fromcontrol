import { GoogleLogin} from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

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
        }).then(
            r => r.json()
            ).then(
                res => {
                
                    
                //JSON Example
                /* {
                    "UserId": "76f6b946-c0a7-46c0-861c-a365a37b851e",
                    "UserEmail": "io.lorenzo.gaspari@gmail.com",
                    "UserName": "Gaspari Lorenzo",
                    "EduversoToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJ1c2VyaWQiLCJ1bmlxdWVfbmFtZSI6Ikdhc3BhcmkgTG9yZW56byIsIm5iZiI6MTY4MjM1Njc0OSwiZXhwIjoxNjgyMzU2OTg5LCJpYXQiOjE2ODIzNTY3NDl9.047hZxphPj_gzTB7J4UWXNWg0Bhc1soMAP-EKdesMAo",
                    "GoogleAccessToken": "NNN",
                    "EduversoRole": 0,
                    "FirstAccess": true,
                    "Url": "Description"
                } */
                
                var parsed = JSON.parse(res["userlogin"]);
                console.log(parsed["EduversoToken"]);


                localStorage.clear();
                localStorage.setItem('user-token', res);

                /* const navigate = useNavigate();
                navigate('/other-page', { state: { id: 7, color: 'green' } }); */
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