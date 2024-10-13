
# TextToSpeech

`TextToSpeech API` is a lightweight JavaScript class that provides an easy way to convert text to speech using the native Web Speech API. It allows customization of voice selection, speech rate, and pitch, making it a versatile tool for web applications that require voice synthesis capabilities.

## Features

- Convert any text to speech.
- Select specific voice by name (optional).
- Adjust speech rate and pitch (optional).
- Simple and easy-to-use interface.

## Installation

### Using Node.js

You can install the package via npm if you plan to use it in a Node.js environment:

```bash
npm install text-to-speech-api
```

### Including in HTML

For web applications, you can directly include the script in your HTML file:

```html
<script src="./path/to/index.js"></script>
```

## Usage

### 1. Importing the Package

If using Node.js:

```javascript
const TextToSpeech = require('text-to-speech-api');
```

If using directly in the browser, ensure the script is included in your HTML file.

### 2. Basic Conversion

To convert text to speech, simply call the `convert` method of the `TextToSpeech` class:

```javascript
const text = "Hello, this is a text to voice conversion!";
TextToSpeech.convert(text);
```

### 3. Selecting a Voice

You can specify a voice by name, adjusting the rate and pitch as needed:

```javascript
const text = "Hello, this is a text to voice conversion!";
const voiceName = "Google US English"; // Adjust to the desired voice name

TextToSpeech.convert(text, voiceName, 1.2, 1.0);
```

### 4. Adjusting Speech Rate and Pitch

The `convert` method accepts optional parameters for rate and pitch:

- **Rate**: A number that determines how fast the speech is spoken (default is `1`).
- **Pitch**: A number that affects the highness or lowness of the voice (default is `1`).

Example:

```javascript
TextToSpeech.convert("This is a faster voice!", null, 1.5, 1);
```

### 5. Error Handling

The `convert` method throws an error if the SpeechSynthesis API is not supported:

```javascript
try {
    TextToSpeech.convert("Hello, world!");
} catch (error) {
    console.error(error.message);
}
```

## Example HTML Implementation

Here is a simple example of how to use `TextToSpeech` in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text to Voice Example</title>
    <script src="./path/to/index.js"></script>
</head>
<body>
    <h1>Text to Voice Example</h1>
    <button id="speakButton">Speak Text</button>

    <script>
        document.getElementById('speakButton').addEventListener('click', () => {
            const text = "Hello, this is a text to voice conversion!";
            TextToSpeech.convert(text);
        });
    </script>
</body>
</html>
```

## Changelog

### [1.0.1]
#### Updated
- Enhanced user experience.

### [1.0.0]
#### Initial Release
- Released the `TextToSpeech` class with basic functionality to convert text to speech using the native Web Speech API.



## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Author

Developed by **Masum Billah**.  
For any issues, suggestions, or contributions, feel free to reach out via [email](mailto:office.hellomasum@gmail.com).
