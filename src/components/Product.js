import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.products);
    // console.log(Product)
    // console.log(products)
    // const [products, getProducts] = useState([]);
    useEffect(() => {
        //DISPATCH Actions for fetchProducts
        dispatch(getProducts());

        //API
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(result => getProducts(result))

    }, []);

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    const addToCart = (product) => {
        //dispatch a action
        dispatch(add(product))
    }
    // console.log('Products:', products); 
    const cards = (products || []).map((product) => (

        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">

                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {/* {product.discription} */}
                        {product.price}
                    </Card.Text>
                </Card.Body>

                <Card.Footer style={{ backgroundColor: "white" }}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>

                </Card.Footer>

            </Card>
        </div>


    ));

    return (
        <>
            <h1>Product DashBoard</h1>
            {/* {JSON.stringify(products)} */}
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Product;