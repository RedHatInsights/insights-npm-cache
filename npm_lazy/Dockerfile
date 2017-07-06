FROM fedora:latest

RUN dnf update -y && dnf clean all
RUN dnf install -y nodejs npm && dnf clean all
RUN useradd -U -d /var/cache/npmcache -s /bin/nologin npmcache
RUN npm install -g npm_lazy

VOLUME ["/var/cache/npmcache/cache"]
EXPOSE 9999

RUN chgrp -R 0 /var/cache/npmcache && chmod -R 777 /var/cache/npmcache

USER 1000
COPY config.js /var/cache/npmcache/config.js
CMD ["/usr/bin/node", "/usr/lib/node_modules/npm_lazy/bin/npm_lazy", "--config", "/var/cache/npmcache/config.js"]
