

var main = new Vue({
  el: '#main',
  data () {
    return {
      user: [],
      info: []
    }
  },
  mounted () {
    axios.all([
        this.request_1(), //or direct the axios request
        this.request_2(),
        this.request_3(),
      ])
    .then(axios.spread((first_response, second_response, third_response) => {
           var repos_temp = [];
          first_response.data.forEach(function(repos) {
            console.log(third_response.data);
            if(third_response.data.web.indexOf(repos.language) != -1){
              repos.category = "web"
            }
            else if(third_response.data.mobile.indexOf(repos.language) != -1)
            {
              repos.category = "mobile";
            }
            else
            {
              repos.category = "other";
            }
            repos_temp.push(repos)
          });
          this.info= repos_temp;
          this.user =  second_response.data
    }))
  },
  updated(){
    this.callIsotope();
  },
  methods:{
    request_1() {
     return axios.get('https://api.github.com/users/prasetyanurangga/repos')
    },
    request_2() {
     return axios.get('https://api.github.com/users/prasetyanurangga')
    },
    request_3() {
     return axios.get('https://prasetyanurangga.github.io/data/category.json')
    },
    callIsotope() {
      var $container = $('#portfolio-grid').isotope({
        itemSelector: '.item',
        isFitWidth: true
      });

      $(window).resize(function() {
        $container.isotope({
          columnWidth: '.col-sm-3'
        });
      });

      $container.isotope({
        filter: '*'
      });

      $('#filters').on('click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
          filter: filterValue
        });
        $('#filters a').removeClass('active');
        $(this).addClass('active');
      });
    },
    detail(id){
      this.$router.push({ path: '/work-single.html', params: { id } })
    },
    type_item(language) {
      return "Other";
      
      

      
    },
  },
})