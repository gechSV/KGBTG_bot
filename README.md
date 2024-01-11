# Шпора для дебилов(меня) 

### Запуск контейнера
`docker run -d -p 27018:27017 --name=mongo-example mongo:latest`

### Дамп
`.\mongodump.exe mongodb://localhost:27017`

### Выгрузка дампа
`.\mongorestore.exe mongodb://localhost:27018`


### Запуск контейнера под Node приложение

* Dockerfile * 
`FROM alpine
EXPOSE 3000
WORKDIR /app
RUN apk add --update npm
COPY . .
RUN npm ci 
CMD npm run start`

`docker build -t test -f .\Dockerfile .`


### Команды 
`docker ps` - просмотр контейнеров;
`docker image ls` - просмотр образов
`docker run --name testalpine -d -p 81:3000 test` - запуск контейнера; 
`docker exec -it <id> <bash, sh>`

#### удаление контейнера
`docker stop <id/name>`
`docker rm <id/name>`

#### Создание сети для взаимодействия контейнеров
`docker network create --driver bridge <my_network_name>`
`docker natwork list` - список сеток
`docker run --network=my_network -p 28001:27017 --name mongodb_container -d mongodb_image` - пример запуска контейнера в сетке 
* Пояснение для дебила(меня), который пару часов не мог понять, почему же не работает коннект к базе. Внутри сетки контейнеров, нужно обращаться ко внутреннему порту, не ко внешнему. То есть если в `run -p 81:80`, долбить из контейнера нужно *80* порт. *



### Alpine linux
`apk add nano` - установка установка текстового редактора

### Node
`npm run build` - сборка билда React проекта

#### Сборка проекта c помощью Webpack(лишнее)
`npm install webpack webpack-cli --save-dev`

Создаём файл с именем `webpack.config.js`

`"build": "webpack --config webpack.config.js"` - config packege.json

`Если вас беспокоит размер вашего node_modules каталога, возможно, вы сможете определить, какие пакеты используются только во время разработки (например, инструменты тестирования, такие как Jest и Mocha, транспайлеры, такие как Babel, Typescript и т.д.). Поместите их внутри "devDependency" ключа в вашем package.json файле. Затем в рабочей среде запустите npm install --production, и он не установит то, что вы указали как devDependency. Это должно привести к созданию меньшего размера node_modules.`

### git
`git init
git add .
git commit -m "my commit"
git remote set-url origin git@github.com:username/repo.git
git push origin master`