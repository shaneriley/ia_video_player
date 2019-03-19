import React from "react";

export default ({ list }) => {
  const terms = Object.keys(list).map((term, i) =>
    <React.Fragment key={i}>
      <dt>{term}</dt>
      <dd>{list[term]}</dd>
    </React.Fragment>
  );

  return <dl>{terms}</dl>
};
