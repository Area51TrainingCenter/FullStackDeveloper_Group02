const misRedes = {
	facebook: "https://facebook.com/s.hidalgo14",
	youtube: "https://youtube.com/sergiohidalgo",
	linkedin: "https://linkedin.com/profile/sergio"
}

const miFacebook = misRedes.facebook
const miYoutube = misRedes.youtube
const miLinkedin = misRedes.linkedin

const tusRedes = {
	instagram: "https://instagram.com/tuyo",
	facebook: "https://facebook.com/tuyo",
	linkedin: "https://linkedin.com/tuyo",
	google: "https://googleplus.com/tuyo"
}

const tuInstragram = tusRedes.instagram
const tuFacebook = tusRedes.facebook
const tuLinkedin = tusRedes.linkedin
const tuGoogle = tusRedes.google

const redesSociales = {
	"-38893jjdjdjdd": {
		facebook: "https://facebook.com/s.hidalgo14",
		youtube: "https://youtube.com/sergiohidalgo",
		linkedin: "https://linkedin.com/profile/sergio"
	},
	"-3jjfkfkmkdhdj": {
		instagram: "https://instagram.com/tuyo",
		facebook: "https://facebook.com/tuyo",
		linkedin: "https://linkedin.com/tuyo",
		google: "https://googleplus.com/tuyo"
	}
}

for(let redes in redesSociales){
	// const rs = redesSociales[redes]
	const {facebook="no tiene", youtube="no tiene", linkedin="no tiene", instagram="no tiene", google="no tiene"} = redesSociales[redes]
	console.log("facebook", facebook)
	console.log("youtube", youtube)
	console.log("linkedin", linkedin)
	console.log("instagram", instagram)
	console.log("google", google)
}
console.log(misRedes.google)
console.log(misRedes.facebook.length)
console.log(misRedes.facebook.longitud)
// console.log(misRedes.google.length)


