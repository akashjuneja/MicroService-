import React ,{useState} from 'react';
import axios from 'axios'
import './Header.css'

const Header = () => {
    const [title, settitle] = useState("");

    const createPost =async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/post", { title });
          settitle('')
    }

    return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4"><i className="material-icons icons">fastfood</i> Post's Blog App</h1>
                        <div className="input-group w-70 mx-auto">
                            <input type="text" value={title}className="form-control" placeholder="Create a Post" onChange={(e)=>{
                            settitle(e.target.value)
                            }} />
                            <div className="input-group-append">
                                <button className="bg-dark text-white" onClick={createPost} >Create Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Header;
