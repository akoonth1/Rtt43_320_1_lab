export default function Content(props) {
    const { color, text } = props;
    return (<p style={{ color }}>{text}</p>);
}