FROM nginx:alpine

# per the https://docs.openshift.com/enterprise/3.0/creating_images/guidelines.html#use-uid
RUN chmod 777 -R /var/log/nginx && chmod 777 -R /var/cache/nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY start-it   /usr/bin/start-it

STOPSIGNAL SIGTERM
EXPOSE 10000

USER 100
# CMD /usr/sbin/nginx -g "daemon off;"
CMD [ "/bin/sh", "/usr/bin/start-it" ]
