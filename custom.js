var xhr = new XMLHttpRequest(); //Create XMLHttpRequest Object
var button

xhr.onload = function() {
	if (xhr.status === 200) { //If the server is ok
		responseObject = JSON.parse(xhr.responseText)

		//Build up string with new content
		var newContent = ''
		for (var i= 0; i < responseObject.artists.length; i++) {
			newContent += '<div>'
			newContent += '<img src="' + responseObject.artists[i].work + '" '
			newContent += 'alt="' + + responseObject.artists[i].title + '">'
			newContent += '<p><strong>' + responseObject.artists[i].name + '</strong><br>'
			newContent += responseObject.artists[i].title + '<br><span>'
			newContent += responseObject.artists[i].medium + '</span></p>'
			newContent += '</div>'
		}
		document.querySelector('#content').innerHTML= newContent
	}
}

button = document.querySelector('.show')

button.addEventListener('click', function(){
	xhr.open('GET', 'data.json')
	xhr.send()
})





