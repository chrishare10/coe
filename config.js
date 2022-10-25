module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 3000
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/css", 
			js: "./src/js",
			img: "./src/img"
		},
		dist: {
			base: "./dist/web/assets",
			css: "./dist/web/assets/css",
			js: "./dist/web/assets/js",
			img: "./dist/web/assets/img"
		},
		build: {
			base: "./build/web/assets",
			css: "./build/web/assets/css",
			js: "./build/web/assets/js",
			img: "./build/web/assets/img"
		}
	}
}