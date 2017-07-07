FROM node:boron-alpine

RUN npm install -g npm_lazy
# RUN useradd -U -d /var/cache/npmcache -s /bin/nologin npmcache

VOLUME ["/var/cache/npmcache/cache"]
EXPOSE 9999
RUN chgrp -R 0 /var/cache/npmcache && chmod -R 777 /var/cache/npmcache

RUN npm install npm_lazy
# RUN sed 's|Resource.get = function(url, auth) {|Resource.get = function(url, auth) { console.log(url); console.log(auth); |' -i /usr/local/lib/node_modules/npm_lazy/lib/resource.js

USER 1000
COPY config.js /var/cache/npmcache/config.js
CMD ["/usr/local/bin/npm_lazy", "--config", "/var/cache/npmcache/config.js"]
