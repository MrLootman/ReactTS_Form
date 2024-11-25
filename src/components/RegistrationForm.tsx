import { NavLink } from "react-router-dom";

export default function RegistrationForm() {

  /* 
    Met en place la fonction handleSubmit.
    Cette fonction doit envoyer les informations renseignées dans le formulaire
    vers le backend, à la route http://localhost:3310/api/users
  */

  return (
    <section className="registration-form">
      <hr aria-label="Horizontal band giving a shadow effect between the image and the form." />
      <form>
        <label htmlFor="registration-firstname">
          {/* Firstname */}
          <input
            placeholder="Your firstname"
            id="registration-firstname"
            name="firstname"
            type="text"
            autoComplete="off"
          />
        </label>
        <label htmlFor="registration-email">
          {/* Email */}
          <input
            placeholder="Your email"
            id="registration-email"
            name="email"
            type="text"
            autoComplete="off"
          />
        </label>
        <label htmlFor="registration-password" title="Your password">
          {/* Password */}
          <input
            id="registration-password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="off"
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <NavLink to="/" aria-label="Message de création de compte">
        <strong>Vous avez déjà un compte ?</strong>
      </NavLink>
    </section>
  );
}
