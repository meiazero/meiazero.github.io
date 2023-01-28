import React from "react";
import styles from "../../../styles/Icon.module.css";

export function Icon(props) {
	return (
		<a href={props.link} target={props.target} className={styles.container}>
			<i className={props.icon}></i>
			<p className={styles.label}>{props.text}</p>
		</a>
	);
}