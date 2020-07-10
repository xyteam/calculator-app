SHELL := /bin/bash

prelude:
	cd ~/Projects/AutoBDD && . .autoPathrc.sh

install: prelude
	cd cal-app && npm install

start:
	cd cal-app && npm start

stop:
	cd cal-app && npm stop

js-test: prelude
	jest --verbose ${PWD}/js-code

py-test: prelude
	python -m pytest ${PWD}/py-code

cy-test: prelude start
	cd cal-app && cypress run ./cypress

e2e-test: prelude start
	cd e2e-test/test-something && xvfb-runner.sh npx wdio abdd.js

unit-test: js-test py-test

int-test: cy-test

test: unit-test

test-all: unit-test int-test e2e-test