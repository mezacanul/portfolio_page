function getCurrentRegion(navigator) {
    const localLanguage = localStorage.getItem(
        "preferred-language"
    );
    // console.log("localLanguage", localLanguage);
    if (!localLanguage) {
        const language = navigator.language.split("-")[1];
        localStorage.setItem(
            "preferred-language",
            language
        );
        return language;
    }
    return localLanguage;
}

export { getCurrentRegion };
