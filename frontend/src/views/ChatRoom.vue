<template>
  <div class="chatroom">
    <Chat />
  </div>
</template>

<script>
import ChatBox from '@/components/ChatBox.vue';

export default {
  name: 'ChatRoom',
  components: {
    Chat: ChatBox
  }
};
</script>
