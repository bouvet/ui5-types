/// <reference path="../../core/index.d.ts" />

declare namespace sap {
	namespace ui {
		namespace layout {
			namespace form {
				namespace GridElementCells {}

				interface FormAggregations {
					formContainers?: FormContainer[];
					layout?: FormLayout;
					title?: sap.ui.core.Title | string;
					toolbar?: sap.ui.core.Toolbar;
				}

				interface FormProperties extends sap.ui.core.ControlProperties {
					editable?: boolean;
				}

				type FormSettings = FormAggregations | FormProperties;
				/**
				 * Form control.A <code>Form</code> is structured into <code>FormContainers</code>. Each
				 * <code>FormContainer</code> consists of <code>FormElements</code>.The <code>FormElements</code>
				 * consists of a label and the form fields.A <code>Form</code> doesn't render its content by itself.
				 * The rendering is done by the assigned <code>FormLayout</code>.This is so that the rendering can be
				 * adopted to new UI requirements without changing the Form itself.For the content of a
				 * <code>Form</code>, <code>VariantLayoutData</code> are supported to allow simple switching of the
				 * <code>FormLayout</code>.<code>LayoutData</code> on the content can be used to overwrite the default
				 * layout of the code>Form</code>.<b>Note:</b> Do not put any layout controls into the
				 * <code>FormElements</code>. This could destroy the visual layout,keyboard support and screen-reader
				 * support.
				 * @resource sap/ui/layout/form/Form.js
				 */
				export class Form extends sap.ui.core.Control<FormProperties> {
					/**
					 * Constructor for a new sap.ui.layout.form.Form.Accepts an object literal <code>mSettings</code> that
					 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId?: string, mSettings?: FormSettings);
					constructor(mSettings?: FormSettings);

					/**
					 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
					 * @since 1.28.0
					 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addAriaLabelledBy(
						vAriaLabelledBy: any | sap.ui.core.Control
					): sap.ui.layout.form.Form;

					/**
					 * Adds some formContainer to the aggregation <code>formContainers</code>.
					 * @param oFormContainer the formContainer to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addFormContainer(
						oFormContainer: sap.ui.layout.form.FormContainer
					): sap.ui.layout.form.Form;

					/**
					 * Destroys all the formContainers in the aggregation <code>formContainers</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyFormContainers(): sap.ui.layout.form.Form;

					/**
					 * Destroys the layout in the aggregation <code>layout</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyLayout(): sap.ui.layout.form.Form;

					/**
					 * Destroys the title in the aggregation <code>title</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyTitle(): sap.ui.layout.form.Form;

					/**
					 * Destroys the toolbar in the aggregation <code>toolbar</code>.
					 * @since 1.36.0
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyToolbar(): sap.ui.layout.form.Form;

					/**
					 * Returns array of IDs of the elements which are the current targets of the association
					 * <code>ariaLabelledBy</code>.
					 * @since 1.28.0
					 */
					getAriaLabelledBy(): any[];

					/**
					 * Gets current value of property <code>editable</code>.Applies a device and theme specific line-height
					 * to the form rows if the form has editable content.If set, all (not only the editable) rows of the
					 * form will get the line height of editable fields.The accessibility aria-readonly attribute is set
					 * according to this property.<b>Note:</b> The setting of the property has no influence on the editable
					 * functionality of the form's content.Default value is <code>false</code>.
					 * @since 1.20.0
					 * @returns Value of property <code>editable</code>
					 */
					getEditable(): boolean;

					/**
					 * Gets content of aggregation <code>formContainers</code>.Containers with the content of the form. A
					 * <code>FormContainer</code> represents a group inside the <code>Form</code>.
					 */
					getFormContainers(): sap.ui.layout.form.FormContainer[];

					/**
					 * Gets content of aggregation <code>layout</code>.Layout of the <code>Form</code>. The assigned
					 * <code>Layout</code> renders the <code>Form</code>.We suggest using the
					 * <code>ResponsiveGridLayout</code> for rendering a <code>Form</code>, as its responsiveness allows
					 * the available space to be used in the best way possible.
					 */
					getLayout(): sap.ui.layout.form.FormLayout;

					/**
					 * Returns a metadata object for class sap.ui.layout.form.Form.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets content of aggregation <code>title</code>.Title of the <code>Form</code>. Can either be a
					 * <code>Title</code> object, or a string.If a <code>Title</code> object it used, the style of the
					 * title can be set.<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
					 */
					getTitle(): sap.ui.core.Title | string;

					/**
					 * Gets content of aggregation <code>toolbar</code>.Toolbar of the <code>Form</code>.<b>Note:</b> If a
					 * <code>Toolbar</code> is used, the <code>Title</code> is ignored.If a title is needed inside the
					 * <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.In this case add the
					 * <code>Title</code> to the <code>ariaLabelledBy</code> association.
					 * @since 1.36.0
					 */
					getToolbar(): sap.ui.core.Toolbar;

					/**
					 * Gets current value of property <code>width</code>.Width of the <code>Form</code>.
					 * @returns Value of property <code>width</code>
					 */
					getWidth(): any;

					/**
					 * Checks for the provided <code>sap.ui.layout.form.FormContainer</code> in the aggregation
					 * <code>formContainers</code>.and returns its index if found or -1 otherwise.
					 * @param oFormContainer The formContainer whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfFormContainer(
						oFormContainer: sap.ui.layout.form.FormContainer
					): number;

					/**
					 * Inserts a formContainer into the aggregation <code>formContainers</code>.
					 * @param oFormContainer the formContainer to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the formContainer should be inserted at; for
					 *  a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value
					 *           greater than the current size of the aggregation, the formContainer is inserted at
					 *     the last position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertFormContainer(
						oFormContainer: sap.ui.layout.form.FormContainer,
						iIndex: number
					): sap.ui.layout.form.Form;

					/**
					 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
					 * @since 1.28.0
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllAriaLabelledBy(): any[];

					/**
					 * Removes all the controls from the aggregation <code>formContainers</code>.Additionally, it
					 * unregisters them from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllFormContainers(): sap.ui.layout.form.FormContainer[];

					/**
					 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
					 * @since 1.28.0
					 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
					 * @returns The removed ariaLabelledBy or <code>null</code>
					 */
					removeAriaLabelledBy(
						vAriaLabelledBy: number | any | sap.ui.core.Control
					): any;

					/**
					 * Removes a formContainer from the aggregation <code>formContainers</code>.
					 * @param vFormContainer The formContainer to remove or its index or id
					 * @returns The removed formContainer or <code>null</code>
					 */
					removeFormContainer(
						vFormContainer: number | string | sap.ui.layout.form.FormContainer
					): sap.ui.layout.form.FormContainer;

