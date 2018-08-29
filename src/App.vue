<template>
  <div id="app" class="container">
    <div class="image-holder">
      <div class="columns is-mobile">
        <div class="column is-one-third-mobile is-two-fifths-desktop">
            <img alt="Vue logo" id="face" :src="getImgUrl()">
        </div>
        <div class="column is-two-thirds-mobile is-three-fifths-desktop">
          <img alt="Vue logo" id="logo" src="./assets/logo.png">
        </div>
      </div>
    </div>
    <p>
      
    </p>
    <div class="field">
      <label class="label">Enter your usage in units here:</label>
      <p class="control has-icons-right">
        <input class="input is-primary is-large" type="number" v-model="inputVal" @keyup="calculateVal" @change="calculateVal">
          <span class="icon is-large is-right">
          <icon name="bolt"></icon>
        </span>
      </p>
    </div>
    <h3 class="title is-4">3 Phase <input class="Switch" type="checkbox" v-model="singlePhase"> 1 Phase</h3>
    <br>
    <h6 class="subtitle is-6">Meter rent: 30</h6>
    <h1 class="title is-1"><icon name="rupee-sign"></icon>{{resultVal}}</h1>
  </div>
</template>

<script>   

export default {
  name: 'app',
  data() {
    return {
      inputVal: 0,
      resultVal: 0,
      singlePhase: false,
    }
  },
  methods: {
    calculateVal() {
      //this.resultVal = this.inputVal * 2;
      const consumption = this.inputVal;
      var rate, cons, rem;
      rate = 0;
      cons = consumption; //setting consumption to a temp value

      // Telescopic

      if(cons > 500) { // >500
        rem = cons;
        rate += 5.5 * rem;
        cons -= rem;
      }

      // Non Telescopic

      if(cons > 400) { //401-500
        rem = cons - 400;
        rate += 7.3 * rem;
        cons -= rem;
      }
      if(cons > 300) { //301-400
        rem = cons - 300;
        rate += 6.1 * rem;
        cons -= rem;
      }
      if(cons > 200) { //201-300
        rem = cons - 200;
        rate += 4.5 * rem;
        cons -= rem;
      }
      if(cons > 100) { //101-200
        rem = cons - 100;
        rate += 3.4 * rem;
        cons -= rem;
      }
      if(cons > 0) { //0-100
        rem = cons;
        rate += 2.9 * rem;
        cons -= rem;
      }
      //display the output

      //add meter rent and phase ***************

      this.resultVal = rate;
    },
    rating() {
      let r=1;
      if(this.resultVal >3000) r=6;
      else if(this.resultVal > 2500) r=5;
      else if(this.resultVal > 1500) r=4;
      else if(this.resultVal > 800) r=3;
      else if(this.resultVal > 500) r=2;
      else r=1;

      return r;
    },
    getImgUrl() {
    var num = this.resultVal==0?1:this.resultVal;
     // var images = require.context('./static/faces/', false, /\.png$/)
     // return images('./static/faces/' + num + ".png")
     require('./src/faces/' + num + ".png");
     return './src/faces/' + num + ".png";
  }


  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
#logo {
  display: block;
  /*max-width:400px;*/
  max-height: 150px;
  margin: 0 0;
  margin-bottom: 50px;
}
#face {
  display: block;
  max-height: 150px;
  margin-right: 0;
  margin-left:auto;
}
/*@media screen and (max-width: 600px) {
  #logo {
  max-width:200px;
}
}*/
.image-holder {
  margin: 0 15px 0 15px;
}

.field {
  display: block;
  margin: 0 auto;
  max-width: 300px;
}

input[type="checkbox"].Switch {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  color: #000;
  width: 44px;
  height: 24px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 100ms;
  background-size: 30%;
  outline: none;
  position: relative;
  box-sizing: border-box;
  background-color: #CCFF66;
  transition: background-color 200ms;
  vertical-align: middle
}
input[type="checkbox"].Switch::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: currentColor;
  will-change: transform;
  transition: -webkit-transform 200ms cubic-bezier(.01,.65,.23,1);
  transition: transform 200ms cubic-bezier(.01,.65,.23,1);
  transition: transform 200ms cubic-bezier(.01,.65,.23,1), -webkit-transform 200ms cubic-bezier(.01,.65,.23,1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}
input[type="checkbox"].Switch:checked {
  background-color: aquamarine
}
input[type="checkbox"].Switch:checked::before {
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
}
</style>
