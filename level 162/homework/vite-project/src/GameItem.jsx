function GameItem({ name }) {
  const handleClick = () => {
    alert(`You selected ${name}!`);
  };

  return <button onClick={handleClick}>{name}</button>;
}

export default GameItem;
