import com from './lib/com'
import t1 from "./lib/test1";
import t2 from "./lib/test2";

let a = '123';

document.getElementById("test1").innerHTML = t2.test2("1+2=")+t1.test(1,2)+','+com.comFunc()+",app module"+a;