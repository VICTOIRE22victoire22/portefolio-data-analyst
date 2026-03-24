import { useState } from "react";
import "./App.css";
import demoVideoRecipes from "./assets/video-recipes.mp4";
import demoVideoBienEtre from "./assets/video-bien-etre.mp4";
import demoVideoEcfBackend from "./assets/video-ecf-backend.mp4";
import demoVideoStage from "./assets/video-stage.mp4";

import listeRecettes from "./assets/liste-recettes.png";
import ajoutRecette from "./assets/ajout-recette.png";
import detailsRecette from "./assets/details-recette.png";
import categorieTypeRecette from "./assets/filtrage-categorie-type.png";
import pageAccueil from "./assets/page-accueil.png";
import prestation from "./assets/page-prestation.png";
import rendezVous from "./assets/rendez-vous.png";
import contact from "./assets/formulaire-contact.png";
import accueilSalles from "./assets/accueil-salles.png";
import rechercheSalles from "./assets/recherche-salles.png";
import detailSalle from "./assets/detail-salle.png";
import nouvelleSalle from "./assets/nouvelle-salle.png";
import connexion from "./assets/connexion.png";
import users from "./assets/utilisateurs.png";
import ajoutEquipement from "./assets/ajout-equipement.png";
import ajoutLigneTelephonique from "./assets/ajout-ligne-telephonique.png";

