import React from "react";
import DefinitionList from "./DefinitionList";
import { capitalize, sentenceFromParam } from "../functions/string";

const dictionary = {
  date: "Publication date",
  licenseurl: "Usage",
  subject: "Topics",
  sponsor: "Digitizing sponsor"
};

export default ({ terms, data }) => {
  const list = {};

  terms.forEach((term) => {
    const key = dictionary[term] || capitalize(sentenceFromParam(term));
    list[key] = data[term];
  });

  return <DefinitionList list={list} />
};
