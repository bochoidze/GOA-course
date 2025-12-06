function WorkoutItem({ name }) {
  const handleClick = () => {
    alert(`Workout added: ${name}`);
  };

  return <button onClick={handleClick}>{name}</button>;
}

export default WorkoutItem;
