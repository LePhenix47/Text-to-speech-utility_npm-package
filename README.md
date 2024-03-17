# @lephenix47/text-to-speech-utility

## Table of Contents

- [@lephenix47/text-to-speech-utility](#lephenix47text-to-speech-utility)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Usage](#usage)
    - [Importing the Library](#importing-the-library)
  - [Conclusion](#conclusion)

## Introduction

The `@lephenix47/text-to-speech-utility` package provides a convenient utility class encapsulating the Web Speech API's Text-to-Speech functionality. This utility class simplifies the process of working with speech synthesis in JavaScript, offering enhanced developer convenience and customizability.

## Usage

### Importing the Library

To use the `TextToSpeech` utility class in your project, you can import it as follows:

```ts
import { TextToSpeech } from '@lephenix47/text-to-speech-utility';

const tts = new TextToSpeech();

// Example usage:
const voices = tts.getVoices();

tts
  .setVoiceRate(1)
  .setVoiceSpeech(voices[0])
  .setVoiceText('Hello World!')

tts.speak();

console.log(tts.isSpeaking)
```

You can customize the speech synthesis by chaining various setter methods provided by the `TextToSpeech` class.

Additionally, you can utilize getter methods to retrieve available voices for speech synthesis.

## Conclusion

The `@lephenix47/text-to-speech-utility` package simplifies the implementation of Text-to-Speech functionality in JavaScript applications.

With its methods and comprehensive feature set, developers can seamlessly integrate speech synthesis capabilities into their projects.
