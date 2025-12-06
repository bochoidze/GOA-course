function MovieItem({ title }) {
  const handleClick = () => {
    alert(`You added ${title} to your watchlist!`);
  };

  return <button onClick={handleClick}>{title}</button>;
}

export default MovieItem;
