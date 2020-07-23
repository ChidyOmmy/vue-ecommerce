<template>
  <div class="Chat">
    <div class="">
      <ChatBody></ChatBody>
    </div>
  </div>
</template>

<script>
  import ChatBody from '@/components/ChatBody.vue';

  export default {
    name: 'Chat',
    components: {
      ChatBody
    }
  }
  </script>