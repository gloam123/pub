const data = {"info":"tid:15430;pid:15430;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:1","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"};

const tidtime = data.info.match(/tidtime:(\d+)/)[1]; // 提取tidtime字段的值

//console.log(tidtime); // 输出0

// 如果有多个数据需要排序，可以将它们放入一个数组中，然后使用sort()方法进行排序
const dataArray = [
  {"info":"tid:17699;pid:17699;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:0","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:13048;pid:13048;tidtime:34;thtime:0;pidtime:0;locktime:0;newttime:3;sttime:0;total:37","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:10945;pid:10945;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:1","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:16252;pid:16252;tidtime:14;thtime:0;pidtime:0;locktime:0;newttime:6;sttime:0;total:20","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:23034;pid:23034;tidtime:5;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:9;total:16","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:20841;pid:20841;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:0;total:1","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:22295;pid:22295;tidtime:5;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:5","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:12590;pid:12590;tidtime:4;thtime:0;pidtime:1;locktime:0;newttime:1;sttime:6;total:11","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:6764;pid:6764;tidtime:20;thtime:1;pidtime:0;locktime:0;newttime:0;sttime:0;total:21","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:13526;pid:13526;tidtime:2;thtime:9;pidtime:0;locktime:0;newttime:1;sttime:0;total:13","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:28554;pid:28554;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:4;total:6","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:2569;pid:2569;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:2","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:19518;pid:19518;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:5","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:11142;pid:11142;tidtime:45;thtime:1;pidtime:0;locktime:0;newttime:3;sttime:13;total:66","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:14714;pid:14714;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:2","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:16921;pid:16921;tidtime:2;thtime:0;pidtime:0;locktime:0;newttime:14;sttime:0;total:16","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:23999;pid:23999;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:2;sttime:0;total:3","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:11464;pid:11464;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:0","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:23966;pid:23966;tidtime:42;thtime:0;pidtime:2;locktime:0;newttime:2;sttime:2;total:47","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:13484;pid:13484;tidtime:5;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:5","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:3065;pid:3065;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:34;total:35","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:22444;pid:22444;tidtime:8;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:9","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:9979;pid:9979;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:1","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:15172;pid:15172;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:3;total:4","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:21491;pid:21491;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:6;sttime:0;total:7","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:22602;pid:22602;tidtime:0;thtime:0;pidtime:1;locktime:0;newttime:0;sttime:1;total:1","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:13454;pid:13454;tidtime:66;thtime:0;pidtime:0;locktime:0;newttime:5;sttime:0;total:71","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:22936;pid:22936;tidtime:3;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:8;total:11","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:30738;pid:30738;tidtime:2;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:1;total:4","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:15187;pid:15187;tidtime:7;thtime:10;pidtime:0;locktime:0;newttime:0;sttime:3;total:20","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:6961;pid:6961;tidtime:3;thtime:0;pidtime:34;locktime:0;newttime:2;sttime:22;total:40","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:28304;pid:28304;tidtime:12;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:4;total:17","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:25063;pid:25063;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:10;sttime:11;total:25","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:13384;pid:13384;tidtime:2;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:3","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:11990;pid:11990;tidtime:16;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:0;total:17","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:13742;pid:13742;tidtime:9;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:9","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:23902;pid:23902;tidtime:3;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:4","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:23799;pid:23799;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:5;total:5","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:9092;pid:9092;tidtime:12;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:3;total:30","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:14352;pid:14352;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:1","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:2201;pid:2201;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:29","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:30192;pid:30192;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:1;total:3","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:18292;pid:18292;tidtime:13;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:1;total:16","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:26142;pid:26142;tidtime:1;thtime:0;pidtime:1;locktime:0;newttime:5;sttime:2;total:9","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:5088;pid:5088;tidtime:614;thtime:1;pidtime:2;locktime:0;newttime:0;sttime:58;total:673","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:3990;pid:3990;tidtime:6;thtime:0;pidtime:1;locktime:0;newttime:1;sttime:46;total:54","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:21688;pid:21688;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:69;total:70","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:30900;pid:30900;tidtime:26;thtime:0;pidtime:0;locktime:0;newttime:1;sttime:1;total:28","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:9100;pid:9100;tidtime:1;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:0;total:1","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:14648;pid:14648;tidtime:9;thtime:0;pidtime:0;locktime:0;newttime:0;sttime:1;total:11","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"},
  {"info":"tid:11414;pid:11414;tidtime:0;thtime:0;pidtime:0;locktime:0;newttime:3;sttime:23;total:27","kwsdk_version":"1.8.90.603","core_version":"1.8.90.609"}
];

dataArray.sort((a, b) => {
  // const tidtimeA = a.info.match(/tidtime:(\d+)/)[1];
  // const tidtimeB = b.info.match(/tidtime:(\d+)/)[1];
  // const tidtimeA = a.info.match(/thtime:(\d+)/)[1];
  // const tidtimeB = b.info.match(/thtime:(\d+)/)[1];
  const tidtimeA = a.info.match(/pidtime:(\d+)/)[1];
  const tidtimeB = b.info.match(/pidtime:(\d+)/)[1];
  return tidtimeA - tidtimeB;
});

// console.log(dataArray); // 输出排序后的数组



for (i=0; i<dataArray.length; i++) {
  let a = dataArray[i];
  //const tidtimeA = a.info.match(/tidtime:(\d+)/)[1];
  const tidtimeA = a.info.match(/tidtime:(\d+)/)[1];
  const pidTime = a.info.match(/pidtime:(\d+)/)[1];

  const pthread_self = a.info.match(/thtime:(\d+)/)[1];

  const tid = a.info.match(/tid:(\d+)/)[1];
  const pid = a.info.match(/pid:(\d+)/)[1];
  //print(tidtimeA);
  console.log("gettid time:" + tidtimeA + "; myPid time:" + pidTime + "; pthread_self time:" + pthread_self);
  if (tid != pid || tid == 0) {
    console.log(a);
  } else {
    //console.log("tid=" + tid + "; pid=" + pid);
  }
}
