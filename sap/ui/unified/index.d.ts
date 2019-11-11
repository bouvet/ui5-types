/// <reference path="../core/index.d.ts" />

declare namespace sap {
	namespace ui {
		namespace unified {
			namespace calendar {
			  /**
			   * renders a month with ItemNavigationThis is used inside the calendar. Not for stand alone usageIf
			   * used inside the calendar the properties and aggregation are directly taken from the parent(To not
			   * duplicate and sync DateRanges and so on...)
			   * @resource sap/ui/unified/calendar/Month.js
			  */
			  export class Month extends sap.ui.core.Control {
	  
	  
				/**
				 * Constructor for a new calendar/Month.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				*/
				constructor(sId: string, mSettings?: any);
	  
	  
	  
				/**
				 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
				 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.calendar.Month;
	  
				/**
				 * Adds some disabledDate to the aggregation <code>disabledDates</code>.
				 * @since 1.38.0
				 * @param oDisabledDate the disabledDate to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addDisabledDate(oDisabledDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.Month;
	  
				/**
				 * Adds some selectedDate to the aggregation <code>selectedDates</code>.
				 * @param oSelectedDate the selectedDate to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.Month;
	  
				/**
				 * Adds some specialDate to the aggregation <code>specialDates</code>.
				 * @param oSpecialDate the specialDate to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.calendar.Month;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>focus</code> event of this
				 * <code>sap.ui.unified.calendar.Month</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.Month</code> itself.Date focus changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.Month</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachFocus(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.Month;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.Month</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.Month</code> itself.Date selection changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.Month</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.Month;
	  
				/**
				 * checks if a date is focusable in the current rendered output.So if not rendered or in other month it
				 * is not focusable.
				 * @param oDate JavaScript date object for focused date.
				 * @returns flag if focusable
				*/
				checkDateFocusable(oDate: any): boolean;
	  
				/**
				 * Destroys all the disabledDates in the aggregation <code>disabledDates</code>.
				 * @since 1.38.0
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				destroyDisabledDates(): sap.ui.unified.calendar.Month;
	  
				/**
				 * Destroys all the selectedDates in the aggregation <code>selectedDates</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				destroySelectedDates(): sap.ui.unified.calendar.Month;
	  
				/**
				 * Destroys all the specialDates in the aggregation <code>specialDates</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				destroySpecialDates(): sap.ui.unified.calendar.Month;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>focus</code> event of this
				 * <code>sap.ui.unified.calendar.Month</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachFocus(fnFunction: any, oListener: any): sap.ui.unified.calendar.Month;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.Month</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachSelect(fnFunction: any, oListener: any): sap.ui.unified.calendar.Month;
	  
				/**
				 * displays the month of a given date without setting the focus
				 * @param oDate JavaScript date object for focused date.
				 * @returns <code>this</code> to allow method chaining
				*/
				displayDate(oDate: any): sap.ui.unified.calendar.Month;
	  
	  
				/**
				 * Fires event <code>focus</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>date</code> of type <code>object</code>focused
				 * date</li><li><code>otherMonth</code> of type <code>boolean</code>focused date is in an other month
				 * that the displayed one</li><li><code>restoreOldDate</code> of type <code>boolean</code>focused date
				 * is set to the same as before (date in other month clicked)</li></ul>
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireFocus(mArguments: any): sap.ui.unified.calendar.Month;
	  
				/**
				 * Fires event <code>select</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireSelect(mArguments: any): sap.ui.unified.calendar.Month;
	  
				/**
				 * Returns array of IDs of the elements which are the current targets of the association
				 * <code>ariaLabelledBy</code>.
				*/
				getAriaLabelledBy(): any[];
	  
				/**
				 * Gets current value of property <code>date</code>.the month including this date is rendered and this
				 * date is initial focused (if no other focus set)
				 * @returns Value of property <code>date</code>
				*/
				getDate(): any;
	  
				/**
				 * Gets content of aggregation <code>disabledDates</code>.Date Ranges for disabled dates
				 * @since 1.38.0
				*/
				getDisabledDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Gets current value of property <code>firstDayOfWeek</code>.If set, the first day of the displayed
				 * week is this day. Valid values are 0 to 6.If not a valid value is set, the default of the used
				 * locale is used.Default value is <code>-1</code>.
				 * @since 1.28.9
				 * @returns Value of property <code>firstDayOfWeek</code>
				*/
				getFirstDayOfWeek(): number;
	  
				/**
				 * Gets current value of property <code>intervalSelection</code>.If set, interval selection is
				 * allowedDefault value is <code>false</code>.
				 * @returns Value of property <code>intervalSelection</code>
				*/
				getIntervalSelection(): boolean;
	  
				/**
				 * ID of the element which is the current target of the association <code>legend</code>, or
				 * <code>null</code>.
				 * @since 1.38.5
				*/
				getLegend(): any;
	  
				/**
				 * Returns a metadata object for class sap.ui.unified.calendar.Month.
				 * @returns Metadata object describing this class
				*/
				getMetadata(): sap.ui.base.Metadata;
	  
				/**
				 * Gets current value of property <code>nonWorkingDays</code>.If set, the provided weekdays are
				 * displayed as non-working days.Valid values inside the array are 0 to 6.If not set, the weekend
				 * defined in the locale settings is displayed as non-working days.
				 * @since 1.28.9
				 * @returns Value of property <code>nonWorkingDays</code>
				*/
				getNonWorkingDays(): number;
	  
				/**
				 * Gets current value of property <code>primaryCalendarType</code>.If set, the calendar type is used
				 * for display.If not set, the calendar type of the global configuration is used.
				 * @since 1.34.0
				 * @returns Value of property <code>primaryCalendarType</code>
				*/
				getPrimaryCalendarType(): sap.ui.core.CalendarType;
	  
				/**
				 * Gets current value of property <code>secondaryCalendarType</code>.If set, the days are also
				 * displayed in this calendar typeIf not set, the dates are only displayed in the primary calendar type
				 * @since 1.34.0
				 * @returns Value of property <code>secondaryCalendarType</code>
				*/
				getSecondaryCalendarType(): sap.ui.core.CalendarType;
	  
				/**
				 * Gets content of aggregation <code>selectedDates</code>.Date Ranges for selected dates of the
				 * DatePicker
				*/
				getSelectedDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Gets current value of property <code>showHeader</code>.If set, a header with the month name is
				 * shownDefault value is <code>false</code>.
				 * @returns Value of property <code>showHeader</code>
				*/
				getShowHeader(): boolean;
	  
				/**
				 * Gets current value of property <code>singleSelection</code>.If set, only a single date or interval,
				 * if intervalSelection is enabled, can be selectedDefault value is <code>true</code>.
				 * @returns Value of property <code>singleSelection</code>
				*/
				getSingleSelection(): boolean;
	  
				/**
				 * Gets content of aggregation <code>specialDates</code>.Date Range with type to visualize special days
				 * in the Calendar.If one day is assigned to more than one Type, only the first one will be used.
				*/
				getSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
				/**
				 * Gets current value of property <code>width</code>.Width of Month
				 * @since 1.38.0
				 * @returns Value of property <code>width</code>
				*/
				getWidth(): any;
	  
				/**
				 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
				 * <code>disabledDates</code>.and returns its index if found or -1 otherwise.
				 * @since 1.38.0
				 * @param oDisabledDate The disabledDate whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				*/
				indexOfDisabledDate(oDisabledDate: sap.ui.unified.DateRange): number;
	  
				/**
				 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
				 * <code>selectedDates</code>.and returns its index if found or -1 otherwise.
				 * @param oSelectedDate The selectedDate whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				*/
				indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
	  
				/**
				 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation
				 * <code>specialDates</code>.and returns its index if found or -1 otherwise.
				 * @param oSpecialDate The specialDate whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				*/
				indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
	  
