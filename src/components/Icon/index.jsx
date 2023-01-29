import "./index.css";

export default function Icon(props) {
	return (
		<a href={props.link} target={props.target} className='iconContainer'>
			<i className={props.icon}></i>
			<p className='iconLabel'>{props.text}</p>
		</a>
	);
}

