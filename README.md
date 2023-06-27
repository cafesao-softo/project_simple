Command run docker compose

`docker compose -f ./docker/docker-compose.yml --env-file ./.env up --build --remove-orphans -d`

Encrypt: `gpg -c -a --cipher-algo AES256 .env`
Decrypt: `gpg -d -a -o .env .env.asc`
