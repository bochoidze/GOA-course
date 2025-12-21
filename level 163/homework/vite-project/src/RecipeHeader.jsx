function RecipeHeader({ title, image }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </>
  );
}

export default RecipeHeader;

