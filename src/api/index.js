import axios from "axios";
const url_templates = {
  metadata: (id) => `https://archive.org/metadata/${id}`,
  related: (id) => `https://be-api.us.archive.org/mds/v1/get_related/all/${id}`
};

export const fetchMetadata = (id) => {
  return axios.get(url_templates.metadata(id));
};

export const fetchRelated = (id) => {
  return axios.get(url_templates.related(id));
};
