// For predetermined links
const links: Record<number, string> = {
    5: "https://buy.stripe.com/fZefZCg8peLv1xuaEN",
    10: "https://buy.stripe.com/aEUfZCf4l0UFekg9AF",
    20: "https://buy.stripe.com/7sI3cQe0hfPz1xu8wC",
    50: "https://buy.stripe.com/6oE00E09ravf2BycMT",
    100: "https://buy.stripe.com/7sI00E7BTeLvekgdQY"
}

// For the "custom amount" links
const customLinks: Record<string, string> = {
    "en-GB": "https://buy.stripe.com/6oE7t6bS9gTDdgc3cc",
    "en-US": "https://buy.stripe.com/dR65kYbS97j35NK3cd",
    "en-CA": "https://buy.stripe.com/dR65kY5tLdHr7VS4gi",
    "en-PK": "https://buy.stripe.com/6oEaFi7BT1YJ1xubIL",
    "ur-PK": "https://buy.stripe.com/6oEaFi7BT1YJ1xubIL",
    "other": "https://buy.stripe.com/6oE7t6bS9gTDdgc3cc?locale="
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
