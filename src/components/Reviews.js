import React from "react";

const Review = ({ review }) => (
  <li>
    <article>
      <header>
        <h3>{review.reviewtitle}</h3>
        <div className="review_meta">
          <span className="reviewer">{review.reviewer}</span>
          <time dateTime={review.reviewdate}>{review.reviewdate}</time>
          <span className={`stars_${review.stars}`}></span>
        </div>
      </header>
      <p>{review.reviewbody}</p>
    </article>
  </li>
);

export default ({ reviews }) => (
  <div className="column" id="reviews">
    <h2>Reviews</h2>
    <ol>
      {reviews.map((review) => <Review review={review} key={review.reviewer} />)}
    </ol>
  </div>
);
