// starter code from https://medium.com/codingthesmartway-com-blog/speech-to-text-use-node-js-and-openais-whisper-api-to-record-transcribe-in-one-step-c9a1fd441765

//import modules
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const mic = require("mic");
const { Readable } = require("stream");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

const { Configuration, OpenAIApi } = require("openai");

console.log(process.env.API_KEY)

// const configuration = new Configuration({
//     apiKey: process.env.API_KEY,
//   });
// const openai = new OpenAIApi(configuration);

// ffmpeg.setFfmpegPath(ffmpegPath);

// // Record audio
// function recordAudio(filename) {
//     return new Promise((resolve, reject) => {
//       const micInstance = mic({
//         rate: '16000',
//         channels: '1',
//         fileType: 'wav',
//       });
  
//       const micInputStream = micInstance.getAudioStream();
//       const output = fs.createWriteStream(filename);
//       const writable = new Readable().wrap(micInputStream);
  
//       console.log('Recording... Press Ctrl+C to stop.');
  
//       writable.pipe(output);
  
//       micInstance.start();
  
//       process.on('SIGINT', () => {
//         micInstance.stop();
//         console.log('Finished recording');
//         resolve();
//       });
  
//       micInputStream.on('error', (err) => {
//         reject(err);
//       });
//     });
// }

// // Transcribe audio
// async function transcribeAudio(filename) {
//     const transcript = await openai.createTranscription(
//       fs.createReadStream(filename),
//       "whisper-1"
//     );
//     return transcript.data.text;
// }

// async function main() {
//     const audioFilename = 'recorded_audio.wav';
//     await recordAudio(audioFilename);
//     const transcription = await transcribeAudio(audioFilename);
//     console.log('Transcription:', transcription);
// }

// main();