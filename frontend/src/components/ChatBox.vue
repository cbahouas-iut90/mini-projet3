<template>
  <div class="chat">
    <h2>Chat en temps réel</h2>
    <div class="messages">
      <div v-for="msg in messages" :key="msg._id">
        <strong>{{ msg.sender.name }} :</strong> {{ msg.content }}
      </div>
    </div>
    <input v-model="message" @keyup.enter="sendMessage" placeholder="Tapez un message..." />
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'ChatBox',
  data() {
    return {
      socket: null,
      messages: [],
      message: ''
    };
  },
  created() {
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (msg) => {
      this.messages.push(msg);
    });

    // Récupérer l'historique des messages
    fetch('http://localhost:3000/api/messages')
        .then(res => res.json())
        .then(data => this.messages = data);
  },
  methods: {
    sendMessage() {
      if (this.message.trim() !== '') {
        this.socket.emit('message', { content: this.message });
        this.message = '';
      }
    }
  }
};
</script>

<style scoped>
.chat {
  padding: 20px;
}
.messages {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}
</style>
