/**
 * アップロード用ロジック
 * jsフォルダ配下に、node_modules,package-lock.json,jquery-3.5.1.min.js配置必須
 */

const app = new Vue({
	el: '#app',
	data: {
		isEnter: false,
		files: []
	},
	methods: {
		//エリア内にドラッグされた瞬間のみ発火
		dragEnter() {
			console.log("enter drop area");
			this.isEnter = true;
		},
		//エリア内からエリア外に出た瞬間のみ発火
		dragLeave() {
			console.log("leave drop area");
			this.isEnter = false;
		},
		//ドロップエリアにいる間ずっと発火
		dragOver() {
			console.log("over drop area");
		},
		//ファイルドロップ時発火
		dropFile() {
			console.log("dropped file");
			//アップロードファイルを判定
			this.files = event.target.files ? event.target.files : event.dataTransfer.files;
			//１ファイルのみ送信
			let file = this.files.length > 0 ? this.files[0] : [];
			console.log(file);
			
			/*ここからはサーバ送信時に更新するよ〜*/
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
			
			/*ドロップされた瞬間、submitボタンを表示*/
			$('.update-button').removeClass("button-hide");
			this.isEnter = false;
		},
		//削除ボタン押下時発火
		deleteFile() {
			this.files = [];
			$('.update-button').addClass("button-hide");
		},
		//送信ボタン押下時発火（今後更新するよ〜）
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
