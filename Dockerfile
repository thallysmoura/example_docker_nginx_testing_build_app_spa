FROM nginx:alpine

# Remove a configuração padrão do NGINX (opcional)
RUN rm /etc/nginx/conf.d/default.conf

# Copia o build da aplicação para o diretório do NGINX, dentro da subpasta <app>
COPY build /usr/share/nginx/html/<app>

# Copia a configuração customizada do NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o NGINX em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
