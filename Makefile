compose_dev_up:
	docker-compose -f docker-compose.dev.yml up -d --build

compose_dev_down:
	docker-compose -f docker-compose.dev.yml down


compose_prod_up:
	docker-compose -f docker-compose.prod.yml up -d --build

compose_prod_down:
	docker-compose -f docker-compose.prod.yml down