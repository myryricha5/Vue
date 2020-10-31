var app = new Vue({

	el:'#app',
	data:{
		message:''
	},
	methods: {
		onclick: function(){
			this.message = new Date().toLocaleString();
		}
	}
});

var app2 = new Vue({

	el:'#app2',
	data:{
		message:''
	},
	methods: {
		onclick: function(hoge){
			this.message = new Date().toLocaleString()+hoge;
		}
	}
});

var app3 = new Vue({

	el:'#app3',
	data:{
		message:''
	},
	methods: {
		onclick: function(){
			this.message = new Date().toLocaleString();
		}
	}
});

var app4 = new Vue({

	el:'#app4',
	methods: {
		onclick: function(e) {
		console.log(e);
		}
	}
});