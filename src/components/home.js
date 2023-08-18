import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Auth } from 'aws-amplify';

function Home(props) {
    const navigate = useNavigate();

    const handLogout = async () => {
        try {
            console.log('Logout successful.');
            await Auth.signOut();

            props.updateAuthStatus(false);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        {
            props.isAuthenticated !== true && (
                navigate('/login')
            )
        }
    }, []);
    
    return(
        <div>
            <h1>
            Welcome to the site!
            </h1>

            <Button type="button" onClick={handLogout}>
                LogOut
            </Button>
        </div>
        
    )
}

export default Home;