declare namespace sap {
	namespace ui {
		namespace layout {
			namespace GridSpan {}
			namespace GridIndent {}
			namespace BlockBackgroundType {
				/**
				 * Background is transparent
				 */
				var Default: any;

				/**
				 * Background is with predefined light colors
				 */
				var Light: any;
			}
			/**
			 * The Grid control is a layout which positions its child controls in a 12 column flow layout. Its
			 * children can be specified to take on a variable amount of columns depending on available screen
			 * size. With this control it is possible to achieve flexible layouts and line-breaks for extra large-,
			 * large-, medium- and small-sized screens, such as large desktop, desktop, tablet, and mobile. The
			 * Grid control's width can be percentage- or pixel-based and the spacing between its columns can be
			 * set to various pre-defined values.
			 * @resource sap/ui/layout/Grid.js
			 */
			export class Grid extends sap.ui.core.Control {
				/**
				 * Constructor for a new Grid.Accepts an object literal <code>mSettings</code> that defines
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
				addContent(oContent: sap.ui.core.Control): sap.ui.layout.Grid;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.Grid;

				/**
				 */
				getAccessibilityInfo(): void;

				/**
				 * Gets current value of property <code>containerQuery</code>.If true then not the media Query ( device
				 * screen size), but the size of the container surrounding the grid defines the current range (large,
				 * medium or small).Default value is <code>false</code>.
				 * @returns Value of property <code>containerQuery</code>
				 */
				getContainerQuery(): boolean;

				/**
				 * Gets content of aggregation <code>content</code>.Controls that are placed into Grid layout.
				 */
				getContent(): sap.ui.core.Control[];

				/**
				 * Gets current value of property <code>defaultIndent</code>.Optional. Defines default for the whole
				 * Grid numbers of empty columns before the current span begins. It can be defined for large, medium
				 * and small screens. Allowed values are separated by space Letters L, M or S followed by number of
				 * columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4
				 * m4". Note that the parameters has to be provided in the order large medium small.Default value is
				 * <code>XL0 L0 M0 S0</code>.
				 * @returns Value of property <code>defaultIndent</code>
				 */
				getDefaultIndent(): any;

				/**
				 * Gets current value of property <code>defaultSpan</code>.Optional. A string type that represents
				 * Grid's default span values for large, medium and small screens for the whole Grid. Allowed values
				 * are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the
				 * container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters
				 * has to be provided in the order large medium small.Default value is <code>XL3 L3 M6 S12</code>.
				 * @returns Value of property <code>defaultSpan</code>
				 */
				getDefaultSpan(): any;

				/**
				 * Gets current value of property <code>hSpacing</code>.Optional. Horizontal spacing between the
				 * content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.Default value is <code>1</code>.
				 * @returns Value of property <code>hSpacing</code>
				 */
				getHSpacing(): number;

				/**
				 * Returns a metadata object for class sap.ui.layout.Grid.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>position</code>.Optional. Position of the Grid in the window or
				 * surrounding container. Possible values are "Center", "Left" and "Right".Default value is
				 * <code>Left</code>.
				 * @returns Value of property <code>position</code>
				 */
				getPosition(): sap.ui.layout.GridPosition;

				/**
				 * Gets current value of property <code>vSpacing</code>.Optional. Vertical spacing between the rows in
				 * the Grid. In rem, allowed values are 0, 0.5, 1 and 2.Default value is <code>1</code>.
				 * @returns Value of property <code>vSpacing</code>
				 */
				getVSpacing(): number;

