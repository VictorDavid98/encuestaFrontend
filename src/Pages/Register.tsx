import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Spinner from 'react-bootstrap/Spinner';
import { useState } from "react"
import { registerUser } from "../Services/UserService"

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({})
    const [sendingData, setSendingData] = useState(false);

    const register = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try{
            setSendingData(true);
            await registerUser(name, email, password);
            setSendingData(false);
        }catch(errors: any){
            setErrors(errors.response.data.errors);
            setSendingData(false);
        }
     
    }

    return (
        <Container>
            <Row>
                <Col lg="5" md="10" sm="10" className="mx-auto">
                    <Card className="mt-5">
                        <Card.Body>
                            <h4>Crear Cuenta</h4><hr />
                            <Form onSubmit={register}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                isInvalid={!!errors?.name}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type="text" placeholder="e.g. Benito Camelo"></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control 
                                isInvalid={!!errors?.email}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email" placeholder="e.g. benitocamelo@gmail.com"></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="passowrd">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                isInvalid={!!errors?.password}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password" placeholder="**********"></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button onClick={register}>
                                {sendingData ? <>
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />&nbsp;
                                <span>Creando Cuenta...</span>
                                </>:
                                <>Crear Cuenta</>}
                            </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Register;