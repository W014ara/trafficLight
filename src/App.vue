<template>
  <div id="app">
    <Traffic v-bind:lightInfo="this.Lights"
             v-bind:currentTime="this.Time"
             v-bind:radiance="this.RadianceToggle"
    />
  </div>
</template>


<script>
  import Traffic from '@/components/Traffic.vue';

  export default{
    name: 'app',
    components:{
      Traffic: Traffic
    },

    data: function(){
      return {
        Lights: [],
        Time: 0,
        Shift: 'down',
        RadianceToggle: false
      }
    },

    created(){
      if(localStorage.getItem('lightSettings')){
        this.main();

      }else{
        //Set new data
        this.setStartData();
        this.main();
      }
    },

    methods:{
      //Method of setting the source data if it is not loaded
      setStartData(){
        let URL = this.$route.fullPath;
        let data = {
              currentURL:`${this.$route.fullPath}`,
              currentTime: 0,
              currentShift: 'down',
              currentIndex: 0,
              allLights: [['/red','red','black', 'black', 10],
                          ['/yellow','black','yellow', 'black', 3],
                          ['/green','black','black', '#24FF00', 15]]
        }
        switch(URL){
          case '/':
            this.changedata(data, '/red', 10, 'down', 0);
            break;

          case '/red':
            this.changedata(data, '/red', 10, 'down', 0);
            break;

          case '/yellow':
            this.changedata(data, '/yellow', 3, 'down', 1);
            break;

          case '/green':
            this.changedata(data, '/green', 15, 'down', 2);
            break;
        }
        localStorage.setItem('lightSettings', JSON.stringify(data));
      },

      //Method for changing certain parameters of an object
      changedata(obj, url, currentTime, currentShift, currentIndex){
        obj.currentURL = url;
        obj.currentTime = currentTime;
        obj.currentShift = currentShift;
        obj.currentIndex = currentIndex;
        obj.allLights = [['/red','red','black', 'black', 10],
                        ['/yellow','black','yellow', 'black', 3],
                        ['/green','black','black', '#24FF00', 15]]
      },

      //Updater method
      storageUpdater(obj){
        if(this.Shift === 'down'){
          switch(obj.currentIndex){
            case 0:
              this.changedata(obj, '/yellow', 3, 'down', 1);
              this.$router.push('/yellow');
              this.Time = obj.currentTime;
              this.Lights = obj.allLights[obj.currentIndex];
              this.Shift = obj.currentShift;
              localStorage.setItem('lightSettings', JSON.stringify(obj))
              break;
            case 1:
              this.changedata(obj, '/green', 15, 'down', 2);
              this.$router.push('/green');
              this.Time = obj.currentTime;
              this.Lights = obj.allLights[obj.currentIndex];
              this.Shift = obj.currentShift;
              localStorage.setItem('lightSettings', JSON.stringify(obj))
              break;
            case 2:
              this.changedata(obj, '/yellow', 3, 'up', 1);
              this.$router.push('/yellow');
              this.Time = obj.currentTime;
              this.Lights = obj.allLights[obj.currentIndex];
              this.Shift = obj.currentShift;
              localStorage.setItem('lightSettings', JSON.stringify(obj))
              break;
          }
        }else{
          switch(obj.currentIndex){
            case 1:
              this.changedata(obj, '/red', 10, 'down', 0);
              this.$router.push('/red');
              this.Time = obj.currentTime;
              this.Lights = obj.allLights[obj.currentIndex];
              this.Shift = obj.currentShift;
              localStorage.setItem('lightSettings', JSON.stringify(obj))
              break;
          }
        }
      },

      //Main method
      main(){
        let loadedData = JSON.parse(localStorage.getItem('lightSettings'));
        //Data updating
        this.Lights = loadedData.allLights[loadedData.currentIndex];
        this.Time = loadedData.currentTime;
        this.Shift = loadedData.currentShift;
        this.$router.push(loadedData.currentURL).catch(()=>{});

        setInterval(()=>{
          this.Time--;
          loadedData.currentTime = this.Time;
          localStorage.setItem('lightSettings', JSON.stringify(loadedData));
          if(this.Time >= 0 && this.Time <= 3){
            this.RadianceToggle = true;
          }else{
            this.RadianceToggle = false;
          }
          if(this.Time < 0){
            this.storageUpdater(loadedData);
          }
        }, 1000);
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import url('./styles/__main.scss');
</style>