				/**
				 * Gets current value of property <code>width</code>.Optional. Width of the Grid. If not specified,
				 * then 100%.Default value is <code>100%</code>.
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): any;

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
				insertContent(
					oContent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.Grid;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.core.Control[];

				/**
				 * Removes a content from the aggregation <code>content</code>.
				 * @param vContent The content to remove or its index or id
				 * @returns The removed content or <code>null</code>
				 */
				removeContent(
					vContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>containerQuery</code>.If true then not the media Query ( device
				 * screen size), but the size of the container surrounding the grid defines the current range (large,
				 * medium or small).When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>false</code>.
				 * @param bContainerQuery New value for property <code>containerQuery</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setContainerQuery(bContainerQuery: boolean): sap.ui.layout.Grid;

				/**
				 * Sets a new value for property <code>defaultIndent</code>.Optional. Defines default for the whole
				 * Grid numbers of empty columns before the current span begins. It can be defined for large, medium
				 * and small screens. Allowed values are separated by space Letters L, M or S followed by number of
				 * columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4
				 * m4". Note that the parameters has to be provided in the order large medium small.When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>XL0 L0 M0 S0</code>.
				 * @param sDefaultIndent New value for property <code>defaultIndent</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setDefaultIndent(sDefaultIndent: any): sap.ui.layout.Grid;

				/**
				 * Sets a new value for property <code>defaultSpan</code>.Optional. A string type that represents
				 * Grid's default span values for large, medium and small screens for the whole Grid. Allowed values
				 * are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the
				 * container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters
				 * has to be provided in the order large medium small.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>XL3 L3 M6 S12</code>.
				 * @param sDefaultSpan New value for property <code>defaultSpan</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setDefaultSpan(sDefaultSpan: any): sap.ui.layout.Grid;

				/**
				 * Sets a new value for property <code>hSpacing</code>.Optional. Horizontal spacing between the content
				 * in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>1</code>.
				 * @param fHSpacing New value for property <code>hSpacing</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHSpacing(fHSpacing: number): sap.ui.layout.Grid;

				/**
				 * Sets a new value for property <code>position</code>.Optional. Position of the Grid in the window or
				 * surrounding container. Possible values are "Center", "Left" and "Right".When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>Left</code>.
				 * @param sPosition New value for property <code>position</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setPosition(sPosition: sap.ui.layout.GridPosition): sap.ui.layout.Grid;

				/**
				 * Sets a new value for property <code>vSpacing</code>.Optional. Vertical spacing between the rows in
				 * the Grid. In rem, allowed values are 0, 0.5, 1 and 2.When called with a value of <code>null</code>
				 * or <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>1</code>.
				 * @param fVSpacing New value for property <code>vSpacing</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVSpacing(fVSpacing: number): sap.ui.layout.Grid;

				/**
				 * Sets a new value for property <code>width</code>.Optional. Width of the Grid. If not specified, then
				 * 100%.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>100%</code>.
				 * @param sWidth New value for property <code>width</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWidth(sWidth: any): sap.ui.layout.Grid;
			}
			/**
			 * The FixFlex control builds the container for a layout with a fixed and a flexible part. The flexible
			 * container adapts its size to the fix container. The fix container can hold any number of controls,
			 * while the flexible container can hold only one.In order for the FixFlex to stretch properly, the
			 * parent element, in which the control is placed, needs to have a specified height or needs to have an
			 * absolute position.Warning: Avoid nesting FixFlex in other flexbox based layout controls (FixFlex,
			 * FlexBox, Hbox, Vbox). Otherwise contents may be not accessible or multiple scrollbars can
			 * appear.Note: If the child control of the flex or the fix container has width/height bigger than the
			 * container itself, the child control will be cropped in the view. If minFlexSize is set, then a
			 * scrollbar is shown in the flexible part, depending on the vertical property.
			 * @resource sap/ui/layout/FixFlex.js
			 */
			export class FixFlex extends sap.ui.core.Control {
				/**
				 * Constructor for a new FixFlex.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some fixContent to the aggregation <code>fixContent</code>.
				 * @param oFixContent the fixContent to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addFixContent(oFixContent: sap.ui.core.Control): sap.ui.layout.FixFlex;

				/**
				 * Destroys all the fixContent in the aggregation <code>fixContent</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyFixContent(): sap.ui.layout.FixFlex;

				/**
				 * Destroys the flexContent in the aggregation <code>flexContent</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyFlexContent(): sap.ui.layout.FixFlex;

				/**
				 * Gets content of aggregation <code>fixContent</code>.Controls in the fixed part of the layout.
				 */
				getFixContent(): sap.ui.core.Control[];

				/**
				 * Gets current value of property <code>fixContentSize</code>.Determines the height (if the vertical
				 * property is "true") or the width (if the vertical property is "false") of the fixed area. If left at
				 * the default value "auto", the fixed-size area will be as large as its content. In this case the
				 * content cannot use percentage sizes.Default value is <code>auto</code>.
				 * @returns Value of property <code>fixContentSize</code>
				 */
				getFixContentSize(): any;

				/**
				 * Gets current value of property <code>fixFirst</code>.Determines whether the fixed-size area should
				 * be on the beginning/top ( if the value is "true") or beginning/bottom ( if the value is
				 * "false").Default value is <code>true</code>.
				 * @returns Value of property <code>fixFirst</code>
				 */
				getFixFirst(): boolean;

				/**
				 * Gets content of aggregation <code>flexContent</code>.Control in the stretching part of the layout.
				 */
				getFlexContent(): sap.ui.core.Control;

				/**
				 * Returns a metadata object for class sap.ui.layout.FixFlex.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>minFlexSize</code>.Enables scrolling inside the flexible part.
				 * The given size is calculated in "px". If the child control in the flexible part is larger then the
				 * available flexible size on the screen and if the available size for the flexible part is smaller or
				 * equal to the minFlexSize value, the scroll will be for the entire FixFlex control.Default value is
				 * <code>0</code>.
				 * @since 1.29
				 * @returns Value of property <code>minFlexSize</code>
				 */
				getMinFlexSize(): number;

				/**
				 * Gets current value of property <code>vertical</code>.Determines the direction of the layout of child
				 * elements. True for vertical and false for horizontal layout.Default value is <code>true</code>.
				 * @returns Value of property <code>vertical</code>
				 */
				getVertical(): boolean;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
				 * <code>fixContent</code>.and returns its index if found or -1 otherwise.
				 * @param oFixContent The fixContent whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfFixContent(oFixContent: sap.ui.core.Control): number;

				/**
				 * Inserts a fixContent into the aggregation <code>fixContent</code>.
				 * @param oFixContent the fixContent to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the fixContent should be inserted at; for             a
				 * negative value of <code>iIndex</code>, the fixContent is inserted at position 0; for a value
				 *     greater than the current size of the aggregation, the fixContent is inserted at             the
				 * last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertFixContent(
					oFixContent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.FixFlex;

				/**
				 * Removes all the controls from the aggregation <code>fixContent</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllFixContent(): sap.ui.core.Control[];

				/**
				 * Removes a fixContent from the aggregation <code>fixContent</code>.
				 * @param vFixContent The fixContent to remove or its index or id
				 * @returns The removed fixContent or <code>null</code>
				 */
				removeFixContent(
					vFixContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>fixContentSize</code>.Determines the height (if the vertical
				 * property is "true") or the width (if the vertical property is "false") of the fixed area. If left at
				 * the default value "auto", the fixed-size area will be as large as its content. In this case the
				 * content cannot use percentage sizes.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>auto</code>.
				 * @param sFixContentSize New value for property <code>fixContentSize</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setFixContentSize(sFixContentSize: any): sap.ui.layout.FixFlex;

				/**
				 * Sets a new value for property <code>fixFirst</code>.Determines whether the fixed-size area should be
				 * on the beginning/top ( if the value is "true") or beginning/bottom ( if the value is "false").When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.Default value is <code>true</code>.
				 * @param bFixFirst New value for property <code>fixFirst</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setFixFirst(bFixFirst: boolean): sap.ui.layout.FixFlex;

				/**
				 * Sets the aggregated <code>flexContent</code>.
				 * @param oFlexContent The flexContent to set
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setFlexContent(
					oFlexContent: sap.ui.core.Control
				): sap.ui.layout.FixFlex;

				/**
				 * Sets a new value for property <code>minFlexSize</code>.Enables scrolling inside the flexible part.
				 * The given size is calculated in "px". If the child control in the flexible part is larger then the
				 * available flexible size on the screen and if the available size for the flexible part is smaller or
				 * equal to the minFlexSize value, the scroll will be for the entire FixFlex control.When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>0</code>.
				 * @since 1.29
				 * @param iMinFlexSize New value for property <code>minFlexSize</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setMinFlexSize(iMinFlexSize: number): sap.ui.layout.FixFlex;

				/**
				 * Sets a new value for property <code>vertical</code>.Determines the direction of the layout of child
				 * elements. True for vertical and false for horizontal layout.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>true</code>.
				 * @param bVertical New value for property <code>vertical</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVertical(bVertical: boolean): sap.ui.layout.FixFlex;
			}

			namespace GridData {
				interface Properties {
					indent?: string;
					indentXL?: number;
					indentL?: number;
					indentM?: number;
					indentS?: number;

					linebreak?: boolean;
					linebreakXL?: boolean;
					linebreakL?: boolean;
					linebreakM?: boolean;
					linebreakS?: boolean;

					span?: string;
					spanXL?: number;
					spanL?: number;
					spanM?: number;
					spanS?: number;

					visibleXL?: boolean;
					visibleL?: boolean;
					visibleM?: boolean;
					visibleS?: boolean;
				}

				type Settings = Properties;
			}
			/**
			 * Grid layout data
			 * @resource sap/ui/layout/GridData.js
			 */
			export class GridData extends sap.ui.core.LayoutData {
				/**
				 * Constructor for a new GridData.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: GridData.Settings);
				constructor(mSettings?: GridData.Settings);

				/**
				 * Gets current value of property <code>indent</code>.A string type that represents Grid's span values
				 * for large, medium and small screens. Allowed values are separated by space Letters L, M or S
				 * followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6",
				 * "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium
				 * small.
				 * @returns Value of property <code>indent</code>
				 */
				getIndent(): any;

				/**
				 * Gets current value of property <code>indentL</code>.Optional. Defines a span value for large
				 * screens. This value overwrites the value for large screens defined in the parameter "indent".
				 * @returns Value of property <code>indentL</code>
				 */
				getIndentL(): number;

				/**
				 * Gets current value of property <code>indentLarge</code>.Deprecated. Defines a span value for large
				 * screens. This value overwrites the value for large screens defined in the parameter "indent".
				 * @returns Value of property <code>indentLarge</code>
				 */
				getIndentLarge(): number;

				/**
				 * Gets current value of property <code>indentM</code>.Optional. Defines a span value for medium size
				 * screens. This value overwrites the value for medium screens defined in the parameter "indent".
				 * @returns Value of property <code>indentM</code>
				 */
				getIndentM(): number;

				/**
				 * Gets current value of property <code>indentMedium</code>.Deprecated. Defines a span value for medium
				 * size screens. This value overwrites the value for medium screens defined in the parameter "indent".
				 * @returns Value of property <code>indentMedium</code>
				 */
				getIndentMedium(): number;

				/**
				 * Gets current value of property <code>indentS</code>.Optional. Defines a span value for small
				 * screens. This value overwrites the value for small screens defined in the parameter "indent".
				 * @returns Value of property <code>indentS</code>
				 */
				getIndentS(): number;

				/**
				 * Gets current value of property <code>indentSmall</code>.Deprecated. Defines a span value for small
				 * screens. This value overwrites the value for small screens defined in the parameter "indent".
				 * @returns Value of property <code>indentSmall</code>
				 */
				getIndentSmall(): number;

				/**
				 * Gets current value of property <code>indentXL</code>.Optional. Defines a span value for extra large
				 * screens. This value overwrites the value for extra large screens defined in the parameter "indent".
				 * @returns Value of property <code>indentXL</code>
				 */
				getIndentXL(): number;

				/**
				 * Gets current value of property <code>linebreak</code>.Optional. If this property is set to true, the
				 * control on all-size screens causes a line break within the Grid and becomes the first within the
				 * next line.Default value is <code>false</code>.
				 * @returns Value of property <code>linebreak</code>
				 */
				getLinebreak(): boolean;

				/**
				 * Gets current value of property <code>linebreakL</code>.Optional. If this property is set to true,
				 * the control on large screens causes a line break within the Grid and becomes the first within the
				 * next line.Default value is <code>false</code>.
				 * @returns Value of property <code>linebreakL</code>
				 */
				getLinebreakL(): boolean;

				/**
				 * Gets current value of property <code>linebreakM</code>.Optional. If this property is set to true,
				 * the control on medium sized screens causes a line break within the Grid and becomes the first within
				 * the next line.Default value is <code>false</code>.
				 * @returns Value of property <code>linebreakM</code>
				 */
				getLinebreakM(): boolean;

				/**
				 * Gets current value of property <code>linebreakS</code>.Optional. If this property is set to true,
				 * the control on small screens causes a line break within the Grid and becomes the first within the
				 * next line.Default value is <code>false</code>.
				 * @returns Value of property <code>linebreakS</code>
				 */
				getLinebreakS(): boolean;

				/**
				 * Gets current value of property <code>linebreakXL</code>.Optional. If this property is set to true,
				 * the control on extra large screens causes a line break within the Grid and becomes the first within
				 * the next line.Default value is <code>false</code>.
				 * @returns Value of property <code>linebreakXL</code>
				 */
				getLinebreakXL(): boolean;

				/**
				 * Returns a metadata object for class sap.ui.layout.GridData.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>moveBackwards</code>.Optional. Moves a cell backwards so many
				 * columns as specified.
				 * @returns Value of property <code>moveBackwards</code>
				 */
				getMoveBackwards(): any;

				/**
				 * Gets current value of property <code>moveForward</code>.Optional. Moves a cell forwards so many
				 * columns as specified.
				 * @returns Value of property <code>moveForward</code>
				 */
				getMoveForward(): any;

				/**
				 * Gets current value of property <code>span</code>.A string type that represents Grid's span values
				 * for large, medium and small screens. Allowed values are separated by space Letters L, M or S
				 * followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6",
				 * "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium
				 * small.
				 * @returns Value of property <code>span</code>
				 */
				getSpan(): any;

				/**
				 * Gets current value of property <code>spanL</code>.Optional. Defines a span value for large screens.
				 * This value overwrites the value for large screens defined in the parameter "span".
				 * @returns Value of property <code>spanL</code>
				 */
				getSpanL(): number;

				/**
				 * Gets current value of property <code>spanLarge</code>.Deprecated. Defines a span value for large
				 * screens. This value overwrites the value for large screens defined in the parameter "span".
				 * @returns Value of property <code>spanLarge</code>
				 */
				getSpanLarge(): number;

				/**
				 * Gets current value of property <code>spanM</code>.Optional. Defines a span value for medium size
				 * screens. This value overwrites the value for medium screens defined in the parameter "span".
				 * @returns Value of property <code>spanM</code>
				 */
				getSpanM(): number;

				/**
				 * Gets current value of property <code>spanMedium</code>.Deprecated. Defines a span value for medium
				 * size screens. This value overwrites the value for medium screens defined in the parameter "span".
				 * @returns Value of property <code>spanMedium</code>
				 */
				getSpanMedium(): number;

				/**
				 * Gets current value of property <code>spanS</code>.Optional. Defines a span value for small screens.
				 * This value overwrites the value for small screens defined in the parameter "span".
				 * @returns Value of property <code>spanS</code>
				 */
				getSpanS(): number;

				/**
				 * Gets current value of property <code>spanSmall</code>.Deprecated. Defines a span value for small
				 * screens. This value overwrites the value for small screens defined in the parameter "span".
				 * @returns Value of property <code>spanSmall</code>
				 */
				getSpanSmall(): number;

				/**
				 * Gets current value of property <code>spanXL</code>.Optional. Defines a span value for extra large
				 * screens. This value overwrites the value for extra large screens defined in the parameter "span".
				 * @returns Value of property <code>spanXL</code>
				 */
				getSpanXL(): number;

				/**
				 * Gets current value of property <code>visibleL</code>.Defines if this Control is visible on Large
				 * screens.Default value is <code>true</code>.
				 * @returns Value of property <code>visibleL</code>
				 */
				getVisibleL(): boolean;

				/**
				 * Gets current value of property <code>visibleM</code>.Defines if this Control is visible on Medium
				 * size screens.Default value is <code>true</code>.
				 * @returns Value of property <code>visibleM</code>
				 */
				getVisibleM(): boolean;

				/**
				 * Gets current value of property <code>visibleOnLarge</code>.Deprecated. Defines if this Control is
				 * visible on Large screens.Default value is <code>true</code>.
				 * @returns Value of property <code>visibleOnLarge</code>
				 */
				getVisibleOnLarge(): boolean;

				/**
				 * Gets current value of property <code>visibleOnMedium</code>.Deprecated. Defines if this Control is
				 * visible on Medium size screens.Default value is <code>true</code>.
				 * @returns Value of property <code>visibleOnMedium</code>
				 */
				getVisibleOnMedium(): boolean;

				/**
				 * Gets current value of property <code>visibleOnSmall</code>.Deprecated. Defines if this Control is
				 * visible on small screens.Default value is <code>true</code>.
				 * @returns Value of property <code>visibleOnSmall</code>
				 */
				getVisibleOnSmall(): boolean;

				/**
				 * Gets current value of property <code>visibleS</code>.Defines if this Control is visible on small
				 * screens.Default value is <code>true</code>.
				 * @returns Value of property <code>visibleS</code>
				 */
				getVisibleS(): boolean;

				/**
				 * Gets current value of property <code>visibleXL</code>.Defines if this Control is visible on XL -
				 * extra Large screens.Default value is <code>true</code>.
				 * @returns Value of property <code>visibleXL</code>
				 */
				getVisibleXL(): boolean;

				/**
				 * Sets a new value for property <code>indent</code>.A string type that represents Grid's span values
				 * for large, medium and small screens. Allowed values are separated by space Letters L, M or S
				 * followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6",
				 * "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium
				 * small.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param sIndent New value for property <code>indent</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndent(sIndent: any): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>indentL</code>.Optional. Defines a span value for large screens.
				 * This value overwrites the value for large screens defined in the parameter "indent".When called with
				 * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param iIndentL New value for property <code>indentL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndentL(iIndentL: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>indentLarge</code>.Deprecated. Defines a span value for large
				 * screens. This value overwrites the value for large screens defined in the parameter "indent".When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param iIndentLarge New value for property <code>indentLarge</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndentLarge(iIndentLarge: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>indentM</code>.Optional. Defines a span value for medium size
				 * screens. This value overwrites the value for medium screens defined in the parameter "indent".When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param iIndentM New value for property <code>indentM</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndentM(iIndentM: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>indentMedium</code>.Deprecated. Defines a span value for medium
				 * size screens. This value overwrites the value for medium screens defined in the parameter
				 * "indent".When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.
				 * @param iIndentMedium New value for property <code>indentMedium</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndentMedium(iIndentMedium: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>indentS</code>.Optional. Defines a span value for small screens.
				 * This value overwrites the value for small screens defined in the parameter "indent".When called with
				 * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param iIndentS New value for property <code>indentS</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndentS(iIndentS: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>indentSmall</code>.Deprecated. Defines a span value for small
				 * screens. This value overwrites the value for small screens defined in the parameter "indent".When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param iIndentSmall New value for property <code>indentSmall</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndentSmall(iIndentSmall: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>indentXL</code>.Optional. Defines a span value for extra large
				 * screens. This value overwrites the value for extra large screens defined in the parameter
				 * "indent".When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.
				 * @param iIndentXL New value for property <code>indentXL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIndentXL(iIndentXL: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>linebreak</code>.Optional. If this property is set to true, the
				 * control on all-size screens causes a line break within the Grid and becomes the first within the
				 * next line.When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>false</code>.
				 * @param bLinebreak New value for property <code>linebreak</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLinebreak(bLinebreak: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>linebreakL</code>.Optional. If this property is set to true, the
				 * control on large screens causes a line break within the Grid and becomes the first within the next
				 * line.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>false</code>.
				 * @param bLinebreakL New value for property <code>linebreakL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLinebreakL(bLinebreakL: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>linebreakM</code>.Optional. If this property is set to true, the
				 * control on medium sized screens causes a line break within the Grid and becomes the first within the
				 * next line.When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>false</code>.
				 * @param bLinebreakM New value for property <code>linebreakM</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLinebreakM(bLinebreakM: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>linebreakS</code>.Optional. If this property is set to true, the
				 * control on small screens causes a line break within the Grid and becomes the first within the next
				 * line.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>false</code>.
				 * @param bLinebreakS New value for property <code>linebreakS</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLinebreakS(bLinebreakS: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>linebreakXL</code>.Optional. If this property is set to true,
				 * the control on extra large screens causes a line break within the Grid and becomes the first within
				 * the next line.When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>false</code>.
				 * @param bLinebreakXL New value for property <code>linebreakXL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLinebreakXL(bLinebreakXL: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>moveBackwards</code>.Optional. Moves a cell backwards so many
				 * columns as specified.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.
				 * @param sMoveBackwards New value for property <code>moveBackwards</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setMoveBackwards(sMoveBackwards: any): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>moveForward</code>.Optional. Moves a cell forwards so many
				 * columns as specified.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.
				 * @param sMoveForward New value for property <code>moveForward</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setMoveForward(sMoveForward: any): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>span</code>.A string type that represents Grid's span values for
				 * large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by
				 * number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10"
				 * or "l4 m4". Note that the parameters has to be provided in the order large medium small.When called
				 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
				 * be restored.
				 * @param sSpan New value for property <code>span</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpan(sSpan: any): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>spanL</code>.Optional. Defines a span value for large screens.
				 * This value overwrites the value for large screens defined in the parameter "span".When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param iSpanL New value for property <code>spanL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpanL(iSpanL: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>spanLarge</code>.Deprecated. Defines a span value for large
				 * screens. This value overwrites the value for large screens defined in the parameter "span".When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param iSpanLarge New value for property <code>spanLarge</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpanLarge(iSpanLarge: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>spanM</code>.Optional. Defines a span value for medium size
				 * screens. This value overwrites the value for medium screens defined in the parameter "span".When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param iSpanM New value for property <code>spanM</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpanM(iSpanM: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>spanMedium</code>.Deprecated. Defines a span value for medium
				 * size screens. This value overwrites the value for medium screens defined in the parameter
				 * "span".When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param iSpanMedium New value for property <code>spanMedium</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpanMedium(iSpanMedium: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>spanS</code>.Optional. Defines a span value for small screens.
				 * This value overwrites the value for small screens defined in the parameter "span".When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param iSpanS New value for property <code>spanS</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpanS(iSpanS: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>spanSmall</code>.Deprecated. Defines a span value for small
				 * screens. This value overwrites the value for small screens defined in the parameter "span".When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param iSpanSmall New value for property <code>spanSmall</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpanSmall(iSpanSmall: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>spanXL</code>.Optional. Defines a span value for extra large
				 * screens. This value overwrites the value for extra large screens defined in the parameter
				 * "span".When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param iSpanXL New value for property <code>spanXL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSpanXL(iSpanXL: number): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>visibleL</code>.Defines if this Control is visible on Large
				 * screens.When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>true</code>.
				 * @param bVisibleL New value for property <code>visibleL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisibleL(bVisibleL: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>visibleM</code>.Defines if this Control is visible on Medium
				 * size screens.When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>true</code>.
				 * @param bVisibleM New value for property <code>visibleM</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisibleM(bVisibleM: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>visibleOnLarge</code>.Deprecated. Defines if this Control is
				 * visible on Large screens.When called with a value of <code>null</code> or <code>undefined</code>,
				 * the default value of the property will be restored.Default value is <code>true</code>.
				 * @param bVisibleOnLarge New value for property <code>visibleOnLarge</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisibleOnLarge(bVisibleOnLarge: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>visibleOnMedium</code>.Deprecated. Defines if this Control is
				 * visible on Medium size screens.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>true</code>.
				 * @param bVisibleOnMedium New value for property <code>visibleOnMedium</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisibleOnMedium(bVisibleOnMedium: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>visibleOnSmall</code>.Deprecated. Defines if this Control is
				 * visible on small screens.When called with a value of <code>null</code> or <code>undefined</code>,
				 * the default value of the property will be restored.Default value is <code>true</code>.
				 * @param bVisibleOnSmall New value for property <code>visibleOnSmall</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisibleOnSmall(bVisibleOnSmall: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>visibleS</code>.Defines if this Control is visible on small
				 * screens.When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>true</code>.
				 * @param bVisibleS New value for property <code>visibleS</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisibleS(bVisibleS: boolean): sap.ui.layout.GridData;

				/**
				 * Sets a new value for property <code>visibleXL</code>.Defines if this Control is visible on XL -
				 * extra Large screens.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>true</code>.
				 * @param bVisibleXL New value for property <code>visibleXL</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisibleXL(bVisibleXL: boolean): sap.ui.layout.GridData;
			}
			/**
			 * A layout that contains several content areas. The content that is added to the splitter should
			 * contain LayoutData of the type SplitterLayoutData that defines its size and size contraints.By
			 * adding or changing SplitterLayoutData to the controls that make up the content areas, the size can
			 * be changed programatically. Additionally the contents can be made non-resizable individually and a
			 * minimal size (in px) can be set.The orientation of the splitter can be set to horizontal (default)
			 * or vertical. All content areas of the splitter will be arranged in that way. In order to split
			 * vertically and horizontally at the same time, Splitters need to be nested.The splitter bars can be
			 * focused to enable resizing of the content areas via keyboard. The contents size can be manipulated
			 * when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed. When Shift-Home/End are
			 * pressed, the contents are set their minimum or maximum size (keep in mind though, that resizing an
			 * auto-size content-area next to another auto-size one might lead to the effect that the former does
			 * not take its maximum size but only the maximum size before recalculating auto sizes).The splitter
			 * bars used for resizing the contents by the user can be set to different widths (or heights in
			 * vertical mode) and the splitter will automatically resize the other contents accordingly. In case
			 * the splitter bar is resized after the splitter has rendered, a manual resize has to be triggered by
			 * invoking triggerResize() on the Splitter.
			 * @resource sap/ui/layout/Splitter.js
			 */
			export class Splitter extends sap.ui.core.Control {
				/**
				 * Constructor for a new Splitter.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some contentArea to the aggregation <code>contentAreas</code>.
				 * @param oContentArea the contentArea to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addContentArea(
					oContentArea: sap.ui.core.Control
				): sap.ui.layout.Splitter;

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>resize</code> event of this
				 * <code>sap.ui.layout.Splitter</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.layout.Splitter</code> itself.Event is fired when contents are resized.
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.layout.Splitter</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachResize(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.layout.Splitter;

				/**
				 * Destroys all the contentAreas in the aggregation <code>contentAreas</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContentAreas(): sap.ui.layout.Splitter;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>resize</code> event of this
				 * <code>sap.ui.layout.Splitter</code>.The passed function and listener object must match the ones used
				 * for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachResize(fnFunction: any, oListener: any): sap.ui.layout.Splitter;

				/**
				 * Disables the resize handler for this control, this leads to an automatic resize ofthe contents
				 * whenever the control changes its size. The resize handler is enabledin every control instance by
				 * default.For performance reasons this behavior can be disabled by calling disableAutoResize()
				 * @param bTemporarily Only disable autoResize temporarily (used for live resize), so that the previous
				 * status can be restored afterwards
				 */
				disableAutoResize(bTemporarily: boolean): void;

				/**
				 * Disables the resizing of the Splitter contents via keyboard. This changes the Splitter barsto
				 * non-focussable elements.
				 */
				disableKeyboardSupport(): void;

				/**
				 * Disables recalculation and resize of the splitter contents while dragging the splitter bar.This
				 * means that the contents are resized only once after moving the splitter bar.
				 */
				disableLiveResize(): void;

				/**
				 * Enables the resize handler for this control, this leads to an automatic resize ofthe contents
				 * whenever the control changes its size. The resize handler is enabledin every control instance by
				 * default.For performance reasons this behavior can be disabled by calling disableAutoResize()
				 * @param bTemporarily Only enables autoResize if it was previously disabled temporarily (used for live
				 * resize)
				 */
				enableAutoResize(bTemporarily: boolean): void;

				/**
				 * Enables the resizing of the Splitter contents via keyboard. This makes the Splitter barsfocussable
				 * elements.
				 */
				enableKeyboardSupport(): void;

				/**
				 * Enables recalculation and resize of the splitter contents while dragging the splitter bar.This means
				 * that the contents are resized several times per second when moving the splitter bar.
				 */
				enableLiveResize(): void;

				/**
				 * Fires event <code>resize</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>id</code> of type <code>string</code>The ID of the splitter control. The
				 * splitter control can also be accessed by calling getSource() on the
				 * event.</li><li><code>oldSizes</code> of type <code>int[]</code>An array of values representing the
				 * old (pixel-)sizes of the splitter contents</li><li><code>newSizes</code> of type
				 * <code>int[]</code>An array of values representing the new (pixel-)sizes of the splitter
				 * contents</li></ul>
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireResize(mArguments: any): sap.ui.layout.Splitter;

				/**
				 * Returns the current actual content sizes as pixel value - these values can change with everyresize.
				 * @returns Array of px values that correspond to the content area sizes
				 */
				getCalculatedSizes(): Number[];

				/**
				 * Gets content of aggregation <code>contentAreas</code>.The content areas to be split. The control
				 * will show n-1 splitter bars between n controls in this aggregation.
				 */
				getContentAreas(): sap.ui.core.Control[];

				/**
				 * Gets current value of property <code>height</code>.The height of the controlDefault value is
				 * <code>100%</code>.
				 * @returns Value of property <code>height</code>
				 */
				getHeight(): any;

				/**
				 * Returns a metadata object for class sap.ui.layout.Splitter.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>orientation</code>.Whether to split the contents horizontally
				 * (default) or vertically.Default value is <code>Horizontal</code>.
				 * @returns Value of property <code>orientation</code>
				 */
				getOrientation(): sap.ui.core.Orientation;

				/**
				 * Gets current value of property <code>width</code>.The width of the controlDefault value is
				 * <code>100%</code>.
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): any;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
				 * <code>contentAreas</code>.and returns its index if found or -1 otherwise.
				 * @param oContentArea The contentArea whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfContentArea(oContentArea: sap.ui.core.Control): number;

				/**
				 * Inserts a contentArea into the aggregation <code>contentAreas</code>.
				 * @param oContentArea the contentArea to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the contentArea should be inserted at; for
				 * a negative value of <code>iIndex</code>, the contentArea is inserted at position 0; for a value
				 *        greater than the current size of the aggregation, the contentArea is inserted at
				 * the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertContentArea(
					oContentArea: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.Splitter;

				/**
				 * Removes all the controls from the aggregation <code>contentAreas</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContentAreas(): sap.ui.core.Control[];

				/**
				 * Removes a contentArea from the aggregation <code>contentAreas</code>.
				 * @param vContentArea The contentArea to remove or its index or id
				 * @returns The removed contentArea or <code>null</code>
				 */
				removeContentArea(
					vContentArea: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>height</code>.The height of the controlWhen called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>100%</code>.
				 * @param sHeight New value for property <code>height</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHeight(sHeight: any): sap.ui.layout.Splitter;

				/**
				 * Sets a new value for property <code>orientation</code>.Whether to split the contents horizontally
				 * (default) or vertically.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>Horizontal</code>.
				 * @param sOrientation New value for property <code>orientation</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setOrientation(
					sOrientation: sap.ui.core.Orientation
				): sap.ui.layout.Splitter;

				/**
				 * Sets a new value for property <code>width</code>.The width of the controlWhen called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>100%</code>.
				 * @param sWidth New value for property <code>width</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWidth(sWidth: any): sap.ui.layout.Splitter;

				/**
				 * This method  triggers a resize on the Splitter - meaning it forces the Splitter to recalculateall
				 * sizes.This method should only be used in rare cases, for example when the CSS that defines the
				 * sizesof the splitter bars changes without triggering a rerendering of the splitter.
				 * @param forceDirectly Do not delay the resize, trigger it right now.
				 */
				triggerResize(forceDirectly: boolean): void;
			}
			/**
			 * SplitPane is a container of a single control.Could be used as an aggregation of a PaneContainer.
			 * @resource sap/ui/layout/SplitPane.js
			 */
			export class SplitPane extends sap.ui.core.Element {
				/**
				 * Constructor for a new SplitPane.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Destroys the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.SplitPane;

				/**
				 * Gets content of aggregation <code>content</code>.Content of the SplitPane
				 */
				getContent(): sap.ui.core.Control;

				/**
				 * Gets current value of property <code>demandPane</code>.Determines whether the pane will be moved to
				 * the paginationDefault value is <code>true</code>.
				 * @returns Value of property <code>demandPane</code>
				 */
				getDemandPane(): boolean;

				/**
				 * Returns a metadata object for class sap.ui.layout.SplitPane.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>requiredParentWidth</code>.Determines the minimum width of the
				 * ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.Default
				 * value is <code>800</code>.
				 * @returns Value of property <code>requiredParentWidth</code>
				 */
				getRequiredParentWidth(): number;

				/**
				 * Sets the aggregated <code>content</code>.
				 * @param oContent The content to set
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setContent(oContent: sap.ui.core.Control): sap.ui.layout.SplitPane;

				/**
				 * Sets a new value for property <code>demandPane</code>.Determines whether the pane will be moved to
				 * the paginationWhen called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>true</code>.
				 * @param bDemandPane New value for property <code>demandPane</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setDemandPane(bDemandPane: boolean): sap.ui.layout.SplitPane;

				/**
				 * Sets a new value for property <code>requiredParentWidth</code>.Determines the minimum width of the
				 * ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.Default value is <code>800</code>.
				 * @param iRequiredParentWidth New value for property <code>requiredParentWidth</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setRequiredParentWidth(
					iRequiredParentWidth: number
				): sap.ui.layout.SplitPane;
			}
			/**
			 * The BlockLayout is used to display several objects in a section-based manner. It features horizontal
			 * and vertical subdivisions, and full-width banners seen frequently in contemporary web design.
			 * Background colors are attached directly to these “blocks” of the layout. Special full-width sections
			 * of the BlockLayout allow horizontal scrolling through a set of blocks.Example use cases are SAP HANA
			 * Cloud Integration and the SAPUI5 Demo Kit. In SAP HANA Cloud Integration the BlockLayout serves as a
			 * banner-like presentation of illustrative icons with associated text. By placing pictorial and
			 * textual elements side by side in different blocks, a relation of content is established. In the
			 * SAPUI5 Demo Kit the BlockLayout serves as a flexible container for diverging content, such as
			 * headings, explanatory texts, code snippets, remarks, and examples.The BlockLayout comes in three
			 * types: Layout only (default), Bright, and Mixed background colors.
			 * @resource sap/ui/layout/BlockLayout.js
			 */
			export class BlockLayout extends sap.ui.core.Control {
				/**
				 * Constructor for a new BlockLayout.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some content to the aggregation <code>content</code>.
				 * @param oContent the content to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addContent(
					oContent: sap.ui.layout.BlockLayoutRow
				): sap.ui.layout.BlockLayout;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.BlockLayout;

				/**
				 * Gets current value of property <code>background</code>.Determines the background used for the
				 * LayoutDefault value is <code>Default</code>.
				 * @returns Value of property <code>background</code>
				 */
				getBackground(): typeof sap.ui.layout.BlockBackgroundType;

				/**
				 * Gets content of aggregation <code>content</code>.The Rows to be included in the content of the
				 * control
				 */
				getContent(): sap.ui.layout.BlockLayoutRow[];

				/**
				 * Returns a metadata object for class sap.ui.layout.BlockLayout.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Checks for the provided <code>sap.ui.layout.BlockLayoutRow</code> in the aggregation
				 * <code>content</code>.and returns its index if found or -1 otherwise.
				 * @param oContent The content whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfContent(oContent: sap.ui.layout.BlockLayoutRow): number;

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
					oContent: sap.ui.layout.BlockLayoutRow,
					iIndex: number
				): sap.ui.layout.BlockLayout;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.layout.BlockLayoutRow[];

				/**
				 * Removes a content from the aggregation <code>content</code>.
				 * @param vContent The content to remove or its index or id
				 * @returns The removed content or <code>null</code>
				 */
				removeContent(
					vContent: number | string | sap.ui.layout.BlockLayoutRow
				): sap.ui.layout.BlockLayoutRow;

				/**
				 * Sets a new value for property <code>background</code>.Determines the background used for the
				 * LayoutWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>Default</code>.
				 * @param sBackground New value for property <code>background</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setBackground(
					sBackground: typeof sap.ui.layout.BlockBackgroundType
				): sap.ui.layout.BlockLayout;
			}
			/**
			 * PaneContainer is an abstraction of SplitterCould be used as an aggregation of ResponsiveSplitter or
			 * other PaneContainers.
			 * @resource sap/ui/layout/PaneContainer.js
			 */
			export class PaneContainer extends sap.ui.core.Element {
				/**
				 * Constructor for a new PaneContainer.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some pane to the aggregation <code>panes</code>.
				 * @param oPane the pane to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addPane(oPane: sap.ui.core.Element): sap.ui.layout.PaneContainer;

				/**
				 * Destroys all the panes in the aggregation <code>panes</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyPanes(): sap.ui.layout.PaneContainer;

				/**
				 * Returns a metadata object for class sap.ui.layout.PaneContainer.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>orientation</code>.The orientation of the SplitterDefault value
				 * is <code>Horizontal</code>.
				 * @returns Value of property <code>orientation</code>
				 */
				getOrientation(): sap.ui.core.Orientation;

				/**
				 * Gets content of aggregation <code>panes</code>.The Pane that will be shown when there is no suitable
				 * pane for ResponsiveSplitter's current width.
				 */
				getPanes(): sap.ui.core.Element[];

				/**
				 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation <code>panes</code>.and
				 * returns its index if found or -1 otherwise.
				 * @param oPane The pane whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfPane(oPane: sap.ui.core.Element): number;

				/**
				 * Inserts a pane into the aggregation <code>panes</code>.
				 * @param oPane the pane to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the pane should be inserted at; for             a
				 * negative value of <code>iIndex</code>, the pane is inserted at position 0; for a value
				 * greater than the current size of the aggregation, the pane is inserted at             the last
				 * position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertPane(
					oPane: sap.ui.core.Element,
					iIndex: number
				): sap.ui.layout.PaneContainer;

				/**
				 * Removes all the controls from the aggregation <code>panes</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllPanes(): sap.ui.core.Element[];

				/**
				 * Removes a pane from the aggregation <code>panes</code>.
				 * @param vPane The pane to remove or its index or id
				 * @returns The removed pane or <code>null</code>
				 */
				removePane(
					vPane: number | string | sap.ui.core.Element
				): sap.ui.core.Element;

				/**
				 * Setter for property layoutData.
				 * @param oLayoutData The LayoutData object.
				 * @returns this to allow method chaining.
				 */
				setLayoutData(
					oLayoutData: sap.ui.core.LayoutData
				): sap.ui.layout.PaneContainer;

				/**
				 * Setter for property orientation.Default value is sap.ui.core.Orientation.Horizontal
				 * @param sOrientation The Orientation type.
				 * @returns this to allow method chaining.
				 */
				setOrientation(
					sOrientation: sap.ui.core.Orientation
				): sap.ui.layout.PaneContainer;
			}
			/**
			 * The BlockLayoutRow is used as an aggregation to the BlockLayout. It aggregates Block Layout
			 * cells.The BlockLayoutRow has 2 rendering modes - scrollable and non scrollable.
			 * @resource sap/ui/layout/BlockLayoutRow.js
			 */
			export class BlockLayoutRow extends sap.ui.core.Control {
				/**
				 * Constructor for a new BlockLayoutRow.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some content to the aggregation <code>content</code>.
				 * @param oContent the content to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addContent(
					oContent: sap.ui.layout.BlockLayoutCell
				): sap.ui.layout.BlockLayoutRow;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.BlockLayoutRow;

				/**
				 * Gets content of aggregation <code>content</code>.The content cells to be included in the row.
				 */
				getContent(): sap.ui.layout.BlockLayoutCell[];

				/**
				 * Returns a metadata object for class sap.ui.layout.BlockLayoutRow.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>scrollable</code>.Sets the rendering mode of the BlockLayoutRow
				 * to scrollable. In scrollable mode, the cells getaligned side by side, with horizontal scroll bar for
				 * the row.Default value is <code>false</code>.
				 * @returns Value of property <code>scrollable</code>
				 */
				getScrollable(): boolean;

				/**
				 * Checks for the provided <code>sap.ui.layout.BlockLayoutCell</code> in the aggregation
				 * <code>content</code>.and returns its index if found or -1 otherwise.
				 * @param oContent The content whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfContent(oContent: sap.ui.layout.BlockLayoutCell): number;

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
					oContent: sap.ui.layout.BlockLayoutCell,
					iIndex: number
				): sap.ui.layout.BlockLayoutRow;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.layout.BlockLayoutCell[];

				/**
				 * Removes a content from the aggregation <code>content</code>.
				 * @param vContent The content to remove or its index or id
				 * @returns The removed content or <code>null</code>
				 */
				removeContent(
					vContent: number | string | sap.ui.layout.BlockLayoutCell
				): sap.ui.layout.BlockLayoutCell;

				/**
				 * Sets a new value for property <code>scrollable</code>.Sets the rendering mode of the BlockLayoutRow
				 * to scrollable. In scrollable mode, the cells getaligned side by side, with horizontal scroll bar for
				 * the row.When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>false</code>.
				 * @param bScrollable New value for property <code>scrollable</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setScrollable(bScrollable: boolean): sap.ui.layout.BlockLayoutRow;
			}
			/**
			 * In this layout the content controls are rendered one below the other.
			 * @resource sap/ui/layout/VerticalLayout.js
			 */
			export class VerticalLayout extends sap.ui.core.Control {
				/**
				 * Constructor for a new VerticalLayout.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId Id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some content to the aggregation <code>content</code>.
				 * @param oContent the content to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addContent(oContent: sap.ui.core.Control): sap.ui.layout.VerticalLayout;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.VerticalLayout;

				/**
				 */
				getAccessibilityInfo(): void;

				/**
				 * Gets content of aggregation <code>content</code>.Content controls within the layout.
				 */
				getContent(): sap.ui.core.Control[];

				/**
				 * Gets current value of property <code>enabled</code>.If not enabled, all controls inside are not
				 * enabled automatically.Default value is <code>true</code>.
				 * @returns Value of property <code>enabled</code>
				 */
				getEnabled(): boolean;

				/**
				 * Returns a metadata object for class sap.ui.layout.VerticalLayout.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>width</code>.Width of the <code>VerticalLayout</code>. If no
				 * width is set, the width of the content is used.If the content of the layout has a larger width than
				 * the layout, it is cut off.There is no scrolling inside the layout.
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): any;

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
				insertContent(
					oContent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.VerticalLayout;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.core.Control[];

				/**
				 * Removes a content from the aggregation <code>content</code>.
				 * @param vContent The content to remove or its index or id
				 * @returns The removed content or <code>null</code>
				 */
				removeContent(
					vContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>enabled</code>.If not enabled, all controls inside are not
				 * enabled automatically.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>true</code>.
				 * @param bEnabled New value for property <code>enabled</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setEnabled(bEnabled: boolean): sap.ui.layout.VerticalLayout;
			}
			/**
			 * The BlockLayoutCell is used as an aggregation of the BlockLayoutRow. It contains Controls.The
			 * BlockLayoutCell should be used only as aggregation of the BlockLayoutRow.
			 * @resource sap/ui/layout/BlockLayoutCell.js
			 */
			export class BlockLayoutCell extends sap.ui.core.Control {
				/**
				 * Constructor for a new BlockLayoutCell.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some content to the aggregation <code>content</code>.
				 * @param oContent the content to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addContent(
					oContent: sap.ui.core.Control
				): sap.ui.layout.BlockLayoutCell;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.BlockLayoutCell;

				/**
				 * Gets content of aggregation <code>content</code>.The content to be included inside the cell
				 */
				getContent(): sap.ui.core.Control[];

				/**
				 * Returns a metadata object for class sap.ui.layout.BlockLayoutCell.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>title</code>.Defines the title of the cell
				 * @returns Value of property <code>title</code>
				 */
				getTitle(): string;

				/**
				 * Gets current value of property <code>titleAlignment</code>.Defines the alignment of the cell
				 * titleDefault value is <code>Begin</code>.
				 * @returns Value of property <code>titleAlignment</code>
				 */
				getTitleAlignment(): sap.ui.core.HorizontalAlign;

				/**
				 * Gets current value of property <code>titleLevel</code>.Defines the aria level of the titleThis
				 * information is e.g. used by assistive technologies like screenreaders to create a hierarchical site
				 * map for faster navigation.Default value is <code>Auto</code>.
				 * @returns Value of property <code>titleLevel</code>
				 */
				getTitleLevel(): sap.ui.core.TitleLevel;

				/**
				 * Gets current value of property <code>width</code>.Defines the width of the cell. Depending on the
				 * context of the cell - whether it's in scrollable,or non scrollable row, this property is interpreted
				 * in two different ways.If the cell is placed inside a scrollable row - this property defines the
				 * width of the cell inpercentages. If no value is provided - the default is 40%.If the cell is placed
				 * inside a non scrollable row - this property defines the grow factor of the cellcompared to the whole
				 * row.<b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of
				 * equal size,and they need to fill the whole row. This results in 50% width for each cell. If you have
				 * 2 cells,one with width of 1, the other with width of 3, this means that the whole row width is 4, so
				 * the firstcell will have a width of 25%, the second - 75%.According to the visual guidelines, it is
				 * suggested that you only use 25%, 50%, 75% or 100% cells inyou applications. For example, 12,5% width
				 * is not desirable (1 cell with width 1, and another with width 7)Default value is <code>0</code>.
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): number;

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
				insertContent(
					oContent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.BlockLayoutCell;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.core.Control[];

				/**
				 * Removes a content from the aggregation <code>content</code>.
				 * @param vContent The content to remove or its index or id
				 * @returns The removed content or <code>null</code>
				 */
				removeContent(
					vContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>title</code>.Defines the title of the cellWhen called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param sTitle New value for property <code>title</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setTitle(sTitle: string): sap.ui.layout.BlockLayoutCell;

				/**
				 * Sets a new value for property <code>titleAlignment</code>.Defines the alignment of the cell
				 * titleWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>Begin</code>.
				 * @param sTitleAlignment New value for property <code>titleAlignment</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setTitleAlignment(
					sTitleAlignment: sap.ui.core.HorizontalAlign
				): sap.ui.layout.BlockLayoutCell;

				/**
				 * Sets a new value for property <code>titleLevel</code>.Defines the aria level of the titleThis
				 * information is e.g. used by assistive technologies like screenreaders to create a hierarchical site
				 * map for faster navigation.When called with a value of <code>null</code> or <code>undefined</code>,
				 * the default value of the property will be restored.Default value is <code>Auto</code>.
				 * @param sTitleLevel New value for property <code>titleLevel</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setTitleLevel(
					sTitleLevel: sap.ui.core.TitleLevel
				): sap.ui.layout.BlockLayoutCell;
			}
			/**
			 * A layout that provides support for horizontal alignment of controls
			 * @resource sap/ui/layout/HorizontalLayout.js
			 */
			export class HorizontalLayout extends sap.ui.core.Control {
				/**
				 * Constructor for a new HorizontalLayout.Accepts an object literal <code>mSettings</code> that defines
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
				addContent(
					oContent: sap.ui.core.Control
				): sap.ui.layout.HorizontalLayout;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.HorizontalLayout;

				/**
				 */
				getAccessibilityInfo(): void;

				/**
				 * Gets current value of property <code>allowWrapping</code>.Specifies whether the content inside the
				 * Layout shall be line-wrapped in the case that there is less horizontal space available than
				 * required.Default value is <code>false</code>.
				 * @returns Value of property <code>allowWrapping</code>
				 */
				getAllowWrapping(): boolean;

				/**
				 * Gets content of aggregation <code>content</code>.The controls inside this layout
				 */
				getContent(): sap.ui.core.Control[];

				/**
				 * Returns a metadata object for class sap.ui.layout.HorizontalLayout.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

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
				insertContent(
					oContent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.HorizontalLayout;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.core.Control[];

				/**
				 * Removes a content from the aggregation <code>content</code>.
				 * @param vContent The content to remove or its index or id
				 * @returns The removed content or <code>null</code>
				 */
				removeContent(
					vContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>allowWrapping</code>.Specifies whether the content inside the
				 * Layout shall be line-wrapped in the case that there is less horizontal space available than
				 * required.When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>false</code>.
				 * @param bAllowWrapping New value for property <code>allowWrapping</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setAllowWrapping(
					bAllowWrapping: boolean
				): sap.ui.layout.HorizontalLayout;
			}
			/**
			 * The DynamicSideContent control allows additional (side) content to be displayed alongside or below
			 * the maincontent, within the container the control is used in. There are different size ratios
			 * between the main andthe side content for the different breakpoints. The side content position
			 * (alongside/below the main content)and visibility (visible/hidden) can be configured per breakpoint.
			 * There are 4 predefined breakpoints:- Screen width > 1440 px (XL breakpoint)- Screen width <= 1440 px
			 * (L breakpoint)- Main content width <= 600 px (M breakpoint)- Screen width <= 720 px (S breakpoint)
			 * @resource sap/ui/layout/DynamicSideContent.js
			 */
			export class DynamicSideContent extends sap.ui.core.Control {
				/**
				 * Constructor for a new DynamicSideContent.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds a control to the main content area.Only the main content part in the aggregation is
				 * re-rendered.
				 * @param oControl Object to be added in the aggregation
				 * @returns this pointer for chaining
				 */
				addMainContent(oControl: any): any;

				/**
				 * Adds a control to the side content area.Only the side content part in the aggregation is
				 * re-rendered.
				 * @param oControl Object to be added in the aggregation
				 * @returns this pointer for chaining
				 */
				addSideContent(oControl: any): any;

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>breakpointChanged</code> event of this
				 * <code>sap.ui.layout.DynamicSideContent</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.layout.DynamicSideContent</code> itself.Fires when the current breakpoint has
				 * been changed.
				 * @since 1.32
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.layout.DynamicSideContent</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachBreakpointChanged(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Destroys all the mainContent in the aggregation <code>mainContent</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyMainContent(): sap.ui.layout.DynamicSideContent;

				/**
				 * Destroys all the sideContent in the aggregation <code>sideContent</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroySideContent(): sap.ui.layout.DynamicSideContent;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>breakpointChanged</code> event of this
				 * <code>sap.ui.layout.DynamicSideContent</code>.The passed function and listener object must match the
				 * ones used for event registration.
				 * @since 1.32
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachBreakpointChanged(
					fnFunction: any,
					oListener: any
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Fires event <code>breakpointChanged</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>currentBreakpoint</code> of type <code>string</code></li></ul>
				 * @since 1.32
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireBreakpointChanged(
					mArguments: any
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Gets current value of property <code>containerQuery</code>.If set to TRUE, then not the media Query
				 * (device screen size) but the size of the container, surrounding the control, defines the current
				 * range.Default value is <code>false</code>.
				 * @returns Value of property <code>containerQuery</code>
				 */
				getContainerQuery(): boolean;

				/**
				 * Returns the breakpoint for the current state of the control.
				 * @returns currentBreakpoint
				 */
				getCurrentBreakpoint(): string;

				/**
				 * Gets current value of property <code>equalSplit</code>.Defines whether the control is in equal split
				 * mode. In this mode, the side and the main contenttake 50:50 percent of the container on all screen
				 * sizes except for phone, where the main andside contents are switching visibility using the toggle
				 * method.Default value is <code>false</code>.
				 * @returns Value of property <code>equalSplit</code>
				 */
				getEqualSplit(): boolean;

				/**
				 * Gets content of aggregation <code>mainContent</code>.Main content controls.
				 */
				getMainContent(): sap.ui.core.Control[];

				/**
				 * Returns a metadata object for class sap.ui.layout.DynamicSideContent.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets the value of showMainContent property.
				 * @returns Side content visibility state
				 */
				getShowMainContent(): boolean;

				/**
				 * Gets the value of showSideContent property.
				 * @returns Side content visibility state
				 */
				getShowSideContent(): boolean;

				/**
				 * Gets content of aggregation <code>sideContent</code>.Side content controls.
				 */
				getSideContent(): sap.ui.core.Control[];

				/**
				 * Gets current value of property <code>sideContentFallDown</code>.Determines on which breakpoints the
				 * side content falls down below the main content.Default value is <code>OnMinimumWidth</code>.
				 * @returns Value of property <code>sideContentFallDown</code>
				 */
				getSideContentFallDown(): sap.ui.layout.SideContentFallDown;

				/**
				 * Gets current value of property <code>sideContentPosition</code>.Determines whether the side content
				 * is on the left or on the right side of the main content.Default value is <code>End</code>.
				 * @since 1.36
				 * @returns Value of property <code>sideContentPosition</code>
				 */
				getSideContentPosition(): sap.ui.layout.SideContentPosition;

				/**
				 * Gets current value of property <code>sideContentVisibility</code>.Determines on which breakpoints
				 * the side content is visible.Default value is <code>ShowAboveS</code>.
				 * @returns Value of property <code>sideContentVisibility</code>
				 */
				getSideContentVisibility(): sap.ui.layout.SideContentVisibility;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
				 * <code>mainContent</code>.and returns its index if found or -1 otherwise.
				 * @param oMainContent The mainContent whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfMainContent(oMainContent: sap.ui.core.Control): number;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
				 * <code>sideContent</code>.and returns its index if found or -1 otherwise.
				 * @param oSideContent The sideContent whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfSideContent(oSideContent: sap.ui.core.Control): number;

				/**
				 * Inserts a mainContent into the aggregation <code>mainContent</code>.
				 * @param oMainContent the mainContent to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the mainContent should be inserted at; for
				 * a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value
				 *        greater than the current size of the aggregation, the mainContent is inserted at
				 * the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertMainContent(
					oMainContent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Inserts a sideContent into the aggregation <code>sideContent</code>.
				 * @param oSideContent the sideContent to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the sideContent should be inserted at; for
				 * a negative value of <code>iIndex</code>, the sideContent is inserted at position 0; for a value
				 *        greater than the current size of the aggregation, the sideContent is inserted at
				 * the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertSideContent(
					oSideContent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Removes all the controls from the aggregation <code>mainContent</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllMainContent(): sap.ui.core.Control[];

				/**
				 * Removes all the controls from the aggregation <code>sideContent</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllSideContent(): sap.ui.core.Control[];

				/**
				 * Removes a mainContent from the aggregation <code>mainContent</code>.
				 * @param vMainContent The mainContent to remove or its index or id
				 * @returns The removed mainContent or <code>null</code>
				 */
				removeMainContent(
					vMainContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Removes a sideContent from the aggregation <code>sideContent</code>.
				 * @param vSideContent The sideContent to remove or its index or id
				 * @returns The removed sideContent or <code>null</code>
				 */
				removeSideContent(
					vSideContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>containerQuery</code>.If set to TRUE, then not the media Query
				 * (device screen size) but the size of the container, surrounding the control, defines the current
				 * range.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>false</code>.
				 * @param bContainerQuery New value for property <code>containerQuery</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setContainerQuery(
					bContainerQuery: boolean
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Sets or unsets the page in equalSplit mode.
				 * @param bState Determines if the page is set to equalSplit mode
				 * @returns this pointer for chaining
				 */
				setEqualSplit(bState: boolean): any;

				/**
				 * Sets the showMainContent property.
				 * @param bVisible Determines if the main content part is visible
				 * @param bSuppressVisualUpdate Determines if the visual state is updated
				 * @returns this pointer for chaining
				 */
				setShowMainContent(
					bVisible: boolean,
					bSuppressVisualUpdate: boolean
				): any;

				/**
				 * Sets the showSideContent property.
				 * @param bVisible Determines if the side content part is visible
				 * @param bSuppressVisualUpdate Determines if the visual state is updated
				 * @returns this pointer for chaining
				 */
				setShowSideContent(
					bVisible: boolean,
					bSuppressVisualUpdate: boolean
				): any;

				/**
				 * Sets a new value for property <code>sideContentFallDown</code>.Determines on which breakpoints the
				 * side content falls down below the main content.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>OnMinimumWidth</code>.
				 * @param sSideContentFallDown New value for property <code>sideContentFallDown</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSideContentFallDown(
					sSideContentFallDown: sap.ui.layout.SideContentFallDown
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Sets a new value for property <code>sideContentPosition</code>.Determines whether the side content
				 * is on the left or on the right side of the main content.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>End</code>.
				 * @since 1.36
				 * @param sSideContentPosition New value for property <code>sideContentPosition</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSideContentPosition(
					sSideContentPosition: sap.ui.layout.SideContentPosition
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Sets a new value for property <code>sideContentVisibility</code>.Determines on which breakpoints the
				 * side content is visible.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>ShowAboveS</code>.
				 * @param sSideContentVisibility New value for property <code>sideContentVisibility</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSideContentVisibility(
					sSideContentVisibility: sap.ui.layout.SideContentVisibility
				): sap.ui.layout.DynamicSideContent;

				/**
				 * Used for the toggle button functionality.When the control is on a phone screen size only, one
				 * control area is visible.This helper method is used to implement a button/switch for changingbetween
				 * the main and side content areas.Only works if the current breakpoint is "S".
				 * @returns this pointer for chaining
				 */
				toggle(): any;
			}
			/**
			 * ResponsiveSplitter is a control that enables responsiveness of normal Splitter.ResponsiveSplitter
			 * consists of PaneContainers that further  agregate other PaneContainers and SplitPanes.SplitPanes can
			 * be moved to the pagination when a minimum width of their parent is reached.
			 * @resource sap/ui/layout/ResponsiveSplitter.js
			 */
			export class ResponsiveSplitter extends sap.ui.core.Control {
				/**
				 * Constructor for a new ResponsiveSplitter.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Destroys the rootPaneContainer in the aggregation <code>rootPaneContainer</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyRootPaneContainer(): sap.ui.layout.ResponsiveSplitter;

				/**
				 * ID of the element which is the current target of the association <code>defaultPane</code>, or
				 * <code>null</code>.
				 */
				getDefaultPane(): any;

				/**
				 * Gets current value of property <code>height</code>.The height of the controlDefault value is
				 * <code>100%</code>.
				 * @returns Value of property <code>height</code>
				 */
				getHeight(): any;

				/**
				 * Returns a metadata object for class sap.ui.layout.ResponsiveSplitter.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets content of aggregation <code>rootPaneContainer</code>.The root PaneContainer of the
				 * ResponsiveSplitter
				 */
				getRootPaneContainer(): sap.ui.layout.PaneContainer;

				/**
				 * Gets current value of property <code>width</code>.The width of the controlDefault value is
				 * <code>100%</code>.
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): any;

				/**
				 * Sets the associated <code>defaultPane</code>.
				 * @param oDefaultPane ID of an element which becomes the new target of this defaultPane association;
				 * alternatively, an element instance may be given
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setDefaultPane(
					oDefaultPane: any | sap.ui.layout.SplitPane
				): sap.ui.layout.ResponsiveSplitter;

				/**
				 * Sets a new value for property <code>height</code>.The height of the controlWhen called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>100%</code>.
				 * @param sHeight New value for property <code>height</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHeight(sHeight: any): sap.ui.layout.ResponsiveSplitter;

				/**
				 * Sets the aggregated <code>rootPaneContainer</code>.
				 * @param oRootPaneContainer The rootPaneContainer to set
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setRootPaneContainer(
					oRootPaneContainer: sap.ui.layout.PaneContainer
				): sap.ui.layout.ResponsiveSplitter;

				/**
				 * Sets a new value for property <code>width</code>.The width of the controlWhen called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>100%</code>.
				 * @param sWidth New value for property <code>width</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWidth(sWidth: any): sap.ui.layout.ResponsiveSplitter;
			}
			/**
			 * Holds layout data for the splitter contents.Allowed size values are numeric values ending in "px"
			 * and "%" and thespecial case "auto".(The CSS value "auto" is used internally to recalculate the size
			 * of the contentdynamically and is not directly set as style property.)
			 * @resource sap/ui/layout/SplitterLayoutData.js
			 */
			export class SplitterLayoutData extends sap.ui.core.LayoutData {
				/**
				 * Constructor for a new SplitterLayoutData.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Returns a metadata object for class sap.ui.layout.SplitterLayoutData.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>minSize</code>.Sets the minimum size of the splitter content in
				 * px.Default value is <code>0</code>.
				 * @returns Value of property <code>minSize</code>
				 */
				getMinSize(): number;

				/**
				 * Gets current value of property <code>resizable</code>.Determines whether the control in the splitter
				 * can be resized or not.Default value is <code>true</code>.
				 * @returns Value of property <code>resizable</code>
				 */
				getResizable(): boolean;

				/**
				 * Gets current value of property <code>size</code>.Sets the size of the splitter content.Default value
				 * is <code>auto</code>.
				 * @returns Value of property <code>size</code>
				 */
				getSize(): any;

				/**
				 * Sets a new value for property <code>minSize</code>.Sets the minimum size of the splitter content in
				 * px.When called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.Default value is <code>0</code>.
				 * @param iMinSize New value for property <code>minSize</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setMinSize(iMinSize: number): sap.ui.layout.SplitterLayoutData;

				/**
				 * Sets a new value for property <code>resizable</code>.Determines whether the control in the splitter
				 * can be resized or not.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>true</code>.
				 * @param bResizable New value for property <code>resizable</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setResizable(bResizable: boolean): sap.ui.layout.SplitterLayoutData;

				/**
				 * Sets a new value for property <code>size</code>.Sets the size of the splitter content.When called
				 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
				 * be restored.Default value is <code>auto</code>.
				 * @param sSize New value for property <code>size</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSize(sSize: any): sap.ui.layout.SplitterLayoutData;
			}
			/**
			 * This is a layout where several controls can be added. These controls are blown up to fit in an
			 * entire row. If the window resizes, the controls are moved between the rows and resized again.
			 * @resource sap/ui/layout/ResponsiveFlowLayout.js
			 */
			export class ResponsiveFlowLayout extends sap.ui.core.Control {
				/**
				 * Constructor for a new ResponsiveFlowLayout.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds content.This function needs to be overridden to prevent any rendering while somecontent is
				 * still being added.
				 * @param oContent The content that should be added to the layout
				 */
				addContent(oContent: sap.ui.core.Control): void;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.layout.ResponsiveFlowLayout;

				/**
				 * Gets content of aggregation <code>content</code>.Added content that should be positioned. Every
				 * content item should have a ResponsiveFlowLayoutData attached, or otherwise, the default values are
				 * used.
				 */
				getContent(): sap.ui.core.Control[];

				/**
				 * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayout.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>responsive</code>.If set to false, all added controls will keep
				 * their width, or otherwise, the controls will be stretched to the possible width of a row.Default
				 * value is <code>true</code>.
				 * @returns Value of property <code>responsive</code>
				 */
				getResponsive(): boolean;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.and
				 * returns its index if found or -1 otherwise.
				 * @param oContent The content whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfContent(oContent: sap.ui.core.Control): number;

				/**
				 * Inserts content.This function needs to be overridden to prevent any rendering while somecontent is
				 * still being added.
				 * @param oContent The content that should be inserted to the layout
				 * @param iIndex The index where the content should be inserted into
				 */
				insertContent(oContent: sap.ui.core.Control, iIndex: number): void;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.core.Control[];

				/**
				 * Removes content.This function needs to be overridden to prevent any rendering while somecontent is
				 * still being added.
				 * @param oContent The content that should be removed from the layout
				 * @returns The <code>this</code> pointer for chaining
				 */
				removeContent(
					oContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>responsive</code>.If set to false, all added controls will keep
				 * their width, or otherwise, the controls will be stretched to the possible width of a row.When called
				 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
				 * be restored.Default value is <code>true</code>.
				 * @param bResponsive New value for property <code>responsive</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setResponsive(bResponsive: boolean): sap.ui.layout.ResponsiveFlowLayout;
			}
			/**
			 * This is a LayoutData element that can be added to a control if this control is used within a
			 * ResponsiveFlowLayout.
			 * @resource sap/ui/layout/ResponsiveFlowLayoutData.js
			 */
			export class ResponsiveFlowLayoutData extends sap.ui.core.LayoutData {
				/**
				 * Constructor for a new ResponsiveFlowLayoutData.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId ID for the new control, generated automatically if no ID is given
				 * @param mSettings Initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Gets current value of property <code>linebreak</code>.If this property is set, the control in which
				 * the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.Default
				 * value is <code>false</code>.
				 * @returns Value of property <code>linebreak</code>
				 */
				getLinebreak(): boolean;

				/**
				 * Gets current value of property <code>linebreakable</code>.Shows if an element can be wrapped into a
				 * new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the
				 * previous element.Default value is <code>true</code>.
				 * @returns Value of property <code>linebreakable</code>
				 */
				getLinebreakable(): boolean;

				/**
				 * Gets current value of property <code>margin</code>.Prevents any margin of the element if set to
				 * false.Default value is <code>true</code>.
				 * @returns Value of property <code>margin</code>
				 */
				getMargin(): boolean;

				/**
				 * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayoutData.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>minWidth</code>.Defines the minimal size in px of an
				 * ResponsiveFlowLayout element. The element will be shrunk down to this value.Default value is
				 * <code>100</code>.
				 * @returns Value of property <code>minWidth</code>
				 */
				getMinWidth(): number;

				/**
				 * Gets current value of property <code>weight</code>.Defines the weight of the element, that
				 * influences the resulting width. If there are several elements within a row of the
				 * ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single
				 * element, the wider it will be stretched, i.e. a bigger weight results in a larger width.Default
				 * value is <code>1</code>.
				 * @returns Value of property <code>weight</code>
				 */
				getWeight(): number;

				/**
				 * Sets a new value for property <code>linebreak</code>.If this property is set, the control in which
				 * the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.When called
				 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
				 * be restored.Default value is <code>false</code>.
				 * @param bLinebreak New value for property <code>linebreak</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLinebreak(
					bLinebreak: boolean
				): sap.ui.layout.ResponsiveFlowLayoutData;

				/**
				 * Sets a new value for property <code>linebreakable</code>.Shows if an element can be wrapped into a
				 * new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the
				 * previous element.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>true</code>.
				 * @param bLinebreakable New value for property <code>linebreakable</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLinebreakable(
					bLinebreakable: boolean
				): sap.ui.layout.ResponsiveFlowLayoutData;

				/**
				 * Sets a new value for property <code>margin</code>.Prevents any margin of the element if set to
				 * false.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>true</code>.
				 * @param bMargin New value for property <code>margin</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setMargin(bMargin: boolean): sap.ui.layout.ResponsiveFlowLayoutData;

				/**
				 * Sets a new value for property <code>minWidth</code>.Defines the minimal size in px of an
				 * ResponsiveFlowLayout element. The element will be shrunk down to this value.When called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>100</code>.
				 * @param iMinWidth New value for property <code>minWidth</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setMinWidth(iMinWidth: number): sap.ui.layout.ResponsiveFlowLayoutData;

				/**
				 * Sets a new value for property <code>weight</code>.Defines the weight of the element, that influences
				 * the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each
				 * element could have another weight. The bigger the weight of a single element, the wider it will be
				 * stretched, i.e. a bigger weight results in a larger width.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>1</code>.
				 * @param iWeight New value for property <code>weight</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWeight(iWeight: number): sap.ui.layout.ResponsiveFlowLayoutData;
			}
			/**
			 * The position of the Grid. Can be "Left", "Center" or "Right". "Left" is default.
			 */
			enum GridPosition {
				"Center",
				"Left",
				"Right"
			}
			/**
			 * Available Background Design.
			 */
			enum BackgroundDesign {
				"Solid",
				"Translucent",
				"Transparent"
			}
			/**
			 * Types of the DynamicSideContent FallDown options
			 */
			enum SideContentFallDown {
				"BelowL",
				"BelowM",
				"BelowXL",
				"OnMinimumWidth"
			}
			/**
			 * The position of the side content - End (default) and Begin.
			 */
			enum SideContentPosition {
				"Begin",
				"End"
			}
			/**
			 * Types of the DynamicSideContent Visibility options
			 */
			enum SideContentVisibility {
				"AlwaysShow",
				"NeverShow",
				"ShowAboveL",
				"ShowAboveM",
				"ShowAboveS"
			}
		}
	}
}
