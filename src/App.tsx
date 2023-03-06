import { CurrencyDollar, User } from "phosphor-react";

function App() {
	return (
		<div className="grid grid-rows-[10%_1fr] h-screen">
			<h1>
				SPLI
				<br />
				TTER
			</h1>
			<main>
				<div>
					<h2>Bill</h2>
					<div className="number_field">
						<CurrencyDollar
							size={18}
							className="text-cyan-gray"
							weight="bold"
						/>
						<span>0</span>
					</div>
				</div>
				<div>
					<h2>Select Tip %</h2>
					<div>
						<Percentage>5%</Percentage>
						<Percentage>10%</Percentage>
						<Percentage>15%</Percentage>
						<Percentage>25%</Percentage>
						<Percentage>50%</Percentage>
						<Percentage>Custom</Percentage>
					</div>
				</div>
				<div>
					<h2>Number of People</h2>
					<div className="number_field">
						<User
							size={18}
							className="text-cyan-gray"
							weight="fill"
						/>
						<span>5</span>
					</div>
				</div>
				<div className="bg-cyan-very_dark p-4 rounded-xl">
					<div className="money">
						<div className="title">
							<h3>Tip Amount</h3>
							<h4>/ person</h4>
						</div>
						<span>$0,00</span>
					</div>
					<div className="money">
						<div className="title">
							<h3>Total</h3>
							<h4>/ person</h4>
						</div>
						<span>$0,00</span>
					</div>
					<button className="bg-cyan-strong text-cyan-very_dark w-full rounded-sm">
						RESET
					</button>
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
