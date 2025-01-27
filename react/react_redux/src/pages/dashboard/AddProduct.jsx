import {useRef} from 'react'
import { Container, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../tools/actions/productActions';

const AddProduct = () => {
    const imgUrl = useRef();
    const title = useRef();
    const price = useRef();
    const description = useRef();

    const dispatch = useDispatch();

    const formSubmit = e => {
        e.preventDefault();
        dispatch(addProduct({img: imgUrl.current.value, name: title.current.value, desc: description.current.value, price: price.current.value}));
    }
    return (
        <Container>
            <p className='h1 text-center'>Add Product</p>
            <div className="d-flex align-items-center justify-content-center">
                <Col sm={12} md={5}>
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Image url</label>
                            <input type="text" className="form-control" ref={imgUrl}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" ref={title}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="text" className="form-control" ref={price}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" ref={description}/>
                        </div>

                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </Col>
            </div>
        </Container>
    )
}

export default AddProduct