import { ThemeProvider } from "../provider/themeProvider.tsx";
import { Outlet as Page } from "react-router-dom";
import { Background } from "../background/background.tsx";

function Layout() {
  return (
    <ThemeProvider>
      <Background className="min-h-screen ">
        <main>
          <Page></Page>
        </main>
      </Background>
    </ThemeProvider>
  );
}

export default Layout;
