import './css/index.css'


let testFunc = (str1, str2) => {
	return str1 + ',' + str2
}

let p = document.createElement('p');
p.innerHTML = "hello webpack," + testFunc('p1','p2');
p.setAttribute("id", "test");
document.body.appendChild(p);
