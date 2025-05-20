import React from 'react';

import NetPost from "./NetPost.js";

export default function NetProfile(props) {
  return (
    <section>
      <h1>Your Posts</h1>
      {props.posts.length > 0 ? props.posts.map((obj, i) => <NetPost data={obj} key={i} />) : <span>You haven't posted yet</span>}
    </section>
  );
}