import React, { Component } from "react";
import { fetchMetadata } from "../api/index";
import { Link } from "react-router-dom";
import MetadataList from "../components/MetadataList";
import VideoEmbed from "../components/VideoEmbed";
import Reviews from "../components/Reviews";
import RelatedContainer from "./Related";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id };

    fetchMetadata(props.id).then((res) => {
      this.setState(Object.assign({ id: props.id }, res.data));
    });
  }

  render() {
    if (!this.state.metadata) { return null; }
    const metadata = this.state.metadata,
          // filename = `${this.state.id}/${this.state.files[0].name.replace(/\.\w+$/, "")}`,
          attrs = ["date", "licenseurl", "topics", "publisher", "sponsor"];

    return (
      <>
        <section id="detail_view">
          <p id="breadcrumbs">
            <Link to="/">Back</Link>
          </p>
          <div id="stage">
            <VideoEmbed id={this.state.id} />
          </div>
          <article className="column">
            <h1>{metadata.title}</h1>
            <p>{metadata.description}</p>
            <MetadataList terms={attrs} data={metadata} />
          </article>
        </section>
        <RelatedContainer id={this.state.id} />
        <Reviews reviews={this.state.reviews} />
      </>
    );
  }
};

export default ({ match }) => (
  <Details id={match.params.id} />
);
