
export default function NetPost(props) {
  const { data } = props;
  const date = props.fake ? data.date.split("-") : '';

  const when = props.fake ? `${date[1]}/${date[2]}/${date[0]}` : props.data.date.format('L');

  return (<div className="network-post">
    <span className="post-body">{data.post}</span>
    <div>
      <span>{data.user}</span>
      <span>{when}</span>
    </div>
    <hr/>
  </div>);
}