					/**
					 * Sets a new value for property <code>editable</code>.Applies a device and theme specific line-height
					 * to the form rows if the form has editable content.If set, all (not only the editable) rows of the
					 * form will get the line height of editable fields.The accessibility aria-readonly attribute is set
					 * according to this property.<b>Note:</b> The setting of the property has no influence on the editable
					 * functionality of the form's content.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>false</code>.
					 * @since 1.20.0
					 * @param bEditable New value for property <code>editable</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEditable(bEditable: boolean): sap.ui.layout.form.Form;

					/**
					 * Sets the aggregated <code>layout</code>.
					 * @param oLayout The layout to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLayout(
						oLayout: sap.ui.layout.form.FormLayout
					): sap.ui.layout.form.Form;

					/**
					 * Sets the aggregated <code>title</code>.
					 * @param vTitle The title to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setTitle(vTitle: sap.ui.core.Title | string): sap.ui.layout.form.Form;

					/**
					 * Sets the aggregated <code>toolbar</code>.
					 * @since 1.36.0
					 * @param oToolbar The toolbar to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setToolbar(oToolbar: sap.ui.core.Toolbar): sap.ui.layout.form.Form;

					/**
					 * Sets a new value for property <code>width</code>.Width of the <code>Form</code>.When called with a
					 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.
					 * @param sWidth New value for property <code>width</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setWidth(sWidth: any): sap.ui.layout.form.Form;
				}
				/**
				 * The <code>SimpleForm</code> provides an easy-to-use API to create simple forms.Inside a
				 * <code>SimpleForm</code>, a <code>Form</code> control is created along with its
				 * <code>FormContainers</code> and <code>FormElements</code>, but the complexity in the API is
				 * removed.<ul><li>A new title starts a new group (<code>FormContainer</code>) in the form.</li><li>A
				 * new label starts a new row (<code>FormElement</code>) in the form.</li><li>All other controls will
				 * be assigned to the row (<code>FormElement</code>) started with the last label.</li></ul>Use
				 * <code>LayoutData</code> to influence the layout for special cases in the Input/Display
				 * controls.<b>Note:</b> If a more complex form is needed, use <code>Form</code> instead.
				 * @resource sap/ui/layout/form/SimpleForm.js
				 */
				export class SimpleForm extends sap.ui.core.Control {
					/**
					 * Constructor for a new sap.ui.layout.form.SimpleForm.Accepts an object literal <code>mSettings</code>
					 * that defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId ID for the new control, generated automatically if no ID is given
					 * @param mSettings Initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
					 * @since 1.32.0
					 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addAriaLabelledBy(
						vAriaLabelledBy: any | sap.ui.core.Control
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Adds some content to the aggregation <code>content</code>.
					 * @param oContent the content to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addContent(
						oContent: sap.ui.core.Element
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Destroys all the content in the aggregation <code>content</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyContent(): sap.ui.layout.form.SimpleForm;

					/**
					 * Destroys the title in the aggregation <code>title</code>.
					 * @since 1.16.3
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyTitle(): sap.ui.layout.form.SimpleForm;

					/**
					 * Destroys the toolbar in the aggregation <code>toolbar</code>.
					 * @since 1.36.0
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyToolbar(): sap.ui.layout.form.SimpleForm;

					/**
					 * Gets current value of property <code>adjustLabelSpan</code>.If set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of
					 * <code>FormContainers</code> in one row.If only one <code>FormContainer</code> is displayed in one
					 * row, <code>labelSpanM</code> is used to define the size of the label.This is the same for medium and
					 * large <code>Forms</code>.This is done to align the labels on forms where full-size
					 * <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>(because
					 * every <code>FormContainer</code> has its own grid inside).If not set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.The
					 * number of <code>FormContainers</code> doesn't matter in this case.<b>Note:</b> This property is only
					 * used if a <code>ResponsiveGridLayout</code> is used as a layout.Default value is <code>true</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>adjustLabelSpan</code>
					 */
					getAdjustLabelSpan(): boolean;

					/**
					 * Returns array of IDs of the elements which are the current targets of the association
					 * <code>ariaLabelledBy</code>.
					 * @since 1.32.0
					 */
					getAriaLabelledBy(): any[];

					/**
					 * Gets current value of property <code>backgroundDesign</code>.Specifies the background color of the
					 * <code>SimpleForm</code> content.The visualization of the different options depends on the used
					 * theme.Default value is <code>Translucent</code>.
					 * @since 1.36.0
					 * @returns Value of property <code>backgroundDesign</code>
					 */
					getBackgroundDesign(): sap.ui.layout.BackgroundDesign;

					/**
					 * Gets current value of property <code>breakpointL</code>.Breakpoint between Medium size and Large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.Default value is <code>1024</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>breakpointL</code>
					 */
					getBreakpointL(): number;

					/**
					 * Gets current value of property <code>breakpointM</code>.Breakpoint between Small size and Medium
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.Default value is <code>600</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>breakpointM</code>
					 */
					getBreakpointM(): number;

					/**
					 * Gets current value of property <code>breakpointXL</code>.Breakpoint between Medium size and Large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.Default value is <code>1440</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>breakpointXL</code>
					 */
					getBreakpointXL(): number;

					/**
					 * Gets current value of property <code>columnsL</code>.Form columns for large size.The number of
					 * columns for large size must not be smaller than the number of columns for medium size.<b>Note:</b>
					 * This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.Default value
					 * is <code>2</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>columnsL</code>
					 */
					getColumnsL(): number;

					/**
					 * Gets current value of property <code>columnsM</code>.Form columns for medium size.<b>Note:</b> This
					 * property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.Default value is
					 * <code>1</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>columnsM</code>
					 */
					getColumnsM(): number;

					/**
					 * Gets current value of property <code>columnsXL</code>.Form columns for extra large size.The number
					 * of columns for extra large size must not be smaller than the number of columns for large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.If the default value -1 is not overwritten with the meaningful one then the
					 * <code>columnsL</code> value is used (from the backward compatibility reasons).Default value is
					 * <code>-1</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>columnsXL</code>
					 */
					getColumnsXL(): number;

					/**
					 * Gets content of aggregation <code>content</code>.The content of the form is structured in the
					 * following way:<ul><li>Add a <code>Title</code> or <code>Toolbar</code> control to start a new group
					 * (<code>FormContainer</code>).</li><li>Add a <code>Label</code> control to start a new row
					 * (<code>FormElement</code>).</li><li>Add controls as input fields, text fields or other as
					 * needed.</li><li>Use <code>LayoutData</code> to influence the layout for special cases in the single
					 * controls.For example, if a <code>ResponsiveLayout</code> is used as a layout, the form content is
					 * weighted using weight 3 for the labels and weight 5 for the fields part. By default the label column
					 * is 192 pixels wide.If your input controls should influence their width, you can add
					 * <code>sap.ui.layout.ResponsiveFlowLayoutData</code> to them via <code>setLayoutData</code>
					 * method.Ensure that the sum of the weights in the <code>ResponsiveFlowLayoutData</code> is not more
					 * than 5, as this is the total width of the input control part of each form row.</li></ul>Example for
					 * a row where the <code>TextField</code> takes 4 and the <code>TextView</code> takes 1 weight (using
					 * <code>ResponsiveLayout</code>):<pre>new sap.ui.commons.Label({text:"Label"});new
					 * sap.ui.commons.TextField({value:"Weight 4",layoutData:new
					 * sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),new sap.ui.commons.TextView({text:"Weight
					 * 1",layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),</pre><b>Note:</b> Do not
					 * put any layout controls in here. This could destroy the visual layout,keyboard support and
					 * screen-reader support.
					 */
					getContent(): sap.ui.core.Element[];

					/**
					 * Gets current value of property <code>editable</code>.Applies a device-specific and theme-specific
					 * line-height to the form rows if the form has editable content.If set, all (not only the editable)
					 * rows of the form will get the line height of editable fields.The accessibility aria-readonly
					 * attribute is set according to this property.<b>Note:</b> The setting of the property has no
					 * influence on the editable functionality of the form's content.
					 * @returns Value of property <code>editable</code>
					 */
					getEditable(): boolean;

					/**
					 * Gets current value of property <code>emptySpanL</code>.Number of grid cells that are empty at the
					 * end of each line on large size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>emptySpanL</code>
					 */
					getEmptySpanL(): number;

					/**
					 * Gets current value of property <code>emptySpanM</code>.Number of grid cells that are empty at the
					 * end of each line on medium size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>emptySpanM</code>
					 */
					getEmptySpanM(): number;

					/**
					 * Gets current value of property <code>emptySpanS</code>.Number of grid cells that are empty at the
					 * end of each line on small size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>emptySpanS</code>
					 */
					getEmptySpanS(): number;

					/**
					 * Gets current value of property <code>emptySpanXL</code>.Number of grid cells that are empty at the
					 * end of each line on extra large size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten
					 * with the meaningful one then the <code>emptySpanL</code> value is used (from the backward
					 * compatibility reasons).Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>emptySpanXL</code>
					 */
					getEmptySpanXL(): number;

