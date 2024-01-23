export function ValidateEmail(inputText: HTMLInputElement) {
    const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (inputText.value.match(mailformat)) {
        return false;
    }
    return true
}