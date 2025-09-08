import React, {useState} from "react";

function ProductList(){
    const[products, setProduct]=useState([
        {id:1,name:'Leptop',price:50000,category:'Electronics'},
        {id:2,name:'Book',price:50000,category:'Study'},
        {id:3,name:'Phone',price:50000,category:'Electronics'},
        {id:4,name:'Pencil',price:50000,category:'Study'}
    ]);

    const [filter, setFilter] = useState('all');

    const filteredProducts=products.filter(product => {
        if(filter === 'all') return true;

        return product.category.toLowerCase() === filter.toLowerCase();
    });

    return(
        <div className="products-list">
          <h2>Products</h2>

          <div className="filters">
            <button 
            onClick={() => setFilter('all')} 
            className={filter === 'all'? 'active' : ''}>All</button>

            <button 
            onClick={() => setFilter('Electronics')} 
            className={filter === 'Electronics'? 'active' : ''}>Electronics</button>

            <button 
            onClick={() => setFilter('Study')} 
            className={filter === 'Study'? 'active' : ''}>Study</button>
          </div>

          <div className="products">
            {filteredProducts.map(product =>(
                <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
    );

}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductList;