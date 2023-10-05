import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid">
		<div className="center">
			<h1>
				Rodrigo's Portfolio
			</h1>
			<div>
				<h3 className="my-logo">
					My github
				</h3>
			</div>
			<div className="row">
				<div className="card book1">
					<div className="imgBox">
						<img src="https://media.istockphoto.com/id/1341097772/pl/wektor/p%C5%82ywaj%C4%85cy-astronauta-cute-cartoon-creative-logo-design-maskotka-ilustracja.jpg?s=612x612&w=0&k=20&c=2S72l06DXB8Ycmk3PBt-546NTD-R1UTQBtF6FxM2Pa8=" alt=""/>
					</div>
					<div className="details">
						<h2>lorem ipsum dolor</h2>
						<p>dfasjl lk;jds jl;sdaf hjdsfjdsa ghfu j asdfuju ,klpds pe posd ur dhqeryt eyop  ads  oep pfghdm,ntic jrpvcnj dfh eklfnsk r dieu pw ehdg swuewq whr ekkshq pfb v,m ertuk b eu e kwre i t   q m ei er wr efg efbdfeoi  cbxgkr ,rikugh dsk bvckjgry kfbd,vbkugsbn,sdvksghksvb us y bvkur iur jcxgiur kuryt rktry ktrut dsbvskt hrsut strksbfskfgs </p>
					</div>
				</div>
				<div className="container">
					<a className="icon-container" href="https://github.com/Rodrigou0" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="240" height="240">
						<defs>
							<linearGradient id="gh-mark-grad" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="5%" stop-color="#a838bb" />
							<stop offset="80%" stop-color="#51287c" />
							</linearGradient>
						</defs>
					<path className="gh-mark" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
					</svg>
					</a>
				</div>
				<div className="card book2">
					<div className="imgBox">
						<img src="https://st2.depositphotos.com/11133046/47596/v/450/depositphotos_475965304-stock-illustration-moon-logo-design-crescent-above.jpg" alt=""/>
					</div>
					<div className="details">
						<h2>lorem ipsum dolor</h2>
						<p>dfasjl lk;jds jl;sdaf hjdsfjdsa ghfu j asdfuju ,klpds pe posd ur dhqeryt eyop  ads  oep pfghdm,ntic jrpvcnj dfh eklfnsk r dieu pw ehdg swuewq whr ekkshq pfb v,m ertuk b eu e kwre i t   q m ei er wr efg efbdfeoi  cbxgkr ,rikugh dsk bvckjgry kfbd,vbkugsbn,sdvksghksvb us y bvkur iur jcxgiur kuryt rktry ktrut dsbvskt hrsut strksbfskfgs </p>
					</div>
				</div>
			</div>
		</div>
		<div className="bg text-center">
			<h1 className="up text">Hello Rigo!</h1>
			<section>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</section>
			<div className="row">
				<div className="card2 col-6">
					<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
				<div className="card2 col-6">
					<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
