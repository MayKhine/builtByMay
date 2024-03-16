### Built by May

- pnpm create vite@latest builtbymay --tempplate react-ts

#### Notes

- make sure the domain is reachable : done
- built react project -> .js file
- create docker image using nginx ( tell nginx how to do routing)
- docker image that has my react project built and serves it up statically

built project and docker image: pnpm build
build docker image: docker build -t builtbymay .
run docker image: docker run --rm -p 8000:80 builtbymay
