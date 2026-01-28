import { Dom } from "datatables.net";
import DateTime from "./dataTables.dateTime";

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export interface Defaults {
	alwaysVisible: boolean;
	attachTo: string;
	buttons: {
		clear: boolean;
		selected: boolean;
		today: boolean;
	}
	classPrefix: string;
	disableDays: number[] | null | ((day: Date) => boolean);
	firstDay: number;
	format: string;
	hoursAvailable: number[] | null;
	i18n: {
		clear: string;
		previous: string;
		next: string;
		months: string[];
		weekdays: string[];
		amPm: string[];
		hours: string;
		minutes: string;
		seconds: string;
		today: string;
		selected: string;
		unknown: string;
	};
	maxDate: Date | null;
	minDate: Date | null;

	minutesAvailable: number[] | null;
	strict: boolean;
	locale: string;
	onChange: (value: string, date: Date, el: HTMLElement) => void;
	secondsAvailable: number[] | null;
	showWeekNumber: boolean;
	yearRange: number;

	/** @deprecated */
	minutesIncrement: number;

	/** @deprecated */
	secondsIncrement: number;
}

export interface Options extends DeepPartial<Defaults> {};

export default DateTime;

// jQuery interface additions
interface JQuery {
	dtDateTime(opts?: Options): JQuery;
}

// Also attached to DataTables object
declare module 'datatables.net' {
	interface DataTablesStatic {
		DataTime: DateTime;
	}
}

export interface Settings {
	d: Date | null;

	display: Date | null;

	minutesRange: number | null;

	secondsRange: number | null;

	namespace: string;

	parts: {
		date: boolean;
		time: boolean;
		seconds: boolean;
		hours12: boolean;
	};

	showTo: null | ReturnType<typeof setTimeout>;
}

export interface DomInternal {
	container: Dom;
	date: Dom;
	title: Dom;
	calendar: Dom;
	time: Dom;
	error: Dom;
	buttons: Dom;
	clear: Dom;
	today: Dom;
	selected: Dom;
	previous: Dom;
	next: Dom;
	input: Dom<HTMLInputElement>;
}
