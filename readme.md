![docker image](https://img-0.journaldunet.com/FdWFphLk__fpZlVrdZArGSxwfyg=/1500x/smart/4cfbed5bddb0467bbecad96ca168bbe3/ccmcms-jdn/11507000.jpg)

# Run project with docker image

## Prerequisite to start with this image :

just only install docker in your machine ! [read docs](https://docs.docker.com/get-docker/)

## Getting started with docker image :

first step we need to build the image :

```
docker build -t <Image-name> .
```

finally run it!:

```
docker run --publish <PORT>:3000 <Image-name>
```

in your browser go to : `http://localhost:<PORT>`

enjoy it!
