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
	cd js-code && jest `pwd`

py-test: prelude
	cd py-code && python -m pytest `pwd` --junitxml=../test-results/py-code/junit.xml

cy-test: prelude
	cd cal-app && cypress run ./cypress

test-something: prelude
	cd e2e-test/test-something && xvfb-runner.sh npx wdio abdd.js

unit-test: js-test py-test

int-test: install start cy-test stop

e2e-test: install start test-something stop

test: unit-test

test-all: unit-test int-test e2e-test