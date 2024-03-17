### Built by May

- pnpm create vite@latest builtbymay --tempplate react-ts

#### Notes

- make sure the domain is reachable : done
- built react project -> .js file
- create docker image using nginx ( tell nginx how to do routing)
- docker image that has my react project built and serves it up statically

built project and docker image: pnpm build
build docker image:

- for mac: docker build -t builtbymay .
- for pi: docker build --platform linux/arm64 -t builtbymay_arm64 .
  run docker image: docker run --rm -p 8000:80 builtbymay

---

create docker tarfile: docker save -o /Users/maykhine/Documents/Projects/builtByMay/builtbymay.tar builtbymay

docker save -o /Users/maykhine/Documents/Projects/builtByMay/builtbymay_arm64.tar bui
ltbymay_arm64

---

copy docker tarfile from mac to pi: scp builtbymay.tar may@10.0.0.156:/home/may/Documents/builtByMay

---

load docker tarfile to pi docker: sudo docker load -i builtbymay_arm64.tar

---

run the docker image on pi: sudo docker run --rm -p 8000:80 builtbymay_arm64