					/**
					 * Gets current value of property <code>labelMinWidth</code>.Specifies the min-width in pixels of the
					 * label in all form containers.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveLayout</code> is used as a layout.Default value is <code>192</code>.
					 * @returns Value of property <code>labelMinWidth</code>
					 */
					getLabelMinWidth(): number;

					/**
					 * Gets current value of property <code>labelSpanL</code>.Default span for labels in large
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more
					 * than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the
					 * line, then the <code>labelSpanM</code> value is used.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.Default value is <code>4</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>labelSpanL</code>
					 */
					getLabelSpanL(): number;

					/**
					 * Gets current value of property <code>labelSpanM</code>.Default span for labels in medium
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is used for full-size
					 * <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line,
					 * <code>labelSpanL</code> is used.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.Default value is <code>2</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>labelSpanM</code>
					 */
					getLabelSpanM(): number;

					/**
					 * Gets current value of property <code>labelSpanS</code>.Default span for labels in small
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.Default value is <code>12</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>labelSpanS</code>
					 */
					getLabelSpanS(): number;

					/**
					 * Gets current value of property <code>labelSpanXL</code>.Default span for labels in extra large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout. If the default value -1 is not overwritten with the meaningful one then the
					 * <code>labelSpanL</code> value is used (from the backward compatibility reasons).Default value is
					 * <code>-1</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>labelSpanXL</code>
					 */
					getLabelSpanXL(): number;

					/**
					 * Gets current value of property <code>layout</code>.The <code>FormLayout</code> that is used to
					 * render the <code>SimpleForm</code>.We suggest using the <code>ResponsiveGridLayout</code> for
					 * rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way
					 * possible.Default value is <code>ResponsiveLayout</code>.
					 * @returns Value of property <code>layout</code>
					 */
					getLayout(): sap.ui.layout.form.SimpleFormLayout;

					/**
					 * Gets current value of property <code>maxContainerCols</code>.The maximum amount of groups
					 * (<code>FormContainers</code>) per row that is used before a new row is started.<b>Note:</b> If a
					 * <code>ResponsiveGridLayout</code> is used as a layout, this property is not used. Please use the
					 * properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.Default value is
					 * <code>2</code>.
					 * @returns Value of property <code>maxContainerCols</code>
					 */
					getMaxContainerCols(): number;

					/**
					 * Returns a metadata object for class sap.ui.layout.form.SimpleForm.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>minWidth</code>.The overall minimum width in pixels that is
					 * used for the <code>SimpleForm</code>. If the available width is below the given minWidth the
					 * SimpleForm will create a new row for the next group (<code>FormContainer</code>).The default value
					 * is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until maxCols is
					 * reached, irrespective of whether a maxWidth is reached or the available parents width is
					 * reached.<b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a
					 * layout.Default value is <code>-1</code>.
					 * @returns Value of property <code>minWidth</code>
					 */
					getMinWidth(): number;

					/**
					 * Gets current value of property <code>singleContainerFullSize</code>.If the <code>Form</code>
					 * contains only one single <code>FormContainer</code> and this property is set,the
					 * <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.In this case
					 * the properties <code>columnsL</code> and <code>columnsM</code> are ignored.In all other cases the
					 * <code>FormContainer</code> is displayed in the size of one column.<b>Note:</b> This property is only
					 * used if a <code>ResponsiveGridLayout</code> is used as a layout.Default value is <code>true</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>singleContainerFullSize</code>
					 */
					getSingleContainerFullSize(): boolean;

					/**
					 * Gets content of aggregation <code>title</code>.Title element of the <code>SimpleForm</code>. Can
					 * either be a <code>Title</code> control, or a string.
					 * @since 1.16.3
					 */
					getTitle(): sap.ui.core.Title | string;

					/**
					 * Gets content of aggregation <code>toolbar</code>.Toolbar of the <code>SimpleForm</code>.<b>Note:</b>
					 * If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.If a title is needed inside the
					 * <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.In this case add the
					 * <code>Title</code> to the <code>ariaLabelledBy</code> association.
					 * @since 1.36.0
					 */
					getToolbar(): sap.ui.core.Toolbar;

					/**
					 * Gets current value of property <code>width</code>.Width of the form.
					 * @since 1.28.0
					 * @returns Value of property <code>width</code>
					 */
					getWidth(): any;

					/**
					 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation <code>content</code>.and
					 * returns its index if found or -1 otherwise.
					 * @param oContent The content whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfContent(oContent: sap.ui.core.Element): number;

					/**
					 * Inserts a content into the aggregation <code>content</code>.
					 * @param oContent the content to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the content should be inserted at; for             a
					 * negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
					 *  greater than the current size of the aggregation, the content is inserted at             the last
					 * position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertContent(
						oContent: sap.ui.core.Element,
						iIndex: number
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
					 * @since 1.32.0
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllAriaLabelledBy(): any[];

					/**
					 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
					 * from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllContent(): sap.ui.core.Element[];

					/**
					 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
					 * @since 1.32.0
					 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
					 * @returns The removed ariaLabelledBy or <code>null</code>
					 */
					removeAriaLabelledBy(
						vAriaLabelledBy: number | any | sap.ui.core.Control
					): any;

					/**
					 * Removes a content from the aggregation <code>content</code>.
					 * @param vContent The content to remove or its index or id
					 * @returns The removed content or <code>null</code>
					 */
					removeContent(
						vContent: number | string | sap.ui.core.Element
					): sap.ui.core.Element;

