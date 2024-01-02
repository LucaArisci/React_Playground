function Button(props) {
  function handleClick() {
    alert(`You have bought some ${props.children.name}`);
  }

  return <button onClick={handleClick}>{props.children.name}</button>;
}

export default Button;
