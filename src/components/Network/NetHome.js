import React from "react";

import NetPost from "./NetPost.js";

export default function NetHome(props) {
  return (
    <section>
      {props.posts.map((obj, i) => <NetPost data={obj} key={i} />)}
      {props.fakePosts.map((obj, i) => <NetPost data={obj} fake={true} key={i} />)}
    </section>
  );
}