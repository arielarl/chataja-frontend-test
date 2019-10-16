<template>
  <div class="container">
<h3 class=" text-center">Messaging</h3>
<div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
          </div>
          <div class="inbox_chat">
            <div class="chat_list active_chat">
              <div class="chat_people">
                <div class="chat_img" v-if="userLogged.id === '1'"> <img :src="secondUser.avatar" alt="sunil"> </div>
                <div class="chat_img" v-else> <img :src="firstUser.avatar" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5 v-if="userLogged.id === '1'">{{secondUser.name}}</h5>
                  <h5 v-else>{{firstUser.name}}</h5>
                  <!-- <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mesgs">
          <div class="msg_history">
            <div v-for="message in messages" class="outgoing_msg">
              <div class="incoming_msg_img"> <img :src="userLogged.avatar" alt="sunil"> </div>
              <div class="received_msg" style="margin-bottom: 25px">
                <div class="received_withd_msg">
                  <p v-if="message.userId === userLogged.id">{{message.message}}</p>
                  <p v-else>{{message.message}}</p>
                  <!-- <p>{{userLogged}}</p> -->
                  <!-- <span class="time_date">{{message.createdAt}}</span> -->
                  </div>
              </div>
            </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <!-- <p>Test which is a new approach to have all
                  solutions</p> -->
                <!-- <span class="time_date"> 11:01 AM    |    June 9</span> -->
                 </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input type="text" @keyup.enter="saveMessage" v-model="message" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="button" @click="saveMessage()"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
      <button @click="logout">Logout</button>
    </div></div>
</template>
<script>
export default {
  name: 'chatAja',
  data () {
    return {
      message: null,
      messages: []
    }
  },
  computed: {
    userLogged () {
      console.log(this.$store.state.userLogged)
      return this.$store.state.user.userLogged
    },
    firstUser () {
      return this.$store.state.user.user_1
    },
    secondUser () {
      return this.$store.state.user.user_2
    }
  },
  mounted () {
    this.$store.dispatch('user/getUser')
  },
  methods: {
    saveMessage () {
      db.collection('chatData').add({
        message: this.message,
        createdAt: new Date(),
        userId: this.userLogged.id
      })

      this.message = null
    },
    fetchMessages () {
      db.collection('chatData').orderBy('createdAt').onSnapshot((querysnapshot) => {
        let allMessages = []
        querysnapshot.forEach(doc => {
          allMessages.push(doc.data())
        });
        this.messages = allMessages
      })
    },
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push('/')
    }
  },
  created () {
    this.fetchMessages()
  }
}
</script>