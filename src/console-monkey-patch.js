let originalLog = null;
const logArray = [];


export default function console_monkey_patch() {

    //If react multicalls this, do nothing
    if (originalLog) return;

    originalLog = console.log;

    //Overwrite console.log function
    console.log = function (...args) {
        const joined = args.join(" ");

        if (joined.substring(0, 8) === "%c[hap] ")
        {
            const logValue = joined.replace("%c[hap] ", "");
            logArray.push(logValue);

            if (logArray.length > 100) {
                logArray.splice(0, 1);
            }

            const event = new CustomEvent("d3Data", { detail: [...logArray] });
            document.dispatchEvent(event);
        }
        originalLog.apply(console, args);
    };

}

export function getD3Data() {
    return [...logArray];
}

export function subscribe(eventName, listener) {
    document.addEventListener(eventName, listener);
}

export function unsubscribe(eventName, listener) {
    document.removeEventListener(eventName, listener);
}
