
declare module 'datatables.net-datetime' {
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

	class DateTime {
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
	}

	export = DateTime;

	// jQuery interface additions
	interface JQuery {
		dtDateTime(opts?: IDateTimeOptions): JQuery;
	}
}
