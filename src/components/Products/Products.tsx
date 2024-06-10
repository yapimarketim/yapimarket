import Image from "next/image";
import React, { useState } from "react";
import Products from "@/helpers/data/product.json";

const Product = ({ showHeading = true }) => {
  const { products } = Products;
  const [filterProducts, setFilterProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState("Tüm Ürünler");

  const handleFilter = (category : any) => {
    if (category === "Tüm Ürünler") {
      setFilterProducts(products);
    } else {
      const filtered = products.filter((item) => item.specifications.type === category);
      setFilterProducts(filtered);
    }
    setActiveFilter(category);
  };

  return (
    <section className="portfolio_area area-padding" id="portfolio">
      <div className="container">
        {showHeading ? (
          <div className="area-heading">
            <h3 className="line">Ürünlerimiz</h3>
            <p>Ürünlerimizi inceleyerek avantajlı fiyatlarla sahip olabilirsiniz.</p>
          </div>
        ) : null}

        <div className="filters portfolio-filter">
          <ul>
            <li className={activeFilter === "Tüm Ürünler" ? "active" : ""} onClick={() => handleFilter("Tüm Ürünler")}>
              Tüm Ürünler
            </li>
            <li className={activeFilter === "Mutfak Bataryası" ? "active" : ""} onClick={() => handleFilter("Mutfak Bataryası")}>Mutfak Ekipmanları</li>
            <li className={activeFilter === "Lavabo Bataryası" ? "active" : ""} onClick={() => handleFilter("Lavabo Bataryası")}>Banyo Ekipmanları</li>
            <li className={activeFilter === "Diğer Ürünler" ? "active" : ""} onClick={() => handleFilter("Diğer Ürünler")}>Diğer Ürünler</li>
          </ul>
        </div>
        <div className="filters-content">
          <div className="row portfolio-grid">
            {filterProducts.map((item) => (
              <div className="col-lg-6 col-md-6" key={item.product_code}>
                <div className="single_portfolio">
                  <Image
                    width={255}
                    height={120}
                    className="img-fluid w-100"
                    src={`/images/${item.images[0]}`}
                    alt={item.name}
                  />
                  <div className="short_info">
                    <p>{item.specifications.type}</p>
                    <h4>
                      <a href="portfolio-details.html">{item.specifications.material} ,{item.brand}</a>
                    </h4>
                    <h6 className="w-100 d-flex justify-content-end">
                      {item.product_code}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
