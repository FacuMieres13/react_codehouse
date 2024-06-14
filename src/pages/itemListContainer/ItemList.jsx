// LoginContainer --> javascript
// Login ---> html

import { ProductCard } from "../../components/productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {items.map((element) => {
        return (
          <ProductCard
            // se debe pasar siempre la propiedad key, y no se debe usar posteriormente
            key={element.id}
            title={element.title}
            description={element.description}
            price={element.price}
          />
        );
      })}
      {/* {items.length > 0 ? (
        <ProductCard
          title={items[0].title}
          description={items[0].description}
          price={items[0].price}
        />
      ) : null} */}
    </div>
  );
};
