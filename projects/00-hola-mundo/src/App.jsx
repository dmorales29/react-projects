import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard userName="midudev" name="David Morales" />
      <TwitterFollowCard userName="pheralb" name="Alex Méndez" />
      <TwitterFollowCard userName="goncy" name="Fran García" />
    </>
  );
}
