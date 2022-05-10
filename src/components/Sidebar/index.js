import React from "react";

import {
  SiderTitleContainer,
  SiderContainer,
  Description,
  Title,
} from "./sidebarstyle";
import "./sidebar.css";
import SidebarForms from "./SidebarForms";

function Sidebar(props) {
  return (
    <SiderContainer>
      <SiderTitleContainer>
        <Title>
          <div className="dash-icon icon-bq_icons_tree" />
          <div className="dash-title">
            Connectivité écologique dans les Basses-terres du Saint-Laurent
          </div>
        </Title>

        <Description>
          Modélisation de la connectivité écologique 
          en fonction de différents scénarios de changement d'utlisation 
          des terres et de changements climatiques . <br />
          {" "}
          <a
            target="_blank"
            style={{ color: "#ffffff", fontWeight: "bold" }}
            href="https://quebio.ca/fr/rapport_connectivite"
          >
            Accéder aux rapports décrivant l'analyse.{" "}
          </a>
        </Description>
      </SiderTitleContainer>
      <SidebarForms />
    </SiderContainer>
  );
}

export default Sidebar;
