/****************** 
 * Latin_Exp *
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'latin_exp';  // from the Builder filename that created this script
let expInfo = {
    'ID': '001',
    'group': 'auto',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from setup_code


// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(InstructionRoutineBegin());
flowScheduler.add(InstructionRoutineEachFrame());
flowScheduler.add(InstructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);








flowScheduler.add(osfRoutineBegin());
flowScheduler.add(osfRoutineEachFrame());
flowScheduler.add(osfRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stims_set.xlsx', 'path': 'stims_set.xlsx'},
    {'name': 'headlines/ru_stmt_1.png', 'path': 'headlines/ru_stmt_1.png'},
    {'name': 'headlines/en_stmt_1.png', 'path': 'headlines/en_stmt_1.png'},
    {'name': 'corrections/ru_true.png', 'path': 'corrections/ru_true.png'},
    {'name': 'corrections/en_true.png', 'path': 'corrections/en_true.png'},
    {'name': 'headlines/ru_stmt_2.png', 'path': 'headlines/ru_stmt_2.png'},
    {'name': 'headlines/en_stmt_2.png', 'path': 'headlines/en_stmt_2.png'},
    {'name': 'headlines/ru_stmt_3.png', 'path': 'headlines/ru_stmt_3.png'},
    {'name': 'headlines/en_stmt_3.png', 'path': 'headlines/en_stmt_3.png'},
    {'name': 'corrections/ru_fake.png', 'path': 'corrections/ru_fake.png'},
    {'name': 'corrections/en_fake.png', 'path': 'corrections/en_fake.png'},
    {'name': 'headlines/ru_stmt_4.png', 'path': 'headlines/ru_stmt_4.png'},
    {'name': 'headlines/en_stmt_4.png', 'path': 'headlines/en_stmt_4.png'},
    {'name': 'corrections/ru_disp.png', 'path': 'corrections/ru_disp.png'},
    {'name': 'corrections/en_disp.png', 'path': 'corrections/en_disp.png'},
    {'name': 'headlines/ru_stmt_5.png', 'path': 'headlines/ru_stmt_5.png'},
    {'name': 'headlines/en_stmt_5.png', 'path': 'headlines/en_stmt_5.png'},
    {'name': 'headlines/ru_stmt_7.png', 'path': 'headlines/ru_stmt_7.png'},
    {'name': 'headlines/en_stmt_7.png', 'path': 'headlines/en_stmt_7.png'},
    {'name': 'headlines/ru_stmt_8.png', 'path': 'headlines/ru_stmt_8.png'},
    {'name': 'headlines/en_stmt_8.png', 'path': 'headlines/en_stmt_8.png'},
    {'name': 'headlines/ru_stmt_9.png', 'path': 'headlines/ru_stmt_9.png'},
    {'name': 'headlines/en_stmt_9.png', 'path': 'headlines/en_stmt_9.png'},
    {'name': 'headlines/ru_stmt_10.png', 'path': 'headlines/ru_stmt_10.png'},
    {'name': 'headlines/en_stmt_10.png', 'path': 'headlines/en_stmt_10.png'},
    {'name': 'headlines/ru_stmt_11.png', 'path': 'headlines/ru_stmt_11.png'},
    {'name': 'headlines/en_stmt_11.png', 'path': 'headlines/en_stmt_11.png'},
    {'name': 'headlines/ru_stmt_12.png', 'path': 'headlines/ru_stmt_12.png'},
    {'name': 'headlines/en_stmt_12.png', 'path': 'headlines/en_stmt_12.png'},
    {'name': 'headlines/ru_stmt_13.png', 'path': 'headlines/ru_stmt_13.png'},
    {'name': 'headlines/en_stmt_13.png', 'path': 'headlines/en_stmt_13.png'},
    {'name': 'headlines/ru_stmt_14.png', 'path': 'headlines/ru_stmt_14.png'},
    {'name': 'headlines/en_stmt_14.png', 'path': 'headlines/en_stmt_14.png'},
    {'name': 'headlines/ru_stmt_15.png', 'path': 'headlines/ru_stmt_15.png'},
    {'name': 'headlines/en_stmt_15.png', 'path': 'headlines/en_stmt_15.png'},
    {'name': 'headlines/ru_stmt_17.png', 'path': 'headlines/ru_stmt_17.png'},
    {'name': 'headlines/en_stmt_17.png', 'path': 'headlines/en_stmt_17.png'},
    {'name': 'headlines/ru_stmt_18.png', 'path': 'headlines/ru_stmt_18.png'},
    {'name': 'headlines/en_stmt_18.png', 'path': 'headlines/en_stmt_18.png'},
    {'name': 'headlines/ru_stmt_19.png', 'path': 'headlines/ru_stmt_19.png'},
    {'name': 'headlines/en_stmt_19.png', 'path': 'headlines/en_stmt_19.png'},
    {'name': 'headlines/ru_stmt_20.png', 'path': 'headlines/ru_stmt_20.png'},
    {'name': 'headlines/en_stmt_20.png', 'path': 'headlines/en_stmt_20.png'},
    {'name': 'headlines/ru_stmt_21.png', 'path': 'headlines/ru_stmt_21.png'},
    {'name': 'headlines/en_stmt_21.png', 'path': 'headlines/en_stmt_21.png'},
    {'name': 'headlines/ru_stmt_22.png', 'path': 'headlines/ru_stmt_22.png'},
    {'name': 'headlines/en_stmt_22.png', 'path': 'headlines/en_stmt_22.png'},
    {'name': 'headlines/ru_stmt_23.png', 'path': 'headlines/ru_stmt_23.png'},
    {'name': 'headlines/en_stmt_23.png', 'path': 'headlines/en_stmt_23.png'},
    {'name': 'headlines/ru_stmt_24.png', 'path': 'headlines/ru_stmt_24.png'},
    {'name': 'headlines/en_stmt_24.png', 'path': 'headlines/en_stmt_24.png'},
    {'name': 'headlines/ru_stmt_25.png', 'path': 'headlines/ru_stmt_25.png'},
    {'name': 'headlines/en_stmt_25.png', 'path': 'headlines/en_stmt_25.png'},
    {'name': 'headlines/ru_stmt_27.png', 'path': 'headlines/ru_stmt_27.png'},
    {'name': 'headlines/en_stmt_27.png', 'path': 'headlines/en_stmt_27.png'},
    {'name': 'headlines/ru_stmt_28.png', 'path': 'headlines/ru_stmt_28.png'},
    {'name': 'headlines/en_stmt_28.png', 'path': 'headlines/en_stmt_28.png'},
    {'name': 'headlines/ru_stmt_29.png', 'path': 'headlines/ru_stmt_29.png'},
    {'name': 'headlines/en_stmt_29.png', 'path': 'headlines/en_stmt_29.png'},
    {'name': 'headlines/ru_stmt_30.png', 'path': 'headlines/ru_stmt_30.png'},
    {'name': 'headlines/en_stmt_30.png', 'path': 'headlines/en_stmt_30.png'},
    {'name': 'headlines/ru_stmt_31.png', 'path': 'headlines/ru_stmt_31.png'},
    {'name': 'headlines/en_stmt_31.png', 'path': 'headlines/en_stmt_31.png'},
    {'name': 'headlines/ru_stmt_32.png', 'path': 'headlines/ru_stmt_32.png'},
    {'name': 'headlines/en_stmt_32.png', 'path': 'headlines/en_stmt_32.png'},
    {'name': 'headlines/ru_stmt_33.png', 'path': 'headlines/ru_stmt_33.png'},
    {'name': 'headlines/en_stmt_33.png', 'path': 'headlines/en_stmt_33.png'},
    {'name': 'headlines/ru_stmt_34.png', 'path': 'headlines/ru_stmt_34.png'},
    {'name': 'headlines/en_stmt_34.png', 'path': 'headlines/en_stmt_34.png'},
    {'name': 'headlines/ru_stmt_35.png', 'path': 'headlines/ru_stmt_35.png'},
    {'name': 'headlines/en_stmt_35.png', 'path': 'headlines/en_stmt_35.png'},
    {'name': 'headlines/ru_stmt_36.png', 'path': 'headlines/ru_stmt_36.png'},
    {'name': 'headlines/en_stmt_36.png', 'path': 'headlines/en_stmt_36.png'},
    {'name': 'headlines/ru_stmt_37.png', 'path': 'headlines/ru_stmt_37.png'},
    {'name': 'headlines/en_stmt_37.png', 'path': 'headlines/en_stmt_37.png'},
    {'name': 'headlines/ru_stmt_38.png', 'path': 'headlines/ru_stmt_38.png'},
    {'name': 'headlines/en_stmt_38.png', 'path': 'headlines/en_stmt_38.png'},
    {'name': 'headlines/ru_stmt_39.png', 'path': 'headlines/ru_stmt_39.png'},
    {'name': 'headlines/en_stmt_39.png', 'path': 'headlines/en_stmt_39.png'},
    {'name': 'headlines/ru_stmt_41.png', 'path': 'headlines/ru_stmt_41.png'},
    {'name': 'headlines/en_stmt_41.png', 'path': 'headlines/en_stmt_41.png'},
    {'name': 'headlines/ru_stmt_42.png', 'path': 'headlines/ru_stmt_42.png'},
    {'name': 'headlines/en_stmt_42.png', 'path': 'headlines/en_stmt_42.png'},
    {'name': 'headlines/ru_stmt_43.png', 'path': 'headlines/ru_stmt_43.png'},
    {'name': 'headlines/en_stmt_43.png', 'path': 'headlines/en_stmt_43.png'},
    {'name': 'headlines/ru_stmt_44.png', 'path': 'headlines/ru_stmt_44.png'},
    {'name': 'headlines/en_stmt_44.png', 'path': 'headlines/en_stmt_44.png'},
    {'name': 'headlines/ru_stmt_45.png', 'path': 'headlines/ru_stmt_45.png'},
    {'name': 'headlines/en_stmt_45.png', 'path': 'headlines/en_stmt_45.png'},
    {'name': 'headlines/ru_stmt_46.png', 'path': 'headlines/ru_stmt_46.png'},
    {'name': 'headlines/en_stmt_46.png', 'path': 'headlines/en_stmt_46.png'},
    {'name': 'headlines/ru_stmt_47.png', 'path': 'headlines/ru_stmt_47.png'},
    {'name': 'headlines/en_stmt_47.png', 'path': 'headlines/en_stmt_47.png'},
    {'name': 'headlines/ru_stmt_48.png', 'path': 'headlines/ru_stmt_48.png'},
    {'name': 'headlines/en_stmt_48.png', 'path': 'headlines/en_stmt_48.png'},
    {'name': 'headlines/ru_stmt_49.png', 'path': 'headlines/ru_stmt_49.png'},
    {'name': 'headlines/en_stmt_49.png', 'path': 'headlines/en_stmt_49.png'},
    {'name': 'headlines/ru_stmt_50.png', 'path': 'headlines/ru_stmt_50.png'},
    {'name': 'headlines/en_stmt_50.png', 'path': 'headlines/en_stmt_50.png'},
    {'name': 'headlines/ru_stmt_51.png', 'path': 'headlines/ru_stmt_51.png'},
    {'name': 'headlines/en_stmt_51.png', 'path': 'headlines/en_stmt_51.png'},
    {'name': 'headlines/ru_stmt_52.png', 'path': 'headlines/ru_stmt_52.png'},
    {'name': 'headlines/en_stmt_52.png', 'path': 'headlines/en_stmt_52.png'},
    {'name': 'headlines/ru_stmt_53.png', 'path': 'headlines/ru_stmt_53.png'},
    {'name': 'headlines/en_stmt_53.png', 'path': 'headlines/en_stmt_53.png'},
    {'name': 'headlines/ru_stmt_56.png', 'path': 'headlines/ru_stmt_56.png'},
    {'name': 'headlines/en_stmt_56.png', 'path': 'headlines/en_stmt_56.png'},
    {'name': 'headlines/ru_stmt_57.png', 'path': 'headlines/ru_stmt_57.png'},
    {'name': 'headlines/en_stmt_57.png', 'path': 'headlines/en_stmt_57.png'},
    {'name': 'headlines/ru_stmt_58.png', 'path': 'headlines/ru_stmt_58.png'},
    {'name': 'headlines/en_stmt_58.png', 'path': 'headlines/en_stmt_58.png'},
    {'name': 'headlines/ru_stmt_60.png', 'path': 'headlines/ru_stmt_60.png'},
    {'name': 'headlines/en_stmt_60.png', 'path': 'headlines/en_stmt_60.png'},
    {'name': 'headlines/ru_stmt_61.png', 'path': 'headlines/ru_stmt_61.png'},
    {'name': 'headlines/en_stmt_61.png', 'path': 'headlines/en_stmt_61.png'},
    {'name': 'headlines/ru_stmt_62.png', 'path': 'headlines/ru_stmt_62.png'},
    {'name': 'headlines/en_stmt_62.png', 'path': 'headlines/en_stmt_62.png'},
    {'name': 'headlines/ru_stmt_64.png', 'path': 'headlines/ru_stmt_64.png'},
    {'name': 'headlines/en_stmt_64.png', 'path': 'headlines/en_stmt_64.png'},
    {'name': 'headlines/ru_stmt_65.png', 'path': 'headlines/ru_stmt_65.png'},
    {'name': 'headlines/en_stmt_65.png', 'path': 'headlines/en_stmt_65.png'},
    {'name': 'headlines/ru_stmt_66.png', 'path': 'headlines/ru_stmt_66.png'},
    {'name': 'headlines/en_stmt_66.png', 'path': 'headlines/en_stmt_66.png'},
    {'name': 'headlines/ru_stmt_67.png', 'path': 'headlines/ru_stmt_67.png'},
    {'name': 'headlines/en_stmt_67.png', 'path': 'headlines/en_stmt_67.png'},
    {'name': 'headlines/ru_stmt_68.png', 'path': 'headlines/ru_stmt_68.png'},
    {'name': 'headlines/en_stmt_68.png', 'path': 'headlines/en_stmt_68.png'},
    {'name': 'headlines/ru_stmt_69.png', 'path': 'headlines/ru_stmt_69.png'},
    {'name': 'headlines/en_stmt_69.png', 'path': 'headlines/en_stmt_69.png'},
    {'name': 'headlines/ru_stmt_70.png', 'path': 'headlines/ru_stmt_70.png'},
    {'name': 'headlines/en_stmt_70.png', 'path': 'headlines/en_stmt_70.png'},
    {'name': 'headlines/ru_stmt_71.png', 'path': 'headlines/ru_stmt_71.png'},
    {'name': 'headlines/en_stmt_71.png', 'path': 'headlines/en_stmt_71.png'},
    {'name': 'headlines/ru_stmt_72.png', 'path': 'headlines/ru_stmt_72.png'},
    {'name': 'headlines/en_stmt_72.png', 'path': 'headlines/en_stmt_72.png'},
    {'name': 'headlines/ru_stmt_73.png', 'path': 'headlines/ru_stmt_73.png'},
    {'name': 'headlines/en_stmt_73.png', 'path': 'headlines/en_stmt_73.png'},
    {'name': 'headlines/ru_stmt_74.png', 'path': 'headlines/ru_stmt_74.png'},
    {'name': 'headlines/en_stmt_74.png', 'path': 'headlines/en_stmt_74.png'},
    {'name': 'headlines/ru_stmt_75.png', 'path': 'headlines/ru_stmt_75.png'},
    {'name': 'headlines/en_stmt_75.png', 'path': 'headlines/en_stmt_75.png'},
    {'name': 'headlines/ru_stmt_76.png', 'path': 'headlines/ru_stmt_76.png'},
    {'name': 'headlines/en_stmt_76.png', 'path': 'headlines/en_stmt_76.png'},
    {'name': 'headlines/ru_stmt_77.png', 'path': 'headlines/ru_stmt_77.png'},
    {'name': 'headlines/en_stmt_77.png', 'path': 'headlines/en_stmt_77.png'},
    {'name': 'headlines/ru_stmt_78.png', 'path': 'headlines/ru_stmt_78.png'},
    {'name': 'headlines/en_stmt_78.png', 'path': 'headlines/en_stmt_78.png'},
    {'name': 'headlines/ru_stmt_79.png', 'path': 'headlines/ru_stmt_79.png'},
    {'name': 'headlines/en_stmt_79.png', 'path': 'headlines/en_stmt_79.png'},
    {'name': 'headlines/ru_stmt_80.png', 'path': 'headlines/ru_stmt_80.png'},
    {'name': 'headlines/en_stmt_80.png', 'path': 'headlines/en_stmt_80.png'},
    {'name': 'headlines/ru_stmt_81.png', 'path': 'headlines/ru_stmt_81.png'},
    {'name': 'headlines/en_stmt_81.png', 'path': 'headlines/en_stmt_81.png'},
    {'name': 'headlines/ru_stmt_83.png', 'path': 'headlines/ru_stmt_83.png'},
    {'name': 'headlines/en_stmt_83.png', 'path': 'headlines/en_stmt_83.png'},
    {'name': 'headlines/ru_stmt_84.png', 'path': 'headlines/ru_stmt_84.png'},
    {'name': 'headlines/en_stmt_84.png', 'path': 'headlines/en_stmt_84.png'},
    {'name': 'headlines/ru_stmt_85.png', 'path': 'headlines/ru_stmt_85.png'},
    {'name': 'headlines/en_stmt_85.png', 'path': 'headlines/en_stmt_85.png'},
    {'name': 'headlines/ru_stmt_86.png', 'path': 'headlines/ru_stmt_86.png'},
    {'name': 'headlines/en_stmt_86.png', 'path': 'headlines/en_stmt_86.png'},
    {'name': 'headlines/ru_stmt_87.png', 'path': 'headlines/ru_stmt_87.png'},
    {'name': 'headlines/en_stmt_87.png', 'path': 'headlines/en_stmt_87.png'},
    {'name': 'headlines/ru_stmt_88.png', 'path': 'headlines/ru_stmt_88.png'},
    {'name': 'headlines/en_stmt_88.png', 'path': 'headlines/en_stmt_88.png'},
    {'name': 'headlines/ru_stmt_89.png', 'path': 'headlines/ru_stmt_89.png'},
    {'name': 'headlines/en_stmt_89.png', 'path': 'headlines/en_stmt_89.png'},
    {'name': 'headlines/ru_stmt_90.png', 'path': 'headlines/ru_stmt_90.png'},
    {'name': 'headlines/en_stmt_90.png', 'path': 'headlines/en_stmt_90.png'},
    {'name': 'headlines/ru_stmt_91.png', 'path': 'headlines/ru_stmt_91.png'},
    {'name': 'headlines/en_stmt_91.png', 'path': 'headlines/en_stmt_91.png'},
    {'name': 'headlines/ru_stmt_92.png', 'path': 'headlines/ru_stmt_92.png'},
    {'name': 'headlines/en_stmt_92.png', 'path': 'headlines/en_stmt_92.png'},
    {'name': 'headlines/ru_stmt_93.png', 'path': 'headlines/ru_stmt_93.png'},
    {'name': 'headlines/en_stmt_93.png', 'path': 'headlines/en_stmt_93.png'},
    {'name': 'headlines/ru_stmt_94.png', 'path': 'headlines/ru_stmt_94.png'},
    {'name': 'headlines/en_stmt_94.png', 'path': 'headlines/en_stmt_94.png'},
    {'name': 'headlines/ru_stmt_95.png', 'path': 'headlines/ru_stmt_95.png'},
    {'name': 'headlines/en_stmt_95.png', 'path': 'headlines/en_stmt_95.png'},
    {'name': 'headlines/ru_stmt_96.png', 'path': 'headlines/ru_stmt_96.png'},
    {'name': 'headlines/en_stmt_96.png', 'path': 'headlines/en_stmt_96.png'},
    {'name': 'headlines/ru_stmt_97.png', 'path': 'headlines/ru_stmt_97.png'},
    {'name': 'headlines/en_stmt_97.png', 'path': 'headlines/en_stmt_97.png'},
    {'name': 'headlines/ru_stmt_100.png', 'path': 'headlines/ru_stmt_100.png'},
    {'name': 'headlines/en_stmt_100.png', 'path': 'headlines/en_stmt_100.png'},
    {'name': 'headlines/ru_stmt_101.png', 'path': 'headlines/ru_stmt_101.png'},
    {'name': 'headlines/en_stmt_101.png', 'path': 'headlines/en_stmt_101.png'},
    {'name': 'headlines/ru_stmt_102.png', 'path': 'headlines/ru_stmt_102.png'},
    {'name': 'headlines/en_stmt_102.png', 'path': 'headlines/en_stmt_102.png'},
    {'name': 'headlines/ru_stmt_103.png', 'path': 'headlines/ru_stmt_103.png'},
    {'name': 'headlines/en_stmt_103.png', 'path': 'headlines/en_stmt_103.png'},
    {'name': 'headlines/ru_stmt_104.png', 'path': 'headlines/ru_stmt_104.png'},
    {'name': 'headlines/en_stmt_104.png', 'path': 'headlines/en_stmt_104.png'},
    {'name': 'headlines/ru_stmt_105.png', 'path': 'headlines/ru_stmt_105.png'},
    {'name': 'headlines/en_stmt_105.png', 'path': 'headlines/en_stmt_105.png'},
    {'name': 'headlines/ru_stmt_106.png', 'path': 'headlines/ru_stmt_106.png'},
    {'name': 'headlines/en_stmt_106.png', 'path': 'headlines/en_stmt_106.png'},
    {'name': 'headlines/ru_stmt_107.png', 'path': 'headlines/ru_stmt_107.png'},
    {'name': 'headlines/en_stmt_107.png', 'path': 'headlines/en_stmt_107.png'},
    {'name': 'headlines/ru_stmt_108.png', 'path': 'headlines/ru_stmt_108.png'},
    {'name': 'headlines/en_stmt_108.png', 'path': 'headlines/en_stmt_108.png'},
    {'name': 'headlines/ru_stmt_109.png', 'path': 'headlines/ru_stmt_109.png'},
    {'name': 'headlines/en_stmt_109.png', 'path': 'headlines/en_stmt_109.png'},
    {'name': 'headlines/ru_stmt_110.png', 'path': 'headlines/ru_stmt_110.png'},
    {'name': 'headlines/en_stmt_110.png', 'path': 'headlines/en_stmt_110.png'},
    {'name': 'headlines/ru_stmt_111.png', 'path': 'headlines/ru_stmt_111.png'},
    {'name': 'headlines/en_stmt_111.png', 'path': 'headlines/en_stmt_111.png'},
    {'name': 'headlines/ru_stmt_112.png', 'path': 'headlines/ru_stmt_112.png'},
    {'name': 'headlines/en_stmt_112.png', 'path': 'headlines/en_stmt_112.png'},
    {'name': 'headlines/ru_stmt_113.png', 'path': 'headlines/ru_stmt_113.png'},
    {'name': 'headlines/en_stmt_113.png', 'path': 'headlines/en_stmt_113.png'},
    {'name': 'headlines/ru_stmt_114.png', 'path': 'headlines/ru_stmt_114.png'},
    {'name': 'headlines/en_stmt_114.png', 'path': 'headlines/en_stmt_114.png'},
    {'name': 'headlines/ru_stmt_115.png', 'path': 'headlines/ru_stmt_115.png'},
    {'name': 'headlines/en_stmt_115.png', 'path': 'headlines/en_stmt_115.png'},
    {'name': 'headlines/ru_stmt_117.png', 'path': 'headlines/ru_stmt_117.png'},
    {'name': 'headlines/en_stmt_117.png', 'path': 'headlines/en_stmt_117.png'},
    {'name': 'headlines/ru_stmt_118.png', 'path': 'headlines/ru_stmt_118.png'},
    {'name': 'headlines/en_stmt_118.png', 'path': 'headlines/en_stmt_118.png'},
    {'name': 'headlines/ru_stmt_119.png', 'path': 'headlines/ru_stmt_119.png'},
    {'name': 'headlines/en_stmt_119.png', 'path': 'headlines/en_stmt_119.png'},
    {'name': 'headlines/ru_stmt_120.png', 'path': 'headlines/ru_stmt_120.png'},
    {'name': 'headlines/en_stmt_120.png', 'path': 'headlines/en_stmt_120.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  let currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["ID"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var setupClock;
var list_version;
var lang_map;
var InstructionClock;
var text_2;
var proceed;
var trialClock;
var text;
var image;
var proceed_2;
var ratings_ruClock;
var Credibility;
var Familiarity;
var Valence;
var key_resp;
var cred_text;
var fam_text;
var val_text;
var text_continue;
var corr_ruClock;
var image_2;
var overlay;
var corr;
var rate_corr_ruClock;
var cred_corr;
var text_cred;
var conf_corr;
var text_conf;
var press;
var proc;
var ratings_enClock;
var Credibility_2;
var Familiarity_2;
var Valence_2;
var Understanding;
var key_resp_2;
var cred_text_2;
var fam_text_2;
var val_text_2;
var und_text;
var text_continue_2;
var corr_enClock;
var image_3;
var overlay_2;
var corr_2;
var rate_corr_enClock;
var cred_corr_2;
var text_cred_2;
var conf_corr_2;
var text_conf_2;
var press_2;
var proc_2;
var osfClock;
var text_wait;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  // Run 'Begin Experiment' code from setup_code
  list_version = [1, 2][Math.floor(Math.random() * 2)];
  
  if ((list_version === 1)) {
      lang_map = {"A": "RU", "B": "EN"};
  } else {
      lang_map = {"A": "EN", "B": "RU"};
  }
  
  console.log(`List version ${list_version}`);
  console.log("Language mapping:", lang_map);
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'В этом исследовании вам будут показаны утверждения на русском или английском языке, связанные с медициной и здоровьем.\n\nПосле каждого утверждения вам будет предложено оценить ваше отношение к нему.\n\nЗатем каждое утверждение будет подвержено факт-чекингу, основанном на современном медицинском консенсусе.\n\nПосле этого вам снова будет предложено оценить своё отношение к тому же утверждению.\n\nПожалуйста, внимательно читайте все материалы и оценивайте утверждения исходя из собственного мнения.\n В исследовании нет правильных или неправильных ответов — нас интересует ваше личное восприятие.\n\nДля начала эксперимента нажмите клавишу ПРОБЕЛ.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  proceed = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  proceed_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ratings_ru"
  ratings_ruClock = new util.Clock();
  Credibility = new visual.Slider({
    win: psychoJS.window, name: 'Credibility',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0.15], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Familiarity = new visual.Slider({
    win: psychoJS.window, name: 'Familiarity',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0.0], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  Valence = new visual.Slider({
    win: psychoJS.window, name: 'Valence',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  cred_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cred_text',
    text: 'Насколько достоверным кажется утверждение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  fam_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fam_text',
    text: 'Насколько вам знакома эта информация?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  val_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'val_text',
    text: 'Насколько эмоциональным кажется утверждение?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_continue',
    text: 'После оценивания нажмите ПРОБЕЛ для продолжения.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "corr_ru"
  corr_ruClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  overlay = new visual.Rect ({
    win: psychoJS.window, name: 'overlay', units : 'norm', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 0.7, 
    depth: -2, 
    interpolate: true, 
  });
  
  corr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'corr', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "rate_corr_ru"
  rate_corr_ruClock = new util.Clock();
  cred_corr = new visual.Slider({
    win: psychoJS.window, name: 'cred_corr',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0.15], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_cred = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_cred',
    text: 'Насколько достоверным кажется утверждение теперь?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  conf_corr = new visual.Slider({
    win: psychoJS.window, name: 'conf_corr',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  text_conf = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_conf',
    text: 'Насколько вы уверены в своем ответе?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  proc = new visual.TextStim({
    win: psychoJS.window,
    name: 'proc',
    text: 'После оценивания нажмите ПРОБЕЛ для продолжения.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "ratings_en"
  ratings_enClock = new util.Clock();
  Credibility_2 = new visual.Slider({
    win: psychoJS.window, name: 'Credibility_2',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0.25], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Familiarity_2 = new visual.Slider({
    win: psychoJS.window, name: 'Familiarity_2',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0.1], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  Valence_2 = new visual.Slider({
    win: psychoJS.window, name: 'Valence_2',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  Understanding = new visual.Slider({
    win: psychoJS.window, name: 'Understanding',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  cred_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cred_text_2',
    text: 'How credible do you find this statement?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  fam_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fam_text_2',
    text: 'How familiar is this information to you?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  val_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'val_text_2',
    text: 'How emotional does the statement seem?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  und_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'und_text',
    text: 'Did you fully understand the meaning of this statement?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_continue_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_continue_2',
    text: 'After rating the statement, press SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "corr_en"
  corr_enClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  overlay_2 = new visual.Rect ({
    win: psychoJS.window, name: 'overlay_2', units : 'norm', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 0.7, 
    depth: -2, 
    interpolate: true, 
  });
  
  corr_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'corr_2', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "rate_corr_en"
  rate_corr_enClock = new util.Clock();
  cred_corr_2 = new visual.Slider({
    win: psychoJS.window, name: 'cred_corr_2',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0.15], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_cred_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_cred_2',
    text: 'How credible do you find this statement now?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  conf_corr_2 = new visual.Slider({
    win: psychoJS.window, name: 'conf_corr_2',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: [(- 2), (- 1), 0, 1, 2], fontSize: 0.03, ticks: [(- 2), (- 1), 0, 1, 2],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  text_conf_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_conf_2',
    text: 'How confident are you in your answer above?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  press_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  proc_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'proc_2',
    text: 'After rating the statement, press SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "osf"
  osfClock = new util.Clock();
  text_wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_wait',
    text: 'Пожалуйста, подождите.\n\nИдет запись данных эксперимента. Не закрывайте эту страницу.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var setupMaxDurationReached;
var setupMaxDuration;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setup' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    setupClock.reset();
    routineTimer.reset();
    setupMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('setup.started', globalClock.getTime());
    setupMaxDuration = null
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setup' ---
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setup' ---
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('setup.stopped', globalClock.getTime());
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var InstructionMaxDurationReached;
var _proceed_allKeys;
var InstructionMaxDuration;
var InstructionComponents;
function InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionClock.reset();
    routineTimer.reset();
    InstructionMaxDurationReached = false;
    // update component parameters for each repeat
    proceed.keys = undefined;
    proceed.rt = undefined;
    _proceed_allKeys = [];
    psychoJS.experiment.addData('Instruction.started', globalClock.getTime());
    InstructionMaxDuration = null
    // keep track of which components have finished
    InstructionComponents = [];
    InstructionComponents.push(text_2);
    InstructionComponents.push(proceed);
    
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction' ---
    // get current time
    t = InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *proceed* updates
    if (t >= 0.0 && proceed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed.tStart = t;  // (not accounting for frame time here)
      proceed.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { proceed.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { proceed.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { proceed.clearEvents(); });
    }
    
    // if proceed is active this frame...
    if (proceed.status === PsychoJS.Status.STARTED) {
      let theseKeys = proceed.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _proceed_allKeys = _proceed_allKeys.concat(theseKeys);
      if (_proceed_allKeys.length > 0) {
        proceed.keys = _proceed_allKeys[_proceed_allKeys.length - 1].name;  // just the last key pressed
        proceed.rt = _proceed_allKeys[_proceed_allKeys.length - 1].rt;
        proceed.duration = _proceed_allKeys[_proceed_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction' ---
    for (const thisComponent of InstructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(proceed.corr, level);
    }
    psychoJS.experiment.addData('proceed.keys', proceed.keys);
    if (typeof proceed.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('proceed.rt', proceed.rt);
        psychoJS.experiment.addData('proceed.duration', proceed.duration);
        routineTimer.reset();
        }
    
    proceed.stop();
    // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stims_set.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(ratings_ruRoutineBegin(snapshot));
      trialsLoopScheduler.add(ratings_ruRoutineEachFrame());
      trialsLoopScheduler.add(ratings_ruRoutineEnd(snapshot));
      trialsLoopScheduler.add(corr_ruRoutineBegin(snapshot));
      trialsLoopScheduler.add(corr_ruRoutineEachFrame());
      trialsLoopScheduler.add(corr_ruRoutineEnd(snapshot));
      trialsLoopScheduler.add(rate_corr_ruRoutineBegin(snapshot));
      trialsLoopScheduler.add(rate_corr_ruRoutineEachFrame());
      trialsLoopScheduler.add(rate_corr_ruRoutineEnd(snapshot));
      trialsLoopScheduler.add(ratings_enRoutineBegin(snapshot));
      trialsLoopScheduler.add(ratings_enRoutineEachFrame());
      trialsLoopScheduler.add(ratings_enRoutineEnd(snapshot));
      trialsLoopScheduler.add(corr_enRoutineBegin(snapshot));
      trialsLoopScheduler.add(corr_enRoutineEachFrame());
      trialsLoopScheduler.add(corr_enRoutineEnd(snapshot));
      trialsLoopScheduler.add(rate_corr_enRoutineBegin(snapshot));
      trialsLoopScheduler.add(rate_corr_enRoutineEachFrame());
      trialsLoopScheduler.add(rate_corr_enRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var current_set;
var current_lang;
var headline;
var instruction_text;
var _proceed_2_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from trial_code
    current_set = Set;
    current_lang = lang_map[current_set];
    if ((current_lang === "RU")) {
        headline = ru_pic;
        instruction_text = "Нажмите ПРОБЕЛ для продолжения.";
    } else {
        if ((current_lang === "EN")) {
            headline = en_pic;
            instruction_text = "Press SPACE to continue.";
        } else {
            trial_text = "ERROR: language not defined";
        }
    }
    
    text.setText(instruction_text);
    image.setImage(headline);
    proceed_2.keys = undefined;
    proceed_2.rt = undefined;
    _proceed_2_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text);
    trialComponents.push(image);
    trialComponents.push(proceed_2);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *proceed_2* updates
    if (t >= 0.0 && proceed_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed_2.tStart = t;  // (not accounting for frame time here)
      proceed_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { proceed_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { proceed_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { proceed_2.clearEvents(); });
    }
    
    // if proceed_2 is active this frame...
    if (proceed_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = proceed_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _proceed_2_allKeys = _proceed_2_allKeys.concat(theseKeys);
      if (_proceed_2_allKeys.length > 0) {
        proceed_2.keys = _proceed_2_allKeys[_proceed_2_allKeys.length - 1].name;  // just the last key pressed
        proceed_2.rt = _proceed_2_allKeys[_proceed_2_allKeys.length - 1].rt;
        proceed_2.duration = _proceed_2_allKeys[_proceed_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from trial_code
    psychoJS.experiment.addData("LanguageShown", current_lang);
    psychoJS.experiment.addData("Set", current_set);
    console.log(`Trial ${textId} | Set ${current_set} | Language ${current_lang}`);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(proceed_2.corr, level);
    }
    psychoJS.experiment.addData('proceed_2.keys', proceed_2.keys);
    if (typeof proceed_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('proceed_2.rt', proceed_2.rt);
        psychoJS.experiment.addData('proceed_2.duration', proceed_2.duration);
        routineTimer.reset();
        }
    
    proceed_2.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ratings_ruMaxDurationReached;
var _key_resp_allKeys;
var ratings_ruMaxDuration;
var ratings_ruComponents;
function ratings_ruRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ratings_ru' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ratings_ruClock.reset();
    routineTimer.reset();
    ratings_ruMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from rating_code
    continueRoutine = (current_lang === "RU");
    psychoJS.window.mouseVisible = true;
    
    Credibility.reset()
    Familiarity.reset()
    Valence.reset()
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('ratings_ru.started', globalClock.getTime());
    ratings_ruMaxDuration = null
    // keep track of which components have finished
    ratings_ruComponents = [];
    ratings_ruComponents.push(Credibility);
    ratings_ruComponents.push(Familiarity);
    ratings_ruComponents.push(Valence);
    ratings_ruComponents.push(key_resp);
    ratings_ruComponents.push(cred_text);
    ratings_ruComponents.push(fam_text);
    ratings_ruComponents.push(val_text);
    ratings_ruComponents.push(text_continue);
    
    for (const thisComponent of ratings_ruComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ratings_ruRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ratings_ru' ---
    // get current time
    t = ratings_ruClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Credibility* updates
    if (t >= 0.0 && Credibility.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Credibility.tStart = t;  // (not accounting for frame time here)
      Credibility.frameNStart = frameN;  // exact frame index
      
      Credibility.setAutoDraw(true);
    }
    
    
    // if Credibility is active this frame...
    if (Credibility.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Familiarity* updates
    if (t >= 0.0 && Familiarity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Familiarity.tStart = t;  // (not accounting for frame time here)
      Familiarity.frameNStart = frameN;  // exact frame index
      
      Familiarity.setAutoDraw(true);
    }
    
    
    // if Familiarity is active this frame...
    if (Familiarity.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Valence* updates
    if (t >= 0.0 && Valence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Valence.tStart = t;  // (not accounting for frame time here)
      Valence.frameNStart = frameN;  // exact frame index
      
      Valence.setAutoDraw(true);
    }
    
    
    // if Valence is active this frame...
    if (Valence.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *cred_text* updates
    if (t >= 0.0 && cred_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cred_text.tStart = t;  // (not accounting for frame time here)
      cred_text.frameNStart = frameN;  // exact frame index
      
      cred_text.setAutoDraw(true);
    }
    
    
    // if cred_text is active this frame...
    if (cred_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fam_text* updates
    if (t >= 0.0 && fam_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fam_text.tStart = t;  // (not accounting for frame time here)
      fam_text.frameNStart = frameN;  // exact frame index
      
      fam_text.setAutoDraw(true);
    }
    
    
    // if fam_text is active this frame...
    if (fam_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *val_text* updates
    if (t >= 0.0 && val_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      val_text.tStart = t;  // (not accounting for frame time here)
      val_text.frameNStart = frameN;  // exact frame index
      
      val_text.setAutoDraw(true);
    }
    
    
    // if val_text is active this frame...
    if (val_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_continue* updates
    if (t >= 0.0 && text_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_continue.tStart = t;  // (not accounting for frame time here)
      text_continue.frameNStart = frameN;  // exact frame index
      
      text_continue.setAutoDraw(true);
    }
    
    
    // if text_continue is active this frame...
    if (text_continue.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ratings_ruComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ratings_ruRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ratings_ru' ---
    for (const thisComponent of ratings_ruComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ratings_ru.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Credibility.response', Credibility.getRating());
    psychoJS.experiment.addData('Credibility.rt', Credibility.getRT());
    psychoJS.experiment.addData('Familiarity.response', Familiarity.getRating());
    psychoJS.experiment.addData('Familiarity.rt', Familiarity.getRT());
    psychoJS.experiment.addData('Valence.response', Valence.getRating());
    psychoJS.experiment.addData('Valence.rt', Valence.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "ratings_ru" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corr_ruMaxDurationReached;
var corr_img;
var corr_ruMaxDuration;
var corr_ruComponents;
function corr_ruRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'corr_ru' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    corr_ruClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    corr_ruMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from corr_code
    continueRoutine = (current_lang === "RU");
    if ((text_veracity === "T")) {
        corr_img = "corrections/ru_true.png";
    } else {
        if ((text_veracity === "F")) {
            corr_img = "corrections/ru_fake.png";
        } else {
            corr_img = "corrections/ru_disp.png";
        }
    }
    
    image_2.setImage(headline);
    corr.setImage(corr_ru_pic);
    psychoJS.experiment.addData('corr_ru.started', globalClock.getTime());
    corr_ruMaxDuration = null
    // keep track of which components have finished
    corr_ruComponents = [];
    corr_ruComponents.push(image_2);
    corr_ruComponents.push(overlay);
    corr_ruComponents.push(corr);
    
    for (const thisComponent of corr_ruComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function corr_ruRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'corr_ru' ---
    // get current time
    t = corr_ruClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_2.tStop = t;  // not accounting for scr refresh
      image_2.frameNStop = frameN;  // exact frame index
      // update status
      image_2.status = PsychoJS.Status.FINISHED;
      image_2.setAutoDraw(false);
    }
    
    
    // *overlay* updates
    if (t >= 0.0 && overlay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      overlay.tStart = t;  // (not accounting for frame time here)
      overlay.frameNStart = frameN;  // exact frame index
      
      overlay.setAutoDraw(true);
    }
    
    
    // if overlay is active this frame...
    if (overlay.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (overlay.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      overlay.tStop = t;  // not accounting for scr refresh
      overlay.frameNStop = frameN;  // exact frame index
      // update status
      overlay.status = PsychoJS.Status.FINISHED;
      overlay.setAutoDraw(false);
    }
    
    
    // *corr* updates
    if (t >= 0.0 && corr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corr.tStart = t;  // (not accounting for frame time here)
      corr.frameNStart = frameN;  // exact frame index
      
      corr.setAutoDraw(true);
    }
    
    
    // if corr is active this frame...
    if (corr.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (corr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      corr.tStop = t;  // not accounting for scr refresh
      corr.frameNStop = frameN;  // exact frame index
      // update status
      corr.status = PsychoJS.Status.FINISHED;
      corr.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of corr_ruComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function corr_ruRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'corr_ru' ---
    for (const thisComponent of corr_ruComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('corr_ru.stopped', globalClock.getTime());
    // Run 'End Routine' code from corr_code
    psychoJS.experiment.addData("LanguageShown", current_lang);
    psychoJS.experiment.addData("Set", current_set);
    console.log(`Trial ${textId} | Set ${current_set} | Language ${current_lang}`);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (corr_ruMaxDurationReached) {
        corr_ruClock.add(corr_ruMaxDuration);
    } else {
        corr_ruClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rate_corr_ruMaxDurationReached;
var _press_allKeys;
var rate_corr_ruMaxDuration;
var rate_corr_ruComponents;
function rate_corr_ruRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rate_corr_ru' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    rate_corr_ruClock.reset();
    routineTimer.reset();
    rate_corr_ruMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from rate_corr
    continueRoutine = (current_lang === "RU");
    psychoJS.window.mouseVisible = true;
    
    cred_corr.reset()
    conf_corr.reset()
    press.keys = undefined;
    press.rt = undefined;
    _press_allKeys = [];
    psychoJS.experiment.addData('rate_corr_ru.started', globalClock.getTime());
    rate_corr_ruMaxDuration = null
    // keep track of which components have finished
    rate_corr_ruComponents = [];
    rate_corr_ruComponents.push(cred_corr);
    rate_corr_ruComponents.push(text_cred);
    rate_corr_ruComponents.push(conf_corr);
    rate_corr_ruComponents.push(text_conf);
    rate_corr_ruComponents.push(press);
    rate_corr_ruComponents.push(proc);
    
    for (const thisComponent of rate_corr_ruComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rate_corr_ruRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rate_corr_ru' ---
    // get current time
    t = rate_corr_ruClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cred_corr* updates
    if (t >= 0.0 && cred_corr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cred_corr.tStart = t;  // (not accounting for frame time here)
      cred_corr.frameNStart = frameN;  // exact frame index
      
      cred_corr.setAutoDraw(true);
    }
    
    
    // if cred_corr is active this frame...
    if (cred_corr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_cred* updates
    if (t >= 0.0 && text_cred.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_cred.tStart = t;  // (not accounting for frame time here)
      text_cred.frameNStart = frameN;  // exact frame index
      
      text_cred.setAutoDraw(true);
    }
    
    
    // if text_cred is active this frame...
    if (text_cred.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *conf_corr* updates
    if (t >= 0.0 && conf_corr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conf_corr.tStart = t;  // (not accounting for frame time here)
      conf_corr.frameNStart = frameN;  // exact frame index
      
      conf_corr.setAutoDraw(true);
    }
    
    
    // if conf_corr is active this frame...
    if (conf_corr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_conf* updates
    if (t >= 0.0 && text_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_conf.tStart = t;  // (not accounting for frame time here)
      text_conf.frameNStart = frameN;  // exact frame index
      
      text_conf.setAutoDraw(true);
    }
    
    
    // if text_conf is active this frame...
    if (text_conf.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *press* updates
    if (t >= 0.0 && press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press.tStart = t;  // (not accounting for frame time here)
      press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { press.clearEvents(); });
    }
    
    // if press is active this frame...
    if (press.status === PsychoJS.Status.STARTED) {
      let theseKeys = press.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _press_allKeys = _press_allKeys.concat(theseKeys);
      if (_press_allKeys.length > 0) {
        press.keys = _press_allKeys[_press_allKeys.length - 1].name;  // just the last key pressed
        press.rt = _press_allKeys[_press_allKeys.length - 1].rt;
        press.duration = _press_allKeys[_press_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *proc* updates
    if (t >= 0.0 && proc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proc.tStart = t;  // (not accounting for frame time here)
      proc.frameNStart = frameN;  // exact frame index
      
      proc.setAutoDraw(true);
    }
    
    
    // if proc is active this frame...
    if (proc.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rate_corr_ruComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rate_corr_ruRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rate_corr_ru' ---
    for (const thisComponent of rate_corr_ruComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rate_corr_ru.stopped', globalClock.getTime());
    psychoJS.experiment.addData('cred_corr.response', cred_corr.getRating());
    psychoJS.experiment.addData('cred_corr.rt', cred_corr.getRT());
    psychoJS.experiment.addData('conf_corr.response', conf_corr.getRating());
    psychoJS.experiment.addData('conf_corr.rt', conf_corr.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(press.corr, level);
    }
    psychoJS.experiment.addData('press.keys', press.keys);
    if (typeof press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('press.rt', press.rt);
        psychoJS.experiment.addData('press.duration', press.duration);
        routineTimer.reset();
        }
    
    press.stop();
    // the Routine "rate_corr_ru" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ratings_enMaxDurationReached;
var _key_resp_2_allKeys;
var ratings_enMaxDuration;
var ratings_enComponents;
function ratings_enRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ratings_en' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ratings_enClock.reset();
    routineTimer.reset();
    ratings_enMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    continueRoutine = (current_lang === "EN");
    psychoJS.window.mouseVisible = true;
    
    Credibility_2.reset()
    Familiarity_2.reset()
    Valence_2.reset()
    Understanding.reset()
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('ratings_en.started', globalClock.getTime());
    ratings_enMaxDuration = null
    // keep track of which components have finished
    ratings_enComponents = [];
    ratings_enComponents.push(Credibility_2);
    ratings_enComponents.push(Familiarity_2);
    ratings_enComponents.push(Valence_2);
    ratings_enComponents.push(Understanding);
    ratings_enComponents.push(key_resp_2);
    ratings_enComponents.push(cred_text_2);
    ratings_enComponents.push(fam_text_2);
    ratings_enComponents.push(val_text_2);
    ratings_enComponents.push(und_text);
    ratings_enComponents.push(text_continue_2);
    
    for (const thisComponent of ratings_enComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ratings_enRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ratings_en' ---
    // get current time
    t = ratings_enClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Credibility_2* updates
    if (t >= 0.0 && Credibility_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Credibility_2.tStart = t;  // (not accounting for frame time here)
      Credibility_2.frameNStart = frameN;  // exact frame index
      
      Credibility_2.setAutoDraw(true);
    }
    
    
    // if Credibility_2 is active this frame...
    if (Credibility_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Familiarity_2* updates
    if (t >= 0.0 && Familiarity_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Familiarity_2.tStart = t;  // (not accounting for frame time here)
      Familiarity_2.frameNStart = frameN;  // exact frame index
      
      Familiarity_2.setAutoDraw(true);
    }
    
    
    // if Familiarity_2 is active this frame...
    if (Familiarity_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Valence_2* updates
    if (t >= 0.0 && Valence_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Valence_2.tStart = t;  // (not accounting for frame time here)
      Valence_2.frameNStart = frameN;  // exact frame index
      
      Valence_2.setAutoDraw(true);
    }
    
    
    // if Valence_2 is active this frame...
    if (Valence_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Understanding* updates
    if (t >= 0.0 && Understanding.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Understanding.tStart = t;  // (not accounting for frame time here)
      Understanding.frameNStart = frameN;  // exact frame index
      
      Understanding.setAutoDraw(true);
    }
    
    
    // if Understanding is active this frame...
    if (Understanding.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *cred_text_2* updates
    if (t >= 0.0 && cred_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cred_text_2.tStart = t;  // (not accounting for frame time here)
      cred_text_2.frameNStart = frameN;  // exact frame index
      
      cred_text_2.setAutoDraw(true);
    }
    
    
    // if cred_text_2 is active this frame...
    if (cred_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fam_text_2* updates
    if (t >= 0.0 && fam_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fam_text_2.tStart = t;  // (not accounting for frame time here)
      fam_text_2.frameNStart = frameN;  // exact frame index
      
      fam_text_2.setAutoDraw(true);
    }
    
    
    // if fam_text_2 is active this frame...
    if (fam_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *val_text_2* updates
    if (t >= 0.0 && val_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      val_text_2.tStart = t;  // (not accounting for frame time here)
      val_text_2.frameNStart = frameN;  // exact frame index
      
      val_text_2.setAutoDraw(true);
    }
    
    
    // if val_text_2 is active this frame...
    if (val_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *und_text* updates
    if (t >= 0.0 && und_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      und_text.tStart = t;  // (not accounting for frame time here)
      und_text.frameNStart = frameN;  // exact frame index
      
      und_text.setAutoDraw(true);
    }
    
    
    // if und_text is active this frame...
    if (und_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_continue_2* updates
    if (t >= 0.0 && text_continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_continue_2.tStart = t;  // (not accounting for frame time here)
      text_continue_2.frameNStart = frameN;  // exact frame index
      
      text_continue_2.setAutoDraw(true);
    }
    
    
    // if text_continue_2 is active this frame...
    if (text_continue_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ratings_enComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ratings_enRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ratings_en' ---
    for (const thisComponent of ratings_enComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ratings_en.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Credibility_2.response', Credibility_2.getRating());
    psychoJS.experiment.addData('Credibility_2.rt', Credibility_2.getRT());
    psychoJS.experiment.addData('Familiarity_2.response', Familiarity_2.getRating());
    psychoJS.experiment.addData('Familiarity_2.rt', Familiarity_2.getRT());
    psychoJS.experiment.addData('Valence_2.response', Valence_2.getRating());
    psychoJS.experiment.addData('Valence_2.rt', Valence_2.getRT());
    psychoJS.experiment.addData('Understanding.response', Understanding.getRating());
    psychoJS.experiment.addData('Understanding.rt', Understanding.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "ratings_en" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corr_enMaxDurationReached;
var corr_enMaxDuration;
var corr_enComponents;
function corr_enRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'corr_en' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    corr_enClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    corr_enMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from corr_code_2
    continueRoutine = (current_lang === "EN");
    if ((text_veracity === "T")) {
        corr_img = "corrections/en_true.png";
    } else {
        if ((text_veracity === "F")) {
            corr_img = "corrections/en_fake.png";
        } else {
            corr_img = "corrections/en_disp.png";
        }
    }
    
    image_3.setImage(headline);
    corr_2.setImage(corr_en_pic);
    psychoJS.experiment.addData('corr_en.started', globalClock.getTime());
    corr_enMaxDuration = null
    // keep track of which components have finished
    corr_enComponents = [];
    corr_enComponents.push(image_3);
    corr_enComponents.push(overlay_2);
    corr_enComponents.push(corr_2);
    
    for (const thisComponent of corr_enComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function corr_enRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'corr_en' ---
    // get current time
    t = corr_enClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // if image_3 is active this frame...
    if (image_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_3.tStop = t;  // not accounting for scr refresh
      image_3.frameNStop = frameN;  // exact frame index
      // update status
      image_3.status = PsychoJS.Status.FINISHED;
      image_3.setAutoDraw(false);
    }
    
    
    // *overlay_2* updates
    if (t >= 0.0 && overlay_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      overlay_2.tStart = t;  // (not accounting for frame time here)
      overlay_2.frameNStart = frameN;  // exact frame index
      
      overlay_2.setAutoDraw(true);
    }
    
    
    // if overlay_2 is active this frame...
    if (overlay_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (overlay_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      overlay_2.tStop = t;  // not accounting for scr refresh
      overlay_2.frameNStop = frameN;  // exact frame index
      // update status
      overlay_2.status = PsychoJS.Status.FINISHED;
      overlay_2.setAutoDraw(false);
    }
    
    
    // *corr_2* updates
    if (t >= 0.0 && corr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corr_2.tStart = t;  // (not accounting for frame time here)
      corr_2.frameNStart = frameN;  // exact frame index
      
      corr_2.setAutoDraw(true);
    }
    
    
    // if corr_2 is active this frame...
    if (corr_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (corr_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      corr_2.tStop = t;  // not accounting for scr refresh
      corr_2.frameNStop = frameN;  // exact frame index
      // update status
      corr_2.status = PsychoJS.Status.FINISHED;
      corr_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of corr_enComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function corr_enRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'corr_en' ---
    for (const thisComponent of corr_enComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('corr_en.stopped', globalClock.getTime());
    // Run 'End Routine' code from corr_code_2
    psychoJS.experiment.addData("LanguageShown", current_lang);
    psychoJS.experiment.addData("Set", current_set);
    console.log(`Trial ${textId} | Set ${current_set} | Language ${current_lang}`);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (corr_enMaxDurationReached) {
        corr_enClock.add(corr_enMaxDuration);
    } else {
        corr_enClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rate_corr_enMaxDurationReached;
var _press_2_allKeys;
var rate_corr_enMaxDuration;
var rate_corr_enComponents;
function rate_corr_enRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rate_corr_en' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    rate_corr_enClock.reset();
    routineTimer.reset();
    rate_corr_enMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from rate_corr_2
    continueRoutine = (current_lang === "EN");
    psychoJS.window.mouseVisible = true;
    
    cred_corr_2.reset()
    conf_corr_2.reset()
    press_2.keys = undefined;
    press_2.rt = undefined;
    _press_2_allKeys = [];
    psychoJS.experiment.addData('rate_corr_en.started', globalClock.getTime());
    rate_corr_enMaxDuration = null
    // keep track of which components have finished
    rate_corr_enComponents = [];
    rate_corr_enComponents.push(cred_corr_2);
    rate_corr_enComponents.push(text_cred_2);
    rate_corr_enComponents.push(conf_corr_2);
    rate_corr_enComponents.push(text_conf_2);
    rate_corr_enComponents.push(press_2);
    rate_corr_enComponents.push(proc_2);
    
    for (const thisComponent of rate_corr_enComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rate_corr_enRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rate_corr_en' ---
    // get current time
    t = rate_corr_enClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cred_corr_2* updates
    if (t >= 0.0 && cred_corr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cred_corr_2.tStart = t;  // (not accounting for frame time here)
      cred_corr_2.frameNStart = frameN;  // exact frame index
      
      cred_corr_2.setAutoDraw(true);
    }
    
    
    // if cred_corr_2 is active this frame...
    if (cred_corr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_cred_2* updates
    if (t >= 0.0 && text_cred_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_cred_2.tStart = t;  // (not accounting for frame time here)
      text_cred_2.frameNStart = frameN;  // exact frame index
      
      text_cred_2.setAutoDraw(true);
    }
    
    
    // if text_cred_2 is active this frame...
    if (text_cred_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *conf_corr_2* updates
    if (t >= 0.0 && conf_corr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conf_corr_2.tStart = t;  // (not accounting for frame time here)
      conf_corr_2.frameNStart = frameN;  // exact frame index
      
      conf_corr_2.setAutoDraw(true);
    }
    
    
    // if conf_corr_2 is active this frame...
    if (conf_corr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_conf_2* updates
    if (t >= 0.0 && text_conf_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_conf_2.tStart = t;  // (not accounting for frame time here)
      text_conf_2.frameNStart = frameN;  // exact frame index
      
      text_conf_2.setAutoDraw(true);
    }
    
    
    // if text_conf_2 is active this frame...
    if (text_conf_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *press_2* updates
    if (t >= 0.0 && press_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press_2.tStart = t;  // (not accounting for frame time here)
      press_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { press_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { press_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { press_2.clearEvents(); });
    }
    
    // if press_2 is active this frame...
    if (press_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = press_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _press_2_allKeys = _press_2_allKeys.concat(theseKeys);
      if (_press_2_allKeys.length > 0) {
        press_2.keys = _press_2_allKeys[_press_2_allKeys.length - 1].name;  // just the last key pressed
        press_2.rt = _press_2_allKeys[_press_2_allKeys.length - 1].rt;
        press_2.duration = _press_2_allKeys[_press_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *proc_2* updates
    if (t >= 0.0 && proc_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proc_2.tStart = t;  // (not accounting for frame time here)
      proc_2.frameNStart = frameN;  // exact frame index
      
      proc_2.setAutoDraw(true);
    }
    
    
    // if proc_2 is active this frame...
    if (proc_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rate_corr_enComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rate_corr_enRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rate_corr_en' ---
    for (const thisComponent of rate_corr_enComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rate_corr_en.stopped', globalClock.getTime());
    psychoJS.experiment.addData('cred_corr_2.response', cred_corr_2.getRating());
    psychoJS.experiment.addData('cred_corr_2.rt', cred_corr_2.getRT());
    psychoJS.experiment.addData('conf_corr_2.response', conf_corr_2.getRating());
    psychoJS.experiment.addData('conf_corr_2.rt', conf_corr_2.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(press_2.corr, level);
    }
    psychoJS.experiment.addData('press_2.keys', press_2.keys);
    if (typeof press_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('press_2.rt', press_2.rt);
        psychoJS.experiment.addData('press_2.duration', press_2.duration);
        routineTimer.reset();
        }
    
    press_2.stop();
    // the Routine "rate_corr_en" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var osfMaxDurationReached;
var osfMaxDuration;
var osfComponents;
function osfRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'osf' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    osfClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    osfMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + 
    psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData; 
    // Convert data object to CSV
    let data = [Object.keys(databObj[0])].concat(databObj).map(it => { 
    return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe 
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', { 
    method: 'POST',
    headers: {
    'Content-Type': 'application/json', 
    Accept: '*/*',
    },
    body: JSON.stringify({
    experimentID: 'NdR70FQCLHa1', // * обновить, указав experiment ID из DATAPIPE на шаге 4.3 *
    filename: filename, 
    data: data,
    }),
    }).then(response => response.json()).then(data => {// Log response aud force experiment end 
    console.log(data);
    quitPsychoJS(); 
    })
    psychoJS.experiment.addData('osf.started', globalClock.getTime());
    osfMaxDuration = null
    // keep track of which components have finished
    osfComponents = [];
    osfComponents.push(text_wait);
    
    for (const thisComponent of osfComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function osfRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'osf' ---
    // get current time
    t = osfClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_wait* updates
    if (t >= 0.0 && text_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_wait.tStart = t;  // (not accounting for frame time here)
      text_wait.frameNStart = frameN;  // exact frame index
      
      text_wait.setAutoDraw(true);
    }
    
    
    // if text_wait is active this frame...
    if (text_wait.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_wait.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_wait.tStop = t;  // not accounting for scr refresh
      text_wait.frameNStop = frameN;  // exact frame index
      // update status
      text_wait.status = PsychoJS.Status.FINISHED;
      text_wait.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of osfComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function osfRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'osf' ---
    for (const thisComponent of osfComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('osf.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (osfMaxDurationReached) {
        osfClock.add(osfMaxDuration);
    } else {
        osfClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

