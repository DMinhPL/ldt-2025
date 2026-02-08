revision := $(shell git log | head -n 1 | cut -f 2 -d ' ')
sat_default_registry=registry.locroi.net:443
prod_default_registry=registry.locroi.net:443
default_version=latest
revision_version=$(revision)

ifndef domain
	domain=google.com
endif

ifndef env
	env=prod
endif

ifndef port
	port=80
endif

ifeq ($(env), stag)
	default_registry=$(sat_default_registry)
else
	default_registry=$(prod_default_registry)
endif
ifndef registry
	registry=$(default_registry)
endif

ifndef version
	version=$(default_version)
endif

image_name= $(shell echo $(service) | sed 's/\./_/g' | tr '[:upper:]' '[:lower:]')
ifndef service_name
	service_name=$(image_name)
endif

build:
ifdef service
	docker build  -t $(image_name)_runner:latest \
    		-f Dockerfile \
            --build-arg SERVICE=$(service) \
            --build-arg REVISION=$(revision) \
            --build-arg ENV=$(env) \
			--build-arg PLATFORM=$(platform) \
			--build-arg HCDIRANDFILE=$(hc-dir-file) \
			--build-arg PORT=$(port) \
            .
	echo $(image_name)_runner:latest
else
	echo "You have to use: make build service=nextg-mls"
endif


deploy: build
ifdef service
ifeq (prod, $(env))
	docker tag $(image_name)_runner:latest $(registry)/$(image_name)_runner:$(version)
	docker push $(registry)/$(image_name)_runner:$(version)

	docker tag $(image_name)_runner:latest $(registry)/$(image_name)_runner:$(revision_version)
	docker push $(registry)/$(image_name)_runner:$(revision_version)
endif
	docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(env)_runner:$(version)
	docker push $(registry)/$(image_name)_$(env)_runner:$(version)

	docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(env)_runner:$(revision_version)
	docker push $(registry)/$(image_name)_$(env)_runner:$(revision_version)
else
	echo "You have to use: make deploy service=ldt-cms"
endif

deploy-with-image-name-suffix: build
ifdef service
ifeq (prod, $(env))
	ifdef suffix
		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(suffix)_runner:$(version)
		docker push $(registry)/$(image_name)_$(suffix)_runner:$(version)

		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(suffix)_runner:$(revision_version)
		docker push $(registry)/$(image_name)_$(suffix)_runner:$(revision_version)
	endif
	else
		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_runner:$(version)
		docker push $(registry)/$(image_name)_runner:$(version)

		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_runner:$(revision_version)
		docker push $(registry)/$(image_name)_runner:$(revision_version)
	endif
	
endif
	ifdef suffix
		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(suffix)_$(env)_runner:$(version)
		docker push $(registry)/$($(image_name)_$(suffix)_$(env)_runner:$(version)

		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(suffix)_$(env)_runner:$(revision_version)
		docker push $(registry)/$(image_name)_$(suffix)_$(env)_runner:$(revision_version)
	endif
	else
		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(env)_runner:$(version)
		docker push $(registry)/$(image_name)_$(env)_runner:$(version)

		docker tag $(image_name)_runner:latest $(registry)/$(image_name)_$(env)_runner:$(revision_version)
		docker push $(registry)/$(image_name)_$(env)_runner:$(revision_version)
	endif
else
	echo "You have to use: make deploy service=ldt-cms"
endif