					/**
					 * Sets a new value for property <code>adjustLabelSpan</code>.If set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of
					 * <code>FormContainers</code> in one row.If only one <code>FormContainer</code> is displayed in one
					 * row, <code>labelSpanM</code> is used to define the size of the label.This is the same for medium and
					 * large <code>Forms</code>.This is done to align the labels on forms where full-size
					 * <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>(because
					 * every <code>FormContainer</code> has its own grid inside).If not set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.The
					 * number of <code>FormContainers</code> doesn't matter in this case.<b>Note:</b> This property is only
					 * used if a <code>ResponsiveGridLayout</code> is used as a layout.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>true</code>.
					 * @since 1.34.0
					 * @param bAdjustLabelSpan New value for property <code>adjustLabelSpan</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setAdjustLabelSpan(
						bAdjustLabelSpan: boolean
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>backgroundDesign</code>.Specifies the background color of the
					 * <code>SimpleForm</code> content.The visualization of the different options depends on the used
					 * theme.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
					 * the property will be restored.Default value is <code>Translucent</code>.
					 * @since 1.36.0
					 * @param sBackgroundDesign New value for property <code>backgroundDesign</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBackgroundDesign(
						sBackgroundDesign: sap.ui.layout.BackgroundDesign
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>breakpointL</code>.Breakpoint between Medium size and Large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
					 * the property will be restored.Default value is <code>1024</code>.
					 * @since 1.16.3
					 * @param iBreakpointL New value for property <code>breakpointL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBreakpointL(iBreakpointL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>breakpointM</code>.Breakpoint between Small size and Medium
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
					 * the property will be restored.Default value is <code>600</code>.
					 * @since 1.16.3
					 * @param iBreakpointM New value for property <code>breakpointM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBreakpointM(iBreakpointM: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>breakpointXL</code>.Breakpoint between Medium size and Large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
					 * the property will be restored.Default value is <code>1440</code>.
					 * @since 1.34.0
					 * @param iBreakpointXL New value for property <code>breakpointXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBreakpointXL(iBreakpointXL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>columnsL</code>.Form columns for large size.The number of
					 * columns for large size must not be smaller than the number of columns for medium size.<b>Note:</b>
					 * This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.When called
					 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
					 * be restored.Default value is <code>2</code>.
					 * @since 1.16.3
					 * @param iColumnsL New value for property <code>columnsL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setColumnsL(iColumnsL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>columnsM</code>.Form columns for medium size.<b>Note:</b> This
					 * property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.When called with a
					 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>1</code>.
					 * @since 1.16.3
					 * @param iColumnsM New value for property <code>columnsM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setColumnsM(iColumnsM: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>columnsXL</code>.Form columns for extra large size.The number of
					 * columns for extra large size must not be smaller than the number of columns for large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.If the default value -1 is not overwritten with the meaningful one then the
					 * <code>columnsL</code> value is used (from the backward compatibility reasons).When called with a
					 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @param iColumnsXL New value for property <code>columnsXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setColumnsXL(iColumnsXL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>editable</code>.Applies a device-specific and theme-specific
					 * line-height to the form rows if the form has editable content.If set, all (not only the editable)
					 * rows of the form will get the line height of editable fields.The accessibility aria-readonly
					 * attribute is set according to this property.<b>Note:</b> The setting of the property has no
					 * influence on the editable functionality of the form's content.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param bEditable New value for property <code>editable</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEditable(bEditable: boolean): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>emptySpanL</code>.Number of grid cells that are empty at the end
					 * of each line on large size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.When called with a value of <code>null</code>
					 * or <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>0</code>.
					 * @since 1.16.3
					 * @param iEmptySpanL New value for property <code>emptySpanL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanL(iEmptySpanL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>emptySpanM</code>.Number of grid cells that are empty at the end
					 * of each line on medium size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.When called with a value of <code>null</code>
					 * or <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>0</code>.
					 * @since 1.16.3
					 * @param iEmptySpanM New value for property <code>emptySpanM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanM(iEmptySpanM: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>emptySpanS</code>.Number of grid cells that are empty at the end
					 * of each line on small size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.When called with a value of <code>null</code>
					 * or <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>0</code>.
					 * @since 1.16.3
					 * @param iEmptySpanS New value for property <code>emptySpanS</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanS(iEmptySpanS: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>emptySpanXL</code>.Number of grid cells that are empty at the
					 * end of each line on extra large size.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten
					 * with the meaningful one then the <code>emptySpanL</code> value is used (from the backward
					 * compatibility reasons).When called with a value of <code>null</code> or <code>undefined</code>, the
					 * default value of the property will be restored.Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @param iEmptySpanXL New value for property <code>emptySpanXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanXL(iEmptySpanXL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>labelMinWidth</code>.Specifies the min-width in pixels of the
					 * label in all form containers.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveLayout</code> is used as a layout.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>192</code>.
					 * @param iLabelMinWidth New value for property <code>labelMinWidth</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelMinWidth(
						iLabelMinWidth: number
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>labelSpanL</code>.Default span for labels in large
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more
					 * than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the
					 * line, then the <code>labelSpanM</code> value is used.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.When called with a value of <code>null</code>
					 * or <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>4</code>.
					 * @since 1.16.3
					 * @param iLabelSpanL New value for property <code>labelSpanL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanL(iLabelSpanL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>labelSpanM</code>.Default span for labels in medium
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is used for full-size
					 * <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line,
					 * <code>labelSpanL</code> is used.<b>Note:</b> This property is only used if a
					 * <code>ResponsiveGridLayout</code> is used as a layout.When called with a value of <code>null</code>
					 * or <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>2</code>.
					 * @since 1.16.3
					 * @param iLabelSpanM New value for property <code>labelSpanM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanM(iLabelSpanM: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>labelSpanS</code>.Default span for labels in small
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
					 * the property will be restored.Default value is <code>12</code>.
					 * @since 1.16.3
					 * @param iLabelSpanS New value for property <code>labelSpanS</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanS(iLabelSpanS: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>labelSpanXL</code>.Default span for labels in extra large
					 * size.<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a
					 * layout. If the default value -1 is not overwritten with the meaningful one then the
					 * <code>labelSpanL</code> value is used (from the backward compatibility reasons).When called with a
					 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @param iLabelSpanXL New value for property <code>labelSpanXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanXL(iLabelSpanXL: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>layout</code>.The <code>FormLayout</code> that is used to render
					 * the <code>SimpleForm</code>.We suggest using the <code>ResponsiveGridLayout</code> for rendering a
					 * <code>SimpleForm</code>, as its responsiveness uses the space available in the best way
					 * possible.When called with a value of <code>null</code> or <code>undefined</code>, the default value
					 * of the property will be restored.Default value is <code>ResponsiveLayout</code>.
					 * @param sLayout New value for property <code>layout</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLayout(
						sLayout: sap.ui.layout.form.SimpleFormLayout
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>maxContainerCols</code>.The maximum amount of groups
					 * (<code>FormContainers</code>) per row that is used before a new row is started.<b>Note:</b> If a
					 * <code>ResponsiveGridLayout</code> is used as a layout, this property is not used. Please use the
					 * properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>2</code>.
					 * @param iMaxContainerCols New value for property <code>maxContainerCols</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setMaxContainerCols(
						iMaxContainerCols: number
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>minWidth</code>.The overall minimum width in pixels that is used
					 * for the <code>SimpleForm</code>. If the available width is below the given minWidth the SimpleForm
					 * will create a new row for the next group (<code>FormContainer</code>).The default value is -1,
					 * meaning that inner groups (<code>FormContainers</code>) will be stacked until maxCols is reached,
					 * irrespective of whether a maxWidth is reached or the available parents width is reached.<b>Note:</b>
					 * This property is only used if a <code>ResponsiveLayout</code> is used as a layout.When called with a
					 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>-1</code>.
					 * @param iMinWidth New value for property <code>minWidth</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setMinWidth(iMinWidth: number): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>singleContainerFullSize</code>.If the <code>Form</code> contains
					 * only one single <code>FormContainer</code> and this property is set,the <code>FormContainer</code>
					 * is displayed using the full size of the <code>Form</code>.In this case the properties
					 * <code>columnsL</code> and <code>columnsM</code> are ignored.In all other cases the
					 * <code>FormContainer</code> is displayed in the size of one column.<b>Note:</b> This property is only
					 * used if a <code>ResponsiveGridLayout</code> is used as a layout.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>true</code>.
					 * @since 1.34.0
					 * @param bSingleContainerFullSize New value for property <code>singleContainerFullSize</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setSingleContainerFullSize(
						bSingleContainerFullSize: boolean
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets the aggregated <code>title</code>.
					 * @since 1.16.3
					 * @param vTitle The title to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setTitle(
						vTitle: sap.ui.core.Title | string
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets the aggregated <code>toolbar</code>.
					 * @since 1.36.0
					 * @param oToolbar The toolbar to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setToolbar(
						oToolbar: sap.ui.core.Toolbar
					): sap.ui.layout.form.SimpleForm;

					/**
					 * Sets a new value for property <code>width</code>.Width of the form.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @since 1.28.0
					 * @param sWidth New value for property <code>width</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setWidth(sWidth: any): sap.ui.layout.form.SimpleForm;
				}
				/**
				 * Base layout to render a <code>Form</code>.Other layouts to render a <code>Form</code> must inherit
				 * from this one.<b>Note:</b> This control must not be used to render a <code>Form</code> in productive
				 * applications as it does not fulfill anydesign guidelines and usability standards.
				 * @resource sap/ui/layout/form/FormLayout.js
				 */
				export class FormLayout extends sap.ui.core.Control {
					/**
					 * Constructor for a new sap.ui.layout.form.FormLayout.Accepts an object literal <code>mSettings</code>
					 * that defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId Id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Gets current value of property <code>backgroundDesign</code>.Specifies the background color of the
					 * <code>Form</code> content.The visualization of the different options depends on the used
					 * theme.Default value is <code>Translucent</code>.
					 * @since 1.36.0
					 * @returns Value of property <code>backgroundDesign</code>
					 */
					getBackgroundDesign(): sap.ui.layout.BackgroundDesign;

