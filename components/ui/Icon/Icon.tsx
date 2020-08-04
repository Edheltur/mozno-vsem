import React from "react";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faTimes);

config.autoAddCss = false;

export const Icon = FontAwesomeIcon;
