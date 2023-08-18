import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom'; 


function Login(props) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /*
    const handLogin = () => {
        console.log('handLogin.');
        console.log(username);
        console.log(password)
    }
    */

    const handLogin = async () => {
        try {
            await Auth.signIn(username, password)
            console.log('Successfuly logged in.');

            props.updateAuthStatus(true);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Container>
            <Row>
                <Col><h1>Login</h1></Col>
            </Row>

            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder='Enter username'
                                onChange={evt => setUsername(evt.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"
                                onChange={evt => setPassword(evt.target.value)}/>
                        </Form.Group>

                        <Button type="button" onClick={handLogin}>Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;