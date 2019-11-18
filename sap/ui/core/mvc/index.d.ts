declare namespace sap {
	namespace ui {
		namespace core {
			namespace mvc {
				namespace View {
					/**
					 * Interface for Preprocessor implementations that can be hooked in the view life cycle.There are two
					 * possibilities to use the preprocessor. It can be either passed to the view via the
					 * mSettings.preprocessors objectwhere it is the executed only for this instance, or by the
					 * registerPreprocessor method of the view type. Currently this isavailable only for XMLViews (as of
					 * version 1.30).
					 * @resource sap/ui/core/mvc/View.js
					 */
					interface Preprocessor {
						/**
						 * Processing method that must be implemented by a Preprocessor.
						 * @param vSource the source to be processed
						 * @param oViewInfo identification information about the calling instance
						 * @param mSettings settings object containing the settings provided with the preprocessor
						 * @returns the processed resource or a promise which resolves with the processed resource or an error
						 * according to the		declared preprocessor sync capability
						 */
						process(
							vSource: any,
							oViewInfo: any,
							mSettings?: any
						): any | JQueryPromise<any>;
					}
					/**
					 * Specifies possible view types
					 */
					namespace mvc {
						enum ViewType {
							HTML,
							JS,
							JSON,
							Template,
							XML
						}
					}
				}
				namespace XMLView {
					/**
					 * Specifies the available preprocessor types for XMLViews
					 */
					enum PreprocessorType {
						CONTROLS,
						VIEWXML,
						XML
					}
				}
				/**
				 * A base class for Views.Introduces the relationship to a Controller, some basic visual appearance
				 * settings like width and heightand provides lifecycle events.
				 * @resource sap/ui/core/mvc/View.js
				 */
				class View extends sap.ui.core.Control {
					/**
					 * Constructor for a new View.Accepts an object literal <code>mSettings</code> that defines
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
					addContent(oContent: sap.ui.core.Control): sap.ui.core.mvc.View;

					/**
					 * Attaches event handler <code>fnFunction</code> to the <code>afterInit</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.When called, the context of the event handler (its
					 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
					 * to this <code>sap.ui.core.mvc.View</code> itself.Fired when the View has parsed the UI description
					 * and instantiated the contained controls (/control tree).
					 * @param oData An application-specific payload object that will be passed to the event handler along
					 * with the event object when firing the event
					 * @param fnFunction The function to be called when the event occurs
					 * @param oListener Context object to call the event handler with. Defaults to this
					 * <code>sap.ui.core.mvc.View</code> itself
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					attachAfterInit(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.mvc.View;

					/**
					 * Attaches event handler <code>fnFunction</code> to the <code>afterRendering</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.When called, the context of the event handler (its
					 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
					 * to this <code>sap.ui.core.mvc.View</code> itself.Fired when the View has been (re-)rendered and its
					 * HTML is present in the DOM.
					 * @param oData An application-specific payload object that will be passed to the event handler along
					 * with the event object when firing the event
					 * @param fnFunction The function to be called when the event occurs
					 * @param oListener Context object to call the event handler with. Defaults to this
					 * <code>sap.ui.core.mvc.View</code> itself
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					attachAfterRendering(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.mvc.View;

					/**
					 * Attaches event handler <code>fnFunction</code> to the <code>beforeExit</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.When called, the context of the event handler (its
					 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
					 * to this <code>sap.ui.core.mvc.View</code> itself.Fired when the view has received the request to
					 * destroy itself, but before it has destroyed anything.
					 * @param oData An application-specific payload object that will be passed to the event handler along
					 * with the event object when firing the event
					 * @param fnFunction The function to be called when the event occurs
					 * @param oListener Context object to call the event handler with. Defaults to this
					 * <code>sap.ui.core.mvc.View</code> itself
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					attachBeforeExit(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.mvc.View;

					/**
					 * Attaches event handler <code>fnFunction</code> to the <code>beforeRendering</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.When called, the context of the event handler (its
					 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
					 * to this <code>sap.ui.core.mvc.View</code> itself.Fired before this View is re-rendered. Use to
					 * unbind event handlers from HTML elements etc.
					 * @param oData An application-specific payload object that will be passed to the event handler along
					 * with the event object when firing the event
					 * @param fnFunction The function to be called when the event occurs
					 * @param oListener Context object to call the event handler with. Defaults to this
					 * <code>sap.ui.core.mvc.View</code> itself
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					attachBeforeRendering(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.mvc.View;

					/**
					 * Returns an element by its ID in the context of the view.
					 * @param sId View local ID of the element
					 * @returns element by its ID or <code>undefined</code>
					 */
					byId<T = sap.ui.core.Element>(sId: string): T;

					/**
					 * Override clone method to avoid conflict between generic cloning of contentand content creation as
					 * defined by the UI5 Model View Controller lifecycle.For more details see the development guide
					 * section about Model View Controller in UI5.
					 * @param sIdSuffix a suffix to be appended to the cloned element id
					 * @param aLocalIds an array of local IDs within the cloned hierarchy (internally used)
					 * @returns reference to the newly created clone
					 */
					clone(
						sIdSuffix: string,
						aLocalIds?: string[]
					): sap.ui.base.ManagedObject;

					/**
					 * Convert the given view local element ID to a globally unique IDby prefixing it with the view ID.
					 * @param sId View local ID of the element
					 * @returns prefixed id
					 */
					createId(sId: string): string;

					/**
					 * Destroys all the content in the aggregation <code>content</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyContent(): sap.ui.core.mvc.View;

					/**
					 * Detaches event handler <code>fnFunction</code> from the <code>afterInit</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.The passed function and listener object must match the ones used
					 * for event registration.
					 * @param fnFunction The function to be called, when the event occurs
					 * @param oListener Context object on which the given function had to be called
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					detachAfterInit(
						fnFunction: any,
						oListener: any
					): sap.ui.core.mvc.View;

					/**
					 * Detaches event handler <code>fnFunction</code> from the <code>afterRendering</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.The passed function and listener object must match the ones used
					 * for event registration.
					 * @param fnFunction The function to be called, when the event occurs
					 * @param oListener Context object on which the given function had to be called
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					detachAfterRendering(
						fnFunction: any,
						oListener: any
					): sap.ui.core.mvc.View;

					/**
					 * Detaches event handler <code>fnFunction</code> from the <code>beforeExit</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.The passed function and listener object must match the ones used
					 * for event registration.
					 * @param fnFunction The function to be called, when the event occurs
					 * @param oListener Context object on which the given function had to be called
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					detachBeforeExit(
						fnFunction: any,
						oListener: any
					): sap.ui.core.mvc.View;

					/**
					 * Detaches event handler <code>fnFunction</code> from the <code>beforeRendering</code> event of this
					 * <code>sap.ui.core.mvc.View</code>.The passed function and listener object must match the ones used
					 * for event registration.
					 * @param fnFunction The function to be called, when the event occurs
					 * @param oListener Context object on which the given function had to be called
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					detachBeforeRendering(
						fnFunction: any,
						oListener: any
					): sap.ui.core.mvc.View;

					/**
					 * Fires event <code>afterInit</code> to attached listeners.
					 * @param mArguments The arguments to pass along with the event
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					fireAfterInit(mArguments: any): sap.ui.core.mvc.View;

					/**
					 * Fires event <code>afterRendering</code> to attached listeners.
					 * @param mArguments The arguments to pass along with the event
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					fireAfterRendering(mArguments: any): sap.ui.core.mvc.View;

					/**
					 * Fires event <code>beforeExit</code> to attached listeners.
					 * @param mArguments The arguments to pass along with the event
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					fireBeforeExit(mArguments: any): sap.ui.core.mvc.View;

					/**
					 * Fires event <code>beforeRendering</code> to attached listeners.
					 * @param mArguments The arguments to pass along with the event
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					fireBeforeRendering(mArguments: any): sap.ui.core.mvc.View;

					/**
					 * Gets content of aggregation <code>content</code>.Child Controls of the view
					 */
					getContent(): sap.ui.core.Control[];

					/**
					 * Returns the view's Controller instance or null for a controller-less View.
					 * @returns Controller of this view.
					 */
					getController(): any;

					/**
					 * An (optional) method to be implemented by Views. When no controller instance is given at View
					 * instantiation timeAND this method exists and returns the (package and class) name of a controller,
					 * the View tries to load andinstantiate the controller and to connect it to itself.
					 * @returns the name of the controller
					 */
					getControllerName(): string;

					/**
					 * Gets current value of property <code>displayBlock</code>.Whether the CSS display should be set to
					 * "block".Set this to "true" if the default display "inline-block" causes a vertical scrollbar with
					 * Views that are set to 100% height.Do not set this to "true" if you want to display other content in
					 * the same HTML parent on either side of the View (setting to "true" may push that other content to
					 * the next/previous line).Default value is <code>false</code>.
					 * @returns Value of property <code>displayBlock</code>
					 */
					getDisplayBlock(): boolean;

					/**
					 * Gets current value of property <code>height</code>.The height
					 * @returns Value of property <code>height</code>
					 */
					getHeight(): any;

					/**
					 * Returns the local ID of an element by removing the view ID prefix or<code>null</code> if the ID does
					 * not contain a prefix.
					 * @since 1.39.0
					 * @param sId Prefixed ID
					 * @returns ID without prefix or <code>null</code>
					 */
					getLocalId(sId: string): string;

					/**
					 * Returns a metadata object for class sap.ui.core.mvc.View.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the info object which is also passed to the preprocessors
					 * @param bSync Describes the view execution, true if sync
					 * @returns Info object for the view
					 */
					getPreprocessorInfo(bSync: boolean): any;

					/**
					 * Returns user specific data object
					 * @returns viewData
					 */
					getViewData(): any;

					/**
					 * Gets current value of property <code>viewName</code>.Name of the View
					 * @returns Value of property <code>viewName</code>
					 */
					getViewName(): string;

					/**
					 * Gets current value of property <code>width</code>.The widthDefault value is <code>100%</code>.
					 * @returns Value of property <code>width</code>
					 */
					getWidth(): any;

					/**
					 * Checks if any preprocessors are active for the specified type
					 * @param sType Type of the preprocessor, e.g. "raw", "xml" or "controls"
					 * @returns <code>true</code> if a preprocessor is active
					 */
					hasPreprocessor(sType: string): boolean;

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
					): sap.ui.core.mvc.View;

					/**
					 * Creates a Promise representing the state of the view initialization.For views that are loading
					 * asynchronously (by setting async=true) this Promise is created by viewinitialization. Synchronously
					 * loading views get wrapped in an immediately resolving Promise.
					 * @since 1.30
					 * @returns resolves with the complete view instance, reject with any thrown error
					 */
					loaded(): JQueryPromise<any>;

					/**
					 * Register a preprocessor for all views of a specific type.The preprocessor can be registered for
					 * several stages of view initialization, which aredependant from the view type, e.g. "raw", "xml" or
					 * already initialized "controls". If there is a preprocessorpassed to or activated at the view
					 * instance already, that one is used. When several preprocessors are registeredfor one hook, it has to
					 * be made sure that they do not conflict when beeing processed serially.It can be either a module name
					 * as string of an implementation of {@link sap.ui.core.mvc.View.Preprocessor} or afunction with a
					 * signature according to {@link sap.ui.core.mvc.View.Preprocessor.process}.<strong>Note</strong>:
					 * Preprocessors only work in async views and will be ignored when the view is instantiatedin sync mode
					 * by default, as this could have unexpected side effects. You may override this behaviour by setting
					 * the<code>bSyncSupport</code> flag to <code>true</code>.
					 * @param sType the type of content to be processed
					 * @param vPreprocessor module path of the preprocessor implementation or a preprocessor function
					 * @param sViewType type of the calling view, e.g. <code>XML</code>
					 * @param bSyncSupport declares if the vPreprocessor ensures safe sync processing. This means the
					 * preprocessor will be executed		also for sync views. Please be aware that any kind of async
					 * processing (like Promises, XHR, etc) may		break the view initialization and lead to unexpected
					 * results.
					 * @param bOnDemand on-demand preprocessor which enables developers to quickly activate the
					 * preprocessor for a view,		by setting <code>preprocessors : { xml }</code>, for example. This should
					 * be false except for very special		cases. There can only be one on-demand preprocessor per content
					 * type.
					 * @param mSettings optional configuration for preprocessor
					 */
					registerPreprocessor(
						sType: string | sap.ui.core.mvc.XMLView.PreprocessorType,
						vPreprocessor: string | any,
						bSyncSupport: boolean,
						bOnDemand?: boolean,
						mSettings?: any
					): void;

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
					 * Executes preprocessors for a type of source
					 * @param sType the type of preprocessor, e.g. "raw", "xml" or "controls"
					 * @param vSource the view source as a JSON object, a raw text, an XML document element or a Promise
					 * resolving with those
					 * @param bSync describes the view execution, true if sync
					 * @returns a promise resolving with the processed source or an error | the source when bSync=true
					 */
					runPreprocessor(
						sType: string,
						vSource: any | string | sap.ui.core.Element,
						bSync?: boolean
					): JQueryPromise<any> | any | string | sap.ui.core.Element;

					/**
					 * Sets a new value for property <code>displayBlock</code>.Whether the CSS display should be set to
					 * "block".Set this to "true" if the default display "inline-block" causes a vertical scrollbar with
					 * Views that are set to 100% height.Do not set this to "true" if you want to display other content in
					 * the same HTML parent on either side of the View (setting to "true" may push that other content to
					 * the next/previous line).When called with a value of <code>null</code> or <code>undefined</code>, the
					 * default value of the property will be restored.Default value is <code>false</code>.
					 * @param bDisplayBlock New value for property <code>displayBlock</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setDisplayBlock(bDisplayBlock: boolean): sap.ui.core.mvc.View;

					/**
					 * Sets a new value for property <code>height</code>.The heightWhen called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sHeight New value for property <code>height</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setHeight(sHeight: any): sap.ui.core.mvc.View;

					/**
					 * Sets a new value for property <code>viewName</code>.Name of the ViewWhen called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sViewName New value for property <code>viewName</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setViewName(sViewName: string): sap.ui.core.mvc.View;

					/**
					 * Sets a new value for property <code>width</code>.The widthWhen called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.Default value is <code>100%</code>.
					 * @param sWidth New value for property <code>width</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setWidth(sWidth: any): sap.ui.core.mvc.View;
				}
				/**
				 * A View defined/constructed by JavaScript code.
				 * @resource sap/ui/core/mvc/JSView.js
				 */
				class JSView extends sap.ui.core.mvc.View {
					/**
					 * Flag for feature detection of asynchronous loading/rendering
					 * @since 1.30
					 */
					public asyncSupport: any;

					/**
					 * Constructor for a new mvc/JSView.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * A method to be implemented by JSViews, returning the View UI.While for declarative View types like
					 * XMLView or JSONView the user interface definition is declared in a separate file,JSViews
					 * programmatically construct the UI. This happens in the createContent method which every JSView needs
					 * to implement.The View implementation can construct the complete UI in this method - or only return
					 * the root control and create the rest of the UI lazily later on.
					 * @returns a control or (typically) tree of controls representing the View user interface
					 */
					createContent(): sap.ui.core.Control;

					/**
					 * A method to be implemented by JSViews, returning the flag whether to prefixthe IDs of controls
					 * automatically or not if the controls are created insidethe {@link
					 * sap.ui.core.mvc.JSView#createContent} function. By default thisfeature is not activated.You can
					 * overwrite this function and return true to activate the automaticprefixing.
					 * @since 1.15.1
					 * @returns true, if the controls IDs should be prefixed automatically
					 */
					getAutoPrefixId(): boolean;

					/**
					 * Returns a metadata object for class sap.ui.core.mvc.JSView.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * A View defined using (P)XML and HTML markup.
				 * @resource sap/ui/core/mvc/XMLView.js
				 */
				class XMLView extends sap.ui.core.mvc.View {
					/**
					 * Flag for feature detection of asynchronous loading/rendering
					 * @since 1.30
					 */
					public asyncSupport: any;

					/**
					 * Constructor for a new mvc/XMLView.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.This class does not have its own settings, but all settings applicable to the base type{@link
					 * sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View} can be used.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Constructor for a new mvc/XMLView.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.This class does not have its own settings, but all settings applicable to the base type{@link
					 * sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View} can be used.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.core.mvc.XMLView.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Register a preprocessor for all views of a specific type.The preprocessor can be registered for
					 * several stages of view initialization, for xml views these areeither the plain "xml" or the already
					 * initialized "controls" , see {@link sap.ui.core.mvc.XMLView.PreprocessorType}.For each type one
					 * preprocessor is executed. If there is a preprocessor passed to or activated at theview instance
					 * already, that one is used. When several preprocessors are registered for one hook, it has to be
					 * madesure, that they do not conflict when beeing processed serially.It can be either a module name as
					 * string of an implementation of {@link sap.ui.core.mvc.View.Preprocessor} or afunction with a
					 * signature according to {@link sap.ui.core.mvc.View.Preprocessor.process}.<strong>Note</strong>:
					 * Preprocessors work only in async views and will be ignored when the view is instantiatedin sync mode
					 * by default, as this could have unexpected side effects. You may override this behaviour by setting
					 * thebSyncSupport flag to true.
					 * @param sType the type of content to be processed
					 * @param vPreprocessor module path of the preprocessor implementation or a preprocessor function
					 * @param bSyncSupport declares if the vPreprocessor ensures safe sync processing. This means the
					 * preprocessor will be executed		also for sync views. Please be aware that any kind of async
					 * processing (like Promises, XHR, etc) may		break the view initialization and lead to unexpected
					 * results.
					 * @param bOnDemand ondemand preprocessor which enables developers to quickly activate the preprocessor
					 * for a view,		by setting <code>preprocessors : { xml }</code>, for example.
					 * @param mSettings optional configuration for preprocessor
					 */
					registerPreprocessor(
						sType: string | sap.ui.core.mvc.XMLView.PreprocessorType,
						vPreprocessor: string | any,
						bSyncSupport: boolean,
						bOnDemand?: boolean,
						mSettings?: any
					): void;
				}
				/**
				 * A View defined using JSON.
				 * @resource sap/ui/core/mvc/JSONView.js
				 */
				class JSONView extends sap.ui.core.mvc.View {
					/**
					 * Flag for feature detection of asynchronous loading/rendering
					 * @since 1.30
					 */
					public asyncSupport: any;

					/**
					 * Constructor for a new mvc/JSONView.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.core.mvc.JSONView.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * A view defined/constructed by declarative HTML.
				 * @resource sap/ui/core/mvc/HTMLView.js
				 */
				class HTMLView extends sap.ui.core.mvc.View {
					/**
					 * Flag for feature detection of asynchronous loading/rendering
					 * @since 1.30
					 */
					public asyncSupport: any;

					/**
					 * Constructor for a new mvc/HTMLView.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.core.mvc.HTMLView.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * A generic controller implementation for the UI5 Model-View-Controller concept.Can either be used as
				 * a generic controller which is enriched on the fly with methodsand properties (see {@link
				 * sap.ui.controller}) or  as a base class for typed controllers.
				 * @resource sap/ui/core/mvc/Controller.js
				 */
				class Controller extends sap.ui.base.EventProvider {
					/**
					 * Instantiates a (MVC-style) controller. Consumers should call the constructor only in thetyped
					 * controller scenario. In the generic controller use case, they should use{@link sap.ui.controller}
					 * instead.
					 * @param sName The name of the controller to instantiate. If a controller is defined as real
					 * sub-class,                                  the "arguments" of the sub-class constructor should be
					 * given instead.
					 */
					constructor(sName: string | any[]);

					/**
					 * Returns an Element of the connected view with the given local ID.Views automatically prepend their
					 * own ID as a prefix to created Elementsto make the IDs unique even in the case of multiple view
					 * instances.This method helps to find an element by its local ID only.If no view is connected or if
					 * the view doesn't contain an element withthe given local ID, undefined is returned.
					 * @param sId View-local ID
					 * @returns Element by its (view local) ID
					 */
					byId(sId: string): sap.ui.core.Element;

					/**
					 * Converts a view local ID to a globally unique one by prependingthe view ID.If no view is connected,
					 * undefined is returned.
					 * @param sId View-local ID
					 * @returns Prefixed ID
					 */
					createId(sId: string): string;

					/**
					 * Returns a metadata object for class sap.ui.core.mvc.Controller.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets the component of the controller's viewIf there is no Component connected to the view or the
					 * view is not connected to the controller,undefined is returned.
					 * @since 1.23.0
					 * @returns Component instance
					 */
					getOwnerComponent(): sap.ui.core.Component;

					/**
					 * Returns the view associated with this controller or undefined.
					 * @returns View connected to this controller.
					 */
					getView(): sap.ui.core.mvc.View;

					/**
					 * This method is called every time the View is rendered, after the HTML is placed in the DOM-Tree. It
					 * can beused to apply additional changes to the DOM after the Renderer has finished.(Even though this
					 * method is declared as "abstract", it does not need to be defined in controllers, if themethod does
					 * not exist, it will simply not be called.)
					 */
					onAfterRendering(): void;

					/**
					 * This method is called every time the View is rendered, before the Renderer is called and the HTML is
					 * placed inthe DOM-Tree. It can be used to perform clean-up-tasks before re-rendering.(Even though
					 * this method is declared as "abstract", it does not need to be defined in controllers, if themethod
					 * does not exist, it will simply not be called.)
					 */
					onBeforeRendering(): void;

					/**
					 * This method is called upon desctuction of the View. The controller should perform its internal
					 * destruction inthis hook. It is only called once per View instance, unlike the onBeforeRendering and
					 * onAfterRenderinghooks.(Even though this method is declared as "abstract", it does not need to be
					 * defined in controllers, if themethod does not exist, it will simply not be called.)
					 */
					onExit(): void;

					/**
					 * This method is called upon initialization of the View. The controller can perform its internal setup
					 * inthis hook. It is only called once per View instance, unlike the onBeforeRendering and
					 * onAfterRenderinghooks.(Even though this method is declared as "abstract", it does not need to be
					 * defined in controllers, if themethod does not exist, it will simply not be called.)
					 */
					onInit(): void;

					/**
					 * Registers a callback module, which provides code enhancements for thelifecycle and event handler
					 * functions of a specific controller. The codeenhancements are returned either in sync or async
					 * mode.The extension provider module provides the <code>getControllerExtensions</code> functionwhich
					 * returns either directly an array of objects or a Promise that returns an arrayof objects when it
					 * resolves. These objects are object literals defining themethods and properties of the controller in
					 * a similar way as {@link sap.ui.controller}.<b>Example for a callback module definition
					 * (sync):</b><pre>sap.ui.define("my/custom/sync/ExtensionProvider", ['jquery.sap.global'],
					 * function(jQuery) {  var ExtensionProvider = function() {};
					 * ExtensionProvider.prototype.getControllerExtensions = function(sControllerName, sComponentId,
					 * bAsync) {    if (!bAsync && sControllerName == "my.own.Controller") {      // IMPORTANT: only return
					 * extensions for a specific controller      return [{        onInit: function() {          // Do
					 * something here...        },        onAfterRendering: function() {          // Do something here...
					 *      },        onButtonClick: function(oEvent) {          // Handle the button click event        }
					 *     }    }];  };  return ExtensionProvider;}, true);</pre><b>Example for a callback module
					 * definition (async):</b><pre>sap.ui.define("my/custom/async/ExtensionProvider",
					 * ['jquery.sap.global'], function(jQuery) {  var ExtensionProvider = function() {};
					 * ExtensionProvider.prototype.getControllerExtensions = function(sControllerName, sComponentId,
					 * bAsync) {    if (bAsync && sControllerName == "my.own.Controller") {      // IMPORTANT:      // only
					 * return a Promise for a specific controller since it      // requires the View/Controller and its
					 * parents to run in async      // mode!      return new Promise(function(fnResolve, fnReject) {
					 * fnResolve([{          onInit: function() {            // Do something here...          },
					 * onAfterRendering: function() {            // Do something here...          },
					 * onButtonClick: function(oEvent) {            // Handle the button click event          }        }]);
					 *      }    };  };  return ExtensionProvider;}, true);</pre>The lifecycle functions
					 * <code>onInit</code>, <code>onExit</code>,<code>onBeforeRendering</code> and
					 * <code>onAfterRendering</code>are added before or after the lifecycle functions of the
					 * originalcontroller. The event handler functions, such as <code>onButtonClick</code>,are replacing
					 * the original controller's function.When using an async extension provider you need to ensure that
					 * theview is loaded in async mode.In both cases, return <code>undefined</code> if no controller
					 * extension shall be applied.
					 * @since 1.34.0
					 * @param sExtensionProvider the module name of the extension provider
					 */
					registerExtensionProvider(sExtensionProvider: string): void;
				}
				/**
				 * A view defined in a template.
				 * @resource sap/ui/core/mvc/TemplateView.js
				 */
				class TemplateView extends sap.ui.core.mvc.View {
					/**
					 * Constructor for a new mvc/TemplateView.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.core.mvc.TemplateView.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
			}
		}
	}
}