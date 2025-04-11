import { Card } from "../card/card.tsx";
import { useTheme } from "../provider/themeProvider.tsx";
import { Switch } from "./switch.tsx";

export default function SwitchToUse() {
  const { mode, setLightMode } = useTheme();
  const handleToggle = () => {
    setLightMode(!mode);
  };
  return (
    <Card className="flex items-end border-none shadow-none">
      <Switch
        className="mr-10 -mt-10"
        checked={mode}
        onCheckedChange={handleToggle}
      ></Switch>
    </Card>
  );
}
