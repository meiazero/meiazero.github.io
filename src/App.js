import  "./App.css";
import "primeicons/primeicons.css";
import Icon from "./components/Icon";
import Footer from "./components/Footer";
import { HeadProvider, Title } from "react-head";

function App() {
	return (
		<>
			<HeadProvider>
				<Title>Meiazero | Emanuel Avila</Title>
				<div className='main'>
					<Icon
						link='https://instagram.com/avila.ts'
						icon='pi pi-instagram'
						target='_blank'
						text='avila.ts'
					/>
					<Icon
						link='https://github.com/meiazero/?tab=repositories'
						icon='pi pi-github'
						target='_blank'
						text='meiazero'
					/>
					<Icon
						link='https://linkedin.com/in/emanuel-cruz'
						icon='pi pi-linkedin'
						target='_blank'
						text='Emanuel Avila'
					/>
				</div>
				<Footer />
			</HeadProvider>
		</>
	);
}

export default App;
