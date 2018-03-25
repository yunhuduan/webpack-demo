import com from './lib/com'
import t1 from "./lib/test";

document.getElementById("test1").innerHTML = "app module," + t1.test() + ',com:' + com.comFunc();