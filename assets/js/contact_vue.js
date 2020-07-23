  var router = new VueRouter({

    mode: 'history',

    routes: []

  });
var detail = new Vue({
  el: '#main',
  router,
  data () {
    return {
      repos: "",
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  },
  mounted () {
  },
  updated(){
  },
  methods:{
    send_message(){
      var name = this.name;
      var subject = this.subject;
      var message = this.message;
         let routeData =  this.$router.resolve({ path: 'mailto:' + email + '?subject=' + subject + ' From ' + name + '&body=' + message});
      window.open(routeData.href, '_blank');
    }
  }
})