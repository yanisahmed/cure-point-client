import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const SignUp = ({ error }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signUpUsingEmail, signUpSuccess } = useAuth();

    const onSubmit = data => {
        const { name, email, password } = data;


        signUpUsingEmail(name, email, password);


    }
    return (
        <section className="my-4">
            <Container>
                <Row>
                    <Col>
                        <h3 className="mb-4">Create account</h3>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="register-form">
                            <span className="text-danger fw-bold">{error && error}</span>
                            <span className="text-success fw-bold">{signUpSuccess ? signUpSuccess : ''}</span>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="Enter Your Name" />
                                    {errors.name?.type === 'required' && "Name is required"}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email" />
                                    {errors.email?.type === 'required' && "Email is required"}
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control {...register("password", { required: true, minLength: 6 })} type="password" placeholder="Enter Your Password" />
                                    {errors.password?.type === 'required' && "Password is required"}
                                    {errors.password?.type === 'minLength' && <span className="text-danger">Must be 6 or more character</span>}
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
                                    <Button className="bg-warning border-0 px-4 py-2">Google</Button>

                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SignUp;