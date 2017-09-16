const obj = new XMLHttpRequest()

obj.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		console.table(JSON.parse(this.responseText))
	}
}

obj.open("get", "http://javascript.tibajodemanda.com/listar",true)
obj.send()