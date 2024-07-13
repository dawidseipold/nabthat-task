import { type Content, type ContentItem } from '$utils/constants';
import { getContext, setContext } from 'svelte';

export class ContentState {
	content = $state<Content>([]);
	usedContent = $state<Content>([]);

	unusedContent = $derived(this.content.filter((item) => !this.usedContent.includes(item)));

	constructor(content: Content) {
		this.content = content;
	}

	get() {
		return this.content;
	}

	getUsed() {
		return this.usedContent;
	}

	getUnused() {
		return this.unusedContent;
	}

	reset() {
		this.usedContent = [];
	}

	replace(id: ContentItem['id']) {
		this.reset();
		const foundItem = this.content.find((item) => item.id === id);

		if (foundItem) {
			this.usedContent = [foundItem];
		}
	}

	add(id: ContentItem['id']) {
		const foundItem = this.content.find((item) => item.id === id);

		if (foundItem) {
			this.usedContent = [...this.usedContent, foundItem];
		}
	}
}

const CONTENT_KEY = Symbol('content');

export function setContentState(content: Content) {
	return setContext(CONTENT_KEY, new ContentState(content));
}

export function getContentState() {
	return getContext<ReturnType<typeof setContentState>>(CONTENT_KEY);
}
