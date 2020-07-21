
## Create the network in bridge mode

- `docker network create --subnet 192.168.0.0/24 gonzu_bridge_network`

## [Prod] Create the dhparam key for nginx ssl connections

`openssl dhparam -out /app/certs/dhparam.pem 2048`

<!-- After that created the cert change the certname in nginx configs conf.d/ -->

## Create the volumes

The volumes was create in the pah ``/var/lib/docker/volumes/<volume-name>``


  - mongodb-gonzu:
    driver: local
    driver_opts:
      type: none
      device: /app/mongodb/data
      o: bind



  - web-gonzu:
    driver: local
    driver_opts:
      type: none
      device: /app/web
      o: bind



  - apiv1-public:
    driver: local
    driver_opts:
      type: none
      device: /app/api/v1/public



  - apiv1-temp:
    driver: local
    driver_opts:
      type: none
      device: /app/api/v1/temp
  
  
  
  - apiv1-cache:
    driver: local
    driver_opts:
      type: none
      device: /app/api/v1/cache
  
  
  
  - certbot-etc:
    driver: local
    driver_opts:
      type: none
      device: /app/certbot/etc
      o: bind
  
  
  
  - certbot-var:
    driver: local
    driver_opts:
      type: none
      device: /app/certbot/var
      o: bind
  
  
  
  - webroot:
    driver: local
    driver_opts:
      type: none
      device: /app/webroot
      o: bind

# Deploy to Production

1. Set environment database credential set in docker-compose.yaml

2. Set environment NODE_ENV to "production"

3. Create the dhparam key for nginx ssl connections

    `openssl dhparam -out /app/certs/dhparam.pem 2048`

4. Deploy container with docker compose command
    
    `docker-compose up -d`

Note: To deploy with docker swarm mode run:

  `docker stack deploy --compose-file docker-compose.yaml gonzu`
