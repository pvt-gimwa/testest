// import setting from "../data/setting.json" assert { type: "json" };
// //get url query lesson
// const url = new URL(window.location.href);
// const lesson = url.searchParams.get("lesson");
// console.log("lesson :",lesson);
// console.log("setting :",setting);
// const thisYear = "2024"
// const thisMonth = "4"
// const thisLesson = lesson
// let thisLessonTemplates = []
// let classMap = {};

// // 次のレッスンをレンダリング
// var nextLesson = () => {
//   if (lessonsArray.length - 1 > lessonNumber) {
//     lessonsArray[lessonNumber].destroy(); // 現在表示しているレッスンを非表示
//     lessonNumber += 1;
//     lessonsArray[lessonNumber].init(nextLesson);
//   }
// }



// // ----------------------- function end -----------------------

// // レンダリング
// // console.log("setting.lessons.year.thisYear.month.thisMonth :",setting.lessons.year[thisYear].month[thisMonth].lesson);
// const allLessons = setting.lessons.year[thisYear].month[thisMonth].lessons
// const checkLesson = allLessons.includes(Number(thisLesson))

// const lessonSetting = setting.lessons.year[thisYear].month[thisMonth][`lesson${thisLesson.toString()}`]
// console.log("checkLesson :",checkLesson);


// lessonSetting.map((template) => {
//   console.log("template :",`/template${template.toString()}/build/bundle.js`);
//   import(`/template${template.toString()}/build/bundle.js`)
//   .then((module) => {    
//     console.log("module :",module);
//     const Controller = window.Template.Controller;
//     // console.log("Controller :",Controller);
//     // console.log("json :",`/lesson/data/${thisYear}/${thisMonth}/lesson/${thisLesson}/template/${template}.json`);
//     thisLessonTemplates[`template${template}`] = new Controller(`template${template.toString()}`,`/lesson/data/${thisYear}/${thisMonth}/lesson/${thisLesson}/template/${template}.json`);
//   })
//   .catch((error) => {
//     console.error("Error importing module:", error);
//   });
// });

// console.log("thisLessonTemplates :",thisLessonTemplates);
// thisLessonTemplates[`template${template}`].init();

// // ボタンに関数を割り当て
// // document.getElementById("prev").addEventListener("click", prevLesson);

// // 初めに最初のレッスンを表示する
// // lessonsArray[lessonNumber].init(nextLesson);
// // document.getElementById(lessonsArray[lessonNumber].id + "-button").addEventListener("click", nextLesson);

// import('/lesson/js/controller.js').then((moduel)=>{
//   console.log("moduel :",moduel);
// }); // 更新路径，如果需要

// const controller = new Controller('path/to/your/settings.json');
// controller.init(() => {
//   console.log('Initialized!');
// });

import {renderApp} from './index.js';
const rootElement = document.getElementById('root');
if (rootElement) {
  renderApp(rootElement);
}