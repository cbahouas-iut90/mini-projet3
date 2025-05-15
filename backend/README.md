# Backend - Mini Projet 3 (Auth OAuth2 + Chat temps réel)

Ce backend fait partie du mini-projet 3. Il gère l’authentification OAuth2 via Google et GitHub, les sessions avec Redis, le chat en temps réel via WebSocket, et la persistance des données avec MongoDB.


## ⚙️ Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Passport.js](http://www.passportjs.org/)
- [OAuth2 (Google + GitHub)](https://developers.google.com/identity)
- [Socket.io](https://socket.io/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Redis](https://redis.io/)
- [dotenv](https://github.com/motdotla/dotenv)

## 📁 Structure du projet

```
mkdir config models routes controllers
touch .env
touch config/passport.js config/redisClient.js
touch models/user.js
touch routes/auth.js
touch controllers/authController.js
touch server.js
touch models/Message.js
touch controllers/messagecontroller.js
touch routes/messages.js
```

##  Démarrer le projet

### 1. Cloner et installer les dépendances

```bash
git clone https://github.com/cbahouas-iut90/mini-projet3.git
cd backend
npm install
```

### 2. Créer un fichier .env

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/nom-bdd
SESSION_SECRET=votre-cle-secret
GOOGLE_CLIENT_ID=votre-client-id
GOOGLE_CLIENT_SECRET=votre-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

### 3. Lancer le backend

```
node server.js
```

