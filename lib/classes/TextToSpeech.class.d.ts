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
     * Represents the internal [object utilized for controlling speech synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance).
     * Instantiated privately and immutably scoped to each individual `TextToSpeech` instance.
     */
    private readonly utterance;
    constructor();
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
    setVoiceText: (utteranceText: string) => TextToSpeech;
    /**
     * Set the `onvoiceschanged` event listener.
     *
     * Listens for changes in available voices and triggers a callback with the updated list of voices.
     *
     * @param {(newVoices: SpeechSynthesisVoice[]) => any} callback - The callback function to handle the event.
     *
     * @returns {TextToSpeech} The current instance of the TextToSpeech class.
     */
    setOnVoicesChanged: (callback: (...args: any[]) => any) => TextToSpeech;
    /**
     * Set the `onboundary` event handler.
     *
     * Fired when reaching a boundary like a word, sentence, or phrase during pronunciation.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function triggered when reaching the boundary.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    setOnBoundary(handler: (ev?: SpeechSynthesisEvent) => any): TextToSpeech;
    /**
     * Set the `onend` event handler when the speech ends
     *
     * Invoked once speech successfully finishes playing.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function invoked once speech ends.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    setOnEnd(handler: (ev?: SpeechSynthesisEvent) => any): TextToSpeech;
    /**
     * Set the `onerror` event handler.
     *
     * Executed when an error occurs during speech synthesis.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function fired when an error occurs.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    setOnError(handler: (ev?: SpeechSynthesisEvent) => any): TextToSpeech;
    /**
     * Set the `onmark` event handler.
     *
     * @param {(ev?: SpeechSynthesisEvent) => any} handler - Callback function
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     *
     */
    setOnMark(handler: (ev?: SpeechSynthesisEvent) => any): TextToSpeech;
    /**
     * Set the `onpause` event handler.
     *
     * Activated when speech synthesis is temporarily stopped, either manually or programmatically.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function activated when speech pauses.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    setOnPause(handler: (ev?: SpeechSynthesisEvent) => any): TextToSpeech;
    /**
     * Set the `onresume` event handler.
     *
     * Engaged when speech synthesis resumes, either manually or programmatically, after a pause.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function engaged when speech resumes.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    setOnResume(handler: (ev?: SpeechSynthesisEvent) => any): TextToSpeech;
    /**
     * Set the `onstart` event handler.
     *
     * Launched when speech synthesis begins.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function launched when speech begins.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    setOnStart(handler: (ev?: SpeechSynthesisEvent) => any): TextToSpeech;
    /**
     * Get available voices.
     * @param {string} optionalCountryCodeFilter - Optional country code filter.
     * @returns Array of available SpeechSynthesisVoice objects.
     */
    getVoices: (optionalCountryCodeFilter?: string) => SpeechSynthesisVoice[];
    /**
     * Speak the given text.
     */
    speak: () => void;
    /**
     * Stop the ongoing speech synthesis immediately.
     * @returns {void}
     */
    cancelSpeech: () => void;
    /**
     * Suspend the ongoing speech until explicitly resumed.
     * @returns {void}
     */
    pauseSpeech: () => void;
    /**
     * Continue suspended speech or initiate speaking if no prior synthesis was started.
     * @returns {void}
     */
    resumeSpeech: () => void;
    /**
     * Property indicating whether speech synthesis is currently paused.
     * @returns {boolean} `true` if speech is paused, `false` otherwise.
     * @readonly
     */
    get isPaused(): boolean;
    /**
     * Property indicating whether speech synthesis is actively producing audio output.
     * @returns {boolean} `true` if speech is speaking, `false` otherwise.
     * @readonly
     */
    get isSpeaking(): boolean;
    /**
     * Property indicating whether there is pending speech to be rendered by the Web Speech API.
     * @returns {boolean} `true` if speech is pending, `false` otherwise.
     * @readonly
     */
    get isPending(): boolean;
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
}
export default TextToSpeech;
