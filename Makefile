JS_TARGETS := $(patsubst src/%,build/%,$(wildcard src/*.js))
CSS_TARGETS := $(patsubst src/%,build/%,$(wildcard src/*.css))
PNG_TARGETS := $(patsubst src/%,build/%,$(wildcard src/*.png))

TARGETS := $(JS_TARGETS) $(CSS_TARGETS) $(PNG_TARGETS)

.PHONY: all
all: _build

.PHONY: _build
_build: build build/index.html $(TARGETS)

build:
	mkdir build

build/%.js: src/%.js
	uglifyjs $< --compress --mangle --output $@

build/%.css: src/%.css
	cssnano < $< > $@

build/%.png: src/%.png
	cp $< $@

build/index.html: src/index.html
	html-minifier --html5 --minify-js --collapse-whitespace --output $@ $<

.PHONY: clean
clean:
	rm -rf build/*
