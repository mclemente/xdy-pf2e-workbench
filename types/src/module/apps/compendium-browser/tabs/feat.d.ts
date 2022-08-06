import { CompendiumBrowser } from "..";
import { CompendiumBrowserTab } from "./base";
import { FeatFilters } from "./data";
export declare class CompendiumBrowserFeatTab extends CompendiumBrowserTab {
    filterData: FeatFilters;
    templatePath: string;
    constructor(browser: CompendiumBrowser);
    protected loadData(): Promise<void>;
    protected filterIndexData(entry: CompendiumIndexData): boolean;
    protected prepareFilterData(): void;
}
