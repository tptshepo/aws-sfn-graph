.PHONY: deploy build set_version  

VERSION := $(shell node -p "require('./package.json').version")
NEW_VERSION := $(shell semver $(VERSION) -i patch)

set_version:
	npm --no-git-tag-version --allow-same-version version $(NEW_VERSION)

deploy: set_version
	npm publish	
	
.DEFAULT_GOAL := deploy