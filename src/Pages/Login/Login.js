import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signInUsingEmail, loginError } = useAuth();

    const onSubmit = data => {
        const { email, password } = data;
        signInUsingEmail(email, password);
    }
    const { singInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log(location.state?.from);
    const redirect_url = location.state?.from || '/';
    let history = useHistory();

    const handleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            });
    }


    return (
        <section className="my-4">
            <Container>
                <Row>
                    <Col>
                        <h3 className="mb-4">Login</h3>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="register-form">
                            <Form onSubmit={handleSubmit(onSubmit)}>

                                <span className="text-danger fw-bold">{loginError ? loginError : ''}</span>
                                <Form.Group className="mb-3" controlId="loginEmail">
                                    <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email" />
                                    <span className="text-danger fw-bold">{errors.email?.type === 'required' && "Email is required"}</span>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="loginPassword">
                                    <Form.Control {...register("password", { required: true })} type="password" placeholder="Enter Your Password" />
                                    <span className="text-danger fw-bold">{errors.password?.type === 'required' && "Password is required"}</span>
                                </Form.Group>
                                <Button variant="info" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={2} className="text-center">-OR-</Col>
                    <Col lg={5}>
                        <h6>Sign in with another account</h6>
                        <div>
                            <ul className="list-inline">
                                {/* <li className="list-inline-item">
                                    <Button className="bg-primary border-0 px-4 py-2">Facebook</Button>

                                </li>
                                <li className="list-inline-item">
                                    <Button className="bg-info border-0 px-4 py-2">Twitter</Button>

                                </li> */}
                                <li className="list-inline-item">
                                    <Button onClick={handleGoogleLogin} className="bg-warning border-0 px-4 py-2">Google</Button>

                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;