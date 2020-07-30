# UE Gonzu steps to setup services

## Services

- ## Traefik
    
    Traefik is a leading modern reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically

    |  Environment | Are example   |
    |:------------:|:----------------:|
    |   TLS_EMAIL  | lorem@ipsum.com  |
    |  TLS_DOMAIN  |    ipsum.com     |
    |   |   |
    |   |   |
    |   |   |

- ## Netdata

- ## Portainer

- ## Mongodb

- ## Gonzu Web

- ## Gonzu Api

## Create the volumes

# Steps to deploy

## [1] Attach folders to s3 bucket

1. Install s3fs

	`sudo apt install s3fs`

2. Save credential to .passwd-s3fs file

	`echo S3_ACCESS_KEY:S3_SECRET_ACCESS_KEY > .passwd-s3fs`

3. Set permissions to the file

	`sudo chmod 600 .passwd-s3fs`

4. Create folders /app/s3

    `mkdir /app/s3`

5. Connect S3 Bucket to folder /app/s3

	`sudo s3fs bucket-name /app/s3 -o passwd_file=.passwd-s3fs`

## [2] Setup environments

1. Copy .env.example to .env

    `cp .env.example .env`

2. Set up environment values in the file .env

    `nano .env`

## [3] Deploy to Production

1. Deploy services
    
    `docker-compose up -d`

Notes: 
  
  To inspect docker-compose services 

  `docker-compose ps`

  To run determinate docker-compose service 

  `docker-compose up -d service_name`