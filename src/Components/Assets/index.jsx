export default function Asset(props) {
  return (
    <article>
      <span>{props.children}</span>
      <span>TICK</span>
      <span>$3.12</span>
    </article>
  );
}
