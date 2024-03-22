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
        this.setVoiceText = function (utteranceText) {
            _this.utterance.text = utteranceText;
            return _this;
        };
        /**
         * Set the `onvoiceschanged` event listener.
         *
         * Listens for changes in available voices and triggers a callback with the updated list of voices.
         *
         * @param {(newVoices: SpeechSynthesisVoice[]) => any} callback - The callback function to handle the event.
         *
         * @returns {TextToSpeech} The current instance of the TextToSpeech class.
         */
        this.setOnVoicesChanged = function (callback) {
            speechSynthesis.addEventListener("voiceschanged", function () {
                callback(_this.getVoices());
            });
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
         */
        this.speak = function () {
            speechSynthesis.speak(_this.utterance);
        };
        /**
         * Stop the ongoing speech synthesis immediately.
         * @returns {void}
         */
        this.cancelSpeech = function () {
            speechSynthesis.cancel();
        };
        /**
         * Suspend the ongoing speech until explicitly resumed.
         * @returns {void}
         */
        this.pauseSpeech = function () {
            speechSynthesis.pause();
        };
        /**
         * Continue suspended speech or initiate speaking if no prior synthesis was started.
         * @returns {void}
         */
        this.resumeSpeech = function () {
            speechSynthesis.resume();
        };
        this.utterance = new SpeechSynthesisUtterance();
    }
    /**
     * Set the `onboundary` event handler.
     *
     * Fired when reaching a boundary like a word, sentence, or phrase during pronunciation.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function triggered when reaching the boundary.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    TextToSpeech.prototype.setOnBoundary = function (handler) {
        this.utterance.onboundary = handler;
        return this;
    };
    /**
     * Set the `onend` event handler when the speech ends
     *
     * Invoked once speech successfully finishes playing.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function invoked once speech ends.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    TextToSpeech.prototype.setOnEnd = function (handler) {
        this.utterance.onend = handler;
        return this;
    };
    /**
     * Set the `onerror` event handler.
     *
     * Executed when an error occurs during speech synthesis.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function fired when an error occurs.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    TextToSpeech.prototype.setOnError = function (handler) {
        this.utterance.onerror = handler;
        return this;
    };
    /**
     * Set the `onmark` event handler.
     *
     * @param {(ev?: SpeechSynthesisEvent) => any} handler - Callback function
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     *
     */
    TextToSpeech.prototype.setOnMark = function (handler) {
        this.utterance.onmark = handler;
        return this;
    };
    /**
     * Set the `onpause` event handler.
     *
     * Activated when speech synthesis is temporarily stopped, either manually or programmatically.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function activated when speech pauses.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    TextToSpeech.prototype.setOnPause = function (handler) {
        this.utterance.onpause = handler;
        return this;
    };
    /**
     * Set the `onresume` event handler.
     *
     * Engaged when speech synthesis resumes, either manually or programmatically, after a pause.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function engaged when speech resumes.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    TextToSpeech.prototype.setOnResume = function (handler) {
        this.utterance.onresume = handler;
        return this;
    };
    /**
     * Set the `onstart` event handler.
     *
     * Launched when speech synthesis begins.
     *
     * @param {(event: SpeechSynthesisEvent) => any} handler - Callback function launched when speech begins.
     *
     * @returns {TextToSpeech} The current instance of the `TextToSpeech` class.
     */
    TextToSpeech.prototype.setOnStart = function (handler) {
        this.utterance.onstart = handler;
        return this;
    };
    Object.defineProperty(TextToSpeech.prototype, "isPaused", {
        /**
         * Property indicating whether speech synthesis is currently paused.
         * @returns {boolean} `true` if speech is paused, `false` otherwise.
         * @readonly
         */
        get: function () {
            return speechSynthesis.paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextToSpeech.prototype, "isSpeaking", {
        /**
         * Property indicating whether speech synthesis is actively producing audio output.
         * @returns {boolean} `true` if speech is speaking, `false` otherwise.
         * @readonly
         */
        get: function () {
            return speechSynthesis.speaking;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextToSpeech.prototype, "isPending", {
        /**
         * Property indicating whether there is pending speech to be rendered by the Web Speech API.
         * @returns {boolean} `true` if speech is pending, `false` otherwise.
         * @readonly
         */
        get: function () {
            return speechSynthesis.pending;
        },
        enumerable: false,
        configurable: true
    });
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
    return TextToSpeech;
}());
export default TextToSpeech;
