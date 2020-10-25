var app = new Vue({

	el: '#app',
	data: {
		message:'こんにちは、Vue.js！'
	}
});

var app2 = new Vue({

	el: '#app2',
	data: {
		message:'<h1>こんにちは</h1>' + '<span><a href="https://jp.vuejs.org/">Vue.js</a></span>'
	}
});

var app3= new Vue({

	el: '#app3',
	data: {
		url:'http://www.wings.msn.to/'
	}
});

var app4= new Vue({

	el: '#app4',
	data: {
		email:'Yamada@example.com'
	}
});

var app5= new Vue({

	el: '#app5',
	data: {
		email:'Yamada@example.com'
	},
	//emailプロパティの値を加工するlocalEmailメソッドを定義
	methods: {
		localEmail: function(){
			return this.email.split('@')[0].toLowerCase();
		}
	}
});

var app6= new Vue({

	el: '#app6',
	data: {
		current: new Date().toLocaleString()
	},
	computed: {
		//算出プロパティ経由で乱数を取得
		randomc: function() {
			return Math.random();
		}
	},
	methods: {
		//クリック時に処理を実行
		onclick: function(){
			this.current = new Date().toLocaleString();
		},
		//メソッド経由で乱数を取得
		randomm: function(){
			return Math.random();
		}
	}
});