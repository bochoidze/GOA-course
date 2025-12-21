import "./App.css";

/* ---------- Data ---------- */
const playlistData = [
  {
    songTitle: "Blinding Lights",
    artist: "The Weeknd",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e6f2b4e3b5c0a5e9b4c8f6d4",
  },
  {
    songTitle: "As It Was",
    artist: "Harry Styles",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
  },
  {
    songTitle: "Levitating",
    artist: "Dua Lipa",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
  },
];

/* ---------- Components ---------- */

const SongBody = ({ songTitle, artist }) => {
  return (
    <div className="song-body">
      <h2>{songTitle}</h2>
      <p>{artist}</p>
    </div>
  );
};

const AlbumArt = ({ albumArt }) => {
  return <img src={albumArt} alt="album" className="album-art" />;
};

const SongCard = ({ songObject }) => {
  return (
    <div className="song-card">
      {songObject.albumArt && (
        <AlbumArt albumArt={songObject.albumArt} />
      )}
      <SongBody
        songTitle={songObject.songTitle}
        artist={songObject.artist}
      />
    </div>
  );
};

/* ---------- App ---------- */

function App() {
  return (
    <div className="app">
      <h1>🎵 My Playlist</h1>

      <div className="playlist">
        {playlistData.map((song, index) => (
          <SongCard key={index} songObject={song} />
        ))}
      </div>
    </div>
  );
}

export default App;
