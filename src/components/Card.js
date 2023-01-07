import styles from "./card.module.css";
import { cardTypes } from "../utils/statics";
import React from "react";

const Card = ({ data }) => {
  const { mbid, type, name, imageUrl, listeners, playcount, author } = data;

  if (type === cardTypes.artist) {
    return (
      <React.Fragment key={mbid}>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img src={imageUrl} alt={`${name} image`} />
          </div>
          <div className={styles.card__info}>
            <div className={styles.card__title}>Artist</div>
            <div className={styles.card__name}>{name ?? null}</div>
          </div>
          <div className={styles.card__statistics}>
            <div className={styles.card__listenerscount}>
              listeners: {listeners}
            </div>
            <div className={styles.card__playcount}>playcount: {playcount}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (type === cardTypes.album) {
    return (
      <React.Fragment key={mbid}>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img src={imageUrl} alt={`${name} image`} />
          </div>
          <div className={styles.card__info}>
            <div className={styles.card__name}>{name ?? null}</div>
            <div className={styles.card__author}>{author ?? null}</div>
          </div>
          <div className={styles.card__statistics}>
            <div className={styles.card__playcount}>{playcount} playcount</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (type === cardTypes.track) {
    return (
      <React.Fragment key={mbid}>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img src={imageUrl} alt={`${name} image`} />
          </div>
          <div className={styles.card__info}>
            <div className={styles.card__name}>{name ?? null}</div>
            <div className={styles.card__author}>{author ?? null}</div>
          </div>
          <div className={styles.card__statistics}>
            <div className={styles.card__listenerscount}>
              {listeners} listeners
            </div>

            <div className={styles.card__playcount}>{playcount} playcount</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (type === cardTypes.title) {
    return (
      <React.Fragment key={mbid}>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img src={imageUrl} alt={`${name} image`} />
          </div>
          <div className={styles.card__info}>
            <div className={styles.card__name}>{name ?? null}</div>
          </div>
          <div className={styles.card__statistics}></div>
        </div>
      </React.Fragment>
    );
  }
};

export default Card;
