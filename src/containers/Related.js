import React, { Component } from "react";
import { fetchRelated } from "../api/index";
import { Link } from "react-router-dom";
import MetadataList from "../components/MetadataList";
import Slider from "react-slick";

const attrs = ["title", "description", "reviews", "downloads"];

const RelatedSlider = ({ results }) => {
  const options = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (<Slider {...options }>
    {results.map((result) => <Result key={result._id} result={result._source} id={result._id} />)}
  </Slider>);
};

const Result = ({ result, id }) => (
  <div>
    <Link to={`/details/${id}`}><img src={`https://archive.org/services/img/${id}`} alt={id} />
      <h3>{result.title}</h3>
    </Link>
    <p>{result.description}</p>
    <MetadataList terms={attrs} data={result} />
  </div>
);

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = { hits: [], id: props.id };

    fetchRelated(props.id).then((res) => {
      const flatten = (v) => Array.isArray(v) && v.length === 1 ? v[0] : v;

      res.data.hits.hits.forEach((hit) => {
        Object.keys(hit._source).forEach((k) => hit._source[k] = flatten(hit._source[k]));
      });
      this.setState(Object.assign({ id: props.id }, res.data.hits));
    });
  }

  render() {
    const results = this.state.hits;

    if (!results.length) { return null; }

    return (
      <div className="column" id="related">
        <h2>Related items to {this.state.id}</h2>
        <RelatedSlider results={results} />
      </div>
    );
  }
};

export default Related;
