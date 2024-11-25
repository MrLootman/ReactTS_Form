import { Children } from "../../types/connexionLayout";
import LoginImage from "../LoginImage";

function ConnexionLayout({ children }: Children) {
  return (
    <main className="connexion-layout">
      <section className="connexion-area">
        <LoginImage />
        {children}
      </section>
    </main>
  );
}

export default ConnexionLayout;
