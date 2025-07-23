import { Browser, Page, expect, test } from '@playwright/test';
import { getTestData } from '../utils/helper';
export let primaryPage: Page;
export let data: any;

export class PageObjectModel {
    constructor(
        protected readonly page: Page = primaryPage,
        protected readonly data: any = getTestData(),
    ) {}
}
  