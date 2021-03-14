import path from "path";
import cors from "cors";
import http from "http";
import express from "express";

const PORT = process.env.PORT || 3334; // <-  inclusive a porta que ele deixa exposta pro teu app
// const port = portaDoAmbiente ou a 3334, se não tiver uma
const HOST = `http://localhost:${PORT}`;
console.log("oi");
const app = express();
app.use(cors());
// const __dirname = path.resolve();
app.use("/", express.static(path.resolve(__dirname, "public")));
console.log("Jorge attie");

app.get("/", (request, response) => {
  const musics = [
    {
      artist: "Deep Purple",
      name: "Smoke On The Water",
      duration: "00:06:09",
      cover: `https://rockerback.herokuapp.com/covers/metallica_nothing_else_matters.jpg`,
      url: `https://rockerback.herokuapp.com/musics/Smoke.mp3`,
    },

    {
      artist: "Queen of the Stone Age",
      name: "3's & 7's",
      duration: "00:06:09",
      cover: `https://rockerback.herokuapp.com/covers/metallica_nothing_else_matters.jpg`,
      url: `https://rockerback.herokuapp.com/musics/Queens.mp3`,
    },
    {
      artist: "Metallica",
      name: "Nothing else matters",
      duration: "00:06:29",
      cover: `https://rockerback.herokuapp.com/covers/metallica_nothing_else_matters.jpg`,
      url: `https://rockerback.herokuapp.com/musics/metallica_nothing_else_matters.mp3`,
    },
    {
      artist: "KISS",
      name: "I Was Made For Lovin You",
      duration: "00:04:33",
      cover: `https://rockerback.herokuapp.com/covers/metallica_nothing_else_matters.jpg`,
      url: `https://rockerback.herokuapp.com/musics/kiss.mp3`,
    },
    {
      artist: "Nirvana",
      name: "Smells like teen spirit",
      duration: "00:05:01",
      cover: `https://rockerback.herokuapp.com/covers/nirvana_smells_like_teen_spirit.jpg`,
      url: `https://rockerback.herokuapp.com/musics/nirvana_smells_like_teen_spirit.mp3`,
    },

    {
      artist: "Black Sabbath",
      name: "Paranoid",
      duration: "00:04:28",
      cover: `https://rockerback.herokuapp.com/covers/metallica_nothing_else_matters.jpg`,
      url: `https://rockerback.herokuapp.com/musics/black.mp3`,
    },

    {
      artist: "LedZepplin",
      name: "Black Dog",
      duration: "00:05:31",
      cover: `https://rockerback.herokuapp.com/covers/metallica_nothing_else_matters.jpg`,
      url: `https://rockerback.herokuapp.com/musics/LedZepplin.mp3`,
    },
    {
      artist: "Jimi Hendrix",
      name: "Izabella",
      duration: "00:04:28",
      cover: `https://rockerback.herokuapp.com/covers/metallica_nothing_else_matters.jpg`,
      url: `https://rockerback.herokuapp.com/musics/Jimi.mp3`,
    },
  ];

  return response.json({
    amount: musics.length,
    musics,
  });
});

app.use("*", (request, response) =>
  response.status(404).json({ message: "Oops, nothing to show here." })
);

console.log(process.env);

// São suas variaveis de ambiente, o heroku tem lá as dele tambem

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Serve is running at ${HOST}`));
