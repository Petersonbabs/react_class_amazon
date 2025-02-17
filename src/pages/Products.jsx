import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Products = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async ()=>{
    console.log('fetching..');
    try {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setProducts(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  // useEffect(cb, dependencies array)
  useEffect(()=>{
    fetchProducts()
  }, [])

  // https://fakestoreapi.com/

  return (
    <div>
      <h2>Products</h2>
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)"
      }}>
         {
          products.map(product =>(
            <Link to={`/products/${product.id}`} key={product.id} style={{
              padding: "1rem",
              border: "1px solid",
              margin: "1rem"
            }}>
              <div style={{height:"200px"}}>
                <img src={product.image} alt="" style={{width:"100%", height:"100%", objectFit: "contain"}} />
              </div>
              <h1>{product.title}</h1>
            </Link>
          ))
        }
      </section>
    </div>
  )
}

export default Products