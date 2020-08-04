import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/444696?s=460&u=349830f81c3c30394fc340d8f04c241b5d9ca407&v=4"
          alt="Pedro Pizzo"
        />
        <div>
          <strong>Pedro Pizzo</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit
        ante vitae dui condimentum, vel scelerisque dui ornare. Fusce vel neque
        a nisl dictum sagittis vitae at nisi. Mauris semper lorem eget faucibus
        dictum.
        <br />
        <br />
        Etiam finibus diam eu est auctor, sit amet efficitur odio lacinia. Morbi
        diam risus, maximus at tincidunt vel, pulvinar ut nisl.{" "}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
