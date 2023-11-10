//* Rader
for (let i = 0; i < 5; i++) {
	const h3El = document.createElement("h3");
	document.body.appendChild(h3El);
	h3El.innerText = "Rad" + (i + 1);
	document.body.style.textAlign = "center";
	h3El.style.color = "blue";
	h3El.style.fontSize = (i + 1) * 10 + "px";
	const hue = 120 + i * 15;
	h3El.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
}

//* Div med flex o border
const diven = document.createElement("div");
document.body.appendChild(diven);
diven.style.display = "flex";
diven.style.justifyContent = "space-evenly";
diven.style.border = "1px  solid black";

//* div med p taggar
for (let i = 0; i < 3; i++) {
	const divtag = document.createElement("div");
	diven.appendChild(divtag);
	divtag.style.display = "flex";
	divtag.style.flexFlow = "column nowrap";
	divtag.style.width = "35px";
	divtag.style.height = "fit-content";
	divtag.style.border = "5px solid purple";
	divtag.style.padding = "20px";
	divtag.style.margin = "10px";
	divtag.style.backgroundColor = "purple";

	let siffror = [
		"ett",
		"två",
		"tre",
		"fyra",
		"fem",
		"sex",
		"sju",
		"åtta",
		"nio",
		"tio",
	];
	//! Left
	if (i == 0) {
		for (let j = 0; j < 10; j++) {
			let pEl = document.createElement("p");
			divtag.appendChild(pEl);
			pEl.innerText = j;
			pEl.style.textAlign = "start";
			pEl.style.margin = "0";

			if (j % 2 == 0) {
				pEl.style.backgroundColor = "black";
				pEl.style.color = "white";
				if (j == 4) {
					pEl.style.backgroundColor = "purple";
					pEl.style.color = "white";
				}
			} else {
				pEl.style.backgroundColor = "white";
			}
		}
	}
	// ! Middle
	else if (i == 1)
		for (let j = 10; j > 0; j--) {
			let pEl = document.createElement("p");
			divtag.appendChild(pEl);
			pEl.innerText = j - 1;
			pEl.style.margin = "0";
			if (j % 2 == 1) {
				pEl.style.backgroundColor = "black";
				pEl.style.color = "white";
				// !!!!
			} else {
				pEl.style.backgroundColor = "white";
			}
			if (j == 9) {
				pEl.style.backgroundColor = "purple";
				pEl.style.color = "white";
			}
		}
	// ! Right
	else {
		for (let j = 0; j < 10; j++) {
			let pEl = document.createElement("p");
			divtag.appendChild(pEl);
			pEl.innerText = siffror[j];
			pEl.style.textAlign = "end";
			pEl.style.margin = "0";
			if (j % 2 == 0) {
				pEl.style.backgroundColor = "black";
				pEl.style.color = "white";
			} else {
				pEl.style.backgroundColor = "white";
			}

			// !!!!
			if (j == 5) {
				pEl.style.backgroundColor = "purple";
				pEl.style.color = "white";
			}
		}
	}
}
