//Messages Post-Round & Post-Game
//Post-Round
const roundComments = document.querySelectorAll('.comments')
const victoryMsg = document.getElementById('victoryMsg')
const defeatMsg = document.getElementById('defeatMsg')
const drawMsg = document.getElementById('drawMsg')
//Post-Game
const gameVictoryMsg = document.getElementById('gameVictoryMsg')
const gameDefeatMsg = document.getElementById('gameDefeatMsg')
//Annonce
const roundAnnouncement = document.getElementById('roundAnnouncement')
const comment = document.getElementById('comment')
//Boutons Restart
const restartBtn = document.getElementById('restart')
const restartBtn2 = document.getElementById('restart2')
//Ensemble des boutons
const tripleBtn = document.getElementById('fightOrDie')
let choiceSelf
let choiceCpu = ''
//compteurs de défaites
let defeatCounterSelf = 0
let defeatCounterCpu = 0
//Barres de vie
const barSelfFull = document.getElementById('barSelfFull')
const barSelfTwoThird = document.getElementById('barSelfTwoThird')
const barSelfOneThird = document.getElementById('barSelfOneThird')
const barSelfEmpty = document.getElementById('barSelfEmpty')
//Gestes : div & img
const gestureP1Div = document.getElementById('gestureP1')
const gestureCpuDiv = document.getElementById('gestureCpu')
//===================
// "Choix" CPU ======
//===================
let cpuChoose = () => {
	const choice = ['rock', 'paper', 'scissors']
	let randomInt = Math.floor(Math.random() * 3)
	choiceCpu = choice[randomInt]
	if (choiceCpu == 'rock') {
		cpuRockGesture()
	} else if (choiceCpu == 'paper') {
		cpuPaperGesture()
	} else if (choiceCpu == 'scissors') {
		cpuScissorsGesture()
	}
}
//==============Verification======================
//===conditions de victoire, défaite & égalité====
//================================================
let result
const compare = () => {
	switch (true) {
		case choiceSelf == 'scissors' && choiceCpu == 'rock':
			result = 'defeat'
			defeatCounterSelf += 1
			defeatMsg.classList.remove('hidden')
			break
		case choiceSelf == 'scissors' && choiceCpu == 'paper':
			result = 'victory'
			defeatCounterCpu += 1
			victoryMsg.classList.remove('hidden')
			break
		case choiceSelf == choiceCpu:
			result = 'draw'
			drawMsg.classList.remove('hidden')
			break
		case choiceSelf == 'rock' && choiceCpu == 'paper':
			result = 'defeat'
			defeatCounterSelf += 1
			defeatMsg.classList.remove('hidden')
			break
		case choiceSelf == 'rock' && choiceCpu == 'scissors':
			result = 'victory'
			defeatCounterCpu += 1
			victoryMsg.classList.remove('hidden')
			break
		case choiceSelf == 'paper' && choiceCpu == 'rock':
			result = 'victory'
			defeatCounterCpu += 1
			victoryMsg.classList.remove('hidden')
			break
		case choiceSelf == 'paper' && choiceCpu == 'scissors':
			result = 'defeat'
			defeatCounterSelf += 1
			defeatMsg.classList.remove('hidden')
			break
		default:
			console.log('Erreur dans compare()')
			break
	}
}
//Compteurs de défaites, HealthBars, Game Over
//humain
const P1HealthBar = () => {
	switch (true) {
		case defeatCounterSelf == 0:
			barSelfFull.classList.remove('hidden')
			break
		case defeatCounterSelf == 1:
			barSelfFull.classList.add('hidden')
			barSelfTwoThird.classList.remove('hidden')
			break
		case defeatCounterSelf == 2:
			barSelfTwoThird.classList.add('hidden')
			barSelfOneThird.classList.remove('hidden')
			break
		case defeatCounterSelf == 3:
			barSelfOneThird.classList.add('hidden')
			barSelfEmpty.classList.remove('hidden')
			cleanComments()
			gameDefeatMsg.classList.remove('hidden')
			tripleBtn.classList.add('hidden')
			break
		default:
			console.log('Erreur dans defeatCounterSelf()')
	}
}
//CPU
const CpuHealthBar = () => {
	switch (true) {
		case defeatCounterCpu == 0:
			barCpuFull.classList.remove('hidden')
			break
		case defeatCounterCpu == 1:
			barCpuFull.classList.add('hidden')
			barCpuTwoThird.classList.remove('hidden')
			break
		case defeatCounterCpu == 2:
			barCpuTwoThird.classList.add('hidden')
			barCpuOneThird.classList.remove('hidden')
			break
		case defeatCounterCpu == 3:
			barCpuOneThird.classList.add('hidden')
			barCpuEmpty.classList.remove('hidden')
			cleanComments()
			gameVictoryMsg.classList.remove('hidden')
			tripleBtn.classList.add('hidden')
			break
		default:
			console.log('Erreur dans defeatCounterSelf()')
	}
}
//Effacement des Round Comments
const cleanComments = () => {
	roundComments.forEach((roundComment) => {
		roundComment.classList.add('hidden')
	})
}
//Ecouteurs clic
restartBtn.addEventListener('click', () => {
	location.reload()
})
restartBtn2.addEventListener('click', () => {
	location.reload()
})
//Injection HTML Geste
//Player ONE
const p1PaperGesture = () => {
	gestureP1Div.innerHTML = ''
	let html = `<img class="gestureImg" id="GestureP1Img" src="/assets/img/gestures/p1Paper.png"/>`
	gestureP1Div.innerHTML += html
	setTimeout(() => {
		GestureP1Img.style.transform = 'translateX(1px)'
	}, 300)
}
const p1RockGesture = () => {
	gestureP1Div.innerHTML = ''
	let html = `<img class="gestureImg" id="GestureP1Img" src="/assets/img/gestures/p1Rock.png"/>`
	gestureP1Div.innerHTML += html
	setTimeout(() => {
		GestureP1Img.style.transform = 'translateX(1px)'
	}, 300)
}
const p1ScissorsGesture = () => {
	gestureP1Div.innerHTML = ''
	let html = `<img class="gestureImg" id="GestureP1Img" src="/assets/img/gestures/p1Scissors.png"/>`
	gestureP1Div.innerHTML += html
	setTimeout(() => {
		GestureP1Img.style.transform = 'translateX(1px)'
	}, 300)
}
//===============================
//=========CPU Player============
//===============================
const cpuPaperGesture = () => {
	gestureCpuDiv.innerHTML = ''
	let html = `<img class="gestureImgCpu" id="GestureCpuImg" src="/assets/img/gestures/cpuPaper.png"/>`
	gestureCpuDiv.innerHTML += html
	setTimeout(() => {
		GestureCpuImg.style.transform = 'translateX(-1px)'
	}, 300)
}
const cpuRockGesture = () => {
	gestureCpuDiv.innerHTML = ''
	let html = `<img class="gestureImgCpu" id="GestureCpuImg" src="/assets/img/gestures/cpuRock.png"/>`
	gestureCpuDiv.innerHTML += html
	setTimeout(() => {
		GestureCpuImg.style.transform = 'translateX(-1px)'
	}, 300)
}
const cpuScissorsGesture = () => {
	gestureCpuDiv.innerHTML = ''
	let html = `<img class="gestureImgCpu" id="GestureCpuImg" src="/assets/img/gestures/cpuScissors.png"/>`
	gestureCpuDiv.innerHTML += html
	setTimeout(() => {
		GestureCpuImg.style.transform = 'translateX(-1px)'
	}, 300)
}
//Retrait Geste
const cleanGestures = () => {}
//fonction globale à executer au clic (avec délai)
const mainFcn = () => {
	cleanComments()
	compare()
	P1HealthBar()
	CpuHealthBar()
}
const gestureFcn = () => {
	cleanGestures()
	cpuChoose()
	cleanComments()
}
//LANCEMENT FONCTIONS AU CLIC
paperBtn.addEventListener('click', () => {
	choiceSelf = 'paper'
	gestureFcn()
	p1PaperGesture()
	setTimeout(mainFcn, 2000)
})
rockBtn.addEventListener('click', () => {
	choiceSelf = 'rock'
	gestureFcn()
	p1RockGesture()
	setTimeout(mainFcn, 1000)
})
scissorsBtn.addEventListener('click', () => {
	choiceSelf = 'scissors'
	gestureFcn()
	p1ScissorsGesture()
	setTimeout(mainFcn, 1000)
})
