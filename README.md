# Mini-projet 3 : Authentification OAuth2 avec Google + Chat en temps réel

## Description

Ce projet implémente une authentification via OAuth2 (Google) et un système de messagerie en temps réel entre utilisateurs connectés. Il utilise Redis pour la gestion des sessions.

## Technologies utilisées

Backend : Node.js, Express.js, Passport.js (GoogleStrategy)

Frontend : Vue.js (version 2)

Base de données : MongoDB (Mongoose)

Websockets : Socket.io

Sessions : express-session + connect-redis + Redis

## Fonctionnalités

- Authentification via Google ainsi que par email et mot de passe

- Session persistante via Redis

- Interface de chat en temps réel avec stockage de l’historique

- Affichage des messages par utilisateur connecté


## Installer les dépendances
```bash
cd backend
npm install

cd frontend
npm install
```


## Commande pour lancer le backend
```bash
node server.js
```
## Commande pour lancer le frontend
```bash
npm run serve
```


