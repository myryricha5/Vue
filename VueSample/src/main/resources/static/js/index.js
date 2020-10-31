const app = new Vue({
	el: '#app',
	data: {
		isEnter: false,
		files: []
	},
	methods: {
		dragEnter() {
			console.log("enter drop area");
			this.isEnter = true;
		},
		dragLeave() {
			console.log("leave drop area");
			this.isEnter = false;
		},
		//ドロップエリアにいる間ずっと発火
		dragOver() {
			console.log("over drop area");
		},
		dropFile() {
			console.log("dropped file");
			console.log(event.dataTransfer.files);
			this.files = [...event.dataTransfer.files];

			//urlにバックエンドサーバのエンドポイントを設定する
			this.files.forEach(file => {
				let form = new FormData()
				form.append('file', file)
				axios.post('/top', form).then(response => {
					console.log(response.data)
				}).catch(error => {
					console.log(error)
				})
			})

			this.isEnter = false;
		},
		deleteFile(index) {
			this.files.splice(index, 1)
		},
		sendFile() {
			this.files.forEach(file => {
				let form = new FormData()
				form.append('file', file)
				axios.post('/top', form).then(response => {
					console.log(response.data)
				}).catch(error => {
					console.log(error)
				})
			})
		},
	}
})