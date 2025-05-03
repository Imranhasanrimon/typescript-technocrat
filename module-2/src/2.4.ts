{
    interface PoorDeveloper<T, X = null> {
        name: string;
        laptop: {
            brand: string;
            model: string;
            hasCamera: boolean;
        };
        smartWatch: T;
        bike?: X
    }

    interface PoorSmartWatch { brand: string, heartTracker: boolean }

    const poorDeveloper: PoorDeveloper<PoorSmartWatch> = {
        name: "imran hasan",
        laptop: {
            brand: "Dell",
            model: "inspiron5000",
            hasCamera: true,
        },
        smartWatch: {
            brand: "walton",
            heartTracker: false,
        },
    }
























}