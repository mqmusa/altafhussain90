// For predetermined links
const links: Record<number, string> = {
    5: "https://donate.stripe.com/test_fZe3gdfVYgGZ9IQ14b",
    10: "",
    20: "",
    50: "",
    100: ""
}

// For the "custom amount" links
const customLinks: Record<string, string> = {
    "en-GB": "https://donate.stripe.com/test_dR6aIFbFIeyRf3a4gh",
    "en-US": "https://donate.stripe.com/test_8wM041bFIgGZbQY3cf",
    "en-CA": "https://donate.stripe.com/test_3cs7wtdNQaiB08g3cg",
    "en-PK": "https://donate.stripe.com/test_aEU6speRUduNbQY4gl",
    "ur-PK": "https://donate.stripe.com/test_aEU6speRUduNbQY4gl",
    "other": "https://donate.stripe.com/test_4gw041aBE2Q94ow002?locale="
}

export function getLink(amt: number) {
    return links[amt] || "";
}

export function getCustomLink(locale: string) {
    if (locale in customLinks) {
        return customLinks[locale];
    } else {
        return customLinks["other"] + locale;
    }
}