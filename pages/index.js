import Head from "next/head";
import "primeicons/primeicons.css";
import styles from "../styles/Home.module.css";
import { Footer } from "./components/ui/footer";
import { Icon } from "./components/ui/icon";

export default function Home() {
	return (
		<>
			<Head>
				<title>meiazero | Emanuel Avila</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<Icon
					icon='pi pi-instagram'
					target='_blank'
					link='https://instagram.com/avila.ts'
					text='avila.ts'
				/>
				<Icon
					icon='pi pi-github'
					target='_blank'
					link='https://github.com/meiazero/?tab=repositories'
					text='meiazero'
				/>
				<Icon
					icon='pi pi-linkedin'
					target='_blank'
					link='https://www.linkedin.com/in/emanuel-cruz'
					text='Emanuel Avila'
				/>
			</div>
			<Footer />
		</>
	);
}