import { Header } from "./components/Header";
import { Input } from "./components/Input";

export function App() {
  return (
    <>
      <Header />
      <form>
        <Input
          leftInput="You Control a:"
          rightInput="In this:"
          inputField="Player Controller"
        />
        <Input
          leftInput="You Control a:"
          rightInput="In this:"
          inputField="Basic Gameplay"
        />
        <Input
          leftInput="You Control a:"
          rightInput="In this:"
          inputField="Sound & Effect"
        />
        <Input
          leftInput="You Control a:"
          rightInput="In this:"
          inputField="Gameplay Mechanics"
        />
        <Input
          leftInput="You Control a:"
          rightInput="In this:"
          inputField="User Interface"
        />
        <Input
          leftInput="You Control a:"
          rightInput="In this:"
          inputField="Other Features"
        />
      </form>
    </>
  );
}
