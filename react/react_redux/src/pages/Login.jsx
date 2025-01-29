import { useRef } from 'react'
import { Col, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const user = {
    email: 'something@protonmail.com',
    pass: '123456'
}

const Login = () => {
    const email = useRef();
    const pass = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.current.value === user.email && pass.current.value === user.pass) {
            localStorage.setItem('login', 'true');
            navigate('/dashboard');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or password is incorrect!'
            });
        }
    }

    return (
        <Container>
            <p className='h1 text-center '>Login</p>
            <div className="d-flex align-items-center justify-content-center">
                <Col sm={12} md={5}>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input ref={email} type="email" className="form-control" required/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input ref={pass} type="password" className="form-control" required/>
                        </div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>

                </Col>
            </div>
        </Container >
    )
}

export default Login