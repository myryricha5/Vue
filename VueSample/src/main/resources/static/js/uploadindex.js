/**
 * アップロード用ロジック
 */

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
			this.files = event.target.files ? event.target.files : event.dataTransfer.files;
			//１ファイルのみ送信
			let file = this.files.length > 0 ? this.files[0] : [];
			console.log(file);
			
			//urlにバックエンドサーバのエンドポイントを設定する
			/* this.files.forEach(file => {*/
				let form = new FormData()
				/* if(this.files.length > 1){*/
					form.append('file', file);
				/* } else {
				 	form.append('file', file);
				 }
				 axios.post('/kocha-admin/movie', form).then(response => {
				 	console.log(response.data)
				 }).catch(error => {
				 	console.log(error)
				 })
			})*/
			$('.update-button').removeClass("button-hide");
			
			$('.movie-file-name').text(file.name);
			this.isEnter = false;
		},
		deleteFile() {
			this.files = [];
			$('.update-button').addClass("button-hide");
		},
		sendFile() {
			this.files.forEach(file => {
				let form = new FormData()
				form.append('file', file)
				axios.post('/kocha-admin/movie', form).then(response => {
					console.log(response.data)
				}).catch(error => {
					console.log(error)
				})
			})
		},
	}
});
