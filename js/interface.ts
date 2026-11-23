import { Dom } from 'datatables.net';
import { DateTime } from './dataTables.dateTime';

type DeepPartial<T> = T extends (...args: any[]) => any
    ? T
    : T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]> }
        : T;

export interface Defaults {
	/** Makes the date picker always display. */
	alwaysVisible: boolean;

	/**
	 * If the picker element should be inserted next to the `<input>` or to the
	 * `<body>`.
	 */
	attachTo: 'body' | 'input';

	/** Display control buttons */
	buttons: {
		/** Enable button to clear the value */
		clear: boolean;

		/** Enable button move the current value into view */
		selected: boolean;

		/** Enable button move "today" into view */
		today: boolean;
	};
	classPrefix: string;

	/** Specify days that cannot be selected. */
	disableDays: number[] | null | ((day: Date) => boolean);

	/** Initial picker month / year to show. `null` will default to current */
	display: {
		year: number;
		month: number;
	} | null;

	/**
	 * First day of the week. (0: Sunday, 1: Monday, etc). If `null` then
	 * automatic detection will be used based on the user's locale.
	 */
	firstDay: number | null;

	/** The format of the date data. */
	format: string;

	/** Sets which hours are selectable. */
	hoursAvailable: number[] | null;

	/** Language strings for DateTime */
	i18n: DTLanguage;

	/** Set the maximum date that can be selected and displayed. */
	maxDate: Date | null;

	/** Set the minimum date that can be selected and displayed. */
	minDate: Date | null;

	/** Sets which minutes are selectable. */
	minutesAvailable: number[] | null;

	/** strict parameter passed to Luxon or Moment */
	strict: boolean;

	/** locale parameter passed to Luxon or Moment */
	locale: string;

	/**
	 * Function that is called whenever the value selected for DateTime changes.
	 *
	 * @param value New text value
	 * @param date Date value
	 * @param el The input host
	 */
	onChange: (value: string, date: Date, el: HTMLElement) => void;

	/** Sets which seconds are selectable. */
	secondsAvailable: number[] | null;

	/**
	 * Show the ISO week number at the head of the row
	 */
	showWeekNumber: boolean;

	/**
	 * The range of years provided for selection. Note that this option can be
	 * overruled by max / min date.
	 */
	yearRange: number;

	/** @deprecated */
	minutesIncrement: number;

	/** @deprecated */
	secondsIncrement: number;
}

export interface Options extends DeepPartial<Defaults> {}

export default DateTime;

// jQuery interface additions
interface JQuery {
	dtDateTime(opts?: Options): JQuery;
}

// Also attached to DataTables object
declare module 'datatables.net' {
	interface DataTablesStatic {
		DateTime: typeof DateTime;
	}

	interface Language {
		/**
		 * Language configuration for any DateTime instances initialised through
		 * the DataTables extensions.
		 */
		datetime: DTLanguage;
	}
}

export interface DTLanguage {
	/** Clear button text value */
	clear: string;

	/** Tooltip for previous button */
	previous: string;

	/** Tooltip for next button */
	next: string;

	/** Text used to indicate the months available for selection */
	months: string[];

	/** Text used to indicate the days of the week */
	weekdays: string[];

	/** The strings appended to hours to distinguish between am and pm */
	amPm: string[];

	/** Label for the hours selection */
	hours: string;

	/** Label for the minutes selection */
	minutes: string;

	/** Label for the seconds selection */
	seconds: string;

	/** Today button text value */
	today: string;

	/** Selected button text value */
	selected: string;

	/** String to use if a value is unknown */
	unknown: string;
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
