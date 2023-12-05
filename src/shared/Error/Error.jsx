import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center h-screen items-center">
            <div className="h-80"></div>
           <h1 className='text-center text-black text-2xl mb-5'>404 || Page not found</h1> 
           <Link to='/'><button className="btn btn-primary">Back to home</button></Link>
        </div>
    );
};

export default Error;