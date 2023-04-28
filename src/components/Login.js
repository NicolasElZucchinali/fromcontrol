import { GoogleLogin} from '@react-oauth/google';

import Cookies from 'js-cookie';



function Login(){

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    const handleLoginNetCore = (res) => {

        var dataGoogle = new FormData();
        dataGoogle.append("code", JSON.stringify(res));

        var googleUserCredential = res;
        console.log(googleUserCredential);

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
                    "EduversoRole": 0,
                    "FirstAccess": true,
                    "Url": "Description"
                } */
                
                var parsed = JSON.parse(res["userlogin"]);

                Cookies.set('uid',  parsed["UserId"],  {secure: true, sameSite: 'None'} );
                Cookies.set('auth', parsed["EduversoToken"],  {secure: true, sameSite: 'None'});
                

                //DO REDIRECTION HERE
                  
            }) 

            
            //THIS REDIRECTION NOT WORKING
            /* .then(
                window.location.href = '/askpermission'
            ); */
    }
    function redirectAuth(){
        window.location.href = '/askpermission'
    };

    return(
        
        <div id='signInButton'>
            <GoogleLogin
            buttonText='Login'
            onSuccess={handleLoginNetCore}
            prompt='consent'
            access_type='offline'
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            flow= 'auth-code'
            />
            <button className="btn btn-primary my-4" id="procediBtn" onClick={redirectAuth}>Procedi</button>
           
        </div>
        
    )
}


export default Login;