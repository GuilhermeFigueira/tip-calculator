function App() {
	return (
		<div>
			<h1>
				SPLI
				<br />
				TTER
			</h1>
			<main>
				<div>
					<h2>Bill</h2>
					<div className="number_field">$ 0</div>
				</div>
				<div>
					<h2>Select Tip %</h2>
					<div>5% 10% 15% 25% 50% Custom</div>
				</div>
				<div>
					<h2>Number of People</h2>
					<div className="number_field"> 5</div>
				</div>
				<div>
					<div>
						<h3>Tip Amount</h3>
						<h4>/ person</h4>
						<div>$0,00</div>
					</div>
					<div>
						<h3>Total</h3>
						<h4>/ person</h4>
						<div>$0,00</div>
					</div>
					<button>Reset</button>
				</div>

				<div className="text-center pt-4">
					Challenge by{" "}
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a
						href="https://github.com/guilhermefigueira"
						target="_blank"
						className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg transition-all "
					>
						Guilherme Figueira
					</a>
					.
				</div>
			</main>
		</div>
	);
}

export default App;
