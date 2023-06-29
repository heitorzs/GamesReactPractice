export default function ListItem(props) {
  return (
    <li>
      <a href={props.href}>
        <img src={props.imgUrl} alt={props.alt} />
      </a>
    </li>
  );
}
