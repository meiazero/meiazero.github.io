import Head from "next/head";
import styles from "styles/Home.module.css";
import Footer from "./components/Footer/Footer";
import Skill from "./components/Skill/Skill";

export default function Home() {
	return (
		<>
			<Head>
				<title>meiazero | Emanuel</title>
				<link
					rel='shortcut icon'
					href='avatar.ico'
					type='image/x-icon'
				/>
			</Head>

			<div className={styles.container} id='app'>
				<div className={styles.message}>
					<h1 className={styles.title}>👋 Hi!</h1>{" "}
					<span className={styles.subtitle}>I'm Emanuel,</span>
				</div>

				<div className={styles.about}>
					<div className={styles.title}>🚀 About me:</div>
					<p>
						{" "}
						I'm a student of Information Security at the Federal
						University of Ceará - UFC. I'm passionate about
						technology and I'm always looking for new challenges.
					</p>
				</div>
				<div className={styles.dev}>
					<div className={styles.title}>💻 Technologies:</div>
					<div className={styles.stack}>
						<div className={styles.group}>
							<Skill
								msg='HTML'
								color='ff5722'
								icon='html5'
								logoColor='fff'
							/>
							<Skill
								msg='CSS'
								color='2196f3'
								icon='css3'
								logoColor='fff'
							/>
							<Skill
								msg='JavaScript'
								color='ffeb3b'
								icon='javascript'
								logoColor='212529'
							/>
							<Skill
								msg='React'
								color='212529'
								icon='react'
								logoColor='61dafb'
							/>
						</div>

						<div className={styles.group}>
							<Skill
								color='212529'
								icon='c'
								logoColor='fff'
								title='C'
							/>
							<Skill
								msg='Python'
								color='212529'
								icon='python'
								logoColor='336d9d'
							/>
							<Skill
								msg='Bash'
								color='fff'
								icon='gnu-bash'
								logoColor='2d3a3e'
							/>
						</div>
						<div className={styles.group}>
							<Skill
								msg='Linux'
								color='fff'
								icon='linux'
								logoColor='212529'
							/>
							<Skill
								msg='Git'
								color='212529'
								icon='git'
								logoColor='f05032'
							/>
							<Skill
								msg='Docker'
								color='212529'
								icon='docker'
								logoColor='2496ed'
							/>
						</div>
					</div>
				</div>
				<div className={styles.contact}>
					<div className={styles.title}>📬 Contact me:</div>
					<div className={styles.social}>
						<a href='#' target='_blank' rel='noopener noreferrer'>
							<Skill
								msg='Linkedin'
								color='0077b5'
								icon='linkedin'
								logoColor='fff'
							/>
						</a>
						<a href='#' target='_blank' rel='noopener noreferrer'>
							<Skill
								msg='Gmail'
								color='b23121'
								icon='gmail'
								logoColor='fff'
							/>
						</a>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
