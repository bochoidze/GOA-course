function QuizTopic({ topic }) {
  const handleClick = () => {
    alert(`Quiz topic selected: ${topic}`);
  };

  return <button onClick={handleClick}>{topic}</button>;
}

export default QuizTopic;
