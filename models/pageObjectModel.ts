import { Browser, Page, expect, test } from '@playwright/test';

export let primaryPage: Page;

export class PageObjectModel {
    constructor(protected readonly page: Page = primaryPage) {}
}
  