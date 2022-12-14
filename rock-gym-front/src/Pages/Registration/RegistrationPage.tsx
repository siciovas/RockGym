import React, { useEffect } from "react";
import { Col, Button, Row, Container, Card, Form, FormControlProps } from "react-bootstrap";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const RegistrationPage = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onEmailChange = (e: any): void => {
    setEmail(e.target.value as string);
  };
  const onPasswordChange = (e: any): void => {
    setPassword(e.target.value as string);
  };
  const toast = useToast();
  const navigate = useNavigate();

  const Register = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = await fetch("https://rockgym20221015172815.azurewebsites.net/api/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (data.status === 201) {
      toast({
        title: "Registracija sėkminga",
        status: "success",
        duration: 5000,
        position:"top-right",
        isClosable: true,
      })
      navigate("/login");
    } else {
      toast({
        title: "Klaida",
        status: "error",
        duration: 5000,
        position:"top-right",
        isClosable: true,
      })
    }
    const token = await data.json();
    console.log(token);
  };

  return (
    <div style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/Photos/allpagesbackground.png')` }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-dark"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Rock Gym</h2>
                  <p className=" mb-5">Tapk mūsų šeimos nariu!</p>
                  <div className="mb-3">
                    <Form onSubmit={(e) => Register(e)}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          El. paštas
                        </Form.Label>
                        <Form.Control
                          type="email"
                          required
                          placeholder="Įveskite el. paštą"
                          onChange={(e) => {
                            onEmailChange(e);
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Slaptažodis</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          placeholder="Įveskite slaptažodį"
                          onChange={(e) => {
                            onPasswordChange(e);
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="dark" type="submit" >
                          Registruotis
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
};
export { RegistrationPage };
