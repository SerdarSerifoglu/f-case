import styles from "./Card.module.css";
import { cardTypes } from "../utils/statics";
import React from "react";

const Card = (data) => {
  const { mbid, type, name, image, listeners, playcount, author } = data;

  return (
    <React.Fragment key={mbid}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img src={image} alt="Girl in a jacket" />
        </div>
        <div className={styles.card__info}>
          {type === cardTypes.artist ? (
            <div className={styles.card__title}>Artist</div>
          ) : null}
          <div className={styles.card__name}>{name ?? null}</div>
          {type === cardTypes.album || type === cardTypes.track ? (
            <div className={styles.card__author}>{author ?? null}</div>
          ) : null}
        </div>
        <div className={styles.card__statistics}>
          {type === cardTypes.artist || type === cardTypes.track ? (
            <div className={styles.card__listenerscount}>
              {type === cardTypes.artist
                ? `listeners: ${listeners}`
                : `${listeners} listeners`}
            </div>
          ) : null}
          <div className={styles.card__playcount}>
            {type === cardTypes.artist
              ? `playcount: ${playcount}`
              : `${playcount} playcount`}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
