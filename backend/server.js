require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const mongoose = require('mongoose');
const redis = require('redis');
const connectRedis = require('connect-redis');
const http = require('http');
const socketIo = require('socket.io');

const RedisStore = connectRedis(session);

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const redisClient = redis.createClient();
redisClient.on('error', (err) => console.log('Redis error:', err));

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/miniprojet3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connecté'))
.catch((err) => console.error('Erreur MongoDB:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET || 'mysecret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 } // 1 hour
}));

// Passport config
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  done(null, { id }); // Stub simple
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}
));

// Routes OAuth Google
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/chat'); 
  }
);

// Exemple simple route protégée
app.get('/chat', (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send('Not authenticated');
  res.send('Bienvenue dans le chat');
});

// Socket.io
io.use((socket, next) => {
  next();
});

io.on('connection', (socket) => {
  console.log('Nouvel utilisateur connecté', socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); 
  });

  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté', socket.id);
  });
});



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur lancé sur le port http://localhost:${PORT}`);
});
