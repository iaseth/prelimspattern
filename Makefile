
default: export

export:
	npm run build
	npm run export

deploy:
	netlify deploy --prod
