import { PhysicalItemSheetPF2e } from "@item/physical/sheet";
import { ArmorPF2e } from ".";
export declare class ArmorSheetPF2e extends PhysicalItemSheetPF2e<ArmorPF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<{
        sizes: Record<"med" | "tiny" | "sm" | "lg" | "huge" | "grg", string>;
        traits: import("@module/sheet/helpers").SheetOptions;
        otherTags: import("@module/sheet/helpers").SheetOptions;
        armorPotencyRunes: {
            "1": string;
            "2": string;
            "3": string;
            "4": string;
        };
        armorResiliencyRunes: {
            resilient: string;
            greaterResilient: string;
            majorResilient: string;
        };
        armorPropertyRunes: {
            ready: string;
            slick: string;
            shadow: string;
            glamered: string;
            acidResistant: string;
            coldResistant: string;
            electricityResistant: string;
            fireResistant: string;
            greaterSlick: string;
            invisibility: string;
            sinisterKnight: string;
            greaterReady: string;
            greaterShadow: string;
            greaterInvisibility: string;
            greaterAcidResistant: string;
            greaterColdResistant: string;
            greaterElectricityResistant: string;
            greaterFireResistant: string;
            fortification: string;
            winged: string;
            rockBraced: string;
            soaring: string;
            antimagic: string;
            majorSlick: string;
            ethereal: string;
            majorShadow: string;
            greaterFortification: string;
            greaterWinged: string;
            deathless: string;
            dread: string;
            bitter: string;
            stanching: string;
            greaterStanching: string;
            majorStanching: string;
            trueStanching: string;
            implacable: string;
        };
        categories: {
            unarmored: string;
            light: string;
            medium: string;
            heavy: string;
            shield: string;
        };
        groups: {
            composite: string;
            chain: string;
            cloth: string;
            leather: string;
            plate: string;
        };
        baseTypes: {
            "explorers-clothing": string;
            "padded-armor": string;
            "leather-armor": string;
            "studded-leather-armor": string;
            "chain-shirt": string;
            "hide-armor": string;
            "scale-mail": string;
            "chain-mail": string;
            breastplate: string;
            "splint-mail": string;
            "half-plate": string;
            "full-plate": string;
            "hellknight-plate": string;
        };
        bulkTypes: {
            L: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
            21: string;
            22: string;
            23: string;
            24: string;
            25: string;
            26: string;
            27: string;
            28: string;
            29: string;
            30: string;
            31: string;
            32: string;
            33: string;
            34: string;
            35: string;
            36: string;
            37: string;
            38: string;
            39: string;
            40: string;
            41: string;
            42: string;
            43: string;
            44: string;
            45: string;
            46: string;
            47: string;
            48: string;
            49: string;
            50: string;
        };
        preciousMaterials: Record<"adamantine" | "darkwood" | "mithral" | "orichalcum" | "silver" | "warpglass" | "abysium" | "coldIron" | "djezet" | "dragonhide" | "grisantian-pelt" | "inubrix" | "noqual" | "peachwood" | "siccatite" | "sovereignSteel", string>;
        preciousMaterialGrades: Record<"high" | "low" | "standard", string>;
        isPhysical: true;
        basePriceString: string;
        priceString: string;
        actionTypes: {
            action: string;
            reaction: string;
            free: string;
            passive: string;
        };
        actionsNumber: {
            1: string;
            2: string;
            3: string;
        };
        frequencies: {
            PT1M: string;
            PT10M: string;
            PT1H: string;
            PT24H: string;
            day: string;
            P1W: string;
        };
        activations: {
            action: import("../physical/data").ItemActivation;
            id: string;
            base: string;
        }[];
        itemType: string | null;
        hasSidebar: boolean;
        hasDetails: boolean;
        sidebarTemplate?: (() => string) | undefined;
        detailsTemplate?: (() => string) | undefined;
        item: import("./data").ArmorData;
        data: import("./data").ArmorSystemSource & import("../physical/data").PhysicalSystemSource & import("./data").ArmorSystemData;
        user: {
            isGM: boolean;
        };
        enabledRulesUI: boolean;
        ruleEditing: boolean;
        ruleSelection: {
            selected: string | null;
            types: Record<string, string>;
        };
        ruleElements: {
            template: string;
            index: number;
            rule: import("../../rules/rule-element/data").RuleElementSource;
        }[];
        cssClass: string;
        editable: boolean;
        document: ArmorPF2e;
        limited: boolean;
        options: FormApplicationOptions;
        owner: boolean;
        title: string;
    }>;
}
