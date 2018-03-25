FROM node:8.9

RUN set -x

ENV APP_DIR /src

RUN mkdir $APP_DIR
WORKDIR $APP_DIR

RUN echo "$$$$$$"
RUN ls

#COPY package.json yarn.lock ./
RUN yarn install --non-interactive --production=false \
  && rm -f ~/.npmrc

COPY . .

ENTRYPOINT ["yarn"]

CMD ["start"]
