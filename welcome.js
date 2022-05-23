import os from 'os';
export function greeting () {
    return `Hello, user. I see that you logged from ` + os.type()
}
