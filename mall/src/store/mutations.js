// 商城Vuex-mutation
export default{
    //读取改变
    saveUserName(state, username) {
        state.username=username;
    },
    saveCartCount(state, count) {
        state.cartCount =count;
    }

}