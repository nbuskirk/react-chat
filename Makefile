all: deps static

deps:
	npm install

static:
	webpack

watch:
	webpack --watch

