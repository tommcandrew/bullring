/* eslint-disable import/prefer-default-export */
import fashionImages from "../assets/images/images";

export const getRandomImageUrl = () => fashionImages[Math.floor(Math.random() * 20)];
