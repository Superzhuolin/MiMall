//数据存储的工具箱     存取/删除值
/* Storag封装 */
const STORAGE_KEY = "mall";
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        } else {
            let val = this.getStorage(module_name);
            val[key] = value;  //JSON.stringify()把JSON对象转换成字符串
            window.sessionStorage.getItem(STORAGE_KEY, JSON.stringify());
        }
    },//获取某一个模块下的属性,比如user下面的userName
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },//获取整个浏览器缓存信息
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
    },//清空某个值
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        this.setItem(val);
    }
}