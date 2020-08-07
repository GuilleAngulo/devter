const timeline = [
  {
    id: "0",
    username: "NintendoES",
    name: "Nintendo España",
    avatar:
      "https://pbs.twimg.com/profile_images/1278595985590140930/Gs0cGUNq_400x400.jpg",
    message:
      "¿Qué actividad haces a diario? ¡A nosotros nos encanta regar las flores! #AnimalCrossingNewHorizons",
  },
  {
    id: "1",
    username: "Variety",
    name: "Variety",
    avatar:
      "https://pbs.twimg.com/profile_images/1060236422500704257/jltNN1hQ_400x400.jpg",
    message:
      "Cult Filmmaker Alejandro Jodorowsky Faces Unpaid $200,000 Loan From 2016 Film ‘Endless Poetry’ (EXCLUSIVE)",
  },
  {
    id: "2",
    username: "BDisgusting",
    name: "Bloody Disgusting",
    avatar:
      "https://pbs.twimg.com/profile_images/1198734123495559169/mSocd0eJ_400x400.jpg",
    message:
      "Leaked Footage of ‘The Last of Us Part II’ Standalone Multiplayer Mode Appears Online",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify(timeline));
};
