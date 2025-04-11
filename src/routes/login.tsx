import "../index.css";
import { Card } from "../components/ui/card/card.tsx";
import SwitchToUse from "../components/ui/switchButton/switchToUse.tsx";
import LoginForm from "../components/ui/login/loginForm.tsx";

function Loggin() {
  return (
    <div className="flex flex-col items-center">
      <Card className="min-w-screen border-none shadow-none">
        <SwitchToUse />
      </Card>
      <Card
        className="flex items-center justify-center mt-30 h-auto w-auto px-10 "
        style={{
          boxShadow: `0px 10px 20px var(--shadow-color)`,
          background: "var(--background-color)",
        }}
      >
        <LoginForm></LoginForm>
      </Card>
    </div>
  );
}

export default Loggin;
