import React from "react";
import category_data from "../data/electric_sheep";
import { Link } from "react-router-dom";

export default () => (
  <section id="list_view">
    <article>
      <h1>{category_data.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: category_data.description}} />
    </article>
    <ul>
      {category_data.items.map((item) => <li key={item}><Link to={`/details/${item}`}><img src={`https://archive.org/services/img/${item}`} alt={item} />{item}</Link></li>)}
    </ul>
  </section>
);
