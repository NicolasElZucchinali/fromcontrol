import {useState} from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true)

        fetch('http://localhost:3000/blogs',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false)
        })


    }


    return(
        <div className="position-absolute top-50 start-50 translate-middle w-25">
        <div className="create">
            <h2>Add new Post</h2>
            
            <form onSubmit={handleSubmit}>
                <label className="form-label">Blog title:</label>
                <input
                    type="text"
                    className="form-control"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br></br>
                <label className="form-label">Blog body:</label>
                <textarea
                    className="form-control"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <br></br>
                <label className="form-label">Blog author:</label>
                <select
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >   
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <br></br>
                { !isPending && <button className="btn btn-primary">Add Blog</button>}
                { isPending && <button disabled className="btn btn-primary">Adding Blog...</button>}

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

export default Create