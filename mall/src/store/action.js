// 商城Vuex-action
export default {
    
    saveUserName(context,username){
        // action行为会提交commit到mutation
        context.commit("saveUserName", username);  //导出object对象并调用mutation  
    },
    saveCartCount(context, count) {
        // action行为会提交commit到mutation
        context.commit("saveCartCount", count);  //导出object对象并调用mutation  
    }
    
   
}