					/**
					 * Returns a metadata object for class sap.ui.layout.form.FormLayout.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Sets a new value for property <code>backgroundDesign</code>.Specifies the background color of the
					 * <code>Form</code> content.The visualization of the different options depends on the used theme.When
					 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
					 * property will be restored.Default value is <code>Translucent</code>.
					 * @since 1.36.0
					 * @param sBackgroundDesign New value for property <code>backgroundDesign</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBackgroundDesign(
						sBackgroundDesign: sap.ui.layout.BackgroundDesign
					): sap.ui.layout.form.FormLayout;
				}
				/**
				 * This <code>FormLayout</code> renders a <code>Form</code> using a HTML-table based grid.This can be a
				 * 16 column grid or an 8 column grid. The grid is stable, so the alignment of the fields is the same
				 * for all screen sizes or widths of the <code>Form</code>.Only the width of the single grid columns
				 * depends on the available width.To adjust the appearance inside the <code>GridLayout</code>, you can
				 * use <code>GridContainerData</code> for <code>FormContainers</code>and <code>GridElementData</code>
				 * for content fields.<b>Note:</b> If content fields have a <code>width</code> property this will be
				 * ignored, as the width of the controls is set by the grid cells.This control cannot be used stand
				 * alone, it only renders a <code>Form</code>, so it must be assigned to a <code>Form</code>.
				 * @resource sap/ui/layout/form/GridLayout.js
				 */
				export class GridLayout extends sap.ui.layout.form.FormLayout {
					/**
					 * Constructor for a new sap.ui.layout.form.GridLayout.Accepts an object literal <code>mSettings</code>
					 * that defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId Id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.layout.form.GridLayout.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>singleColumn</code>.If set, the grid renders only one
					 * <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other.
					 * The whole grid has 8 cells per row.If not set, <code>FormContainer</code> can use the full width of
					 * the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole
					 * grid has 16 cells per row.Default value is <code>false</code>.
					 * @returns Value of property <code>singleColumn</code>
					 */
					getSingleColumn(): boolean;

