FROM ghcr.io/onecx/docker-spa-base:v1

# Copy applicaiton build
COPY nginx/locations.conf $DIR_LOCATION/locations.conf
# Copy applicaiton build
COPY dist/ping-angular-app-ui $DIR_HTML

#Optional extend list of application environments
#ENV CONFIG_ENV_LIST BFF_URL,APP_BASE_HREF
# Application environments default values
ENV PING_ANGULAR_APP_BACKEND_URL http://your-bff-server:8080/your-bff-server-rs/
ENV CORS_ENABLED true
ENV TKIT_PORTAL_URL http://tkit-portal-server:8080/
ENV APP_BASE_HREF /mfe/ping-angular-app-ui/

ENV CONFIG_ENV_LIST PING_ANGULAR_APP_BACKEND_URL,CORS_ENABLED,TKIT_PORTAL_URL,APP_BASE_HREF


RUN chmod 775 -R $DIR_HTML/assets
USER 1001


