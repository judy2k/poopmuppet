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
	cp $< $@

build/%.css: src/%.css
	cp $< $@

build/%.png: src/%.png
	cp $< $@

build/index.html: src/index.html
	cp $< $@

.PHONY: clean
clean:
	rm -rf build/*
