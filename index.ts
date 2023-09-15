import dotenv from "dotenv";
import discord, {
  ApplicationCommandType,
  Client,
  REST,
  Routes,
  OAuth2Routes,
} from "discord.js";
import express from "express";
import axios from "axios";
dotenv.config();

const re = `${OAuth2Routes.authorizationURL}?client_id=1152146166344061029&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fredirect&response_type=code&scope=messages.read`;
const client = new Client({
  intents: ["Guilds", "DirectMessages", "MessageContent"],
});
const commands = [
  {
    name: "ping",
    type: ApplicationCommandType.ChatInput,
    description: "Replies with Pong!",
  },
];

const TOKEN = process.env.TOKEN!;
const APPLICATION_ID = process.env.APPLICATION_ID!;
const SECRET_KEY = process.env.SECRET_KEY!;

(async () => {
  client.on("ready", () => {
    console.log(`Logged in as! `);
    console.log(client.user);
    console.log(client.users);
    console.log(client.channels);
  });

  // const rest = new REST({ version: "10" }).setToken(ac);
  // await rest.put(Routes.applicationCommands(APPLICATION_ID));
  await client.login(TOKEN);

  // client.on("message", (msg) => {
  //   console.log(msg.content);
  // });

  // console.log(client.token);
})();

// const PORT = 8000;
// const app = express();

// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });

// app.get("/", (req, res) => {
//   res.send(`
//       <div style="margin: 300px auto;
//       max-width: 400px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       font-family: sans-serif;"
//       >
//           <a
//               href=${re}
//               style="outline: none;
//               padding: 10px;
//               border: none;
//               font-size: 20px;
//               margin-top: 20px;
//               border-radius: 8px;
//               background: #6D81CD;
//               cursor:pointer;
//               text-decoration: none;
//               color: white;"
//           >
//           Login </a>
//       </div>
//   `);
// });

// app.get("/auth/redirect", async (req, res) => {
//   const code = req.query.code;
//   const params = new URLSearchParams();
//   let user;
//   params.append("client_id", APPLICATION_ID);
//   params.append("client_secret", SECRET_KEY);
//   params.append("grant_type", "authorization_code");
//   params.append("code", code as string);
//   params.append("redirect_uri", "http://localhost:8000/auth/redirect");
//   try {
//     const response = await axios.post(
//       "https://discord.com/api/oauth2/token",
//       params
//     );
//     console.log(response.data);
//     const { access_token, token_type } = response.data;
//     return res.send("ok");
//   } catch (error) {
//     console.log("Error", error);
//     return res.send("Some error occurred! ");
//   }
// });
