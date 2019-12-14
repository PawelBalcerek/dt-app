FROM  node:lts-alpine AS build

WORKDIR build
COPY . /build
RUN npm i
RUN ./node_modules/@angular/cli/bin/ng build --prod

FROM tomcat:9.0.20-jre8-alpine

WORKDIR /usr/local/tomcat/webapps/ROOT
RUN rm -rf *
COPY --from=build /build/dist/dt-app/ .
COPY ./docker/rewrite.config /usr/local/tomcat/conf/Catalina/localhost/rewrite.config
COPY ./docker/server.xml /usr/local/tomcat/conf/server.xml
