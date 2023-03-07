import { CurrencyDollar, User } from "phosphor-react";
import Percentage from "./components/Percentage";

function App() {
	return (
		<div className="grid grid-rows-[17%_1fr] h-screen">
			<h1 className="text-center m-auto text-2xl text-cyan-very_dark spacing tracking-[10px]">
				SPLI
				<br />
				TTER
			</h1>
			<main className="grid grid-flow-row">
				<div className="grid grid-flow-row gap-8">
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
						<div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-4 mt-2 transition-all">
							<Percentage value="5%">5%</Percentage>
							<Percentage value="10%">10%</Percentage>
							<Percentage value="15%">15%</Percentage>
							<Percentage value="25%">25%</Percentage>
							<Percentage value="50%">50%</Percentage>
							<Percentage value="" custom={true}>
								Custom
							</Percentage>
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
				</div>
				<div className="bg-cyan-very_dark p-4 rounded-xl">
					<div className="money">
						<div className="title">
							<h3>Tip Amount</h3>
							<h4>/ person</h4>
						</div>
						<span>$0,00</span>
					</div>
					<div className="money px-0">
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
						className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
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
