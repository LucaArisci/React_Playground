function GroceryItem(props) {
  function handleClick() {
    alert(`You have bought some ${props.item.name}`);
  }

  return (
    <div className="Grocery-item">
      <img src={props.item.image} alt={props.item.alt} />
      <button onClick={handleClick}>{props.item.name}</button>
    </div>
  );
}

export default GroceryItem;
