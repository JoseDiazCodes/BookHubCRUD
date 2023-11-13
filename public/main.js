var check = document.getElementsByClassName("fa-check")
var trash = document.getElementsByClassName("fa-trash")
// added this
var inProgress = document.getElementsByClassName("in-progress")

// Event listener for the 'in progress' icon
Array.from(inProgress).forEach(function (element) {
	element.addEventListener("click", function () {
		const title = this.parentNode.parentNode.childNodes[1].innerText
		const inProgressState =
			this.parentNode.parentNode.classList.contains("in-progress-state")
		fetch("/inprogress", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title: title,
				inProgress: !inProgressState,
			}),
		})
			.then((response) => {
				if (response.ok) return response.json()
			})
			.then((data) => {
				console.log(data)
				window.location.reload(true)
			})
	})
})

//

Array.from(check).forEach(function (element) {
	element.addEventListener("click", function () {
		const title = this.parentNode.parentNode.childNodes[1].innerText
		const completed = this.parentNode.parentNode.classList.contains("completed")
		fetch("books", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title: title,
				completed: !completed,
			}),
		})
			.then((response) => {
				if (response.ok) return response.json()
			})
			.then((data) => {
				console.log(data)
				window.location.reload(true)
			})
	})
})

Array.from(trash).forEach(function (element) {
	element.addEventListener("click", function () {
		const title = this.parentNode.parentNode.childNodes[1].innerText
		fetch("books", {
			method: "delete",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title: title,
			}),
		}).then((response) => {
			window.location.reload()
		})
	})
})
