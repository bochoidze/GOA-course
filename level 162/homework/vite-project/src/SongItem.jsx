function SongItem({ title }) {
  const handleClick = () => {
    alert(`Now playing: ${title}`);
  };

  return <button onClick={handleClick}>{title}</button>;
}

export default SongItem;
