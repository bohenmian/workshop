# Setup

Goals: Setup docker to run on local computer

## Install Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Setup Docker

### Install Docker with homebrew

To install with homebrew execute:

```sh
brew install docker
```

### Upgrade Docker version

If you installed Docker with homebrew run:

```sh
brew upgrade docker
```

### Verify Docker installation

1. Run `docker version` to check that you have the latest release installed.

   ```
   Client: Docker Engine - Community
    Version:           19.03.8
    API version:       1.40
    Go version:        go1.12.17
    Git commit:        afacb8b
    Built:             Wed Mar 11 01:21:11 2020
    OS/Arch:           darwin/amd64
    Experimental:      false
   
   Server: Docker Engine - Community
    Engine:
     Version:          19.03.8
     API version:      1.40 (minimum version 1.12)
     Go version:       go1.12.17
     Git commit:       afacb8b
     Built:            Wed Mar 11 01:29:16 2020
     OS/Arch:          linux/amd64
     Experimental:     false
    containerd:
     Version:          v1.2.13
     GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429
    runc:
     Version:          1.0.0-rc10
     GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
    docker-init:
     Version:          0.18.0
     GitCommit:        fec3683
   ```

2. Run `docker run hello-world` to verify that Docker is pulling images and running as expected.

   ```
   Hello from Docker!
   This message shows that your installation appears to be working correctly.
   
   To generate this message, Docker took the following steps:
    1. The Docker client contacted the Docker daemon.
    2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
       (amd64)
    3. The Docker daemon created a new container from that image which runs the
       executable that produces the output you are currently reading.
    4. The Docker daemon streamed that output to the Docker client, which sent it
       to your terminal.
   
   To try something more ambitious, you can run an Ubuntu container with:
    $ docker run -it ubuntu bash
   
   Share images, automate workflows, and more with a free Docker ID:
    https://hub.docker.com/
   
   For more examples and ideas, visit:
    https://docs.docker.com/get-started/
   ```