					/**
					 * Sets a new value for property <code>singleColumn</code>.If set, the grid renders only one
					 * <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other.
					 * The whole grid has 8 cells per row.If not set, <code>FormContainer</code> can use the full width of
					 * the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole
					 * grid has 16 cells per row.When called with a value of <code>null</code> or <code>undefined</code>,
					 * the default value of the property will be restored.Default value is <code>false</code>.
					 * @param bSingleColumn New value for property <code>singleColumn</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setSingleColumn(
						bSingleColumn: boolean
					): sap.ui.layout.form.GridLayout;
				}

				interface FormElementProperties extends sap.ui.core.ControlProperties {
					label?: sap.ui.core.Label | string;
				}

				interface FormElementAggregations
					extends sap.ui.core.ElementAggregations {
					fields?: sap.ui.core.Control[];
					label?: sap.ui.core.Label | string;
				}

				type FormElementSettings =
					| FormElementProperties
					| FormElementAggregations;
				/**
				 * A <code>FormElement</code> represents a row in a <code>FormContainer</code>.A
				 * <code>FormElement</code> is a combination of one label and different controls associated to this
				 * label.
				 * @resource sap/ui/layout/form/FormElement.js
				 */
				export class FormElement extends sap.ui.core.Element<
					FormElementProperties,
					FormElementAggregations
				> {
					/**
					 * Constructor for a new sap.ui.layout.form.FormElement.Accepts an object literal
					 * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
					 * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
					 * of the syntax of the settings object.
					 * @param sId Id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId?: string, mSettings?: FormElementSettings);
					constructor(mSettings?: FormElementSettings);

					/**
					 * Adds some field to the aggregation <code>fields</code>.
					 * @param oField the field to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addField(oField: sap.ui.core.Control): sap.ui.layout.form.FormElement;

					/**
					 * Destroys all the fields in the aggregation <code>fields</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyFields(): sap.ui.layout.form.FormElement;

					/**
					 * Destroys the label in the aggregation <code>label</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyLabel(): sap.ui.layout.form.FormElement;

					/**
					 * Gets content of aggregation <code>fields</code>.Formular controls that belong together to be
					 * displayed in one row of a <code>Form</code>.<b>Note:</b> Do not put any layout controls in here.
					 * This could destroy the visual layout,keyboard support and screen-reader support.
					 */
					getFields(): sap.ui.core.Control[];

					/**
					 * Gets content of aggregation <code>label</code>.Label of the fields. Can either be a
					 * <code>Label</code> object, or a string.If a <code>Label</code> object is used, the properties of the
					 * <code>Label</code> can be set.If no assignment between <code>Label</code> and the fields is set, it
					 * will be done automatically by the<code>FormElement</code>. In this case the <code>Label</code> is
					 * assigned to the fields of the <code>FormElement</code>.
					 */
					getLabel(): any | string;

					/**
					 * Returns the <code>Label</code> of the <code>FormElement</code>, even if the <code>Label</code> is
					 * assigned as string.The <code>FormLayout</code> needs the information of the label to render the
					 * <code>Form</code>.
					 * @returns <code>Label</code> control used to render the label
					 */
					getLabelControl(): any;

					/**
					 * Returns a metadata object for class sap.ui.layout.form.FormElement.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>visible</code>.If set to <code>false</code>, the
					 * <code>FormElement</code> is not rendered.Default value is <code>true</code>.
					 * @returns Value of property <code>visible</code>
					 */
					getVisible(): boolean;

					/**
					 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>fields</code>.and
					 * returns its index if found or -1 otherwise.
					 * @param oField The field whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfField(oField: sap.ui.core.Control): number;

					/**
					 * Inserts a field into the aggregation <code>fields</code>.
					 * @param oField the field to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the field should be inserted at; for             a
					 * negative value of <code>iIndex</code>, the field is inserted at position 0; for a value
					 * greater than the current size of the aggregation, the field is inserted at             the last
					 * position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertField(
						oField: sap.ui.core.Control,
						iIndex: number
					): sap.ui.layout.form.FormElement;

					/**
					 * Removes all the controls from the aggregation <code>fields</code>.Additionally, it unregisters them
					 * from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllFields(): sap.ui.core.Control[];

					/**
					 * Removes a field from the aggregation <code>fields</code>.
					 * @param vField The field to remove or its index or id
					 * @returns The removed field or <code>null</code>
					 */
					removeField(
						vField: number | string | sap.ui.core.Control
					): sap.ui.core.Control;

					/**
					 * Sets the aggregated <code>label</code>.
					 * @param vLabel The label to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabel(vLabel: any | string): sap.ui.layout.form.FormElement;

					/**
					 * Sets a new value for property <code>visible</code>.If set to <code>false</code>, the
					 * <code>FormElement</code> is not rendered.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>true</code>.
					 * @param bVisible New value for property <code>visible</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setVisible(bVisible: boolean): sap.ui.layout.form.FormElement;
				}

				interface FormContainerAggregations
					extends sap.ui.core.ElementAggregations {
					formElements?: sap.ui.layout.form.FormElement[];
					title?: sap.ui.core.Title | string;
					toolbar?: sap.ui.core.Toolbar;
				}

				/**
				 * A <code>FormContainer</code> represents a group inside a <code>Form</code>. It consists of
				 * <code>FormElements</code>.The rendering of the <code>FormContainer</code> is done by the
				 * <code>FormLayout</code> assigned to the <code>Form</code>.
				 * @resource sap/ui/layout/form/FormContainer.js
				 */
				export class FormContainer<
					T = { expandable?: boolean; expanded?: boolean; visible?: boolean }
				> extends sap.ui.core.Element<T, FormContainerAggregations> {
					/**
					 * Constructor for a new sap.ui.layout.form.FormContainer.Accepts an object literal
					 * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
					 * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
					 * of the syntax of the settings object.
					 * @param sId Id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId?: string, mSettings?: any);
					constructor(mSettings?: { formElements?: FormElement[] });

					/**
					 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
					 * @since 1.36.0
					 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addAriaLabelledBy(
						vAriaLabelledBy: any | sap.ui.core.Control
					): sap.ui.layout.form.FormContainer;

					/**
					 * Adds some formElement to the aggregation <code>formElements</code>.
					 * @param oFormElement the formElement to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addFormElement(
						oFormElement: sap.ui.layout.form.FormElement
					): sap.ui.layout.form.FormContainer;

					/**
					 * Destroys all the formElements in the aggregation <code>formElements</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyFormElements(): sap.ui.layout.form.FormContainer;

					/**
					 * Destroys the title in the aggregation <code>title</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyTitle(): sap.ui.layout.form.FormContainer;

					/**
					 * Destroys the toolbar in the aggregation <code>toolbar</code>.
					 * @since 1.36.0
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyToolbar(): sap.ui.layout.form.FormContainer;

					/**
					 * Returns array of IDs of the elements which are the current targets of the association
					 * <code>ariaLabelledBy</code>.
					 * @since 1.36.0
					 */
					getAriaLabelledBy(): any[];

					/**
					 * Gets current value of property <code>expandable</code>.Defines if the <code>FormContainer</code> is
					 * expandable.<b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the
					 * <code>FormContainer</code>.Default value is <code>false</code>.
					 * @returns Value of property <code>expandable</code>
					 */
					getExpandable(): boolean;

					/**
					 * Gets current value of property <code>expanded</code>.Container is expanded.<b>Note:</b> This
					 * property only works if <code>expandable</code> is set to <code>true</code>.Default value is
					 * <code>true</code>.
					 * @returns Value of property <code>expanded</code>
					 */
					getExpanded(): boolean;

					/**
					 * Gets content of aggregation <code>formElements</code>.The <code>FormElements</code> contain the
					 * content (labels and fields) of the <code>FormContainers</code>.
					 */
					getFormElements(): sap.ui.layout.form.FormElement[];

					/**
					 * Returns a metadata object for class sap.ui.layout.form.FormContainer.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets content of aggregation <code>title</code>.Title of the <code>FormContainer</code>. Can either
					 * be a <code>Title</code> object, or a string.If a <code>Title</code> object is used, the style of the
					 * title can be set.<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
					 */
					getTitle(): sap.ui.core.Title | string;

					/**
					 * Gets content of aggregation <code>toolbar</code>.Toolbar of the
					 * <code>FormContainer</code>.<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is
					 * ignored.If a title is needed inside the <code>Toolbar</code> it must be added at content to the
					 * <code>Toolbar</code>.In this case add the <code>Title</code> to the <code>ariaLabelledBy</code>
					 * association.
					 * @since 1.36.0
					 */
					getToolbar(): sap.ui.core.Toolbar;

					/**
					 * Gets current value of property <code>visible</code>.If set to <code>false</code>, the
					 * <code>FormContainer</code> is not rendered.Default value is <code>true</code>.
					 * @returns Value of property <code>visible</code>
					 */
					getVisible(): boolean;

					/**
					 * Checks for the provided <code>sap.ui.layout.form.FormElement</code> in the aggregation
					 * <code>formElements</code>.and returns its index if found or -1 otherwise.
					 * @param oFormElement The formElement whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfFormElement(
						oFormElement: sap.ui.layout.form.FormElement
					): number;

					/**
					 * Inserts a formElement into the aggregation <code>formElements</code>.
					 * @param oFormElement the formElement to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the formElement should be inserted at; for
					 * a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value
					 *        greater than the current size of the aggregation, the formElement is inserted at
					 * the last position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertFormElement(
						oFormElement: sap.ui.layout.form.FormElement,
						iIndex: number
					): sap.ui.layout.form.FormContainer;

					/**
					 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
					 * @since 1.36.0
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllAriaLabelledBy(): any[];

					/**
					 * Removes all the controls from the aggregation <code>formElements</code>.Additionally, it unregisters
					 * them from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllFormElements(): sap.ui.layout.form.FormElement[];

					/**
					 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
					 * @since 1.36.0
					 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
					 * @returns The removed ariaLabelledBy or <code>null</code>
					 */
					removeAriaLabelledBy(
						vAriaLabelledBy: number | any | sap.ui.core.Control
					): any;

					/**
					 * Removes a formElement from the aggregation <code>formElements</code>.
					 * @param vFormElement The formElement to remove or its index or id
					 * @returns The removed formElement or <code>null</code>
					 */
					removeFormElement(
						vFormElement: number | string | sap.ui.layout.form.FormElement
					): sap.ui.layout.form.FormElement;

					/**
					 * Sets a new value for property <code>expandable</code>.Defines if the <code>FormContainer</code> is
					 * expandable.<b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the
					 * <code>FormContainer</code>.When called with a value of <code>null</code> or <code>undefined</code>,
					 * the default value of the property will be restored.Default value is <code>false</code>.
					 * @param bExpandable New value for property <code>expandable</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setExpandable(bExpandable: boolean): sap.ui.layout.form.FormContainer;

					/**
					 * Sets a new value for property <code>expanded</code>.Container is expanded.<b>Note:</b> This property
					 * only works if <code>expandable</code> is set to <code>true</code>.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>true</code>.
					 * @param bExpanded New value for property <code>expanded</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setExpanded(bExpanded: boolean): sap.ui.layout.form.FormContainer;

					/**
					 * Sets the aggregated <code>title</code>.
					 * @param vTitle The title to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setTitle(
						vTitle: sap.ui.core.Title | string
					): sap.ui.layout.form.FormContainer;

					/**
					 * Sets the aggregated <code>toolbar</code>.
					 * @since 1.36.0
					 * @param oToolbar The toolbar to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setToolbar(
						oToolbar: sap.ui.core.Toolbar
					): sap.ui.layout.form.FormContainer;

					/**
					 * Sets a new value for property <code>visible</code>.If set to <code>false</code>, the
					 * <code>FormContainer</code> is not rendered.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>true</code>.
					 * @param bVisible New value for property <code>visible</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setVisible(bVisible: boolean): sap.ui.layout.form.FormContainer;
				}
				/**
				 * The <code>GridLayout</code>-specific layout data for <code>FormElement</code> fields.
				 * @resource sap/ui/layout/form/GridElementData.js
				 */
				export class GridElementData extends sap.ui.core.LayoutData {
					/**
					 * Constructor for a new sap.ui.layout.form.GridElementData.Accepts an object literal
					 * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
					 * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
					 * of the syntax of the settings object.
					 * @param sId Id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Gets current value of property <code>hCells</code>.Number of cells in horizontal direction.If set to
					 * "auto" the size is determined by the number of fields and the available cells. For labels the auto
					 * size is 3 cells.If set to "full" only one field is allowed within the <code>FormElement</code>. It
					 * gets the full width of the row and the label is displayed above. <b>Note:</b> For labels full size
					 * has no effect.Default value is <code>auto</code>.
					 * @returns Value of property <code>hCells</code>
					 */
					getHCells(): any;

					/**
					 * Returns a metadata object for class sap.ui.layout.form.GridElementData.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>vCells</code>.Number of cells in vertical
					 * direction.<b>Note:</b> This property has no effect for labels.Default value is <code>1</code>.
					 * @returns Value of property <code>vCells</code>
					 */
					getVCells(): number;

					/**
					 * Sets a new value for property <code>hCells</code>.Number of cells in horizontal direction.If set to
					 * "auto" the size is determined by the number of fields and the available cells. For labels the auto
					 * size is 3 cells.If set to "full" only one field is allowed within the <code>FormElement</code>. It
					 * gets the full width of the row and the label is displayed above. <b>Note:</b> For labels full size
					 * has no effect.When called with a value of <code>null</code> or <code>undefined</code>, the default
					 * value of the property will be restored.Default value is <code>auto</code>.
					 * @param sHCells New value for property <code>hCells</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setHCells(sHCells: any): sap.ui.layout.form.GridElementData;

					/**
					 * Sets a new value for property <code>vCells</code>.Number of cells in vertical direction.<b>Note:</b>
					 * This property has no effect for labels.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>1</code>.
					 * @param iVCells New value for property <code>vCells</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setVCells(iVCells: number): sap.ui.layout.form.GridElementData;
				}
				/**
				 * Renders a <code>Form</code> with a responsive layout. Internally the
				 * <code>ResponsiveFlowLayout</code> is used.The responsiveness of this layout tries to best use the
				 * available space. This means that the order of the <code>FormContainers</code>, labels and fields
				 * depends on the available space.On the <code>FormContainers</code>, <code>FormElements</code>, labels
				 * and content fields, <code>ResponsiveFlowLayoutData</code> can be used to change the default
				 * rendering.We suggest using the <code>ResponsiveGridLayout</code> instead of this layout because this
				 * is easier to consume and brings more stable responsive output.<b>Note:</b> If
				 * <code>ResponsiveFlowLayoutData</code> are used this may result in a much more complex layout than
				 * the default one. This means that in some cases, the calculation for the other content may not bring
				 * the expected result.In such cases, <code>ResponsiveFlowLayoutData</code> should be used for all
				 * content controls to disable the default behavior.This control cannot be used stand alone, it only
				 * renders a <code>Form</code>, so it must be assigned to a <code>Form</code>.
				 * @resource sap/ui/layout/form/ResponsiveLayout.js
				 */
				export class ResponsiveLayout extends sap.ui.layout.form.FormLayout {
					/**
					 * Constructor for a new sap.ui.layout.form.ResponsiveLayout.
					 * @param sId Id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.layout.form.ResponsiveLayout.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * <code>GridLayout</code>-specific properties for <code>FormContainers</code>.
				 * @resource sap/ui/layout/form/GridContainerData.js
				 */
				export class GridContainerData extends sap.ui.core.LayoutData {
					/**
					 * Constructor for a new sap.ui.layout.form.GridContainerData.Accepts an object literal
					 * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
					 * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
					 * of the syntax of the settings object.
					 * @param sId Id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Gets current value of property <code>halfGrid</code>.If set, the container takes half the width of
					 * the <code>Form</code> (8 cells), if not it takes the full width (16 cells).If the
					 * <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8
					 * cells. So containers are rendered only once per row.Default value is <code>false</code>.
					 * @returns Value of property <code>halfGrid</code>
					 */
					getHalfGrid(): boolean;

					/**
					 * Returns a metadata object for class sap.ui.layout.form.GridContainerData.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Sets a new value for property <code>halfGrid</code>.If set, the container takes half the width of
					 * the <code>Form</code> (8 cells), if not it takes the full width (16 cells).If the
					 * <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8
					 * cells. So containers are rendered only once per row.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>false</code>.
					 * @param bHalfGrid New value for property <code>halfGrid</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setHalfGrid(bHalfGrid: boolean): sap.ui.layout.form.GridContainerData;
				}
				/**
				 * Renders a <code>Form</code> using a responsive grid. Internally the <code>Grid</code> control is
				 * used for rendering.Using this layout, the <code>Form</code> is rendered in a responsive
				 * way.Depending on the available space, the <code>FormContainers</code> are rendered in one or
				 * different columns and the labels are rendered in the same row as the fields or above the fields.This
				 * behavior can be influenced by the properties of this layout control.On the
				 * <code>FormContainers</code>, labels and content fields, <code>GridData</code> can be used to change
				 * the default rendering.<code>GridData</code> is not supported for
				 * <code>FormElements</code>.<b>Note:</b> If <code>GridData</code> is used, this may result in a much
				 * more complex layout than the default one.This means that in some cases, the calculation for the
				 * other content may not bring the expected result.In such cases, <code>GridData</code> should be used
				 * for all content controls to disable the default behavior.This control cannot be used standalone, it
				 * only renders a <code>Form</code>, so it must be assigned to a <code>Form</code>.
				 * @resource sap/ui/layout/form/ResponsiveGridLayout.js
				 */
				export class ResponsiveGridLayout extends sap.ui.layout.form
					.FormLayout {
					/**
					 * Constructor for a new <code>sap.ui.layout.form.ResponsiveGridLayout</code>.Accepts an object literal
					 * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
					 * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
					 * of the syntax of the settings object.
					 * @param sId ID for the new control, generated automatically if no ID is given
					 * @param mSettings Initial settings for the new control
					 */
					constructor(sId?: string, mSettings?: any);
					constructor(mSettings?: {
						breakpointL?: number;
						breakpointM?: number;
						breakpointXL?: number;
						columnsL?: number;
						columnsM?: number;
						columnsXL?: number;
						emptySpanL?: number;
						emptySpanM?: number;
						emptySpanS?: number;
						emptySpanXL?: number;
						labelSpanL?: number;
						labelSpanM?: number;
						labelSpanS?: number;
						labelSpanXL?: number;
					});

					/**
					 * Gets current value of property <code>adjustLabelSpan</code>.If set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of
					 * <code>FormContainers</code> in one row.If only one <code>FormContainer</code> is displayed in one
					 * row, <code>labelSpanM</code> is used to define the size of the label.This is the same for medium and
					 * large <code>Forms</code>.This is done to align the labels on forms where full-size
					 * <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>(because
					 * every <code>FormContainer</code> has its own grid inside).If not set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.The
					 * number of <code>FormContainers</code> doesn't matter in this case.Default value is
					 * <code>true</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>adjustLabelSpan</code>
					 */
					getAdjustLabelSpan(): boolean;

					/**
					 * Gets current value of property <code>breakpointL</code>.Breakpoint (in pixel) between Medium size
					 * and Large size.Default value is <code>1024</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>breakpointL</code>
					 */
					getBreakpointL(): number;

					/**
					 * Gets current value of property <code>breakpointM</code>.Breakpoint (in pixel) between Small size and
					 * Medium size.Default value is <code>600</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>breakpointM</code>
					 */
					getBreakpointM(): number;

					/**
					 * Gets current value of property <code>breakpointXL</code>.Breakpoint (in pixel) between large size
					 * and extra large (XL) size.Default value is <code>1440</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>breakpointXL</code>
					 */
					getBreakpointXL(): number;

					/**
					 * Gets current value of property <code>columnsL</code>.Number of columns for large size.The number of
					 * columns for large size must not be smaller than the number of columns for medium size.Default value
					 * is <code>2</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>columnsL</code>
					 */
					getColumnsL(): number;

					/**
					 * Gets current value of property <code>columnsM</code>.Number of columns for medium size.Default value
					 * is <code>1</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>columnsM</code>
					 */
					getColumnsM(): number;

					/**
					 * Gets current value of property <code>columnsXL</code>.Number of columns for extra large size.The
					 * number of columns for extra large size must not be smaller than the number of columns for large
					 * size.<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the
					 * <code>columnsL</code> value is used (from the backward compatibility reasons).Default value is
					 * <code>-1</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>columnsXL</code>
					 */
					getColumnsXL(): number;

					/**
					 * Gets current value of property <code>emptySpanL</code>.Number of grid cells that are empty at the
					 * end of each line on large size.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>emptySpanL</code>
					 */
					getEmptySpanL(): number;

					/**
					 * Gets current value of property <code>emptySpanM</code>.Number of grid cells that are empty at the
					 * end of each line on medium size.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>emptySpanM</code>
					 */
					getEmptySpanM(): number;

					/**
					 * Gets current value of property <code>emptySpanS</code>.Number of grid cells that are empty at the
					 * end of each line on small size.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>emptySpanS</code>
					 */
					getEmptySpanS(): number;

					/**
					 * Gets current value of property <code>emptySpanXL</code>.Number of grid cells that are empty at the
					 * end of each line on extra large size.<b>Note:</b> If the default value -1 is not overwritten with
					 * the meaningful one then the <code>emptySpanL</code> value is used.Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>emptySpanXL</code>
					 */
					getEmptySpanXL(): number;

					/**
					 * Gets current value of property <code>labelSpanL</code>.Default span for labels in large
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more
					 * than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the
					 * line, then the <code>labelSpanM</code> value is used.Default value is <code>4</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>labelSpanL</code>
					 */
					getLabelSpanL(): number;

					/**
					 * Gets current value of property <code>labelSpanM</code>.Default span for labels in medium
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set this property is used for full-size
					 * <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line,
					 * <code>labelSpanL</code> is used.Default value is <code>2</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>labelSpanM</code>
					 */
					getLabelSpanM(): number;

					/**
					 * Gets current value of property <code>labelSpanS</code>.Default span for labels in small size.Default
					 * value is <code>12</code>.
					 * @since 1.16.3
					 * @returns Value of property <code>labelSpanS</code>
					 */
					getLabelSpanS(): number;

					/**
					 * Gets current value of property <code>labelSpanXL</code>.Default span for labels in extra large
					 * size.<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the
					 * <code>labelSpanL</code> value is used.Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>labelSpanXL</code>
					 */
					getLabelSpanXL(): number;

					/**
					 * Returns a metadata object for class sap.ui.layout.form.ResponsiveGridLayout.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>singleContainerFullSize</code>.If the <code>Form</code>
					 * contains only one single <code>FormContainer</code> and this property is set,the
					 * <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.In this case
					 * the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are
					 * ignored.In all other cases the <code>FormContainer</code> is displayed in the size of one
					 * column.Default value is <code>true</code>.
					 * @since 1.34.0
					 * @returns Value of property <code>singleContainerFullSize</code>
					 */
					getSingleContainerFullSize(): boolean;

					/**
					 * Sets a new value for property <code>adjustLabelSpan</code>.If set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of
					 * <code>FormContainers</code> in one row.If only one <code>FormContainer</code> is displayed in one
					 * row, <code>labelSpanM</code> is used to define the size of the label.This is the same for medium and
					 * large <code>Forms</code>.This is done to align the labels on forms where full-size
					 * <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>(because
					 * every <code>FormContainer</code> has its own grid inside).If not set, the usage of
					 * <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.The
					 * number of <code>FormContainers</code> doesn't matter in this case.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>true</code>.
					 * @since 1.34.0
					 * @param bAdjustLabelSpan New value for property <code>adjustLabelSpan</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setAdjustLabelSpan(
						bAdjustLabelSpan: boolean
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>breakpointL</code>.Breakpoint (in pixel) between Medium size and
					 * Large size.When called with a value of <code>null</code> or <code>undefined</code>, the default
					 * value of the property will be restored.Default value is <code>1024</code>.
					 * @since 1.16.3
					 * @param iBreakpointL New value for property <code>breakpointL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBreakpointL(
						iBreakpointL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>breakpointM</code>.Breakpoint (in pixel) between Small size and
					 * Medium size.When called with a value of <code>null</code> or <code>undefined</code>, the default
					 * value of the property will be restored.Default value is <code>600</code>.
					 * @since 1.16.3
					 * @param iBreakpointM New value for property <code>breakpointM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBreakpointM(
						iBreakpointM: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>breakpointXL</code>.Breakpoint (in pixel) between large size and
					 * extra large (XL) size.When called with a value of <code>null</code> or <code>undefined</code>, the
					 * default value of the property will be restored.Default value is <code>1440</code>.
					 * @since 1.34.0
					 * @param iBreakpointXL New value for property <code>breakpointXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setBreakpointXL(
						iBreakpointXL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>columnsL</code>.Number of columns for large size.The number of
					 * columns for large size must not be smaller than the number of columns for medium size.When called
					 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
					 * be restored.Default value is <code>2</code>.
					 * @since 1.16.3
					 * @param iColumnsL New value for property <code>columnsL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setColumnsL(
						iColumnsL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>columnsM</code>.Number of columns for medium size.When called
					 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
					 * be restored.Default value is <code>1</code>.
					 * @since 1.16.3
					 * @param iColumnsM New value for property <code>columnsM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setColumnsM(
						iColumnsM: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>columnsXL</code>.Number of columns for extra large size.The
					 * number of columns for extra large size must not be smaller than the number of columns for large
					 * size.<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the
					 * <code>columnsL</code> value is used (from the backward compatibility reasons).When called with a
					 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @param iColumnsXL New value for property <code>columnsXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setColumnsXL(
						iColumnsXL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>emptySpanL</code>.Number of grid cells that are empty at the end
					 * of each line on large size.When called with a value of <code>null</code> or <code>undefined</code>,
					 * the default value of the property will be restored.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @param iEmptySpanL New value for property <code>emptySpanL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanL(
						iEmptySpanL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>emptySpanM</code>.Number of grid cells that are empty at the end
					 * of each line on medium size.When called with a value of <code>null</code> or <code>undefined</code>,
					 * the default value of the property will be restored.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @param iEmptySpanM New value for property <code>emptySpanM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanM(
						iEmptySpanM: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>emptySpanS</code>.Number of grid cells that are empty at the end
					 * of each line on small size.When called with a value of <code>null</code> or <code>undefined</code>,
					 * the default value of the property will be restored.Default value is <code>0</code>.
					 * @since 1.16.3
					 * @param iEmptySpanS New value for property <code>emptySpanS</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanS(
						iEmptySpanS: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>emptySpanXL</code>.Number of grid cells that are empty at the
					 * end of each line on extra large size.<b>Note:</b> If the default value -1 is not overwritten with
					 * the meaningful one then the <code>emptySpanL</code> value is used.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>-1</code>.
					 * @since 1.34.0
					 * @param iEmptySpanXL New value for property <code>emptySpanXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setEmptySpanXL(
						iEmptySpanXL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>labelSpanL</code>.Default span for labels in large
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more
					 * than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the
					 * line, then the <code>labelSpanM</code> value is used.When called with a value of <code>null</code>
					 * or <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>4</code>.
					 * @since 1.16.3
					 * @param iLabelSpanL New value for property <code>labelSpanL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanL(
						iLabelSpanL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>labelSpanM</code>.Default span for labels in medium
					 * size.<b>Note:</b> If <code>adjustLabelSpanThis</code> is set this property is used for full-size
					 * <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line,
					 * <code>labelSpanL</code> is used.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>2</code>.
					 * @since 1.16.3
					 * @param iLabelSpanM New value for property <code>labelSpanM</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanM(
						iLabelSpanM: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>labelSpanS</code>.Default span for labels in small size.When
					 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
					 * property will be restored.Default value is <code>12</code>.
					 * @since 1.16.3
					 * @param iLabelSpanS New value for property <code>labelSpanS</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanS(
						iLabelSpanS: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>labelSpanXL</code>.Default span for labels in extra large
					 * size.<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the
					 * <code>labelSpanL</code> value is used.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>-1</code>.
					 * @since 1.34.0
					 * @param iLabelSpanXL New value for property <code>labelSpanXL</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setLabelSpanXL(
						iLabelSpanXL: number
					): sap.ui.layout.form.ResponsiveGridLayout;

					/**
					 * Sets a new value for property <code>singleContainerFullSize</code>.If the <code>Form</code> contains
					 * only one single <code>FormContainer</code> and this property is set,the <code>FormContainer</code>
					 * is displayed using the full size of the <code>Form</code>.In this case the properties
					 * <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.In all other
					 * cases the <code>FormContainer</code> is displayed in the size of one column.When called with a value
					 * of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>true</code>.
					 * @since 1.34.0
					 * @param bSingleContainerFullSize New value for property <code>singleContainerFullSize</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setSingleContainerFullSize(
						bSingleContainerFullSize: boolean
					): sap.ui.layout.form.ResponsiveGridLayout;
				}
				/**
				 * Available <code>FormLayouts</code> used to render a <code>SimpleForm</code>.
				 */
				enum SimpleFormLayout {
					"GridLayout",
					"ResponsiveGridLayout",
					"ResponsiveLayout"
				}
			}
		}
	}
}