				/**
				 * Inserts a disabledDate into the aggregation <code>disabledDates</code>.
				 * @since 1.38.0
				 * @param oDisabledDate the disabledDate to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the disabledDate should be inserted at; for            
				 * a negative value of <code>iIndex</code>, the disabledDate is inserted at position 0; for a value    
				 *         greater than the current size of the aggregation, the disabledDate is inserted at           
				 *  the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				insertDisabledDate(oDisabledDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.Month;
	  
				/**
				 * Inserts a selectedDate into the aggregation <code>selectedDates</code>.
				 * @param oSelectedDate the selectedDate to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the selectedDate should be inserted at; for            
				 * a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value    
				 *         greater than the current size of the aggregation, the selectedDate is inserted at           
				 *  the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.Month;
	  
				/**
				 * Inserts a specialDate into the aggregation <code>specialDates</code>.
				 * @param oSpecialDate the specialDate to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the specialDate should be inserted at; for            
				 * a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value     
				 *        greater than the current size of the aggregation, the specialDate is inserted at            
				 * the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.calendar.Month;
	  
				/**
				 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllAriaLabelledBy(): any[];
	  
				/**
				 * Removes all the controls from the aggregation <code>disabledDates</code>.Additionally, it
				 * unregisters them from the hosting UIArea.
				 * @since 1.38.0
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllDisabledDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Removes all the controls from the aggregation <code>selectedDates</code>.Additionally, it
				 * unregisters them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllSelectedDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Removes all the controls from the aggregation <code>specialDates</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
				/**
				 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
				 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
				 * @returns The removed ariaLabelledBy or <code>null</code>
				*/
				removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
				/**
				 * Removes a disabledDate from the aggregation <code>disabledDates</code>.
				 * @since 1.38.0
				 * @param vDisabledDate The disabledDate to remove or its index or id
				 * @returns The removed disabledDate or <code>null</code>
				*/
				removeDisabledDate(vDisabledDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
				/**
				 * Removes a selectedDate from the aggregation <code>selectedDates</code>.
				 * @param vSelectedDate The selectedDate to remove or its index or id
				 * @returns The removed selectedDate or <code>null</code>
				*/
				removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
				/**
				 * Removes a specialDate from the aggregation <code>specialDates</code>.
				 * @param vSpecialDate The specialDate to remove or its index or id
				 * @returns The removed specialDate or <code>null</code>
				*/
				removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
	  
				/**
				 * Sets a new value for property <code>date</code>.the month including this date is rendered and this
				 * date is initial focused (if no other focus set)When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param oDate New value for property <code>date</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setDate(oDate: any): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets a new value for property <code>firstDayOfWeek</code>.If set, the first day of the displayed
				 * week is this day. Valid values are 0 to 6.If not a valid value is set, the default of the used
				 * locale is used.When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>-1</code>.
				 * @since 1.28.9
				 * @param iFirstDayOfWeek New value for property <code>firstDayOfWeek</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setFirstDayOfWeek(iFirstDayOfWeek: number): void;
	  
				/**
				 * Sets a new value for property <code>intervalSelection</code>.If set, interval selection is
				 * allowedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>false</code>.
				 * @param bIntervalSelection New value for property <code>intervalSelection</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets the associated <code>legend</code>.
				 * @since 1.38.5
				 * @param oLegend ID of an element which becomes the new target of this legend association;
				 * alternatively, an element instance may be given
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setLegend(oLegend: any | sap.ui.unified.CalendarLegend): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets a new value for property <code>nonWorkingDays</code>.If set, the provided weekdays are
				 * displayed as non-working days.Valid values inside the array are 0 to 6.If not set, the weekend
				 * defined in the locale settings is displayed as non-working days.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @since 1.28.9
				 * @param sNonWorkingDays New value for property <code>nonWorkingDays</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setNonWorkingDays(sNonWorkingDays: number): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets a new value for property <code>primaryCalendarType</code>.If set, the calendar type is used for
				 * display.If not set, the calendar type of the global configuration is used.When called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @since 1.34.0
				 * @param sPrimaryCalendarType New value for property <code>primaryCalendarType</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets a new value for property <code>secondaryCalendarType</code>.If set, the days are also displayed
				 * in this calendar typeIf not set, the dates are only displayed in the primary calendar typeWhen
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @since 1.34.0
				 * @param sSecondaryCalendarType New value for property <code>secondaryCalendarType</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setSecondaryCalendarType(sSecondaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets a new value for property <code>showHeader</code>.If set, a header with the month name is
				 * shownWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>false</code>.
				 * @param bShowHeader New value for property <code>showHeader</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setShowHeader(bShowHeader: boolean): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets a new value for property <code>singleSelection</code>.If set, only a single date or interval,
				 * if intervalSelection is enabled, can be selectedWhen called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>true</code>.
				 * @param bSingleSelection New value for property <code>singleSelection</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setSingleSelection(bSingleSelection: boolean): sap.ui.unified.calendar.Month;
	  
				/**
				 * Sets a new value for property <code>width</code>.Width of MonthWhen called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @since 1.38.0
				 * @param sWidth New value for property <code>width</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setWidth(sWidth: any): sap.ui.unified.calendar.Month;
			  }
			  /**
			   * renders a calendar headerThe calendar header consists of 3 buttons where the text can be set and a
			   * previous and a next button.In the normal calendar the first button contains the displayed day, the
			   * second button the displayed month and the third button the displayed year.<b>Note:</b> This is used
			   * inside the calendar. Not for standalone usage
			   * @resource sap/ui/unified/calendar/Header.js
			  */
			  export class Header extends sap.ui.core.Control {
	  
	  
				/**
				 * Constructor for a new Header.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				*/
				constructor(sId: string, mSettings?: any);
	  
	  
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>pressButton0</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.Header</code> itself.First button pressed (normally day)
				 * @since 1.32.0
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.Header</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachPressButton0(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>pressButton1</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.Header</code> itself.Second button pressed (normally month)
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.Header</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachPressButton1(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>pressButton2</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.Header</code> itself.Third button pressed (normally year)
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.Header</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachPressButton2(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>pressNext</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.Header</code> itself.Next button pressed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.Header</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachPressNext(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>pressPrevious</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.Header</code> itself.Previous button pressed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.Header</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachPressPrevious(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>pressButton0</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @since 1.32.0
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachPressButton0(fnFunction: any, oListener: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>pressButton1</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachPressButton1(fnFunction: any, oListener: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>pressButton2</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachPressButton2(fnFunction: any, oListener: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>pressNext</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachPressNext(fnFunction: any, oListener: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>pressPrevious</code> event of this
				 * <code>sap.ui.unified.calendar.Header</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachPressPrevious(fnFunction: any, oListener: any): sap.ui.unified.calendar.Header;
	  
	  
				/**
				 * Fires event <code>pressButton0</code> to attached listeners.
				 * @since 1.32.0
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				firePressButton0(mArguments: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Fires event <code>pressButton1</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				firePressButton1(mArguments: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Fires event <code>pressButton2</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				firePressButton2(mArguments: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Fires event <code>pressNext</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				firePressNext(mArguments: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Fires event <code>pressPrevious</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				firePressPrevious(mArguments: any): sap.ui.unified.calendar.Header;
	  
				/**
				 * Gets current value of property <code>additionalTextButton0</code>.Additional text of the first
				 * button (normally day)
				 * @since 1.34.0
				 * @returns Value of property <code>additionalTextButton0</code>
				*/
				getAdditionalTextButton0(): string;
	  
				/**
				 * Gets current value of property <code>additionalTextButton1</code>.Additional text of the second
				 * button (normally month)
				 * @since 1.34.0
				 * @returns Value of property <code>additionalTextButton1</code>
				*/
				getAdditionalTextButton1(): string;
	  
				/**
				 * Gets current value of property <code>additionalTextButton2</code>.Additional text of the third
				 * button (normally year)
				 * @since 1.34.0
				 * @returns Value of property <code>additionalTextButton2</code>
				*/
				getAdditionalTextButton2(): string;
	  
				/**
				 * Gets current value of property <code>ariaLabelButton0</code>.aria-label of the first button
				 * (normally day)
				 * @since 1.32.0
				 * @returns Value of property <code>ariaLabelButton0</code>
				*/
				getAriaLabelButton0(): string;
	  
				/**
				 * Gets current value of property <code>ariaLabelButton1</code>.aria-label of the second button
				 * (normally month)
				 * @returns Value of property <code>ariaLabelButton1</code>
				*/
				getAriaLabelButton1(): string;
	  
				/**
				 * Gets current value of property <code>ariaLabelButton2</code>.aria-label of the third button
				 * (normally year)
				 * @returns Value of property <code>ariaLabelButton2</code>
				*/
				getAriaLabelButton2(): string;
	  
				/**
				 * Gets current value of property <code>enabledNext</code>.Enables the Next buttonDefault value is
				 * <code>true</code>.
				 * @returns Value of property <code>enabledNext</code>
				*/
				getEnabledNext(): boolean;
	  
				/**
				 * Gets current value of property <code>enabledPrevious</code>.Enables the previous buttonDefault value
				 * is <code>true</code>.
				 * @returns Value of property <code>enabledPrevious</code>
				*/
				getEnabledPrevious(): boolean;
	  
				/**
				 * Returns a metadata object for class sap.ui.unified.calendar.Header.
				 * @returns Metadata object describing this class
				*/
				getMetadata(): sap.ui.base.Metadata;
	  
				/**
				 * Gets current value of property <code>textButton0</code>.Text of the first button (normally day)
				 * @since 1.32.0
				 * @returns Value of property <code>textButton0</code>
				*/
				getTextButton0(): string;
	  
				/**
				 * Gets current value of property <code>textButton1</code>.Text of the second button (normally month)
				 * @returns Value of property <code>textButton1</code>
				*/
				getTextButton1(): string;
	  
				/**
				 * Gets current value of property <code>textButton2</code>.Text of the third button (normally year)
				 * @returns Value of property <code>textButton2</code>
				*/
				getTextButton2(): string;
	  
				/**
				 * Gets current value of property <code>visibleButton0</code>.If set, the first button will be
				 * displayed<b>Note:</b> The default is set to false to be compatible to older versionsDefault value is
				 * <code>false</code>.
				 * @since 1.32.0
				 * @returns Value of property <code>visibleButton0</code>
				*/
				getVisibleButton0(): boolean;
	  
				/**
				 * Gets current value of property <code>visibleButton1</code>.If set, the second button will be
				 * displayedDefault value is <code>true</code>.
				 * @since 1.32.0
				 * @returns Value of property <code>visibleButton1</code>
				*/
				getVisibleButton1(): boolean;
	  
				/**
				 * Gets current value of property <code>visibleButton2</code>.If set, the third button will be
				 * displayedDefault value is <code>true</code>.
				 * @since 1.32.0
				 * @returns Value of property <code>visibleButton2</code>
				*/
				getVisibleButton2(): boolean;
	  
				/**
				 * Sets a new value for property <code>additionalTextButton0</code>.Additional text of the first button
				 * (normally day)When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.
				 * @since 1.34.0
				 * @param sAdditionalTextButton0 New value for property <code>additionalTextButton0</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setAdditionalTextButton0(sAdditionalTextButton0: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>additionalTextButton1</code>.Additional text of the second
				 * button (normally month)When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.
				 * @since 1.34.0
				 * @param sAdditionalTextButton1 New value for property <code>additionalTextButton1</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setAdditionalTextButton1(sAdditionalTextButton1: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>additionalTextButton2</code>.Additional text of the third button
				 * (normally year)When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.
				 * @since 1.34.0
				 * @param sAdditionalTextButton2 New value for property <code>additionalTextButton2</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setAdditionalTextButton2(sAdditionalTextButton2: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>ariaLabelButton0</code>.aria-label of the first button (normally
				 * day)When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @since 1.32.0
				 * @param sAriaLabelButton0 New value for property <code>ariaLabelButton0</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setAriaLabelButton0(sAriaLabelButton0: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>ariaLabelButton1</code>.aria-label of the second button
				 * (normally month)When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.
				 * @param sAriaLabelButton1 New value for property <code>ariaLabelButton1</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setAriaLabelButton1(sAriaLabelButton1: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>ariaLabelButton2</code>.aria-label of the third button (normally
				 * year)When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param sAriaLabelButton2 New value for property <code>ariaLabelButton2</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setAriaLabelButton2(sAriaLabelButton2: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>enabledNext</code>.Enables the Next buttonWhen called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>true</code>.
				 * @param bEnabledNext New value for property <code>enabledNext</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setEnabledNext(bEnabledNext: boolean): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>enabledPrevious</code>.Enables the previous buttonWhen called
				 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
				 * be restored.Default value is <code>true</code>.
				 * @param bEnabledPrevious New value for property <code>enabledPrevious</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setEnabledPrevious(bEnabledPrevious: boolean): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>textButton0</code>.Text of the first button (normally day)When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @since 1.32.0
				 * @param sTextButton0 New value for property <code>textButton0</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setTextButton0(sTextButton0: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>textButton1</code>.Text of the second button (normally
				 * month)When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param sTextButton1 New value for property <code>textButton1</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setTextButton1(sTextButton1: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>textButton2</code>.Text of the third button (normally year)When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param sTextButton2 New value for property <code>textButton2</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setTextButton2(sTextButton2: string): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>visibleButton0</code>.If set, the first button will be
				 * displayed<b>Note:</b> The default is set to false to be compatible to older versionsWhen called with
				 * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>false</code>.
				 * @since 1.32.0
				 * @param bVisibleButton0 New value for property <code>visibleButton0</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setVisibleButton0(bVisibleButton0: boolean): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>visibleButton1</code>.If set, the second button will be
				 * displayedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>true</code>.
				 * @since 1.32.0
				 * @param bVisibleButton1 New value for property <code>visibleButton1</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setVisibleButton1(bVisibleButton1: boolean): sap.ui.unified.calendar.Header;
	  
				/**
				 * Sets a new value for property <code>visibleButton2</code>.If set, the third button will be
				 * displayedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>true</code>.
				 * @since 1.32.0
				 * @param bVisibleButton2 New value for property <code>visibleButton2</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setVisibleButton2(bVisibleButton2: boolean): sap.ui.unified.calendar.Header;
			  }
			  /**
			   * Renders a row of time items using ItemNavigation. There is no paging or navigation outside the
			   * rendered area implemented.This is done inside the CalendarTimeInterval.If used inside the
			   * CalendarTimeInterval the properties and aggregation are directly taken from the parent(to not
			   * duplicate and synchronize DateRanges and so on...).The TimesRow works with JavaScript Date objects.
			   * @resource sap/ui/unified/calendar/TimesRow.js
			  */
			  export class TimesRow extends sap.ui.core.Control {
	  
	  
				/**
				 * Constructor for a new <code>TimesRow</code>.It shows a calendar with time granularity (normally
				 * hours)<b>Note:</b> This is used inside the CalendarTimeInterval, not for standalone usage.Accepts an
				 * object literal <code>mSettings</code> that defines initialproperty values, aggregated and associated
				 * objects as well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general
				 * description of the syntax of the settings object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				*/
				constructor(sId: string, mSettings?: any);
	  
	  
	  
				/**
				 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
				 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Adds some selectedDate to the aggregation <code>selectedDates</code>.
				 * @param oSelectedDate the selectedDate to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Adds some specialDate to the aggregation <code>specialDates</code>.
				 * @param oSpecialDate the specialDate to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>focus</code> event of this
				 * <code>sap.ui.unified.calendar.TimesRow</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.TimesRow</code> itself.Time focus changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.TimesRow</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachFocus(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.TimesRow</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.TimesRow</code> itself.Time selection changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.TimesRow</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Checks if a date is focusable in the current rendered output.This means that if it is not rendered,
				 * it is not focusable.
				 * @param oDate JavaScript Date object for focused date.
				 * @returns flag if focusable
				*/
				checkDateFocusable(oDate: any): boolean;
	  
				/**
				 * Destroys all the selectedDates in the aggregation <code>selectedDates</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				destroySelectedDates(): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Destroys all the specialDates in the aggregation <code>specialDates</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				destroySpecialDates(): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>focus</code> event of this
				 * <code>sap.ui.unified.calendar.TimesRow</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachFocus(fnFunction: any, oListener: any): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.TimesRow</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachSelect(fnFunction: any, oListener: any): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Displays the given date without setting the focus
				 * @param oDate JavaScript Date object for focused date.
				 * @returns <code>this</code> to allow method chaining
				*/
				displayDate(oDate: any): sap.ui.unified.calendar.TimesRow;
	  
	  
				/**
				 * Fires event <code>focus</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>date</code> of type <code>object</code>date, as JavaScript Date object, of
				 * the focused time.</li><li><code>notVisible</code> of type <code>boolean</code>If set, the focused
				 * date is not rendered yet. (This happens by navigating out of the visible area.)</li></ul>
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireFocus(mArguments: any): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Fires event <code>select</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireSelect(mArguments: any): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Returns array of IDs of the elements which are the current targets of the association
				 * <code>ariaLabelledBy</code>.
				*/
				getAriaLabelledBy(): any[];
	  
				/**
				 * Gets current value of property <code>date</code>.A date as JavaScript Date object. The month
				 * including this date is rendered and this date is focused initially (if no other focus is set).If the
				 * date property is not in the range <code>startDate</code> + <code>items</code> in the rendering
				 * phase,it is set to the <code>startDate</code>.So after setting the <code>startDate</code> the date
				 * should be set to be in the visible range.
				 * @returns Value of property <code>date</code>
				*/
				getDate(): any;
	  
				/**
				 * Gets current value of property <code>intervalMinutes</code>.Size of on time interval in minutes,
				 * default is 60 minutes.<b>Note:</b> the start of the interval calculation is always
				 * <code>startDat</code> at 00:00.A interval longer then 720 minutes is not allowed. Please use the
				 * <code>DatesRow</code> instead.A day must be divisible by this interval size. One interval must not
				 * include more than one day.Default value is <code>60</code>.
				 * @returns Value of property <code>intervalMinutes</code>
				*/
				getIntervalMinutes(): number;
	  
				/**
				 * Gets current value of property <code>intervalSelection</code>.If set, interval selection is
				 * allowedDefault value is <code>false</code>.
				 * @returns Value of property <code>intervalSelection</code>
				*/
				getIntervalSelection(): boolean;
	  
				/**
				 * Gets current value of property <code>items</code>.Number of time items displayedDefault value is
				 * <code>12</code>.
				 * @returns Value of property <code>items</code>
				*/
				getItems(): number;
	  
				/**
				 * ID of the element which is the current target of the association <code>legend</code>, or
				 * <code>null</code>.
				 * @since 1.38.5
				*/
				getLegend(): any;
	  
				/**
				 * Returns a metadata object for class sap.ui.unified.calendar.TimesRow.
				 * @returns Metadata object describing this class
				*/
				getMetadata(): sap.ui.base.Metadata;
	  
				/**
				 * Gets content of aggregation <code>selectedDates</code>.Date ranges for selected dates.If
				 * <code>singleSelection</code> is set, only the first entry is used.
				*/
				getSelectedDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Gets current value of property <code>showHeader</code>.If set, a header with the years is shown to
				 * visualize what month belongs to what year.Default value is <code>false</code>.
				 * @returns Value of property <code>showHeader</code>
				*/
				getShowHeader(): boolean;
	  
				/**
				 * Gets current value of property <code>singleSelection</code>.If set, only a single month or interval,
				 * if intervalSelection is enabled, can be selected<b>Note:</b> Selection of multiple intervals is not
				 * supported in the current version.Default value is <code>true</code>.
				 * @returns Value of property <code>singleSelection</code>
				*/
				getSingleSelection(): boolean;
	  
				/**
				 * Gets content of aggregation <code>specialDates</code>.Date ranges with type to visualize special
				 * item in the row.If one day is assigned to more than one type, only the first one will be used.
				*/
				getSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
				/**
				 * Gets current value of property <code>startDate</code>.Start date, as JavaScript Date object, of the
				 * row.
				 * @returns Value of property <code>startDate</code>
				*/
				getStartDate(): any;
	  
				/**
				 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
				 * <code>selectedDates</code>.and returns its index if found or -1 otherwise.
				 * @param oSelectedDate The selectedDate whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				*/
				indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
	  
				/**
				 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation
				 * <code>specialDates</code>.and returns its index if found or -1 otherwise.
				 * @param oSpecialDate The specialDate whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				*/
				indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
	  
				/**
				 * Inserts a selectedDate into the aggregation <code>selectedDates</code>.
				 * @param oSelectedDate the selectedDate to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the selectedDate should be inserted at; for            
				 * a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value    
				 *         greater than the current size of the aggregation, the selectedDate is inserted at           
				 *  the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Inserts a specialDate into the aggregation <code>specialDates</code>.
				 * @param oSpecialDate the specialDate to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the specialDate should be inserted at; for            
				 * a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value     
				 *        greater than the current size of the aggregation, the specialDate is inserted at            
				 * the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllAriaLabelledBy(): any[];
	  
				/**
				 * Removes all the controls from the aggregation <code>selectedDates</code>.Additionally, it
				 * unregisters them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllSelectedDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Removes all the controls from the aggregation <code>specialDates</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
				/**
				 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
				 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
				 * @returns The removed ariaLabelledBy or <code>null</code>
				*/
				removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
				/**
				 * Removes a selectedDate from the aggregation <code>selectedDates</code>.
				 * @param vSelectedDate The selectedDate to remove or its index or id
				 * @returns The removed selectedDate or <code>null</code>
				*/
				removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
				/**
				 * Removes a specialDate from the aggregation <code>specialDates</code>.
				 * @param vSpecialDate The specialDate to remove or its index or id
				 * @returns The removed specialDate or <code>null</code>
				*/
				removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
	  
				/**
				 * Sets a new value for property <code>date</code>.A date as JavaScript Date object. The month
				 * including this date is rendered and this date is focused initially (if no other focus is set).If the
				 * date property is not in the range <code>startDate</code> + <code>items</code> in the rendering
				 * phase,it is set to the <code>startDate</code>.So after setting the <code>startDate</code> the date
				 * should be set to be in the visible range.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param oDate New value for property <code>date</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setDate(oDate: any): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Sets a new value for property <code>intervalMinutes</code>.Size of on time interval in minutes,
				 * default is 60 minutes.<b>Note:</b> the start of the interval calculation is always
				 * <code>startDat</code> at 00:00.A interval longer then 720 minutes is not allowed. Please use the
				 * <code>DatesRow</code> instead.A day must be divisible by this interval size. One interval must not
				 * include more than one day.When called with a value of <code>null</code> or <code>undefined</code>,
				 * the default value of the property will be restored.Default value is <code>60</code>.
				 * @param iIntervalMinutes New value for property <code>intervalMinutes</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setIntervalMinutes(iIntervalMinutes: number): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Sets a new value for property <code>intervalSelection</code>.If set, interval selection is
				 * allowedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>false</code>.
				 * @param bIntervalSelection New value for property <code>intervalSelection</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Sets a new value for property <code>items</code>.Number of time items displayedWhen called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>12</code>.
				 * @param iItems New value for property <code>items</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setItems(iItems: number): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Sets the associated <code>legend</code>.
				 * @since 1.38.5
				 * @param oLegend ID of an element which becomes the new target of this legend association;
				 * alternatively, an element instance may be given
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setLegend(oLegend: any | sap.ui.unified.CalendarLegend): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Sets a new value for property <code>showHeader</code>.If set, a header with the years is shown to
				 * visualize what month belongs to what year.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>false</code>.
				 * @param bShowHeader New value for property <code>showHeader</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setShowHeader(bShowHeader: boolean): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Sets a new value for property <code>singleSelection</code>.If set, only a single month or interval,
				 * if intervalSelection is enabled, can be selected<b>Note:</b> Selection of multiple intervals is not
				 * supported in the current version.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>true</code>.
				 * @param bSingleSelection New value for property <code>singleSelection</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setSingleSelection(bSingleSelection: boolean): sap.ui.unified.calendar.TimesRow;
	  
				/**
				 * Sets a new value for property <code>startDate</code>.Start date, as JavaScript Date object, of the
				 * row.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param oStartDate New value for property <code>startDate</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setStartDate(oStartDate: any): sap.ui.unified.calendar.TimesRow;
			  }
			  /**
			   * renders a row of days with ItemNavigationThis is used inside the calendar. Not for stand alone
			   * usageIf used inside the calendar the properties and aggregation are directly taken from the
			   * parent(To not duplicate and sync DateRanges and so on...)
			   * @resource sap/ui/unified/calendar/DatesRow.js
			  */
			  export class DatesRow extends sap.ui.unified.calendar.Month {
	  
	  
				/**
				 * Constructor for a new calendar/DatesRow.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				*/
				constructor(sId: string, mSettings?: any);
	  
	  
	  
				/**
				 * displays the a given date without setting the focusProperty <code>date</code> date to be focused or
				 * displayed. It must be in the displayed date rangebeginning with <code>startDate</code> and
				 * <code>days</code> daysSo set this properties before setting the date.
				 * @param oDate JavaScript date object for focused date.
				 * @returns <code>this</code> to allow method chaining
				*/
				displayDate(oDate: any): sap.ui.unified.calendar.Month;
	  
	  
				/**
				 * Gets current value of property <code>days</code>.number of days displayedDefault value is
				 * <code>7</code>.
				 * @returns Value of property <code>days</code>
				*/
				getDays(): number;
	  
				/**
				 * Returns a metadata object for class sap.ui.unified.calendar.DatesRow.
				 * @returns Metadata object describing this class
				*/
				getMetadata(): sap.ui.base.Metadata;
	  
				/**
				 * Gets current value of property <code>showDayNamesLine</code>.If set the day names are shown in a
				 * separate line.If not set the day names are shown inside the single days.Default value is
				 * <code>true</code>.
				 * @since 1.34.0
				 * @returns Value of property <code>showDayNamesLine</code>
				*/
				getShowDayNamesLine(): boolean;
	  
				/**
				 * Gets current value of property <code>startDate</code>.Start date of the rowIf in rendering phase the
				 * date property is not in the range startDate + days,it is set to the start dateSo after setting the
				 * start date the date should be set to be in the range of the start date
				 * @returns Value of property <code>startDate</code>
				*/
				getStartDate(): any;
	  
				/**
				 * Setter for property <code>date</code>.Property <code>date</code> date to be focused or displayed. It
				 * must be in the displayed date rangebeginning with <code>startDate</code> and <code>days</code>
				 * daysSo set this properties before setting the date.
				 * @param oDate JavaScript date object for start date.
				 * @returns <code>this</code> to allow method chaining
				*/
				setDate(oDate: any): sap.ui.unified.calendar.DatesRow;
	  
				/**
				 * Sets a new value for property <code>days</code>.number of days displayedWhen called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>7</code>.
				 * @param iDays New value for property <code>days</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setDays(iDays: number): sap.ui.unified.calendar.DatesRow;
	  
				/**
				 * Setter for property <code>firstDayOfWeek</code>.Property <code>firstDayOfWeek</code> is not
				 * supported in <code>sap.ui.unified.calendar.DatesRow</code> control.
				 * @param iFirstDayOfWeek first day of the week
				*/
				setFirstDayOfWeek(iFirstDayOfWeek: number): void;
	  
				/**
				 * Sets a new value for property <code>showDayNamesLine</code>.If set the day names are shown in a
				 * separate line.If not set the day names are shown inside the single days.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>true</code>.
				 * @since 1.34.0
				 * @param bShowDayNamesLine New value for property <code>showDayNamesLine</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setShowDayNamesLine(bShowDayNamesLine: boolean): sap.ui.unified.calendar.DatesRow;
	  
				/**
				 * Sets a new value for property <code>startDate</code>.Start date of the rowIf in rendering phase the
				 * date property is not in the range startDate + days,it is set to the start dateSo after setting the
				 * start date the date should be set to be in the range of the start dateWhen called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param oStartDate New value for property <code>startDate</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setStartDate(oStartDate: any): sap.ui.unified.calendar.DatesRow;
			  }
			  /**
			   * Renders a row of months using ItemNavigation. There is no paging or navigation outside the rendered
			   * area implemented.This is done inside the CalendarMonthInterval.If used inside the
			   * CalendarMonthInterval the properties and aggregation are directly taken from the parent(to not
			   * duplicate and synchronize DateRanges and so on...).The MontsRow works with JavaScript Date objects,
			   * but only the month and the year are used to display and interact.As representation for a month, the
			   * 1st of the month will always be returned in the API.
			   * @resource sap/ui/unified/calendar/MonthsRow.js
			  */
			  export class MonthsRow extends sap.ui.core.Control {
	  
	  
				/**
				 * Constructor for a new <code>MonthsRow</code>.It shows a calendar with month granularity<b>Note:</b>
				 * This is used inside the CalendarMonthInterval, not for standalone usage.Accepts an object literal
				 * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
				 * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
				 * of the syntax of the settings object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				*/
				constructor(sId: string, mSettings?: any);
	  
	  
	  
				/**
				 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
				 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Adds some selectedDate to the aggregation <code>selectedDates</code>.
				 * @param oSelectedDate the selectedDate to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Adds some specialDate to the aggregation <code>specialDates</code>.
				 * @param oSpecialDate the specialDate to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>focus</code> event of this
				 * <code>sap.ui.unified.calendar.MonthsRow</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.Month focus changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.MonthsRow</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachFocus(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.MonthsRow</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.Month selection changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.MonthsRow</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Checks if a date is focusable in the current rendered output.This means that if it is not rendered,
				 * it is not focusable.
				 * @param oDate JavaScript Date object for focused date.
				 * @returns flag if focusable
				*/
				checkDateFocusable(oDate: any): boolean;
	  
				/**
				 * Destroys all the selectedDates in the aggregation <code>selectedDates</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				destroySelectedDates(): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Destroys all the specialDates in the aggregation <code>specialDates</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				destroySpecialDates(): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>focus</code> event of this
				 * <code>sap.ui.unified.calendar.MonthsRow</code>.The passed function and listener object must match
				 * the ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachFocus(fnFunction: any, oListener: any): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.MonthsRow</code>.The passed function and listener object must match
				 * the ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachSelect(fnFunction: any, oListener: any): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Displays the month of a given date without setting the focus
				 * @param oDate JavaScript Date object for focused date.
				 * @returns <code>this</code> to allow method chaining
				*/
				displayDate(oDate: any): sap.ui.unified.calendar.MonthsRow;
	  
	  
				/**
				 * Fires event <code>focus</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>date</code> of type <code>object</code>First date, as JavaScript Date
				 * object, of the month that is focused.</li><li><code>notVisible</code> of type <code>boolean</code>If
				 * set, the focused date is not rendered yet. (This happens by navigating out of the visible
				 * area.)</li></ul>
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireFocus(mArguments: any): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Fires event <code>select</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireSelect(mArguments: any): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Returns array of IDs of the elements which are the current targets of the association
				 * <code>ariaLabelledBy</code>.
				*/
				getAriaLabelledBy(): any[];
	  
				/**
				 * Gets current value of property <code>date</code>.A date as JavaScript Date object. The month
				 * including this date is rendered and this date is focused initially (if no other focus is set).If the
				 * date property is not in the range <code>startDate</code> + <code>months</code> in the rendering
				 * phase,it is set to the <code>startDate</code>.So after setting the <code>startDate</code> the date
				 * should be set to be in the visible range.
				 * @returns Value of property <code>date</code>
				*/
				getDate(): any;
	  
				/**
				 * Gets current value of property <code>intervalSelection</code>.If set, interval selection is
				 * allowedDefault value is <code>false</code>.
				 * @returns Value of property <code>intervalSelection</code>
				*/
				getIntervalSelection(): boolean;
	  
				/**
				 * ID of the element which is the current target of the association <code>legend</code>, or
				 * <code>null</code>.
				 * @since 1.38.5
				*/
				getLegend(): any;
	  
				/**
				 * Returns a metadata object for class sap.ui.unified.calendar.MonthsRow.
				 * @returns Metadata object describing this class
				*/
				getMetadata(): sap.ui.base.Metadata;
	  
				/**
				 * Gets current value of property <code>months</code>.Number of months displayedDefault value is
				 * <code>12</code>.
				 * @returns Value of property <code>months</code>
				*/
				getMonths(): number;
	  
				/**
				 * Gets content of aggregation <code>selectedDates</code>.Date ranges for selected dates.If
				 * <code>singleSelection</code> is set, only the first entry is used.<b>Note:</b> Even if only one day
				 * is selected, the whole corresponding month is selected.
				*/
				getSelectedDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Gets current value of property <code>showHeader</code>.If set, a header with the years is shown to
				 * visualize what month belongs to what year.Default value is <code>false</code>.
				 * @returns Value of property <code>showHeader</code>
				*/
				getShowHeader(): boolean;
	  
				/**
				 * Gets current value of property <code>singleSelection</code>.If set, only a single month or interval,
				 * if intervalSelection is enabled, can be selected<b>Note:</b> Selection of multiple intervals is not
				 * supported in the current version.Default value is <code>true</code>.
				 * @returns Value of property <code>singleSelection</code>
				*/
				getSingleSelection(): boolean;
	  
				/**
				 * Gets content of aggregation <code>specialDates</code>.Date ranges with type to visualize special
				 * months in the row.If one day is assigned to more than one type, only the first one will be
				 * used.<b>Note:</b> Even if only one day is set as a special day, the whole corresponding month is
				 * displayed in this way.
				*/
				getSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
				/**
				 * Gets current value of property <code>startDate</code>.Start date, as JavaScript Date object, of the
				 * row. The month of this date is the first month of the displayed row.
				 * @returns Value of property <code>startDate</code>
				*/
				getStartDate(): any;
	  
				/**
				 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
				 * <code>selectedDates</code>.and returns its index if found or -1 otherwise.
				 * @param oSelectedDate The selectedDate whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				*/
				indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
	  
				/**
				 * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation
				 * <code>specialDates</code>.and returns its index if found or -1 otherwise.
				 * @param oSpecialDate The specialDate whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				*/
				indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
	  
				/**
				 * Inserts a selectedDate into the aggregation <code>selectedDates</code>.
				 * @param oSelectedDate the selectedDate to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the selectedDate should be inserted at; for            
				 * a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value    
				 *         greater than the current size of the aggregation, the selectedDate is inserted at           
				 *  the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Inserts a specialDate into the aggregation <code>specialDates</code>.
				 * @param oSpecialDate the specialDate to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the specialDate should be inserted at; for            
				 * a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value     
				 *        greater than the current size of the aggregation, the specialDate is inserted at            
				 * the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllAriaLabelledBy(): any[];
	  
				/**
				 * Removes all the controls from the aggregation <code>selectedDates</code>.Additionally, it
				 * unregisters them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllSelectedDates(): sap.ui.unified.DateRange[];
	  
				/**
				 * Removes all the controls from the aggregation <code>specialDates</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				*/
				removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
				/**
				 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
				 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
				 * @returns The removed ariaLabelledBy or <code>null</code>
				*/
				removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
				/**
				 * Removes a selectedDate from the aggregation <code>selectedDates</code>.
				 * @param vSelectedDate The selectedDate to remove or its index or id
				 * @returns The removed selectedDate or <code>null</code>
				*/
				removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
				/**
				 * Removes a specialDate from the aggregation <code>specialDates</code>.
				 * @param vSpecialDate The specialDate to remove or its index or id
				 * @returns The removed specialDate or <code>null</code>
				*/
				removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
	  
				/**
				 * Sets a new value for property <code>date</code>.A date as JavaScript Date object. The month
				 * including this date is rendered and this date is focused initially (if no other focus is set).If the
				 * date property is not in the range <code>startDate</code> + <code>months</code> in the rendering
				 * phase,it is set to the <code>startDate</code>.So after setting the <code>startDate</code> the date
				 * should be set to be in the visible range.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param oDate New value for property <code>date</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setDate(oDate: any): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Sets a new value for property <code>intervalSelection</code>.If set, interval selection is
				 * allowedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>false</code>.
				 * @param bIntervalSelection New value for property <code>intervalSelection</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Sets the associated <code>legend</code>.
				 * @since 1.38.5
				 * @param oLegend ID of an element which becomes the new target of this legend association;
				 * alternatively, an element instance may be given
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setLegend(oLegend: any | sap.ui.unified.CalendarLegend): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Sets a new value for property <code>months</code>.Number of months displayedWhen called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>12</code>.
				 * @param iMonths New value for property <code>months</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setMonths(iMonths: number): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Sets a new value for property <code>showHeader</code>.If set, a header with the years is shown to
				 * visualize what month belongs to what year.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>false</code>.
				 * @param bShowHeader New value for property <code>showHeader</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setShowHeader(bShowHeader: boolean): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Sets a new value for property <code>singleSelection</code>.If set, only a single month or interval,
				 * if intervalSelection is enabled, can be selected<b>Note:</b> Selection of multiple intervals is not
				 * supported in the current version.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>true</code>.
				 * @param bSingleSelection New value for property <code>singleSelection</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setSingleSelection(bSingleSelection: boolean): sap.ui.unified.calendar.MonthsRow;
	  
				/**
				 * Sets a new value for property <code>startDate</code>.Start date, as JavaScript Date object, of the
				 * row. The month of this date is the first month of the displayed row.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param oStartDate New value for property <code>startDate</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setStartDate(oStartDate: any): sap.ui.unified.calendar.MonthsRow;
			  }
			  /**
			   * renders a YearPicker with ItemNavigationThis is used inside the calendar. Not for stand alone usage
			   * @resource sap/ui/unified/calendar/YearPicker.js
			  */
			  export class YearPicker extends sap.ui.core.Control {
	  
	  
				/**
				 * Constructor for a new YearPicker.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				*/
				constructor(sId: string, mSettings?: any);
	  
	  
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>pageChange</code> event of this
				 * <code>sap.ui.unified.calendar.YearPicker</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.YearPicker</code> itself.The <code>pageChange</code> event is
				 * fired if the displayed years are changed by user navigation.
				 * @since 1.38.0
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.YearPicker</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachPageChange(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.YearPicker</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.YearPicker</code> itself.Month selection changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.YearPicker</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>pageChange</code> event of this
				 * <code>sap.ui.unified.calendar.YearPicker</code>.The passed function and listener object must match
				 * the ones used for event registration.
				 * @since 1.38.0
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachPageChange(fnFunction: any, oListener: any): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.YearPicker</code>.The passed function and listener object must match
				 * the ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachSelect(fnFunction: any, oListener: any): sap.ui.unified.calendar.YearPicker;
	  
	  
				/**
				 * Fires event <code>pageChange</code> to attached listeners.
				 * @since 1.38.0
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				firePageChange(mArguments: any): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Fires event <code>select</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireSelect(mArguments: any): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Gets current value of property <code>columns</code>.number of years in each row0 means just to have
				 * all years in one row, independent of the numberDefault value is <code>4</code>.
				 * @since 1.30.0
				 * @returns Value of property <code>columns</code>
				*/
				getColumns(): number;
	  
				/**
				 * Gets current value of property <code>date</code>.Date as JavaScript Date object. For this date a
				 * <code>YearPicker</code> is rendered. If a Year is selected thedate is updated with the start date of
				 * the selected year (depending on the calendar type).
				 * @since 1.34.0
				 * @returns Value of property <code>date</code>
				*/
				getDate(): any;
	  
				/**
				 * return the first date of the first rendered year<b>Note:</b> If the YearPicker is not rendered no
				 * date is returned
				 * @since 1.38.0
				 * @returns JavaScript Date Object
				*/
				getFirstRenderedDate(): any;
	  
				/**
				 * Returns a metadata object for class sap.ui.unified.calendar.YearPicker.
				 * @returns Metadata object describing this class
				*/
				getMetadata(): sap.ui.base.Metadata;
	  
				/**
				 * Gets current value of property <code>primaryCalendarType</code>.If set, the calendar type is used
				 * for display.If not set, the calendar type of the global configuration is used.
				 * @since 1.34.0
				 * @returns Value of property <code>primaryCalendarType</code>
				*/
				getPrimaryCalendarType(): sap.ui.core.CalendarType;
	  
				/**
				 * Gets current value of property <code>year</code>.The year is initial focused and selectedThe value
				 * must be between 0 and 9999Default value is <code>2000</code>.
				 * @returns Value of property <code>year</code>
				*/
				getYear(): number;
	  
				/**
				 * Gets current value of property <code>years</code>.number of displayed yearsDefault value is
				 * <code>20</code>.
				 * @since 1.30.0
				 * @returns Value of property <code>years</code>
				*/
				getYears(): number;
	  
				/**
				 * displays the next page
				 * @returns <code>this</code> to allow method chaining
				*/
				nextPage(): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * displays the previous page
				 * @returns <code>this</code> to allow method chaining
				*/
				previousPage(): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Sets a new value for property <code>columns</code>.number of years in each row0 means just to have
				 * all years in one row, independent of the numberWhen called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>4</code>.
				 * @since 1.30.0
				 * @param iColumns New value for property <code>columns</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setColumns(iColumns: number): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Sets a new value for property <code>date</code>.Date as JavaScript Date object. For this date a
				 * <code>YearPicker</code> is rendered. If a Year is selected thedate is updated with the start date of
				 * the selected year (depending on the calendar type).When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @since 1.34.0
				 * @param oDate New value for property <code>date</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setDate(oDate: any): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Sets a new value for property <code>primaryCalendarType</code>.If set, the calendar type is used for
				 * display.If not set, the calendar type of the global configuration is used.When called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @since 1.34.0
				 * @param sPrimaryCalendarType New value for property <code>primaryCalendarType</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Sets a new value for property <code>year</code>.The year is initial focused and selectedThe value
				 * must be between 0 and 9999When called with a value of <code>null</code> or <code>undefined</code>,
				 * the default value of the property will be restored.Default value is <code>2000</code>.
				 * @param iYear New value for property <code>year</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setYear(iYear: number): sap.ui.unified.calendar.YearPicker;
	  
				/**
				 * Sets a new value for property <code>years</code>.number of displayed yearsWhen called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>20</code>.
				 * @since 1.30.0
				 * @param iYears New value for property <code>years</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setYears(iYears: number): sap.ui.unified.calendar.YearPicker;
			  }
			  /**
			   * renders a MonthPicker with ItemNavigationThis is used inside the calendar. Not for stand alone usage
			   * @resource sap/ui/unified/calendar/MonthPicker.js
			  */
			  export class MonthPicker extends sap.ui.core.Control {
	  
	  
				/**
				 * Constructor for a new MonthPicker.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				*/
				constructor(sId: string, mSettings?: any);
	  
	  
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>pageChange</code> event of this
				 * <code>sap.ui.unified.calendar.MonthPicker</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.MonthPicker</code> itself.If less than 12 months are displayed
				 * the <code>pageChange</code> event is firedif the displayed months are changed by user navigation.
				 * @since 1.38.0
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.MonthPicker</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachPageChange(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.MonthPicker</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.unified.calendar.MonthPicker</code> itself.Month selection changed
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.unified.calendar.MonthPicker</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>pageChange</code> event of this
				 * <code>sap.ui.unified.calendar.MonthPicker</code>.The passed function and listener object must match
				 * the ones used for event registration.
				 * @since 1.38.0
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachPageChange(fnFunction: any, oListener: any): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
				 * <code>sap.ui.unified.calendar.MonthPicker</code>.The passed function and listener object must match
				 * the ones used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				detachSelect(fnFunction: any, oListener: any): sap.ui.unified.calendar.MonthPicker;
	  
	  
				/**
				 * Fires event <code>pageChange</code> to attached listeners.
				 * @since 1.38.0
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				firePageChange(mArguments: any): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Fires event <code>select</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				fireSelect(mArguments: any): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Gets current value of property <code>columns</code>.number of months in each rowThe value must be
				 * between 0 and 12 (0 means just to have all months in one row, independent of the number)Default
				 * value is <code>3</code>.
				 * @since 1.30.0
				 * @returns Value of property <code>columns</code>
				*/
				getColumns(): number;
	  
				/**
				 * Returns a metadata object for class sap.ui.unified.calendar.MonthPicker.
				 * @returns Metadata object describing this class
				*/
				getMetadata(): sap.ui.base.Metadata;
	  
				/**
				 * Gets current value of property <code>month</code>.The month is initial focused and selectedThe value
				 * must be between 0 and 11Default value is <code>0</code>.
				 * @returns Value of property <code>month</code>
				*/
				getMonth(): number;
	  
				/**
				 * Gets current value of property <code>months</code>.number of displayed monthsThe value must be
				 * between 1 and 12Default value is <code>12</code>.
				 * @since 1.30.0
				 * @returns Value of property <code>months</code>
				*/
				getMonths(): number;
	  
				/**
				 * Gets current value of property <code>primaryCalendarType</code>.If set, the calendar type is used
				 * for display.If not set, the calendar type of the global configuration is used.
				 * @since 1.34.0
				 * @returns Value of property <code>primaryCalendarType</code>
				*/
				getPrimaryCalendarType(): sap.ui.core.CalendarType;
	  
				/**
				 * displays the next page
				 * @returns <code>this</code> to allow method chaining
				*/
				nextPage(): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * displays the previous page
				 * @returns <code>this</code> to allow method chaining
				*/
				previousPage(): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Sets a new value for property <code>columns</code>.number of months in each rowThe value must be
				 * between 0 and 12 (0 means just to have all months in one row, independent of the number)When called
				 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
				 * be restored.Default value is <code>3</code>.
				 * @since 1.30.0
				 * @param iColumns New value for property <code>columns</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setColumns(iColumns: number): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * sets a minimum an maximum month
				 * @param iMin minimum month as integer (starting with 0)
				 * @param iMax maximum month as integer (starting with 0)
				 * @returns <code>this</code> to allow method chaining
				*/
				setMinMax(iMin: number, iMax?: number): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Sets a new value for property <code>month</code>.The month is initial focused and selectedThe value
				 * must be between 0 and 11When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>0</code>.
				 * @param iMonth New value for property <code>month</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setMonth(iMonth: number): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Sets a new value for property <code>months</code>.number of displayed monthsThe value must be
				 * between 1 and 12When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>12</code>.
				 * @since 1.30.0
				 * @param iMonths New value for property <code>months</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setMonths(iMonths: number): sap.ui.unified.calendar.MonthPicker;
	  
				/**
				 * Sets a new value for property <code>primaryCalendarType</code>.If set, the calendar type is used for
				 * display.If not set, the calendar type of the global configuration is used.When called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @since 1.34.0
				 * @param sPrimaryCalendarType New value for property <code>primaryCalendarType</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				*/
				setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.MonthPicker;
			  }
			}
			/**
			 * A menu is an interactive element which provides a choice of different actions to the user. These
			 * actions (items) can also be organized in submenus.Like other dialog-like controls, the menu is not
			 * rendered within the control hierarchy. Instead it can be opened at a specified position via a
			 * function call.
			 * @resource sap/ui/unified/Menu.js
			*/
			export class Menu extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new Menu control.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId Id for the new control, generated automatically if no id is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @since 1.26.3
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.Menu;
	  
			  /**
			   * Adds some item to the aggregation <code>items</code>.
			   * @param oItem the item to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addItem(oItem: sap.ui.unified.MenuItemBase): sap.ui.unified.Menu;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>itemSelect</code> event of this
			   * <code>sap.ui.unified.Menu</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.Menu</code> itself.Fired on the root menu of a menu hierarchy whenever
			   * a user selects an item within the menu or within one of its direct or indirect submenus.<b>Note:</b>
			   * There is also a select event available for each single menu item. This event and the event of the
			   * menu items are redundant.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.Menu</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachItemSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.Menu;
	  
			  /**
			   * Closes the menu.
			  */
			  close(): void;
	  
			  /**
			   * Destroys all the items in the aggregation <code>items</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyItems(): sap.ui.unified.Menu;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>itemSelect</code> event of this
			   * <code>sap.ui.unified.Menu</code>.The passed function and listener object must match the ones used
			   * for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachItemSelect(fnFunction: any, oListener: any): sap.ui.unified.Menu;
	  
	  
			  /**
			   * Fires event <code>itemSelect</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>item</code> of type <code>sap.ui.unified.MenuItemBase</code>The action
			   * (item) which was selected by the user.</li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireItemSelect(mArguments: any): sap.ui.unified.Menu;
	  
			  /**
			   * Gets current value of property <code>ariaDescription</code>.Accessible label / description of the
			   * menu for assistive technologies like screenreaders.
			   * @returns Value of property <code>ariaDescription</code>
			  */
			  getAriaDescription(): string;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			   * @since 1.26.3
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets current value of property <code>enabled</code>.When a menu is disabled none of its items can be
			   * selected by the user.The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled)
			   * has no effect when the menu of the item is disabled.Default value is <code>true</code>.
			   * @returns Value of property <code>enabled</code>
			  */
			  getEnabled(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>items</code>.The available actions to be displayed as items of the
			   * menu.
			  */
			  getItems(): sap.ui.unified.MenuItemBase[];
	  
			  /**
			   * Gets current value of property <code>maxVisibleItems</code>.The maximum number of items which are
			   * displayed before an overflow mechanism takes effect.A value smaller than 1 means an infinite number
			   * of visible items.The overall height of the menu is limited by the height of the screen. If the
			   * maximum possible height is reached, anoverflow takes effect, even if the maximum number of visible
			   * items is not yet reached.Default value is <code>0</code>.
			   * @returns Value of property <code>maxVisibleItems</code>
			  */
			  getMaxVisibleItems(): number;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.Menu.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>pageSize</code>.The keyboard can be used to navigate through
			   * the items of a menu. Beside the arrow keys for single steps and the <i>Home</i> / <i>End</i> keys
			   * for jumpingto the first / last item, the <i>Page Up</i> / <i>Page Down</i> keys can be used to jump
			   * an arbitrary number of items up or down. This number can be defined via the <code>pageSize</code>
			   * property.For values smaller than 1, paging behaves in a similar way to when using the <i>Home</i> /
			   * <i>End</i> keys. If the value equals 1, the paging behavior is similar to that of the arrow
			   * keys.Default value is <code>5</code>.
			   * @since 1.25.0
			   * @returns Value of property <code>pageSize</code>
			  */
			  getPageSize(): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.MenuItemBase</code> in the aggregation
			   * <code>items</code>.and returns its index if found or -1 otherwise.
			   * @param oItem The item whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfItem(oItem: sap.ui.unified.MenuItemBase): number;
	  
			  /**
			   * Inserts a item into the aggregation <code>items</code>.
			   * @param oItem the item to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the item should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the item is inserted at position 0; for a value            
			   * greater than the current size of the aggregation, the item is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertItem(oItem: sap.ui.unified.MenuItemBase, iIndex: number): sap.ui.unified.Menu;
	  
			  /**
			   * Opens the menu at the specified position.The position of the menu is defined relative to an element
			   * in the visible DOM by specifyingthe docking location of the menu and of the related element.See
			   * {@link sap.ui.core.Popup#open Popup#open} for further details about popup positioning.
			   * @param bWithKeyboard Indicates whether or not the first item shall be highlighted when the menu is
			   * opened (keyboard case)
			   * @param oOpenerRef The element which will get the focus back again after the menu was closed
			   * @param sMy The reference docking location of the menu for positioning the menu on the screen
			   * @param sAt The 'of' element's reference docking location for positioning the menu on the screen
			   * @param oOf The menu is positioned relatively to this element based on the given dock locations
			   * @param sOffset The offset relative to the docking point, specified as a string with space-separated
			   * pixel values (e.g. "0 10" to move the popup 10 pixels to the right)
			   * @param sCollision The collision defines how the position of the menu should be adjusted in case it
			   * overflows the window in some direction
			  */
			  open(bWithKeyboard: boolean, oOpenerRef: sap.ui.core.Element | any, sMy: any, sAt: any, oOf: sap.ui.core.Element | any, sOffset?: string, sCollision?: any): void;
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @since 1.26.3
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>items</code>.Additionally, it unregisters them
			   * from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllItems(): sap.ui.unified.MenuItemBase[];
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @since 1.26.3
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Removes a item from the aggregation <code>items</code>.
			   * @param vItem The item to remove or its index or id
			   * @returns The removed item or <code>null</code>
			  */
			  removeItem(vItem: number | string | sap.ui.unified.MenuItemBase): sap.ui.unified.MenuItemBase;
	  
			  /**
			   * Sets a new value for property <code>ariaDescription</code>.Accessible label / description of the
			   * menu for assistive technologies like screenreaders.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @param sAriaDescription New value for property <code>ariaDescription</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setAriaDescription(sAriaDescription: string): sap.ui.unified.Menu;
	  
			  /**
			   * Sets a new value for property <code>enabled</code>.When a menu is disabled none of its items can be
			   * selected by the user.The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled)
			   * has no effect when the menu of the item is disabled.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>true</code>.
			   * @param bEnabled New value for property <code>enabled</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setEnabled(bEnabled: boolean): sap.ui.unified.Menu;
	  
			  /**
			   * Sets a new value for property <code>maxVisibleItems</code>.The maximum number of items which are
			   * displayed before an overflow mechanism takes effect.A value smaller than 1 means an infinite number
			   * of visible items.The overall height of the menu is limited by the height of the screen. If the
			   * maximum possible height is reached, anoverflow takes effect, even if the maximum number of visible
			   * items is not yet reached.When called with a value of <code>null</code> or <code>undefined</code>,
			   * the default value of the property will be restored.Default value is <code>0</code>.
			   * @param iMaxVisibleItems New value for property <code>maxVisibleItems</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMaxVisibleItems(iMaxVisibleItems: number): sap.ui.unified.Menu;
	  
			  /**
			   * Sets a new value for property <code>pageSize</code>.The keyboard can be used to navigate through the
			   * items of a menu. Beside the arrow keys for single steps and the <i>Home</i> / <i>End</i> keys for
			   * jumpingto the first / last item, the <i>Page Up</i> / <i>Page Down</i> keys can be used to jump an
			   * arbitrary number of items up or down. This number can be defined via the <code>pageSize</code>
			   * property.For values smaller than 1, paging behaves in a similar way to when using the <i>Home</i> /
			   * <i>End</i> keys. If the value equals 1, the paging behavior is similar to that of the arrow
			   * keys.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code>5</code>.
			   * @since 1.25.0
			   * @param iPageSize New value for property <code>pageSize</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setPageSize(iPageSize: number): sap.ui.unified.Menu;
			}
			/**
			 * The shell control is meant as root control (full-screen) of an application.It was build as root
			 * control of the Fiori Launchpad application and provides the basic capabilitiesfor this purpose. Do
			 * not use this control within applications which run inside the Fiori Lauchpad anddo not use it for
			 * other scenarios than the root control usecase.
			 * @resource sap/ui/unified/Shell.js
			*/
			export class Shell extends sap.ui.unified.ShellLayout {
	  
	  
			  /**
			   * Constructor for a new Shell.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some curtainContent to the aggregation <code>curtainContent</code>.
			   * @param oCurtainContent the curtainContent to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addCurtainContent(oCurtainContent: sap.ui.core.Control): sap.ui.unified.Shell;
	  
			  /**
			   * Adds some curtainPaneContent to the aggregation <code>curtainPaneContent</code>.
			   * @param oCurtainPaneContent the curtainPaneContent to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addCurtainPaneContent(oCurtainPaneContent: sap.ui.core.Control): sap.ui.unified.Shell;
	  
			  /**
			   * Adds some headEndItem to the aggregation <code>headEndItems</code>.
			   * @param oHeadEndItem the headEndItem to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addHeadEndItem(oHeadEndItem: sap.ui.unified.ShellHeadItem): sap.ui.unified.Shell;
	  
			  /**
			   * Adds some headItem to the aggregation <code>headItems</code>.
			   * @param oHeadItem the headItem to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addHeadItem(oHeadItem: sap.ui.unified.ShellHeadItem): sap.ui.unified.Shell;
	  
			  /**
			   * Destroys all the curtainContent in the aggregation <code>curtainContent</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyCurtainContent(): sap.ui.unified.Shell;
	  
			  /**
			   * Destroys all the curtainPaneContent in the aggregation <code>curtainPaneContent</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyCurtainPaneContent(): sap.ui.unified.Shell;
	  
			  /**
			   * Destroys all the headEndItems in the aggregation <code>headEndItems</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyHeadEndItems(): sap.ui.unified.Shell;
	  
			  /**
			   * Destroys the header in the aggregation named <code>header</code>, but only if a custom header is
			   * set.The default header can not be destroyed.
			   * @returns <code>this</code> to allow method chaining
			  */
			  destroyHeader(): sap.ui.unified.Shell;
	  
			  /**
			   * Destroys all the headItems in the aggregation <code>headItems</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyHeadItems(): sap.ui.unified.Shell;
	  
			  /**
			   * Destroys the search in the aggregation <code>search</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySearch(): sap.ui.unified.Shell;
	  
			  /**
			   * Destroys the user in the aggregation <code>user</code>.
			   * @since 1.22.0
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyUser(): sap.ui.unified.Shell;
	  
	  
			  /**
			   * Gets content of aggregation <code>curtainContent</code>.The content to appear in the curtain area.
			  */
			  getCurtainContent(): sap.ui.core.Control[];
	  
			  /**
			   * Gets content of aggregation <code>curtainPaneContent</code>.The content to appear in the pane area
			   * of the curtain.
			  */
			  getCurtainPaneContent(): sap.ui.core.Control[];
	  
			  /**
			   * Gets content of aggregation <code>headEndItems</code>.The buttons shown in the end (right in
			   * left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported (when user
			   * is set only 1). If a custom header is set this aggregation has no effect.
			  */
			  getHeadEndItems(): sap.ui.unified.ShellHeadItem[];
	  
			  /**
			   * Gets content of aggregation <code>headItems</code>.The buttons shown in the begin (left in
			   * left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported. If a custom
			   * header is set this aggregation has no effect.
			  */
			  getHeadItems(): sap.ui.unified.ShellHeadItem[];
	  
			  /**
			   * Gets current value of property <code>icon</code>.The application icon. If a custom header is set
			   * this property has no effect.
			   * @returns Value of property <code>icon</code>
			  */
			  getIcon(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.Shell.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets content of aggregation <code>search</code>.Experimental (This aggregation might change in
			   * future!): The search control which should be displayed in the shell header. If a custom header is
			   * set this aggregation has no effect.
			  */
			  getSearch(): sap.ui.core.Control;
	  
			  /**
			   * Gets current value of property <code>searchVisible</code>.If set to false, the search area
			   * (aggregation 'search') is hidden. If a custom header is set this property has no effect.Default
			   * value is <code>true</code>.
			   * @since 1.18
			   * @returns Value of property <code>searchVisible</code>
			  */
			  getSearchVisible(): boolean;
	  
			  /**
			   * Gets current value of property <code>showCurtain</code>.Shows / Hides the curtain.
			   * @returns Value of property <code>showCurtain</code>
			  */
			  getShowCurtain(): boolean;
	  
			  /**
			   * Gets current value of property <code>showCurtainPane</code>.Shows / Hides the side pane on the
			   * curtain.
			   * @returns Value of property <code>showCurtainPane</code>
			  */
			  getShowCurtainPane(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>user</code>.The user item which is rendered in the shell header
			   * beside the items. If a custom header is set this aggregation has no effect.
			   * @since 1.22.0
			  */
			  getUser(): sap.ui.unified.ShellHeadUserItem;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
			   * <code>curtainContent</code>.and returns its index if found or -1 otherwise.
			   * @param oCurtainContent The curtainContent whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfCurtainContent(oCurtainContent: sap.ui.core.Control): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
			   * <code>curtainPaneContent</code>.and returns its index if found or -1 otherwise.
			   * @param oCurtainPaneContent The curtainPaneContent whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfCurtainPaneContent(oCurtainPaneContent: sap.ui.core.Control): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation
			   * <code>headEndItems</code>.and returns its index if found or -1 otherwise.
			   * @param oHeadEndItem The headEndItem whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfHeadEndItem(oHeadEndItem: sap.ui.unified.ShellHeadItem): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation
			   * <code>headItems</code>.and returns its index if found or -1 otherwise.
			   * @param oHeadItem The headItem whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfHeadItem(oHeadItem: sap.ui.unified.ShellHeadItem): number;
	  
			  /**
			   * Inserts a curtainContent into the aggregation <code>curtainContent</code>.
			   * @param oCurtainContent the curtainContent to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the curtainContent should be inserted at; for          
			   *   a negative value of <code>iIndex</code>, the curtainContent is inserted at position 0; for a value
			   *             greater than the current size of the aggregation, the curtainContent is inserted at     
			   *        the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertCurtainContent(oCurtainContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.Shell;
	  
			  /**
			   * Inserts a curtainPaneContent into the aggregation <code>curtainPaneContent</code>.
			   * @param oCurtainPaneContent the curtainPaneContent to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the curtainPaneContent should be inserted at; for      
			   *       a negative value of <code>iIndex</code>, the curtainPaneContent is inserted at position 0; for
			   * a value             greater than the current size of the aggregation, the curtainPaneContent is
			   * inserted at             the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertCurtainPaneContent(oCurtainPaneContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.Shell;
	  
			  /**
			   * Inserts a headEndItem into the aggregation <code>headEndItems</code>.
			   * @param oHeadEndItem the headEndItem to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the headEndItem should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the headEndItem is inserted at position 0; for a value     
			   *        greater than the current size of the aggregation, the headEndItem is inserted at            
			   * the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertHeadEndItem(oHeadEndItem: sap.ui.unified.ShellHeadItem, iIndex: number): sap.ui.unified.Shell;
	  
			  /**
			   * Inserts a headItem into the aggregation <code>headItems</code>.
			   * @param oHeadItem the headItem to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the headItem should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the headItem is inserted at position 0; for a value          
			   *   greater than the current size of the aggregation, the headItem is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertHeadItem(oHeadItem: sap.ui.unified.ShellHeadItem, iIndex: number): sap.ui.unified.Shell;
	  
			  /**
			   * Removes all the controls from the aggregation <code>curtainContent</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllCurtainContent(): sap.ui.core.Control[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>curtainPaneContent</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllCurtainPaneContent(): sap.ui.core.Control[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>headEndItems</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllHeadEndItems(): sap.ui.unified.ShellHeadItem[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>headItems</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllHeadItems(): sap.ui.unified.ShellHeadItem[];
	  
			  /**
			   * Removes a curtainContent from the aggregation <code>curtainContent</code>.
			   * @param vCurtainContent The curtainContent to remove or its index or id
			   * @returns The removed curtainContent or <code>null</code>
			  */
			  removeCurtainContent(vCurtainContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Removes a curtainPaneContent from the aggregation <code>curtainPaneContent</code>.
			   * @param vCurtainPaneContent The curtainPaneContent to remove or its index or id
			   * @returns The removed curtainPaneContent or <code>null</code>
			  */
			  removeCurtainPaneContent(vCurtainPaneContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Removes a headEndItem from the aggregation <code>headEndItems</code>.
			   * @param vHeadEndItem The headEndItem to remove or its index or id
			   * @returns The removed headEndItem or <code>null</code>
			  */
			  removeHeadEndItem(vHeadEndItem: number | string | sap.ui.unified.ShellHeadItem): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Removes a headItem from the aggregation <code>headItems</code>.
			   * @param vHeadItem The headItem to remove or its index or id
			   * @returns The removed headItem or <code>null</code>
			  */
			  removeHeadItem(vHeadItem: number | string | sap.ui.unified.ShellHeadItem): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Setter for the aggregated <code>header</code>.
			   * @param oHeader The Control which should be rendered within the Shell header or <code>null</code> to
			   * render the default Shell header.
			   * @returns <code>this</code> to allow method chaining
			  */
			  setHeader(oHeader: sap.ui.core.Control): sap.ui.unified.Shell;
	  
			  /**
			   * Sets a new value for property <code>icon</code>.The application icon. If a custom header is set this
			   * property has no effect.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.
			   * @param sIcon New value for property <code>icon</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIcon(sIcon: any): sap.ui.unified.Shell;
	  
			  /**
			   * Sets the aggregated <code>search</code>.
			   * @param oSearch The search to set
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSearch(oSearch: sap.ui.core.Control): sap.ui.unified.Shell;
	  
			  /**
			   * Sets a new value for property <code>searchVisible</code>.If set to false, the search area
			   * (aggregation 'search') is hidden. If a custom header is set this property has no effect.When called
			   * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
			   * be restored.Default value is <code>true</code>.
			   * @since 1.18
			   * @param bSearchVisible New value for property <code>searchVisible</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSearchVisible(bSearchVisible: boolean): sap.ui.unified.Shell;
	  
			  /**
			   * Sets a new value for property <code>showCurtain</code>.Shows / Hides the curtain.When called with a
			   * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.
			   * @param bShowCurtain New value for property <code>showCurtain</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowCurtain(bShowCurtain: boolean): sap.ui.unified.Shell;
	  
			  /**
			   * Sets a new value for property <code>showCurtainPane</code>.Shows / Hides the side pane on the
			   * curtain.When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.
			   * @param bShowCurtainPane New value for property <code>showCurtainPane</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowCurtainPane(bShowCurtainPane: boolean): sap.ui.unified.Shell;
	  
			  /**
			   * Sets the aggregated <code>user</code>.
			   * @since 1.22.0
			   * @param oUser The user to set
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setUser(oUser: sap.ui.unified.ShellHeadUserItem): sap.ui.unified.Shell;
			}
			/**
			 * A text view which displays currency values and aligns them at the separator
			 * @resource sap/ui/unified/Currency.js
			*/
			export class Currency extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new Currency.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
	  
			  /**
			  */
			  getAccessibilityInfo(): void;
	  
			  /**
			   * Gets current value of property <code>currency</code>.Determines the displayed currency code (ISO
			   * 4217).<b>Note: </b>If a * character is set instead of currency code,only the character itself will
			   * be rendered, ignoring the <code>value</code> property.
			   * @returns Value of property <code>currency</code>
			  */
			  getCurrency(): string;
	  
			  /**
			   * Get symbol of the currency, if available
			  */
			  getCurrencySymbol(): string;
	  
			  /**
			   * The formatted value
			  */
			  getFormattedValue(): string;
	  
			  /**
			   * Gets current value of property <code>maxPrecision</code>.Defines the space that is available for the
			   * precision of the various currencies.Default value is <code>3</code>.
			   * @returns Value of property <code>maxPrecision</code>
			  */
			  getMaxPrecision(): number;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.Currency.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>useSymbol</code>.Show the currency symbol instead of the ISO
			   * currency codeDefault value is <code>true</code>.
			   * @returns Value of property <code>useSymbol</code>
			  */
			  getUseSymbol(): boolean;
	  
			  /**
			   * Gets current value of property <code>value</code>.The currency valueDefault value is <code>0</code>.
			   * @returns Value of property <code>value</code>
			  */
			  getValue(): number;
	  
			  /**
			   * Initializes the control.
			  */
			  init(): void;
			}
			/**
			 * Standard item to be used inside a menu. A menu item represents an action which can be selected by
			 * the user in the menu orit can provide a submenu to organize the actions hierarchically.
			 * @resource sap/ui/unified/MenuItem.js
			*/
			export class MenuItem extends sap.ui.unified.MenuItemBase {
	  
	  
			  /**
			   * Constructor for a new MenuItem element.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId Id for the new control, generated automatically if no id is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
	  
			  /**
			   * Gets current value of property <code>icon</code>.Defines the icon of the {@link sap.ui.core.IconPool
			   * sap.ui.core.IconPool} or an image which should be displayed on the item.Default value is
			   * <code></code>.
			   * @returns Value of property <code>icon</code>
			  */
			  getIcon(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.MenuItem.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>text</code>.Defines the text which should be displayed on the
			   * item.Default value is <code></code>.
			   * @returns Value of property <code>text</code>
			  */
			  getText(): string;
	  
			  /**
			   * Sets a new value for property <code>icon</code>.Defines the icon of the {@link sap.ui.core.IconPool
			   * sap.ui.core.IconPool} or an image which should be displayed on the item.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code></code>.
			   * @param sIcon New value for property <code>icon</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIcon(sIcon: any): sap.ui.unified.MenuItem;
	  
			  /**
			   * Sets a new value for property <code>text</code>.Defines the text which should be displayed on the
			   * item.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code></code>.
			   * @param sText New value for property <code>text</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setText(sText: string): sap.ui.unified.MenuItem;
			}
			/**
			 * Basic Calendar.This calendar is used for DatePickers
			 * @resource sap/ui/unified/Calendar.js
			*/
			export class Calendar extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new Calendar.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @since 1.28.0
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Adds some disabledDate to the aggregation <code>disabledDates</code>.
			   * @since 1.38.0
			   * @param oDisabledDate the disabledDate to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addDisabledDate(oDisabledDate: sap.ui.unified.DateRange): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Adds some selectedDate to the aggregation <code>selectedDates</code>.
			   * @param oSelectedDate the selectedDate to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Adds some specialDate to the aggregation <code>specialDates</code>.
			   * @since 1.24.0
			   * @param oSpecialDate the specialDate to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this
			   * <code>sap.ui.unified.Calendar</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.Calendar</code> itself.Date selection was cancelled
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.Calendar</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachCancel(oData: any, fnFunction: any, oListener?: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
			   * <code>sap.ui.unified.Calendar</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.Calendar</code> itself.Date selection changed
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.Calendar</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachSelect(oData: any, fnFunction: any, oListener?: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.Calendar</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.Calendar</code> itself.<code>startDate</code> was changed while
			   * navigation in <code>Calendar</code>Use <code>getStartDate</code> function to determine the current
			   * start date
			   * @since 1.34.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.Calendar</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachStartDateChange(oData: any, fnFunction: any, oListener?: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Destroys all the disabledDates in the aggregation <code>disabledDates</code>.
			   * @since 1.38.0
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyDisabledDates(): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Destroys all the selectedDates in the aggregation <code>selectedDates</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySelectedDates(): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Destroys all the specialDates in the aggregation <code>specialDates</code>.
			   * @since 1.24.0
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySpecialDates(): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this
			   * <code>sap.ui.unified.Calendar</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachCancel(fnFunction: any, oListener: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
			   * <code>sap.ui.unified.Calendar</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachSelect(fnFunction: any, oListener: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.Calendar</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @since 1.34.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachStartDateChange(fnFunction: any, oListener: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Displays a date in the calendar but don't set the focus.
			   * @since 1.28.0
			   * @param oDate JavaScript date object for focused date.
			   * @returns <code>this</code> to allow method chaining
			  */
			  displayDate(oDate: any): typeof sap.ui.unified.Calendar;
	  
	  
			  /**
			   * Fires event <code>cancel</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireCancel(mArguments: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Fires event <code>select</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireSelect(mArguments: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Fires event <code>startDateChange</code> to attached listeners.
			   * @since 1.34.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireStartDateChange(mArguments: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets the focused date of the calendar.
			   * @param oDate JavaScript date object for focused date.
			   * @returns <code>this</code> to allow method chaining
			  */
			  focusDate(oDate: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			   * @since 1.28.0
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets content of aggregation <code>disabledDates</code>.Date Ranges for disabled dates
			   * @since 1.38.0
			  */
			  getDisabledDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Gets current value of property <code>firstDayOfWeek</code>.If set, the first day of the displayed
			   * week is this day. Valid values are 0 to 6.If not a valid value is set, the default of the used
			   * locale is used.Default value is <code>-1</code>.
			   * @since 1.28.9
			   * @returns Value of property <code>firstDayOfWeek</code>
			  */
			  getFirstDayOfWeek(): number;
	  
			  /**
			   * Gets current value of property <code>intervalSelection</code>.If set, interval selection is
			   * allowedDefault value is <code>false</code>.
			   * @returns Value of property <code>intervalSelection</code>
			  */
			  getIntervalSelection(): boolean;
	  
			  /**
			   * ID of the element which is the current target of the association <code>legend</code>, or
			   * <code>null</code>.
			   * @since 1.38.5
			  */
			  getLegend(): any;
	  
			  /**
			   * Gets current value of property <code>maxDate</code>.Maximum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> if the date is inside of a month
			   * the complete month is displayed,but dates outside the valid range can not be selected.<b>Note:</b>
			   * If the <code>maxDate</code> is set to be before the <code>minDate</code>,the <code>minDate</code> is
			   * set to the begin of the month of the <code>maxDate</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>maxDate</code>
			  */
			  getMaxDate(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.Calendar.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>minDate</code>.Minimum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> if the date is inside of a month
			   * the complete month is displayed,but dates outside the valid range can not be selected.<b>Note:</b>
			   * If the <code>minDate</code> is set to be after the <code>maxDate</code>,the <code>maxDate</code> is
			   * set to the end of the month of the <code>minDate</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>minDate</code>
			  */
			  getMinDate(): any;
	  
			  /**
			   * Gets current value of property <code>months</code>.number of months displayedon phones always only
			   * one month is displayedDefault value is <code>1</code>.
			   * @since 1.28.0
			   * @returns Value of property <code>months</code>
			  */
			  getMonths(): number;
	  
			  /**
			   * Gets current value of property <code>nonWorkingDays</code>.If set, the provided weekdays are
			   * displayed as non-working days.Valid values inside the array are 0 to 6.If not set, the weekend
			   * defined in the locale settings is displayed as non-working days.
			   * @since 1.28.9
			   * @returns Value of property <code>nonWorkingDays</code>
			  */
			  getNonWorkingDays(): number;
	  
			  /**
			   * Gets current value of property <code>primaryCalendarType</code>.If set, the calendar type is used
			   * for display.If not set, the calendar type of the global configuration is used.
			   * @since 1.34.0
			   * @returns Value of property <code>primaryCalendarType</code>
			  */
			  getPrimaryCalendarType(): sap.ui.core.CalendarType;
	  
			  /**
			   * Gets current value of property <code>secondaryCalendarType</code>.If set, the days are also
			   * displayed in this calendar typeIf not set, the dates are only displayed in the primary calendar type
			   * @since 1.34.0
			   * @returns Value of property <code>secondaryCalendarType</code>
			  */
			  getSecondaryCalendarType(): sap.ui.core.CalendarType;
	  
			  /**
			   * Gets content of aggregation <code>selectedDates</code>.Date Ranges for selected dates of the
			   * DatePicker
			  */
			  getSelectedDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Gets current value of property <code>singleSelection</code>.If set, only a single date or interval,
			   * if intervalSelection is enabled, can be selectedDefault value is <code>true</code>.
			   * @returns Value of property <code>singleSelection</code>
			  */
			  getSingleSelection(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>specialDates</code>.Date Range with type to visualize special days
			   * in the Calendar.If one day is assigned to more than one Type, only the first one will be used.
			   * @since 1.24.0
			  */
			  getSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
			  /**
			   * Returns the first day of the displayed month.There might be some days of the previous month shown,
			   * but they can not be focused.
			   * @since 1.34.1
			   * @returns JavaScript date object for start date.
			  */
			  getStartDate(): any;
	  
			  /**
			   * Gets current value of property <code>width</code>.Width of Calendar<b>Note:</b> There is a theme
			   * depending minimum width, so the calendar can not be set smaller.
			   * @since 1.38.0
			   * @returns Value of property <code>width</code>
			  */
			  getWidth(): any;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
			   * <code>disabledDates</code>.and returns its index if found or -1 otherwise.
			   * @since 1.38.0
			   * @param oDisabledDate The disabledDate whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfDisabledDate(oDisabledDate: sap.ui.unified.DateRange): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
			   * <code>selectedDates</code>.and returns its index if found or -1 otherwise.
			   * @param oSelectedDate The selectedDate whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation
			   * <code>specialDates</code>.and returns its index if found or -1 otherwise.
			   * @since 1.24.0
			   * @param oSpecialDate The specialDate whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
	  
			  /**
			   * Inserts a disabledDate into the aggregation <code>disabledDates</code>.
			   * @since 1.38.0
			   * @param oDisabledDate the disabledDate to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the disabledDate should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the disabledDate is inserted at position 0; for a value    
			   *         greater than the current size of the aggregation, the disabledDate is inserted at           
			   *  the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertDisabledDate(oDisabledDate: sap.ui.unified.DateRange, iIndex: number): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Inserts a selectedDate into the aggregation <code>selectedDates</code>.
			   * @param oSelectedDate the selectedDate to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the selectedDate should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value    
			   *         greater than the current size of the aggregation, the selectedDate is inserted at           
			   *  the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Inserts a specialDate into the aggregation <code>specialDates</code>.
			   * @since 1.24.0
			   * @param oSpecialDate the specialDate to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the specialDate should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value     
			   *        greater than the current size of the aggregation, the specialDate is inserted at            
			   * the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @since 1.28.0
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>disabledDates</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @since 1.38.0
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllDisabledDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>selectedDates</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllSelectedDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>specialDates</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @since 1.24.0
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @since 1.28.0
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Removes a disabledDate from the aggregation <code>disabledDates</code>.
			   * @since 1.38.0
			   * @param vDisabledDate The disabledDate to remove or its index or id
			   * @returns The removed disabledDate or <code>null</code>
			  */
			  removeDisabledDate(vDisabledDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
			  /**
			   * Removes a selectedDate from the aggregation <code>selectedDates</code>.
			   * @param vSelectedDate The selectedDate to remove or its index or id
			   * @returns The removed selectedDate or <code>null</code>
			  */
			  removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
			  /**
			   * Removes a specialDate from the aggregation <code>specialDates</code>.
			   * @since 1.24.0
			   * @param vSpecialDate The specialDate to remove or its index or id
			   * @returns The removed specialDate or <code>null</code>
			  */
			  removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
	  
			  /**
			   * Sets a new value for property <code>firstDayOfWeek</code>.If set, the first day of the displayed
			   * week is this day. Valid values are 0 to 6.If not a valid value is set, the default of the used
			   * locale is used.When called with a value of <code>null</code> or <code>undefined</code>, the default
			   * value of the property will be restored.Default value is <code>-1</code>.
			   * @since 1.28.9
			   * @param iFirstDayOfWeek New value for property <code>firstDayOfWeek</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setFirstDayOfWeek(iFirstDayOfWeek: number): void;
	  
			  /**
			   * Sets a new value for property <code>intervalSelection</code>.If set, interval selection is
			   * allowedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code>false</code>.
			   * @param bIntervalSelection New value for property <code>intervalSelection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIntervalSelection(bIntervalSelection: boolean): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets the associated <code>legend</code>.
			   * @since 1.38.5
			   * @param oLegend ID of an element which becomes the new target of this legend association;
			   * alternatively, an element instance may be given
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setLegend(oLegend: any | sap.ui.unified.CalendarLegend): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets a new value for property <code>maxDate</code>.Maximum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> if the date is inside of a month
			   * the complete month is displayed,but dates outside the valid range can not be selected.<b>Note:</b>
			   * If the <code>maxDate</code> is set to be before the <code>minDate</code>,the <code>minDate</code> is
			   * set to the begin of the month of the <code>maxDate</code>.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @since 1.38.0
			   * @param oMaxDate New value for property <code>maxDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMaxDate(oMaxDate: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets a new value for property <code>minDate</code>.Minimum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> if the date is inside of a month
			   * the complete month is displayed,but dates outside the valid range can not be selected.<b>Note:</b>
			   * If the <code>minDate</code> is set to be after the <code>maxDate</code>,the <code>maxDate</code> is
			   * set to the end of the month of the <code>minDate</code>.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @since 1.38.0
			   * @param oMinDate New value for property <code>minDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMinDate(oMinDate: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets a new value for property <code>months</code>.number of months displayedon phones always only
			   * one month is displayedWhen called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.Default value is <code>1</code>.
			   * @since 1.28.0
			   * @param iMonths New value for property <code>months</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMonths(iMonths: number): void;
	  
			  /**
			   * Sets a new value for property <code>nonWorkingDays</code>.If set, the provided weekdays are
			   * displayed as non-working days.Valid values inside the array are 0 to 6.If not set, the weekend
			   * defined in the locale settings is displayed as non-working days.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @since 1.28.9
			   * @param sNonWorkingDays New value for property <code>nonWorkingDays</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setNonWorkingDays(sNonWorkingDays: number): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets a new value for property <code>primaryCalendarType</code>.If set, the calendar type is used for
			   * display.If not set, the calendar type of the global configuration is used.When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @since 1.34.0
			   * @param sPrimaryCalendarType New value for property <code>primaryCalendarType</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets a new value for property <code>secondaryCalendarType</code>.If set, the days are also displayed
			   * in this calendar typeIf not set, the dates are only displayed in the primary calendar typeWhen
			   * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
			   * property will be restored.
			   * @since 1.34.0
			   * @param sSecondaryCalendarType New value for property <code>secondaryCalendarType</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSecondaryCalendarType(sSecondaryCalendarType: sap.ui.core.CalendarType): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets a new value for property <code>singleSelection</code>.If set, only a single date or interval,
			   * if intervalSelection is enabled, can be selectedWhen called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>true</code>.
			   * @param bSingleSelection New value for property <code>singleSelection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSingleSelection(bSingleSelection: boolean): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Sets a new value for property <code>width</code>.Width of Calendar<b>Note:</b> There is a theme
			   * depending minimum width, so the calendar can not be set smaller.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @since 1.38.0
			   * @param sWidth New value for property <code>width</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setWidth(sWidth: any): typeof sap.ui.unified.Calendar;
			}
			/**
			 * Date range for use in DatePicker
			 * @resource sap/ui/unified/DateRange.js
			*/
			export class DateRange extends sap.ui.core.Element {
	  
	  
			  /**
			   * Constructor for a new DateRange.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
	  
			  /**
			   * Gets current value of property <code>endDate</code>.Start date for a date range. If empty only a
			   * single date is presented by this DateRange element. This must be a JavaScript date object.
			   * @returns Value of property <code>endDate</code>
			  */
			  getEndDate(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.DateRange.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>startDate</code>.Start date for a date range. This must be a
			   * JavaScript date object.
			   * @returns Value of property <code>startDate</code>
			  */
			  getStartDate(): any;
	  
			  /**
			   * Sets a new value for property <code>endDate</code>.Start date for a date range. If empty only a
			   * single date is presented by this DateRange element. This must be a JavaScript date object.When
			   * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
			   * property will be restored.
			   * @param oEndDate New value for property <code>endDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setEndDate(oEndDate: any): sap.ui.unified.DateRange;
	  
			  /**
			   * Sets a new value for property <code>startDate</code>.Start date for a date range. This must be a
			   * JavaScript date object.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.
			   * @param oStartDate New value for property <code>startDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStartDate(oStartDate: any): sap.ui.unified.DateRange;
			}
			/**
			 * A calendar row with an header and appointments. The Appointments will be placed in the defined
			 * interval.
			 * @resource sap/ui/unified/CalendarRow.js
			*/
			export class CalendarRow extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new <code>CalendarRow</code>.Accepts an object literal <code>mSettings</code> that
			   * defines initialproperty values, aggregated and associated objects as well as event handlers.See
			   * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
			   * settings object.
			   * @param sId ID for the new control, generated automatically if no ID is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some appointment to the aggregation <code>appointments</code>.
			   * @param oAppointment the appointment to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAppointment(oAppointment: sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Adds some intervalHeader to the aggregation <code>intervalHeaders</code>.
			   * @param oIntervalHeader the intervalHeader to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addIntervalHeader(oIntervalHeader: sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>intervalSelect</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarRow</code> itself.Fired if an interval was selected
			   * @since 1.38.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarRow</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachIntervalSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>leaveRow</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarRow</code> itself.The <code>CalendarRow</code> should be left
			   * while navigating. (Arrow up or arrow down.)The caller should determine the next control to be
			   * focused
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarRow</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachLeaveRow(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarRow</code> itself.Fired if an appointment was selected
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarRow</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarRow</code> itself.<code>startDate</code> was changed while
			   * navigating in <code>CalendarRow</code>
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarRow</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachStartDateChange(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Destroys all the appointments in the aggregation <code>appointments</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyAppointments(): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Destroys all the intervalHeaders in the aggregation <code>intervalHeaders</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyIntervalHeaders(): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>intervalSelect</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @since 1.38.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachIntervalSelect(fnFunction: any, oListener: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>leaveRow</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachLeaveRow(fnFunction: any, oListener: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachSelect(fnFunction: any, oListener: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.CalendarRow</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachStartDateChange(fnFunction: any, oListener: any): sap.ui.unified.CalendarRow;
	  
	  
			  /**
			   * Fires event <code>intervalSelect</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>startDate</code> of type <code>object</code>Interval start date as
			   * JavaScript date object</li><li><code>endDate</code> of type <code>object</code>Interval end date as
			   * JavaScript date object</li><li><code>subInterval</code> of type <code>boolean</code>If set, the
			   * selected interval is a subinterval</li></ul>
			   * @since 1.38.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireIntervalSelect(mArguments: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Fires event <code>leaveRow</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>type</code> of type <code>string</code>The type of the event that triggers
			   * this <code>leaveRow</code></li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireLeaveRow(mArguments: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Fires event <code>select</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>appointment</code> of type
			   * <code>sap.ui.unified.CalendarAppointment</code>selected
			   * appointment</li><li><code>appointments</code> of type
			   * <code>sap.ui.unified.CalendarAppointment[]</code>selected appointments in case a group appointment
			   * is selected</li><li><code>multiSelect</code> of type <code>boolean</code>If set, the appointment was
			   * selected by multiple selection (e.g. shift + mouse click).So more than the current appointment could
			   * be selected.</li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireSelect(mArguments: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Fires event <code>startDateChange</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireStartDateChange(mArguments: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Focus the given <code>CalendarAppointment</code> in the <code>CalendarRow</code>.
			   * @param oAppointment Appointment to be focused.
			   * @returns <code>this</code> to allow method chaining
			  */
			  focusAppointment(oAppointment: CalendarAppointment): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Focus the <code>CalendarAppointment</code> in the <code>CalendarRow</code> that is nearest tothe
			   * given date.
			   * @param oDate Javascript Date object.
			   * @returns <code>this</code> to allow method chaining
			  */
			  focusNearestAppointment(oDate: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Gets content of aggregation <code>appointments</code>.Appointments to be displayed in the row.
			   * Appointments outside the visible time frame are not rendered.<b>Note:</b> For performance reasons,
			   * only appointments in the visible time range or nearby should be assigned.
			  */
			  getAppointments(): sap.ui.unified.CalendarAppointment[];
	  
			  /**
			   * Gets current value of property <code>appointmentsReducedHeight</code>.If set the appointments
			   * without text (only title) are rendered with a smaller height.<b>Note:</b> On phone devices this
			   * property is ignored, appointments are always rendered in full heightto allow touching.Default value
			   * is <code>false</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>appointmentsReducedHeight</code>
			  */
			  getAppointmentsReducedHeight(): boolean;
	  
			  /**
			   * Gets current value of property <code>appointmentsVisualization</code>.Defines the visualization of
			   * the <code>CalendarAppoinment</code><b>Note:</b> The real visualization depends on the used
			   * theme.Default value is <code>Standard</code>.
			   * @since 1.40.0
			   * @returns Value of property <code>appointmentsVisualization</code>
			  */
			  getAppointmentsVisualization(): sap.ui.unified.CalendarAppointmentVisualization;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets current value of property <code>checkResize</code>.If set, the <code>CalendarRow</code> checks
			   * for resize by itself.If a lot of <code>CalendarRow</code> controls are used in one container control
			   * (like <code>PlanningCalendar</code>).the resize checks should be done only by this container
			   * control. Then the container control shouldcall <code>handleResize</code> of the
			   * <code>CalendarRow</code> if a resize happens.Default value is <code>true</code>.
			   * @returns Value of property <code>checkResize</code>
			  */
			  getCheckResize(): boolean;
	  
			  /**
			   * Returns the focused <code>CalendarAppointment</code> of the <code>CalendarRow</code>.The focus must
			   * not really be on the <code>CalendarAppointment</code>, it have just tobe the one that has the focus
			   * when the <code>CalendarRow</code> was focused last time.
			   * @returns Focused Appointment
			  */
			  getFocusedAppointment(): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Gets current value of property <code>height</code>.Height of the row
			   * @returns Value of property <code>height</code>
			  */
			  getHeight(): any;
	  
			  /**
			   * Gets content of aggregation <code>intervalHeaders</code>.Appointments to be displayed in the top of
			   * the intervals. The <code>intervalHeaders</code> are used to visualizepublic holidays and similar
			   * things.Appointments outside the visible time frame are not rendered.The <code>intervalHeaders</code>
			   * always fill whole intervals. If they are shorter than one interval, they are not
			   * displayed.<b>Note:</b> For performance reasons, only appointments in the visible time range or
			   * nearby should be assigned.
			  */
			  getIntervalHeaders(): sap.ui.unified.CalendarAppointment[];
	  
			  /**
			   * Gets current value of property <code>intervals</code>.Number of displayed intervals. The size of the
			   * intervals is defined with <code>intervalType</code>Default value is <code>12</code>.
			   * @returns Value of property <code>intervals</code>
			  */
			  getIntervals(): number;
	  
			  /**
			   * Gets current value of property <code>intervalType</code>.Type of the intervals of the row. The
			   * default is one hour.Default value is <code>Hour</code>.
			   * @returns Value of property <code>intervalType</code>
			  */
			  getIntervalType(): sap.ui.unified.CalendarIntervalType;
	  
			  /**
			   * ID of the element which is the current target of the association <code>legend</code>, or
			   * <code>null</code>.
			   * @since 1.40.0
			  */
			  getLegend(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.CalendarRow.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>nonWorkingDays</code>.If set, the provided weekdays are
			   * displayed as non-working days.Valid values inside the array are 0 to 6. (Other values will just be
			   * ignored.)If not set, the weekend defined in the locale settings is displayed as non-working
			   * days.<b>Note:</b> The non working days are only visualized if <code>intervalType</code> is set to
			   * day.
			   * @returns Value of property <code>nonWorkingDays</code>
			  */
			  getNonWorkingDays(): number;
	  
			  /**
			   * Gets current value of property <code>nonWorkingHours</code>.If set, the provided hours are displayed
			   * as non-working hours.Valid values inside the array are 0 to 23. (Other values will just be
			   * ignored.)<b>Note:</b> The non working hours are only visualized if <code>intervalType</code> is set
			   * to hour.
			   * @returns Value of property <code>nonWorkingHours</code>
			  */
			  getNonWorkingHours(): number;
	  
			  /**
			   * Gets current value of property <code>showEmptyIntervalHeaders</code>.If set, interval headers are
			   * shown even if no <code>intervalHeaders</code> are assigned to the visible time frame.If not set, no
			   * interval headers are shown if no <code>intervalHeaders</code> are assigned.<b>Note:</b> This
			   * property is only used if <code>showIntervalHeaders</code> is set to true.Default value is
			   * <code>true</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>showEmptyIntervalHeaders</code>
			  */
			  getShowEmptyIntervalHeaders(): boolean;
	  
			  /**
			   * Gets current value of property <code>showIntervalHeaders</code>.If set, interval headers are shown
			   * like specified in <code>showEmptyIntervalHeaders</code>.If not set, no interval headers are shown
			   * even if <code>intervalHeaders</code> are assigned.Default value is <code>true</code>.
			   * @returns Value of property <code>showIntervalHeaders</code>
			  */
			  getShowIntervalHeaders(): boolean;
	  
			  /**
			   * Gets current value of property <code>showSubIntervals</code>.If set, subintervals are shown.If the
			   * interval type is <code>Hour</code>, quarter hours are shown.If the interval type is
			   * <code>Day</code>, hours are shown.If the interval type is <code>Month</code>, days are shown.Default
			   * value is <code>false</code>.
			   * @returns Value of property <code>showSubIntervals</code>
			  */
			  getShowSubIntervals(): boolean;
	  
			  /**
			   * Gets current value of property <code>startDate</code>.Start date, as JavaScript Date object, of the
			   * row. As default, the current date is used.
			   * @returns Value of property <code>startDate</code>
			  */
			  getStartDate(): any;
	  
			  /**
			   * Gets current value of property <code>updateCurrentTime</code>.If set the <code>CalendarRow</code>
			   * triggers a periodic update to visualize the current time.If a lot of <code>CalendarRow</code>
			   * controls are used in one container control (like <code>PlanningCalendar</code>)the periodic update
			   * should be triggered only by this container control. Then the container control shouldcall
			   * <code>updateCurrentTimeVisualization</code> of the <code>CalendarRow</code> to update the
			   * visualization.Default value is <code>true</code>.
			   * @returns Value of property <code>updateCurrentTime</code>
			  */
			  getUpdateCurrentTime(): boolean;
	  
			  /**
			   * Gets current value of property <code>width</code>.Width of the row
			   * @returns Value of property <code>width</code>
			  */
			  getWidth(): any;
	  
			  /**
			   * After a resize of the <code>CalendarRow</code>, some calculations for appointmentsizes are
			   * needed.For this, each <code>CalendarRow</code> can trigger the resize check for it's own DOM.But if
			   * multiple <code>CalendarRow</code>s are used in one container (e.g. <code>PlanningCalendar</code>),it
			   * is better if the container triggers the resize check once an then calls this functionof each
			   * <code>CalendarRow</code>.
			   * @param oEvent The event object of the resize handler.
			   * @returns <code>this</code> to allow method chaining
			  */
			  handleResize(oEvent: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.CalendarAppointment</code> in the aggregation
			   * <code>appointments</code>.and returns its index if found or -1 otherwise.
			   * @param oAppointment The appointment whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfAppointment(oAppointment: sap.ui.unified.CalendarAppointment): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.CalendarAppointment</code> in the aggregation
			   * <code>intervalHeaders</code>.and returns its index if found or -1 otherwise.
			   * @param oIntervalHeader The intervalHeader whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfIntervalHeader(oIntervalHeader: sap.ui.unified.CalendarAppointment): number;
	  
			  /**
			   * Inserts a appointment into the aggregation <code>appointments</code>.
			   * @param oAppointment the appointment to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the appointment should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the appointment is inserted at position 0; for a value     
			   *        greater than the current size of the aggregation, the appointment is inserted at            
			   * the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertAppointment(oAppointment: sap.ui.unified.CalendarAppointment, iIndex: number): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Inserts a intervalHeader into the aggregation <code>intervalHeaders</code>.
			   * @param oIntervalHeader the intervalHeader to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the intervalHeader should be inserted at; for          
			   *   a negative value of <code>iIndex</code>, the intervalHeader is inserted at position 0; for a value
			   *             greater than the current size of the aggregation, the intervalHeader is inserted at     
			   *        the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertIntervalHeader(oIntervalHeader: sap.ui.unified.CalendarAppointment, iIndex: number): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Removes all the controls from the aggregation <code>appointments</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAppointments(): sap.ui.unified.CalendarAppointment[];
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>intervalHeaders</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllIntervalHeaders(): sap.ui.unified.CalendarAppointment[];
	  
			  /**
			   * Removes a appointment from the aggregation <code>appointments</code>.
			   * @param vAppointment The appointment to remove or its index or id
			   * @returns The removed appointment or <code>null</code>
			  */
			  removeAppointment(vAppointment: number | string | sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Removes a intervalHeader from the aggregation <code>intervalHeaders</code>.
			   * @param vIntervalHeader The intervalHeader to remove or its index or id
			   * @returns The removed intervalHeader or <code>null</code>
			  */
			  removeIntervalHeader(vIntervalHeader: number | string | sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Sets a new value for property <code>appointmentsReducedHeight</code>.If set the appointments without
			   * text (only title) are rendered with a smaller height.<b>Note:</b> On phone devices this property is
			   * ignored, appointments are always rendered in full heightto allow touching.When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>false</code>.
			   * @since 1.38.0
			   * @param bAppointmentsReducedHeight New value for property <code>appointmentsReducedHeight</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setAppointmentsReducedHeight(bAppointmentsReducedHeight: boolean): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>appointmentsVisualization</code>.Defines the visualization of
			   * the <code>CalendarAppoinment</code><b>Note:</b> The real visualization depends on the used
			   * theme.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code>Standard</code>.
			   * @since 1.40.0
			   * @param sAppointmentsVisualization New value for property <code>appointmentsVisualization</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setAppointmentsVisualization(sAppointmentsVisualization: sap.ui.unified.CalendarAppointmentVisualization): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>checkResize</code>.If set, the <code>CalendarRow</code> checks
			   * for resize by itself.If a lot of <code>CalendarRow</code> controls are used in one container control
			   * (like <code>PlanningCalendar</code>).the resize checks should be done only by this container
			   * control. Then the container control shouldcall <code>handleResize</code> of the
			   * <code>CalendarRow</code> if a resize happens.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>true</code>.
			   * @param bCheckResize New value for property <code>checkResize</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setCheckResize(bCheckResize: boolean): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>height</code>.Height of the rowWhen called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sHeight New value for property <code>height</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setHeight(sHeight: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>intervals</code>.Number of displayed intervals. The size of the
			   * intervals is defined with <code>intervalType</code>When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>12</code>.
			   * @param iIntervals New value for property <code>intervals</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIntervals(iIntervals: number): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>intervalType</code>.Type of the intervals of the row. The
			   * default is one hour.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.Default value is <code>Hour</code>.
			   * @param sIntervalType New value for property <code>intervalType</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIntervalType(sIntervalType: sap.ui.unified.CalendarIntervalType): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets the associated <code>legend</code>.
			   * @since 1.40.0
			   * @param oLegend ID of an element which becomes the new target of this legend association;
			   * alternatively, an element instance may be given
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setLegend(oLegend: any | sap.ui.unified.CalendarLegend): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>nonWorkingDays</code>.If set, the provided weekdays are
			   * displayed as non-working days.Valid values inside the array are 0 to 6. (Other values will just be
			   * ignored.)If not set, the weekend defined in the locale settings is displayed as non-working
			   * days.<b>Note:</b> The non working days are only visualized if <code>intervalType</code> is set to
			   * day.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.
			   * @param sNonWorkingDays New value for property <code>nonWorkingDays</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setNonWorkingDays(sNonWorkingDays: number): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>nonWorkingHours</code>.If set, the provided hours are displayed
			   * as non-working hours.Valid values inside the array are 0 to 23. (Other values will just be
			   * ignored.)<b>Note:</b> The non working hours are only visualized if <code>intervalType</code> is set
			   * to hour.When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.
			   * @param sNonWorkingHours New value for property <code>nonWorkingHours</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setNonWorkingHours(sNonWorkingHours: number): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>showEmptyIntervalHeaders</code>.If set, interval headers are
			   * shown even if no <code>intervalHeaders</code> are assigned to the visible time frame.If not set, no
			   * interval headers are shown if no <code>intervalHeaders</code> are assigned.<b>Note:</b> This
			   * property is only used if <code>showIntervalHeaders</code> is set to true.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>true</code>.
			   * @since 1.38.0
			   * @param bShowEmptyIntervalHeaders New value for property <code>showEmptyIntervalHeaders</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowEmptyIntervalHeaders(bShowEmptyIntervalHeaders: boolean): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>showIntervalHeaders</code>.If set, interval headers are shown
			   * like specified in <code>showEmptyIntervalHeaders</code>.If not set, no interval headers are shown
			   * even if <code>intervalHeaders</code> are assigned.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>true</code>.
			   * @param bShowIntervalHeaders New value for property <code>showIntervalHeaders</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowIntervalHeaders(bShowIntervalHeaders: boolean): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>showSubIntervals</code>.If set, subintervals are shown.If the
			   * interval type is <code>Hour</code>, quarter hours are shown.If the interval type is
			   * <code>Day</code>, hours are shown.If the interval type is <code>Month</code>, days are shown.When
			   * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
			   * property will be restored.Default value is <code>false</code>.
			   * @param bShowSubIntervals New value for property <code>showSubIntervals</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowSubIntervals(bShowSubIntervals: boolean): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>startDate</code>.Start date, as JavaScript Date object, of the
			   * row. As default, the current date is used.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @param oStartDate New value for property <code>startDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStartDate(oStartDate: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>updateCurrentTime</code>.If set the <code>CalendarRow</code>
			   * triggers a periodic update to visualize the current time.If a lot of <code>CalendarRow</code>
			   * controls are used in one container control (like <code>PlanningCalendar</code>)the periodic update
			   * should be triggered only by this container control. Then the container control shouldcall
			   * <code>updateCurrentTimeVisualization</code> of the <code>CalendarRow</code> to update the
			   * visualization.When called with a value of <code>null</code> or <code>undefined</code>, the default
			   * value of the property will be restored.Default value is <code>true</code>.
			   * @param bUpdateCurrentTime New value for property <code>updateCurrentTime</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setUpdateCurrentTime(bUpdateCurrentTime: boolean): sap.ui.unified.CalendarRow;
	  
			  /**
			   * Sets a new value for property <code>width</code>.Width of the rowWhen called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sWidth New value for property <code>width</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setWidth(sWidth: any): sap.ui.unified.CalendarRow;
	  
			  /**
			   * If the current time is in the visible output of the <code>CalendarRow</code>,the indicator for the
			   * current time must be positioned.For this, each <code>CalendarRow</code> can trigger a timer.But if
			   * multiple <code>CalendarRow</code>s are used in one container (e.G. <code>PlanningCalendar</code>),it
			   * is better if the container triggers the interval once an then calls this functionof each
			   * <code>CalendarRow</code>.
			   * @returns <code>this</code> to allow method chaining
			  */
			  updateCurrentTimeVisualization(): sap.ui.unified.CalendarRow;
			}
			/**
			 * The shell layout is the base for the shell control which is meant as root control (full-screen) of
			 * an application.It was build as root control of the Fiori Launchpad application and provides the
			 * basic capabilitiesfor this purpose. Do not use this control within applications which run inside the
			 * Fiori Lauchpad anddo not use it for other scenarios than the root control usecase.
			 * @resource sap/ui/unified/ShellLayout.js
			*/
			export class ShellLayout extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new ShellLayout.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some content to the aggregation <code>content</code>.
			   * @param oContent the content to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addContent(oContent: sap.ui.core.Control): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Adds some paneContent to the aggregation <code>paneContent</code>.
			   * @param oPaneContent the paneContent to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addPaneContent(oPaneContent: sap.ui.core.Control): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Destroys all the content in the aggregation <code>content</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyContent(): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Destroys the header in the aggregation <code>header</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyHeader(): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Destroys all the paneContent in the aggregation <code>paneContent</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyPaneContent(): sap.ui.unified.ShellLayout;
	  
	  
			  /**
			   * Gets content of aggregation <code>content</code>.The content to appear in the main canvas.
			  */
			  getContent(): sap.ui.core.Control[];
	  
			  /**
			   * Gets content of aggregation <code>header</code>.The control to appear in the header area.
			  */
			  getHeader(): sap.ui.core.Control;
	  
			  /**
			   * Gets current value of property <code>headerHiding</code>.Whether the header can be hidden (manually
			   * or automatically). This feature is only available when touch events are supported.Default value is
			   * <code>false</code>.
			   * @returns Value of property <code>headerHiding</code>
			  */
			  getHeaderHiding(): boolean;
	  
			  /**
			   * Gets current value of property <code>headerVisible</code>.If set to false, no header (and no items,
			   * search, ...) is shown.Default value is <code>true</code>.
			   * @returns Value of property <code>headerVisible</code>
			  */
			  getHeaderVisible(): boolean;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.ShellLayout.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets content of aggregation <code>paneContent</code>.The content to appear in the pane area.
			  */
			  getPaneContent(): sap.ui.core.Control[];
	  
			  /**
			   * Gets current value of property <code>showPane</code>.Shows / Hides the side pane.Default value is
			   * <code>false</code>.
			   * @returns Value of property <code>showPane</code>
			  */
			  getShowPane(): boolean;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.and
			   * returns its index if found or -1 otherwise.
			   * @param oContent The content whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfContent(oContent: sap.ui.core.Control): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
			   * <code>paneContent</code>.and returns its index if found or -1 otherwise.
			   * @param oPaneContent The paneContent whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfPaneContent(oPaneContent: sap.ui.core.Control): number;
	  
			  /**
			   * Inserts a content into the aggregation <code>content</code>.
			   * @param oContent the content to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the content should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the content is inserted at position 0; for a value           
			   *  greater than the current size of the aggregation, the content is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Inserts a paneContent into the aggregation <code>paneContent</code>.
			   * @param oPaneContent the paneContent to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the paneContent should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value     
			   *        greater than the current size of the aggregation, the paneContent is inserted at            
			   * the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertPaneContent(oPaneContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
			   * from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllContent(): sap.ui.core.Control[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>paneContent</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllPaneContent(): sap.ui.core.Control[];
	  
			  /**
			   * Removes a content from the aggregation <code>content</code>.
			   * @param vContent The content to remove or its index or id
			   * @returns The removed content or <code>null</code>
			  */
			  removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Removes a paneContent from the aggregation <code>paneContent</code>.
			   * @param vPaneContent The paneContent to remove or its index or id
			   * @returns The removed paneContent or <code>null</code>
			  */
			  removePaneContent(vPaneContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Sets the aggregated <code>header</code>.
			   * @param oHeader The header to set
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setHeader(oHeader: sap.ui.core.Control): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Sets a new value for property <code>headerHiding</code>.Whether the header can be hidden (manually
			   * or automatically). This feature is only available when touch events are supported.When called with a
			   * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>false</code>.
			   * @param bHeaderHiding New value for property <code>headerHiding</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setHeaderHiding(bHeaderHiding: boolean): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Sets a new value for property <code>headerVisible</code>.If set to false, no header (and no items,
			   * search, ...) is shown.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.Default value is <code>true</code>.
			   * @param bHeaderVisible New value for property <code>headerVisible</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setHeaderVisible(bHeaderVisible: boolean): sap.ui.unified.ShellLayout;
	  
			  /**
			   * Sets a new value for property <code>showPane</code>.Shows / Hides the side pane.When called with a
			   * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>false</code>.
			   * @param bShowPane New value for property <code>showPane</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowPane(bShowPane: boolean): sap.ui.unified.ShellLayout;
			}
			/**
			 * ShellOverlay to be opened in front of a sap.ui.unified.Shell
			 * @resource sap/ui/unified/ShellOverlay.js
			*/
			export class ShellOverlay extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new ShellOverlay.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Adds some content to the aggregation <code>content</code>.
			   * @param oContent the content to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addContent(oContent: sap.ui.core.Control): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>closed</code> event of this
			   * <code>sap.ui.unified.ShellOverlay</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.ShellOverlay</code> itself.Fired when the overlay was closed.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.ShellOverlay</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachClosed(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Closes the ShellOverlay.
			  */
			  close(): void;
	  
			  /**
			   * Destroys all the content in the aggregation <code>content</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyContent(): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Destroys the search in the aggregation <code>search</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySearch(): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>closed</code> event of this
			   * <code>sap.ui.unified.ShellOverlay</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachClosed(fnFunction: any, oListener: any): sap.ui.unified.ShellOverlay;
	  
	  
			  /**
			   * Fires event <code>closed</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireClosed(mArguments: any): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets content of aggregation <code>content</code>.The content to appear in the overlay.
			  */
			  getContent(): sap.ui.core.Control[];
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.ShellOverlay.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets content of aggregation <code>search</code>.Experimental (This aggregation might change in
			   * future!): The search control which should be displayed in the overlay header.
			  */
			  getSearch(): sap.ui.core.Control;
	  
			  /**
			   * ID of the element which is the current target of the association <code>shell</code>, or
			   * <code>null</code>.
			  */
			  getShell(): any;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.and
			   * returns its index if found or -1 otherwise.
			   * @param oContent The content whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfContent(oContent: sap.ui.core.Control): number;
	  
			  /**
			   * Inserts a content into the aggregation <code>content</code>.
			   * @param oContent the content to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the content should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the content is inserted at position 0; for a value           
			   *  greater than the current size of the aggregation, the content is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Opens the ShellOverlay.
			  */
			  open(): void;
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
			   * from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllContent(): sap.ui.core.Control[];
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Removes a content from the aggregation <code>content</code>.
			   * @param vContent The content to remove or its index or id
			   * @returns The removed content or <code>null</code>
			  */
			  removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Sets the aggregated <code>search</code>.
			   * @param oSearch The search to set
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSearch(oSearch: sap.ui.core.Control): sap.ui.unified.ShellOverlay;
	  
			  /**
			   * Sets the associated <code>shell</code>.
			   * @param oShell ID of an element which becomes the new target of this shell association;
			   * alternatively, an element instance may be given
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShell(oShell: any | sap.ui.unified.ShellLayout): sap.ui.unified.ShellOverlay;
			}
			/**
			 * Abstract base class for menu item which provides common properties and events for all concrete item
			 * implementations.
			 * @resource sap/ui/unified/MenuItemBase.js
			*/
			export abstract class MenuItemBase extends sap.ui.core.Element {
	  
	  
			  /**
			   * Abstract base class <code>MenuItemBase</code> for menu item elements. Please use concrete
			   * subclasses.Accepts an object literal <code>mSettings</code> that defines initialproperty values,
			   * aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId Id for the new control, generated automatically if no id is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
			   * <code>sap.ui.unified.MenuItemBase</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.MenuItemBase</code> itself.Fired when the item is selected by the
			   * user.<b>Note:</b> The event is also available for items which have a submenu.In general,
			   * applications must not handle event in this case because the user selection opens the sub menu.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.MenuItemBase</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.MenuItemBase;
	  
			  /**
			   * Destroys the submenu in the aggregation <code>submenu</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySubmenu(): sap.ui.unified.MenuItemBase;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
			   * <code>sap.ui.unified.MenuItemBase</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachSelect(fnFunction: any, oListener: any): sap.ui.unified.MenuItemBase;
	  
	  
			  /**
			   * Fires event <code>select</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>item</code> of type <code>sap.ui.unified.MenuItemBase</code>The current
			   * item</li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireSelect(mArguments: any): sap.ui.unified.MenuItemBase;
	  
			  /**
			   * Gets current value of property <code>enabled</code>.When an item is disabled the item can not be
			   * selected by the user.The enabled property of the item has no effect when the menu of the item is
			   * disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).Default value is
			   * <code>true</code>.
			   * @returns Value of property <code>enabled</code>
			  */
			  getEnabled(): boolean;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.MenuItemBase.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>startsSection</code>.Defines whether a visual separator should
			   * be rendered before the item.<b>Note:</b> If an item is invisible also the separator of this item is
			   * not shown.Default value is <code>false</code>.
			   * @returns Value of property <code>startsSection</code>
			  */
			  getStartsSection(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>submenu</code>.An optional submenu of the item which is opened
			   * when the item is selected by the user.
			  */
			  getSubmenu(): sap.ui.unified.Menu;
	  
			  /**
			   * Gets current value of property <code>visible</code>.Invisible items do not appear in the
			   * menu.Default value is <code>true</code>.
			   * @returns Value of property <code>visible</code>
			  */
			  getVisible(): boolean;
	  
			  /**
			   * Changes the visual hover state of the menu item.Subclasses may override this function.
			   * @param bHovered Specifies whether the item is currently hovered or not.
			   * @param oMenu The menu to which this item belongs
			  */
			  hover(bHovered: boolean, oMenu: sap.ui.unified.Menu): void;
	  
			  /**
			   * Informs the item that the item HTML is now applied to the DOM.Subclasses may override this function.
			  */
			  onAfterRendering(): void;
	  
			  /**
			   * Event handler which is called whenever the submenu of the item is opened or closed.Subclasses may
			   * override this function.
			   * @param bOpened Specifies whether the submenu of the item is opened or closed
			  */
			  onSubmenuToggle(bOpened: boolean): void;
	  
			  /**
			   * Produces the HTML of an item and writes it to render-output-buffer during the rendering of the
			   * corresponding menu.Subclasses may override this function.
			   * @param oRenderManager The <code>RenderManager</code> that can be used for writing to the
			   * render-output-buffer
			   * @param oItem The item which should be rendered
			   * @param oMenu The menu to which this item belongs
			  */
			  render(oRenderManager: sap.ui.core.RenderManager, oItem: sap.ui.unified.MenuItemBase, oMenu: sap.ui.unified.Menu): void;
	  
			  /**
			   * Sets a new value for property <code>enabled</code>.When an item is disabled the item can not be
			   * selected by the user.The enabled property of the item has no effect when the menu of the item is
			   * disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>true</code>.
			   * @param bEnabled New value for property <code>enabled</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setEnabled(bEnabled: boolean): sap.ui.unified.MenuItemBase;
	  
			  /**
			   * Sets a new value for property <code>startsSection</code>.Defines whether a visual separator should
			   * be rendered before the item.<b>Note:</b> If an item is invisible also the separator of this item is
			   * not shown.When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.Default value is <code>false</code>.
			   * @param bStartsSection New value for property <code>startsSection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStartsSection(bStartsSection: boolean): sap.ui.unified.MenuItemBase;
	  
			  /**
			   * Sets the aggregated <code>submenu</code>.
			   * @param oSubmenu The submenu to set
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSubmenu(oSubmenu: sap.ui.unified.Menu): sap.ui.unified.MenuItemBase;
	  
			  /**
			   * Sets a new value for property <code>visible</code>.Invisible items do not appear in the menu.When
			   * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
			   * property will be restored.Default value is <code>true</code>.
			   * @param bVisible New value for property <code>visible</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setVisible(bVisible: boolean): sap.ui.unified.MenuItemBase;
			}
			/**
			 * The framework generates an input field and a button with text "Browse ...". The API supports
			 * features such as on change uploads (the upload starts immediately after a file has been selected),
			 * file uploads with explicit calls, adjustable control sizes, text display after uploads, or tooltips
			 * containing complete file paths.
			 * @resource sap/ui/unified/FileUploader.js
			*/
			export class FileUploader extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new FileUploader.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
			  /**
			   * Constructor for a new FileUploader.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(mSettings?: any);
	  
			  /**
			   * Aborts the currently running upload.
			   * @since 1.24.0
			  */
			  abort(): void;
	  
			  /**
			   * Adds some headerParameter to the aggregation <code>headerParameters</code>.
			   * @param oHeaderParameter the headerParameter to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addHeaderParameter(oHeaderParameter: sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploader;
	  
			  /**
			   * Adds some parameter to the aggregation <code>parameters</code>.
			   * @since 1.12.2
			   * @param oParameter the parameter to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addParameter(oParameter: sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired when the value of the file
			   * path has been changed.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachChange(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>fileAllowed</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired when the file is allowed for
			   * upload on client side.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachFileAllowed(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>filenameLengthExceed</code> event of
			   * this <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired, if the filename of a chosen
			   * file is longer than the value specified with the maximumFilenameLength property.
			   * @since 1.24.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachFilenameLengthExceed(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>fileSizeExceed</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired when the size of a file is
			   * above the maximumFileSize property.This event is not supported by Internet Explorer 9 (same
			   * restriction as for the property maximumFileSize).
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachFileSizeExceed(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>typeMissmatch</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired when the type of a file does
			   * not match the mimeType or fileType property.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachTypeMissmatch(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>uploadAborted</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired after the current upload has
			   * been aborted.This is event is only supported with property sendXHR set to true, i.e. the event is
			   * not supported in Internet Explorer 9.
			   * @since 1.24.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachUploadAborted(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>uploadComplete</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired as soon as the upload request
			   * is completed (either successful or unsuccessful). To see if the upload request was successful, check
			   * the 'state' parameter for a value 2xx.The uploads actual progress can be retrieved via the
			   * 'uploadProgress' Event.However this covers only the client side of the Upload process and does not
			   * give any success status from the server.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachUploadComplete(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>uploadProgress</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired after the upload has started
			   * and before the upload is completed and contains progress information related to the running
			   * upload.Depending on file size, band width and used browser the event is fired once or multiple
			   * times.This is event is only supported with property sendXHR set to true, i.e. the event is not
			   * supported in Internet Explorer 9.
			   * @since 1.24.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachUploadProgress(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>uploadStart</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.FileUploader</code> itself.Event is fired before an upload is started.
			   * @since 1.30.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.FileUploader</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachUploadStart(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Clears the content of the FileUploader. The attached additional data however is retained.
			   * @since 1.25.0
			  */
			  clear(): void;
	  
			  /**
			   * Destroys all the headerParameters in the aggregation <code>headerParameters</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyHeaderParameters(): sap.ui.unified.FileUploader;
	  
			  /**
			   * Destroys all the parameters in the aggregation <code>parameters</code>.
			   * @since 1.12.2
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyParameters(): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachChange(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>fileAllowed</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachFileAllowed(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>filenameLengthExceed</code> event of
			   * this <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the
			   * ones used for event registration.
			   * @since 1.24.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachFilenameLengthExceed(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>fileSizeExceed</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachFileSizeExceed(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>typeMissmatch</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachTypeMissmatch(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>uploadAborted</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @since 1.24.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachUploadAborted(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>uploadComplete</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachUploadComplete(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>uploadProgress</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @since 1.24.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachUploadProgress(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>uploadStart</code> event of this
			   * <code>sap.ui.unified.FileUploader</code>.The passed function and listener object must match the ones
			   * used for event registration.
			   * @since 1.30.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachUploadStart(fnFunction: any, oListener: any): sap.ui.unified.FileUploader;
	  
	  
			  /**
			   * Fires event <code>change</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>newValue</code> of type <code>string</code>New file path
			   * value.</li><li><code>files</code> of type <code>object[]</code>Files.</li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireChange(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>fileAllowed</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireFileAllowed(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>filenameLengthExceed</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>fileName</code> of type <code>string</code>The filename, which is longer
			   * than specified by the value of the property maximumFilenameLength.</li></ul>
			   * @since 1.24.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireFilenameLengthExceed(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>fileSizeExceed</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>fileName</code> of type <code>string</code>The name of a file to be
			   * uploaded.</li><li><code>fileSize</code> of type <code>string</code>The size in MB of a file to be
			   * uploaded.</li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireFileSizeExceed(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>typeMissmatch</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>fileName</code> of type <code>string</code>The name of a file to be
			   * uploaded.</li><li><code>fileType</code> of type <code>string</code>The file ending of a file to be
			   * uploaded.</li><li><code>mimeType</code> of type <code>string</code>The MIME type of a file to be
			   * uploaded.</li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireTypeMissmatch(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>uploadAborted</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>fileName</code> of type <code>string</code>The name of a file to be
			   * uploaded.</li><li><code>requestHeaders</code> of type <code>object[]</code>Http-Request-Headers.
			   * Required for receiving "header" is to set the property "sendXHR" to true.This property is not
			   * supported by Internet Explorer 9.</li></ul>
			   * @since 1.24.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireUploadAborted(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>uploadComplete</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>fileName</code> of type <code>string</code>The name of a file to be
			   * uploaded.</li><li><code>response</code> of type <code>string</code>Response message which comes from
			   * the server. On the server side this response has to be put within the &quot;body&quot; tags of the
			   * response document of the iFrame.It can consist of a return code and an optional message. This does
			   * not work in cross-domain scenarios.</li><li><code>readyStateXHR</code> of type
			   * <code>string</code>ReadyState of the XHR request. Required for receiving a readyState is to set the
			   * property "sendXHR" to "true". This property is not supported by Internet Explorer
			   * 9.</li><li><code>status</code> of type <code>string</code>Status of the XHR request. Required for
			   * receiving a status is to set the property "sendXHR" to "true". This property is not supported by
			   * Internet Explorer 9.</li><li><code>responseRaw</code> of type <code>string</code>Http-Response which
			   * comes from the server. Required for receiving "responseRaw" is to set the property "sendXHR" to
			   * true. This property is not supported by Internet Explorer 9.</li><li><code>headers</code> of type
			   * <code>object</code>Http-Response-Headers which come from the server. provided as a JSON-map, i.e.
			   * each header-field is reflected by a property in the header-object, with the property value
			   * reflecting the header-field's content.Required for receiving "header" is to set the property
			   * "sendXHR" to true.This property is not supported by Internet Explorer
			   * 9.</li><li><code>requestHeaders</code> of type <code>object[]</code>Http-Request-Headers. Required
			   * for receiving "header" is to set the property "sendXHR" to true. This property is not supported by
			   * Internet Explorer 9.</li></ul>
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireUploadComplete(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>uploadProgress</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>lengthComputable</code> of type <code>boolean</code>Indicates whether or
			   * not the relative upload progress can be calculated out of loaded and
			   * total.</li><li><code>loaded</code> of type <code>float</code>The number of bytes of the file which
			   * have been uploaded by to the time the event was fired.</li><li><code>total</code> of type
			   * <code>float</code>The total size of the file to be uploaded in byte.</li><li><code>fileName</code>
			   * of type <code>string</code>The name of a file to be uploaded.</li><li><code>requestHeaders</code> of
			   * type <code>object[]</code>Http-Request-Headers. Required for receiving "header" is to set the
			   * property "sendXHR" to true.This property is not supported by Internet Explorer 9.</li></ul>
			   * @since 1.24.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireUploadProgress(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Fires event <code>uploadStart</code> to attached listeners.Expects the following event
			   * parameters:<ul><li><code>fileName</code> of type <code>string</code>The name of a file to be
			   * uploaded.</li><li><code>requestHeaders</code> of type <code>object[]</code>Http-Request-Headers.
			   * Required for receiving "header" is to set the property "sendXHR" to true.This property is not
			   * supported by Internet Explorer 9.</li></ul>
			   * @since 1.30.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireUploadStart(mArguments: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Gets current value of property <code>additionalData</code>.Additional data that is sent to the back
			   * end service. Data will be transmitted as value of a hidden input where the name is derived from the
			   * name property with suffix -data.
			   * @returns Value of property <code>additionalData</code>
			  */
			  getAdditionalData(): string;
	  
			  /**
			   * Gets current value of property <code>buttonOnly</code>.If set to "true", the FileUploader will be
			   * rendered as Button only, without showing the InputField.Default value is <code>false</code>.
			   * @returns Value of property <code>buttonOnly</code>
			  */
			  getButtonOnly(): boolean;
	  
			  /**
			   * Gets current value of property <code>buttonText</code>.The Button text can be overwritten using this
			   * property.
			   * @returns Value of property <code>buttonText</code>
			  */
			  getButtonText(): string;
	  
			  /**
			   * Gets current value of property <code>enabled</code>.Disabled controls have different colors,
			   * depending on customer settings.Default value is <code>true</code>.
			   * @returns Value of property <code>enabled</code>
			  */
			  getEnabled(): boolean;
	  
			  /**
			   * Gets current value of property <code>fileType</code>.The chosen files will be checked against an
			   * array of file types. If at least one file does not fit the file type restriction the upload is
			   * prevented.Example: ["jpg", "png", "bmp"].
			   * @returns Value of property <code>fileType</code>
			  */
			  getFileType(): string[];
	  
			  /**
			   * Gets content of aggregation <code>headerParameters</code>.The header parameters for the FileUploader
			   * which are only submitted with XHR requests. Header parameters are not supported by Internet Explorer
			   * 9.
			  */
			  getHeaderParameters(): sap.ui.unified.FileUploaderParameter[];
	  
			  /**
			   * Gets current value of property <code>icon</code>.Icon to be displayed as graphical element within
			   * the button.This can be an URI to an image or an icon font URI.Default value is <code></code>.
			   * @since 1.26.0
			   * @returns Value of property <code>icon</code>
			  */
			  getIcon(): any;
	  
			  /**
			   * Gets current value of property <code>iconFirst</code>.If set to true (default), the display sequence
			   * is 1. icon 2. control text.Default value is <code>true</code>.
			   * @since 1.26.0
			   * @returns Value of property <code>iconFirst</code>
			  */
			  getIconFirst(): boolean;
	  
			  /**
			   * Gets current value of property <code>iconHovered</code>.Icon to be displayed as graphical element
			   * within the button when it is hovered (only if also a base icon was specified). If not specified the
			   * base icon is used.If a icon font icon is used, this property is ignored.Default value is
			   * <code></code>.
			   * @since 1.26.0
			   * @returns Value of property <code>iconHovered</code>
			  */
			  getIconHovered(): any;
	  
			  /**
			   * Gets current value of property <code>iconOnly</code>.If set to true, the button is displayed without
			   * any text.Default value is <code>false</code>.
			   * @since 1.26.0
			   * @returns Value of property <code>iconOnly</code>
			  */
			  getIconOnly(): boolean;
	  
			  /**
			   * Gets current value of property <code>iconSelected</code>.Icon to be displayed as graphical element
			   * within the button when it is selected (only if also a base icon was specified). If not specified the
			   * base or hovered icon is used.If a icon font icon is used, this property is ignored.Default value is
			   * <code></code>.
			   * @since 1.26.0
			   * @returns Value of property <code>iconSelected</code>
			  */
			  getIconSelected(): any;
	  
			  /**
			   * Gets current value of property <code>maximumFilenameLength</code>.The maximum length of a filename
			   * which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding
			   * Event 'filenameLengthExceed' is fired.
			   * @since 1.24.0
			   * @returns Value of property <code>maximumFilenameLength</code>
			  */
			  getMaximumFilenameLength(): number;
	  
			  /**
			   * Gets current value of property <code>maximumFileSize</code>.A file size limit in megabytes which
			   * prevents the upload if at least one file exceeds it. This property is not supported by Internet
			   * Explorer 9.
			   * @returns Value of property <code>maximumFileSize</code>
			  */
			  getMaximumFileSize(): number;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.FileUploader.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>mimeType</code>.The chosen files will be checked against an
			   * array of mime types. If at least one file does not fit the mime type restriction the upload is
			   * prevented. This property is not supported by Internet Explorer 9.Example: mimeType ["image/png",
			   * "image/jpeg"].
			   * @returns Value of property <code>mimeType</code>
			  */
			  getMimeType(): string[];
	  
			  /**
			   * Gets current value of property <code>multiple</code>.Allows multiple files to be chosen and uploaded
			   * from the same folder. This property is not supported by Internet Explorer 9.Default value is
			   * <code>false</code>.
			   * @returns Value of property <code>multiple</code>
			  */
			  getMultiple(): boolean;
	  
			  /**
			   * Gets current value of property <code>name</code>.Unique control name for identification on the
			   * server side after sending data to the server.
			   * @returns Value of property <code>name</code>
			  */
			  getName(): string;
	  
			  /**
			   * Gets content of aggregation <code>parameters</code>.The parameters for the FileUploader which are
			   * rendered as a hidden inputfield.
			   * @since 1.12.2
			  */
			  getParameters(): sap.ui.unified.FileUploaderParameter[];
	  
			  /**
			   * Gets current value of property <code>placeholder</code>.Placeholder for the text field.
			   * @returns Value of property <code>placeholder</code>
			  */
			  getPlaceholder(): string;
	  
			  /**
			   * Gets current value of property <code>sameFilenameAllowed</code>.If the FileUploader is configured to
			   * upload the file directly after the file is selected it is not allowed to upload a file with the same
			   * name again. If a user should be allowed to upload a file with the same name again this parameter has
			   * to be "true". A typical use case would be if the files have different paths.Default value is
			   * <code>false</code>.
			   * @returns Value of property <code>sameFilenameAllowed</code>
			  */
			  getSameFilenameAllowed(): boolean;
	  
			  /**
			   * Gets current value of property <code>sendXHR</code>.If set to "true", the request will be sent as
			   * XHR request instead of a form submit. This property is not supported by Internet Explorer 9.Default
			   * value is <code>false</code>.
			   * @returns Value of property <code>sendXHR</code>
			  */
			  getSendXHR(): boolean;
	  
			  /**
			   * Gets current value of property <code>style</code>.Style of the button. "Transparent, "Accept",
			   * "Reject", or "Emphasized" is allowed.
			   * @returns Value of property <code>style</code>
			  */
			  getStyle(): string;
	  
			  /**
			   * Gets current value of property <code>uploadOnChange</code>.If set to "true", the upload immediately
			   * starts after file selection. With the default setting, the upload needs to be explicitly
			   * triggered.Default value is <code>false</code>.
			   * @returns Value of property <code>uploadOnChange</code>
			  */
			  getUploadOnChange(): boolean;
	  
			  /**
			   * Gets current value of property <code>uploadUrl</code>.Used when URL address is on a remote
			   * server.Default value is <code></code>.
			   * @returns Value of property <code>uploadUrl</code>
			  */
			  getUploadUrl(): any;
	  
			  /**
			   * Gets current value of property <code>useMultipart</code>.If set to "false", the request will be sent
			   * as file only request instead of a multipart/form-data request. Only one file could be uploaded using
			   * this type of request. Required for sending such a request is to set the property "sendXHR" to
			   * "true". This property is not supported by Internet Explorer 9.Default value is <code>true</code>.
			   * @returns Value of property <code>useMultipart</code>
			  */
			  getUseMultipart(): boolean;
	  
			  /**
			   * Gets current value of property <code>value</code>.Value of the path for file upload.Default value is
			   * <code></code>.
			   * @returns Value of property <code>value</code>
			  */
			  getValue(): string;
	  
			  /**
			   * Gets current value of property <code>valueState</code>.Visualizes warnings or errors related to the
			   * text field. Possible values: Warning, Error, Success, None.Default value is <code>None</code>.
			   * @since 1.24.0
			   * @returns Value of property <code>valueState</code>
			  */
			  getValueState(): sap.ui.core.ValueState;
	  
			  /**
			   * Gets current value of property <code>width</code>.Specifies the displayed control width.Default
			   * value is <code></code>.
			   * @returns Value of property <code>width</code>
			  */
			  getWidth(): any;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation
			   * <code>headerParameters</code>.and returns its index if found or -1 otherwise.
			   * @param oHeaderParameter The headerParameter whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfHeaderParameter(oHeaderParameter: sap.ui.unified.FileUploaderParameter): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation
			   * <code>parameters</code>.and returns its index if found or -1 otherwise.
			   * @since 1.12.2
			   * @param oParameter The parameter whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfParameter(oParameter: sap.ui.unified.FileUploaderParameter): number;
	  
			  /**
			   * Inserts a headerParameter into the aggregation <code>headerParameters</code>.
			   * @param oHeaderParameter the headerParameter to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the headerParameter should be inserted at; for         
			   *    a negative value of <code>iIndex</code>, the headerParameter is inserted at position 0; for a
			   * value             greater than the current size of the aggregation, the headerParameter is inserted
			   * at             the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertHeaderParameter(oHeaderParameter: sap.ui.unified.FileUploaderParameter, iIndex: number): sap.ui.unified.FileUploader;
	  
			  /**
			   * Inserts a parameter into the aggregation <code>parameters</code>.
			   * @since 1.12.2
			   * @param oParameter the parameter to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the parameter should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the parameter is inserted at position 0; for a value         
			   *    greater than the current size of the aggregation, the parameter is inserted at             the
			   * last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertParameter(oParameter: sap.ui.unified.FileUploaderParameter, iIndex: number): sap.ui.unified.FileUploader;
	  
			  /**
			   * Removes all the controls from the aggregation <code>headerParameters</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllHeaderParameters(): sap.ui.unified.FileUploaderParameter[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>parameters</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @since 1.12.2
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllParameters(): sap.ui.unified.FileUploaderParameter[];
	  
			  /**
			   * Removes a headerParameter from the aggregation <code>headerParameters</code>.
			   * @param vHeaderParameter The headerParameter to remove or its index or id
			   * @returns The removed headerParameter or <code>null</code>
			  */
			  removeHeaderParameter(vHeaderParameter: number | string | sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploaderParameter;
	  
			  /**
			   * Removes a parameter from the aggregation <code>parameters</code>.
			   * @since 1.12.2
			   * @param vParameter The parameter to remove or its index or id
			   * @returns The removed parameter or <code>null</code>
			  */
			  removeParameter(vParameter: number | string | sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploaderParameter;
	  
			  /**
			   * Sets a new value for property <code>additionalData</code>.Additional data that is sent to the back
			   * end service. Data will be transmitted as value of a hidden input where the name is derived from the
			   * name property with suffix -data.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @param sAdditionalData New value for property <code>additionalData</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setAdditionalData(sAdditionalData: string): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>buttonOnly</code>.If set to "true", the FileUploader will be
			   * rendered as Button only, without showing the InputField.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>false</code>.
			   * @param bButtonOnly New value for property <code>buttonOnly</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setButtonOnly(bButtonOnly: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>buttonText</code>.The Button text can be overwritten using this
			   * property.When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.
			   * @param sButtonText New value for property <code>buttonText</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setButtonText(sButtonText: string): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>enabled</code>.Disabled controls have different colors,
			   * depending on customer settings.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>true</code>.
			   * @param bEnabled New value for property <code>enabled</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setEnabled(bEnabled: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>fileType</code>.The chosen files will be checked against an
			   * array of file types. If at least one file does not fit the file type restriction the upload is
			   * prevented.Example: ["jpg", "png", "bmp"].When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @param sFileType New value for property <code>fileType</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setFileType(sFileType: string[]): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>icon</code>.Icon to be displayed as graphical element within the
			   * button.This can be an URI to an image or an icon font URI.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code></code>.
			   * @since 1.26.0
			   * @param sIcon New value for property <code>icon</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIcon(sIcon: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>iconFirst</code>.If set to true (default), the display sequence
			   * is 1. icon 2. control text.When called with a value of <code>null</code> or <code>undefined</code>,
			   * the default value of the property will be restored.Default value is <code>true</code>.
			   * @since 1.26.0
			   * @param bIconFirst New value for property <code>iconFirst</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIconFirst(bIconFirst: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>iconHovered</code>.Icon to be displayed as graphical element
			   * within the button when it is hovered (only if also a base icon was specified). If not specified the
			   * base icon is used.If a icon font icon is used, this property is ignored.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code></code>.
			   * @since 1.26.0
			   * @param sIconHovered New value for property <code>iconHovered</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIconHovered(sIconHovered: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>iconOnly</code>.If set to true, the button is displayed without
			   * any text.When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.Default value is <code>false</code>.
			   * @since 1.26.0
			   * @param bIconOnly New value for property <code>iconOnly</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIconOnly(bIconOnly: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>iconSelected</code>.Icon to be displayed as graphical element
			   * within the button when it is selected (only if also a base icon was specified). If not specified the
			   * base or hovered icon is used.If a icon font icon is used, this property is ignored.When called with
			   * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code></code>.
			   * @since 1.26.0
			   * @param sIconSelected New value for property <code>iconSelected</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIconSelected(sIconSelected: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>maximumFilenameLength</code>.The maximum length of a filename
			   * which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding
			   * Event 'filenameLengthExceed' is fired.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @since 1.24.0
			   * @param iMaximumFilenameLength New value for property <code>maximumFilenameLength</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMaximumFilenameLength(iMaximumFilenameLength: number): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>maximumFileSize</code>.A file size limit in megabytes which
			   * prevents the upload if at least one file exceeds it. This property is not supported by Internet
			   * Explorer 9.When called with a value of <code>null</code> or <code>undefined</code>, the default
			   * value of the property will be restored.
			   * @param fMaximumFileSize New value for property <code>maximumFileSize</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMaximumFileSize(fMaximumFileSize: number): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>mimeType</code>.The chosen files will be checked against an
			   * array of mime types. If at least one file does not fit the mime type restriction the upload is
			   * prevented. This property is not supported by Internet Explorer 9.Example: mimeType ["image/png",
			   * "image/jpeg"].When called with a value of <code>null</code> or <code>undefined</code>, the default
			   * value of the property will be restored.
			   * @param sMimeType New value for property <code>mimeType</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMimeType(sMimeType: string[]): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>multiple</code>.Allows multiple files to be chosen and uploaded
			   * from the same folder. This property is not supported by Internet Explorer 9.When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>false</code>.
			   * @param bMultiple New value for property <code>multiple</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMultiple(bMultiple: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>name</code>.Unique control name for identification on the server
			   * side after sending data to the server.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @param sName New value for property <code>name</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setName(sName: string): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>placeholder</code>.Placeholder for the text field.When called
			   * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
			   * be restored.
			   * @param sPlaceholder New value for property <code>placeholder</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setPlaceholder(sPlaceholder: string): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>sameFilenameAllowed</code>.If the FileUploader is configured to
			   * upload the file directly after the file is selected it is not allowed to upload a file with the same
			   * name again. If a user should be allowed to upload a file with the same name again this parameter has
			   * to be "true". A typical use case would be if the files have different paths.When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>false</code>.
			   * @param bSameFilenameAllowed New value for property <code>sameFilenameAllowed</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSameFilenameAllowed(bSameFilenameAllowed: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>sendXHR</code>.If set to "true", the request will be sent as XHR
			   * request instead of a form submit. This property is not supported by Internet Explorer 9.When called
			   * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
			   * be restored.Default value is <code>false</code>.
			   * @param bSendXHR New value for property <code>sendXHR</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSendXHR(bSendXHR: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>style</code>.Style of the button. "Transparent, "Accept",
			   * "Reject", or "Emphasized" is allowed.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @param sStyle New value for property <code>style</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStyle(sStyle: string): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>uploadOnChange</code>.If set to "true", the upload immediately
			   * starts after file selection. With the default setting, the upload needs to be explicitly
			   * triggered.When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.Default value is <code>false</code>.
			   * @param bUploadOnChange New value for property <code>uploadOnChange</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setUploadOnChange(bUploadOnChange: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>uploadUrl</code>.Used when URL address is on a remote
			   * server.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code></code>.
			   * @param sUploadUrl New value for property <code>uploadUrl</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setUploadUrl(sUploadUrl: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>useMultipart</code>.If set to "false", the request will be sent
			   * as file only request instead of a multipart/form-data request. Only one file could be uploaded using
			   * this type of request. Required for sending such a request is to set the property "sendXHR" to
			   * "true". This property is not supported by Internet Explorer 9.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>true</code>.
			   * @param bUseMultipart New value for property <code>useMultipart</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setUseMultipart(bUseMultipart: boolean): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>value</code>.Value of the path for file upload.When called with
			   * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code></code>.
			   * @param sValue New value for property <code>value</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setValue(sValue: string): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>valueState</code>.Visualizes warnings or errors related to the
			   * text field. Possible values: Warning, Error, Success, None.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>None</code>.
			   * @since 1.24.0
			   * @param sValueState New value for property <code>valueState</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setValueState(sValueState: sap.ui.core.ValueState): sap.ui.unified.FileUploader;
	  
			  /**
			   * Sets a new value for property <code>width</code>.Specifies the displayed control width.When called
			   * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
			   * be restored.Default value is <code></code>.
			   * @param sWidth New value for property <code>width</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setWidth(sWidth: any): sap.ui.unified.FileUploader;
	  
			  /**
			   * Starts the upload (as defined by uploadUrl)
			  */
			  upload(): void;
			}
			/**
			 * Date range with calendar day type information. Used to visualize special days in the Calendar.
			 * @resource sap/ui/unified/DateTypeRange.js
			*/
			export class DateTypeRange extends sap.ui.unified.DateRange {
	  
	  
			  /**
			   * Constructor for a new DateTypeRange.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.DateTypeRange.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>type</code>.Type of the date range.Default value is
			   * <code>Type01</code>.
			   * @returns Value of property <code>type</code>
			  */
			  getType(): sap.ui.unified.CalendarDayType;
	  
			  /**
			   * Sets a new value for property <code>type</code>.Type of the date range.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>Type01</code>.
			   * @param sType New value for property <code>type</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setType(sType: sap.ui.unified.CalendarDayType): sap.ui.unified.DateTypeRange;
			}
			/**
			 * Header Action item of the Shell.
			 * @resource sap/ui/unified/ShellHeadItem.js
			*/
			export class ShellHeadItem extends sap.ui.core.Element {
	  
	  
			  /**
			   * Constructor for a new ShellHeadItem.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this
			   * <code>sap.ui.unified.ShellHeadItem</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.ShellHeadItem</code> itself.Event is fired when the user presses the
			   * item.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.ShellHeadItem</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachPress(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this
			   * <code>sap.ui.unified.ShellHeadItem</code>.The passed function and listener object must match the
			   * ones used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachPress(fnFunction: any, oListener: any): sap.ui.unified.ShellHeadItem;
	  
	  
			  /**
			   * Fires event <code>press</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  firePress(mArguments: any): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets current value of property <code>icon</code>.The icon of the item, either defined in the
			   * sap.ui.core.IconPool or an URI to a custom image. An icon must be set.
			   * @returns Value of property <code>icon</code>
			  */
			  getIcon(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.ShellHeadItem.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>selected</code>.Defines the toggle state in case the item
			   * represents a toggle button (see also property <code>toggleEnabled</code>).Default value is
			   * <code>false</code>.
			   * @returns Value of property <code>selected</code>
			  */
			  getSelected(): boolean;
	  
			  /**
			   * Gets current value of property <code>showMarker</code>.If set to true, a theme dependent marker is
			   * shown on the item.Default value is <code>false</code>.
			   * @returns Value of property <code>showMarker</code>
			  */
			  getShowMarker(): boolean;
	  
			  /**
			   * Gets current value of property <code>showSeparator</code>.If set to true, a separator is displayed
			   * after the item.Default value is <code>true</code>.
			   * @since 1.22.5
			   * @returns Value of property <code>showSeparator</code>
			  */
			  getShowSeparator(): boolean;
	  
			  /**
			   * Gets current value of property <code>startsSection</code>.If set to true, a divider is displayed
			   * before the item.Default value is <code>false</code>.
			   * @returns Value of property <code>startsSection</code>
			  */
			  getStartsSection(): boolean;
	  
			  /**
			   * Gets current value of property <code>toggleEnabled</code>.If set to true, the item represents a
			   * toggle button. The <code>selected</code> property can the be used todefine the toggle state.
			   * Otherwise the item is displayed as action button. In this case the <code>selected</code> propertyis
			   * ignored.Default value is <code>true</code>.
			   * @since 1.34.3
			   * @returns Value of property <code>toggleEnabled</code>
			  */
			  getToggleEnabled(): boolean;
	  
			  /**
			   * Gets current value of property <code>visible</code>.Invisible items are not shown on the UI.Default
			   * value is <code>true</code>.
			   * @since 1.18
			   * @returns Value of property <code>visible</code>
			  */
			  getVisible(): boolean;
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Sets a new value for property <code>icon</code>.The icon of the item, either defined in the
			   * sap.ui.core.IconPool or an URI to a custom image. An icon must be set.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sIcon New value for property <code>icon</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIcon(sIcon: any): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Sets a new value for property <code>selected</code>.Defines the toggle state in case the item
			   * represents a toggle button (see also property <code>toggleEnabled</code>).When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>false</code>.
			   * @param bSelected New value for property <code>selected</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSelected(bSelected: boolean): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Sets a new value for property <code>showMarker</code>.If set to true, a theme dependent marker is
			   * shown on the item.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.Default value is <code>false</code>.
			   * @param bShowMarker New value for property <code>showMarker</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowMarker(bShowMarker: boolean): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Sets a new value for property <code>showSeparator</code>.If set to true, a separator is displayed
			   * after the item.When called with a value of <code>null</code> or <code>undefined</code>, the default
			   * value of the property will be restored.Default value is <code>true</code>.
			   * @since 1.22.5
			   * @param bShowSeparator New value for property <code>showSeparator</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowSeparator(bShowSeparator: boolean): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Sets a new value for property <code>startsSection</code>.If set to true, a divider is displayed
			   * before the item.When called with a value of <code>null</code> or <code>undefined</code>, the default
			   * value of the property will be restored.Default value is <code>false</code>.
			   * @param bStartsSection New value for property <code>startsSection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStartsSection(bStartsSection: boolean): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Sets a new value for property <code>toggleEnabled</code>.If set to true, the item represents a
			   * toggle button. The <code>selected</code> property can the be used todefine the toggle state.
			   * Otherwise the item is displayed as action button. In this case the <code>selected</code> propertyis
			   * ignored.When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.Default value is <code>true</code>.
			   * @since 1.34.3
			   * @param bToggleEnabled New value for property <code>toggleEnabled</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setToggleEnabled(bToggleEnabled: boolean): sap.ui.unified.ShellHeadItem;
	  
			  /**
			   * Sets a new value for property <code>visible</code>.Invisible items are not shown on the UI.When
			   * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
			   * property will be restored.Default value is <code>true</code>.
			   * @since 1.18
			   * @param bVisible New value for property <code>visible</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setVisible(bVisible: boolean): sap.ui.unified.ShellHeadItem;
			}
			/**
			 * A legend for the Calendar Control. Displays special dates colors with their corresponding
			 * description. The aggregation specialDates can be set herefor.
			 * @resource sap/ui/unified/CalendarLegend.js
			*/
			export class CalendarLegend extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new CalendarLegend.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some item to the aggregation <code>items</code>.
			   * @param oItem the item to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addItem(oItem: sap.ui.unified.CalendarLegendItem): sap.ui.unified.CalendarLegend;
	  
			  /**
			   * Destroys all the items in the aggregation <code>items</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyItems(): sap.ui.unified.CalendarLegend;
	  
	  
			  /**
			   * Gets current value of property <code>columnWidth</code>.Width of the columns created in which the
			   * items are arranged.Default value is <code>120px</code>.
			   * @returns Value of property <code>columnWidth</code>
			  */
			  getColumnWidth(): any;
	  
			  /**
			   * Gets content of aggregation <code>items</code>.Items to be displayed.
			  */
			  getItems(): sap.ui.unified.CalendarLegendItem[];
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.CalendarLegend.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.CalendarLegendItem</code> in the aggregation
			   * <code>items</code>.and returns its index if found or -1 otherwise.
			   * @param oItem The item whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfItem(oItem: sap.ui.unified.CalendarLegendItem): number;
	  
			  /**
			   * Inserts a item into the aggregation <code>items</code>.
			   * @param oItem the item to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the item should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the item is inserted at position 0; for a value            
			   * greater than the current size of the aggregation, the item is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertItem(oItem: sap.ui.unified.CalendarLegendItem, iIndex: number): sap.ui.unified.CalendarLegend;
	  
			  /**
			   * Removes all the controls from the aggregation <code>items</code>.Additionally, it unregisters them
			   * from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllItems(): sap.ui.unified.CalendarLegendItem[];
	  
			  /**
			   * Removes a item from the aggregation <code>items</code>.
			   * @param vItem The item to remove or its index or id
			   * @returns The removed item or <code>null</code>
			  */
			  removeItem(vItem: number | string | sap.ui.unified.CalendarLegendItem): sap.ui.unified.CalendarLegendItem;
	  
			  /**
			   * Sets a new value for property <code>columnWidth</code>.Width of the columns created in which the
			   * items are arranged.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.Default value is <code>120px</code>.
			   * @param sColumnWidth New value for property <code>columnWidth</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setColumnWidth(sColumnWidth: any): sap.ui.unified.CalendarLegend;
			}
			/**
			 * Provides a main content and a secondary content area
			 * @resource sap/ui/unified/SplitContainer.js
			*/
			export class SplitContainer extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new SplitContainer.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some content to the aggregation <code>content</code>.
			   * @param oContent the content to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addContent(oContent: sap.ui.core.Control): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Adds some secondaryContent to the aggregation <code>secondaryContent</code>.
			   * @param oSecondaryContent the secondaryContent to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addSecondaryContent(oSecondaryContent: sap.ui.core.Control): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Destroys all the content in the aggregation <code>content</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyContent(): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Destroys all the secondaryContent in the aggregation <code>secondaryContent</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySecondaryContent(): sap.ui.unified.SplitContainer;
	  
	  
			  /**
			   * Gets content of aggregation <code>content</code>.The content to appear in the main area.
			  */
			  getContent(): sap.ui.core.Control[];
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.SplitContainer.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>orientation</code>.Whether to show the secondary content on the
			   * left ("Horizontal", default) or on the top ("Vertical").Default value is <code>Horizontal</code>.
			   * @since 1.22.0
			   * @returns Value of property <code>orientation</code>
			  */
			  getOrientation(): sap.ui.core.Orientation;
	  
			  /**
			   * Gets content of aggregation <code>secondaryContent</code>.The content to appear in the secondary
			   * area.
			  */
			  getSecondaryContent(): sap.ui.core.Control[];
	  
			  /**
			   * Gets current value of property <code>secondaryContentSize</code>.The width if the secondary content.
			   * The height is always 100%.Default value is <code>250px</code>.
			   * @returns Value of property <code>secondaryContentSize</code>
			  */
			  getSecondaryContentSize(): any;
	  
			  /**
			   * Gets current value of property <code>secondaryContentWidth</code>.Do not use. Use
			   * secondaryContentSize instead.Default value is <code>250px</code>.
			   * @returns Value of property <code>secondaryContentWidth</code>
			  */
			  getSecondaryContentWidth(): any;
	  
			  /**
			   * Gets current value of property <code>showSecondaryContent</code>.Shows / Hides the secondary area.
			   * @returns Value of property <code>showSecondaryContent</code>
			  */
			  getShowSecondaryContent(): boolean;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.and
			   * returns its index if found or -1 otherwise.
			   * @param oContent The content whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfContent(oContent: sap.ui.core.Control): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
			   * <code>secondaryContent</code>.and returns its index if found or -1 otherwise.
			   * @param oSecondaryContent The secondaryContent whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfSecondaryContent(oSecondaryContent: sap.ui.core.Control): number;
	  
			  /**
			   * Inserts a content into the aggregation <code>content</code>.
			   * @param oContent the content to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the content should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the content is inserted at position 0; for a value           
			   *  greater than the current size of the aggregation, the content is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Inserts a secondaryContent into the aggregation <code>secondaryContent</code>.
			   * @param oSecondaryContent the secondaryContent to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the secondaryContent should be inserted at; for        
			   *     a negative value of <code>iIndex</code>, the secondaryContent is inserted at position 0; for a
			   * value             greater than the current size of the aggregation, the secondaryContent is inserted
			   * at             the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertSecondaryContent(oSecondaryContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
			   * from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllContent(): sap.ui.core.Control[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>secondaryContent</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllSecondaryContent(): sap.ui.core.Control[];
	  
			  /**
			   * Removes a content from the aggregation <code>content</code>.
			   * @param vContent The content to remove or its index or id
			   * @returns The removed content or <code>null</code>
			  */
			  removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Removes a secondaryContent from the aggregation <code>secondaryContent</code>.
			   * @param vSecondaryContent The secondaryContent to remove or its index or id
			   * @returns The removed secondaryContent or <code>null</code>
			  */
			  removeSecondaryContent(vSecondaryContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Sets a new value for property <code>orientation</code>.Whether to show the secondary content on the
			   * left ("Horizontal", default) or on the top ("Vertical").When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>Horizontal</code>.
			   * @since 1.22.0
			   * @param sOrientation New value for property <code>orientation</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setOrientation(sOrientation: sap.ui.core.Orientation): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Sets a new value for property <code>secondaryContentSize</code>.The width if the secondary content.
			   * The height is always 100%.When called with a value of <code>null</code> or <code>undefined</code>,
			   * the default value of the property will be restored.Default value is <code>250px</code>.
			   * @param sSecondaryContentSize New value for property <code>secondaryContentSize</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSecondaryContentSize(sSecondaryContentSize: any): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Sets a new value for property <code>secondaryContentWidth</code>.Do not use. Use
			   * secondaryContentSize instead.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>250px</code>.
			   * @param sSecondaryContentWidth New value for property <code>secondaryContentWidth</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSecondaryContentWidth(sSecondaryContentWidth: any): sap.ui.unified.SplitContainer;
	  
			  /**
			   * Sets a new value for property <code>showSecondaryContent</code>.Shows / Hides the secondary
			   * area.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.
			   * @param bShowSecondaryContent New value for property <code>showSecondaryContent</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowSecondaryContent(bShowSecondaryContent: boolean): sap.ui.unified.SplitContainer;
			}
			/**
			 * Switches between two control areas and animates it via CSS transitions
			 * @resource sap/ui/unified/ContentSwitcher.js
			*/
			export class ContentSwitcher extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new ContentSwitcher.Accepts an object literal <code>mSettings</code> that defines
			   * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
			   * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
			   * object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some content1 to the aggregation <code>content1</code>.
			   * @param oContent1 the content1 to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addContent1(oContent1: sap.ui.core.Control): sap.ui.unified.ContentSwitcher;
	  
			  /**
			   * Adds some content2 to the aggregation <code>content2</code>.
			   * @param oContent2 the content2 to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addContent2(oContent2: sap.ui.core.Control): sap.ui.unified.ContentSwitcher;
	  
			  /**
			   * Destroys all the content1 in the aggregation <code>content1</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyContent1(): sap.ui.unified.ContentSwitcher;
	  
			  /**
			   * Destroys all the content2 in the aggregation <code>content2</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroyContent2(): sap.ui.unified.ContentSwitcher;
	  
	  
			  /**
			   * Gets current value of property <code>activeContent</code>.The number of the currently active content
			   * (1 or 2).Default value is <code>1</code>.
			   * @returns Value of property <code>activeContent</code>
			  */
			  getActiveContent(): number;
	  
			  /**
			   * Gets current value of property <code>animation</code>.Set the used animation when changing content.
			   * This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element
			   * of the control. The animation has to be implemented in CSS. This also enables applications to
			   * implement their own animations via CSS by reacting to the parent class.See the types
			   * sap.ui.unified.ContentSwitcherAnimation for default implementations.Default value is
			   * <code>None</code>.
			   * @returns Value of property <code>animation</code>
			  */
			  getAnimation(): string;
	  
			  /**
			   * Gets content of aggregation <code>content1</code>.The controls that should be shown in the first
			   * content
			  */
			  getContent1(): sap.ui.core.Control[];
	  
			  /**
			   * Gets content of aggregation <code>content2</code>.The controls that should be shown in the second
			   * content
			  */
			  getContent2(): sap.ui.core.Control[];
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.ContentSwitcher.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
			   * <code>content1</code>.and returns its index if found or -1 otherwise.
			   * @param oContent1 The content1 whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfContent1(oContent1: sap.ui.core.Control): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
			   * <code>content2</code>.and returns its index if found or -1 otherwise.
			   * @param oContent2 The content2 whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfContent2(oContent2: sap.ui.core.Control): number;
	  
			  /**
			   * Inserts a content1 into the aggregation <code>content1</code>.
			   * @param oContent1 the content1 to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the content1 should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the content1 is inserted at position 0; for a value          
			   *   greater than the current size of the aggregation, the content1 is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertContent1(oContent1: sap.ui.core.Control, iIndex: number): sap.ui.unified.ContentSwitcher;
	  
			  /**
			   * Inserts a content2 into the aggregation <code>content2</code>.
			   * @param oContent2 the content2 to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the content2 should be inserted at; for             a
			   * negative value of <code>iIndex</code>, the content2 is inserted at position 0; for a value          
			   *   greater than the current size of the aggregation, the content2 is inserted at             the last
			   * position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertContent2(oContent2: sap.ui.core.Control, iIndex: number): sap.ui.unified.ContentSwitcher;
	  
			  /**
			   * Removes all the controls from the aggregation <code>content1</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllContent1(): sap.ui.core.Control[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>content2</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllContent2(): sap.ui.core.Control[];
	  
			  /**
			   * Removes a content1 from the aggregation <code>content1</code>.
			   * @param vContent1 The content1 to remove or its index or id
			   * @returns The removed content1 or <code>null</code>
			  */
			  removeContent1(vContent1: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Removes a content2 from the aggregation <code>content2</code>.
			   * @param vContent2 The content2 to remove or its index or id
			   * @returns The removed content2 or <code>null</code>
			  */
			  removeContent2(vContent2: number | string | sap.ui.core.Control): sap.ui.core.Control;
	  
			  /**
			   * Sets a new value for property <code>activeContent</code>.The number of the currently active content
			   * (1 or 2).When called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.Default value is <code>1</code>.
			   * @param iActiveContent New value for property <code>activeContent</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setActiveContent(iActiveContent: number): sap.ui.unified.ContentSwitcher;
	  
			  /**
			   * Sets a new value for property <code>animation</code>.Set the used animation when changing content.
			   * This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element
			   * of the control. The animation has to be implemented in CSS. This also enables applications to
			   * implement their own animations via CSS by reacting to the parent class.See the types
			   * sap.ui.unified.ContentSwitcherAnimation for default implementations.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>None</code>.
			   * @param sAnimation New value for property <code>animation</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setAnimation(sAnimation: string): sap.ui.unified.ContentSwitcher;
	  
			  /**
			   * Changes the currently active content to the other one. If content 1 is active, content 2 willbe
			   * activated and the other way around.
			  */
			  switchContent(): void;
			}
			/**
			 * User Header Action Item of the Shell.
			 * @resource sap/ui/unified/ShellHeadUserItem.js
			*/
			export class ShellHeadUserItem extends sap.ui.core.Element {
	  
	  
			  /**
			   * Constructor for a new ShellHeadUserItem.Accepts an object literal <code>mSettings</code> that
			   * defines initialproperty values, aggregated and associated objects as well as event handlers.See
			   * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
			   * settings object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.ShellHeadUserItem;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this
			   * <code>sap.ui.unified.ShellHeadUserItem</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.ShellHeadUserItem</code> itself.Event is fired when the user presses
			   * the button.
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.ShellHeadUserItem</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachPress(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.ShellHeadUserItem;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this
			   * <code>sap.ui.unified.ShellHeadUserItem</code>.The passed function and listener object must match the
			   * ones used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachPress(fnFunction: any, oListener: any): sap.ui.unified.ShellHeadUserItem;
	  
	  
			  /**
			   * Fires event <code>press</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  firePress(mArguments: any): sap.ui.unified.ShellHeadUserItem;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets current value of property <code>image</code>.An image of the user, normally an URI to a image
			   * but also an icon from the sap.ui.core.IconPool is possible.
			   * @returns Value of property <code>image</code>
			  */
			  getImage(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.ShellHeadUserItem.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>showPopupIndicator</code>.The user item is intended to be used
			   * for user settings. Normally these settings are done via a Menu or Dialog.If this property is set to
			   * true an indicator for such a popup mechanismn is shown in the item.Default value is
			   * <code>true</code>.
			   * @since 1.27.0
			   * @returns Value of property <code>showPopupIndicator</code>
			  */
			  getShowPopupIndicator(): boolean;
	  
			  /**
			   * Gets current value of property <code>username</code>.The name of the user.Default value is
			   * <code></code>.
			   * @returns Value of property <code>username</code>
			  */
			  getUsername(): string;
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Sets a new value for property <code>image</code>.An image of the user, normally an URI to a image
			   * but also an icon from the sap.ui.core.IconPool is possible.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sImage New value for property <code>image</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setImage(sImage: any): sap.ui.unified.ShellHeadUserItem;
	  
			  /**
			   * Sets a new value for property <code>showPopupIndicator</code>.The user item is intended to be used
			   * for user settings. Normally these settings are done via a Menu or Dialog.If this property is set to
			   * true an indicator for such a popup mechanismn is shown in the item.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>true</code>.
			   * @since 1.27.0
			   * @param bShowPopupIndicator New value for property <code>showPopupIndicator</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowPopupIndicator(bShowPopupIndicator: boolean): sap.ui.unified.ShellHeadUserItem;
	  
			  /**
			   * Sets a new value for property <code>username</code>.The name of the user.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code></code>.
			   * @param sUsername New value for property <code>username</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setUsername(sUsername: string): sap.ui.unified.ShellHeadUserItem;
			}
			/**
			 * Special menu item which contains a label and a text field. This menu item is e.g. helpful for filter
			 * implementations.The aggregation <code>submenu</code> (inherited from parent class) is not supported
			 * for this type of menu item.
			 * @resource sap/ui/unified/MenuTextFieldItem.js
			*/
			export class MenuTextFieldItem extends sap.ui.unified.MenuItemBase {
	  
	  
			  /**
			   * Constructor for a new MenuTextFieldItem element.Accepts an object literal <code>mSettings</code>
			   * that defines initialproperty values, aggregated and associated objects as well as event handlers.See
			   * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
			   * settings object.
			   * @param sId Id for the new control, generated automatically if no id is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of
			   * menu item.
			   * @returns <code>this</code> to allow method chaining
			  */
			  destroySubmenu(): sap.ui.unified.MenuTextFieldItem;
	  
	  
			  /**
			   * Gets current value of property <code>icon</code>.Defines the icon of the {@link sap.ui.core.IconPool
			   * sap.ui.core.IconPool} or an image which should be displayed on the item.
			   * @returns Value of property <code>icon</code>
			  */
			  getIcon(): any;
	  
			  /**
			   * Gets current value of property <code>label</code>.Defines the label of the text field of the item.
			   * @returns Value of property <code>label</code>
			  */
			  getLabel(): string;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.MenuTextFieldItem.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of
			   * menu item.
			  */
			  getSubmenu(): sap.ui.unified.Menu;
	  
			  /**
			   * Gets current value of property <code>value</code>.Defines the value of the text field of the item.
			   * @returns Value of property <code>value</code>
			  */
			  getValue(): string;
	  
			  /**
			   * Gets current value of property <code>valueState</code>.Defines the value state of the text field of
			   * the item. This allows you to visualize e.g. warnings or errors.Default value is <code>None</code>.
			   * @returns Value of property <code>valueState</code>
			  */
			  getValueState(): sap.ui.core.ValueState;
	  
			  /**
			   * Sets a new value for property <code>icon</code>.Defines the icon of the {@link sap.ui.core.IconPool
			   * sap.ui.core.IconPool} or an image which should be displayed on the item.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sIcon New value for property <code>icon</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIcon(sIcon: any): sap.ui.unified.MenuTextFieldItem;
	  
			  /**
			   * Sets a new value for property <code>label</code>.Defines the label of the text field of the
			   * item.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.
			   * @param sLabel New value for property <code>label</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setLabel(sLabel: string): sap.ui.unified.MenuTextFieldItem;
	  
			  /**
			   * The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of
			   * menu item.
			   * @param oSubmenu undefined
			   * @returns <code>this</code> to allow method chaining
			  */
			  setSubmenu(oSubmenu: sap.ui.unified.Menu): sap.ui.unified.MenuTextFieldItem;
	  
			  /**
			   * Sets a new value for property <code>value</code>.Defines the value of the text field of the
			   * item.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.
			   * @param sValue New value for property <code>value</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setValue(sValue: string): sap.ui.unified.MenuTextFieldItem;
	  
			  /**
			   * Sets a new value for property <code>valueState</code>.Defines the value state of the text field of
			   * the item. This allows you to visualize e.g. warnings or errors.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>None</code>.
			   * @param sValueState New value for property <code>valueState</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setValueState(sValueState: sap.ui.core.ValueState): sap.ui.unified.MenuTextFieldItem;
			}
			/**
			 * Item to be displayed in a CalendarLegend.
			 * @resource sap/ui/unified/CalendarLegendItem.js
			*/
			export class CalendarLegendItem extends sap.ui.core.Element {
	  
	  
			  /**
			   * Constructor for a new CalendarLegendItem.Accepts an object literal <code>mSettings</code> that
			   * defines initialproperty values, aggregated and associated objects as well as event handlers.See
			   * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
			   * settings object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.CalendarLegendItem.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>text</code>.Text to be displayed for the item.
			   * @returns Value of property <code>text</code>
			  */
			  getText(): string;
	  
			  /**
			   * Gets current value of property <code>type</code>.Type of the item.If not set the type is
			   * automatically determined from the order of the items in the CalendarLegend.Default value is
			   * <code>None</code>.
			   * @since 1.28.9
			   * @returns Value of property <code>type</code>
			  */
			  getType(): sap.ui.unified.CalendarDayType;
	  
			  /**
			   * Sets a new value for property <code>text</code>.Text to be displayed for the item.When called with a
			   * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.
			   * @param sText New value for property <code>text</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setText(sText: string): sap.ui.unified.CalendarLegendItem;
	  
			  /**
			   * Sets a new value for property <code>type</code>.Type of the item.If not set the type is
			   * automatically determined from the order of the items in the CalendarLegend.When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>None</code>.
			   * @since 1.28.9
			   * @param sType New value for property <code>type</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setType(sType: sap.ui.unified.CalendarDayType): sap.ui.unified.CalendarLegendItem;
			}
			/**
			 * An appointment for use in a <code>PlanningCalendar</code> or similar. The rendering must be done in
			 * the Row collecting the appointments.(Because there are different visualizations
			 * possible.)Applications could inherit from this element to add own fields.
			 * @resource sap/ui/unified/CalendarAppointment.js
			*/
			export class CalendarAppointment extends sap.ui.unified.DateTypeRange {
	  
	  
			  /**
			   * Constructor for a new <code>CalendarAppointment</code>.Accepts an object literal
			   * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
			   * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
			   * of the syntax of the settings object.
			   * @param sId ID for the new control, generated automatically if no ID is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
	  
			  /**
			   * Gets current value of property <code>icon</code>.Icon of the Appointment. (e.g. picture of the
			   * person)URI of an image or an icon registered in sap.ui.core.IconPool.
			   * @returns Value of property <code>icon</code>
			  */
			  getIcon(): any;
	  
			  /**
			   * Gets current value of property <code>key</code>.Can be used as identifier of the appointment
			   * @returns Value of property <code>key</code>
			  */
			  getKey(): string;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.CalendarAppointment.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>selected</code>.Indicates if the icon is selected.Default value
			   * is <code>false</code>.
			   * @returns Value of property <code>selected</code>
			  */
			  getSelected(): boolean;
	  
			  /**
			   * Gets current value of property <code>tentative</code>.Indicates if the icon is tentative.Default
			   * value is <code>false</code>.
			   * @returns Value of property <code>tentative</code>
			  */
			  getTentative(): boolean;
	  
			  /**
			   * Gets current value of property <code>text</code>.Text of the appointment.
			   * @returns Value of property <code>text</code>
			  */
			  getText(): string;
	  
			  /**
			   * Gets current value of property <code>title</code>.Title of the appointment.
			   * @returns Value of property <code>title</code>
			  */
			  getTitle(): string;
	  
			  /**
			   * Sets a new value for property <code>icon</code>.Icon of the Appointment. (e.g. picture of the
			   * person)URI of an image or an icon registered in sap.ui.core.IconPool.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sIcon New value for property <code>icon</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIcon(sIcon: any): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Sets a new value for property <code>key</code>.Can be used as identifier of the appointmentWhen
			   * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
			   * property will be restored.
			   * @param sKey New value for property <code>key</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setKey(sKey: string): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Sets a new value for property <code>selected</code>.Indicates if the icon is selected.When called
			   * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
			   * be restored.Default value is <code>false</code>.
			   * @param bSelected New value for property <code>selected</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSelected(bSelected: boolean): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Sets a new value for property <code>tentative</code>.Indicates if the icon is tentative.When called
			   * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
			   * be restored.Default value is <code>false</code>.
			   * @param bTentative New value for property <code>tentative</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setTentative(bTentative: boolean): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Sets a new value for property <code>text</code>.Text of the appointment.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sText New value for property <code>text</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setText(sText: string): sap.ui.unified.CalendarAppointment;
	  
			  /**
			   * Sets a new value for property <code>title</code>.Title of the appointment.When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param sTitle New value for property <code>title</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setTitle(sTitle: string): sap.ui.unified.CalendarAppointment;
			}
			/**
			 * Calendar with granularity of time items displayed in one line.
			 * @resource sap/ui/unified/CalendarTimeInterval.js
			*/
			export class CalendarTimeInterval extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new <code>CalendarTimeInterval</code>.Accepts an object literal
			   * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
			   * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
			   * of the syntax of the settings object.
			   * @param sId ID for the new control, generated automatically if no ID is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Adds some selectedDate to the aggregation <code>selectedDates</code>.
			   * @param oSelectedDate the selectedDate to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Adds some specialDate to the aggregation <code>specialDates</code>.
			   * @param oSpecialDate the specialDate to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this
			   * <code>sap.ui.unified.CalendarTimeInterval</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.Time selection was cancelled
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarTimeInterval</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachCancel(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
			   * <code>sap.ui.unified.CalendarTimeInterval</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.Time selection changed
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarTimeInterval</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.CalendarTimeInterval</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.<code>startDate</code> was changed
			   * while navigation in <code>CalendarTimeInterval</code>
			   * @since 1.34.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarTimeInterval</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachStartDateChange(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Destroys all the selectedDates in the aggregation <code>selectedDates</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySelectedDates(): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Destroys all the specialDates in the aggregation <code>specialDates</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySpecialDates(): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this
			   * <code>sap.ui.unified.CalendarTimeInterval</code>.The passed function and listener object must match
			   * the ones used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachCancel(fnFunction: any, oListener: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
			   * <code>sap.ui.unified.CalendarTimeInterval</code>.The passed function and listener object must match
			   * the ones used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachSelect(fnFunction: any, oListener: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.CalendarTimeInterval</code>.The passed function and listener object must match
			   * the ones used for event registration.
			   * @since 1.34.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachStartDateChange(fnFunction: any, oListener: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Displays a item in the <code>CalendarTimeInterval</code> but doesn't set the focus.
			   * @param oDate JavaScript date object for displayed item.
			   * @returns <code>this</code> to allow method chaining
			  */
			  displayDate(oDate: any): typeof sap.ui.unified.Calendar;
	  
	  
			  /**
			   * Fires event <code>cancel</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireCancel(mArguments: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Fires event <code>select</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireSelect(mArguments: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Fires event <code>startDateChange</code> to attached listeners.
			   * @since 1.34.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireStartDateChange(mArguments: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets the focused item of the <code>CalendarTimeInterval</code>.
			   * @param oDate JavaScript date object for focused item.
			   * @returns <code>this</code> to allow method chaining
			  */
			  focusDate(oDate: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets current value of property <code>intervalMinutes</code>.Size of on time interval in minutes,
			   * default is 60 minutes.<b>Note:</b> the start of the interval calculation is always on the
			   * corresponding date at 00:00.A interval longer then 720 minutes is not allowed. Please use the
			   * <code>CalendarDateInterval</code> instead.A day must be divisible by this interval size. One
			   * interval must not include more than one day.Default value is <code>60</code>.
			   * @returns Value of property <code>intervalMinutes</code>
			  */
			  getIntervalMinutes(): number;
	  
			  /**
			   * Gets current value of property <code>intervalSelection</code>.If set, interval selection is
			   * allowedDefault value is <code>false</code>.
			   * @returns Value of property <code>intervalSelection</code>
			  */
			  getIntervalSelection(): boolean;
	  
			  /**
			   * Gets current value of property <code>items</code>.Number of time items displayed. Default is
			   * 12.<b>Note:</b> On phones, the maximum number of items displayed in the row is always 6.Default
			   * value is <code>12</code>.
			   * @returns Value of property <code>items</code>
			  */
			  getItems(): number;
	  
			  /**
			   * ID of the element which is the current target of the association <code>legend</code>, or
			   * <code>null</code>.
			   * @since 1.38.5
			  */
			  getLegend(): any;
	  
			  /**
			   * Gets current value of property <code>maxDate</code>.Maximum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>maxDate</code> is set
			   * to be before the <code>minDate</code>,the <code>minDate</code> is set to the begin of the month of
			   * the <code>maxDate</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>maxDate</code>
			  */
			  getMaxDate(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.CalendarTimeInterval.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>minDate</code>.Minimum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>minDate</code> is set
			   * to be after the <code>maxDate</code>,the <code>maxDate</code> is set to the end of the month of the
			   * <code>minDate</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>minDate</code>
			  */
			  getMinDate(): any;
	  
			  /**
			   * Gets current value of property <code>pickerPopup</code>.If set, the day-, month- and yearPicker
			   * opens on a popupDefault value is <code>false</code>.
			   * @since 1.34.0
			   * @returns Value of property <code>pickerPopup</code>
			  */
			  getPickerPopup(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>selectedDates</code>.Date ranges for selected items of the
			   * <code>CalendarTimeInterval</code>.If <code>singleSelection</code> is set, only the first entry is
			   * used.
			  */
			  getSelectedDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Gets current value of property <code>singleSelection</code>.If set, only a single date or interval,
			   * if <code>intervalSelection</code> is enabled, can be selected<b>Note:</b> Selection of multiple
			   * intervals is not supported in the current version.Default value is <code>true</code>.
			   * @returns Value of property <code>singleSelection</code>
			  */
			  getSingleSelection(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>specialDates</code>.Date ranges with type to visualize special
			   * items in the <code>CalendarTimeInterval</code>.If one interval is assigned to more than one type,
			   * only the first one will be used.
			  */
			  getSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
			  /**
			   * Gets current value of property <code>startDate</code>.Start date of the Interval as JavaScript Date
			   * object.The time interval corresponding to this Date and <code>items</code> and
			   * <code>intervalMinutes</code>will be the first time in the displayed row.
			   * @returns Value of property <code>startDate</code>
			  */
			  getStartDate(): any;
	  
			  /**
			   * Gets current value of property <code>width</code>.Width of the <code>CalendarTimeInterval</code>.
			   * The width of the single months depends on this width.
			   * @returns Value of property <code>width</code>
			  */
			  getWidth(): any;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
			   * <code>selectedDates</code>.and returns its index if found or -1 otherwise.
			   * @param oSelectedDate The selectedDate whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation
			   * <code>specialDates</code>.and returns its index if found or -1 otherwise.
			   * @param oSpecialDate The specialDate whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
	  
			  /**
			   * Inserts a selectedDate into the aggregation <code>selectedDates</code>.
			   * @param oSelectedDate the selectedDate to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the selectedDate should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value    
			   *         greater than the current size of the aggregation, the selectedDate is inserted at           
			   *  the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Inserts a specialDate into the aggregation <code>specialDates</code>.
			   * @param oSpecialDate the specialDate to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the specialDate should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value     
			   *        greater than the current size of the aggregation, the specialDate is inserted at            
			   * the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>selectedDates</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllSelectedDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>specialDates</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Removes a selectedDate from the aggregation <code>selectedDates</code>.
			   * @param vSelectedDate The selectedDate to remove or its index or id
			   * @returns The removed selectedDate or <code>null</code>
			  */
			  removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
			  /**
			   * Removes a specialDate from the aggregation <code>specialDates</code>.
			   * @param vSpecialDate The specialDate to remove or its index or id
			   * @returns The removed specialDate or <code>null</code>
			  */
			  removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
	  
			  /**
			   * Sets a new value for property <code>intervalMinutes</code>.Size of on time interval in minutes,
			   * default is 60 minutes.<b>Note:</b> the start of the interval calculation is always on the
			   * corresponding date at 00:00.A interval longer then 720 minutes is not allowed. Please use the
			   * <code>CalendarDateInterval</code> instead.A day must be divisible by this interval size. One
			   * interval must not include more than one day.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>60</code>.
			   * @param iIntervalMinutes New value for property <code>intervalMinutes</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIntervalMinutes(iIntervalMinutes: number): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>intervalSelection</code>.If set, interval selection is
			   * allowedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code>false</code>.
			   * @param bIntervalSelection New value for property <code>intervalSelection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>items</code>.Number of time items displayed. Default is
			   * 12.<b>Note:</b> On phones, the maximum number of items displayed in the row is always 6.When called
			   * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
			   * be restored.Default value is <code>12</code>.
			   * @param iItems New value for property <code>items</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setItems(iItems: number): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets the associated <code>legend</code>.
			   * @since 1.38.5
			   * @param oLegend ID of an element which becomes the new target of this legend association;
			   * alternatively, an element instance may be given
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setLegend(oLegend: any | sap.ui.unified.CalendarLegend): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>maxDate</code>.Maximum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>maxDate</code> is set
			   * to be before the <code>minDate</code>,the <code>minDate</code> is set to the begin of the month of
			   * the <code>maxDate</code>.When called with a value of <code>null</code> or <code>undefined</code>,
			   * the default value of the property will be restored.
			   * @since 1.38.0
			   * @param oMaxDate New value for property <code>maxDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMaxDate(oMaxDate: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>minDate</code>.Minimum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>minDate</code> is set
			   * to be after the <code>maxDate</code>,the <code>maxDate</code> is set to the end of the month of the
			   * <code>minDate</code>.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.
			   * @since 1.38.0
			   * @param oMinDate New value for property <code>minDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMinDate(oMinDate: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>pickerPopup</code>.If set, the day-, month- and yearPicker opens
			   * on a popupWhen called with a value of <code>null</code> or <code>undefined</code>, the default value
			   * of the property will be restored.Default value is <code>false</code>.
			   * @since 1.34.0
			   * @param bPickerPopup New value for property <code>pickerPopup</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setPickerPopup(bPickerPopup: boolean): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>singleSelection</code>.If set, only a single date or interval,
			   * if <code>intervalSelection</code> is enabled, can be selected<b>Note:</b> Selection of multiple
			   * intervals is not supported in the current version.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>true</code>.
			   * @param bSingleSelection New value for property <code>singleSelection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSingleSelection(bSingleSelection: boolean): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>startDate</code>.Start date of the Interval as JavaScript Date
			   * object.The time interval corresponding to this Date and <code>items</code> and
			   * <code>intervalMinutes</code>will be the first time in the displayed row.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param oStartDate New value for property <code>startDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStartDate(oStartDate: any): sap.ui.unified.CalendarTimeInterval;
	  
			  /**
			   * Sets a new value for property <code>width</code>.Width of the <code>CalendarTimeInterval</code>. The
			   * width of the single months depends on this width.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.
			   * @param sWidth New value for property <code>width</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setWidth(sWidth: any): sap.ui.unified.CalendarTimeInterval;
			}
			/**
			 * Calendar with dates displayed in one line.
			 * @resource sap/ui/unified/CalendarDateInterval.js
			*/
			export class CalendarDateInterval extends sap.ui.unified.Calendar {
	  
	  
			  /**
			   * Constructor for a new <code>CalendarDateInterval</code>.Accepts an object literal
			   * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
			   * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
			   * of the syntax of the settings object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
	  
			  /**
			   * Gets current value of property <code>days</code>.number of days displayedon phones the maximum
			   * rendered number of days is 8.Default value is <code>7</code>.
			   * @returns Value of property <code>days</code>
			  */
			  getDays(): number;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.CalendarDateInterval.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>pickerPopup</code>.If set, the month- and yearPicker opens on a
			   * popupDefault value is <code>false</code>.
			   * @since 1.34.0
			   * @returns Value of property <code>pickerPopup</code>
			  */
			  getPickerPopup(): boolean;
	  
			  /**
			   * Gets current value of property <code>showDayNamesLine</code>.If set the day names are shown in a
			   * separate line.If not set the day names are shown inside the single days.Default value is
			   * <code>true</code>.
			   * @since 1.34.0
			   * @returns Value of property <code>showDayNamesLine</code>
			  */
			  getShowDayNamesLine(): boolean;
	  
			  /**
			   * Sets a new value for property <code>days</code>.number of days displayedon phones the maximum
			   * rendered number of days is 8.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>7</code>.
			   * @param iDays New value for property <code>days</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setDays(iDays: number): sap.ui.unified.CalendarDateInterval;
	  
			  /**
			   * Setter for property <code>firstDayOfWeek</code>.Property <code>firstDayOfWeek</code> is not
			   * supported in <code>sap.ui.unified.CalendarDateInterval</code> control.
			   * @param iFirstDayOfWeek first day of the week
			  */
			  setFirstDayOfWeek(iFirstDayOfWeek: number): void;
	  
			  /**
			   * Setter for property <code>months</code>.Property <code>months</code> is not supported in
			   * <code>sap.ui.unified.CalendarDateInterval</code> control.
			   * @param iMonths months
			  */
			  setMonths(iMonths: number): void;
	  
			  /**
			   * Sets a new value for property <code>pickerPopup</code>.If set, the month- and yearPicker opens on a
			   * popupWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code>false</code>.
			   * @since 1.34.0
			   * @param bPickerPopup New value for property <code>pickerPopup</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setPickerPopup(bPickerPopup: boolean): sap.ui.unified.CalendarDateInterval;
	  
			  /**
			   * Sets a new value for property <code>showDayNamesLine</code>.If set the day names are shown in a
			   * separate line.If not set the day names are shown inside the single days.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>true</code>.
			   * @since 1.34.0
			   * @param bShowDayNamesLine New value for property <code>showDayNamesLine</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setShowDayNamesLine(bShowDayNamesLine: boolean): sap.ui.unified.CalendarDateInterval;
	  
			  /**
			   * Sets a new value for property <code>startDate</code>.Start date of the IntervalWhen called with a
			   * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.
			   * @param oStartDate New value for property <code>startDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStartDate(oStartDate: any): sap.ui.unified.CalendarDateInterval;
			}
			/**
			 * Calendar with granularity of months displayed in one line.<b>Note:</b> JavaScript Date objects are
			 * used to set and return the months, mark them as selected or as a special type.But the date part of
			 * the Date object is not used. If a Date object is returned the date will be set to the 1st of the
			 * corresponding month.
			 * @resource sap/ui/unified/CalendarMonthInterval.js
			*/
			export class CalendarMonthInterval extends sap.ui.core.Control {
	  
	  
			  /**
			   * Constructor for a new <code>CalendarMonthInterval</code>.Accepts an object literal
			   * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
			   * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
			   * of the syntax of the settings object.
			   * @param sId ID for the new control, generated automatically if no ID is given
			   * @param mSettings Initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
	  
			  /**
			   * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addAriaLabelledBy(vAriaLabelledBy: any | sap.ui.core.Control): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Adds some selectedDate to the aggregation <code>selectedDates</code>.
			   * @param oSelectedDate the selectedDate to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Adds some specialDate to the aggregation <code>specialDates</code>.
			   * @param oSpecialDate the specialDate to add; if empty, nothing is inserted
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this
			   * <code>sap.ui.unified.CalendarMonthInterval</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.Month selection was cancelled
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarMonthInterval</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachCancel(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this
			   * <code>sap.ui.unified.CalendarMonthInterval</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.Month selection changed
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarMonthInterval</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachSelect(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Attaches event handler <code>fnFunction</code> to the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.CalendarMonthInterval</code>.When called, the context of the event handler (its
			   * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
			   * to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.<code>startDate</code> was changed
			   * while navigation in <code>CalendarMonthInterval</code>
			   * @since 1.34.0
			   * @param oData An application-specific payload object that will be passed to the event handler along
			   * with the event object when firing the event
			   * @param fnFunction The function to be called when the event occurs
			   * @param oListener Context object to call the event handler with. Defaults to this
			   * <code>sap.ui.unified.CalendarMonthInterval</code> itself
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  attachStartDateChange(oData: any, fnFunction: any, oListener?: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Destroys all the selectedDates in the aggregation <code>selectedDates</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySelectedDates(): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Destroys all the specialDates in the aggregation <code>specialDates</code>.
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  destroySpecialDates(): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this
			   * <code>sap.ui.unified.CalendarMonthInterval</code>.The passed function and listener object must match
			   * the ones used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachCancel(fnFunction: any, oListener: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this
			   * <code>sap.ui.unified.CalendarMonthInterval</code>.The passed function and listener object must match
			   * the ones used for event registration.
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachSelect(fnFunction: any, oListener: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Detaches event handler <code>fnFunction</code> from the <code>startDateChange</code> event of this
			   * <code>sap.ui.unified.CalendarMonthInterval</code>.The passed function and listener object must match
			   * the ones used for event registration.
			   * @since 1.34.0
			   * @param fnFunction The function to be called, when the event occurs
			   * @param oListener Context object on which the given function had to be called
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  detachStartDateChange(fnFunction: any, oListener: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Displays a month in the <code>CalendarMonthInterval</code> but doesn't set the focus.
			   * @param oDate JavaScript date object for displayed date. (The month of this date will be displayed.)
			   * @returns <code>this</code> to allow method chaining
			  */
			  displayDate(oDate: any): typeof sap.ui.unified.Calendar;
	  
	  
			  /**
			   * Fires event <code>cancel</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireCancel(mArguments: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Fires event <code>select</code> to attached listeners.
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireSelect(mArguments: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Fires event <code>startDateChange</code> to attached listeners.
			   * @since 1.34.0
			   * @param mArguments The arguments to pass along with the event
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  fireStartDateChange(mArguments: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets the focused month of the <code>CalendarMonthInterval</code>.
			   * @param oDate JavaScript date object for focused date. (The month of this date will be focused.)
			   * @returns <code>this</code> to allow method chaining
			  */
			  focusDate(oDate: any): typeof sap.ui.unified.Calendar;
	  
			  /**
			   * Returns array of IDs of the elements which are the current targets of the association
			   * <code>ariaLabelledBy</code>.
			  */
			  getAriaLabelledBy(): any[];
	  
			  /**
			   * Gets current value of property <code>intervalSelection</code>.If set, interval selection is
			   * allowedDefault value is <code>false</code>.
			   * @returns Value of property <code>intervalSelection</code>
			  */
			  getIntervalSelection(): boolean;
	  
			  /**
			   * ID of the element which is the current target of the association <code>legend</code>, or
			   * <code>null</code>.
			   * @since 1.38.5
			  */
			  getLegend(): any;
	  
			  /**
			   * Gets current value of property <code>maxDate</code>.Maximum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>maxDate</code> is set
			   * to be before the <code>minDate</code>,the <code>minDate</code> is set to the begin of the month of
			   * the <code>maxDate</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>maxDate</code>
			  */
			  getMaxDate(): any;
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.CalendarMonthInterval.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>minDate</code>.Minimum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>minDate</code> is set
			   * to be after the <code>maxDate</code>,the <code>maxDate</code> is set to the end of the month of the
			   * <code>minDate</code>.
			   * @since 1.38.0
			   * @returns Value of property <code>minDate</code>
			  */
			  getMinDate(): any;
	  
			  /**
			   * Gets current value of property <code>months</code>.Number of months displayed<b>Note:</b> On phones,
			   * the maximum number of months displayed in the row is always 6.Default value is <code>12</code>.
			   * @returns Value of property <code>months</code>
			  */
			  getMonths(): number;
	  
			  /**
			   * Gets current value of property <code>pickerPopup</code>.If set, the yearPicker opens on a
			   * popupDefault value is <code>false</code>.
			   * @since 1.34.0
			   * @returns Value of property <code>pickerPopup</code>
			  */
			  getPickerPopup(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>selectedDates</code>.Date ranges for selected dates of the
			   * <code>CalendarMonthInterval</code>.If <code>singleSelection</code> is set, only the first entry is
			   * used.<b>Note:</b> Even if only one day is selected, the whole corresponding month is selected.
			  */
			  getSelectedDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Gets current value of property <code>singleSelection</code>.If set, only a single date or interval,
			   * if <code>intervalSelection</code> is enabled, can be selected<b>Note:</b> Selection of multiple
			   * intervals is not supported in the current version.Default value is <code>true</code>.
			   * @returns Value of property <code>singleSelection</code>
			  */
			  getSingleSelection(): boolean;
	  
			  /**
			   * Gets content of aggregation <code>specialDates</code>.Date ranges with type to visualize special
			   * months in the <code>CalendarMonthInterval</code>.If one day is assigned to more than one type, only
			   * the first one will be used.<b>Note:</b> Even if only one day is set as a special day, the whole
			   * corresponding month is displayed in this way.
			  */
			  getSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
			  /**
			   * Gets current value of property <code>startDate</code>.Start date of the Interval as JavaScript Date
			   * object.The month of this Date will be the first month in the displayed row.
			   * @returns Value of property <code>startDate</code>
			  */
			  getStartDate(): any;
	  
			  /**
			   * Gets current value of property <code>width</code>.Width of the <code>CalendarMonthInterval</code>.
			   * The width of the single months depends on this width.
			   * @returns Value of property <code>width</code>
			  */
			  getWidth(): any;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation
			   * <code>selectedDates</code>.and returns its index if found or -1 otherwise.
			   * @param oSelectedDate The selectedDate whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
	  
			  /**
			   * Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation
			   * <code>specialDates</code>.and returns its index if found or -1 otherwise.
			   * @param oSpecialDate The specialDate whose index is looked for
			   * @returns The index of the provided control in the aggregation if found, or -1 otherwise
			  */
			  indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
	  
			  /**
			   * Inserts a selectedDate into the aggregation <code>selectedDates</code>.
			   * @param oSelectedDate the selectedDate to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the selectedDate should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value    
			   *         greater than the current size of the aggregation, the selectedDate is inserted at           
			   *  the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Inserts a specialDate into the aggregation <code>specialDates</code>.
			   * @param oSpecialDate the specialDate to insert; if empty, nothing is inserted
			   * @param iIndex the <code>0</code>-based index the specialDate should be inserted at; for            
			   * a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value     
			   *        greater than the current size of the aggregation, the specialDate is inserted at            
			   * the last position
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Removes all the controls in the association named <code>ariaLabelledBy</code>.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllAriaLabelledBy(): any[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>selectedDates</code>.Additionally, it
			   * unregisters them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllSelectedDates(): sap.ui.unified.DateRange[];
	  
			  /**
			   * Removes all the controls from the aggregation <code>specialDates</code>.Additionally, it unregisters
			   * them from the hosting UIArea.
			   * @returns An array of the removed elements (might be empty)
			  */
			  removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
	  
			  /**
			   * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
			   * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
			   * @returns The removed ariaLabelledBy or <code>null</code>
			  */
			  removeAriaLabelledBy(vAriaLabelledBy: number | any | sap.ui.core.Control): any;
	  
			  /**
			   * Removes a selectedDate from the aggregation <code>selectedDates</code>.
			   * @param vSelectedDate The selectedDate to remove or its index or id
			   * @returns The removed selectedDate or <code>null</code>
			  */
			  removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
	  
			  /**
			   * Removes a specialDate from the aggregation <code>specialDates</code>.
			   * @param vSpecialDate The specialDate to remove or its index or id
			   * @returns The removed specialDate or <code>null</code>
			  */
			  removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
	  
			  /**
			   * Sets a new value for property <code>intervalSelection</code>.If set, interval selection is
			   * allowedWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
			   * the property will be restored.Default value is <code>false</code>.
			   * @param bIntervalSelection New value for property <code>intervalSelection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets the associated <code>legend</code>.
			   * @since 1.38.5
			   * @param oLegend ID of an element which becomes the new target of this legend association;
			   * alternatively, an element instance may be given
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setLegend(oLegend: any | sap.ui.unified.CalendarLegend): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets a new value for property <code>maxDate</code>.Maximum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>maxDate</code> is set
			   * to be before the <code>minDate</code>,the <code>minDate</code> is set to the begin of the month of
			   * the <code>maxDate</code>.When called with a value of <code>null</code> or <code>undefined</code>,
			   * the default value of the property will be restored.
			   * @since 1.38.0
			   * @param oMaxDate New value for property <code>maxDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMaxDate(oMaxDate: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets a new value for property <code>minDate</code>.Minimum date that can be shown and selected in
			   * the Calendar. This must be a JavaScript date object.<b>Note:</b> If the <code>minDate</code> is set
			   * to be after the <code>maxDate</code>,the <code>maxDate</code> is set to the end of the month of the
			   * <code>minDate</code>.When called with a value of <code>null</code> or <code>undefined</code>, the
			   * default value of the property will be restored.
			   * @since 1.38.0
			   * @param oMinDate New value for property <code>minDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMinDate(oMinDate: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets a new value for property <code>months</code>.Number of months displayed<b>Note:</b> On phones,
			   * the maximum number of months displayed in the row is always 6.When called with a value of
			   * <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.Default value is <code>12</code>.
			   * @param iMonths New value for property <code>months</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setMonths(iMonths: number): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets a new value for property <code>pickerPopup</code>.If set, the yearPicker opens on a popupWhen
			   * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
			   * property will be restored.Default value is <code>false</code>.
			   * @since 1.34.0
			   * @param bPickerPopup New value for property <code>pickerPopup</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setPickerPopup(bPickerPopup: boolean): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets a new value for property <code>singleSelection</code>.If set, only a single date or interval,
			   * if <code>intervalSelection</code> is enabled, can be selected<b>Note:</b> Selection of multiple
			   * intervals is not supported in the current version.When called with a value of <code>null</code> or
			   * <code>undefined</code>, the default value of the property will be restored.Default value is
			   * <code>true</code>.
			   * @param bSingleSelection New value for property <code>singleSelection</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setSingleSelection(bSingleSelection: boolean): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets a new value for property <code>startDate</code>.Start date of the Interval as JavaScript Date
			   * object.The month of this Date will be the first month in the displayed row.When called with a value
			   * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
			   * @param oStartDate New value for property <code>startDate</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setStartDate(oStartDate: any): sap.ui.unified.CalendarMonthInterval;
	  
			  /**
			   * Sets a new value for property <code>width</code>.Width of the <code>CalendarMonthInterval</code>.
			   * The width of the single months depends on this width.When called with a value of <code>null</code>
			   * or <code>undefined</code>, the default value of the property will be restored.
			   * @param sWidth New value for property <code>width</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setWidth(sWidth: any): sap.ui.unified.CalendarMonthInterval;
			}
			/**
			 * Represents a parameter for the FileUploader which is rendered as a hidden inputfield.
			 * @resource sap/ui/unified/FileUploaderParameter.js
			*/
			export class FileUploaderParameter extends sap.ui.core.Element {
	  
	  
			  /**
			   * Constructor for a new FileUploaderParameter.Accepts an object literal <code>mSettings</code> that
			   * defines initialproperty values, aggregated and associated objects as well as event handlers.See
			   * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
			   * settings object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(sId: string, mSettings?: any);
	  
	  
			  /**
			   * Constructor for a new FileUploaderParameter.Accepts an object literal <code>mSettings</code> that
			   * defines initialproperty values, aggregated and associated objects as well as event handlers.See
			   * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
			   * settings object.
			   * @param sId id for the new control, generated automatically if no id is given
			   * @param mSettings initial settings for the new control
			  */
			  constructor(mSettings?: any);
	  
			  /**
			   * Returns a metadata object for class sap.ui.unified.FileUploaderParameter.
			   * @returns Metadata object describing this class
			  */
			  getMetadata(): sap.ui.base.Metadata;
	  
			  /**
			   * Gets current value of property <code>name</code>.The name of the hidden inputfield.
			   * @since 1.12.2
			   * @returns Value of property <code>name</code>
			  */
			  getName(): string;
	  
			  /**
			   * Gets current value of property <code>value</code>.The value of the hidden inputfield.
			   * @since 1.12.2
			   * @returns Value of property <code>value</code>
			  */
			  getValue(): string;
	  
			  /**
			   * Sets a new value for property <code>name</code>.The name of the hidden inputfield.When called with a
			   * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.
			   * @since 1.12.2
			   * @param sName New value for property <code>name</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setName(sName: string): sap.ui.unified.FileUploaderParameter;
	  
			  /**
			   * Sets a new value for property <code>value</code>.The value of the hidden inputfield.When called with
			   * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
			   * restored.
			   * @since 1.12.2
			   * @param sValue New value for property <code>value</code>
			   * @returns Reference to <code>this</code> in order to allow method chaining
			  */
			  setValue(sValue: string): sap.ui.unified.FileUploaderParameter;
			}
			/**
			 * Type of a calendar day used for visualization.
			*/
			enum CalendarDayType {
			  "None",
			  "Type01",
			  "Type02",
			  "Type03",
			  "Type04",
			  "Type05",
			  "Type06",
			  "Type07",
			  "Type08",
			  "Type09",
			  "Type10"
			}
			/**
			 * Type of a interval in a <code>CalendarRow</code>.
			*/
			enum CalendarIntervalType {
			  "Day",
			  "Hour",
			  "Month"
			}
			/**
			 * Predefined animations for the ContentSwitcher
			*/
			enum ContentSwitcherAnimation {
			  "Fade",
			  "None",
			  "Rotate",
			  "SlideOver",
			  "SlideRight",
			  "ZoomIn",
			  "ZoomOut"
			}
			/**
			 * Visualisation of an <code>CalendarAppoinment</code> in a <code>CalendarRow</code>.
			*/
			enum CalendarAppointmentVisualization {
			  "Filled",
			  "Standard"
			}
		  }
	}
}