import CounterContainer from "../../components/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div>
        <div className="containerItemDetail">
          <div className="containerImage">
            <img src={item.thumbnail} alt={item.title} />
          </div>

          <div className="containerDetail">
            <h2>
              <span></span> {item.title}
            </h2>
            <h2>
              <span></span> {item.short_description}
            </h2>
            <h2>
              <span></span> ${item.price}
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
      </div>
    </>
  );
};

export default ItemDetail;
