// Type definitions for DataTables DateTime
//
// Project: https://datatables.net/extensions/datetime
// Definitions by:
//   SpryMedia

/// <reference types="jquery" />

interface IDateTimeOptions {
	classPrefix?: string;
	disableDays?: number[] | null;
	firstDay?: number;
	format?: string;
	hoursAvailable?: number[] | null;
	i18n?: {
		previous?: string;
		next?: string;
		months?: string[];
		weekdays?: string[];
		amPm?: string[];
		hours?: string;
		minutes?: string;
		seconds?: string;
		unknown?: string;
	};
	maxDate?: Date | null;
	minDate?: Date | null;
	minutesAvailable?: number[] | null;
	strict?: boolean;
	locale?: string;
	onChange?: (value: string, date: Date, el: HTMLElement) => void;
	secondsAvailable?: number[] | null;
	showWeekNumber?: boolean;
	yearRange?: number;
}

export class DateTime {
	static use(moment: any); // Moment library

	constructor(el: HTMLElement, opts?: IDateTimeOptions);
	
	destroy(): void;
	errorMsg(): this;
	errorMsg(message: string): this;
	hide(): this;
	max(max: Date): this;
	main(min: Date): this;
	owns(el: HTMLElement): boolean;
	val(): Date;
	val(set: string | Date): this;
	valFormat(format: string): string;
	valFormat(format: string, val: string): this;
}

export default DateTime;

// jQuery interface additions
interface JQuery {
	dtDateTime(opts?: IDateTimeOptions): JQuery;
}

// Also attached to DataTables object
declare module 'datatables.net-datetime' {
	interface ApiStatic {
		DataTime: DateTime;
	}
}
