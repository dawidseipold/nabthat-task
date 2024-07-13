import { type OptionsItem, type Options } from '$utils/constants';
import { getContext, setContext } from 'svelte';

export class OptionsState {
	options = $state<Options>([]);
	selectedOption = $state<OptionsItem | null>(null);

	constructor(options: Options) {
		this.options = options;
	}

	get() {
		return this.options;
	}

	getSelected() {
		return this.selectedOption;
	}

	select(id: OptionsItem['id']) {
		const foundOption = this.options.find((option) => option.id === id);

		if (foundOption) {
			this.selectedOption = foundOption;
		}
	}
}

const OPTION_KEY = Symbol('option');

export function setOptionsState(options: Options) {
	return setContext(OPTION_KEY, new OptionsState(options));
}

export function getOptionsState() {
	return getContext<ReturnType<typeof setOptionsState>>(OPTION_KEY);
}
