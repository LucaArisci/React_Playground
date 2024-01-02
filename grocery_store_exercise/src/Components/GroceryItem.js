import Button from "./Button";

function GroceryItem(props) {
  return (
    <div className="Grocery-item">
      <img src={props.item.image} alt={props.item.alt} />
      <Button>{props.item}</Button>
    </div>
  );
}

export default GroceryItem;
