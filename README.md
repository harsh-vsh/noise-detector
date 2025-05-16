# 🎧 Noise Detector Web App

This is a simple real-time **Noise Detector** web application that uses your device's microphone to detect loud sounds. When a loud noise is detected, it displays a message and plays a warning sound.

## 🚀 Features

- ✅ Real-time noise monitoring
- 🔊 Detects loud sounds using microphone input
- 🎵 Plays a sound alert when noise is detected
- 💻 Lightweight and runs in the browser
- 🔐 Uses `getUserMedia` for microphone access (requires user permission)

## 🧠 How It Works

1. When the user clicks the **"Start Listening"** button, the app requests access to the microphone.
2. Audio input is analyzed in real-time using a custom **AudioWorkletProcessor** (`noise-processor.js`).
3. If loud noise is detected, a message is shown, and a beep sound (`button-50.wav`) is played.

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Web Audio API
- Audio Worklet API

## 📁 Project Structure
