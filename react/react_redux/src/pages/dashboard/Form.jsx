import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../tools/actions/productActions';

const Form = () => {
    const imgRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ img: imgRef.current.value, name: nameRef.current.value, price: priceRef.current.value, desc: descRef.current.value }));

    }

    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={5}>
                <form onSubmit={formSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Img url</label>
                        <input ref={imgRef} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input ref={nameRef} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input ref={priceRef} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">DescriptionI</label>
                        <input ref={descRef} type="text" className="form-control" />
                    </div>



                    <button type="submit" className="btn btn-dark">Add</button>
                </form>

            </Col>
        </div>
    )
}

export default Form