module.exports = {
	configureWebpack: {
		resolve: {
			// extensions:[],  这里是配置后缀名省略
			alias: {
				 'assets' : '@/assets',
				 'common' : '@/common',
				 'components' : '@/components',
				 'network' : '@/network',
				 'views' : '@/views',
				
			}
		},
		// chainWebpack : config => {
		// 	resolve : {
		// 		alias :{
		// 			'vue' : 'vue.dist/vue.js',
		// 		}
		// 	}
		// }
	}
}