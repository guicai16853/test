import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store( {
    state : {
     activeIndex:false,
     activePerson:false,
     holdno:{},
     beforeLoginUrl:''
    },
    
    mutations : {
      changeIndex( state ){
       state.activeIndex = true;
       state.activePerson = false;      
      },
      changePerson( state ){
       state.activeIndex = false;
       state.activePerson = true;      
      },
      
    
    },
    
    actions : {
      changeIndex1(context){
        context.commit('changeIndex');
      },
      changePerson1(context){
        context.commit('changePerson')
      }
    
    }
});

export default store;
