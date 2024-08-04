import basket from "../assets/Basket.svg";

const ItemCard = ({ image, title, price, text }) => {
  return (
    <div className="itemCard">
      <img src={image} className="itemImg"></img>
      <div className="itemHeader">
        <span className="itemTitle">{title}</span>
        <span className="itemPrice">{price}</span>
      </div>
      <div className="itemText">
        {text}
      </div>
      <div className="itemCTA">
      <span >Order a delivery </span>
      <span><img src={basket} className="logoImg"></img></span>
      </div>
    </div>
  );
};

export default ItemCard;
