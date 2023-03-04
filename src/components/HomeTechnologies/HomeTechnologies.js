import "./HomeTechnologies.scss";
import api from "../../assets/icons/api.png";
import css from "../../assets/icons/css.png";
import github from "../../assets/icons/github.png";
import heroku from "../../assets/icons/heroku.png";
import html from "../../assets/icons/html.png";
import js from "../../assets/icons/js.png";
import jwt from "../../assets/icons/jwt.png";
import knex from "../../assets/icons/knex.png";
import mysql from "../../assets/icons/mysql.png";
import netlify from "../../assets/icons/netlify.png";
import node from "../../assets/icons/node.png";
import oauth from "../../assets/icons/oauth.png";
import react from "../../assets/icons/react.png";
import sass from "../../assets/icons/sass.png";
import express from "../../assets/icons/expressJS.png";

const HomeTechnologies = () => {
  return (
    <section className="tech">
      <h1 className="tech__title">KNOWN LANGUAGES AND TECH STACKS</h1>
      <article className="tech__container">
        <div className="tech__tech-container">
          <img src={html} alt="html icon" className="tech__image" />
          <h2 className="tech__tech-title">HTML</h2>
        </div>
        <div className="tech__tech-container">
          <img src={css} alt="css icon" className="tech__image" />
          <h2 className="tech__tech-title">CSS</h2>
        </div>
        <div className="tech__tech-container">
          <img src={sass} alt="sass icon" className="tech__image" />
          <h2 className="tech__tech-title">Sass</h2>
        </div>
        <div className="tech__tech-container">
          <img src={js} alt="javascript icon" className="tech__image" />
          <h2 className="tech__tech-title">JavaScript</h2>
        </div>
        <div className="tech__tech-container">
          <img src={react} alt="react icon" className="tech__image" />
          <h2 className="tech__tech-title">React</h2>
        </div>
        <div className="tech__tech-container">
          <img src={node} alt="node icon" className="tech__image" />
          <h2 className="tech__tech-title">Node</h2>
        </div>
        <div className="tech__tech-container">
          <img src={mysql} alt="mysql icon" className="tech__image" />
          <h2 className="tech__tech-title">MySQL</h2>
        </div>
        <div className="tech__tech-container">
          <img src={api} alt="api icon" className="tech__image" />
          <h2 className="tech__tech-title">API</h2>
        </div>
        <div className="tech__tech-container">
          <img src={heroku} alt="heroku icon" className="tech__image" />
          <h2 className="tech__tech-title">Heroku</h2>
        </div>
        <div className="tech__tech-container">
          <img src={express} alt="express icon" className="tech__image" />
          <h2 className="tech__tech-title">Express</h2>
        </div>
        <div className="tech__tech-container">
          <img src={netlify} alt="netlify icon" className="tech__image" />
          <h2 className="tech__tech-title">Netlify</h2>
        </div>
        <div className="tech__tech-container">
          <img src={github} alt="github icon" className="tech__image" />
          <h2 className="tech__tech-title">GitHub</h2>
        </div>
        <div className="tech__tech-container">
          <img src={oauth} alt="oauth icon" className="tech__image" />
          <h2 className="tech__tech-title">OAuth</h2>
        </div>
        <div className="tech__tech-container">
          <img src={knex} alt="knex icon" className="tech__image" />
          <h2 className="tech__tech-title">Knex</h2>
        </div>
        <div className="tech__tech-container">
          <img src={jwt} alt="jwt icon" className="tech__image" />
          <h2 className="tech__tech-title">Jwt</h2>
        </div>
      </article>
    </section>
  );
};

export default HomeTechnologies;
