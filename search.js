function filter() {
	let search = document.getElementById("search").value.toLowerCase();
	let listInner = document.getElementsByClassName("listInner");

	for (let i = 0; i < listInner.length; i++) {
		artist = listInner[i].getElementsByClassName("artist");
		title = listInner[i].getElementsByClassName("title");
		if (
			artist[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
			title[0].innerHTML.toLowerCase().indexOf(search) != -1
		) {
			listInner[i].style.display = "flex";
		} else {
			listInner[i].style.display = "none";
		}
	}
}
