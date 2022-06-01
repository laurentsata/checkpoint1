
/*const clikAvatar = document.querySelector(".toto");

clikAvatar.addEventListener("click", function(){
    clikAvatar.src = ("./image/avatar-bis.png");
});*/

const changeColor = function () {

	const elementsToChange = document.getElementsById('myName');
	
	for ( let i = 0; i < elementsToChange.length; i++ ) {
	
		elementsToChange[i].classList.add('.change');
	
	}

};
