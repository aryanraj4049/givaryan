import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <>
                    <p></p>
                        <Container>
                          <Row>
                            <Col sm={9}><h1>Hello! {logindata[0].name} </h1></Col>
                            <Col sm={3}><div align="left"> <Button variant="outline-danger" onClick={userlogout}>LogOut</Button></div></Col>
                         </Row>
                       </Container>
                         <div align="centre"> <h1><Button href="https://aryanraj4049.github.io/postadder/"  variant="primary" size="lg">Click Here to post anything </Button></h1></div>
                       
                    </>
            }
        </>
    )
}

export default Details






















