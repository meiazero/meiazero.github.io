import styles from "./Skill.module.css";

export default function Skill(props: any) {
	var msg = props.msg || "";
	var url = `https://img.shields.io/badge/-${msg}-${props.color}?logo=${props.icon}&logoColor=${props.logoColor}&style=for-the-badge`;

	return (
		<div className={styles.container}>
			<img src={url} alt={props.alt} title={props.title || msg} />
		</div>
	);
}
