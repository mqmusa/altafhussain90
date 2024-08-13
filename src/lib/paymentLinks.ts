// For predetermined links
const links: Record<number, string> = {
    5: "https://buy.stripe.com/fZefZCg8peLv1xuaEN",
    10: "https://buy.stripe.com/eVa14I5tL8n78ZWbIS",
    20: "https://buy.stripe.com/3cs00E5tL8n71xubIT",
    50: "https://buy.stripe.com/28obJmg8p6eZekgaEQ",
    100: "https://buy.stripe.com/aEU7t6bS9gTDa4000d"
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
