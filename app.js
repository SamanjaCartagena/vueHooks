 const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!'
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
    //  this.message = this.currentUserInput;
    this.message = this.$refs.userText.value;
    this.currentUserInput='';

    }  
    },
    beforeCreate(){
      console.log('Before Create')
  },
  created(){
    console.log('Created');
  }, 
  beforeMount(){
    console.log("Before Mount");
  },
  mounted(){
    console.log("Mounted");
  },
  beforeUpdate(){
    console.log('Before Update');
  },
   updated(){
     console.log('Updated');
   },
   beforeUnmount(){
     console.log('before unmount');
   },
   unmounted(){
     console.log('Unmounted');
   }
});

app.mount('#app');
app.unmount('#app');
