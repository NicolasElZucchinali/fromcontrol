import {useState} from "react";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const registration = {email, password, confirmPassword};

        setIsPending(true)

        fetch('http://95.253.134.188/Account/Register',{

            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(registration),
            mode: "no-cors"

        }).then(()=>{
            console.log("Registration sended");
            setIsPending(false)
        }).catch((err) => {
            console.log(err.message)});


    }

    const responseFromLollo = () => {
        
        fetch('http://95.253.134.188/Account/Register')
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }


    return(

        <div className="position-absolute top-50 start-50 translate-middle w-25">
        <div className="create">
            <h2>Add new Post</h2>
            
            <form onSubmit={handleSubmit}>
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                  <label className="form-label">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                { !isPending && <button className="btn btn-primary">Add Blog</button>}
                { isPending && <button disabled className="btn btn-primary">Adding Blog...</button>}

                <button className="btn btn-success" onClick={responseFromLollo}>GET</button>

             {/*    <br></br>
                <p>{title}</p>
                <br></br>
                <p>{body}</p>
                <br></br>
                <p>{author}</p> */}
            </form>
        </div>
        </div>
    )
}

export default Register