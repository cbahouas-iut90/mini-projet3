<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg._id">
        <strong>{{ msg.sender?.name }}:</strong> {{ msg.text }}
      </li>
    </ul>
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Votre message..." />
  </div>
</template>

<script>
import io from 'socket.io-client';
const socket = io('http://localhost:3000', { withCredentials: true });

export default {
  name: 'ChatBox',
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/messages", { credentials: 'include' })
        .then(res => res.json())
        .then(data => this.messages = data);

    socket.on("message", (msg) => {
      this.messages.push(msg);
    });
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        socket.emit("message", this.newMessage);
        this.newMessage = "";
      }
    }
  }
};
</script>
<style scoped>
</style>