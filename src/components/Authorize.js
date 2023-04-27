import { useGoogleLogin} from '@react-oauth/google';
import Cookies from 'js-cookie';


function Authorize(){



    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        access_type: "offline",
        prompt:'consent',
        scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/classroom.courses",
        onSuccess: async (codeResponse) => {
            console.log(codeResponse);
            handleAuthNetCore(codeResponse.code);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    
    
    const handleAuthNetCore = (code) => {
        

        const token = Cookies.get('auth');
        var userRequest  = JSON.stringify({ "GoogleAccessToken" : code, "EduversoToken" : token })


        var dataGoogle = new FormData();
        dataGoogle.append("userRequest", userRequest);



        fetch('https://localhost:5173/Account/GoogleTokenTrafficLight',{
            method: 'POST',
            body: dataGoogle,
        }).then(r=>r.json()).then(res=>{
            if(res){
                
                //Need an handle what the fuck is state?

                console.log(res);
                //this.setState({message:'New student access token'});
            }
        });
    }

    return(
        
        <div id='permissionbutton'>
            <button onClick={googleLogin} className='btn btn-primary'> Google Login </button> 
        </div>
        
    )
}


export default Authorize;