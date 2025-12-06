import GameItem from "./GameItem";
import SongItem from "./SongItem";
import MovieItem from "./MovieItem";
import WorkoutItem from "./WorkoutItem";
import QuizTopic from "./QuizTopic";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Selectors</h1>

      <hr />

      <h2>Game Selector</h2>
      <GameItem name="Minecraft" />
      <GameItem name="Fortnite" />
      <GameItem name="CS:GO" />
      <GameItem name="Valorant" />

      <hr />

      <h2>Music Playlist</h2>
      <SongItem title="Blinding Lights" />
      <SongItem title="Levitating" />
      <SongItem title="Peaches" />
      <SongItem title="Stay" />

      <hr />

      <h2>Movie Picker</h2>
      <MovieItem title="Inception" />
      <MovieItem title="Interstellar" />
      <MovieItem title="The Matrix" />
      <MovieItem title="Hereditary" />

      <hr />

      <h2>Workout Planner</h2>
      <WorkoutItem name="Push-ups" />
      <WorkoutItem name="Squats" />
      <WorkoutItem name="Plank" />
      <WorkoutItem name="Burpees" />

      <hr />

      <h2>Science Quiz Selector</h2>
      <QuizTopic topic="Physics" />
      <QuizTopic topic="Biology" />
      <QuizTopic topic="Chemistry" />
      <QuizTopic topic="Astronomy" />
    </div>
  );
}

export default App;
