#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <userPaluzer> <pi_ip_address>"
    exit 1
fi

# PI IP 
USER="$1"
PI_IP="$2"

#build docker image for pi 
echo 'Building docker image for pi'
docker build --platform linux/arm64 -t builtbymay_arm64 .
 
#create docker tar file 
echo 'Building docker tar file'
docker save -o ./builtbymay_arm64.tar builtbymay_arm64

#load docker tar file to pi 
echo 'Load docker tar file to pi'
scp ./builtbymay_arm64.tar $USER@$PI_IP:~/Documents

#ssh into pi 
echo 'SSH into pi'
ssh $USER@$PI_IP << EOF 
  sudo docker load -i ~/Documents/builtbymay_arm64.tar

  #check if docker container is already running
  if sudo docker ps -a --format '{{.Names}}' | grep -q "^builtbymaycontainer$"; then
    echo "Container already running. Stopping .."
    sudo docker stop builtbymaycontainer
    sudo docker rm builtbymaycontainer
  fi
  echo "Done loading image"
  sudo docker run -d -p 8000:80 --name builtbymaycontainer builtbymay_arm64
EOF

echo 'Done'