class TextToSpeech {
  /**
   * Convert text to speech.
   *
   * @param {string} text - The text to convert to speech.
   * @param {string} [voiceName] - The name of the voice to use (optional).
   * @param {number} [rate] - The rate of speech (optional).
   * @param {number} [pitch] - The pitch of the voice (optional).
   */
  static convert(text, voiceName = null, rate = 1, pitch = 1) {
      // Check if the SpeechSynthesis API is available
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
          throw new Error('Speech synthesis not supported in this browser or environment.');
      }

      // Create a new SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Select voice if provided
      if (voiceName) {
          const voices = window.speechSynthesis.getVoices();
          const selectedVoice = voices.find(voice => voice.name === voiceName);
          if (selectedVoice) {
              utterance.voice = selectedVoice;
          } else {
              console.warn(`Voice "${voiceName}" not found. Using default voice.`);
          }
      }

      // Speak the text
      window.speechSynthesis.speak(utterance);
  }
}

// Export the TextToSpeech class
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = TextToSpeech;
} else if (typeof window !== 'undefined') {
  // Avoid redeclaration
  window.TextToSpeech = window.TextToSpeech || TextToSpeech;
}
