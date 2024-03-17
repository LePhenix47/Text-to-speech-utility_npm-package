/**
 * Utility class encapsulating the Web Speech API's Text-to-Speech functionality, offering enhanced developer convenience and customizability.
 * @example
 * import { TextToSpeech } from '@lephenix-47/text-to-speech-utility';
 *
 * const ttsInstance = new TextToSpeech();
 *
 * const voices = ttsInstance.getAvailableVoices()
 *
 * ttsInstance
 *   .setVoiceRate(1)
 *   .setVoiceSpeech(voices[0])
 *   .setText('Hello World!');
 *
 * ttsInstance.speak();
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 */
declare class TextToSpeech {
    /**
     * @private
     * @type {SpeechSynthesisUtterance}
     * @readonly
     * Represents the internal [object utilized for controlling speech synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance). Instantiated privately and immutably scoped to each individual TextToSpeech instance.
     */
    private readonly utterance;
    constructor();
    /**
     * Clamps a value between a minimum and maximum range.
     *
     * @param {number} min - The minimum value of the range.
     * @param {number} value - The value to be clamped.
     * @param {number} max - The maximum value of the range.
     * @returns {number} - The clamped value.
     *
     * @private
     */
    private clamp;
    /**
     * Set voice rate.
     * @param {number} rate - Rate value (0 - 10).
     * @returns The current instance of `TextToSpeech` for method chaining.
     */
    setVoiceRate: (rate: number) => TextToSpeech;
    /**
     * Set voice pitch.
     * @param {number} pitch - Pitch value (0 - 3).
     * @returns The current instance of `TextToSpeech` for method chaining.
     */
    setVoicePitch: (pitch: number) => TextToSpeech;
    /**
     * Set volume level.
     * @param volumeLevel - Volume level (0 - 1).
     * @returns The current instance of `TextToSpeech` for method chaining.
     */
    setVolume: (volumeLevel: number) => TextToSpeech;
    /**
     * Set language.
     * @param {string} languageCode - Language code (e.g., 'en-US').
     * @returns The current instance of `TextToSpeech` for method chaining.
     */
    setLanguage: (languageCode: string) => TextToSpeech;
    /**
     * Set voice speech.
     * @param {SpeechSynthesisVoice} voiceObject - `SpeechSynthesisVoice` object.
     * @returns The current instance of `TextToSpeech` for method chaining.
     */
    setVoiceSpeech: (voiceObject: SpeechSynthesisVoice) => TextToSpeech;
    /**
     * Set the text to be spoken by the `TextToSpeech` instance.
     *
     * @param {string} utteranceText - The text to be spoken.
     *
     * @returns {TextToSpeech} - The current instance of `TextToSpeech` for method chaining.
     */
    setVoiceTest: (utteranceText: string) => TextToSpeech;
    /**
     * Get available voices.
     * @param {string} optionalCountryCodeFilter - Optional country code filter.
     * @returns Array of available SpeechSynthesisVoice objects.
     */
    getVoices: (optionalCountryCodeFilter?: string) => SpeechSynthesisVoice[];
    /**
     * Speak the given text.
     * @param utteranceText - Text to speak.
     */
    speak: () => void;
    /**
     * Cancel speech.
     */
    cancelSpeech: () => void;
    /**
     * Pause speech.
     */
    pauseSpeech: () => void;
    /**
     * Resume speech.
     */
    resumeSpeech: () => void;
    /**
     * Readonly property: Indicates if speech is paused.
     */
    get isPaused(): boolean;
    /**
     * Readonly property: Indicates if speech is speaking.
     */
    get isSpeaking(): boolean;
    /**
     * Readonly property: Indicates if there is pending speech.
     */
    get isPending(): boolean;
}
export default TextToSpeech;
