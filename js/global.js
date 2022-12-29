var code=""
function getCode(){
	var rs=""
	var nodeCode=$(".ace_line")
	for (let i = 0; i< nodeCode.length; i++) {
		if (nodeCode[i].classList.contains('ace_selected')){
			return rs
		}
		rs=rs+"\n"+nodeCode[i].innerText
	}
	return rs
}