function App() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleDemoClick = (e, videoName) => {
    e.preventDefault();
    setActiveVideo((prev) => (prev === videoName ? null : videoName));
  };

  return (
    <div className="portfolio">
      <section className="hero">
        <p className="hero-tag">Portfolio développeuse web</p>
        <h1>Odile Richard</h1>
        <h2>Développeuse Fullstack Web & Mobile</h2>

        <p className="hero-text">
          Je conçois des applications web en frontend et backend avec React,
          Node.js, Express, PHP, MySQL et MongoDB.
        </p>

        <div className="links">
          <a
            href="https://github.com/VICTOIRE22victoire22"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/odile-richard-526504347"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:leblogdeveloppeurs@gmail.com">Me contacter</a>

          <a href="https://cv-one-page.netlify.app" target="_blank" rel="noreferrer">
            Télécharger mon CV
          </a>
        </div>
      </section>

      <section className="about">
        <h2>À propos</h2>

        <p>
          Après plusieurs années d’expérience professionnelle dans l’industrie
          et l’administratif, j’ai choisi de me reconvertir dans le
          développement web et web mobile.
        </p>

        <p>
          Je me forme aujourd’hui au métier de Conceptrice Développeuse
          d’Applications et je développe des projets concrets en fullstack, de
          l’interface utilisateur jusqu’au backend et à la base de données.
        </p>

        <p>
          Je recherche des opportunités me permettant de mettre en pratique mes
          compétences techniques, de continuer à progresser et de contribuer à
          des projets utiles et bien conçus.
        </p>
      </section>

      <section className="skills">
        <h2>Compétences techniques</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Responsive Design</li>
              <li>React Router</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>API REST</li>
              <li>PHP</li>
              <li>Symfony</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Base de données</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Outils</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Netlify</li>
              <li>Cloudinary</li>
              <li>Stripe</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section-heading">
          <h2>Projets</h2>
          <p>
            Une sélection de projets réalisés pour développer mes compétences en
            frontend, backend et déploiement.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project">
            <h3>Application de gestion de recettes</h3>

            <img
              src={listeRecettes}
              alt="Application de gestion de recettes : liste des recettes"
              className="project-image"
            />
            <img
              src={ajoutRecette}
              alt="Application de gestion de recettes : ajout d'une recette"
              className="project-image"
            />
            <img
              src={detailsRecette}
              alt="Application de gestion de recettes : détails d'une recette"
              className="project-image"
            />
            <img
              src={categorieTypeRecette}
              alt="Application de gestion de recettes : filtrage par catégorie et type de cuisine"
              className="project-image"
            />

            <p className="project-description">
              Application fullstack permettant de créer, modifier, supprimer et
              consulter des recettes avec un système de filtrage par catégorie
              et type de cuisine.
            </p>

            <p className="project-stack">
              <strong>Technologies :</strong> React · Node.js · Express ·
              MongoDB
            </p>

            <h4>Fonctionnalités principales</h4>
            <ul className="project-list">
              <li>Ajout de nouvelles recettes</li>
              <li>Modification et suppression de recettes</li>
              <li>Affichage dynamique des recettes</li>
              <li>Filtrage par catégorie et type de cuisine</li>
              <li>Connexion frontend / backend via API REST</li>
            </ul>

            <h4>Défis techniques</h4>
            <ul className="project-list">
              <li>Gestion des formulaires React</li>
              <li>Connexion entre le frontend et l'API Node.js</li>
              <li>Structuration des données dans MongoDB</li>
            </ul>

            <div className="project-links">
              <a
                href="https://github.com/VICTOIRE22victoire22/recipes.git"
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
              <a href="/" onClick={(e) => handleDemoClick(e, "recipes")}>
                Démo
              </a>
            </div>

            {activeVideo === "recipes" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoRecipes} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </article>

          <article className="project">
            <h3>Gestionnaire de parc téléphonique</h3>

            <img
              src={connexion}
              alt="Application de gestion de parc téléphonique : page de connexion"
              className="project-image"
            />
            <img
              src={users}
              alt="Application de gestion de parc téléphonique : tableau de bord des utilisateurs"
              className="project-image"
            />
            <img
              src={ajoutEquipement}
              alt="Application de gestion de parc téléphonique : ajout d'un équipement"
              className="project-image"
            />
            <img
              src={ajoutLigneTelephonique}
              alt="Application de gestion de parc téléphonique : formulaire d'ajout de ligne téléphonique"
              className="project-image"
            />

            <p className="project-description">
              Application web développée pour gérer un parc téléphonique et les
              équipements associés. Elle permet de centraliser les informations
              relatives aux sites, bâtiments, lignes et équipements dans une
              interface structurée et sécurisée.
            </p>

            <p className="project-stack">
              <strong>Technologies :</strong> PHP · MySQL · HTML · CSS ·
              JavaScript
            </p>

            <h4>Fonctionnalités principales</h4>
            <ul className="project-list">
              <li>Authentification des utilisateurs</li>
              <li>Gestion des sites et bâtiments</li>
              <li>Gestion des équipements et lignes téléphoniques</li>
              <li>Ajout, modification et suppression de données</li>
            </ul>

            <h4>Défis techniques</h4>
            <ul className="project-list">
              <li>Structuration d’une application PHP</li>
              <li>Connexion à une base de données MySQL</li>
              <li>Gestion des formulaires et des données</li>
              <li>Organisation des différentes entités du parc téléphonique</li>
            </ul>

            <div className="project-links">
              <a
                href="https://github.com/VICTOIRE22victoire22/projet_stage_dwwm.git"
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
              <a href="/" onClick={(e) => handleDemoClick(e, "ecf")}>
                Démo
              </a>
            </div>

            {activeVideo === "ecf" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoStage} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </article>

          <article className="project">
            <h3>Application de gestion de salles</h3>

            <img
              src={accueilSalles}
              alt="Page d'accueil de l'application de gestion de salles"
              className="project-image"
            />
            <img
              src={rechercheSalles}
              alt="Recherche de salles dans l'application"
              className="project-image"
            />
            <img
              src={detailSalle}
              alt="Détail d'une salle dans l'application de gestion"
              className="project-image"
            />
            <img
              src={nouvelleSalle}
              alt="Formulaire d'ajout d'une nouvelle salle"
              className="project-image"
            />

            <p className="project-description">
              Application web développée avec Symfony permettant de gérer des
              salles, consulter leurs détails, effectuer des recherches et
              ajouter de nouvelles ressources via une interface structurée
              connectée à une base de données.
            </p>

            <p className="project-stack">
              <strong>Technologies :</strong> PHP · Symfony · Twig · MySQL
            </p>

            <h4>Fonctionnalités principales</h4>
            <ul className="project-list">
              <li>Affichage des salles disponibles</li>
              <li>Recherche de salles</li>
              <li>Consultation des détails d’une salle</li>
              <li>Ajout de nouvelles salles via formulaire</li>
              <li>Gestion des données côté backend</li>
            </ul>

            <h4>Défis techniques</h4>
            <ul className="project-list">
              <li>Organisation d’un projet Symfony</li>
              <li>Gestion des routes, contrôleurs et vues Twig</li>
              <li>Connexion à une base de données MySQL</li>
              <li>Création et traitement de formulaires</li>
            </ul>

            <div className="project-links">
              <a
                href="https://github.com/VICTOIRE22victoire22/ecf_backend.git"
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
              <a href="/" onClick={(e) => handleDemoClick(e, "ecf")}>
                Démo
              </a>
            </div>

            {activeVideo === "ecf" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoEcfBackend} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </article>

          <article className="project">
            <h3>Site bien-être avec prise de rendez-vous</h3>

            <img
              src={pageAccueil}
              alt="Page d'accueil du site bien-être"
              className="project-image"
            />
            <img
              src={prestation}
              alt="Présentation d'une prestation de bien-être"
              className="project-image"
            />
            <img
              src={rendezVous}
              alt="Agenda de prise de rendez-vous"
              className="project-image"
            />
            <img
              src={contact}
              alt="Formulaire de contact du site bien-être"
              className="project-image"
            />

            <p className="project-description">
              Site vitrine dédié au bien-être permettant de présenter
              différentes prestations et de réserver un rendez-vous via une
              interface simple et responsive.
            </p>

            <p className="project-stack">
              <strong>Technologies :</strong> HTML · CSS · JavaScript
            </p>

            <h4>Fonctionnalités principales</h4>
            <ul className="project-list">
              <li>Présentation des prestations bien-être</li>
              <li>Navigation intuitive entre les services</li>
              <li>Agenda de prise de rendez-vous</li>
              <li>Formulaire de contact</li>
            </ul>

            <h4>Défis techniques</h4>
            <ul className="project-list">
              <li>Création d’une interface claire et accessible</li>
              <li>Structuration des pages HTML</li>
              <li>Mise en page responsive avec CSS</li>
              <li>Interaction utilisateur avec JavaScript</li>
            </ul>

            <div className="project-links">
              <a
                href="https://github.com/VICTOIRE22victoire22/dynamique.git"
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
              <a href="/" onClick={(e) => handleDemoClick(e, "bienetre")}>
                Démo
              </a>
            </div>

            {activeVideo === "bienetre" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoBienEtre} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className="formation">
        <h2>Formation</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <div>
              <h3>Le Reacteur</h3>
              <p>
                Préparation au métier de{" "}
                <strong>Conceptrice Développeuse d’Applications</strong>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2025</span>
            <div>
              <h3>Prepavenir Formation</h3>
              <p>
                Préparation au métier de{" "}
                <strong>Développeuse Web et Web Mobile</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2>Expériences passées</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">2016 - aujourd’hui</span>
            <div>
              <h3>Approvisionneuse — Safran Aircraft Engines</h3>
              <p>
                Gestion des stocks, coordination, suivi des commandes et
                qualité.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2013 - 2015</span>
            <div>
              <h3>
                Opératrice de préparation brasage — Safran Aircraft Engines
              </h3>
              <p>
                Travail de précision, contrôle qualité et respect de procédures.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2009 - 2012</span>
            <div>
              <h3>Employée administrative et comptable</h3>
              <p>
                Gestion administrative, organisation, suivi de dossiers et
                accueil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>

        <p>
          Email :{" "}
          <a href="mailto:leblogdeveloppeurs@gmail.com">
            leblogdeveloppeurs@gmail.com
          </a>
        </p>

        <p>
          LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/in/odile-richard-526504347"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/odile-richard-526504347
          </a>
        </p>

        <p>
          GitHub :{" "}
          <a
            href="https://github.com/VICTOIRE22victoire22"
            target="_blank"
            rel="noreferrer"
          >
            github.com/VICTOIRE22victoire22
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;