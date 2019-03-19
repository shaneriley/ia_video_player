export function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
}

export function sentenceFromParam(str) {
  return str.replace(/_/g, " ");
}
