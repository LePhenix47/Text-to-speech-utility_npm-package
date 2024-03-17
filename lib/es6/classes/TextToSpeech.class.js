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
var TextToSpeech = /** @class */ (function () {
    function TextToSpeech() {
        var _this = this;
        /**
         * Set voice rate.
         * @param {number} rate - Rate value (0 - 10).
         * @returns The current instance of `TextToSpeech` for method chaining.
         */
        this.setVoiceRate = function (rate) {
            _this.utterance.rate = _this.clamp(0, rate, 10);
            return _this;
        };
        /**
         * Set voice pitch.
         * @param {number} pitch - Pitch value (0 - 3).
         * @returns The current instance of `TextToSpeech` for method chaining.
         */
        this.setVoicePitch = function (pitch) {
            _this.utterance.pitch = _this.clamp(0, pitch, 3);
            return _this;
        };
        /**
         * Set volume level.
         * @param volumeLevel - Volume level (0 - 1).
         * @returns The current instance of `TextToSpeech` for method chaining.
         */
        this.setVolume = function (volumeLevel) {
            _this.utterance.volume = _this.clamp(0, volumeLevel, 1);
            return _this;
        };
        /**
         * Set language.
         * @param {string} languageCode - Language code (e.g., 'en-US').
         * @returns The current instance of `TextToSpeech` for method chaining.
         */
        this.setLanguage = function (languageCode) {
            _this.utterance.lang = languageCode;
            return _this;
        };
        /**
         * Set voice speech.
         * @param {SpeechSynthesisVoice} voiceObject - `SpeechSynthesisVoice` object.
         * @returns The current instance of `TextToSpeech` for method chaining.
         */
        this.setVoiceSpeech = function (voiceObject) {
            _this.utterance.voice = voiceObject;
            return _this;
        };
        /**
         * Set the text to be spoken by the `TextToSpeech` instance.
         *
         * @param {string} utteranceText - The text to be spoken.
         *
         * @returns {TextToSpeech} - The current instance of `TextToSpeech` for method chaining.
         */
        this.setVoiceTest = function (utteranceText) {
            _this.utterance.text = utteranceText;
            return _this;
        };
        /**
         * Get available voices.
         * @param {string} optionalCountryCodeFilter - Optional country code filter.
         * @returns Array of available SpeechSynthesisVoice objects.
         */
        this.getVoices = function (optionalCountryCodeFilter) {
            var voices = speechSynthesis.getVoices();
            if (!optionalCountryCodeFilter) {
                return voices;
            }
            return voices.filter(function (voice) {
                return voice.lang.includes(optionalCountryCodeFilter);
            });
        };
        /**
         * Speak the given text.
         * @param utteranceText - Text to speak.
         */
        this.speak = function () {
            speechSynthesis.speak(_this.utterance);
        };
        /**
         * Cancel speech.
         */
        this.cancelSpeech = function () {
            speechSynthesis.cancel();
        };
        /**
         * Pause speech.
         */
        this.pauseSpeech = function () {
            speechSynthesis.pause();
        };
        /**
         * Resume speech.
         */
        this.resumeSpeech = function () {
            speechSynthesis.resume();
        };
        this.utterance = new SpeechSynthesisUtterance();
    }
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
    TextToSpeech.prototype.clamp = function (min, value, max) {
        // * We avoid underflowing
        var minClampedValue = Math.max(value, min);
        // * We avoid overflowing
        var fullyClampedValue = Math.min(minClampedValue, max);
        return fullyClampedValue;
    };
    Object.defineProperty(TextToSpeech.prototype, "isPaused", {
        /**
         * Readonly property: Indicates if speech is paused.
         */
        get: function () {
            return speechSynthesis.paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextToSpeech.prototype, "isSpeaking", {
        /**
         * Readonly property: Indicates if speech is speaking.
         */
        get: function () {
            return speechSynthesis.speaking;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextToSpeech.prototype, "isPending", {
        /**
         * Readonly property: Indicates if there is pending speech.
         */
        get: function () {
            return speechSynthesis.pending;
        },
        enumerable: false,
        configurable: true
    });
    return TextToSpeech;
}());
export default TextToSpeech;
