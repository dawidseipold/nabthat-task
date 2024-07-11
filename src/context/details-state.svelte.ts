import { getContext, setContext } from 'svelte';

export type Details = {
	visible: boolean;
};

export class DetailsState {
	details = $state<Details>();

	constructor(details: Details) {
		this.details = details;
	}

	set(details: Details) {
		this.details = details;
	}

	get() {
		return this.details;
	}

	toggleVisibility() {
		if (this.details) {
			this.details.visible = !this.details.visible;
		}
	}
}

const DETAILS_KEY = Symbol('details');

export function setDetailsState(details: Details = { visible: false }) {
	return setContext(DETAILS_KEY, new DetailsState(details));
}

export function getDetailsState() {
	return getContext<ReturnType<typeof setDetailsState>>(DETAILS_KEY);
}
