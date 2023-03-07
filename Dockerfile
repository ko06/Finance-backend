FROM ubuntu:20.04
# Create app directory
RUN mkdir -p /usr/src/Finance-backends
WORKDIR /usr/src/Finance-backends
# Bundle app source
COPY . /usr/src/Finance-backends
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN  apt-get install -y build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev wget
RUN  apt-get  install -y nodejs

RUN  apt-get  install -y  npm  python3-pip  
RUN apt-get install python3-dev libmysqlclient-dev
RUN pip3 install mysqlclient
RUN python3 -m pip install Pillow
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8 
#Install python dependancies
RUN pip3 install -U wheel setuptools pip
RUN pip3 install pip-tools