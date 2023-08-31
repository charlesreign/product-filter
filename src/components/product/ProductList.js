import React, { useState, useEffect } from 'react'
import Search from '../search/Search'
import Categories from '../categories/Categories'
import Product from '../product/Product'

import {products as productData} from "../../products-data"

const allCategories = ["all", ...new Set(productData.map((product) => product.category))]

const ProductList = () => {
  const [products, setProducts] = useState(productData)
  const [search, setSearch] = useState("")
  const [filteredProducts, setFilterProducts] = useState([])
  const [categories] = useState(allCategories)

  const handleSearch=(e) =>{
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFilterProducts(
      products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, products])

  const filterProduct=(category) =>{
    if (category === "all") {
      setProducts(productData)
      return;
    }
    const newProducts = productData.filter((product) => product.category === category)
    setProducts(newProducts)
  }


  return (
    <>
    <div className="header">
      <header className="container">
        <h1 className="--color-white --text-center">
          <span className="--color-danger ">Product </span>
          Filter
        </h1>
        <div className="--flex-between --flex-dir-column --py">
          {/* <p className="--color-white">input</p> */}
          <Search onInputChange={handleSearch} inputValue={search} />
          <Categories categories={categories} filterItems={filterProduct} />
        </div>
      </header>
    </div>
    <div className="product-container">
      <div className="container products --grid-25 --py2">
        {filteredProducts.length === 0 ? (
          <h3>No product found!!!</h3>
        ) : (
          filteredProducts.map((product) => {
            const { id, title, img, price } = product;
            return (
              <div key={id}>
                <Product title={title} img={img} price={price} />;
              </div>
            );
          })
        )}
      </div>
    </div>
  </>
  )
}

export default ProductList
