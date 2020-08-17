declare namespace sap {
	namespace ui {
		namespace core {
			/**
			 * Applies the support for custom style classes on the prototype of a
			 * <code>sap.ui.core.Element</code>.All controls (subclasses of <code>sap.ui.core.Control</code>)
			 * provide the support custom style classes. The control API provides functionsto the application which
			 * allow it to add, remove or change style classes for the control.In general, this option is not
			 * available for elements because elements do not necessarily have a representation in the DOM.This
			 * function can be used by a control developer to explicitly enrich the API of his/her element
			 * implementation with the API functionsfor the custom style class support. It must be called on the
			 * prototype of the element.<b>Usage Example:</b><pre>sap.ui.define(['sap/ui/core/Element',
			 * 'sap/ui/core/CustomStyleClassSupport'], function(Element, CustomStyleClassSupport) {   "use strict";
			 *   var MyElement = Element.extend("my.MyElement", {      metadata : {         //...      }      //...
			 *   });   CustomStyleClassSupport.apply(MyElement.prototype);   return MyElement;},
			 * true);</pre>Furthermore, the function <code>oRenderManager.writeClasses(oElement);</code> ({@link
			 * sap.ui.core.RenderManager#writeClasses}) must be called withinthe renderer of the control to which
			 * the element belongs, when writing the root tag of the element. This ensures the classes are written
			 * to the HTML.This function adds the following functions to the elements
			 * prototype:<ul><li><code>addStyleClass</code>: {@link
			 * sap.ui.core.Control#addStyleClass}</li><li><code>removeStyleClass</code>: {@link
			 * sap.ui.core.Control#removeStyleClass}</li><li><code>toggleStyleClass</code>: {@link
			 * sap.ui.core.Control#toggleStyleClass}</li><li><code>hasStyleClass</code>: {@link
			 * sap.ui.core.Control#hasStyleClass}</li></ul>In addition the clone function of the element is
			 * extended to ensure that the custom style classes are also available on the cloned
			 * element.<b>Note:</b> This function can only be used <i>within</i> control development. An
			 * application cannot add style class support on existing elements by calling this function.
			 */
			function CustomStyleClassSupport(): void;

			interface IContextMenu {
				openAsContextMenu(
					oEvent: string,
					oOpenerRef: sap.ui.core.Element | Element
				);
			}

			namespace ID {}
			namespace ws {
				namespace ReadyState {
					/**
					 * The connection has been closed or could not be opened.
					 */
					var CLOSED: any;

					/**
					 * The connection is going through the closing handshake.
					 */
					var CLOSING: any;

					/**
					 * The connection has not yet been established.
					 */
					var CONNECTING: any;

					/**
					 * The WebSocket connection is established and communication is possible.
					 */
					var OPEN: any;
				}
				namespace SapPcpWebSocket.SUPPORTED_PROTOCOLS {
					/**
					 * Protocol v10.pcp.sap.com
					 */
					var v10: any;
				}
				/**
				 * Basic WebSocket class
				 * @resource sap/ui/core/ws/WebSocket.js
				 */
				class WebSocket extends sap.ui.base.EventProvider {
					/**
					 * Creates a new WebSocket connection.
					 * @param sUrl relative or absolute URL for WebSocket connection.
					 * @param aProtocols array of protocols as strings, a single protocol as a string
					 */
					constructor(sUrl: string, aProtocols?: any[]);

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'close' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this WebSocket is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachClose(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.ws.WebSocket;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'error' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this WebSocket is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachError(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.ws.WebSocket;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'message' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this WebSocket is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachMessage(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.ws.WebSocket;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'open' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this WebSocket is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachOpen(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.ws.WebSocket;

					/**
					 * Closes the connection.
					 * @param iCode Status code that explains why the connection is closed. Must be either 1000, or between
					 * 3000 and 4999 (default 1000)
					 * @param sReason Closing reason as a string
					 * @returns <code>this</code> to allow method chaining
					 */
					close(iCode: number, sReason?: string): sap.ui.core.ws.WebSocket;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'close' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachClose(
						fnFunction: any,
						oListener: any
					): sap.ui.core.ws.WebSocket;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'error' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachError(
						fnFunction: any,
						oListener: any
					): sap.ui.core.ws.WebSocket;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'message' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachMessage(
						fnFunction: any,
						oListener: any
					): sap.ui.core.ws.WebSocket;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'open' event of this
					 * <code>sap.ui.core.ws.WebSocket</code>.<br>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachOpen(fnFunction: any, oListener: any): sap.ui.core.ws.WebSocket;

					/**
					 * Fire event 'close' to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireClose(mArguments: any): sap.ui.core.ws.WebSocket;

					/**
					 * Fire event 'error' to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireError(mArguments: any): sap.ui.core.ws.WebSocket;

					/**
					 * Fire event 'message' to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireMessage(mArguments: any): sap.ui.core.ws.WebSocket;

					/**
					 * Fire event 'open' to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireOpen(mArguments: any): sap.ui.core.ws.WebSocket;

					/**
					 */
					getInterface(): sap.ui.base.Interface;

					/**
					 * Returns a metadata object for class sap.ui.core.ws.WebSocket.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Getter for the protocol selected by the server once the connection is open.
					 * @returns protocol
					 */
					getProtocol(): string;

					/**
					 * Getter for WebSocket readyState.
					 * @returns readyState
					 */
					getReadyState(): typeof sap.ui.core.ws.ReadyState;

					/**
					 * Sends a message.<br><br>If the connection is not yet opened, the message will be queued and sentwhen
					 * the connection is established.
					 * @param sMessage Message to send
					 * @returns <code>this</code> to allow method chaining
					 */
					send(sMessage: string): sap.ui.core.ws.WebSocket;
				}
				/**
				 * WebSocket class implementing the pcp-protocol
				 * @resource sap/ui/core/ws/SapPcpWebSocket.js
				 */
				class SapPcpWebSocket extends sap.ui.core.ws.WebSocket {
					/**
					 * Creates a new WebSocket connection and uses the pcp-protocol for communication.
					 * @param sUrl relative or absolute URL for WebSocket connection.
					 * @param aProtocols array of protocols as strings, a single protocol as a string.Protocol(s) should be
					 * selected from {@link sap.ui.core.ws.SapPcpWebSocket.SUPPORTED_PROTOCOLS}.
					 */
					constructor(sUrl: string, aProtocols?: any[]);

					/**
					 * Fire event 'message' to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireMessage(mArguments: any): sap.ui.core.ws.SapPcpWebSocket;

					/**
					 * Returns a metadata object for class sap.ui.core.ws.SapPcpWebSocket.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Sends a message and optional pcp-header-fields using the pcp-protocol.<br><br>If the connection is
					 * not yet opened, the message will be queued and sentwhen the connection is established.
					 * @param message message to send
					 * @param oPcpFields additional pcp-fields as key-value map
					 * @returns <code>this</code> to allow method chaining
					 */
					send(
						message: string | any | any[],
						oPcpFields?: any
					): sap.ui.core.ws.SapPcpWebSocket;
				}
			}
			namespace URI {}
			namespace Dock {}
			namespace tmpl {
				/**
				 * Base Class for Template.
				 * @resource sap/ui/core/tmpl/Template.js
				 */
				abstract class Template extends sap.ui.base.ManagedObject {
					/**
					 * Creates and initializes a new template with the given <code>sId</code> andsettings.The set of
					 * allowed entries in the <code>mSettings</code> object depends onthe concrete subclass and is
					 * described there.Accepts an object literal <code>mSettings</code> that defines initialproperty
					 * values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId optional id for the new template; generated automatically if           no non-empty id is
					 * given Note: this can be omitted, no matter           whether <code>mSettings</code> will be given or
					 * not!
					 * @param mSettings optional map/JSON-object with initial settings for the           new component
					 * instance
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns the registered template for the given id, if any.
					 * @param sId undefined
					 * @returns the template for the given id
					 */
					byId<T extends sap.ui.core.Control>(id: string): T;

					/**
					 * Creates an anonymous TemplateControl for the Template.
					 * @param sId the control ID
					 * @param oContext the context for the renderer/templating
					 * @param oView undefined
					 * @returns the created control instance
					 */
					createControl(
						sId: string,
						oContext: any,
						oView: sap.ui.core.mvc.View
					): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Declares a new control based on this template and returns the createdclass / constructor function.
					 * The class is based on the information comingfrom the abstract functions <code>createMetadata</code>
					 * and<code>createRenderer</code>.
					 * @param sControl the fully qualified name of the control
					 * @returns the created class / constructor function
					 */
					declareControl(sControl: string): any;

					/**
					 * Gets current value of property <code>content</code>.The Template definition as a String.
					 * @returns Value of property <code>content</code>
					 */
					getContent(): string;

					/**
					 */
					getInterface(): sap.ui.base.Interface;

					/**
					 * Returns a metadata object for class sap.ui.core.tmpl.Template.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * parses the given path and extracts the model and path
					 * @param sPath the path
					 * @returns the model and the path
					 */
					parsePath(sPath: string): any;

					/**
					 * Creates an anonymous TemplateControl for the Template and places the controlinto the specified DOM
					 * element.
					 * @param oRef the id or the DOM reference where to render the template
					 * @param oContext The context to use to evaluate the Template. It will be applied as value for the
					 * context property of the created control.
					 * @param vPosition Describes the position where the control should be put into the container
					 * @param bInline undefined
					 * @returns the created control instance
					 */
					placeAt(
						oRef: string | any,
						oContext: any,
						vPosition: string | number,
						bInline: boolean
					): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Sets a new value for property <code>content</code>.The Template definition as a String.When called
					 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
					 * be restored.
					 * @param sContent New value for property <code>content</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setContent(sContent: string): any;
				}
				/**
				 * Represents a DOM element. It allows to use databinding for the properties and nested DOM attributes.
				 * @resource sap/ui/core/tmpl/DOMElement.js
				 */
				class DOMElement extends sap.ui.core.Control {
					/**
					 * Constructor for a new tmpl/DOMElement.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Adds some attribute to the aggregation <code>attributes</code>.
					 * @param oAttribute the attribute to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addAttribute(
						oAttribute: sap.ui.core.tmpl.DOMAttribute
					): sap.ui.core.tmpl.DOMElement;

					/**
					 * Adds some element to the aggregation <code>elements</code>.
					 * @param oElement the element to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addElement(
						oElement: sap.ui.core.tmpl.DOMElement
					): sap.ui.core.tmpl.DOMElement;

					/**
					 * Returns the value of a DOM attribute if available or undefined if the DOM attribute is not available
					 * when using this method with the parameter name only.When using the method with the parameter name
					 * and value the method acts as a setter and sets the value of a DOM attribute.In this case the return
					 * value is the reference to this DOM element to support method chaining. If you pass null as value of
					 * the attribute the attribute will be removed.
					 * @param sName The name of the DOM attribute.
					 * @param sValue The value of the DOM attribute. If the value is undefined the DOM attribute will be
					 * removed.
					 * @returns value of attribute or <code>this</code> when called as a setter
					 */
					attr(sName: string, sValue: string): any;

					/**
					 * Destroys all the attributes in the aggregation <code>attributes</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyAttributes(): sap.ui.core.tmpl.DOMElement;

					/**
					 * Destroys all the elements in the aggregation <code>elements</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyElements(): sap.ui.core.tmpl.DOMElement;

					/**
					 * Gets content of aggregation <code>attributes</code>.DOM attributes which are rendered as part of the
					 * DOM element and bindable
					 */
					getAttributes(): sap.ui.core.tmpl.DOMAttribute[];

					/**
					 * Gets content of aggregation <code>elements</code>.Nested DOM elements to support nested bindable
					 * structures
					 */
					getElements(): sap.ui.core.tmpl.DOMElement[];

					/**
					 * Returns a metadata object for class sap.ui.core.tmpl.DOMElement.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>tag</code>.The HTML-tag of the DOM element which contains the
					 * textDefault value is <code>span</code>.
					 * @returns Value of property <code>tag</code>
					 */
					getTag(): string;

					/**
					 * Gets current value of property <code>text</code>.The text content of the DOM element
					 * @returns Value of property <code>text</code>
					 */
					getText(): string;

					/**
					 * Checks for the provided <code>sap.ui.core.tmpl.DOMAttribute</code> in the aggregation
					 * <code>attributes</code>.and returns its index if found or -1 otherwise.
					 * @param oAttribute The attribute whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfAttribute(oAttribute: sap.ui.core.tmpl.DOMAttribute): number;

					/**
					 * Checks for the provided <code>sap.ui.core.tmpl.DOMElement</code> in the aggregation
					 * <code>elements</code>.and returns its index if found or -1 otherwise.
					 * @param oElement The element whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfElement(oElement: sap.ui.core.tmpl.DOMElement): number;

					/**
					 * Inserts a attribute into the aggregation <code>attributes</code>.
					 * @param oAttribute the attribute to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the attribute should be inserted at; for             a
					 * negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value
					 *    greater than the current size of the aggregation, the attribute is inserted at             the
					 * last position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertAttribute(
						oAttribute: sap.ui.core.tmpl.DOMAttribute,
						iIndex: number
					): sap.ui.core.tmpl.DOMElement;

					/**
					 * Inserts a element into the aggregation <code>elements</code>.
					 * @param oElement the element to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the element should be inserted at; for             a
					 * negative value of <code>iIndex</code>, the element is inserted at position 0; for a value
					 *  greater than the current size of the aggregation, the element is inserted at             the last
					 * position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertElement(
						oElement: sap.ui.core.tmpl.DOMElement,
						iIndex: number
					): sap.ui.core.tmpl.DOMElement;

					/**
					 * Removes all the controls from the aggregation <code>attributes</code>.Additionally, it unregisters
					 * them from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllAttributes(): sap.ui.core.tmpl.DOMAttribute[];

					/**
					 * Removes all the controls from the aggregation <code>elements</code>.Additionally, it unregisters
					 * them from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllElements(): sap.ui.core.tmpl.DOMElement[];

					/**
					 * Removes the DOM attribute for the given name and returns the reference to this DOM element to
					 * support method chaining.
					 * @param sName The name of the DOM attribute.
					 */
					removeAttr(sName: string): sap.ui.core.tmpl.DOMElement;

					/**
					 * Removes a attribute from the aggregation <code>attributes</code>.
					 * @param vAttribute The attribute to remove or its index or id
					 * @returns The removed attribute or <code>null</code>
					 */
					removeAttribute(
						vAttribute: number | string | sap.ui.core.tmpl.DOMAttribute
					): sap.ui.core.tmpl.DOMAttribute;

					/**
					 * Removes a element from the aggregation <code>elements</code>.
					 * @param vElement The element to remove or its index or id
					 * @returns The removed element or <code>null</code>
					 */
					removeElement(
						vElement: number | string | sap.ui.core.tmpl.DOMElement
					): sap.ui.core.tmpl.DOMElement;

					/**
					 * Sets a new value for property <code>tag</code>.The HTML-tag of the DOM element which contains the
					 * textWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of
					 * the property will be restored.Default value is <code>span</code>.
					 * @param sTag New value for property <code>tag</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setTag(sTag: string): sap.ui.core.tmpl.DOMElement;

					/**
					 * Sets a new value for property <code>text</code>.The text content of the DOM elementWhen called with
					 * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
					 * restored.
					 * @param sText New value for property <code>text</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setText(sText: string): sap.ui.core.tmpl.DOMElement;
				}
				/**
				 * Represents a DOM attribute of a DOM element.
				 * @resource sap/ui/core/tmpl/DOMAttribute.js
				 */
				class DOMAttribute extends sap.ui.core.Element {
					/**
					 * Constructor for a new tmpl/DOMAttribute.Accepts an object literal <code>mSettings</code> that
					 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.core.tmpl.DOMAttribute.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>name</code>.Name of the DOM attribute
					 * @returns Value of property <code>name</code>
					 */
					getName(): string;

					/**
					 * Gets current value of property <code>value</code>.Value of the DOM attribute
					 * @returns Value of property <code>value</code>
					 */
					getValue(): string;

					/**
					 * Sets a new value for property <code>name</code>.Name of the DOM attributeWhen called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sName New value for property <code>name</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setName(sName: string): sap.ui.core.tmpl.DOMAttribute;

					/**
					 * Sets a new value for property <code>value</code>.Value of the DOM attributeWhen called with a value
					 * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sValue New value for property <code>value</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setValue(sValue: string): sap.ui.core.tmpl.DOMAttribute;
				}
				/**
				 * This is the base class for all template controls. Template controls are declared based on templates.
				 * @resource sap/ui/core/tmpl/TemplateControl.js
				 */
				class TemplateControl extends sap.ui.core.Control {
					/**
					 * Constructor for a new tmpl/TemplateControl.Accepts an object literal <code>mSettings</code> that
					 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Attaches event handler <code>fnFunction</code> to the <code>afterRendering</code> event of this
					 * <code>sap.ui.core.tmpl.TemplateControl</code>.When called, the context of the event handler (its
					 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
					 * to this <code>sap.ui.core.tmpl.TemplateControl</code> itself.Fired when the Template Control has
					 * been (re-)rendered and its HTML is present in the DOM.
					 * @param oData An application-specific payload object that will be passed to the event handler along
					 * with the event object when firing the event
					 * @param fnFunction The function to be called when the event occurs
					 * @param oListener Context object to call the event handler with. Defaults to this
					 * <code>sap.ui.core.tmpl.TemplateControl</code> itself
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					attachAfterRendering(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Attaches event handler <code>fnFunction</code> to the <code>beforeRendering</code> event of this
					 * <code>sap.ui.core.tmpl.TemplateControl</code>.When called, the context of the event handler (its
					 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
					 * to this <code>sap.ui.core.tmpl.TemplateControl</code> itself.Fired before this Template Control is
					 * re-rendered. Use to unbind event handlers from HTML elements etc.
					 * @param oData An application-specific payload object that will be passed to the event handler along
					 * with the event object when firing the event
					 * @param fnFunction The function to be called when the event occurs
					 * @param oListener Context object to call the event handler with. Defaults to this
					 * <code>sap.ui.core.tmpl.TemplateControl</code> itself
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					attachBeforeRendering(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Creates a pseudo binding for a aggregation to get notified once the propertychanges to invalidate
					 * the control and trigger a re-rendering.
					 * @param sPath the binding path
					 * @returns the value of the path
					 */
					bindList(sPath: string): any;

					/**
					 * Creates a pseudo binding for a property to get notified once the propertychanges to invalidate the
					 * control and trigger a re-rendering.
					 * @param sPath the binding path
					 * @returns the value of the path
					 */
					bindProp(sPath: string): any;

					/**
					 * compiles (creates and registers) a new control
					 * @param mSettings the settings for the new control
					 * @param sParentPath the parent path for the control
					 * @param bDoNotAdd if true, then the control will not be         added to the _controls aggregation
					 * @param oView undefined
					 * @returns new control instance
					 */
					createControl(
						mSettings: any,
						sParentPath: string,
						bDoNotAdd: boolean,
						oView: sap.ui.core.mvc.View
					): sap.ui.core.Control;

					/**
					 * compiles (creates and registers) a new DOM element
					 * @param mSettings the settings for the new DOM element
					 * @param sParentPath the parent path for the DOM element
					 * @param bDoNotAdd if true, then the control will not be         added to the _controls aggregation
					 * @returns new DOM element instance
					 */
					createDOMElement(
						mSettings: any,
						sParentPath?: string,
						bDoNotAdd?: boolean
					): sap.ui.core.Control;

					/**
					 * Detaches event handler <code>fnFunction</code> from the <code>afterRendering</code> event of this
					 * <code>sap.ui.core.tmpl.TemplateControl</code>.The passed function and listener object must match the
					 * ones used for event registration.
					 * @param fnFunction The function to be called, when the event occurs
					 * @param oListener Context object on which the given function had to be called
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					detachAfterRendering(
						fnFunction: any,
						oListener: any
					): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Detaches event handler <code>fnFunction</code> from the <code>beforeRendering</code> event of this
					 * <code>sap.ui.core.tmpl.TemplateControl</code>.The passed function and listener object must match the
					 * ones used for event registration.
					 * @param fnFunction The function to be called, when the event occurs
					 * @param oListener Context object on which the given function had to be called
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					detachBeforeRendering(
						fnFunction: any,
						oListener: any
					): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Fires event <code>afterRendering</code> to attached listeners.
					 * @param mArguments The arguments to pass along with the event
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					fireAfterRendering(mArguments: any): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Fires event <code>beforeRendering</code> to attached listeners.
					 * @param mArguments The arguments to pass along with the event
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					fireBeforeRendering(
						mArguments: any
					): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Gets current value of property <code>context</code>.The context is a data object. It can be used for
					 * default template expressions. A change of the context object leads to a re-rendering whereas a
					 * change of a nested property of the context object doesn't. By default the context is an empty
					 * object.
					 * @returns Value of property <code>context</code>
					 */
					getContext(): any;

					/**
					 * Returns a metadata object for class sap.ui.core.tmpl.TemplateControl.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * ID of the element which is the current target of the association <code>template</code>, or
					 * <code>null</code>.
					 */
					getTemplate(): any;

					/**
					 * Returns the instance specific renderer for an anonymous template control.
					 * @returns the instance specific renderer function
					 */
					getTemplateRenderer(): any;

					/**
					 * checks whether the control is inline or not
					 * @returns flag, whether to control is inline or not
					 */
					isInline(): boolean;

					/**
					 * Sets a new value for property <code>context</code>.The context is a data object. It can be used for
					 * default template expressions. A change of the context object leads to a re-rendering whereas a
					 * change of a nested property of the context object doesn't. By default the context is an empty
					 * object.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
					 * the property will be restored.
					 * @param oContext New value for property <code>context</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setContext(oContext: any): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Sets the associated <code>template</code>.
					 * @param oTemplate ID of an element which becomes the new target of this template association;
					 * alternatively, an element instance may be given
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setTemplate(oTemplate: any | any): sap.ui.core.tmpl.TemplateControl;

					/**
					 * Sets the instance specific renderer for an anonymous template control.
					 * @param fnRenderer the instance specific renderer function
					 * @returns <code>this</code> to allow method chaining
					 */
					setTemplateRenderer(fnRenderer: any): any;
				}
				/**
				 * The class for Handlebars Templates.
				 * @resource sap/ui/core/tmpl/HandlebarsTemplate.js
				 */
				abstract class HandlebarsTemplate extends sap.ui.core.tmpl.Template {
					/**
					 * Creates and initializes a new handlebars template with the given <code>sId</code>and settings.The
					 * set of allowed entries in the <code>mSettings</code> object depends onthe concrete subclass and is
					 * described there.
					 * @param sId optional id for the new template; generated automatically if           no non-empty id is
					 * given Note: this can be omitted, no matter           whether <code>mSettings</code> will be given or
					 * not!
					 * @param mSettings optional map/JSON-object with initial settings for the           new component
					 * instance
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.core.tmpl.HandlebarsTemplate.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
			}
			namespace util {
				namespace File {
					/**
					 * <p>Triggers a download / save action of the given file.</p><p>There are limitations for this feature
					 * in some browsers:<p><p><b>Internet Explorer 8 / 9</b><br>Some file extensions on some operating
					 * systems are not working due to a bug in IE.Therefore 'txt' will be used as file extension if the
					 * problem is occurring.</p><p><b>Safari (OS X / iOS)</b><br>A new window/tab will be opened. In OS X
					 * the user has to manually save the file (CMD + S), choose "page source" and specify a filename.In iOS
					 * the content can be opened in another app (Mail, Notes, ...) or copied to the clipboard.In case the
					 * popup blocker prevents this action, an error will be thrown which can be used to notify the user to
					 * disable it.</p><p><b>Android Browser</b><br>Not supported</p>
					 * @param sData file content
					 * @param sFileName file name
					 * @param sFileExtension file extension
					 * @param sMimeType file mime-type
					 * @param sCharset file charset
					 */
					function save(
						sData: string,
						sFileName: string,
						sFileExtension: string,
						sMimeType: string,
						sCharset: string
					): void;
				}
				namespace serializer {
					namespace delegate {
						/**
						 * XML serializer delegate class.
						 * @resource sap/ui/core/util/serializer/delegate/XML.js
						 */
						class XML extends sap.ui.core.util.serializer.delegate.Delegate {
							/**
							 * XML serializer delegate class. Called by the serializer instance.
							 * @param sDefaultXmlNamespace defines the default XML namespace
							 * @param fnGetControlId delegate function which returns the control id
							 * @param fnGetEventHandlerName delegate function which returns the event handler name
							 * @param fnMemorizePackage a delegate function to memorize the control packages
							 */
							constructor(
								sDefaultXmlNamespace: string,
								fnGetControlId?: any,
								fnGetEventHandlerName?: any,
								fnMemorizePackage?: any
							);

							/**
							 * Returns a metadata object for class sap.ui.core.util.serializer.delegate.XML.
							 * @returns Metadata object describing this class
							 */
							getMetadata(): sap.ui.base.Metadata;
						}
						/**
						 * HTML serializer delegate class.
						 * @resource sap/ui/core/util/serializer/delegate/HTML.js
						 */
						class HTML extends sap.ui.core.util.serializer.delegate.Delegate {
							/**
							 * HTML serializer delegate class. Called by the serializer instance.
							 * @param fnGetControlId delegate function which returns the control id
							 * @param fnGetEventHandlerName delegate function which returns the event handler name
							 */
							constructor(fnGetControlId: any, fnGetEventHandlerName?: any);

							/**
							 * Returns a metadata object for class sap.ui.core.util.serializer.delegate.HTML.
							 * @returns Metadata object describing this class
							 */
							getMetadata(): sap.ui.base.Metadata;
						}
						/**
						 * Abstract serializer delegate class.
						 * @resource sap/ui/core/util/serializer/delegate/Delegate.js
						 */
						abstract class Delegate extends sap.ui.base.EventProvider {
							/**
							 * Abstract serializer delegate class. All delegates must extend from this class and implement the
							 * abstract methods.
							 */
							constructor();

							/**
							 * Returns a metadata object for class sap.ui.core.util.serializer.delegate.Delegate.
							 * @returns Metadata object describing this class
							 */
							getMetadata(): sap.ui.base.Metadata;
						}
					}
					/**
					 * Serializer class.
					 * @resource sap/ui/core/util/serializer/Serializer.js
					 */
					class Serializer extends sap.ui.base.EventProvider {
						/**
						 * Serializer class. Iterates over all controls and call a given serializer delegate.
						 * @param oRootControl the root control to serialize
						 * @param serializeDelegate the serializer delegate. Has to implement start/middle/end methods.
						 * @param bSkipRoot whether to skip the root node or not
						 * @param fnSkipAggregations whether to skip aggregations
						 * @param fnSkipElement whether to skip an element
						 */
						constructor(
							oRootControl: sap.ui.core.Control | sap.ui.core.UIArea,
							serializeDelegate: any,
							bSkipRoot: boolean,
							fnSkipAggregations: any,
							fnSkipElement: any
						);

						/**
						 * Returns a metadata object for class sap.ui.core.util.serializer.Serializer.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;
					}
					/**
					 * ViewSerializer class.
					 * @resource sap/ui/core/util/serializer/ViewSerializer.js
					 */
					class ViewSerializer extends sap.ui.base.EventProvider {
						/**
						 * View serializer class. Iterates over all controls and serializes all found views by calling the
						 * corresponding view type serializer.
						 * @param oRootControl the root control to serialize
						 * @param oWindow the window object. Default is the window object the instance of the serializer is
						 * running in.
						 * @param sDefaultXmlNamespace defines the default xml namespace
						 */
						constructor(
							oRootControl: sap.ui.core.Control | sap.ui.core.UIArea,
							oWindow?: any,
							sDefaultXmlNamespace?: string
						);

						/**
						 * Returns a metadata object for class sap.ui.core.util.serializer.ViewSerializer.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;
					}
					/**
					 * XMLViewSerializer class.
					 * @resource sap/ui/core/util/serializer/XMLViewSerializer.js
					 */
					class XMLViewSerializer extends sap.ui.base.EventProvider {
						/**
						 * XML view serializer class. Serializes a given view.
						 * @param oView the view to serialize
						 * @param oWindow the window object. Default is the window object the instance of the serializer is
						 * running in
						 * @param sDefaultXmlNamespace defines the default XML namespace
						 * @param fnGetControlId delegate function which returns the control id
						 * @param fnGetEventHandlerName delegate function which returns the event handler name
						 */
						constructor(
							oView: sap.ui.core.mvc.XMLView,
							oWindow: any,
							sDefaultXmlNamespace: string,
							fnGetControlId: any,
							fnGetEventHandlerName: any
						);

						/**
						 * Returns a metadata object for class sap.ui.core.util.serializer.XMLViewSerializer.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;
					}
					/**
					 * HTMLViewSerializer class.
					 * @resource sap/ui/core/util/serializer/HTMLViewSerializer.js
					 */
					class HTMLViewSerializer extends sap.ui.base.EventProvider {
						/**
						 * HTML view serializer class. Serializes a given view.
						 * @param oView the view to serialize
						 * @param oWindow the window object. Default is the window object the instance of the serializer is
						 * running in
						 * @param fnGetControlId delegate function which returns the control id
						 * @param fnGetEventHandlerName delegate function which returns the event handler name
						 */
						constructor(
							oView: sap.ui.core.mvc.HTMLView,
							oWindow: any,
							fnGetControlId: any,
							fnGetEventHandlerName: any
						);

						/**
						 * Returns a metadata object for class sap.ui.core.util.serializer.HTMLViewSerializer.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;
					}
				}
				namespace XMLPreprocessor {
					/**
					 * Context interface provided by XML template processing as an additional firstargument to any
					 * formatter function which opts in to this mechanism. Candidates forsuch formatter functions are all
					 * those used in binding expressions which areevaluated during XML template processing, including those
					 * used inside templateinstructions like <code>&lt;template:if></code>. The formatter function needs to
					 * bemarked with a property <code>requiresIContext = true</code> to express that itrequires this
					 * extended signature (compared to ordinary formatter functions). Theusual arguments are provided after
					 * the first one (currently: the raw value from themodel).This interface provides callback functions to
					 * access the model and path  which areneeded to process OData V4 annotations. It initially offers a
					 * subset of methodsfrom {@link sap.ui.model.Context} so that formatters might also be called with
					 * acontext object for convenience, e.g. outside of XML template processing (see belowfor an exception
					 * to this rule).<b>Example:</b> Suppose you have a formatter function called "foo" like belowand it is
					 * used within an XML template like<code>&lt;template:if test="{path: '...', formatter:
					 * 'foo'}"></code>.In this case <code>foo</code> is called with arguments<code>oInterface,
					 * vRawValue</code> such that<code>oInterface.getModel().getObject(oInterface.getPath()) ===
					 * vRawValue</code>holds.<pre>window.foo = function (oInterface, vRawValue) {    //TODO
					 * ...};window.foo.requiresIContext = true;</pre><b>Composite Binding Examples:</b> Suppose you have
					 * the same formatter function andit is used in a composite binding like <code>&lt;Text text="{path:
					 * 'Label',formatter: 'foo'}: {path: 'Value', formatter: 'foo'}"/></code>.In this case
					 * <code>oInterface.getPath()</code> refers to ".../Label" in the 1st calland ".../Value" in the 2nd
					 * call. This means each formatter call knows which part ofthe composite binding it belongs to and
					 * behaves just as if it was an ordinarybinding.Suppose your formatter is not used within a part of the
					 * composite binding, but atthe root of the composite binding in order to aggregate all parts like
					 * <code>&lt;Text text="{parts: [{path: 'Label'}, {path: 'Value'}], formatter: 'foo'}"/></code>. In
					 * this case <code>oInterface.getPath(0)</code> refers to ".../Label"
					 * and<code>oInterface.getPath(1)</code> refers to ".../Value". This means, the rootformatter can
					 * access the ith part of the composite binding at will (since 1.31.0);see also {@link #.getInterface
					 * getInterface}.The function <code>foo</code> is called with arguments such that
					 * <code>oInterface.getModel(i).getObject(oInterface.getPath(i)) === arguments[i + 1]</code>holds.To
					 * distinguish those two use cases, just check whether<code>oInterface.getModel() === undefined</code>,
					 * in which case the formatter iscalled on root level of a composite binding. To find out the number of
					 * parts, probefor the smallest non-negative integer where<code>oInterface.getModel(i) ===
					 * undefined</code>.This additional functionality is, of course, not available from{@link
					 * sap.ui.model.Context}, i.e. such formatters MUST be called with an instanceof this context
					 * interface.
					 * @resource sap/ui/core/util/XMLPreprocessor.js
					 */
					interface IContext {
						/**
						 * Returns a context interface for the indicated part in case of the root formatterof a composite
						 * binding. The new interface provides access to the originalsettings, but only to the model and path
						 * of the indicated part:<pre>this.getInterface(i).getSetting(sName) ===
						 * this.getSetting(sName);this.getInterface(i).getModel() ===
						 * this.getModel(i);this.getInterface(i).getPath() === this.getPath(i);</pre>If a path is given, the
						 * new interface points to the resolved path as follows:<pre>this.getInterface(i, "foo/bar").getPath()
						 * === this.getPath(i) + "/foo/bar";this.getInterface(i, "/absolute/path").getPath() ===
						 * "/absolute/path";</pre>A formatter which is not at the root level of a composite binding can
						 * alsoprovide a path, but must not provide an index:<pre>this.getInterface("foo/bar").getPath() ===
						 * this.getPath() + "/foo/bar";this.getInterface("/absolute/path").getPath() ===
						 * "/absolute/path";</pre>Note that at least one argument must be present.
						 * @since 1.31.0
						 * @param iPart index of part in case of the root formatter of a composite binding
						 * @param sPath a path, interpreted relative to <code>this.getPath(iPart)</code>
						 * @returns the context interface related to the indicated part
						 */
						getInterface(
							iPart: number,
							sPath?: string
						): sap.ui.core.util.XMLPreprocessor.IContext;

						/**
						 * Returns the model related to the current formatter call.
						 * @param iPart index of part in case of the root formatter of a composite binding  (since 1.31.0)
						 * @returns the model related to the current formatter call, or (since 1.31.0)  <code>undefined</code>
						 * in case of a root formatter if no <code>iPart</code> is  given or if <code>iPart</code> is out of
						 * range
						 */
						getModel(iPart: number): sap.ui.model.Model;

						/**
						 * Returns the absolute path related to the current formatter call.
						 * @param iPart index of part in case of the root formatter of a composite binding  (since 1.31.0)
						 * @returns the absolute path related to the current formatter call, or (since 1.31.0)
						 * <code>undefined</code> in case of a root formatter if no <code>iPart</code> is  given or if
						 * <code>iPart</code> is out of range
						 */
						getPath(iPart: number): string;

						/**
						 * Returns the value of the setting with the given name which was provided to theXML template
						 * processing.
						 * @param sName the name of the setting
						 * @returns the value of the setting
						 */
						getSetting(sName: string): any;
					}
				}
				/**
				 * Export provides the possibility to generate a list of data in a specific format / type, e.g. CSV to
				 * use it in other programs / applications.
				 * @resource sap/ui/core/util/Export.js
				 */
				class Export extends sap.ui.core.Control {
					/**
					 * Constructor for a new Export.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Adds some column to the aggregation <code>columns</code>.
					 * @param oColumn the column to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addColumn(
						oColumn: sap.ui.core.util.ExportColumn
					): sap.ui.core.util.Export;

					/**
					 * Adds some row to the aggregation <code>rows</code>.
					 * @param oRow the row to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addRow(oRow: sap.ui.core.util.ExportRow): sap.ui.core.util.Export;

					/**
					 * Binds aggregation <code>columns</code> to model data.See {@link
					 * sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
					 * of the possible properties of <code>oBindingInfo</code>.
					 * @param oBindingInfo The binding information
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					bindColumns(oBindingInfo: any): sap.ui.core.util.Export;

					/**
					 * Binds aggregation <code>rows</code> to model data.See {@link
					 * sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
					 * of the possible properties of <code>oBindingInfo</code>.
					 * @param oBindingInfo The binding information
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					bindRows(oBindingInfo: any): sap.ui.core.util.Export;

					/**
					 * Destroys all the columns in the aggregation <code>columns</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyColumns(): sap.ui.core.util.Export;

					/**
					 * Destroys the exportType in the aggregation <code>exportType</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyExportType(): sap.ui.core.util.Export;

					/**
					 * Destroys all the rows in the aggregation <code>rows</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyRows(): sap.ui.core.util.Export;

					/**
					 * Generates the file content and returns a Promisewith the instance as context (this).<br>The promise
					 * will be resolved with the generated contentas a string.<p><b>Please note: The return value was
					 * changed from jQuery Promises to standard ES6 Promises.jQuery specific Promise methods ('done',
					 * 'fail', 'always', 'pipe' and 'state') are still available but should not be used.Please use only the
					 * standard methods 'then' and 'catch'!</b></p>
					 * @returns Promise object
					 */
					generate(): JQueryPromise<any>;

					/**
					 * Gets content of aggregation <code>columns</code>.Columns for the Export.
					 */
					getColumns(): sap.ui.core.util.ExportColumn[];

					/**
					 * Gets content of aggregation <code>exportType</code>.Type that generates the content.
					 */
					getExportType(): sap.ui.core.util.ExportType;

					/**
					 * Returns a metadata object for class sap.ui.core.util.Export.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets content of aggregation <code>rows</code>.Rows of the Export.
					 */
					getRows(): sap.ui.core.util.ExportRow[];

					/**
					 * Checks for the provided <code>sap.ui.core.util.ExportColumn</code> in the aggregation
					 * <code>columns</code>.and returns its index if found or -1 otherwise.
					 * @param oColumn The column whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfColumn(oColumn: sap.ui.core.util.ExportColumn): number;

					/**
					 * Checks for the provided <code>sap.ui.core.util.ExportRow</code> in the aggregation
					 * <code>rows</code>.and returns its index if found or -1 otherwise.
					 * @param oRow The row whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfRow(oRow: sap.ui.core.util.ExportRow): number;

					/**
					 * Inserts a column into the aggregation <code>columns</code>.
					 * @param oColumn the column to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the column should be inserted at; for             a
					 * negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
					 * greater than the current size of the aggregation, the column is inserted at             the last
					 * position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertColumn(
						oColumn: sap.ui.core.util.ExportColumn,
						iIndex: number
					): sap.ui.core.util.Export;

					/**
					 * Inserts a row into the aggregation <code>rows</code>.
					 * @param oRow the row to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the row should be inserted at; for             a
					 * negative value of <code>iIndex</code>, the row is inserted at position 0; for a value
					 * greater than the current size of the aggregation, the row is inserted at             the last
					 * position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertRow(
						oRow: sap.ui.core.util.ExportRow,
						iIndex: number
					): sap.ui.core.util.Export;

					/**
					 * Removes all the controls from the aggregation <code>columns</code>.Additionally, it unregisters them
					 * from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllColumns(): sap.ui.core.util.ExportColumn[];

					/**
					 * Removes all the controls from the aggregation <code>rows</code>.Additionally, it unregisters them
					 * from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllRows(): sap.ui.core.util.ExportRow[];

					/**
					 * Removes a column from the aggregation <code>columns</code>.
					 * @param vColumn The column to remove or its index or id
					 * @returns The removed column or <code>null</code>
					 */
					removeColumn(
						vColumn: number | string | sap.ui.core.util.ExportColumn
					): sap.ui.core.util.ExportColumn;

					/**
					 * Removes a row from the aggregation <code>rows</code>.
					 * @param vRow The row to remove or its index or id
					 * @returns The removed row or <code>null</code>
					 */
					removeRow(
						vRow: number | string | sap.ui.core.util.ExportRow
					): sap.ui.core.util.ExportRow;

					/**
					 * Generates the file content, triggers a download / save action andreturns a Promise with the instance
					 * as context (this).<br>The promise will be resolved with the generated contentas a string.<p><b>For
					 * information about browser support, see <code>sap.ui.core.util.File.save</code></b></p><p><b>Please
					 * note: The return value was changed from jQuery Promises to standard ES6 Promises.jQuery specific
					 * Promise methods ('done', 'fail', 'always', 'pipe' and 'state') are still available but should not be
					 * used.Please use only the standard methods 'then' and 'catch'!</b></p>
					 * @param sFileName file name, defaults to 'data'
					 * @returns Promise object
					 */
					saveFile(sFileName: string): JQueryPromise<any>;

					/**
					 * Sets the aggregated <code>exportType</code>.
					 * @param oExportType The exportType to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setExportType(
						oExportType: sap.ui.core.util.ExportType
					): sap.ui.core.util.Export;

					/**
					 * Unbinds aggregation <code>columns</code> from model data.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					unbindColumns(): sap.ui.core.util.Export;

					/**
					 * Unbinds aggregation <code>rows</code> from model data.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					unbindRows(): sap.ui.core.util.Export;
				}
				/**
				 * Internally used in {@link sap.ui.core.util.Export Export}.
				 * @resource sap/ui/core/util/ExportRow.js
				 */
				class ExportRow extends sap.ui.base.ManagedObject {
					/**
					 * Constructor for a new ExportRow.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Adds some cell to the aggregation <code>cells</code>.
					 * @param oCell the cell to add; if empty, nothing is inserted
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					addCell(
						oCell: sap.ui.core.util.ExportCell
					): sap.ui.core.util.ExportRow;

					/**
					 * Destroys all the cells in the aggregation <code>cells</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyCells(): sap.ui.core.util.ExportRow;

					/**
					 * Gets content of aggregation <code>cells</code>.Cells for the Export.
					 */
					getCells(): sap.ui.core.util.ExportCell[];

					/**
					 * Returns a metadata object for class sap.ui.core.util.ExportRow.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Checks for the provided <code>sap.ui.core.util.ExportCell</code> in the aggregation
					 * <code>cells</code>.and returns its index if found or -1 otherwise.
					 * @param oCell The cell whose index is looked for
					 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
					 */
					indexOfCell(oCell: sap.ui.core.util.ExportCell): number;

					/**
					 * Inserts a cell into the aggregation <code>cells</code>.
					 * @param oCell the cell to insert; if empty, nothing is inserted
					 * @param iIndex the <code>0</code>-based index the cell should be inserted at; for             a
					 * negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value
					 * greater than the current size of the aggregation, the cell is inserted at             the last
					 * position
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					insertCell(
						oCell: sap.ui.core.util.ExportCell,
						iIndex: number
					): sap.ui.core.util.ExportRow;

					/**
					 * Removes all the controls from the aggregation <code>cells</code>.Additionally, it unregisters them
					 * from the hosting UIArea.
					 * @returns An array of the removed elements (might be empty)
					 */
					removeAllCells(): sap.ui.core.util.ExportCell[];

					/**
					 * Removes a cell from the aggregation <code>cells</code>.
					 * @param vCell The cell to remove or its index or id
					 * @returns The removed cell or <code>null</code>
					 */
					removeCell(
						vCell: number | string | sap.ui.core.util.ExportCell
					): sap.ui.core.util.ExportCell;
				}
				/**
				 * Contains content that can be used to data. Used in {@link sap.ui.core.util.ExportColumn
				 * ExportColumn} / {@link sap.ui.core.util.Export Export}.
				 * @resource sap/ui/core/util/ExportCell.js
				 */
				class ExportCell extends sap.ui.core.Element {
					/**
					 * Constructor for a new ExportCell.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Gets current value of property <code>content</code>.Cell content.
					 * @returns Value of property <code>content</code>
					 */
					getContent(): string;

					/**
					 * Returns a metadata object for class sap.ui.core.util.ExportCell.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Sets a new value for property <code>content</code>.Cell content.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sContent New value for property <code>content</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setContent(sContent: string): sap.ui.core.util.ExportCell;
				}
				/**
				 * Base type. Subclasses can be used for {@link sap.ui.core.util.Export Export}.
				 * @resource sap/ui/core/util/ExportType.js
				 */
				class ExportType extends sap.ui.base.ManagedObject {
					/**
					 * Constructor for a new ExportType.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Handles the generation process of the file.<br>
					 * @param oExport instance
					 * @returns content
					 */
					_generate(oExport: sap.ui.core.util.Export): string;

					/**
					 * Creates a cell "generator" (inspired by ES6 Generators)
					 * @returns generator
					 */
					cellGenerator(): any;

					/**
					 * Creates a column "generator" (inspired by ES6 Generators)
					 * @returns generator
					 */
					columnGenerator(): any;

					/**
					 * Generates the file content.<br>Should be implemented by the individual types!
					 * @returns content
					 */
					generate(): string;

					/**
					 * Gets current value of property <code>charset</code>.Charset.
					 * @returns Value of property <code>charset</code>
					 */
					getCharset(): string;

					/**
					 * Returns the number of columns.
					 * @returns count
					 */
					getColumnCount(): number;

					/**
					 * Gets current value of property <code>fileExtension</code>.File extension.
					 * @returns Value of property <code>fileExtension</code>
					 */
					getFileExtension(): string;

					/**
					 * Returns a metadata object for class sap.ui.core.util.ExportType.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>mimeType</code>.MIME type.
					 * @returns Value of property <code>mimeType</code>
					 */
					getMimeType(): string;

					/**
					 * Returns the number of rows.
					 * @returns count
					 */
					getRowCount(): number;

					/**
					 * Creates a row "generator" (inspired by ES6 Generators)
					 * @returns generator
					 */
					rowGenerator(): any;

					/**
					 * Sets a new value for property <code>charset</code>.Charset.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sCharset New value for property <code>charset</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setCharset(sCharset: string): sap.ui.core.util.ExportType;

					/**
					 * Sets a new value for property <code>fileExtension</code>.File extension.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sFileExtension New value for property <code>fileExtension</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setFileExtension(sFileExtension: string): sap.ui.core.util.ExportType;

					/**
					 * Sets a new value for property <code>mimeType</code>.MIME type.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sMimeType New value for property <code>mimeType</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setMimeType(sMimeType: string): sap.ui.core.util.ExportType;
				}
				/**
				 * Class to mock http requests made to a remote server
				 * @resource sap/ui/core/util/MockServer.js
				 */
				abstract class MockServer extends sap.ui.base.ManagedObject {
					/**
					 * Enum for the method.
					 */
					public HTTPMETHOD: any;

					/**
					 * Creates a mocked server. This helps to mock all or some backend calls, e.g. for OData/JSON Models or
					 * simple XHR calls, withoutchanging the application code. This class can also be used for qunit
					 * tests.Accepts an object literal <code>mSettings</code> that defines initialproperty values,
					 * aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new server object; generated automatically if no non-empty id is given
					 * Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
					 * @param mSettings optional map/JSON-object with initial property values, aggregated objects etc. for
					 * the new object
					 * @param oScope scope object for resolving string based type and formatter references in bindings
					 */
					constructor(sId: string, mSettings?: any, oScope?: any);

					/**
					 * Attaches an event handler to be called after the built-in request processing of the mock server
					 * @param event type according to HTTP Method
					 * @param fnCallback the name of the function that will be called at this exitThe callback function
					 * exposes an event with parameters, depending on the type of the request.oEvent.getParameters() lists
					 * the parameters as per the request. Examples are:oXhr : the request object; oFilteredData : the mock
					 * data entries that are about to be returned in the response; oEntry : the mock data entry that is
					 * about to be returned in the response;
					 * @param sEntitySet (optional) the name of the entity set
					 */
					attachAfter(event: string, fnCallback: any, sEntitySet: string): void;

					/**
					 * Attaches an event handler to be called before the built-in request processing of the mock server
					 * @param event type according to HTTP Method
					 * @param fnCallback the name of the function that will be called at this exit.The callback function
					 * exposes an event with parameters, depending on the type of the request.oEvent.getParameters() lists
					 * the parameters as per the request. Examples are:oXhr : the request object; sUrlParams : the URL
					 * parameters of the request; sKeys : key properties of the requested entry; sNavProp/sNavName : name
					 * of navigation
					 * @param sEntitySet (optional) the name of the entity set
					 */
					attachBefore(
						event: string,
						fnCallback: any,
						sEntitySet: string
					): void;

					/**
					 * Cleans up the resources associated with this object and all its aggregated children.After an object
					 * has been destroyed, it can no longer be used in!Applications should call this method if they don't
					 * need the object any longer.
					 * @param bSuppressInvalidate if true, this ManagedObject is not marked as changed
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Removes a previously attached event handler
					 * @param event type according to HTTP Method
					 * @param fnCallback the name of the function that will be called at this exit
					 * @param sEntitySet (optional) the name of the entity set
					 */
					detachAfter(event: string, fnCallback: any, sEntitySet: string): void;

					/**
					 * Removes a previously attached event handler
					 * @param event type according to HTTP Method
					 * @param fnCallback the name of the function that will be called at this exit
					 * @param sEntitySet (optional) the name of the entity set
					 */
					detachBefore(
						event: string,
						fnCallback: any,
						sEntitySet: string
					): void;

					/**
					 * Returns the data model of the given EntitySet name.
					 * @param sEntitySetName EntitySet name
					 * @returns data model of the given EntitySet
					 */
					getEntitySetData(sEntitySetName: any): any[];

					/**
					 * Returns a metadata object for class sap.ui.core.util.MockServer.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Getter for property <code>requests</code>.Default value is <code>[]</code>
					 * @returns the value of property <code>rootUri</code>
					 */
					getRequests(): any[];

					/**
					 * Getter for property <code>rootUri</code>.Default value is empty/<code>undefined</code>
					 * @returns the value of property <code>rootUri</code>
					 */
					getRootUri(): string;

					/**
					 * Returns whether the server is started or not.
					 * @returns whether the server is started or not.
					 */
					isStarted(): boolean;

					/**
					 * Sets the data of the given EntitySet name with the given array.
					 * @param sEntitySetName EntitySet name
					 * @param aData undefined
					 */
					setEntitySetData(sEntitySetName: any, aData: any): void;

					/**
					 * Setter for property <code>requests</code>.Default value is is <code>[]</code>Each array entry should
					 * consist of an array with the following properties / values:<ul><li><b>method <string>:
					 * "GET"|"POST"|"DELETE|"PUT"</b><br>(any HTTP verb)</li><li><b>path <string>:
					 * "/path/to/resource"</b><br>The path is converted to a regular expression, so it can contain normal
					 * regular expression syntax.All regular expression groups are forwarded as arguments to the
					 * <code>response</code> function.In addition to this, parameters can be written in this notation:
					 * <code>:param</code>. These placeholder will be replaced by regular expression
					 * groups.</li><li><b>response <function>: function(xhr, param1, param2, ...) { }</b><br>The xhr object
					 * can be used to respond on the request. Supported methods are:<br><code>xhr.respond(iStatusCode,
					 * mHeaders, sBody)</code><br><code>xhr.respondJSON(iStatusCode, mHeaders, oJsonObjectOrString)</code>.
					 * By default a JSON header is set for response header<br><code>xhr.respondXML(iStatusCode, mHeaders,
					 * sXmlString)</code>. By default a XML header is set for response
					 * header<br><code>xhr.respondFile(iStatusCode, mHeaders, sFileUrl)</code>. By default the mime type of
					 * the file is set for response header</li></ul>
					 * @param requests new value for property <code>requests</code>
					 */
					setRequests(requests: any[]): void;

					/**
					 * Setter for property <code>rootUri</code>. All request path URI are prefixed with this root URI if
					 * set.Default value is empty/<code>undefined</code>
					 * @param rootUri new value for property <code>rootUri</code>
					 */
					setRootUri(rootUri: string): void;

					/**
					 * Simulates an existing OData service by sepcifiying the metadata URL and the base URL for the
					 * mockdata. The serverconfigures the request handlers depending on the service metadata. The mockdata
					 * needs to be stored individually foreach entity type in a separate JSON file. The name of the JSON
					 * file needs to match the name of the entity type. Ifno base url for the mockdata is specified then
					 * the mockdata are generated from the metadata
					 * @since 1.13.2
					 * @param sMetadataUrl url to the service metadata document
					 * @param vMockdataSettings (optional) base url which contains the path to the mockdata, or an object
					 * which contains the following properties: sMockdataBaseUrl, bGenerateMissingMockData,
					 * aEntitySetsNames. See below for descriptions of these parameters. Ommit this parameter to produce
					 * random mock data based on the service metadata.
					 */
					simulate(
						sMetadataUrl: string,
						vMockdataSettings?: string | any
					): void;

					/**
					 * Starts the server.
					 */
					start(): void;

					/**
					 * Stops the server.
					 */
					stop(): void;
				}
				/**
				 * Can have a name and a cell template.
				 * @resource sap/ui/core/util/ExportColumn.js
				 */
				class ExportColumn extends sap.ui.base.ManagedObject {
					/**
					 * Constructor for a new ExportCell.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Destroys the template in the aggregation <code>template</code>.
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					destroyTemplate(): sap.ui.core.util.ExportColumn;

					/**
					 * Returns a metadata object for class sap.ui.core.util.ExportColumn.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>name</code>.Column name.
					 * @returns Value of property <code>name</code>
					 */
					getName(): string;

					/**
					 * Gets content of aggregation <code>template</code>.Cell template for column.
					 */
					getTemplate(): sap.ui.core.util.ExportCell;

					/**
					 * Sets a new value for property <code>name</code>.Column name.When called with a value of
					 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sName New value for property <code>name</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setName(sName: string): sap.ui.core.util.ExportColumn;

					/**
					 * Sets the aggregated <code>template</code>.
					 * @param oTemplate The template to set
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setTemplate(
						oTemplate: sap.ui.core.util.ExportCell
					): sap.ui.core.util.ExportColumn;
				}
				/**
				 * CSV type. Can be used for {@link sap.ui.core.util.Export Export}.Please note that there could
				 * be an issue with the separator char depending on the user's system language in some programs such as
				 * Microsoft Excel.To prevent those issues use the data-import functionality which enables the
				 * possibility to explicitly set the separator char that should be used.This way the content will be
				 * displayed correctly.Potential formulas (cell data starts with one of = + - @) will be escaped by
				 * prepending a single quote.As the functionality is intended to be used with actual (user) data
				 * there is no reason to allow formulas.
				 * @resource sap/ui/core/util/ExportTypeCSV.js
				 */
				class ExportTypeCSV extends sap.ui.core.util.ExportType {
					/**
					 * Constructor for a new ExportTypeCSV.Accepts an object literal <code>mSettings</code> that defines
					 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
					 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
					 * object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Generates the file content.
					 * @returns content
					 */
					generate(): string;

					/**
					 * Returns a metadata object for class sap.ui.core.util.ExportTypeCSV.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>separatorChar</code>.Separator char.Value needs to be exactly
					 * one character or empty for default.Default value is <code>,</code>.
					 * @returns Value of property <code>separatorChar</code>
					 */
					getSeparatorChar(): string;

					/**
					 * Setter for property <code>separatorChar</code>.Value needs to be exactly one character or empty for
					 * default. Default value is ','.
					 * @param sSeparatorChar new value for property <code>separatorChar</code>
					 * @returns <code>this</code> to allow method chaining
					 */
					setSeparatorChar(
						sSeparatorChar: string
					): sap.ui.core.util.ExportTypeCSV;
				}
			}
			namespace search {
				/**
				 * Abstract base class for all SearchProviders which can be e.g. attached to a SearchField. Do not
				 * create instances of this class, but use a concrete sub class instead.
				 * @resource sap/ui/core/search/SearchProvider.js
				 */
				class SearchProvider extends sap.ui.core.Element {
					/**
					 * Constructor for a new search/SearchProvider.Accepts an object literal <code>mSettings</code> that
					 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Gets current value of property <code>icon</code>.Icon of the Search Provider
					 * @returns Value of property <code>icon</code>
					 */
					getIcon(): string;

					/**
					 * Returns a metadata object for class sap.ui.core.search.SearchProvider.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Sets a new value for property <code>icon</code>.Icon of the Search ProviderWhen called with a value
					 * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
					 * @param sIcon New value for property <code>icon</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setIcon(sIcon: string): sap.ui.core.search.SearchProvider;

					/**
					 * Call this function to get suggest values from the search provider.The given callback function is
					 * called with the suggest value (type 'string', 1st parameter)and an array of the suggestions (type
					 * '[string]', 2nd parameter).
					 * @param sValue The value for which suggestions are requested.
					 * @param fnCallback The callback function which is called when the suggestions are available.
					 */
					suggest(sValue: string, fnCallback: any): void;
				}
				/**
				 * A SearchProvider which uses the OpenSearch protocol (either JSON or XML).
				 * @resource sap/ui/core/search/OpenSearchProvider.js
				 */
				class OpenSearchProvider extends sap.ui.core.search.SearchProvider {
					/**
					 * Constructor for a new search/OpenSearchProvider.Accepts an object literal <code>mSettings</code>
					 * that defines initialproperty values, aggregated and associated objects as well as event handlers.See
					 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
					 * settings object.
					 * @param sId id for the new control, generated automatically if no id is given
					 * @param mSettings initial settings for the new control
					 */
					constructor(sId: string, mSettings?: any);

					/**
					 * Returns a metadata object for class sap.ui.core.search.OpenSearchProvider.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets current value of property <code>suggestType</code>.The type of data which is provided by the
					 * given suggestUrl: either 'json' or 'xml'.Default value is <code>json</code>.
					 * @returns Value of property <code>suggestType</code>
					 */
					getSuggestType(): string;

					/**
					 * Gets current value of property <code>suggestUrl</code>.The URL for suggestions of the search
					 * provider. As placeholder for the concrete search queries '{searchTerms}' must be used. For cross
					 * domain requests maybe a proxy must be used.
					 * @returns Value of property <code>suggestUrl</code>
					 */
					getSuggestUrl(): any;

					/**
					 * Sets a new value for property <code>suggestType</code>.The type of data which is provided by the
					 * given suggestUrl: either 'json' or 'xml'.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.Default value is
					 * <code>json</code>.
					 * @param sSuggestType New value for property <code>suggestType</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setSuggestType(
						sSuggestType: string
					): sap.ui.core.search.OpenSearchProvider;

					/**
					 * Sets a new value for property <code>suggestUrl</code>.The URL for suggestions of the search
					 * provider. As placeholder for the concrete search queries '{searchTerms}' must be used. For cross
					 * domain requests maybe a proxy must be used.When called with a value of <code>null</code> or
					 * <code>undefined</code>, the default value of the property will be restored.
					 * @param sSuggestUrl New value for property <code>suggestUrl</code>
					 * @returns Reference to <code>this</code> in order to allow method chaining
					 */
					setSuggestUrl(
						sSuggestUrl: any
					): sap.ui.core.search.OpenSearchProvider;

					/**
					 * Call this function to get suggest values from the search provider.The given callback function is
					 * called with the suggest value (type 'string', 1st parameter)and an array of the suggestions (type
					 * '[string]', 2nd parameter).
					 * @param sValue The value for which suggestions are requested.
					 * @param fCallback The callback function which is called when the suggestions are available.
					 */
					suggest(sValue: string, fCallback: any): void;
				}
			}
			namespace format {
				namespace NumberFormat {
					/**
					 * Specifies a rounding behavior for numerical operations capable of discarding precision. Each
					 * rounding mode in this object indicates how the leastsignificant returned digits of rounded result is
					 * to be calculated.
					 */
					enum RoundingMode {
						"AWAY_FROM_ZERO",
						"CEILING",
						"FLOOR",
						"HALF_AWAY_FROM_ZERO",
						"HALF_CEILING",
						"HALF_FLOOR",
						"HALF_TOWARDS_ZERO",
						"TOWARDS_ZERO"
					}
				}

				namespace DateFormat {
					interface Options {
						format?: string;
						pattern?: string;
						style?: string;
						strictParsing?: boolean;
						relative?: boolean;
						relativeRange?: boolean;
						relativeScale?: string;
						relativeStyle?: string;
						interval?: boolean;
						singleIntervalValue?: boolean;
						UTC?: boolean;
						calendarType?: sap.ui.core.CalendarType;
					}
				}
				/**
				 * The DateFormat is a static class for formatting and parsing date and time values accordingto a set
				 * of format options.Supported format options are pattern based on Unicode LDML Date Format notation.If
				 * no pattern is specified a default pattern according to the locale settings is used.
				 * @resource sap/ui/core/format/DateFormat.js
				 */
				class DateFormat {
					/**
					 * Constructor for DateFormat - must not be used: To get a DateFormat instance, please use getInstance,
					 * getDateTimeInstance or getTimeInstance.
					 */
					constructor();

					/**
					 * Format a date according to the given format options.
					 * @param oDate the value to format
					 * @param bUTC whether to use UTC
					 * @returns the formatted output value. If an invalid date is given, an empty string is returned.
					 */
					format(oDate: Date, bUTC: boolean): string;

					/**
					 * Get a date instance of the DateFormat, which can be used for formatting.
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to ask for locale specific texts/settings
					 * @returns date instance of the DateFormat
					 */
					static getDateInstance(
						oFormatOptions: DateFormat.Options,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.DateFormat;

					/**
					 * Get a datetime instance of the DateFormat, which can be used for formatting.
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to ask for locale specific texts/settings
					 * @returns datetime instance of the DateFormat
					 */
					static getDateTimeInstance(
						oFormatOptions: DateFormat.Options,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.DateFormat;

					/**
					 * Get a time instance of the DateFormat, which can be used for formatting.
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to ask for locale specific texts/settings
					 * @returns time instance of the DateFormat
					 */
					static getTimeInstance(
						oFormatOptions: DateFormat.Options,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.DateFormat;

					/**
					 * Parse a string which is formatted according to the given format options.
					 * @param sValue the string containing a formatted date/time value
					 * @param bUTC whether to use UTC, if no timezone is contained
					 * @param bStrict to use strict value check
					 * @returns the parsed value
					 */
					parse(sValue: string, bUTC: boolean, bStrict: boolean): Date;
				}
				/**
				 * The NumberFormat is a static class for formatting and parsing numeric values accordingto a set of
				 * format options.
				 * @resource sap/ui/core/format/NumberFormat.js
				 */
				class NumberFormat extends sap.ui.base.Object {
					/**
					 * Constructor for NumberFormat - must not be used: To get a NumberFormat instance, please use
					 * getInstance, getFloatInstance or getIntegerInstance.
					 * @param oFormatOptions The option object which support the following parameters. If no options is
					 * given, default values according to the type and locale settings are used.
					 */
					constructor(oFormatOptions: any);

					/**
					 * Format a number according to the given format options.
					 * @param oValue the number to format or an array which contains the number to format and the sMeasure
					 * parameter
					 * @param sMeasure a measure which has an impact on the formatting
					 * @returns the formatted output value
					 */
					format(oValue: number | any[], sMeasure?: string): string;

					/**
					 * Get a currency instance of the NumberFormat, which can be used for formatting.If no locale is given,
					 * the currently configured{@link sap.ui.core.Configuration.FormatSettings#getFormatLocale
					 * formatLocale} will be used.<p>This instance has HALF_AWAY_FROM_ZERO set as default rounding
					 * mode.Please set the roundingMode property in oFormatOptions to change thedefault value.</p>
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to get the formatter for
					 * @returns integer instance of the NumberFormat
					 */
					getCurrencyInstance(
						oFormatOptions: any,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.NumberFormat;

					/**
					 * Get a float instance of the NumberFormat, which can be used for formatting.If no locale is given,
					 * the currently configured{@link sap.ui.core.Configuration.FormatSettings#getFormatLocale
					 * formatLocale} will be used.<p>This instance has HALF_AWAY_FROM_ZERO set as default rounding
					 * mode.Please set the roundingMode property in oFormatOptions to change thedefault value.</p>
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to get the formatter for
					 * @returns float instance of the NumberFormat
					 */
					getFloatInstance(
						oFormatOptions: any,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.NumberFormat;

					/**
					 * Get an integer instance of the NumberFormat, which can be used for formatting.If no locale is given,
					 * the currently configured{@link sap.ui.core.Configuration.FormatSettings#getFormatLocale
					 * formatLocale} will be used.<p>This instance has TOWARDS_ZERO set as default rounding mode.Please set
					 * the roundingMode property in oFormatOptions to change thedefault value.</p>
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to get the formatter for
					 * @returns integer instance of the NumberFormat
					 */
					getIntegerInstance(
						oFormatOptions: any,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.NumberFormat;

					/**
					 * Returns a metadata object for class sap.ui.core.format.NumberFormat.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Get a percent instance of the NumberFormat, which can be used for formatting.If no locale is given,
					 * the currently configured{@link sap.ui.core.Configuration.FormatSettings#getFormatLocale
					 * formatLocale} will be used.<p>This instance has HALF_AWAY_FROM_ZERO set as default rounding
					 * mode.Please set the roundingMode property in oFormatOptions to change thedefault value.</p>
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to get the formatter for
					 * @returns integer instance of the NumberFormat
					 */
					getPercentInstance(
						oFormatOptions: any,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.NumberFormat;

					/**
					 * Parse a string which is formatted according to the given format options.
					 * @param sValue the string containing a formatted numeric value
					 * @returns the parsed value or an array which contains the parsed value and the currency code (symbol)
					 * when the NumberFormat is a currency instance
					 */
					parse(sValue: string): number | any[];
				}
				/**
				 * The FileSizeFormat is a static class for formatting and parsing numeric file size values accordingto
				 * a set of format options.Supports the same options as {@link
				 * sap.ui.core.format.NumberFormat.getFloatInstance NumberFormat.getFloatInstance}For format options
				 * which are not specified default values according to the type and locale settings are used.Supported
				 * format options (additional to NumberFormat):<ul><li>binaryFilesize: if true, base 2 is used: 1
				 * Kibibyte = 1024 Byte, ... , otherwise base 10 is used: 1 Kilobyte = 1000 Byte (Default is
				 * false)</li></ul>
				 * @resource sap/ui/core/format/FileSizeFormat.js
				 */
				class FileSizeFormat extends sap.ui.base.Object {
					/**
					 * Constructor for FileSizeFormat - must not be used: To get a FileSizeFormat instance, please use
					 * getInstance.
					 */
					constructor();

					/**
					 * Format a filesize (in bytes) according to the given format options.
					 * @param oValue the number (or hex string) to format
					 * @returns the formatted output value
					 */
					format(oValue: number | string): string;

					/**
					 * Get an instance of the FileSizeFormat, which can be used for formatting.If no locale is given, the
					 * currently configured{@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale}
					 * will be used.
					 * @param oFormatOptions Object which defines the format options
					 * @param oLocale Locale to get the formatter for
					 * @returns instance of the FileSizeFormat
					 */
					getInstance(
						oFormatOptions: any,
						oLocale?: sap.ui.core.Locale
					): sap.ui.core.format.FileSizeFormat;

					/**
					 * Returns a metadata object for class sap.ui.core.format.FileSizeFormat.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Parse a string which is formatted according to the given format options.
					 * @param sValue the string containing a formatted filesize value
					 * @returns the parsed value in bytes
					 */
					parse(sValue: string): number;
				}
			}
			namespace CSSSize {
				namespace hortHand {}
			}
			namespace service {
				/**
				 * A service provides a specific functionality. A service instance can be obtainedby a {@link
				 * sap.ui.core.service.ServiceFactory ServiceFactory} or at a Componentvia {@link
				 * sap.ui.core.Component#getService getService} function.This class is the abstract base class for
				 * services and needs to be extended:<pre>sap.ui.define("my/Service", [
				 * "sap/ui/core/service/Service"], function(Service) {  return Service.extend("my.Service", {    init:
				 * function() {      // handle init lifecycle    },    exit: function() {      // handle exit lifecycle
				 *    },    doSomething: function() {      // some functionality    } });});</pre>A service instance
				 * will have a service context:<pre>{  "scopeObject": oComponent, // the Component instance
				 * "scopeType": "component"   // the stereotype of the scopeObject}</pre>The service context can be
				 * retrieved with the function <code>getContext</code>.This function is private to the service instance
				 * and will not be exposed viathe service interface.For consumers of the service it is recommended to
				 * provide the service instanceonly - as e.g. the {@link sap.ui.core.Component#getService getService}
				 * functionof the Component does. The service interface can be accessed via
				 * the<code>getInterface</code> function.Other private functions of the service instance are the
				 * lifecycle functions.Currently there are two lifecycle functions: <code>init</code> and
				 * <code>exit</code>.In addition the <code>destroy</code> function will also by hidden to avoidthe
				 * control of the service lifecycle for service interface consumers.
				 * @resource sap/ui/core/service/Service.js
				 */
				abstract class Service extends sap.ui.base.Object {
					/**
					 * Lifecycle method to destroy the service instance.This function is not available on the service
					 * interface.
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Cleans up the service instance before destruction.Applications must not call this hook method
					 * directly, it is called by theframework when the service is {@link #destroy destroyed}.Subclasses of
					 * service should override this hook to implement any necessaryclean-up.
					 */
					exit(): void;

					/**
					 * Returns the context of the service:<pre>{  "scopeObject": oComponent, // the Component instance
					 * "scopeType": "component"   // the stereotype of the scopeObject}</pre>This function is not available
					 * on the service interface.
					 * @returns the context of the service
					 */
					getContext(): any;

					/**
					 * Returns the public interface of the service. By default, this filters theinternal functions like
					 * <code>getInterface</code>, <code>getContext</code>and all other functions starting with "_".
					 * Additionally the lifecyclefunctions <code>init</code>, <code>exit</code> and
					 * <code>destroy</code>will be filtered for the service interface. This function can beoverridden in
					 * order to self-create a service interface.This function is not available on the service interface.
					 * @returns the public interface of the service
					 */
					getInterface(): sap.ui.base.Interface;

					/**
					 * Returns a metadata object for class sap.ui.core.service.Service.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Initializes the service instance after creation.Applications must not call this hook method
					 * directly, it is called by theframework while the constructor of a service is executed.Subclasses of
					 * service should override this hook to implement any necessaryinitialization.
					 */
					init(): void;
				}
				/**
				 * A service factory is used to create service instances for a specific context.The service factory
				 * needs to be registered in a central{@link sap.ui.core.service.ServiceFactoryRegistry service factory
				 * registry}.Consumers of services require the service factory to create service instances.The service
				 * factory base class can be used in a generic way to act as afactory for any
				 * service:<pre>sap.ui.require([  "sap/ui/core/service/ServiceFactoryRegistry",
				 * "sap/ui/core/service/ServiceFactory",  "my/Service"], function(ServiceFactoryRegistry,
				 * ServiceFactory, MyService) {  ServiceFactoryRegistry.register(new
				 * ServiceFactory(MService));});</pre>Additionally a concrete service factory can be implemented by
				 * extending theservice factory base class if additional functionality is needed whencreating new
				 * instances for a specific context:<pre>sap.ui.define("my/ServiceFactory", [
				 * "sap/ui/core/service/ServiceFactoryRegistry",  "sap/ui/core/service/ServiceFactory",  "my/Service"],
				 * function(ServiceFactoryRegistry, ServiceFactory, MyService) {  return
				 * ServiceFactory.extend("my.ServiceFactory", {    createInstance: function(oServiceContext) {
				 * return Promise.resolve(new MyService(oServiceContext));    }  });});</pre>Another option for the
				 * usage of the service factory is to provide astructured object with information about the service
				 * which willcreate an anonymous service internally:<pre>sap.ui.define("my/ServiceFactory", [
				 * "sap/ui/core/service/ServiceFactoryRegistry",  "sap/ui/core/service/ServiceFactory",  "my/Service"],
				 * function(ServiceFactoryRegistry, ServiceFactory, MyService) {  return new ServiceFactory({    init:
				 * function() { ... },    exit: function() { ... },    doSomething: function() { ... }  });});</pre>As
				 * <code>createInstance</code> returns a <code>Promise</code> e.g. theservice module can also be loaded
				 * asynchronously and resolve once themodule has been loaded and instantiated.
				 * @resource sap/ui/core/service/ServiceFactory.js
				 */
				class ServiceFactory extends sap.ui.base.Object {
					/**
					 * Creates a new instance of a service. When used as a generic service factoryby providing a service
					 * constructor function it will create a new serviceinstance otherwise the function will fail. For
					 * custom service factoriesthis function has to be overridden and should return a <code>Promise</code>.
					 * @param oServiceContext Context for which the service is created
					 * @returns Promise which resolves with the new Service instance.
					 */
					createInstance(oServiceContext: any): JQueryPromise<any>;

					/**
					 * Lifecycle method to destroy the service factory instance.
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Returns a metadata object for class sap.ui.core.service.ServiceFactory.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
			}
			namespace message {
				/**
				 * @resource sap/ui/core/message/Message.js
				 */
				class Message extends sap.ui.base.Object {
					/**
					 * Constructor for a new Message.
					 * @param mParameters (optional) a map which contains the following parameter properties:
					 */
					constructor(mParameters: any);

					/**
					 * Returns a metadata object for class sap.ui.core.message.Message.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * This is an abstract base class for MessageParser objects.
				 * @resource sap/ui/core/message/MessageParser.js
				 */
				abstract class MessageParser extends sap.ui.base.Object {
					/**
					 * Abstract MessageParser class to be inherited in back-end specific implementations.
					 */
					constructor();

					/**
					 * Returns a metadata object for class sap.ui.core.message.MessageParser.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the registered processor on which the events for message handling can be fired
					 * @returns The currently set MessageProcessor or null if none is set
					 */
					getProcessor(): any;

					/**
					 * Abstract parse method must be implemented in the inheriting class.
					 */
					parse(
						oResponse?: any,
						oRequest?: any,
						mGetEntities?: any,
						mChangeEntities?: any
					): void;

					/**
					 * This method is used by the model to register itself as MessageProcessor for this parser
					 * @param oProcessor The MessageProcessor that can be used to fire events
					 * @returns Instance reference for method chaining
					 */
					setProcessor(oProcessor: any): any;
				}
				/**
				 * @resource sap/ui/core/message/MessageManager.js
				 */
				class MessageManager extends sap.ui.base.EventProvider {
					/**
					 * Constructor for a new MessageManager.
					 */
					constructor();

					/**
					 * Add messages to MessageManager
					 * @param vMessages Array of sap.ui.core.message.Message or single sap.ui.core.message.Message
					 */
					addMessages(
						vMessages:
							| sap.ui.core.message.Message
							| sap.ui.core.message.Message[]
					): void;

					/**
					 * destroy MessageManager
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Get the MessageModel
					 * @returns oMessageModel The Message Model
					 */
					getMessageModel(): any;

					/**
					 * Returns a metadata object for class sap.ui.core.message.MessageManager.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Register MessageProcessor
					 * @param oProcessor The MessageProcessor
					 */
					registerMessageProcessor(
						oProcessor: sap.ui.core.message.MessageProcessor
					): void;

					/**
					 * Register ManagedObject: Validation and Parse errors are handled by the MessageManager for this
					 * object
					 * @param oObject The sap.ui.base.ManageObject
					 * @param bHandleValidation Handle validation for this object. If set to true validation/parse events
					 * creates Messages and cancel event.					If set to false only the event will be canceled, but no
					 * messages will be created
					 */
					registerObject(
						oObject: sap.ui.base.ManagedObject,
						bHandleValidation: boolean
					): void;

					/**
					 * Remove all messages
					 */
					removeAllMessages(): void;

					/**
					 * Remove given Messages
					 * @param vMessages The message(s) to be removed.
					 */
					removeMessages(
						vMessages:
							| sap.ui.core.message.Message
							| sap.ui.core.message.Message[]
					): void;

					/**
					 * Deregister MessageProcessor
					 * @param oProcessor The MessageProcessor
					 */
					unregisterMessageProcessor(
						oProcessor: sap.ui.core.message.MessageProcessor
					): void;

					/**
					 * Unregister ManagedObject
					 * @param oObject The sap.ui.base.ManageObject
					 */
					unregisterObject(oObject: sap.ui.base.ManagedObject): void;
				}
				/**
				 * This is an abstract base class for MessageProcessor objects.
				 * @resource sap/ui/core/message/MessageProcessor.js
				 */
				abstract class MessageProcessor extends sap.ui.base.EventProvider {
					/**
					 * Constructor for a new MessageProcessor
					 */
					constructor();

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'messageChange' event of this
					 * <code>sap.ui.core.message.MessageProcessor</code>.<br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this MessageProcessor is
					 * used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachMessageChange(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.message.MessageProcessor;

					/**
					 * Implement in inheriting classes
					 */
					checkMessage(): sap.ui.model.ListBinding;

					/**
					 * Destroys the MessageProcessor Instance
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'sap.ui.core.message.MessageProcessor' event
					 * of this <code>sap.ui.core.message.MessageProcessor</code>.<br/>The passed function and listener
					 * object must match the ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachMessageChange(
						fnFunction: any,
						oListener: any
					): sap.ui.core.message.MessageProcessor;

					/**
					 * Fire event messageChange to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireMessageChange(
						mArguments: any
					): sap.ui.core.message.MessageProcessor;

					/**
					 * Returns the ID of the MessageProcessor instance
					 * @returns sId The MessageProcessor ID
					 */
					getId(): string;

					/**
					 * Returns a metadata object for class sap.ui.core.message.MessageProcessor.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Implement in inheriting classes
					 * @param vMessages map of messages: {'target': [array of messages],...}
					 */
					setMessages(vMessages: any): void;
				}
				/**
				 * The ControlMessageProcessor implementation.This MessageProcessor is able to handle Messages with the
				 * following target syntax:		'ControlID/PropertyName'Creating an instance of this class using the "new"
				 * keyword always results in the same instance (Singleton).
				 * @resource sap/ui/core/message/ControlMessageProcessor.js
				 */
				class ControlMessageProcessor extends sap.ui.core.message
					.MessageProcessor {
					/**
					 * Constructor for a new ControlMessageProcessor
					 */
					constructor();

					/**
					 * Check Messages and update controls with messages
					 */
					checkMessages(): void;

					/**
					 * Returns a metadata object for class sap.ui.core.message.ControlMessageProcessor.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Set Messages to check
					 * @param vMessages map of messages: {'target': [array of messages],...}
					 */
					setMessages(vMessages: any): void;
				}
			}
			namespace routing {
				/**
				 * @resource sap/ui/core/routing/Views.js
				 */
				class Views extends sap.ui.base.EventProvider {
					/**
					 * Instantiates a view repository that creates and caches views. If it is destroyed, all the Views it
					 * created are destroyed.Usually you do not have to create instances of this class, it is used by the
					 * {@link sap.ui.core.routing.Router}.If you are using {@link sap.ui.core.routing.Targets} without
					 * using a {@link sap.ui.core.UIComponent} you have to create an instance of this class.They will
					 * create an instance on their own, or if they are used with a {@link sap.ui.core.UIComponent} they
					 * will share the same instance of Views.
					 * @param oOptions undefined
					 */
					constructor(oOptions: any);

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'created' event of this
					 * <code>sap.ui.core.routing.Views</code>.<br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on
					 * theoListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachCreated(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.routing.Views;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'created' event of this
					 * <code>sap.ui.core.routing.Views</code>.<br/>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachCreated(
						fnFunction: any,
						oListener: any
					): sap.ui.core.routing.Views;

					/**
					 * Fire event created to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireCreated(mArguments: any): sap.ui.core.routing.Views;

					/**
					 * Returns a metadata object for class sap.ui.core.routing.Views.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * @resource sap/ui/core/routing/Route.js
				 */
				class Route extends sap.ui.base.EventProvider {
					/**
					 * Instantiates a SAPUI5 Route
					 * @param The router instance, the route will be added to.
					 * @param oConfig configuration object for the route
					 * @param oParent The parent route - if a parent route is given, the routeMatched event of this route
					 * will also trigger the route matched of the parent and it will also create the view of the parent(if
					 * provided).
					 */
					constructor(
						The: sap.m.routing.Router,
						oConfig: any,
						oParent?: sap.ui.core.routing.Route
					);

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'matched' event of this
					 * <code>sap.ui.core.routing.Route</code>.<br/>
					 * @since 1.25.1
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this Model is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachMatched(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.routing.Route;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'patternMatched' event of this
					 * <code>sap.ui.core.routing.Route</code>.<br/>
					 * @since 1.25.1
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this Model is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachPatternMatched(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.routing.Route;

					/**
					 * Destroys a route
					 * @returns this for chaining.
					 */
					destroy(): sap.ui.core.routing.Route;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'matched' event of this
					 * <code>sap.ui.core.routing.Route</code>.<br/>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @since 1.25.1
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachMatched(
						fnFunction: any,
						oListener: any
					): sap.ui.core.routing.Route;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'patternMatched' event of this
					 * <code>sap.ui.core.routing.Route</code>.<br/>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @since 1.25.1
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachPatternMatched(
						fnFunction: any,
						oListener: any
					): sap.ui.core.routing.Route;

					/**
					 * Returns a metadata object for class sap.ui.core.routing.Route.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Return the pattern of the route. If there are multiple patterns, the first pattern is returned
					 * @returns the routes pattern
					 */
					getPattern(): string;

					/**
					 * Returns the URL for the route and replaces the placeholders with the values in oParameters
					 * @param oParameters Parameters for the route
					 * @returns the unencoded pattern with interpolated arguments
					 */
					getURL(oParameters: any): string;
				}
				/**
				 * @resource sap/ui/core/routing/Target.js
				 */
				class Target extends sap.ui.base.EventProvider {
					/**
					 * Provides a convenient way for placing views into the correct containers of your application.<br/>The
					 * main benefit of Targets is lazy loading: you do not have to create the views until you really need
					 * them.<br/><b>Don't call this constructor directly</b>, use {@link sap.ui.core.routing.Targets}
					 * instead, it will create instances of a Target.<br/>If you are using the mobile library, please use
					 * the {@link sap.m.routing.Targets} constructor, please read the documentation there.<br/>
					 * @param oOptions all of the parameters defined in {@link sap.m.routing.Targets#constructor} are
					 * accepted here, except for children you need to specify the parent.
					 * @param oViews All views required by this target will get created by the views instance using {@link
					 * sap.ui.core.routing.Views#getView}
					 * @param oParent the parent of this target. Will also get displayed, if you display this target. In
					 * the config you have the fill the children property {@link sap.m.routing.Targets#constructor}
					 */
					constructor(
						oOptions: any,
						oViews: sap.ui.core.routing.Views,
						oParent?: sap.ui.core.routing.Target
					);

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'display' event of this
					 * <code>sap.ui.core.routing.Target</code>.<br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on
					 * theoListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachDisplay(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.routing.Target;

					/**
					 * Destroys the target, will be called by {@link sap.m.routing.Targets} don't call this directly.
					 * @returns this for chaining.
					 */
					destroy(): sap.ui.core.routing.Target;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'display' event of this
					 * <code>sap.ui.core.routing.Target</code>.<br/>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachDisplay(
						fnFunction: any,
						oListener: any
					): sap.ui.core.routing.Target;

					/**
					 * Creates a view and puts it in an aggregation of a control that has been defined in the {@link
					 * sap.ui.core.routing.Target#constructor}.
					 * @param vData an object that will be passed to the display event in the data property. If the target
					 * has parents, the data will also be passed to them.
					 * @returns resolves with {name: *, view: *, control: *} if the target can be successfully displayed
					 * otherwise it resolves with {name: *, error: *}
					 */
					display(vData: any): JQueryPromise<any>;

					/**
					 * Fire event created to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireDisplay(mArguments: any): sap.ui.core.routing.Target;

					/**
					 * Returns a metadata object for class sap.ui.core.routing.Target.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * @resource sap/ui/core/routing/Router.js
				 */
				class Router extends sap.ui.base.EventProvider {
					/**
					 * Instantiates a SAPUI5 Router
					 * @param oRoutes may contain many Route configurations as {@link
					 * sap.ui.core.routing.Route#constructor}.<br/>Each of the routes contained in the array/object will be
					 * added to the router.<br/>One way of defining routes is an array:<pre>[    //Will create a route
					 * called 'firstRouter' you can later use this name in navTo to navigate to this route    {
					 * name: "firstRoute"        pattern : "usefulPattern"    },    //Will create a route called
					 * 'anotherRoute'    {        name: "anotherRoute"        pattern : "anotherPattern"    }]</pre>The
					 * alternative way of defining routes is an Object.If you choose this way, the name attribute is the
					 * name of the property.<pre>{    //Will create a route called 'firstRouter' you can later use this
					 * name in navTo to navigate to this route    firstRoute : {        pattern : "usefulPattern"    },
					 * //Will create a route called 'anotherRoute'    anotherRoute : {        pattern : "anotherPattern"
					 * }}</pre>The values that may be provided are the same as in {@link
					 * sap.ui.core.routing.Route#constructor}
					 * @param oConfig Default values for route configuration - also takes the same parameters as {@link
					 * sap.ui.core.routing.Target#constructor}.<br/>This config will be used for routes and for targets,
					 * used in the router<br/>Eg: if the config object specifies :<pre><code>{    viewType :
					 * "XML"}</code></pre>The targets look like this:<pre>{    xmlTarget : {        ...    },    jsTarget :
					 * {        viewType : "JS"        ...    }}</pre>Then the effective config will look like this:<pre>{
					 *   xmlTarget : {        viewType : "XML"        ...    },    jsTarget : {        viewType : "JS"
					 *   ...    }}</pre>Since the xmlTarget does not specify its viewType, XML is taken from the config
					 * object. The jsTarget is specifying it, so the viewType will be JS.
					 * @param oOwner the Component of all the views that will be created by this Router,<br/>will get
					 * forwarded to the {@link sap.ui.core.routing.Views#contructor}.<br/>If you are using the
					 * componentMetadata to define your routes you should skip this parameter.
					 * @param oTargetsConfig available @since 1.28 the target configuration, see {@link
					 * sap.ui.core.Targets#constructor} documentation (the options object).<br/>You should use Targets to
					 * create and display views. Since 1.28 the route should only contain routing relevant
					 * properties.<br/><b>Example:</b><pre><code>    new Router(    // Routes    [        {            //
					 * no view creation related properties are in the route            name: "startRoute",            //no
					 * hash            pattern: "",            // you can find this target in the targetConfig
					 * target: "welcome"        }    ],    // Default values shared by routes and Targets    {
					 * viewNamespace: "my.application.namespace",        viewType: "XML"    },    // You should only use
					 * this constructor when you are not using a router with a component.    // Please use the metadata of
					 * a component to define your routes and targets.    // The documentation can be found here: {@link
					 * sap.ui.core.UIComponent#.extend}.    null,    // Target config    {         //same name as in the
					 * route called 'startRoute'         welcome: {             // All properties for creating and placing
					 * a view go here or in the config             viewName: "Welcome",             controlId: "app",
					 *       controlAggregation: "pages"         }    })</code></pre>
					 */
					constructor(
						oRoutes: any | any[],
						oConfig?: any,
						oOwner?: sap.ui.core.UIComponent,
						oTargetsConfig?: any
					);

					/**
					 * Adds a route to the router
					 * @param oConfig configuration object for the route @see sap.ui.core.routing.Route#constructor
					 * @param oParent The parent route - if a parent route is given, the routeMatched event of this route
					 * will also trigger the route matched of the parent and it will also create the view of the parent (if
					 * provided).
					 */
					addRoute(oConfig: any, oParent: sap.ui.core.routing.Route): void;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'bypassed' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>The event will get fired, if none of the routes of the
					 * routes is matching. <br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this Model is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachBypassed(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.m.routing.Router;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'routeMatched' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this Model is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachRouteMatched(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.m.routing.Router;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'routePatternMatched' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>This event is similar to route matched. But it will
					 * only fire for the route that has a matching pattern, not for its parent Routes <br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this Model is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachRoutePatternMatched(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.m.routing.Router;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'viewCreated' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on
					 * theoListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, this Model is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachViewCreated(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.m.routing.Router;

					/**
					 * Removes the router from the hash changer @see sap.ui.core.routing.HashChanger
					 * @returns this for chaining.
					 */
					destroy(): sap.m.routing.Router;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'bypassed' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>The event will get fired, if none of the routes of the
					 * routes is matching. <br/>The passed function and listener object must match the ones previously used
					 * for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachBypassed(fnFunction: any, oListener: any): sap.m.routing.Router;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'routeMatched' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachRouteMatched(
						fnFunction: any,
						oListener: any
					): sap.m.routing.Router;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'routePatternMatched' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>This event is similar to route matched. But it will
					 * only fire for the route that has a matching pattern, not for its parent Routes <br/>The passed
					 * function and listener object must match the ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachRoutePatternMatched(
						fnFunction: any,
						oListener: any
					): sap.m.routing.Router;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'viewCreated' event of this
					 * <code>sap.ui.core.routing.Router</code>.<br/>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachViewCreated(
						fnFunction: any,
						oListener: any
					): sap.m.routing.Router;

					/**
					 * Fire event bypassed to attached listeners.The event will get fired, if none of the routes of the
					 * routes is matching. <br/>
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireBypassed(mArguments: any): sap.m.routing.Router;

					/**
					 * Fire event routeMatched to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireRouteMatched(mArguments: any): sap.m.routing.Router;

					/**
					 * Fire event routePatternMatched to attached listeners.This event is similar to route matched. But it
					 * will only fire for the route that has a matching pattern, not for its parent Routes <br/>
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireRoutePatternMatched(mArguments: any): sap.m.routing.Router;

					/**
					 * Fire event viewCreated to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireViewCreated(mArguments: any): sap.m.routing.Router;

					/**
					 * Returns a metadata object for class sap.ui.core.routing.Router.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the Route with a name, if no route is found undefined is returned
					 * @since 1.25.1
					 * @param sName Name of the route
					 * @returns the route with the provided name or undefined.
					 */
					getRoute(sName: string): sap.ui.core.routing.Route;

					/**
					 * Get a registered router
					 * @param sName Name of the router
					 * @returns The router with the specified name, else undefined
					 */
					getRouter(sName: string): sap.m.routing.Router;

					/**
					 * Returns the instance of Targets, if you pass a targets config to the router
					 * @returns The instance of targets, the router uses to place views or undefined if you did not specify
					 * the targets parameter in the router's constructor.
					 */
					getTargets(): sap.ui.core.routing.Targets | any;

					/**
					 * Returns the URL for the route and replaces the placeholders with the values in oParameters
					 * @param sName Name of the route
					 * @param oParameters Parameters for the route
					 * @returns the unencoded pattern with interpolated arguments
					 */
					getURL(sName: string, oParameters?: any): string;

					/**
					 * Returns a cached view for a given name or creates it if it does not yet exists
					 * @param sViewName Name of the view
					 * @param sViewType Type of the view
					 * @param sViewId Optional view id
					 * @returns the view instance
					 */
					getView(
						sViewName: string,
						sViewType: string,
						sViewId: string
					): sap.ui.core.mvc.View;

					/**
					 * Returns the views instance created by the router
					 * @since 1.28
					 * @returns the Views instance
					 */
					getViews(): sap.ui.core.routing.Views;

					/**
					 * Attaches the router to the hash changer @see sap.ui.core.routing.HashChanger
					 * @returns this for chaining.
					 */
					initialize(): sap.m.routing.Router;

					/**
					 * Navigates to a specific route defining a set of parameters. The Parameters will be URI encoded - the
					 * characters ; , / ? : @ & = + $ are reserved and will not be encoded.If you want to use special
					 * characters in your oParameters, you have to encode them (encodeURIComponent).IF the given route name
					 * can't be found, an error message is logged to the console and the hash will be changed to empty
					 * string.
					 * @param sName Name of the route
					 * @param oParameters Parameters for the route
					 * @param bReplace Defines if the hash should be replaced (no browser history entry) or set (browser
					 * history entry)
					 * @returns this for chaining.
					 */
					navTo(
						sName: string,
						oParameters?: any,
						bReplace?: boolean
					): sap.m.routing.Router;

					/**
					 * Will trigger routing events + place targets for routes matching the string
					 * @param sNewHash a new hash
					 */
					parse(sNewHash: string): void;

					/**
					 * Registers the router to access it from another context. Use sap.ui.routing.Router.getRouter() to
					 * receive the instance
					 * @param sName Name of the router
					 */
					register(sName: string): void;

					/**
					 * Adds or overwrites a view in the viewcache of the router, the viewname serves as a key
					 * @since 1.22
					 * @param sViewName Name of the view
					 * @param oView the view instance
					 * @returns @since 1.28 the this pointer for chaining
					 */
					setView(
						sViewName: string,
						oView: sap.ui.core.mvc.View
					): sap.m.routing.Router;

					/**
					 * Stops to listen to the hashChange of the browser.</br>If you want the router to start again, call
					 * initialize again.
					 * @returns this for chaining.
					 */
					stop(): sap.m.routing.Router;
				}
				/**
				 * @resource sap/ui/core/routing/History.js
				 */
				class History {
					/**
					 * Used to determine the {@link sap.ui.core.HistoryDirection} of the current or a future
					 * navigation,done with a {@link sap.ui.core.routing.Router} or {@link
					 * sap.ui.core.routing.HashChanger}.<strong>ATTENTION:</strong> this class will not be accurate if
					 * someone does hash-replacement without the named classes aboveIf you are manipulating the hash
					 * directly this class is not supported anymore.
					 * @param oHashChanger required, without a HashChanger this class cannot work. The class needs to be
					 * aware of the hash-changes.
					 */
					constructor(oHashChanger: sap.ui.core.routing.HashChanger);

					/**
					 * Determines what the navigation direction for a newly given hash would beIt will say Unknown if there
					 * is a history foo - bar (current history) - fooIf you now ask for the direction of the hash "foo" you
					 * get Unknown because it might be backwards or forwards.For hash replacements, the history stack will
					 * be replaced at this position for the history.
					 * @param sNewHash optional, if this parameter is not passed the last hashChange is taken.
					 * @returns or undefined, if no navigation has taken place yet.
					 */
					getDirection(sNewHash: string): any;

					/**
					 * @returns a global singleton that gets created as soon as the sap.ui.core.routing.History is required
					 */
					getInstance(): sap.ui.core.routing.History;

					/**
					 * gets the previous hash in the history - if the last direction was Unknown or there was no navigation
					 * yet, undefined will be returned
					 * @returns or undefined
					 */
					getPreviousHash(): string;
				}
				/**
				 * @resource sap/ui/core/routing/Targets.js
				 */
				class Targets extends sap.ui.base.EventProvider {
					/**
					 * Provides a convenient way for placing views into the correct containers of your application.The main
					 * benefit of Targets is lazy loading: you do not have to create the views until you really need
					 * them.If you are using the mobile library, please use {@link sap.m.routing.Targets} instead of this
					 * class.
					 * @param oOptions undefined
					 */
					constructor(oOptions: any);

					/**
					 * Creates a target by using the given name and options. If there's already a target with the same name
					 * exists, the existing target is kept from being overwritten and an error log will be written to the
					 * development console.
					 * @param sName the name of a target
					 * @param oTarget the options of a target. The option names are the same as the ones in
					 * "oOptions.targets.anyName" of {@link constructor}.
					 * @returns Targets itself for method chaining
					 */
					addTarget(sName: string, oTarget: any): sap.ui.core.routing.Targets;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'display' event of this
					 * <code>sap.ui.core.routing.Targets</code>.<br/>
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on
					 * theoListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachDisplay(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.core.routing.Targets;

					/**
					 * Destroys the targets instance and all created targets. Does not destroy the views instance passed to
					 * the constructor. It has to be destroyed separately.
					 * @returns this for chaining.
					 */
					destroy(): sap.ui.core.routing.Targets;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'display' event of this
					 * <code>sap.ui.core.routing.Targets</code>.<br/>The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachDisplay(
						fnFunction: any,
						oListener: any
					): sap.ui.core.routing.Targets;

					/**
					 * Creates a view and puts it in an aggregation of the specified control.
					 * @param vTargets the key of the target as specified in the {@link #constructor}. To display multiple
					 * targets you may also pass an array of keys.
					 * @param vData an object that will be passed to the display event in the data property. If the target
					 * has parents, the data will also be passed to them.
					 * @returns this pointer for chaining
					 */
					display(
						vTargets: string | string[],
						vData?: any
					): sap.ui.core.routing.Targets;

					/**
					 * Fire event created to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireDisplay(mArguments: any): sap.ui.core.routing.Targets;

					/**
					 * Returns a metadata object for class sap.ui.core.routing.Targets.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns a target by its name (if you pass myTarget: { view: "myView" }) in the config myTarget is
					 * the name.
					 * @param vName the name of a single target or the name of multiple targets
					 * @returns The target with the coresponding name or undefined. If an array way passed as name this
					 * will return an array with all found targets. Non existing targets will not be returned but will log
					 * an error.
					 */
					getTarget(
						vName: string | string[]
					): sap.ui.core.routing.Target | any | sap.ui.core.routing.Target[];

					/**
					 * Returns the views instance passed to the constructor
					 * @returns the views instance
					 */
					getViews(): sap.ui.core.routing.Views;
				}
				/**
				 * Class for manipulating and receiving changes of the browserhash with the hasher framework.Fires a
				 * "hashChanged" event if the browser hash changes.
				 * @resource sap/ui/core/routing/HashChanger.js
				 */
				class HashChanger extends sap.ui.base.EventProvider {
					constructor();

					/**
					 * Cleans the event registration
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Fires the hashchanged event, may be extended to modify the hash before fireing the event
					 * @param newHash the new hash of the browser
					 * @param oldHash the previous hash
					 */
					fireHashChanged(newHash: string, oldHash: string): void;

					/**
					 * Gets the current hash
					 * @returns the current hash
					 */
					getHash(): string;

					/**
					 * Gets a global singleton of the HashChanger. The singleton will get created when this function is
					 * invoked for the first time.
					 */
					getInstance(): void;

					/**
					 * Returns a metadata object for class sap.ui.core.routing.HashChanger.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Will start listening to hashChanges with the parseHash function.This will also fire a hashchanged
					 * event with the initial hash.
					 */
					init(): void;

					/**
					 * Replaces the hash to a certain value. When using the replace function no browser history is
					 * written.If you want to have an entry in the browser history, please use set setHash function.
					 * @param sHash the hash
					 */
					replaceHash(sHash: string): void;

					/**
					 * Sets the hashChanger to a new instance, destroys the old one and copies all its event listeners to
					 * the new one
					 * @param oHashChanger the new instance for the global singleton
					 */
					replaceHashChanger(
						oHashChanger: sap.ui.core.routing.HashChanger
					): void;

					/**
					 * Sets the hash to a certain value. When using the set function a browser history  entry is written.If
					 * you do not want to have an entry in the browser history, please use set replaceHash function.
					 * @param sHash the hash
					 */
					setHash(sHash: string): void;
				}
				/**
				 * Enumaration for different HistoryDirections
				 */
				namespace routing {
					enum HistoryDirection {
						Backwards,
						Forwards,
						NewEntry,
						Unknown
					}
				}
			}
			namespace theming {
				namespace Parameters {
					/**
					 * Returns the scopes from current theming parameters.
					 * @param bAvoidLoading Whether loading of parameters should be avoided
					 * @returns Scope names
					 */
					function _getScopes(bAvoidLoading: boolean): any[];

					/**
					 * Returns the current value for one or more theming parameters, depending on the given
					 * arguments.<ul><li>If no parameter is given a key-value map containing all parameters is
					 * returned</li><li>If a <code>string</code> is given as first parameter the value is returned as a
					 * <code>string</code></li><li>If an <code>array</code> is given as first parameter a key-value map
					 * containing all parameters from the <code>array</code> is returned</li></ul><p>The returned key-value
					 * maps are a copy so changing values in the map does not have any effect</p>
					 * @param vName the (array with) CSS parameter name(s)
					 * @param oElement Element / control instance to take into account when looking for a parameter value.
					 *                         This can make a difference when a parameter value is overridden in a theme
					 * scope set via a CSS class.
					 * @returns the CSS parameter value(s)
					 */
					function get(
						vName: string | string[],
						oElement?: sap.ui.core.Element
					): string | any | any;

					/**
					 * Returns the active scope(s) for a given control by looking up the hierarchy.The lookup navigates the
					 * DOM hierarchy if it's available. Otherwise if controls aren't rendered yet,it navigates the control
					 * hierarchy. By navigating the control hierarchy, inner-html elementswith the respective scope classes
					 * can't get recognized as the Custom Style Class API does only forroot elements.
					 * @param oElement element/control instance
					 * @returns Two dimensional array with scopes in bottom up order
					 */
					function getActiveScopesFor(oElement: any): string[][];

					/**
					 * Resets the CSS parameters which finally will reload the parametersthe next time they are queried via
					 * the method <code>get</code>.
					 */
					function reset(): void;
				}
			}
			namespace CSSColor {}
			namespace delegate {
				/**
				 * Delegate for the navigation between DOM nodes with the keyboard.The <code>ItemNavigation</code>
				 * provides keyboard and mouse navigation between DOM nodes representing items.This means that controls
				 * rendering a list of items can attach this delegate to get a common keyboard and mouse supportto
				 * navigate between these items.It is possible to navigate between the items via the arrow keys.If
				 * needed, paging using the Page Up and Page Down keys is possible. (To activate call
				 * <code>setPageSize</code> with a value &gt; 0.)HOME and END keys are also supported.Focusing an item
				 * via mouse also is also supported. For mouse navigation, the <code>mousedown</code> event is used.As
				 * the <code>ItemNavigation</code> works with DOM nodes, the items and the control area must be
				 * provided asDOM references. There is one root DOM reference (set via <code>setRootDomRef</code>).All
				 * item DOM references (set via <code>setItemDomRefs</code>) must be places somewhere inside of this
				 * root DOM reference.Only focusable items are used for the navigation, meaning disabled items or
				 * separator items are just ignored by navigatingthrough the items. In some cases however, it makes
				 * sense to put the non-focusable items in the array of the DOM references tokeep the indexes stable or
				 * like in the calling control.<b>Hint:</b> To make a DOM reference focusable a <code>tabindex</code>
				 * of -1 can be set.<b>Note</b> After re-rendering of the control or changing the DOM nodes of the
				 * control, theDOM references of the <code>ItemNavigation</code> must be updated. Then the same
				 * item(corresponding to the index) will get the focus.The <code>ItemNavigation</code> adjusts the
				 * <code>tabindex</code> of all DOM references relating to the currentfocused item. So if the control
				 * containing the items gets the focus (e.g. via tab navigation),it is always the focused items which
				 * will be focused.<b>Note:</b> If the <code>ItemNavigation</code> is nested in another
				 * <code>ItemNavigation</code>(e.g. <code>SegmentedButton</code> in <code>Toolbar</code>), the
				 * <code>RootDomRef</code> will always have <code>tabindex</code> -1.Per default the
				 * <code>ItemNavigation</code> cycles over the items.It navigates again to the first item if the Arrow
				 * Down or Arrow Right key is pressed whilethe last item has the focus. It navigates to the last item
				 * if arrow up orarrow left is pressed while the first item has the focus.If you want to stop the
				 * navigation at the first and last item,call the <code>setCycling</code> method with a value of
				 * <code>false</code>.It is possible to have multiple columns in the item navigation. If multiple
				 * columnsare used, the keyboard navigation changes. The Arrow Right and Arrow Left keys will take the
				 * user to the next or previousitem, and the Arrow Up and Arrow Down keys will navigate the same way
				 * but in a vertical direction.The <code>ItemNavigation</code> also allows setting a selected index
				 * that is used to identifythe selected item. Initially, if no other focus is set, the selected item
				 * will be the focused one.Note that navigating through the items will not change the selected item,
				 * only the focus.(For example a radio group has one selected item.)
				 * @resource sap/ui/core/delegate/ItemNavigation.js
				 */
				class ItemNavigation extends sap.ui.base.EventProvider {
					/**
					 * Creates an <code>ItemNavigation</code> delegate that can be attached to controls
					 * requiringcapabilities for keyboard navigation between items.
					 * @param oDomRef The root DOM reference that includes all items
					 * @param aItemDomRefs Array of DOM references representing the items for the navigation
					 * @param bNotInTabChain Whether the selected element should be in the tab chain or not
					 */
					constructor(
						oDomRef: sap.ui.core.Element,
						aItemDomRefs: Element[],
						bNotInTabChain?: boolean
					);

					/**
					 * Returns disabled modifiersThese modifiers will not be handled by the <code>ItemNavigation</code>
					 * @param oDisabledModifiers Object that includes event type with disabled keys as an array
					 * @returns Object that includes event type with disabled keys as an array
					 */
					getDisabledModifiers(oDisabledModifiers: any): any;

					/**
					 * Returns the array of item DOM references
					 * @returns Array of item DOM references
					 */
					getItemDomRefs(): Element[];

					/**
					 * Returns a metadata object for class sap.ui.core.delegate.ItemNavigation.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the root DOM reference surrounding the items
					 * @returns Root DOM reference
					 */
					getRootDomRef(): sap.ui.core.Element;

					/**
					 * Check whether given event has disabled modifier or not
					 * @param oEvent jQuery event
					 * @returns Flag if disabled modifiers are set
					 */
					hasDisabledModifier(oEvent: any): Boolean;

					/**
					 * Sets whether the items are displayed in columns.If columns are used, the Arrow Up and Arrow Down
					 * keys navigate to the next or previousitem of the column. If the first or last item of the column is
					 * reached, the next focuseditem is then in the next or previous column.
					 * @param iColumns Count of columns for the table mode or cycling mode
					 * @param bNoColumnChange Forbids jumping to an other column with Arrow Up and Arrow Down keys
					 * @returns <code>this</code> to allow method chaining
					 */
					setColumns(
						iColumns: number,
						bNoColumnChange: boolean
					): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets whether the <code>ItemNavigation</code> should cycle through the items.If cycling is disabled
					 * the navigation stops at the first and last item, if the corresponding arrow keys are used.
					 * @param bCycling Set to true if cycling should be done, else false
					 * @returns <code>this</code> to allow method chaining
					 */
					setCycling(bCycling: boolean): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets the disabled modifiersThese modifiers will not be handled by the
					 * <code>ItemNavigation</code><pre>Example: Disable shift + up handling of the
					 * <code>ItemNavigation</code>oItemNavigation.setDisabledModifiers({    sapnext : ["shift"]});Possible
					 * keys are : "shift", "alt", "ctrl", "meta"Possible events are : "sapnext", "sapprevious", "saphome",
					 * "sapend"</pre>
					 * @param oDisabledModifiers Object that includes event type with disabled keys as an array
					 * @returns <code>this</code> to allow method chaining
					 */
					setDisabledModifiers(
						oDisabledModifiers: any
					): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets behavior of HOME and END keys if columns are used.
					 * @param bStayInRow HOME -> go to first item in row; END -> go to last item in row
					 * @param bCtrlEnabled HOME/END with CTRL -> go to first/last item of all
					 * @returns <code>this</code> to allow method chaining
					 */
					setHomeEndColumnMode(
						bStayInRow: boolean,
						bCtrlEnabled: boolean
					): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets the item DOM references as an array for the items
					 * @param aItemDomRefs Array of DOM references representing the items
					 * @returns <code>this</code> to allow method chaining
					 */
					setItemDomRefs(
						aItemDomRefs: Element[]
					): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets the page size of the item navigation to allow Page Up and Page Down keys.
					 * @param iPageSize The page size, needs to be at least 1
					 * @returns <code>this</code> to allow method chaining
					 */
					setPageSize(iPageSize: number): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets the root DOM reference surrounding the items
					 * @param oDomRef Root DOM reference
					 * @returns <code>this</code> to allow method chaining
					 */
					setRootDomRef(oDomRef: any): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets the selected index if the used control supports selection.
					 * @param iIndex Index of the first selected item
					 * @returns <code>this</code> to allow method chaining
					 */
					setSelectedIndex(iIndex: number): sap.ui.core.delegate.ItemNavigation;

					/**
					 * Sets whether the <code>ItemNavigation</code> should use the table mode to navigate throughthe items
					 * (navigation in a grid).
					 * @param bTableMode Set to true if table mode should be used, else false
					 * @param bTableList This sets a different behavior for table mode.In this mode we keep using table
					 * navigation but there are some differences. e.g.<ul>	<li>Page-up moves focus to the first row, not to
					 * the first cell like in table mode</li>	<li>Page-down moves focus to the last row, not to the last
					 * cell like in table mode</li></ul>
					 * @returns <code>this</code> to allow method chaining
					 */
					setTableMode(
						bTableMode: boolean,
						bTableList?: boolean
					): sap.ui.core.delegate.ItemNavigation;
				}
				/**
				 * Delegate for touch scrolling on mobile devicesThis delegate uses CSS (-webkit-overflow-scrolling)
				 * only if supported. Otherwise the desiredscrolling library is used. Please also consider the
				 * documentationof the library for a proper usage.Controls that implement ScrollEnablement should
				 * additionally provide the getScrollDelegate method that returnsthe current instance of this delegate
				 * object
				 * @resource sap/ui/core/delegate/ScrollEnablement.js
				 */
				class ScrollEnablement extends sap.ui.base.Object {
					/**
					 * Destroys this Scrolling delegate.This function must be called by the control which uses this
					 * delegate in the <code>exit</code> function.
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Calculates scroll position of a child of a container.
					 * @param vElement An element(DOM or jQuery) for which the scroll position will be calculated.
					 * @returns Position object.
					 */
					getChildPosition(vElement: HTMLElement | typeof jQuery): any;

					/**
					 * Get current setting for horizontal scrolling.
					 * @since 1.9.1
					 * @returns true if horizontal scrolling is enabled
					 */
					getHorizontal(): boolean;

					/**
					 * Returns a metadata object for class sap.ui.core.delegate.ScrollEnablement.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Get current setting for vertical scrolling.
					 * @since 1.9.1
					 * @returns true if vertical scrolling is enabled
					 */
					getVertical(): boolean;

					/**
					 * Refreshes this Scrolling delegate.
					 */
					refresh(): void;

					/**
					 * Scrolls to an element within a container.
					 * @param oElement A DOM element.
					 * @param iTime The duration of animated scrolling in milliseconds. To scroll immediately without
					 * animation, give 0 as value.
					 */
					scrollToElement(
						oElement: HTMLElement,
						iTime?: number
					): ScrollEnablement;

					/**
					 * Setter for property <code>bounce</code>.
					 * @since 1.17
					 * @param bBounce new value for property <code>bounce</code>.
					 */
					setBounce(bBounce: boolean): void;

					/**
					 * Sets GrowingList control to scroll container
					 * @since 1.11.0
					 * @param fnScrollLoadCallback Scrolling callback
					 * @param sScrollLoadDirection Scrolling directionThis function is supported in iScroll and mouse
					 * delegates only.
					 */
					setGrowingList(
						fnScrollLoadCallback: any,
						sScrollLoadDirection: sap.m.ListGrowingDirection
					): void;

					/**
					 * Enable or disable horizontal scrolling.
					 * @param bHorizontal set true to enable horizontal scrolling, false - to disable
					 */
					setHorizontal(bHorizontal: boolean): void;

					/**
					 * Sets IconTabBar control to scroll container
					 * @since 1.16.1
					 * @param IconTabBar instanceThis function is supported in iScroll only.
					 */
					setIconTabBar(IconTabBar: sap.m.IconTabBar): void;

					/**
					 * Set overflow control on top of scroll container.
					 * @since 1.9.2
					 * @param top control that should be normally hidden overthe top border of the scroll container
					 * (pull-down content).This function is supported in iScroll delegates only. In MouseScroll delegates
					 * the element is not hidden and should have an appropriate rendering for being always displayed and
					 * should have an alternative way for triggering (e.g. a Button).
					 */
					setPullDown(top: sap.ui.core.Control): void;

					/**
					 * Enable or disable vertical scrolling.
					 * @param bVertical set true to enable vertical scrolling, false - to disable
					 */
					setVertical(bVertical: boolean): void;
				}
			}
			namespace Renderer {
				/**
				 * Returns the TextAlignment for the provided configuration.
				 * @param oTextAlign the text alignment of the Control
				 * @param oTextDirection the text direction of the Control
				 * @returns the actual text alignment that must be set for this environment
				 */
				function getTextAlign(
					oTextAlign: sap.ui.core.TextAlign,
					oTextDirection: sap.ui.core.TextDirection
				): string;
			}
			namespace IconPool {
				/**
				 * Register an additional icon to the sap.ui.core.IconPool.
				 * @param iconName the name of the icon.
				 * @param collectionName the name of icon collection. The built in icons are with empty collectionName,
				 * so if additional icons need to be registered in IconPool, the collectionName can't be empty.
				 * @param iconInfo the icon info which contains the following properties:
				 * @returns the info object of the registered icon which has the name, collection, uri, fontFamily,
				 * content and suppressMirroring properties.
				 */
				function addIcon(
					iconName: string,
					collectionName: string,
					iconInfo: any
				): any;

				/**
				 * Creates an instance of {@link sap.ui.core.Icon} if the given URI is an icon URI, otherwise the given
				 * constructor is called.The given URI is set to the src property of the control.
				 * @param setting contains the properties which will be used to instantiate the returned control. It
				 * should contain at least a property named src. If it's given with a string type, it will be taken as
				 * the value of src property.
				 * @param constructor the constructor function which is called when the given URI isn't an icon URI
				 * @returns either an instance of sap.ui.core.Icon or instance created by calling the given constructor
				 */
				function createControlByURI(
					setting: string | any,
					constructor: any
				): sap.ui.core.Control;

				/**
				 * Returns all names of registered collections in IconPool
				 * @returns An array contains all of the registered collections' names.
				 */
				function getIconCollectionNames(): any[];

				/**
				 * Returns the icon url based on the given mime type
				 * @since 1.25.0
				 * @param sMimeType the mime type of a file (e.g. "application/zip")
				 * @returns the icon url (e.g. "sap-icon://attachment-zip-file")
				 */
				function getIconForMimeType(sMimeType: string): string;

				/**
				 * Returns an info object for the icon with the given <code>iconName</code> and
				 * <code>collectionName</code>.Instead of giving name and collection, a complete icon-URI can be
				 * provided as <code>iconName</code>.The method will determine name and collection from the URI, see
				 * {@link #.isIconURI IconPool.isIconURI}for details.The returned info object has the following
				 * properties:<ul><li><code>string: name</code> Name of the icon</li><li><code>string:
				 * collection</code> Name of the collection that contains the icon or <code>undefined</code> in case of
				 * the default collection</li><li><code>string: uri</code> Icon URI that identifies the
				 * icon</li><li><code>string: fontFamily</code> CSS font family to use for this
				 * icon</li><li><code>string: content</code> Character sequence that represents the icon in the icon
				 * font</li><li><code>string: text</code> Alternative text describing the icon (optional, might be
				 * empty)</li><li><code>boolean: suppressMirroring</code> Whether the icon needs no mirroring in
				 * right-to-left mode</li></ul>
				 * @param iconName Name of the icon, must not be empty
				 * @param collectionName Name of the icon collection; to access built-in icons, omit the collection
				 * name
				 * @returns Info object for the icon or <code>undefined</code> when the icon can't be found.
				 */
				function getIconInfo(iconName: string, collectionName?: string): any;

				/**
				 * Returns all name of icons that are registerd under the given collection.
				 * @param collectionName the name of collection where icon names are retrieved.
				 * @returns An array contains all of the registered icon names under the given collection.
				 */
				function getIconNames(collectionName: string): any[];

				/**
				 * Returns the URI of the icon in the pool which has the given <code>iconName</code> and
				 * <code>collectionName</code>.
				 * @param iconName Name of the icon, must not be empty
				 * @param collectionName Name of the icon collection; to access built-in icons, omit the collection
				 * name
				 * @returns URI of the icon or <code>undefined</code> if the icon can't be found in the IconPool
				 */
				function getIconURI(iconName: string, collectionName?: string): string;

				/**
				 * Returns whether the given <code>uri</code> is an icon URI.A string is an icon URI when it can be
				 * parsed as an URI and when it has one of the two
				 * forms<ul><li>sap-icon://collectionName/iconName</li><li>sap-icon://iconName</li></ul>where
				 * collectionName and iconName must be non-empty.
				 * @param uri The URI to check
				 * @returns Whether the URI matches the icon URI format
				 */
				function isIconURI(uri: string): boolean;
			}
			namespace Collision {}
			namespace Percentage {}
			namespace Popup.Dock {
				/**
				 */
				var BeginBottom: any;

				/**
				 */
				var BeginCenter: any;

				/**
				 */
				var BeginTop: any;

				/**
				 */
				var CenterBottom: any;

				/**
				 */
				var CenterCenter: any;

				/**
				 */
				var CenterTop: any;

				/**
				 */
				var EndBottom: any;

				/**
				 */
				var EndCenter: any;

				/**
				 */
				var EndTop: any;

				/**
				 */
				var LeftBottom: any;

				/**
				 */
				var LeftCenter: any;

				/**
				 */
				var LeftTop: any;

				/**
				 */
				var RightBottom: any;

				/**
				 */
				var RightCenter: any;

				/**
				 */
				var RightTop: any;
			}
			namespace ResizeHandler {
				/**
				 * Deregisters a previously registered handler for resize events with the given registration ID.
				 * @param sId The registration ID of the handler to deregister. The ID was provided by function {@link
				 * sap.ui.core.ResizeHandler.register}           when the handler was registered.
				 */
				function deregister(sId: string): void;

				/**
				 * Returns a metadata object for class sap.ui.core.ResizeHandler.
				 * @returns Metadata object describing this class
				 */
				function getMetadata(): sap.ui.base.Metadata;

				/**
				 * Registers the given event handler for resize events on the given DOM element or control.<b>Note:</b>
				 * This function must not be used before the UI5 framework is initialized.Please use the {@link
				 * sap.ui.core.Core#attachInit init event} of UI5 if you are not sure whether this is the case.The
				 * resize handler periodically checks the dimensions of the registered reference. Whenever it detects
				 * changes, an event is fired.Be careful when changing dimensions within the event handler which might
				 * cause another resize event and so on.The available parameters of the resize event
				 * are:<ul><li><code>oEvent.target</code>: The DOM element of which the dimensions were
				 * checked</li><li><code>oEvent.size.width</code>: The current width of the DOM element in
				 * pixels</li><li><code>oEvent.size.height</code>: The current height of the DOM element in
				 * pixels</li><li><code>oEvent.oldSize.width</code>: The previous width of the DOM element in
				 * pixels</li><li><code>oEvent.oldSize.height</code>: The previous height of the DOM element in
				 * pixels</li><li><code>oEvent.control</code>: The control which was given during registration of the
				 * event handler (if present)</li></ul>
				 * @param oRef The control or the DOM reference for which the given event handler should be registered
				 * (beside the window)
				 * @param fHandler The event handler which should be called whenever the size of the given reference is
				 * changed.            The event object is passed as first argument to the event handler. See the
				 * description of this function for more details about the available parameters of this event.
				 * @returns A registration ID which can be used for deregistering the event handler, see {@link
				 * sap.ui.core.ResizeHandler.deregister}.            If the UI5 framework is not yet initialized
				 * <code>null</code> is returned.
				 */
				function register(
					oRef: any | sap.ui.core.Control,
					fHandler: any
				): string;
			}
			namespace BusyIndicator {
				/**
				 * Registers a handler for the "close" event
				 * @param fnFunction The function to call, when the event occurs.           This function will be
				 * called on the oListener-instance (if           present) or in a 'static way'.
				 * @param oListener Object on which to call the given function.
				 * @returns <code>this</code> to allow method chaining
				 */
				function attachClose(
					fnFunction: any,
					oListener?: any
				): typeof sap.ui.core.BusyIndicator;

				/**
				 * Registers a handler for the "open" event.
				 * @param fnFunction The function to call, when the event occurs. This           function will be
				 * called on the oListener-instance (if present)           or in a 'static way'.
				 * @param oListener Object on which to call the given function.
				 * @returns <code>this</code> to allow method chaining
				 */
				function attachOpen(
					fnFunction: any,
					oListener?: any
				): typeof sap.ui.core.BusyIndicator;

				/**
				 * Unregisters a handler for the "close" event
				 * @param fnFunction The callback function to unregister
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				function detachClose(
					fnFunction: any,
					oListener: any
				): typeof sap.ui.core.BusyIndicator;

				/**
				 * Unregisters a handler for the "open" event
				 * @param fnFunction The callback function to unregister
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				function detachOpen(
					fnFunction: any,
					oListener: any
				): typeof sap.ui.core.BusyIndicator;

				/**
				 * Removes the BusyIndicator from the screen
				 */
				function hide(): void;

				/**
				 * Displays the BusyIndicator and starts blocking all user input.This only happens after some delay and
				 * if after that delay theBusyIndicator.hide() has not yet been called in the meantime.There is a
				 * certain default value for the delay, but that one can beoverridden.
				 * @param iDelay The delay in milliseconds before opening the                      BusyIndicator. It is
				 * not opened if hide() is called                      before end of the delay. If no delay (or no
				 * valid                      delay) is given, the default value is used.
				 */
				function show(iDelay: number): void;
				namespace tils {}
			}
			namespace Configuration {
				/**
				 * Encapsulates configuration settings that are related to data formatting/parsing.<b>Note:</b> When
				 * format configuration settings are modified through this class,UI5 only ensures that formatter
				 * objects created after that point in time will honorthe modifications. To be on the safe side,
				 * applications should do any modificationsearly in their lifecycle or recreate any model/UI that is
				 * locale dependent.
				 * @resource sap/ui/core/Configuration.js
				 */
				class FormatSettings extends sap.ui.base.Object {
					constructor();

					/**
					 * Returns the currently set date pattern or undefined if no pattern has been defined.
					 */
					getDatePattern(): void;

					/**
					 * Returns the locale to be used for formatting.If no such locale has been defined, this method falls
					 * back to the language,see {@link sap.ui.core.Configuration#getLanguage
					 * Configuration.getLanguage()}.If any user preferences for date, time or number formatting have been
					 * set,and if no format locale has been specified, then a special private use subtagis added to the
					 * locale, indicating to the framework that these user preferencesshould be applied.
					 * @returns the format locale
					 */
					getFormatLocale(): sap.ui.core.Locale;

					/**
					 * Returns the currently set customizing data for Islamic calendar support
					 * @returns Returns an array contains the customizing data. Each element in the array has properties:
					 * dateFormat, islamicMonthStart, gregDate. For details, please see {@link
					 * #setLegacyDateCalendarCustomizing}
					 */
					getLegacyDateCalendarCustomizing(): any[];

					/**
					 * Returns the currently set legacy ABAP date format (its id) or undefined if none has been set.
					 */
					getLegacyDateFormat(): void;

					/**
					 * Returns the currently set legacy ABAP number format (its id) or undefined if none has been set.
					 */
					getLegacyNumberFormat(): void;

					/**
					 * Returns the currently set legacy ABAP time format (its id) or undefined if none has been set.
					 */
					getLegacyTimeFormat(): void;

					/**
					 * Returns a metadata object for class sap.ui.core.Configuration.FormatSettings.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the currently set number symbol of the given type or undefined if no symbol has been
					 * defined.
					 */
					getNumberSymbol(): void;

					/**
					 * Returns the currently set time pattern or undefined if no pattern has been defined.
					 */
					getTimePattern(): void;

					/**
					 * Defines the preferred format pattern for the given date format style.Calling this method with a null
					 * or undefined pattern removes a previously set pattern.If a pattern is defined, it will be preferred
					 * over patterns derived from the current locale.See class {@link sap.ui.core.format.DateFormat} for
					 * details about the pattern syntax.After changing the date pattern, the framework tries to update
					 * localizationspecific parts of the UI. See the documentation of {@link
					 * sap.ui.core.Configuration#setLanguage}for details and restrictions.
					 * @param sStyle must be one of short, medium, long or full.
					 * @param sPattern the format pattern to be used in LDML syntax.
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setDatePattern(
						sStyle: string,
						sPattern: string
					): sap.ui.core.Configuration.FormatSettings;

					/**
					 * Defines the day used as the first day of the week.The day is set as an integer value between 0
					 * (Sunday) and 6 (Saturday).Calling this method with a null or undefined symbol removes a previously
					 * set value.If a value is defined, it will be preferred over values derived from the current
					 * locale.Usually in the US the week starts on Sunday while in most European countries on Monday.There
					 * are special cases where you want to have the first day of week set independent of theuser
					 * locale.After changing the first day of week, the framework tries to update localizationspecific
					 * parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage}for details
					 * and restrictions.
					 * @param iValue must be an integer value between 0 and 6
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setFirstDayOfWeek(
						iValue: number
					): sap.ui.core.Configuration.FormatSettings;

					/**
					 * Allows to specify the customizing data for Islamic calendar support
					 * @param aMappings contains the customizing data for the support of Islamic calendar.
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setLegacyDateCalendarCustomizing(
						aMappings: any[]
					): sap.ui.core.Configuration.FormatSettings;

					/**
					 * Allows to specify one of the legacy ABAP date formats.This method modifies the date patterns for
					 * 'short' and 'medium' style with the corresponding ABAPformat. When called with a null or undefined
					 * format id, any previously applied format will be removed.After changing the legacy date format, the
					 * framework tries to update localizationspecific parts of the UI. See the documentation of {@link
					 * sap.ui.core.Configuration#setLanguage}for details and restrictions.Note: Iranian date format 'C' is
					 * NOT yet supported by UI5. It's accepted by this method for convenience(user settings from ABAP
					 * system can be used without filtering), but it's ignored. Instead, the formatsfrom the current format
					 * locale will be used and a warning will be logged.
					 * @param sFormatId id of the ABAP data format (one of '1','2','3','4','5','6','7','8','9','A','B','C')
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setLegacyDateFormat(
						sFormatId: string
					): sap.ui.core.Configuration.FormatSettings;

					/**
					 * Allows to specify one of the legacy ABAP number format.This method will modify the 'group' and
					 * 'decimal' symbols. When called with a nullor undefined format id, any previously applied format will
					 * be removed.After changing the legacy number format, the framework tries to update
					 * localizationspecific parts of the UI. See the documentation of {@link
					 * sap.ui.core.Configuration#setLanguage}for details and restrictions.
					 * @param sFormatId id of the ABAP number format set (one of ' ','X','Y')
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setLegacyNumberFormat(
						sFormatId: string
					): sap.ui.core.Configuration.FormatSettings;

					/**
					 * Allows to specify one of the legacy ABAP time formats.This method sets the time patterns for 'short'
					 * and 'medium' style to the corresponding ABAPformats and sets the day period texts to "AM"/"PM" or
					 * "am"/"pm" respectively. When calledwith a null or undefined format id, any previously applied format
					 * will be removed.After changing the legacy time format, the framework tries to update
					 * localizationspecific parts of the UI. See the documentation of {@link
					 * sap.ui.core.Configuration#setLanguage}for details and restrictions.
					 * @param sFormatId id of the ABAP time format (one of '0','1','2','3','4')
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setLegacyTimeFormat(
						sFormatId: string
					): sap.ui.core.Configuration.FormatSettings;

					/**
					 * Defines the string to be used for the given number symbol.Calling this method with a null or
					 * undefined symbol removes a previously set symbol string.Note that an empty string is explicitly
					 * allowed.If a symbol is defined, it will be preferred over symbols derived from the current
					 * locale.See class {@link sap.ui.core.format.NumberFormat} for details about the symbols.After
					 * changing the number symbol, the framework tries to update localizationspecific parts of the UI. See
					 * the documentation of {@link sap.ui.core.Configuration#setLanguage}for details and restrictions.
					 * @param sStyle must be one of decimal, group, plusSign, minusSign.
					 * @param sSymbol will be used to represent the given symbol type
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setNumberSymbol(
						sStyle: string,
						sSymbol: string
					): sap.ui.core.Configuration.FormatSettings;

					/**
					 * Defines the preferred format pattern for the given time format style.Calling this method with a null
					 * or undefined pattern removes a previously set pattern.If a pattern is defined, it will be preferred
					 * over patterns derived from the current locale.See class {@link sap.ui.core.format.DateFormat} for
					 * details about the pattern syntax.After changing the time pattern, the framework tries to update
					 * localizationspecific parts of the UI. See the documentation of {@link
					 * sap.ui.core.Configuration#setLanguage}for details and restrictions.
					 * @param sStyle must be one of short, medium, long or full.
					 * @param sPattern the format pattern to be used in LDML syntax.
					 * @returns Returns <code>this</code> to allow method chaining
					 */
					setTimePattern(
						sStyle: string,
						sPattern: string
					): sap.ui.core.Configuration.FormatSettings;
				}
			}
			namespace AppCacheBuster {
				/**
				 * Converts the given URL if it matches a URL in the cachebuster index.If not then the same URL will be
				 * returned. To prevent URLs from beingmodified by the application cachebuster you can implement the
				 * function<code>sap.ui.core.AppCacheBuster.handleURL</code>.
				 * @param sUrl any URL
				 * @returns modified URL when matching the index or unmodified when not
				 */
				function convertURL(sUrl: string): string;

				/**
				 * Callback function which can be overwritten to programmatically decidewhether to rewrite the given
				 * URL or not.
				 * @param sUrl any URL
				 * @returns <code>true</code> to rewrite or <code>false</code> to ignore
				 */
				function handleURL(sUrl: string): boolean;

				/**
				 * Normalizes the given URL and make it absolute.
				 * @param sUrl any URL
				 * @returns normalized URL
				 */
				function normalizeURL(sUrl: string): string;

				/**
				 * Registers an application. Loads the cachebuster index file from thislocations. All registered files
				 * will be considered by the cachebusterand the URLs will be prefixed with the timestamp of the index
				 * file.
				 * @param base URL of an application providing a cachebuster index file
				 */
				function register(base: string): void;
			}
			namespace LabelEnablement {
				/**
				 * This function should be called on a label control to enrich it's functionality.<b>Usage:</b>The
				 * function can be called with a control
				 * prototype:<code>sap.ui.core.LabelEnablement.enrich(my.Label.prototype);</code>Or the function can be
				 * called on instance level in the init function of a label control:<code>my.Label.prototype.init:
				 * function(){   sap.ui.core.LabelEnablement.enrich(this);}</code><b>Preconditions:</b>The given
				 * control must implement the interface sap.ui.core.Label and have an association 'labelFor' with
				 * cardinality 0..1.This function extends existing API functions. Ensure not to override this
				 * extensions AFTER calling this function.<b>What does this function do?</b>A mechanismn is added that
				 * ensures that a bidirectional reference between the label and it's labeled control is established:The
				 * label references the labeled control via the html 'for' attribute (@see
				 * sap.ui.core.LabelEnablement#writeLabelForAttribute).If the labeled control supports the
				 * aria-labelledby attribute. A reference to the label is added automatically.In addition an
				 * alternative to apply a for reference without influencing the labelFor association of the API is
				 * applied (e.g. used by Form).For this purpose the functions setAlternativeLabelFor and
				 * getLabelForRendering are added.
				 * @param oControl the label control which should be enriched with further label functionality.
				 */
				function enrich(oControl: sap.ui.core.Control): void;

				/**
				 * Returns an array of ids of the labels referencing the given element
				 * @param oElement The element whose referencing labels should be returned
				 * @returns an array of ids of the labels referencing the given element
				 */
				function getReferencingLabels(oElement: sap.ui.core.Element): string[];

				/**
				 * Returns <code>true</code> when the given control is required (property 'required') or one of its
				 * referencing labels, <code>false</code> otherwise.
				 * @since 1.29.0
				 * @param oElement The element which should be checked for its required state
				 * @returns <code>true</code> when the given control is required (property 'required') or one of its
				 * referencing labels, <code>false</code> otherwise
				 */
				function isRequired(oElement: sap.ui.core.Element): boolean;

				/**
				 * Helper function for the label control to render the html 'for' attribute. This function should be
				 * calledat the desired location in the renderer code of the label control.
				 * @param oRenderManager The RenderManager that can be used for writing to the render-output-buffer.
				 * @param oLabel The label for which the 'for' html attribute should be written to the
				 * render-output-buffer.
				 */
				function writeLabelForAttribute(
					oRenderManager: sap.ui.core.RenderManager,
					oLabel: any
				): void;
			}
			namespace ValueStateSupport {
				/**
				 * Appends a generic success, warning or error message to the given tooltip text if the given
				 * Elementhas a property "valueState" with one of these three states.
				 * @param oElement the Element of which the tooltip needs to be modified
				 * @param sTooltipText the original tooltip text (may be null)
				 * @returns the given text, with appended success/warning/error text, if appropriate
				 */
				function enrichTooltip(
					oElement: sap.ui.core.Element,
					sTooltipText: string
				): string;

				/**
				 * Returns a ValueState object based on the given integer value 0 : ValueState.None 1 :
				 * ValueState.Warning 2 : ValueState.Success 3 : ValueState.Error
				 * @since 1.25.0
				 * @param iState the state as an integer
				 * @returns the corresponding ValueState object
				 */
				function formatValueState(iState: number): sap.ui.core.ValueState;

				/**
				 * Returns a generic success, warning or error message if the given Elementhas a property "valueState"
				 * with one of these three states or the given ValueStaterepresents one of these states.
				 * @param vValue the Element of which the valueState needs to be checked, or the ValueState explicitly
				 * @returns the success/warning/error text, if appropriate; otherwise null
				 */
				function getAdditionalText(
					vValue: sap.ui.core.Element | sap.ui.core.ValueState
				): string;
			}

			namespace Item {
				interface Properties extends sap.ui.core.ControlProperties {
					enabled?: boolean;
					key?: string;
					text?: string;
					textDirection?: sap.ui.core.TextDirection;
				}

				type Settings = Properties;
			}
			/**
			 * A control base type.
			 * @resource sap/ui/core/Item.js
			 */
			class Item<T extends Item.Properties = Item.Properties> extends sap.ui
				.core.Element<T> {
				/**
				 * Constructor for a new Item.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId?: string, mSettings?: Item.Settings);
				constructor(mSettings?: Item.Settings);

				/**
				 * Gets current value of property <code>enabled</code>.Enabled items can be selected.Default value is
				 * <code>true</code>.
				 * @returns Value of property <code>enabled</code>
				 */
				getEnabled(): boolean;

				/**
				 * Gets current value of property <code>key</code>.Can be used as input for subsequent actions.
				 * @returns Value of property <code>key</code>
				 */
				getKey(): string;

				/**
				 * Returns a metadata object for class sap.ui.core.Item.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>text</code>.The text to be displayed for the item.Default value
				 * is <code></code>.
				 * @returns Value of property <code>text</code>
				 */
				getText(): string;

				/**
				 * Gets current value of property <code>textDirection</code>.Options are RTL and LTR. Alternatively, an
				 * item can inherit its text direction from its parent control.Default value is <code>Inherit</code>.
				 * @returns Value of property <code>textDirection</code>
				 */
				getTextDirection(): sap.ui.core.TextDirection;

				/**
				 * Sets a new value for property <code>enabled</code>.Enabled items can be selected.When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>true</code>.
				 * @param bEnabled New value for property <code>enabled</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setEnabled(bEnabled: boolean): sap.ui.core.Item;

				/**
				 * Sets a new value for property <code>key</code>.Can be used as input for subsequent actions.When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param sKey New value for property <code>key</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setKey(sKey: string): sap.ui.core.Item;

				/**
				 * Sets a new value for property <code>text</code>.The text to be displayed for the item.When called
				 * with a value of <code>null</code> or <code>undefined</code>, the default value of the property will
				 * be restored.Default value is <code></code>.
				 * @param sText New value for property <code>text</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setText(sText: string): sap.ui.core.Item;

				/**
				 * Sets a new value for property <code>textDirection</code>.Options are RTL and LTR. Alternatively, an
				 * item can inherit its text direction from its parent control.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>Inherit</code>.
				 * @param sTextDirection New value for property <code>textDirection</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setTextDirection(
					sTextDirection: sap.ui.core.TextDirection
				): sap.ui.core.Item;
			}

			interface IconProperties extends ControlProperties {
				activeBackgroundColor?: string;
				activeColor?: string;

				/**
				 * This defines the alternative text which is used for outputting the aria-label attribute on the DOM.
				 */
				alt?: string;

				backgroundColor?: string;
				color?: string;
				decorative?: boolean;
				height?: string;
				hoverBackgroundColor?: string;
				hoverColor?: string;
				noTabStop?: boolean;
				size?: string;
				src?: string;
			}

			/**
			 * Icon uses embedded font instead of pixel image. Comparing to image, Icon is easily scalable, color
			 * can be altered live and various effects can be added using css.A set of built in Icons is available
			 * and they can be fetched by calling sap.ui.core.IconPool.getIconURI and set this value to the src
			 * property on the Icon.
			 * @resource sap/ui/core/Icon.js
			 */
			class Icon extends sap.ui.core.Control<IconProperties> {
				/**
				 * Constructor for a new Icon.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: IconProperties);
				constructor(mSettings?: IconProperties);

				/**
				 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
				 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addAriaLabelledBy(
					vAriaLabelledBy: any | sap.ui.core.Control
				): sap.ui.core.Icon;

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this
				 * <code>sap.ui.core.Icon</code>.When called, the context of the event handler (its <code>this</code>)
				 * will be bound to <code>oListener</code> if specified, otherwise it will be bound to this
				 * <code>sap.ui.core.Icon</code> itself.This event is fired when icon is pressed/activated by the user.
				 * When a handler is attached to this event, the Icon gets tab stop. If you want to disable this
				 * behavior, set the noTabStop property to true.
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.core.Icon</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachPress(
					oData: any,
					fnFunction: sap.ui.base.EventHandler<Icon>,
					oListener?: any
				): sap.ui.core.Icon;
				attachPress(
					fnFunction: sap.ui.base.EventHandler<Icon>
				): sap.ui.core.Icon;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this
				 * <code>sap.ui.core.Icon</code>.The passed function and listener object must match the ones used for
				 * event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachPress(fnFunction: any, oListener: any): sap.ui.core.Icon;

				/**
				 * Fires event <code>press</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				firePress(mArguments: any): sap.ui.core.Icon;

				/**
				 */
				getAccessibilityInfo(): void;

				/**
				 * Gets current value of property <code>activeBackgroundColor</code>.Background color for Icon in
				 * active state.
				 * @returns Value of property <code>activeBackgroundColor</code>
				 */
				getActiveBackgroundColor(): string;

				/**
				 * Gets current value of property <code>activeColor</code>.This color is shown when icon is
				 * pressed/activated by the user.
				 * @returns Value of property <code>activeColor</code>
				 */
				getActiveColor(): string;

				/**
				 * Gets current value of property <code>alt</code>.This defines the alternative text which is used for
				 * outputting the aria-label attribute on the DOM.
				 * @since 1.30.0
				 * @returns Value of property <code>alt</code>
				 */
				getAlt(): string;

				/**
				 * Returns array of IDs of the elements which are the current targets of the association
				 * <code>ariaLabelledBy</code>.
				 */
				getAriaLabelledBy(): any[];

				/**
				 * Gets current value of property <code>backgroundColor</code>.Background color of the Icon in normal
				 * state.
				 * @returns Value of property <code>backgroundColor</code>
				 */
				getBackgroundColor(): string;

				/**
				 * Gets current value of property <code>color</code>.The color of the Icon. If color is not defined
				 * here, the Icon inherits the color from its DOM parent.
				 * @returns Value of property <code>color</code>
				 */
				getColor(): string;

				/**
				 * Gets current value of property <code>decorative</code>.A decorative icon is included for design
				 * reasons. Accessibility tools will ignore decorative icons. Tab stop isn't affected by this property
				 * anymore and it's now controlled by the existence of press event handler and the noTabStop
				 * property.Default value is <code>true</code>.
				 * @since 1.16.4
				 * @returns Value of property <code>decorative</code>
				 */
				getDecorative(): boolean;

				/**
				 * Gets current value of property <code>height</code>.This is the height of the DOM element which
				 * contains the Icon. Setting this property doesn't affect the size of the font. If you want to make
				 * the font bigger, increase the size property.
				 * @returns Value of property <code>height</code>
				 */
				getHeight(): any;

				/**
				 * Gets current value of property <code>hoverBackgroundColor</code>.Background color for Icon in hover
				 * state. This property has no visual effect when run on mobile device.
				 * @returns Value of property <code>hoverBackgroundColor</code>
				 */
				getHoverBackgroundColor(): string;

				/**
				 * Gets current value of property <code>hoverColor</code>.This color is shown when icon is hovered.
				 * This property has no visual effect when run on mobile device.
				 * @returns Value of property <code>hoverColor</code>
				 */
				getHoverColor(): string;

				/**
				 * Returns a metadata object for class sap.ui.core.Icon.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>noTabStop</code>.Defines whether the tab stop of icon is
				 * controlled by the existence of press event handler. When it's set to false, Icon control has tab
				 * stop when press event handler is attached.If it's set to true, Icon control never has tab stop no
				 * matter whether press event handler exists or not.Default value is <code>false</code>.
				 * @since 1.30.1
				 * @returns Value of property <code>noTabStop</code>
				 */
				getNoTabStop(): boolean;

				/**
				 * Gets current value of property <code>size</code>.Since Icon uses font, this property will be applied
				 * to the css font-size property on the rendered DOM element.
				 * @returns Value of property <code>size</code>
				 */
				getSize(): any;

				/**
				 * Gets current value of property <code>src</code>.This property should be set by the return value of
				 * calling sap.ui.core.IconPool.getIconURI with a Icon name parameter and an optional collection
				 * parameter which is required when using application extended Icons. A list of standard FontIcon is
				 * available here.
				 * @returns Value of property <code>src</code>
				 */
				getSrc(): any;

				/**
				 * Gets current value of property <code>useIconTooltip</code>.Decides whether a default Icon tooltip
				 * should be used if no tooltip is set.Default value is <code>true</code>.
				 * @since 1.30.0
				 * @returns Value of property <code>useIconTooltip</code>
				 */
				getUseIconTooltip(): boolean;

				/**
				 * Gets current value of property <code>width</code>.This is the width of the DOM element which
				 * contains the Icon. Setting this property doesn't affect the size of the font. If you want to make
				 * the font bigger, increase the size property.
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): any;

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
				removeAriaLabelledBy(
					vAriaLabelledBy: number | any | sap.ui.core.Control
				): any;

				/**
				 * Sets a new value for property <code>activeBackgroundColor</code>.Background color for Icon in active
				 * state.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param sActiveBackgroundColor New value for property <code>activeBackgroundColor</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setActiveBackgroundColor(
					sActiveBackgroundColor: string
				): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>activeColor</code>.This color is shown when icon is
				 * pressed/activated by the user.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sActiveColor New value for property <code>activeColor</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setActiveColor(sActiveColor: string): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>alt</code>.This defines the alternative text which is used for
				 * outputting the aria-label attribute on the DOM.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @since 1.30.0
				 * @param sAlt New value for property <code>alt</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setAlt(sAlt: string): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>backgroundColor</code>.Background color of the Icon in normal
				 * state.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.
				 * @param sBackgroundColor New value for property <code>backgroundColor</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setBackgroundColor(sBackgroundColor: string): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>color</code>.The color of the Icon. If color is not defined
				 * here, the Icon inherits the color from its DOM parent.When called with a value of <code>null</code>
				 * or <code>undefined</code>, the default value of the property will be restored.
				 * @param sColor New value for property <code>color</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setColor(sColor: string): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>decorative</code>.A decorative icon is included for design
				 * reasons. Accessibility tools will ignore decorative icons. Tab stop isn't affected by this property
				 * anymore and it's now controlled by the existence of press event handler and the noTabStop
				 * property.When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.Default value is <code>true</code>.
				 * @since 1.16.4
				 * @param bDecorative New value for property <code>decorative</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setDecorative(bDecorative: boolean): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>height</code>.This is the height of the DOM element which
				 * contains the Icon. Setting this property doesn't affect the size of the font. If you want to make
				 * the font bigger, increase the size property.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sHeight New value for property <code>height</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHeight(sHeight: any): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>hoverBackgroundColor</code>.Background color for Icon in hover
				 * state. This property has no visual effect when run on mobile device.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param sHoverBackgroundColor New value for property <code>hoverBackgroundColor</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHoverBackgroundColor(
					sHoverBackgroundColor: string
				): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>hoverColor</code>.This color is shown when icon is hovered. This
				 * property has no visual effect when run on mobile device.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param sHoverColor New value for property <code>hoverColor</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHoverColor(sHoverColor: string): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>noTabStop</code>.Defines whether the tab stop of icon is
				 * controlled by the existence of press event handler. When it's set to false, Icon control has tab
				 * stop when press event handler is attached.If it's set to true, Icon control never has tab stop no
				 * matter whether press event handler exists or not.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>false</code>.
				 * @since 1.30.1
				 * @param bNoTabStop New value for property <code>noTabStop</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setNoTabStop(bNoTabStop: boolean): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>size</code>.Since Icon uses font, this property will be applied
				 * to the css font-size property on the rendered DOM element.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param sSize New value for property <code>size</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSize(sSize: any): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>src</code>.This property should be set by the return value of
				 * calling sap.ui.core.IconPool.getIconURI with a Icon name parameter and an optional collection
				 * parameter which is required when using application extended Icons. A list of standard FontIcon is
				 * available here.When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.
				 * @param sSrc New value for property <code>src</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSrc(sSrc: any): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>useIconTooltip</code>.Decides whether a default Icon tooltip
				 * should be used if no tooltip is set.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>true</code>.
				 * @since 1.30.0
				 * @param bUseIconTooltip New value for property <code>useIconTooltip</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setUseIconTooltip(bUseIconTooltip: boolean): sap.ui.core.Icon;

				/**
				 * Sets a new value for property <code>width</code>.This is the width of the DOM element which contains
				 * the Icon. Setting this property doesn't affect the size of the font. If you want to make the font
				 * bigger, increase the size property.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sWidth New value for property <code>width</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWidth(sWidth: any): sap.ui.core.Icon;
			}

			namespace HTML {
				interface Properties extends ControlProperties {
					content?: string;
					preferDOM?: boolean;
					sanitizeContent?: boolean;
				}

				namespace Events {
					namespace AfterRendering {
						type Parameters = base.EventParameters & { isPreservedDom: boolean };
						type Handler = (oEvent: base.Event<HTML, Parameters>) => void;
					}
				}

				interface Events {
					afterRendering: Events.AfterRendering.Handler;
				}

				type Settings = Properties | ElementAggregations | Events;
			}
			/**
			 * Embeds standard HTML in a SAPUI5 control tree.Security Hint: By default, the HTML content (property
			 * 'content') is not sanitized and thereforeopen to XSS attacks. Applications that want to show user
			 * defined input in an HTML control, shouldeither sanitize the content on their own or activate
			 * automatic sanitizing through the{@link #setSanitizeContent sanitizeContent} property.Although this
			 * control inherits the <code>tooltip</code> aggregation/property and the<code>hasStyleClass</code>,
			 * <code>addStyleClass</code>, <code>removeStyleClass</code> and<code>toggleStyleClass</code> methods
			 * from its base class, it doesn't support them.Instead, the defined HTML content can contain a tooltip
			 * (title attribute) or custom CSS classes.For further hints about usage restrictions for this control,
			 * see also the documentation of the<code>content</code> property.
			 * @resource sap/ui/core/HTML.js
			 */
			class HTML extends sap.ui.core.Control<HTML.Properties> {
				/**
				 * Constructor for a new HTML.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings: HTML.Settings);
				constructor(sId: string);
				constructor(mSettings: HTML.Settings);
				constructor();

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>afterRendering</code> event of this
				 * <code>sap.ui.core.HTML</code>.When called, the context of the event handler (its <code>this</code>)
				 * will be bound to <code>oListener</code> if specified, otherwise it will be bound to this
				 * <code>sap.ui.core.HTML</code> itself.Fired after the HTML control has been rendered. Allows to
				 * manipulate the resulting DOM.When the control doesn't have string content and no preserved DOM
				 * existed for this control,then this event will fire, but there won't be a DOM node for this control.
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.core.HTML</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachAfterRendering(
					oData: any,
					fnFunction: HTML.Events.AfterRendering.Handler,
					oListener: any
				): sap.ui.core.HTML;
				attachAfterRendering(
					oData: any,
					fnFunction: HTML.Events.AfterRendering.Handler
				): sap.ui.core.HTML;
				attachAfterRendering(
					fnFunction: HTML.Events.AfterRendering.Handler
				): sap.ui.core.HTML;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>afterRendering</code> event of this
				 * <code>sap.ui.core.HTML</code>.The passed function and listener object must match the ones used for
				 * event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachAfterRendering(fnFunction: HTML.Events.AfterRendering.Handler, oListener: any): sap.ui.core.HTML;

				/**
				 * Fires event <code>afterRendering</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>isPreservedDOM</code> of type <code>boolean</code>Whether the current DOM
				 * of the control has been preserved (true) or not (e.g.rendered from content property or it is an
				 * empty HTML control).</li></ul>
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireAfterRendering(mArguments: HTML.Events.AfterRendering.Parameters): sap.ui.core.HTML;
				fireAfterRendering(): sap.ui.core.HTML;

				/**
				 * Gets current value of property <code>content</code>.HTML content to be displayed, defined as a
				 * string.The content is converted to DOM nodes with a call to <code>new jQuery(content)</code>, so
				 * anyrestrictions for the jQuery constructor apply to the content of the HTML control as well.Some of
				 * these restrictions (there might be others!) are:<ul><li>the content must be enclosed in tags, pure
				 * text is not supported. </li><li>if the content contains script tags, they will be executed but they
				 * will not appear in the    resulting DOM tree. When the contained code tries to find the
				 * corresponding script tag,    it will fail.</li></ul>Please consider to consult the jQuery
				 * documentation as well.The HTML control currently doesn't prevent the usage of multiple root nodes in
				 * its DOM content(e.g. <code>setContent("&lt;div/>&lt;div/>")</code>), but this is not a guaranteed
				 * feature.The accepted content might be restricted to single root nodes in future versions.To notify
				 * applications about this fact, a warning is written in the log when multiple root nodes are used.
				 * @returns Value of property <code>content</code>
				 */
				getContent(): string;

				/**
				 * @param sSuffix Suffix of the Element to be retrieved or empty
				 * @returns The element's DOM reference or null
				 */
				getDomRef(sSuffix: string): sap.ui.core.Element;

				/**
				 * Returns a metadata object for class sap.ui.core.HTML.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>preferDOM</code>.Whether existing DOM content is preferred over
				 * the given content string.There are two scenarios where this flag is relevant (when set to
				 * true):<ul><li>for the initial rendering: when an HTML control is added to an UIArea for the first
				 * time    and if the root node of that UIArea contained DOM content with the same id as the HTML
				 * control, then that content will be used for rendering instead of any specified string
				 * content</li><li>any follow-up rendering: when an HTML control is rendered for the second or any
				 * later    time and the preferDOM flag is set, then the DOM from the first rendering is preserved
				 * and not replaced by the string content</li></ul>As preserving the existing DOM is the most common
				 * use case of the HTML control, the default value is true.Default value is <code>true</code>.
				 * @returns Value of property <code>preferDOM</code>
				 */
				getPreferDOM(): boolean;

				/**
				 * Gets current value of property <code>sanitizeContent</code>.Whether to run the HTML sanitizer once
				 * the content (HTML markup) is applied or not.To configure allowed URLs please use the whitelist API
				 * via jQuery.sap.addUrlWhitelist.Default value is <code>false</code>.
				 * @returns Value of property <code>sanitizeContent</code>
				 */
				getSanitizeContent(): boolean;

				/**
				 * Gets current value of property <code>visible</code>.Specifies whether the control is visible.
				 * Invisible controls are not rendered.Default value is <code>true</code>.
				 * @returns Value of property <code>visible</code>
				 */
				getVisible(): boolean;

				/**
				 * Sets a new value for property <code>content</code>.HTML content to be displayed, defined as a
				 * string.The content is converted to DOM nodes with a call to <code>new jQuery(content)</code>, so
				 * anyrestrictions for the jQuery constructor apply to the content of the HTML control as well.Some of
				 * these restrictions (there might be others!) are:<ul><li>the content must be enclosed in tags, pure
				 * text is not supported. </li><li>if the content contains script tags, they will be executed but they
				 * will not appear in the    resulting DOM tree. When the contained code tries to find the
				 * corresponding script tag,    it will fail.</li></ul>Please consider to consult the jQuery
				 * documentation as well.The HTML control currently doesn't prevent the usage of multiple root nodes in
				 * its DOM content(e.g. <code>setContent("&lt;div/>&lt;div/>")</code>), but this is not a guaranteed
				 * feature.The accepted content might be restricted to single root nodes in future versions.To notify
				 * applications about this fact, a warning is written in the log when multiple root nodes are used.When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param sContent New value for property <code>content</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setContent(sContent: string): sap.ui.core.HTML;

				/**
				 * Sets some new DOM content for this HTML control. The content will replace the existing contentafter
				 * the next rendering. Properties are not modified, but preferDOM should be set to true.
				 * @param oDom the new DOM content
				 * @returns <code>this</code> to facilitate method chaining
				 */
				setDOMContent(oDom: sap.ui.core.Element): sap.ui.core.HTML;

				/**
				 * Sets a new value for property <code>preferDOM</code>.Whether existing DOM content is preferred over
				 * the given content string.There are two scenarios where this flag is relevant (when set to
				 * true):<ul><li>for the initial rendering: when an HTML control is added to an UIArea for the first
				 * time    and if the root node of that UIArea contained DOM content with the same id as the HTML
				 * control, then that content will be used for rendering instead of any specified string
				 * content</li><li>any follow-up rendering: when an HTML control is rendered for the second or any
				 * later    time and the preferDOM flag is set, then the DOM from the first rendering is preserved
				 * and not replaced by the string content</li></ul>As preserving the existing DOM is the most common
				 * use case of the HTML control, the default value is true.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>true</code>.
				 * @param bPreferDOM New value for property <code>preferDOM</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setPreferDOM(bPreferDOM: boolean): sap.ui.core.HTML;

				/**
				 * Sets a new value for property <code>sanitizeContent</code>.Whether to run the HTML sanitizer once
				 * the content (HTML markup) is applied or not.To configure allowed URLs please use the whitelist API
				 * via jQuery.sap.addUrlWhitelist.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>false</code>.
				 * @param bSanitizeContent New value for property <code>sanitizeContent</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSanitizeContent(bSanitizeContent: boolean): sap.ui.core.HTML;

				/**
				 * Sets a new value for property <code>visible</code>.Specifies whether the control is visible.
				 * Invisible controls are not rendered.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>true</code>.
				 * @param bVisible New value for property <code>visible</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisible(bVisible: boolean): sap.ui.core.HTML;
			}
			/**
			 * Core Class of the SAP UI Library.This class boots the Core framework and makes it available for the
			 * Applicationvia the method <code>sap.ui.getCore()</code>.Example:<br/><pre>   var oCore =
			 * sap.ui.getCore();</pre><br/>It provides events where the Application can attach
			 * to.<br/>Example:<br/><pre>oCore.attachInit(function () {  //do the needful, do it
			 * lean});</pre><br/>It registers the Browser Eventing.
			 * @resource sap/ui/core/Core.js
			 */
			class Core extends sap.ui.base.Object {
				constructor();

				/**
				 * Enforces an immediate update of the visible UI (aka "rendering").In general, applications should
				 * avoid calling this method andinstead let the framework manage any necessary rendering.
				 */
				applyChanges(): void;

				/**
				 * Applies the theme with the given name (by loading the respective style sheets, which does not
				 * disrupt the application).By default, the theme files are expected to be located at path relative to
				 * the respective control library ([libraryLocation]/themes/[themeName]).Different locations can be
				 * configured by using the method setThemePath() or by using the second parameter "sThemeBaseUrl" of
				 * applyTheme().Usage of this second parameter is a shorthand for setThemePath and internally calls
				 * setThemePath, so the theme location is then known.sThemeBaseUrl is a single URL to specify the
				 * default location of all theme files. This URL is the base folder below which the control library
				 * foldersare located. E.g. if the CSS files are not located relative to the root location of UI5, but
				 * instead they are at locations like
				 * http://my.server/myapp/resources/sap/ui/core/themes/my_theme/library.cssthen the URL that needs to
				 * be given is:   http://my.server/myapp/resourcesAll theme resources are then loaded from below this
				 * folder - except if for a certain library a different location has been registered.If the theme
				 * resources are not all either below this base location or  with their respective libraries, then
				 * setThemePath must beused to configure individual locations.
				 * @param sThemeName the name of the theme to be loaded
				 * @param sThemeBaseUrl the (optional) base location of the theme
				 */
				applyTheme(sThemeName: string, sThemeBaseUrl?: string): void;

				/**
				 * Registers a listener for control events.
				 * @param fnFunction callback to be called for each control event
				 * @param oListener optional context object to call the callback on.
				 */
				attachControlEvent(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'formatError' event of
				 * <code>sap.ui.core.Core</code>.<br/>Please note that this event is a bubbling event and may already
				 * be canceled before reaching the core.<br/>
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, this Model is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachFormatError(fnFunction: any, oListener?: any): sap.ui.core.Core;

				/**
				 * Attaches a given function to the <code>initEvent</code> event of the core.The given callback
				 * function will either be called once the Core has been initializedor, if it has been initialized
				 * already, it will be called immediately.
				 * @since 1.13.2
				 * @param fnFunction the callback function to be called on event firing.
				 */
				attachInit(fnFunction: any): void;

				/**
				 * Attaches a given function to the <code>initEvent</code> event of the core.This event will only be
				 * fired once; you can check if it has been fired alreadyby calling {@link #isInitialized}.
				 * @param fnFunction the function to be called on event firing.
				 */
				attachInitEvent(fnFunction: any): void;

				/**
				 * Registers a listener to the central interval timer.
				 * @since 1.16.0
				 * @param fnFunction callback to be called periodically
				 * @param oListener optional context object to call the callback on.
				 */
				attachIntervalTimer(fnFunction: any, oListener?: any): void;

				/**
				 * Register a listener for the <code>localizationChanged</code> event.
				 * @param fnFunction callback to be called
				 * @param oListener context object to cal lthe function on.
				 */
				attachLocalizationChanged(fnFunction: any, oListener: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'parseError' event of
				 * <code>sap.ui.core.Core</code>.<br/>Please note that this event is a bubbling event and may already
				 * be canceled before reaching the core.<br/>
				 * @param oData The object, that should be passed along with the event-object when firing the event
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, this Model is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachParseError(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.Core;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'validationError' event of
				 * <code>sap.ui.core.Core</code>.<br/>Please note that this event is a bubbling event and may already
				 * be canceled before reaching the core.<br/>
				 * @param oData The object, that should be passed along with the event-object when firing the event
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, this Model is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachValidationError(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.Core;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'validationSuccess' event of
				 * <code>sap.ui.core.Core</code>.<br/>Please note that this event is a bubbling event and may already
				 * be canceled before reaching the core.<br/>
				 * @param oData The object, that should be passed along with the event-object when firing the event
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, this Model is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachValidationSuccess(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.Core;

				/**
				 * Returns a list of all controls with a field group ID.See {@link
				 * sap.ui.core.Control#checkFieldGroupIds Control.prototype.checkFieldGroupIds} for a description of
				 * the<code>vFieldGroupIds</code> parameter.
				 * @param vFieldGroupIds ID of the field group or an array of field group IDs to match
				 * @returns The list of controls with matching field group IDs
				 */
				byFieldGroupId(
					vFieldGroupIds: string | string[]
				): sap.ui.core.Control[];

				/**
				 * Returns the registered element for the given id, if any.
				 * @param sId undefined
				 * @returns the element for the given id
				 */
				byId(sId: string): sap.ui.core.Element;

				/**
				 * Creates a component with the provided id and settings.When the optional parameter <code>sUrl</code>
				 * is given, then all request for resources of thelibrary will be redirected to the given Url. This is
				 * convenience for a call to<pre>  jQuery.sap.registerModulePath(sName, sUrl);</pre>
				 * @param vComponent name of the component to import or object containing all needed parameters
				 * @param sUrl the URL to load the component from
				 * @param sId the ID for the component instance
				 * @param mSettings the settings object for the component
				 */
				createComponent(
					vComponent: string | any,
					sUrl?: string,
					sId?: string,
					mSettings?: any
				): void;

				/**
				 * Returns a new instance of the RenderManager interface.
				 * @returns the new instance of the RenderManager interface.
				 */
				createRenderManager(): sap.ui.core.RenderManager;

				/**
				 * Creates a new sap.ui.core.UIArea.
				 * @param oDomRef a DOM Element or ID string of the UIArea
				 * @returns a new UIArea
				 */
				createUIArea(oDomRef: string | sap.ui.core.Element): sap.ui.core.UIArea;

				/**
				 * Unregisters a listener for control events.A listener will only be unregistered if the same
				 * function/context combinationis given as in the attachControlEvent call.
				 * @param fnFunction function to unregister
				 * @param oListener context object given during registration
				 */
				detachControlEvent(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'formatError' event of
				 * <code>sap.ui.core.Core</code>.<br/>The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The callback function to unregister
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachFormatError(fnFunction: any, oListener: any): sap.ui.core.Core;

				/**
				 * Unregisters a listener for the central interval timer.A listener will only be unregistered if the
				 * same function/context combinationis given as in the attachIntervalTimer call.
				 * @since 1.16.0
				 * @param fnFunction function to unregister
				 * @param oListener context object given during registration
				 */
				detachIntervalTimer(fnFunction: any, oListener?: any): void;

				/**
				 * Unregister a listener from the <code>localizationChanged</code> event.The listener will only be
				 * unregistered if the same function/context combinationis given as in the call to
				 * <code>attachLocalizationListener</code>.
				 * @param fnFunction callback to be deregistered
				 * @param oListener context object given in a previous call to attachLocalizationChanged.
				 */
				detachLocalizationChanged(fnFunction: any, oListener: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'parseError' event of
				 * <code>sap.ui.core.Core</code>.<br/>The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The callback function to unregister.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachParseError(fnFunction: any, oListener: any): sap.ui.core.Core;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'validationError' event of
				 * <code>sap.ui.core.Core</code>.<br/>The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The callback function to unregister
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachValidationError(
					fnFunction: any,
					oListener: any
				): sap.ui.core.Core;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'validationSuccess' event of
				 * <code>sap.ui.core.Core</code>.<br/>The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachValidationSuccess(
					fnFunction: any,
					oListener: any
				): sap.ui.core.Core;

				/**
				 * Fire event formatError to attached listeners.Expects following event parameters:<ul><li>'element' of
				 * type <code>sap.ui.core.Element</code> </li><li>'property' of type <code>string</code>
				 * </li><li>'type' of type <code>string</code> </li><li>'newValue' of type <code>object</code>
				 * </li><li>'oldValue' of type <code>object</code> </li><li>'exception' of type <code>object</code>
				 * </li></ul>
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireFormatError(mArguments: any): sap.ui.core.Core;

				/**
				 * Fire event parseError to attached listeners.Expects following event parameters:<ul><li>'element' of
				 * type <code>sap.ui.core.Element</code> </li><li>'property' of type <code>string</code>
				 * </li><li>'type' of type <code>string</code> </li><li>'newValue' of type <code>object</code>
				 * </li><li>'oldValue' of type <code>object</code> </li><li>'exception' of type <code>object</code>
				 * </li></ul>
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireParseError(mArguments: any): sap.ui.core.Core;

				/**
				 * Fire event validationError to attached listeners.Expects following event
				 * parameters:<ul><li>'element' of type <code>sap.ui.core.Element</code> </li><li>'property' of type
				 * <code>string</code> </li><li>'type' of type <code>string</code> </li><li>'newValue' of type
				 * <code>object</code> </li><li>'oldValue' of type <code>object</code> </li><li>'exception' of type
				 * <code>object</code> </li></ul>
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireValidationError(mArguments: any): sap.ui.core.Core;

				/**
				 * Fire event validationSuccess to attached listeners.Expects following event
				 * parameters:<ul><li>'element' of type <code>sap.ui.core.Element</code> </li><li>'property' of type
				 * <code>string</code> </li><li>'type' of type <code>string</code> </li><li>'newValue' of type
				 * <code>object</code> </li><li>'oldValue' of type <code>object</code> </li></ul>
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireValidationSuccess(mArguments: any): sap.ui.core.Core;

				/**
				 * Returns the instance of the application (if exists).
				 * @returns instance of the current application
				 */
				getApplication(): any;

				/**
				 * Returns the registered component for the given id, if any.
				 * @param sId undefined
				 * @returns the component for the given id
				 */
				getComponent(sId: string): sap.ui.core.Component;

				/**
				 * Returns the Configuration of the Core.
				 * @returns the Configuration of the current Core.
				 */
				getConfiguration(): sap.ui.core.Configuration;

				/**
				 * Returns the registered element for the given ID, if any.
				 * @param sId undefined
				 * @returns the element for the given id
				 */
				getControl(sId: string): sap.ui.core.Element;

				/**
				 * Returns the Id of the control/element currently in focus.
				 * @returns the Id of the control/element currently in focus.
				 */
				getCurrentFocusedControlId(): string;

				/**
				 * Returns the registered element for the given ID, if any.
				 * @param sId undefined
				 * @returns the element for the given id
				 */
				getElementById(sId: string): sap.ui.core.Element;

				/**
				 * Returns the event bus.
				 * @since 1.8.0
				 * @returns the event bus
				 */
				getEventBus(): sap.ui.core.EventBus;

				/**
				 * Retrieves a resource bundle for the given library and locale.If only one argument is given, it is
				 * assumed to be the libraryName. The localethen falls back to the current {@link
				 * sap.ui.core.Configuration.prototype.getLanguage session locale}.If no argument is given, the library
				 * also falls back to a default: "sap.ui.core".
				 * @param sLibraryName name of the library to retrieve the bundle for
				 * @param sLocale locale to retrieve the resource bundle for
				 * @returns the best matching resource bundle for the given parameters or undefined
				 */
				getLibraryResourceBundle(sLibraryName: string, sLocale?: string): any;

				/**
				 * Returns a map of library info objects for all currently loaded libraries,keyed by their names.The
				 * structure of the library info objects matches the structure of the info objectthat the {@link
				 * #initLibrary} method expects. Only property names documented with<code>initLibrary</code> should be
				 * accessed, any additional properties might change ordisappear in future. When a property does not
				 * exists, its default value (as documentedwith <code>initLibrary</code>) should be
				 * assumed.<b>Note:</b> The returned info objects must not be modified. They might be a livingcopy of
				 * the internal data (for efficiency reasons) and the framework is not preparedto handle modifications
				 * to these objects.
				 * @returns Map of library info objects keyed by the library names.
				 */
				getLoadedLibraries(): any;

				/**
				 * Returns the active <code>MessageManager</code> instance.
				 * @since 1.33.0
				 */
				getMessageManager(): sap.ui.core.message.MessageManager;

				/**
				 * Returns a metadata object for class sap.ui.core.Core.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Get the model with the given model name.The name can be omitted to reference the default model or it
				 * must be a non-empty string.Note: to be compatible with future versions of this API, applications
				 * must not use the value <code>null</code>,the empty string <code>""</code> or the string literals
				 * <code>"null"</code> or <code>"undefined"</code> as model name.
				 * @param sName name of the model to be retrieved
				 * @returns oModel
				 */
				getModel<T extends sap.ui.model.Model>(id?: string): T;

				/**
				 */
				getRenderManager(): void;

				/**
				 * Returns the instance of the root component (if exists).
				 * @returns instance of the current root component
				 */
				getRootComponent(): sap.ui.core.Component;

				/**
				 * Returns the static, hidden area DOM element belonging to this core instance.It can be used e.g. for
				 * hiding elements like Popups, Shadow, Blocklayer etc.If it is not yet available, a DIV is created and
				 * appended to the body.
				 * @returns the static, hidden area DOM element belonging to this core instance.
				 */
				getStaticAreaRef(): sap.ui.core.Element;

				/**
				 * Returns the registered template for the given id, if any.
				 * @param sId undefined
				 * @returns the template for the given id
				 */
				getTemplate(sId: string): sap.ui.core.Component;

				/**
				 * Returns a UIArea if the given ID/Element belongs to one.
				 * @param o a DOM Element or ID string of the UIArea
				 * @returns a UIArea with a given id or dom ref.
				 */
				getUIArea(o: string | sap.ui.core.Element): sap.ui.core.UIArea;

				/**
				 * Returns <code>true</code> if there are any pending rendering tasks or whensuch rendering tasks are
				 * currently being executed.
				 * @returns true if there are pending (or executing) rendering tasks.
				 */
				getUIDirty(): boolean;

				/**
				 * Check if a Model is set to the core
				 * @returns true or false
				 */
				hasModel(): boolean;

				/**
				 * Includes a library theme into the current page (if a variant is specified itwill include the variant
				 * library theme)
				 * @param sLibName the name of the UI library
				 * @param sVariant the variant to include (optional)
				 * @param sQuery to be used only by the Core
				 */
				includeLibraryTheme(
					sLibName: string,
					sVariant?: string,
					sQuery?: string
				): void;

				/**
				 * Provides the framework with information about a library.This method is intended to be called exactly
				 * once while the main module of a library(its <code>library.js</code> module) is executing, typically
				 * at its begin. The singleparameter <code>oLibInfo</code> is an info object that describes the content
				 * of the library.When the <code>oLibInfo</code> has been processed, a normalized version of it will be
				 * keptand will be returned as library information in later calls to {@link
				 * #getLoadedLibraries}.Finally, <code>initLibrary</code> fires (the currently private) {@link
				 * #event:LibraryChanged}event with operation 'add' for the newly loaded library.<h3>Side
				 * Effects</h3>While analyzing the <code>oLibInfo</code>, the framework takes some additional
				 * actions:<ul><li>If the info object contains a list of <code>interfaces</code>, they will be
				 * registeredwith the {@link sap.ui.base.DataType} class to make them available as aggregation typesin
				 * managed objects.</li><li>If the object contains a list of <code>controls</code> or
				 * <code>elements</code>,{@link sap.ui.lazyRequire lazy stubs} will be created for their constructor as
				 * well as fortheir static <code>extend</code> and <code>getMetadata</code> methods.<br><b>Note:</b>
				 * Future versions might abandon the concept of lazy stubs as it requires synchronousXMLHttpRequests
				 * which have been deprecated (see {@link http://xhr.spec.whatwg.org}). To be on thesafe side,
				 * productive applications should always require any modules that they directly depend on.</li><li>With
				 * the <code>noLibraryCSS</code> property, the library can be marked as 'theming-free'.Otherwise, the
				 * framework will add a &lt;link&gt; tag to the page's head, pointing to the library'stheme-specific
				 * stylesheet. The creation of such a &lt;link&gt; tag can be suppressed with the{@link
				 * sap.ui.core.Configuration global configuration option} <code>preloadLibCss</code>.It can contain a
				 * list of library names for which no stylesheet should be included.This is e.g. useful when an
				 * application merges the CSS for multiple libraries and alreadyloaded the resulting
				 * stylesheet.</li><li>If a list of library <code>dependencies</code> is specified in the info object,
				 * thoselibraries will be loaded synchronously by <code>initLibrary</code>.<br><b>Note:</b>
				 * Dependencies between libraries don't have to be modeled as AMD dependencies.Only when enums or types
				 * from an additional library are used in the coding of the<code>library.js</code> module, the library
				 * should be additionally listed in the AMD dependencies.</li></ul>Last but not least, higher layer
				 * frameworks might want to include their own metadata for libraries.The property
				 * <code>extensions</code> might contain such additional metadata. Its structure is not definedby the
				 * framework, but it is strongly suggested that each extension only occupies a single propertyin the
				 * <code>extensions</code> object and that the name of that property contains some namespaceinformation
				 * (e.g. library name that introduces the feature) to avoid conflicts with other extensions.The
				 * framework won't touch the content of <code>extensions</code> but will make it availablein the
				 * library info objects returned by {@link #getLoadedLibraries}.<h3>Relationship to Descriptor for
				 * Libraries (manifest.json)</h3>The information contained in <code>oLibInfo</code> is partially
				 * redundant to the content of the descriptorfor the same library (its <code>manifest.json</code>
				 * file). Future versions of UI5 might ignore the informationprovided in <code>oLibInfo</code> and
				 * might evaluate the descriptor file instead. Library developers thereforeshould keep the information
				 * in both files in sync.When the <code>manifest.json</code> is generated from the
				 * <code>.library</code> file (which is the defaultfor UI5 libraries built with Maven), then the
				 * content of the <code>.library</code> and <code>library.js</code>files must be kept in sync.
				 * @param oLibInfo Info object for the library
				 */
				initLibrary(oLibInfo: any): void;

				/**
				 * Returns true if the Core has already been initialized. This means that instancesof RenderManager
				 * etc. do already exist and the init event has already been fired(and will not be fired again).
				 * @returns whether the Core has already been initialized
				 */
				isInitialized(): boolean;

				/**
				 * Returns the locked state of the <code>sap.ui.core.Core</code>
				 * @returns locked state
				 */
				isLocked(): boolean;

				/**
				 * Check if the script is running on mobile
				 * @returns true or false
				 */
				isMobile(): boolean;

				/**
				 * Used to find out whether a certain DOM element is the static area
				 * @param oDomRef undefined
				 * @returns whether the given DomRef is the StaticAreaRef
				 */
				isStaticAreaRef(oDomRef: any): boolean;

				/**
				 * Returns true, if the styles of the current theme are already applied, false otherwise.This function
				 * must not be used before the init event of the Core.If the styles are not yet applied an theme
				 * changed event will follow when the styles will be applied.
				 * @returns whether the styles of the current theme are already applied
				 */
				isThemeApplied(): boolean;

				/**
				 * Loads a set of libraries, preferably asynchronously.The module loading is still synchronous, so if a
				 * library loads additional modules besidesits library.js file, those modules might be loaded
				 * synchronously by the library.jsThe async loading is only supported by the means of the
				 * library-preload.json files, so if alibrary doesn't provide a preload or when the preload is
				 * deactivated (configuration, debug mode)then this API falls back to synchronous loading. However, the
				 * contract (Promise) remains validand a Promise will be returned if async is specified - even when the
				 * real loadingis done synchronously.
				 * @param aLibraries set of libraries that should be loaded
				 * @param mOptions configuration options
				 * @returns returns a Promise in async mode, otherwise <code>undefined</code>
				 */
				loadLibraries(
					aLibraries: string[],
					mOptions?: any
				): JQueryPromise<any> | any;

				/**
				 * Synchronously loads the given library and makes it available to the application.Loads the *.library
				 * module, which contains all preload modules (enums, types, content of a shared.jsif it exists). The
				 * library module will call initLibrary with additional metadata for the library.As a result, consuming
				 * applications can instantiate any control or element from that librarywithout having to write import
				 * statements for the controls or for the enums.When the optional parameter <code>sUrl</code> is given,
				 * then all request for resources of thelibrary will be redirected to the given Url. This is
				 * convenience for a call to<pre>  jQuery.sap.registerModulePath(sLibrary, sUrl);</pre>When the given
				 * library has been loaded already, no further action will be taken.Especially, a given Url will not be
				 * honored!Note: this method does not participate in the supported preload of libraries.
				 * @param sLibrary name of the library to import
				 * @param sUrl URL to load the library from
				 */
				loadLibrary(sLibrary: string, sUrl?: string): void;

				/**
				 * Locks the Core. No browser events are dispatched to the controls.Lock should be called before and
				 * after the dom is modified for rendering, roundtrips...Exceptions might be the case for asynchronous
				 * UI behavior
				 */
				lock(): void;

				/**
				 * Registers a Plugin to the <code>sap.ui.core.Core</code>, which lifecyclewill be managed (start and
				 * stop).<br/>Plugin object need to implement two methods:<ul>  <li><code>startPlugin(oCore)</code>:
				 * will be invoked, when the Plugin      should start (as parameter the reference to the Core will be
				 * provided</li>  <li><code>stopPlugin()</code>: will be invoked, when the Plugin should stop</li></ul>
				 * @param oPlugin reference to a Plugin object
				 */
				registerPlugin(oPlugin: any): void;

				/**
				 * Sets or unsets a model for the given model name.The <code>sName</code> must either be
				 * <code>undefined</code> (or omitted) or a non-empty string.When the name is omitted, the default
				 * model is set/unset.When <code>oModel</code> is <code>null</code> or <code>undefined</code>, a
				 * previously set modelwith that name is removed from the Core.Any change (new model, removed model) is
				 * propagated to all existing UIAreas and their descendantsas long as a descendant doesn't have its own
				 * model set for the given name.Note: to be compatible with future versions of this API, applications
				 * must not use the value <code>null</code>,the empty string <code>""</code> or the string literals
				 * <code>"null"</code> or <code>"undefined"</code> as model name.
				 * @param oModel the model to be set or <code>null</code> or <code>undefined</code>
				 * @param sName the name of the model or <code>undefined</code>
				 * @returns <code>this</code> to allow method chaining
				 */
				setModel<T extends sap.ui.model.Model>(model: T, id?: string): T;

				/**
				 * Implicitly creates a new <code>UIArea</code> (or reuses an exiting one) for the given DOM reference
				 * andadds the given control reference to the UIAreas content (existing content will be removed).
				 * @param oDomRef a DOM Element or Id (string) of the UIArea
				 * @param oControl the Control that should be the added to the <code>UIArea</code>.
				 */
				setRoot(
					oDomRef: string | sap.ui.core.Element,
					oControl: sap.ui.base.Interface | sap.ui.core.Control
				): void;

				/**
				 * Defines the root directory from below which UI5 should load the theme with the given name.Optionally
				 * allows restricting the setting to parts of a theme covering specific control
				 * libraries.Example:<code>  core.setThemeRoot("my_theme", "http://mythemeserver.com/allThemes");
				 * core.applyTheme("my_theme");</code>will cause the following file to be
				 * loaded:<code>http://mythemeserver.com/allThemes/sap/ui/core/themes/my_theme/library.css</code>(and
				 * the respective files for all used control libraries, like
				 * <code>http://mythemeserver.com/allThemes/sap/ui/commons/themes/my_theme/library.css</code>if the
				 * sap.ui.commons library is used)If parts of the theme are at different locations (e.g. because you
				 * provide a standard theme like "sap_goldreflection" for a custom control library andthis self-made
				 * part of the standard theme is at a different location than the UI5 resources), you can also specify
				 * for which control libraries the settingshould be used, by giving an array with the names of the
				 * respective control libraries as second parameter:<code>core.setThemeRoot("sap_goldreflection",
				 * ["my.own.library"], "http://mythemeserver.com/allThemes");</code>This will cause the Gold Reflection
				 * theme to be loaded normally from the UI5 location, but the part for styling the "my.own.library"
				 * controls will be loaded
				 * ode>http://mythemeserver.com/allThemes/my/own/library/themes/sap_goldreflection/library.css</code>If
				 * the custom theme should be loaded initially (via bootstrap attribute), the "themeRoots" property of
				 * the window["sap-ui-config"] object must be used insteadof Core.setThemeRoot(...) in order to
				 * configure the theme location early enough.
				 * @since 1.10
				 * @param sThemeName the name of the theme for which to configure the location
				 * @param aLibraryNames the optional library names to which the configuration should be restricted
				 * @param sThemeBaseUrl the base URL below which the CSS file(s) will be loaded from
				 * @returns the Core, to allow method chaining
				 */
				setThemeRoot(
					sThemeName: string,
					aLibraryNames: string[],
					sThemeBaseUrl: string
				): sap.ui.core.Core;

				/**
				 * Unlocks the Core.Browser events are dispatched to the controls again after this method is called.
				 */
				unlock(): void;

				/**
				 * Unregisters a Plugin out of the <code>sap.ui.core.Core</code>
				 * @param oPlugin reference to a Plugin object
				 */
				unregisterPlugin(oPlugin: any): void;
			}
			/**
			 * Represents a title element that can be used for aggregation with other controls
			 * @resource sap/ui/core/Title.js
			 */
			class Title extends sap.ui.core.Element {
				/**
				 * Constructor for a new Title.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Gets current value of property <code>emphasized</code>.If set the title is displayed emphasized.This
				 * feature is nor supported by all controls using the Title.control.Default value is
				 * <code>false</code>.
				 * @returns Value of property <code>emphasized</code>
				 */
				getEmphasized(): boolean;

				/**
				 * Gets current value of property <code>icon</code>.Defines the URL for icon display
				 * @returns Value of property <code>icon</code>
				 */
				getIcon(): any;

				/**
				 * Gets current value of property <code>level</code>.Defines the level of the title. If set to auto the
				 * level of the title is chosen by the control rendering the title.Currently not all controls using the
				 * Title.control supporting this property.Default value is <code>Auto</code>.
				 * @returns Value of property <code>level</code>
				 */
				getLevel(): sap.ui.core.TitleLevel;

				/**
				 * Returns a metadata object for class sap.ui.core.Title.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>text</code>.Defines the title text
				 * @returns Value of property <code>text</code>
				 */
				getText(): string;

				/**
				 * Sets a new value for property <code>emphasized</code>.If set the title is displayed emphasized.This
				 * feature is nor supported by all controls using the Title.control.When called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>false</code>.
				 * @param bEmphasized New value for property <code>emphasized</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setEmphasized(bEmphasized: boolean): sap.ui.core.Title;

				/**
				 * Sets a new value for property <code>icon</code>.Defines the URL for icon displayWhen called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param sIcon New value for property <code>icon</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIcon(sIcon: any): sap.ui.core.Title;

				/**
				 * Sets a new value for property <code>level</code>.Defines the level of the title. If set to auto the
				 * level of the title is chosen by the control rendering the title.Currently not all controls using the
				 * Title.control supporting this property.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>Auto</code>.
				 * @param sLevel New value for property <code>level</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLevel(sLevel: sap.ui.core.TitleLevel): sap.ui.core.Title;

				/**
				 * Sets a new value for property <code>text</code>.Defines the title textWhen called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param sText New value for property <code>text</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setText(sText: string): sap.ui.core.Title;
			}
			/**
			 * Popup Class is a helper class for controls that want themselves orparts of themselves or even other
			 * aggregated or composed controlsor plain HTML content to popup on the screen like menues, dialogs,
			 * drop down boxes.It allows the controls to be aligned to other dom elementsusing the {@link
			 * sap.ui.core.Popup.Dock} method. With it you can define wherethe popup should be docked. One can dock
			 * the popup to the top bottom left or right sideof a dom ref.In the case that the popup has no space
			 * to show itself in the view portof the current window it tries to open itself tothe inverted
			 * direction.<strong>Since 1.12.3</strong> it is possible to add further DOM-element-ids that can get
			 * the focuswhen 'autoclose' is enabled. E.g. the RichTextEditor with running TinyMCE uses this method
			 * tobe able to focus the Popups of the TinyMCE if the RichTextEditor runs within a Popup/Dialog etc.
			 * To provide an additional DOM-element that can get the focus the following should be done:	// create
			 * an object with the corresponding DOM-id	var oObject = {		id :
			 * "this_is_the_most_valuable_id_of_the_DOM_element"	};	// add the event prefix for adding an element
			 * to the ID of the corresponding Popup	var sEventId = "sap.ui.core.Popup.addFocusableContent-" +
			 * oPopup.getId();	// fire the event with the created event-id and the object with the DOM-id
			 * sap.ui.getCore().getEventBus().publish("sap.ui", sEventId, oObject);
			 * @resource sap/ui/core/Popup.js
			 */
			class Popup extends sap.ui.base.ManagedObject {
				/**
				 * Creates an instance of <code>sap.ui.core.Popup</code> that can be used to open controls as a
				 * Popup,visually appearing in front of other controls.Accepts an object literal <code>mSettings</code>
				 * that defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param oContent the content to render in the popup. In case of sap.ui.core.Element or DOMNode, the
				 * content must be present in the page (i.e. rendered). In case of sap.ui.core.Control, the Popup
				 * ensures rendering before opening.
				 * @param bModal whether the popup should be opened in a modal way (i.e. with blocking background).
				 * Setting this to "true" effectively blocks all attempts to focus content outside the modal popup. A
				 * modal popup also automatically sets the focus back to whatever was focused when the popup opened.
				 * @param bShadow whether the popup should be have a visual shadow underneath (shadow appearance
				 * depends on active theme and browser support)
				 * @param bAutoClose whether the popup should automatically close when the focus moves out of the popup
				 */
				constructor(
					oContent: sap.ui.core.Control | sap.ui.core.Element | any,
					bModal?: boolean,
					bShadow?: boolean,
					bAutoClose?: boolean
				);

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>closed</code> event of this
				 * <code>sap.ui.core.Popup</code>.When called, the context of the event handler (its <code>this</code>)
				 * will be bound to <code>oListener</code> if specified, otherwise it will be bound to this
				 * <code>sap.ui.core.Popup</code> itself.
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.core.Popup</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachClosed(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.Popup;

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>opened</code> event of this
				 * <code>sap.ui.core.Popup</code>.When called, the context of the event handler (its <code>this</code>)
				 * will be bound to <code>oListener</code> if specified, otherwise it will be bound to this
				 * <code>sap.ui.core.Popup</code> itself.
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.core.Popup</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachOpened(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.Popup;

				/**
				 * Closes the popup.If the Popup is already closed or in the process of closing, calling this method
				 * does nothing.If the Popup is in the process of being opened and closed with a duration of 0, calling
				 * this method does nothing.If the Popup is in the process of being opened and closed with an animation
				 * duration, the animation will be chained, but this functionality is dangerous,may lead to
				 * inconsistent behavior and is thus not recommended and may even be removed.
				 * @param iDuration animation duration in milliseconds; default is the jQuery preset "fast".  For
				 * iDuration == 0 the closing happens synchronously without animation.
				 */
				close(iDuration: number): void;

				/**
				 * Closes and destroys this instance of Popup.Does not destroy the hosted content.
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>closed</code> event of this
				 * <code>sap.ui.core.Popup</code>.The passed function and listener object must match the ones used for
				 * event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachClosed(fnFunction: any, oListener: any): sap.ui.core.Popup;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>opened</code> event of this
				 * <code>sap.ui.core.Popup</code>.The passed function and listener object must match the ones used for
				 * event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachOpened(fnFunction: any, oListener: any): sap.ui.core.Popup;

				/**
				 * When the Popup is being destroyed all corresponding references should bedeleted as well to prevent
				 * any memory leaks.
				 */
				exit(): void;

				/**
				 * Fires event <code>closed</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireClosed(mArguments: any): sap.ui.core.Popup;

				/**
				 * Fires event <code>opened</code> to attached listeners.
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireOpened(mArguments: any): sap.ui.core.Popup;

				/**
				 * Determines whether the pop-up should auto closes or not.
				 * @since 1.16
				 */
				getAutoClose(): boolean;

				/**
				 * Returns this Popup's content.
				 * @returns the content that has been set previously (if any)
				 */
				getContent(): sap.ui.core.Control | any;

				/**
				 * This returns true/false if the default followOf method should be used. If a separate
				 * followOf-handler was previously addedthe correspodning function is returned.
				 * @since 1.13.0
				 * @returns if a function was set it is returned otherwise a boolean value whether the follow of is
				 * activated
				 */
				getFollowOf(): boolean | any;

				/**
				 * Returns the last z-index that has been handed out. does not increase the internal z-index counter.
				 */
				getLastZIndex(): Number;

				/**
				 * Returns the last z-index that has been handed out. does not increase the internal z-index counter.
				 */
				getLastZIndex(): Number;

				/**
				 * Returns a metadata object for class sap.ui.core.Popup.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the value if a Popup is of modal type
				 */
				getModal(): void;

				/**
				 * Returns the next available z-index on top of the existing/previous popups. Each call increases the
				 * internal z-index counter and the returned z-index.
				 * @returns the next z-index on top of the Popup stack
				 */
				getNextZIndex(): Number;

				/**
				 * Returns the next available z-index on top of the existing/previous popups. Each call increases the
				 * internal z-index counter and the returned z-index.
				 * @returns the next z-index on top of the Popup stack
				 */
				getNextZIndex(): Number;

				/**
				 * Returns whether the Popup is currently open, closed, or transitioning between these states.
				 * @returns whether the Popup is opened
				 */
				getOpenState(): sap.ui.core.OpenState;

				/**
				 * Returns whether the Popup is currently open (this includes opening andclosing animations).
				 * @returns whether the Popup is opened (or currently being                           opened or closed)
				 */
				isOpen(): boolean;

				/**
				 * Opens the popup's content at the position either specified here or beforehand via {@link
				 * #setPosition}.Content must be capable of being positioned via "position:absolute;"All parameters are
				 * optional (open() may be called without any parameters). iDuration may just be omitted, but if any of
				 * "at", "of", "offset", "collision" is given, also the preceding positioning parameters ("my",
				 * at",...) must be given.If the Popup's OpenState is different from "CLOSED" (i.e. if the Popup is
				 * already open, opening or closing), the call is ignored.
				 * @param iDuration animation duration in milliseconds; default is the jQuery preset "fast". For
				 * iDuration == 0 the opening happens synchronously without animation.
				 * @param my the popup content's reference position for docking
				 * @param at the "of" element's reference point for docking to
				 * @param of specifies the reference element to which the given content should dock to
				 * @param offset the offset relative to the docking point, specified as a string with space-separated
				 * pixel values (e.g. "0 10" to move the popup 10 pixels to the right). If the docking of both "my" and
				 * "at" are both RTL-sensitive ("begin" or "end"), this offset is automatically mirrored in the RTL
				 * case as well.
				 * @param collision defines how the position of an element should be adjusted in case it overflows the
				 * window in some direction.
				 * @param followOf defines whether the popup should follow the dock reference when the reference
				 * changes its position.
				 */
				open(
					iDuration: number,
					my?: typeof sap.ui.core.Popup.Dock,
					at?: typeof sap.ui.core.Popup.Dock,
					of?: string | sap.ui.core.Element | any | typeof jQuery | any,
					offset?: string,
					collision?: string,
					followOf?: boolean
				): void;

				/**
				 * Sets the animation functions to use for opening and closing the Popup. Any null value will be
				 * ignored and not change the respective animation function.When called, the animation functions
				 * receive three parameters:- the jQuery object wrapping the DomRef of the popup- the requested
				 * animation duration- a function that MUST be called once the animation has completed
				 * @param fnOpen undefined
				 * @param fnClose undefined
				 * @returns <code>this</code> to allow method chaining
				 */
				setAnimations(fnOpen: any, fnClose: any): sap.ui.core.Popup;

				/**
				 * Used to specify whether the Popup should close as soon as- for non-touch environment: the focus
				 * leaves- for touch environment: user clicks the area which is outside the popup itself, the dom
				 * elemnt which popup aligns to (except document), and one of the autoCloseAreas set by calling
				 * setAutoCloseAreas.
				 * @param bAutoClose whether the Popup should close as soon as the focus leaves
				 * @returns <code>this</code> to allow method chaining
				 */
				setAutoClose(bAutoClose: boolean): sap.ui.core.Popup;

				/**
				 * Sets the additional areas in the page that are considered part of the Popup when autoclose is
				 * enabled.- non-touch environment: if the focus leaves the Popup but immediately enters one of these
				 * areas, the Popup does NOT close.- touch environment: if user clicks one of these areas, the Popup
				 * does NOT close.
				 * @param aAutoCloseAreas an array containing DOM elements considered part of the Popup; a value of
				 * null removes all previous areas
				 * @returns <code>this</code> to allow method chaining
				 */
				setAutoCloseAreas(aAutoCloseAreas: any): sap.ui.core.Popup;

				/**
				 * Sets the content this instance of the Popup should render.Content must be capable of being
				 * positioned via position:absolute;
				 * @param oContent undefined
				 * @returns <code>this</code> to allow method chaining
				 */
				setContent(oContent: sap.ui.core.Control | any): sap.ui.core.Popup;

				/**
				 * Sets the durations for opening and closing animations.Null values and values < 0 are ignored.A
				 * duration of 0 means no animation.Default value is "fast" which is the jQuery constant for "200 ms".
				 * @param iOpenDuration in milliseconds
				 * @param iCloseDuration in milliseconds
				 * @returns <code>this</code> to allow method chaining
				 */
				setDurations(
					iOpenDuration: number,
					iCloseDuration: number
				): sap.ui.core.Popup;

				/**
				 * This enabled/disables the Popup to follow its opening reference. If the Popup is open and a followOf
				 * shouldbe set the corresponding listener will be attached.
				 * @since 1.13.0
				 * @param followOf a boolean value enabled/disables the default followOf-Handler. Or an individual
				 * handler can be given.null deletes all followOf settings.
				 */
				setFollowOf(followOf: boolean | any | any): void;

				/**
				 * Sets the ID of the element that should be focused once the popup opens.If the given ID is the ID of
				 * an existing Control, this Control's focusDomRef will be focused instead, which may be an HTML
				 * element with a different ID (usually a sub-element inside the Control).If no existing element ID is
				 * supplied and the Popup is modal or auto-close, the Popup will instead focus the first focusable
				 * element.
				 * @param sId the ID of the DOM element to focus
				 */
				setInitialFocusId(sId: string): void;

				/**
				 * Set an initial z-index that should be used by all Popup so all Popups start at leastwith the set
				 * z-index.If the given z-index is lower than any current available z-index the highest z-index will be
				 * used.
				 * @since 1.30.0
				 * @param iInitialZIndex is the initial z-index
				 */
				setInitialZIndex(iInitialZIndex: Number): void;

				/**
				 * Used to specify whether the Popup should be modal. A modal popup will put some fading "block layer"
				 * over the background andprevent attempts to put the focus outside/below the popup.Setting this while
				 * the popup is open will change "block layer" immediately.
				 * @param bModal whether the Popup is of modal type
				 * @param sModalCSSClass a CSS class (or space-separated list of classes) that should be added to the
				 * block layer
				 * @returns <code>this</code> to allow method chaining
				 */
				setModal(bModal: boolean, sModalCSSClass?: string): sap.ui.core.Popup;

				/**
				 * Sets the position of the Popup (if you refer to a Control as anchor then do notuse the DOMRef of the
				 * control which might change after re-renderings).Optional parameters can only be omitted when all
				 * subsequent parameters are omitted as well.
				 * @param my specifies which point of the given Content should be aligned
				 * @param at specifies the point of the reference element to which the given Content should be aligned
				 * @param of specifies the reference element to which the given content should be aligned as specified
				 * in the other parameters
				 * @param offset the offset relative to the docking point, specified as a string with space-separated
				 * pixel values (e.g. "0 10" to move the popup 10 pixels to the right). If the docking of both "my" and
				 * "at" are both RTL-sensitive ("begin" or "end"), this offset is automatically mirrored in the RTL
				 * case as well.
				 * @param collision defines how the position of an element should be adjusted in case it overflows the
				 * window in some direction. The valid values that refer to jQuery-UI's position parameters are "flip",
				 * "fit" and "none".
				 * @returns <code>this</code> to allow method chaining
				 */
				setPosition(
					my: typeof sap.ui.core.Popup.Dock,
					at: typeof sap.ui.core.Popup.Dock | any,
					of?: string | sap.ui.core.Element | any | typeof jQuery | any,
					offset?: string,
					collision?: string
				): sap.ui.core.Popup;

				/**
				 * Determines whether the Popup should have a shadow (in supporting browsers).This also affects a
				 * currently open popup.
				 * @param bShowShadow whether to show a shadow
				 * @returns <code>this</code> to allow method chaining
				 */
				setShadow(bShowShadow: boolean): sap.ui.core.Popup;
			}
			/**
			 * Locale represents a locale setting, consisting of a language, script, region, variants, extensions
			 * and private use section
			 * @resource sap/ui/core/Locale.js
			 */
			class Locale extends sap.ui.base.Object {
				/**
				 * Creates an instance of the Locale.
				 * @param sLocaleId the locale identifier, in format en-US or en_US.
				 */
				constructor(sLocaleId: string);

				/**
				 * Get the locale extension as a single string or null.The extension always consists of a singleton
				 * character (not 'x'),a dash '-' and one or more extension token, each separatedagain with a dash.Use
				 * {@link #getExtensions} to get the individual extension tokens as an array.
				 * @returns the extension
				 */
				getExtension(): string;

				/**
				 * Get the locale extensions as an array of tokens.The leading singleton and the separating dashes are
				 * not part of the result.If there is no extensions section in the locale tag, an empty array is
				 * returned.
				 * @returns the individual extension sections
				 */
				getExtensionSubtags(): string[];

				/**
				 * Get the locale language.Note that the case might differ from the original script tag(Lower case is
				 * enforced as recommended by BCP47/ISO639).
				 * @returns the language code
				 */
				getLanguage(): string;

				/**
				 * Returns a metadata object for class sap.ui.core.Locale.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Get the locale private use section or null.
				 * @returns the private use section
				 */
				getPrivateUse(): string;

				/**
				 * Get the locale private use section
				 * @returns the private use section
				 */
				getPrivateUseSubtags(): string;

				/**
				 * Get the locale region or null if none was specified.Note that the case might differ from the
				 * original script tag(Upper case is enforced as recommended by BCP47/ISO3166-1).
				 * @returns the ISO3166-1 region code (2-letter or 3-digits)
				 */
				getRegion(): string;

				/**
				 * Best guess to get a proper SAP Logon Language for this locale.Conversions taken into
				 * account:<ul><li>use the language part only</li><li>convert old ISO639 codes to newer ones (e.g. 'iw'
				 * to 'he')</li><li>for Chinese, map 'Traditional Chinese' to SAP proprietary code 'zf'</li><li>map
				 * private extensions x-sap1q and x-sap2q to SAP pseudo languages '1Q' and '2Q'</li><li>remove ext.
				 * language sub tags</li><li>convert to uppercase</li></ul>Note that the conversion also returns a
				 * result for languages that are notsupported by the default set of SAP languages. This method has no
				 * knowledgeabout the concrete languages of any given backend system.
				 * @since 1.17.0
				 * @returns a language code that should
				 */
				getSAPLogonLanguage(): string;

				/**
				 * Get the locale script or null if none was specified.Note that the case might differ from the
				 * original language tag(Upper case first letter and lower case reminder enforced asrecommended by
				 * BCP47/ISO15924)
				 * @returns the script code or null
				 */
				getScript(): string;

				/**
				 * Get the locale variants as a single string or null.Multiple variants are separated by a dash '-'.
				 * @returns the variant or null
				 */
				getVariant(): string;

				/**
				 * Get the locale variants as an array of individual variants.The separating dashes are not part of the
				 * result.If there is no variant section in the locale tag, an empty array is returned.
				 * @returns the individual variant sections
				 */
				getVariantSubtags(): string[];
			}
			/**
			 * An area in a page that hosts a tree of UI elements.Provides means for event-handling, rerendering,
			 * etc.Special aggregation "dependents" is connected to the lifecycle management and databinding,but
			 * not rendered automatically and can be used for popups or other dependent controls. This
			 * allowsdefinition of popup controls in declarative views and enables propagation of model and
			 * contextinformation to them.
			 * @resource sap/ui/core/UIArea.js
			 */
			class UIArea extends sap.ui.base.ManagedObject {
				/**
				 * Accepts an object literal <code>mSettings</code> that defines initialproperty values, aggregated and
				 * associated objects as well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a
				 * general description of the syntax of the settings object.
				 * @param oCore internal API of the <core>Core</code> that manages this UIArea
				 * @param oRootNode reference to the Dom Node that should be 'hosting' the UI Area.
				 */
				constructor(oCore: sap.ui.core.Core, oRootNode?: any);

				/**
				 * Adds some content to the aggregation <code>content</code>.
				 * @param oContent the content to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addContent(oContent: sap.ui.core.Control): sap.ui.core.UIArea;

				/**
				 * Adds some dependent to the aggregation <code>dependents</code>.
				 * @param oDependent the dependent to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addDependent(oDependent: sap.ui.core.Control): sap.ui.core.UIArea;

				/**
				 * Destroys all the content in the aggregation <code>content</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyContent(): sap.ui.core.UIArea;

				/**
				 * Destroys all the dependents in the aggregation <code>dependents</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyDependents(): sap.ui.core.UIArea;

				/**
				 * Provide getBindingContext, as UIArea can be parent of an element.
				 */
				getBindingContext(sModelName: string): sap.ui.model.Context;

				/**
				 * Gets content of aggregation <code>content</code>.Content that is displayed in the UIArea.
				 */
				getContent(): sap.ui.core.Control[];

				/**
				 * Gets content of aggregation <code>dependents</code>.Dependent objects whose lifecycle is bound to
				 * the UIarea but which are not automatically rendered by the UIArea.
				 */
				getDependents(): sap.ui.core.Control[];

				/**
				 * Returns the Core's event provider as new eventing parent to enable control event bubbling to the
				 * core to ensure compatibility with the core validation events.
				 * @returns the parent event provider
				 */
				getEventingParent(): sap.ui.base.EventProvider;

				/**
				 * Returns this <code>UIArea</code>'s id (as determined from provided RootNode).
				 * @returns id of this UIArea
				 */
				getId(): string | any;

				/**
				 * Returns a metadata object for class sap.ui.core.UIArea.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the content control of this <code>UIArea</code> at the specified index.If no index is given
				 * the first content control is returned.
				 * @param idx index of the control in the content of this <code>UIArea</code>
				 * @returns the content control of this <code>UIArea</code> at the specified index.
				 */
				getRootControl(idx: number): sap.ui.core.Control;

				/**
				 * Returns the Root Node hosting this instance of <code>UIArea</code>.
				 * @returns the Root Node hosting this instance of <code>UIArea</code>.
				 */
				getRootNode(): sap.ui.core.Element;

				/**
				 * Returns this UI area. Needed to stop recursive calls from an element to its parent.
				 * @returns this
				 */
				getUIArea(): sap.ui.core.UIArea;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.and
				 * returns its index if found or -1 otherwise.
				 * @param oContent The content whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfContent(oContent: sap.ui.core.Control): number;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
				 * <code>dependents</code>.and returns its index if found or -1 otherwise.
				 * @param oDependent The dependent whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfDependent(oDependent: sap.ui.core.Control): number;

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
				): sap.ui.core.UIArea;

				/**
				 * Inserts a dependent into the aggregation <code>dependents</code>.
				 * @param oDependent the dependent to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the dependent should be inserted at; for             a
				 * negative value of <code>iIndex</code>, the dependent is inserted at position 0; for a value
				 *    greater than the current size of the aggregation, the dependent is inserted at             the
				 * last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertDependent(
					oDependent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.core.UIArea;

				/**
				 * Will be used as end-point for invalidate-bubbling from controls up their hierarchy.<br/> Triggers
				 * re-rendering ofthe UIAreas content.
				 */
				invalidate(oOrigin?: any): void;

				/**
				 * Checks whether the control is still valid (is in the DOM)
				 * @returns True if the control is still in the active DOM
				 */
				isActive(): boolean;

				/**
				 * Returns whether rerendering is currently suppressed on this UIArea
				 */
				isInvalidateSuppressed(): void;

				/**
				 * Returns the locked state of the <code>sap.ui.core.UIArea</code>
				 * @returns locked state
				 */
				isLocked(): boolean;

				/**
				 * Locks this instance of UIArea.Rerendering and eventing will not be active as long as no{@link
				 * #unlock} is called.
				 */
				lock(): void;

				/**
				 * Removes all the controls from the aggregation <code>content</code>.Additionally, it unregisters them
				 * from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllContent(): sap.ui.core.Control[];

				/**
				 * Removes all the controls from the aggregation <code>dependents</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllDependents(): sap.ui.core.Control[];

				/**
				 * Removes a content from the aggregation <code>content</code>.
				 * @param vContent The content to remove or its index or id
				 * @returns The removed content or <code>null</code>
				 */
				removeContent(
					vContent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Removes a dependent from the aggregation <code>dependents</code>.
				 * @param vDependent The dependent to remove or its index or id
				 * @returns The removed dependent or <code>null</code>
				 */
				removeDependent(
					vDependent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Sets the root control to be displayed in this UIArea.First, all old content controls (if any) will
				 * be detached from this UIArea (e.g. their parentrelationship to this UIArea will be cut off). Then
				 * the parent relationship for the newcontent control (if not empty) will be set to this UIArea and
				 * finally, the UIArea willbe marked for re-rendering.The real re-rendering happens whenever the
				 * re-rendering is called. Either implicitlyat the end of any control event or by calling
				 * sap.ui.getCore().applyChanges().
				 * @param oRootControl the Control that should be the Root for this <code>UIArea</code>.
				 */
				setRootControl(
					oRootControl: sap.ui.base.Interface | sap.ui.core.Control
				): void;

				/**
				 * Allows setting the Root Node hosting this instance of <code>UIArea</code>.<br/> The Dom Ref must
				 * have an Id thatwill be used as Id for this instance of <code>UIArea</code>.
				 * @param oRootNode the hosting Dom Ref for this instance of <code>UIArea</code>.
				 */
				setRootNode(oRootNode: any): void;

				/**
				 * Un-Locks this instance of UIArea.Rerendering and eventing will now be enabled again.
				 */
				unlock(): void;
			}

			interface EventDelegateProps {
				/**
				 * This event is fired before the NavContainer shows this child control for the first time.
				 */
				onBeforeFirstShow?: sap.ui.base.EventHandler;

				/**
				 * This event is fired every time before the NavContainer hides this child control.
				 * In case of animated transitions this event is fired before the transition starts.
				 */
				onBeforeHide?: sap.ui.base.EventHandler;

				/**
				 * This event is fired every time when the NavContainer has made this child control invisible.
				 * In case of animated transitions this event is fired after the transition finishes.
				 * This control is now no longer being displayed and not animated anymore.
				 */
				onAfterHide?: sap.ui.base.EventHandler;

				/**
				 * Function is called when the rendering of the ComponentContainer is completed.
				 */
				onAfterRendering?: sap.ui.base.EventHandler;

				/**
				 * Function is called when the rendering of the ComponentContainer is started.
				 */
				onBeforeRendering?: sap.ui.base.EventHandler;

				/**
				 * This event is fired every time before the NavContainer shows this child control.
				 * In case of animated transitions this event is fired before the transition starts.
				 */
				onBeforeShow?: sap.ui.base.EventHandler;

				/**
				 * This event is fired every time when the NavContainer has made this child control visible.
				 * In case of animated transitions this event is fired after the transition finishes.
				 * This control is now being displayed and not animated anymore.
				 */
				onAfterShow?: sap.ui.base.EventHandler;

				/**
				 * The event is fired every time a key is pressed.
				 */
				onkeydown?: (oEvent: KeyboardEvent) => any;

				/**
				 * The event is fired every time a key is lifted.
				 */
				onkeyup?: (oEvent: KeyboardEvent) => any;
			}

			interface ElementAggregations {
				customData?: sap.ui.core.CustomData[];
				dependents?: sap.ui.core.Element[];
				layoutData?: sap.ui.core.LayoutData;
				tooltip?: sap.ui.core.TooltipBase;
			}

			/**
			 * Base Class for Elements.
			 * @resource sap/ui/core/Element.js
			 */
			class Element<
				T = any,
				U extends ElementAggregations = ElementAggregations
			> extends sap.ui.base.ManagedObject<T, U> {
				/**
				 * Constructs and initializes an UI Element with the given <code>sId</code> and settings.If the
				 * optional <code>mSettings</code> are given, they must be a JSON-like object (object literal)that
				 * defines values for properties, aggregations, associations or events keyed by their name.<b>Valid
				 * Names:</b>The property (key) names supported in the object literal are exactly the (case
				 * sensitive)names documented in the JSDoc for the properties, aggregations, associations and eventsof
				 * the control and its base classes. Note that for  0..n aggregations and associations thisusually is
				 * the plural name, whereas it is the singular name in case of 0..1 relations.If a key name is
				 * ambiguous for a specific control class (e.g. a property has the samename as an event), then this
				 * method prefers property, aggregation, association andevent in that order. To resolve such
				 * ambiguities, the keys can be prefixed with<code>aggregation:</code>, <code>association:</code> or
				 * <code>event:</code>.In that case the keys must be quoted due to the ':'.Each subclass should
				 * document the set of supported names in its constructor documentation.<b>Valid Values:</b><ul><li>for
				 * normal properties, the value has to be of the correct simple type (no type conversion occurs)<li>for
				 * 0..1 aggregations, the value has to be an instance of the aggregated control or element type<li>for
				 * 0..n aggregations, the value has to be an array of instances of the aggregated type<li>for 0..1
				 * associations, an instance of the associated type or an id (string) is accepted<li>0..n associations
				 * are not supported yet<li>for events either a function (event handler) is accepted or an array of
				 * length 2    where the first element is a function and the 2nd element is an object to invoke the
				 * method on.</ul>Special aggregation "dependents" is connected to the lifecycle management and
				 * databinding,but not rendered automatically and can be used for popups or other dependent controls.
				 * This allowsdefinition of popup controls in declarative views and enables propagation of model and
				 * contextinformation to them.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control; generated automatically if no non-empty id is given     Note:
				 * this can be omitted, no matter whether <code>mSettings</code> will be given or not!
				 * @param mSettings optional map/JSON-object with initial property values, aggregated objects etc. for
				 * the new element
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Constructs and initializes an UI Element with the given <code>sId</code> and settings.If the
				 * optional <code>mSettings</code> are given, they must be a JSON-like object (object literal)that
				 * defines values for properties, aggregations, associations or events keyed by their name.<b>Valid
				 * Names:</b>The property (key) names supported in the object literal are exactly the (case
				 * sensitive)names documented in the JSDoc for the properties, aggregations, associations and eventsof
				 * the control and its base classes. Note that for  0..n aggregations and associations thisusually is
				 * the plural name, whereas it is the singular name in case of 0..1 relations.If a key name is
				 * ambiguous for a specific control class (e.g. a property has the samename as an event), then this
				 * method prefers property, aggregation, association andevent in that order. To resolve such
				 * ambiguities, the keys can be prefixed with<code>aggregation:</code>, <code>association:</code> or
				 * <code>event:</code>.In that case the keys must be quoted due to the ':'.Each subclass should
				 * document the set of supported names in its constructor documentation.<b>Valid Values:</b><ul><li>for
				 * normal properties, the value has to be of the correct simple type (no type conversion occurs)<li>for
				 * 0..1 aggregations, the value has to be an instance of the aggregated control or element type<li>for
				 * 0..n aggregations, the value has to be an array of instances of the aggregated type<li>for 0..1
				 * associations, an instance of the associated type or an id (string) is accepted<li>0..n associations
				 * are not supported yet<li>for events either a function (event handler) is accepted or an array of
				 * length 2    where the first element is a function and the 2nd element is an object to invoke the
				 * method on.</ul>Special aggregation "dependents" is connected to the lifecycle management and
				 * databinding,but not rendered automatically and can be used for popups or other dependent controls.
				 * This allowsdefinition of popup controls in declarative views and enables propagation of model and
				 * contextinformation to them.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control; generated automatically if no non-empty id is given     Note:
				 * this can be omitted, no matter whether <code>mSettings</code> will be given or not!
				 * @param mSettings optional map/JSON-object with initial property values, aggregated objects etc. for
				 * the new element
				 */
				constructor(mSettings?: any);

				/**
				 * Returns the best suitable DOM node that represents this Element wrapped as jQuery object.I.e. the
				 * element returned by {@link sap.ui.core.Element#getDomRef} is wrapped and returned.If an ID suffix is
				 * given, the ID of this Element is concatenated with the suffix(separated by a single dash) and the
				 * DOM node with that compound ID will be wrapped by jQuery.This matches the UI5 naming convention for
				 * named inner DOM nodes of a control.
				 * @param sSuffix ID suffix to get a jQuery object for
				 * @returns The jQuery wrapped element's DOM reference
				 */
				$(sSuffix: string): typeof jQuery;

				/**
				 * Adds some customData to the aggregation <code>customData</code>.
				 * @param oCustomData the customData to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addCustomData(oCustomData: sap.ui.core.CustomData): sap.ui.core.Element;

				/**
				 * Adds some dependent to the aggregation <code>dependents</code>.
				 * @since 1.19
				 * @param oDependent the dependent to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addDependent(oDependent: sap.ui.core.Control): sap.ui.core.Element;

				/**
				 * Adds a delegate that listens to the events that are fired on this element (as opposed to events
				 * which are fired BY this element).When this element is cloned, the same delegate will be added to all
				 * clones. This behavior is well-suited for applications which want to add delegatesthat also work with
				 * templates in aggregation bindings.For control development the internal "addDelegate" method which
				 * does not clone delegates by default may be more suitable, as typically each control instance takes
				 * care of its own delegates.To avoid double registrations, all registrations of the given delegate are
				 * firstremoved and then the delegate is added.<strong>Important:</strong> If event delegates were
				 * added the delegate will still be called even ifthe event was processed and/or cancelled via
				 * <code>preventDefault</code> by the Element or another event delegate.<code>preventDefault</code>
				 * only prevents the event from bubbling.It should be checked e.g. in the event delegate's listener
				 * whether an Element is still enabled via <code>getEnabled</code>.Additionally there might be other
				 * things that delegates need to check depending on the event(e.g. not adding a key twice to an output
				 * string etc.).
				 * @since 1.9.0
				 * @param oDelegate the delegate object
				 * @param oThis if given, this object will be the "this" context in the listener methods; default is
				 * the delegate object itself
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				addEventDelegate(
					oDelegate: EventDelegateProps,
					oThis?: any
				): sap.ui.core.Element;

				/**
				 * Applies the focus info.To be overwritten by the specific control method.
				 * @param oFocusInfo undefined
				 */
				applyFocusInfo(oFocusInfo: any): void;

				/**
				 * Bind the object to the referenced entity in the model, which is used as the binding contextto
				 * resolve bound properties or aggregations of the object itself and all of its childrenrelatively to
				 * the given path.If a relative binding path is used, this will be applied whenever the parent context
				 * changes.
				 * @param vPath the binding path or an object with more detailed binding options
				 * @param mParameters map of additional parameters for this binding (only taken into account when vPath
				 * is a string in that case the properties described for vPath above are valid here).
				 * @returns reference to the instance itself
				 */
				bindElement(
					vPath: string | any,
					mParameters?: any
				): sap.ui.base.ManagedObject;

				/**
				 * Clone delegates
				 * @param sIdSuffix a suffix to be appended to the cloned element id
				 * @param aLocalIds an array of local IDs within the cloned hierarchy (internally used)
				 * @returns reference to the newly created clone
				 */
				clone(
					sIdSuffix: string,
					aLocalIds?: string[]
				): sap.ui.base.ManagedObject;

				/**
				 * Creates a new Element from the given data.If vData is an Element already, that element is
				 * returned.If vData is an object (literal), then a new element is created with vData as settings.The
				 * type of the element is either determined by a "Type" entry in the vData orby a type information in
				 * the oKeyInfo object
				 * @param vData the data to create the element from
				 * @param oKeyInfo an entity information (e.g. aggregation info)
				 */
				create(vData: sap.ui.core.Element | any, oKeyInfo?: any): void;

				/**
				 * Attaches custom data to an Element or retrieves attached data.Usage:   data("myKey", myData)attaches
				 * myData (which can be any JS data type, e.g. a number, a string, an object, or a function) to this
				 * element, under the given key "myKey". If the key already exists,the value will be updated.
				 * data("myKey", myData, writeToDom)attaches myData to this element, under the given key "myKey" and
				 * (if writeToDom is true) writes key and value to the HTML. If the key already exists,the value will
				 * be updated. While oValue can be any JS data type to be attached, it must be a string to be also
				 * written to DOM. The key must also be a valid HTML attribute name (it must conform to any
				 * and may contain no colon) and may not start with "sap-ui". When written to HTML, the key is prefixed
				 * with "data-".   data("myKey")retrieves whatever data has been attached to this Element (using the
				 * key "myKey") before   data("myKey", null)removes whatever data has been attached to this Element
				 * (using the key "myKey") before   data(null)removes all data   data()returns all data, as a map
				 */
				data(): void;

				/**
				 * Creates metadata for an UI Element by extending the Object Metadata.In addition to the entries
				 * defined by {@link sap.ui.base.Object.defineClass}, the followingentries can be specified in the
				 * static info object:<ul><li>library: {string} name of the library that contains the
				 * element/control<li>properties: a map of property info objects, mapped by the property name    Info
				 * object should contain the following information    <ul>    <li>name {string} name of the property
				 * (redundant to map key)    <li>type {string} type of the property    <li>[defaultValue] {any} default
				 * value of the property. Can be omitted    </ul><li>aggregations: a map of aggregation info objects,
				 * mapped by the aggregation name    Info object should contain the following information    <ul>
				 * <li>name {string} name of the aggregation, singular for 0..1, plural for 0..n    <li>type {string}
				 * type of the aggregated controls/elements    <li>multiple {boolean}    <li>singularName {string}
				 * singular name for 0..n aggregations    </ul><li>associations: a map of association info objects,
				 * mapped by the association name    Info object should contain the following information    <ul>
				 * <li>name {string} name of the association, singular for 0..1, plural for 0..n    <li>type {string}
				 * type of the associated controls/elements    <li>multiple {boolean}    <li>singularName {string}
				 * singular name for 0..n associations    </ul><li>events: map from event names to event names</ul>
				 * @param sClassName name of the class to build the metadata for
				 * @param oStaticInfo static information used to build the metadata
				 * @param fnMetaImpl constructor to be used for the metadata
				 * @returns the created metadata
				 */
				defineClass(
					sClassName: string,
					oStaticInfo: any,
					fnMetaImpl?: any
				): any;

				/**
				 * Cleans up the resources associated with this element and all its children.After an element has been
				 * destroyed, it can no longer be used in the UI!Applications should call this method if they don't
				 * need the element any longer.
				 * @param bSuppressInvalidate if true, the UI element is not marked for redraw
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 * Destroys all the customData in the aggregation <code>customData</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyCustomData(): sap.ui.core.Element;

				/**
				 * Destroys all the dependents in the aggregation <code>dependents</code>.
				 * @since 1.19
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyDependents(): sap.ui.core.Element;

				/**
				 * Destroys the layoutData in the aggregation <code>layoutData</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyLayoutData(): sap.ui.core.Element;

				/**
				 * Destroys the tooltip in the aggregationnamed <code>tooltip</code>.
				 * @returns <code>this</code> to allow method chaining
				 */
				destroyTooltip(): sap.ui.core.Element;

				/**
				 * Allows the parent of a control to enhance the aria information during rendering.This function is
				 * called by the RenderManager's writeAccessibilityState methodfor the parent of the currently rendered
				 * control - if the parent implements it.
				 * @param oElement the Control/Element for which aria properties are rendered
				 * @param mAriaProps map of aria properties keyed by there name (withour prefix "aria-")
				 * @returns map of enhanced aria properties
				 */
				enhanceAccessibilityState(
					oElement: sap.ui.core.Element,
					mAriaProps: any
				): any;

				/**
				 * Cleans up the element instance before destruction.Applications must not call this hook method
				 * directly, it is called by the frameworkwhen the element is {@link #destroy destroyed}.Subclasses of
				 * Element should override this hook to implement any necessary cleanup.
				 */
				exit(): void;

				/**
				 * Searches and returns an array of child elements and controls which arereferenced within an
				 * aggregation or aggregations of child elements/controls.This can be either done recursive or
				 * not.<br><b>Take care: this operation might be expensive.</b>
				 * @param bRecursive true, if all nested children should be returned.
				 * @returns array of child elements and controls
				 */
				findElements(bRecursive: boolean): sap.ui.core.Element[];

				/**
				 * Fires the given event and notifies all listeners. Listeners must not changethe content of the event.
				 * @param sEventId the event id
				 * @param mParameters the parameter map
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				fireEvent(sEventId: string, mParameters: any): sap.ui.core.Element;

				/**
				 * Sets the focus to the stored focus DOM reference
				 */
				focus(): void;

				/**
				 * Gets content of aggregation <code>customData</code>.Custom Data, a data structure like a map
				 * containing arbitrary key value pairs.
				 */
				getCustomData(): sap.ui.core.CustomData[];

				/**
				 * Gets content of aggregation <code>dependents</code>.Dependents are not rendered, but their
				 * databinding context and lifecycle are bound to the aggregating Element.
				 * @since 1.19
				 */
				getDependents(): sap.ui.core.Control[];

				/**
				 * Returns the best suitable DOM Element that represents this UI5 Element.By default the DOM Element
				 * with the same ID as this Element is returned.Subclasses should override this method if the lookup
				 * via id is not sufficient.Note that such a DOM Element does not necessarily exist in all cases.Some
				 * elements or controls might not have a DOM representation at all (e.g.a naive FlowLayout) while
				 * others might not have one due to their currentstate (e.g. an initial, not yet rendered control).If
				 * an ID suffix is given, the ID of this Element is concatenated with the suffix(separated by a single
				 * dash) and the DOM node with that compound ID will be returned.This matches the UI5 naming convention
				 * for named inner DOM nodes of a control.
				 * @param sSuffix ID suffix to get the DOMRef for
				 * @returns The Element's DOM Element sub DOM Element or null
				 */
				getDomRef(sSuffix: string): sap.ui.core.Element;

				/**
				 * Get the element binding object for a specific model
				 * @param sModelName the name of the model
				 * @returns the element binding for the given model name
				 */
				getElementBinding(sModelName?: string): sap.ui.model.ContextBinding;

				/**
				 * Returns the DOM Element that should get the focus.To be overwritten by the specific control method.
				 * @returns Returns the DOM Element that should get the focus
				 */
				getFocusDomRef(): sap.ui.core.Element;

				/**
				 * Returns an object representing the serialized focus informationTo be overwritten by the specific
				 * control method
				 * @returns an object representing the serialized focus information
				 */
				getFocusInfo(): any;

				/**
				 */
				getInterface(): sap.ui.base.Interface;

				/**
				 * Gets content of aggregation <code>layoutData</code>.Defines the layout constraints for this control
				 * when it is used inside a Layout.LayoutData classes are typed classes and must match the embedding
				 * Layout.See VariantLayoutData for aggregating multiple alternative LayoutData instances to a single
				 * Element.
				 */
				getLayoutData(): sap.ui.core.LayoutData;

				/**
				 * Returns the runtime metadata for this UI element.When using the defineClass method, this function is
				 * automatically created and returnsa runtime representation of the design time metadata.
				 * @returns runtime metadata
				 */
				getMetadata(): any;

				/**
				 * Returns a metadata object for class sap.ui.core.Element.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the tooltip for this element if any or an undefined value.The tooltip can either be a simple
				 * string or a subclass of{@link sap.ui.core.TooltipBase}.Callers that are only interested in tooltips
				 * of type string (e.g. to renderthem as a <code>title</code> attribute), should call the convenience
				 * method{@link #getTooltip_AsString} instead. If they want to get a tooltip text nomatter where it
				 * comes from (be it a string tooltip or the text from a TooltipBaseinstance) then they could call
				 * {@link #getTooltip_Text} instead.
				 * @returns The tooltip for this Element.
				 */
				getTooltip(): string | sap.ui.core.TooltipBase;

				/**
				 * Returns the tooltip for this element but only if it is a simple string.Otherwise an undefined value
				 * is returned.
				 * @returns string tooltip or undefined
				 */
				getTooltip_AsString(): string;

				/**
				 * Returns the main text for the current tooltip or undefined if there is no such text.If the tooltip
				 * is an object derived from sap.ui.core.Tooltip, then the text propertyof that object is returned.
				 * Otherwise the object itself is returned (either a stringor undefined or null).
				 * @returns text of the current tooltip or undefined
				 */
				getTooltip_Text(): string;

				/**
				 * Checks for the provided <code>sap.ui.core.CustomData</code> in the aggregation
				 * <code>customData</code>.and returns its index if found or -1 otherwise.
				 * @param oCustomData The customData whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfCustomData(oCustomData: sap.ui.core.CustomData): number;

				/**
				 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation
				 * <code>dependents</code>.and returns its index if found or -1 otherwise.
				 * @since 1.19
				 * @param oDependent The dependent whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfDependent(oDependent: sap.ui.core.Control): number;

				/**
				 * Initializes the element instance after creation.Applications must not call this hook method
				 * directly, it is called by the frameworkwhile the constructor of an element is executed.Subclasses of
				 * Element should override this hook to implement any necessary initialization.
				 */
				init(): void;

				/**
				 * Inserts a customData into the aggregation <code>customData</code>.
				 * @param oCustomData the customData to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the customData should be inserted at; for             a
				 * negative value of <code>iIndex</code>, the customData is inserted at position 0; for a value
				 *     greater than the current size of the aggregation, the customData is inserted at             the
				 * last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertCustomData(
					oCustomData: sap.ui.core.CustomData,
					iIndex: number
				): sap.ui.core.Element;

				/**
				 * Inserts a dependent into the aggregation <code>dependents</code>.
				 * @since 1.19
				 * @param oDependent the dependent to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the dependent should be inserted at; for             a
				 * negative value of <code>iIndex</code>, the dependent is inserted at position 0; for a value
				 *    greater than the current size of the aggregation, the dependent is inserted at             the
				 * last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertDependent(
					oDependent: sap.ui.core.Control,
					iIndex: number
				): sap.ui.core.Element;

				/**
				 * This function either calls set[sPropertyName] or get[sPropertyName] with the specified property
				 * namedepending if an <code>oValue</code> is provided or not.
				 * @param sPropertyName name of the property to set
				 * @param oValue value to set the property to
				 * @returns Returns <code>this</code> to allow method chaining in case of setter and the property value
				 * in case of getter
				 */
				prop(sPropertyName: string, oValue?: any): any | sap.ui.core.Element;

				/**
				 * Removes all the controls from the aggregation <code>customData</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllCustomData(): sap.ui.core.CustomData[];

				/**
				 * Removes all the controls from the aggregation <code>dependents</code>.Additionally, it unregisters
				 * them from the hosting UIArea.
				 * @since 1.19
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllDependents(): sap.ui.core.Control[];

				/**
				 * Removes a customData from the aggregation <code>customData</code>.
				 * @param vCustomData The customData to remove or its index or id
				 * @returns The removed customData or <code>null</code>
				 */
				removeCustomData(
					vCustomData: number | string | sap.ui.core.CustomData
				): sap.ui.core.CustomData;

				/**
				 * Removes a dependent from the aggregation <code>dependents</code>.
				 * @since 1.19
				 * @param vDependent The dependent to remove or its index or id
				 * @returns The removed dependent or <code>null</code>
				 */
				removeDependent(
					vDependent: number | string | sap.ui.core.Control
				): sap.ui.core.Control;

				/**
				 * Removes the given delegate from this element.This method will remove all registrations of the given
				 * delegate, not only one.
				 * @since 1.9.0
				 * @param oDelegate the delegate object
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				removeEventDelegate(oDelegate: any): sap.ui.core.Element;

				/**
				 * This triggers immediate rerendering of its parent and thus of itself and its children.<br/> As
				 * <code>sap.ui.core.Element</code> "bubbles up" thererender, changes to child-<code>Elements</code>
				 * will also result in immediate rerendering of the whole sub tree.
				 */
				rerender(): void;

				/**
				 * Sets the {@link sap.ui.core.LayoutData} defining the layout constraintsfor this control when it is
				 * used inside a layout.
				 * @param oLayoutData undefined
				 */
				setLayoutData(oLayoutData: sap.ui.core.LayoutData): void;

				/**
				 * Sets a new tooltip for this object. The tooltip can either be a simple string(which in most cases
				 * will be rendered as the <code>title</code> attribute of thisElement) or an instance of {@link
				 * sap.ui.core.TooltipBase}.If a new tooltip is set, any previously set tooltip is deactivated.
				 * @param vTooltip undefined
				 */
				setTooltip(vTooltip: string | sap.ui.core.TooltipBase): void;

				/**
				 * Returns a simple string representation of this element.Mainly useful for tracing purposes.
				 * @returns a string descripition of this element
				 */
				toString(): string;

				/**
				 * Removes the defined binding context of this object, all bindings will now resolverelative to the
				 * parent context again.
				 * @param sModelName undefined
				 * @returns reference to the instance itself
				 */
				unbindElement(sModelName?: string): sap.ui.base.ManagedObject;
			}
			/**
			 * This element used to provide messages. Rendering must be done within the control that uses this kind
			 * of element.Its default level is none.
			 * @resource sap/ui/core/Message.js
			 */
			class Message extends sap.ui.core.Element {
				/**
				 * Constructor for a new Message.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Compares the given message with <code>this</code> message. The types of{@link
				 * sap.ui.core.MessageType} are ordered from "Error" > "Warning" > "Success" >"Information" >
				 * "None".See  {@link sap.ui.core.Message.compareByType}
				 * @param oOther message to compare with this one
				 * @returns returns <code>0</code> if both messages are at        the same level. <code>-1</code> if
				 * <code>this</code>        message has a lower level. <code>1</code> if <code>this</code>
				 * message has a higher level.
				 */
				compareByType(oOther: typeof sap.ui.core.Message): number;

				/**
				 * Compares two given messages with each other.The types of {@link sap.ui.core.MessageType} are ordered
				 * from "Error" > "Warning" > "Success" >"Information" > "None".
				 * @param oMessage1 first message to compare
				 * @param oMessage2 second message to compare
				 * @returns returns <code>0</code> if both messages are at        the same level. <code>-1</code> if
				 * <code>this</code>        message has a lower level. <code>1</code> if <code>this</code>
				 * message has a higher level.
				 */
				compareByType(
					oMessage1: typeof sap.ui.core.Message,
					oMessage2: typeof sap.ui.core.Message
				): number;

				/**
				 * Returns the icon's default URI depending on given size.There are default icons for messages
				 * available that can be used this way. If noparameter is given, the size will be 16x16 per default. If
				 * larger icons are needed,the parameter "32x32" might be given.
				 * @param sSize If parameter is not set the default icon's size will be 16x16. If parameter        is
				 * set to "32x32" the icon size will be 32x32.
				 * @returns URI of the default icon.
				 */
				getDefaultIcon(sSize: string): any;

				/**
				 * Gets current value of property <code>icon</code>.A possible icon URI of the message
				 * @returns Value of property <code>icon</code>
				 */
				getIcon(): any;

				/**
				 * Gets current value of property <code>level</code>.Setting the message's level.Default value is
				 * <code>None</code>.
				 * @returns Value of property <code>level</code>
				 */
				getLevel(): sap.ui.core.MessageType;

				/**
				 * Returns a metadata object for class sap.ui.core.Message.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>readOnly</code>.Determines whether the message should be read
				 * only. This helps the application to handle a message a different way if the application
				 * differentiates between read-only and common messages.Default value is <code>false</code>.
				 * @since 1.19.0
				 * @returns Value of property <code>readOnly</code>
				 */
				getReadOnly(): boolean;

				/**
				 * Gets current value of property <code>text</code>.Message text
				 * @returns Value of property <code>text</code>
				 */
				getText(): string;

				/**
				 * Gets current value of property <code>timestamp</code>.Message's timestamp. It is just a simple
				 * String that will be used without any transformation. So the application that uses messages needs to
				 * format the timestamp to its own needs.
				 * @returns Value of property <code>timestamp</code>
				 */
				getTimestamp(): string;

				/**
				 * Sets a new value for property <code>icon</code>.A possible icon URI of the messageWhen called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param sIcon New value for property <code>icon</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIcon(sIcon: any): typeof sap.ui.core.Message;

				/**
				 * Sets a new value for property <code>level</code>.Setting the message's level.When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>None</code>.
				 * @param sLevel New value for property <code>level</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setLevel(sLevel: sap.ui.core.MessageType): typeof sap.ui.core.Message;

				/**
				 * Sets a new value for property <code>readOnly</code>.Determines whether the message should be read
				 * only. This helps the application to handle a message a different way if the application
				 * differentiates between read-only and common messages.When called with a value of <code>null</code>
				 * or <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>false</code>.
				 * @since 1.19.0
				 * @param bReadOnly New value for property <code>readOnly</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setReadOnly(bReadOnly: boolean): typeof sap.ui.core.Message;

				/**
				 * Sets a new value for property <code>text</code>.Message textWhen called with a value of
				 * <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param sText New value for property <code>text</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setText(sText: string): typeof sap.ui.core.Message;

				/**
				 * Sets a new value for property <code>timestamp</code>.Message's timestamp. It is just a simple String
				 * that will be used without any transformation. So the application that uses messages needs to format
				 * the timestamp to its own needs.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sTimestamp New value for property <code>timestamp</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setTimestamp(sTimestamp: string): typeof sap.ui.core.Message;
			}

			interface ControlProperties {
				busy?: boolean;
				busyIndicatorDelay?: number;
				busyIndicatorSize?: string;
				visible?: boolean;
			}

			interface ControlAggregations extends ElementAggregations {}

			type ControlSettings = ControlProperties | ControlAggregations;
			/**
			 * Base Class for Controls.
			 * @resource sap/ui/core/Control.js
			 */
			abstract class Control<
				T extends ControlProperties = ControlProperties,
				U extends ControlAggregations = ControlAggregations
			> extends sap.ui.core.Element<T, U> {
				/**
				 * Creates and initializes a new control with the given <code>sId</code> and settings.The set of
				 * allowed entries in the <code>mSettings</code> object depends on the concretesubclass and is
				 * described there. See {@link sap.ui.core.Element} for a general description of thisargument.The
				 * settings supported by Control are:<ul><li>Properties<ul><li>{@link #getBusy busy} : boolean
				 * (default: false)</li><li>{@link #getBusyIndicatorDelay busyIndicatorDelay} : int (default:
				 * 1000)</li></ul></li></ul>Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId optional id for the new control; generated automatically if no non-empty id is given
				 * Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
				 * @param mSettings optional map/JSON-object with initial settings for the new control
				 */
				constructor(sId?: string, mSettings?: ControlSettings);
				constructor(mSettings?: ControlSettings);

				/**
				 * The string given as "sStyleClass" will be added to the "class" attribute of this control's root HTML
				 * element.This method is intended to be used to mark controls as being of a special type for
				 * whichspecial styling can be provided using CSS selectors that reference this style class
				 * name.<pre>Example:   myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button
				 * instance...and in CSS:   .myRedTextButton {      color: red;   }</pre>This will add the CSS class
				 * "myRedTextButton" to the Button HTML and the CSS code above will thenmake the text in this
				 * particular button red.Only characters allowed inside HTML attributes are allowed.Quotes are not
				 * allowed and this method will ignore any strings containing quotes.Strings containing spaces are
				 * interpreted as multiple custom style classes which are split by space and can be removedindividually
				 * later by calling removeStyleClass.Multiple calls with the same sStyleClass will have no different
				 * effect than calling once.If sStyleClass is null, empty string or it contains quotes, the call is
				 * ignored.
				 * @param sStyleClass the CSS class name to be added
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				addStyleClass(sStyleClass: string): sap.ui.core.Control;

				/**
				 * Defines whether the user can select text inside this control.Defaults to <code>true</code> as long
				 * as this method has not been called.<b>Note:</b>This only works in IE and Safari; for Firefox the
				 * element's style mustbe set to:<pre>  -moz-user-select: none;</pre>in order to prevent text
				 * selection.
				 * @param bAllow whether to allow text selection or not
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				allowTextSelection(bAllow: boolean): sap.ui.core.Control;

				/**
				 * Allows binding handlers for any native browser event to the root HTML element of this Control. This
				 * internally handlesDOM element replacements caused by re-rendering.IMPORTANT:This should be only used
				 * as FALLBACK when the Control events do not cover a specific use-case! Always try usingSAPUI5 control
				 * events, as e.g. accessibility-related functionality is then provided automatically.E.g. when working
				 * with a sap.ui.commons.Button, always use the Button's "press" event, not the native "click" event,
				 * because"press" is also guaranteed to be fired when certain keyboard activity is supposed to trigger
				 * the Button.In the event handler, "this" refers to the Control - not to the root DOM element like in
				 * jQuery. While the DOM element canbe used and modified, the general caveats for working with SAPUI5
				 * control DOM elements apply. In particular the DOM elementmay be destroyed and replaced by a new one
				 * at any time, so modifications that are required to have permanent effect may notbe done. E.g. use
				 * Control.addStyleClass() instead if the modification is of visual nature.Use detachBrowserEvent() to
				 * remove the event handler(s) again.
				 * @param sEventType A string containing one or more JavaScript event types, such as "click" or "blur".
				 * @param fnHandler A function to execute each time the event is triggered.
				 * @param oListener The object, that wants to be notified, when the event occurs
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				attachBrowserEvent(
					sEventType: string,
					fnHandler?: any,
					oListener?: any
				): sap.ui.core.Control;

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>validateFieldGroup</code> event of this
				 * <code>sap.ui.core.Control</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.core.Control</code> itself.Event is fired if a logical field group defined by
				 * <code>fieldGroupIds</code> of a control was left or the user explicitly pressed a validation key
				 * combination.Use this event to validate data of the controls belonging to a field group.
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.core.Control</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachValidateFieldGroup(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.Control;

				/**
				 * Returns whether the control has a given field group.If <code>vFieldGroupIds</code> is not given it
				 * checks whether at least one field group ID is given for this control.If <code>vFieldGroupIds</code>
				 * is an empty array or empty string, true is returned if there is no field group ID set for this
				 * control.If <code>vFieldGroupIds</code> is a string array or a string all expected field group IDs
				 * are checked and true is returned if all are contained for given for this control.The comma delimiter
				 * can be used to seperate multiple field group IDs in one string.
				 * @param vFieldGroupIds ID of the field group or an array of field group IDs to match
				 * @returns true if a field group ID matches
				 */
				checkFieldGroupIds(vFieldGroupIds: string | string[]): boolean;

				/**
				 * Overrides {@link sap.ui.core.Element#clone Element.clone} to clone additionalinternal state.The
				 * additionally cloned information contains:<ul><li>browser event handlers attached with {@link
				 * #attachBrowserEvent}<li>text selection behavior<li>style classes added with {@link
				 * #addStyleClass}</ul>
				 * @param sIdSuffix a suffix to be appended to the cloned element id
				 * @param aLocalIds an array of local IDs within the cloned hierarchy (internally used)
				 * @returns reference to the newly created clone
				 */
				clone(
					sIdSuffix: string,
					aLocalIds?: string[]
				): sap.ui.base.ManagedObject;

				/**
				 * Removes event handlers which have been previously attached using {@link #attachBrowserEvent}.Note:
				 * listeners are only removed, if the same combination of event type, callback functionand context
				 * object is given as in the call to <code>attachBrowserEvent</code>.
				 * @param sEventType A string containing one or more JavaScript event types, such as "click" or "blur".
				 * @param fnHandler The function that is to be no longer executed.
				 * @param oListener The context object that was given in the call to attachBrowserEvent.
				 */
				detachBrowserEvent(
					sEventType: string,
					fnHandler?: any,
					oListener?: any
				): void;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>validateFieldGroup</code> event of
				 * this <code>sap.ui.core.Control</code>.The passed function and listener object must match the ones
				 * used for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachValidateFieldGroup(
					fnFunction: any,
					oListener: any
				): sap.ui.core.Control;

				/**
				 * Fires event <code>validateFieldGroup</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>fieldGroupIds</code> of type <code>string[]</code>field group IDs of the
				 * logical field groups to validate</li></ul>
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireValidateFieldGroup(mArguments: any): sap.ui.core.Control;

				/**
				 * This function (if available on the concrete control) providesthe current accessibility state of the
				 * control.Applications must not call this hook method directly, it is called by the
				 * framework.Subclasses of Control should implement this hook to provide any necessary accessibility
				 * information:<pre>MyControl.prototype.getAccessibilityInfo = function() {   return {     role:
				 * "textbox",      // String which represents the WAI-ARIA role which is implemented by the control.
				 *  type: "date input",   // String which represents the control type (Must be a translated text).
				 * Might correlate with                           // the role.     description: "value", // String
				 * which describes the most relevant control state (e.g. the inputs value). Must be a
				 *         // translated text.                           // Note: The type and the enabled/editable
				 * state must not be handled here.     focusable: true,      // Boolean which describes whether the
				 * control can get the focus.     enabled: true,        // Boolean which describes whether the control
				 * is enabled. If not relevant it must not be set or                           // <code>null</code> can
				 * be provided.     editable: true,       // Boolean which describes whether the control is editable.
				 * If not relevant it must not be set or                           // <code>null</code> can be
				 * provided.     children: []          // Array of accessibility info objects of children of the given
				 * control (e.g. when the control is a layout).                           // Note: Children should only
				 * be provided when it is helpful to understand the accessibility context                           //
				 *      (e.g. a form control must not provide details of its internals (fields, labels, ...) but a
				 *                      //       layout should).   };};</pre>Note: The returned object provides the
				 * accessibility state of the control at the point in time when this function is called.
				 * @since 1.37.0
				 * @returns Current accessibility state of the control.
				 */
				getAccessibilityInfo(): any;

				/**
				 * Gets current value of property <code>busy</code>.Whether the control is currently in busy
				 * state.Default value is <code>false</code>.
				 * @returns Value of property <code>busy</code>
				 */
				getBusy(): boolean;

				/**
				 * Gets current value of property <code>busyIndicatorDelay</code>.The delay in milliseconds, after
				 * which the busy indicator will show up for this control.Default value is <code>1000</code>.
				 * @returns Value of property <code>busyIndicatorDelay</code>
				 */
				getBusyIndicatorDelay(): number;

				/**
				 * Returns a list of all child controls with a field group ID.See {@link #checkFieldGroupIds
				 * checkFieldGroupIds} for a description of the<code>vFieldGroupIds</code> parameter.Associated
				 * controls are not taken into account.
				 * @param vFieldGroupIds ID of the field group or an array of field group IDs to match
				 * @returns The list of controls with a field group ID
				 */
				getControlsByFieldGroupId(
					vFieldGroupIds: string | string[]
				): sap.ui.core.Control[];

				/**
				 * Returns a copy of the field group IDs array. Modification of the field group IDsneed to call {@link
				 * #setFieldGroupIds setFieldGroupIds} to apply the changes.
				 * @returns copy of the field group IDs
				 */
				getFieldGroupIds(): string[];

				/**
				 * Returns the DOMNode Id to be used for the "labelFor" attribute of the label.By default, this is the
				 * Id of the control itself.
				 * @returns Id to be used for the <code>labelFor</code>
				 */
				getIdForLabel(): string;

				/**
				 * Returns a metadata object for class sap.ui.core.Control.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns a renderer for this control instance.It is retrieved using the RenderManager as done during
				 * rendering.
				 * @returns a Renderer suitable for this Control instance.
				 */
				getRenderer(): any;

				/**
				 * Gets current value of property <code>visible</code>.Whether the control should be visible on the
				 * screen. If set to false, a placeholder is rendered instead of the real controlDefault value is
				 * <code>true</code>.
				 * @returns Value of property <code>visible</code>
				 */
				getVisible(): boolean;

				/**
				 * Returns true if the given style class or all multiple style classes which are generated by splitting
				 * the given string with space are already set on the controlvia previous call(s) to addStyleClass().
				 * @param sStyleClass the style to check for
				 */
				hasStyleClass(sStyleClass: string): boolean;

				/**
				 * Triggers rerendering of this element and its children.As <code>sap.ui.core.Element</code> "bubbles
				 * up" the invalidate, changes to childrenpotentially result in rerendering of the whole sub tree.
				 * @param oOrigin undefined
				 */
				invalidate(oOrigin?: any): void;

				/**
				 * Check if the control is currently in busy state
				 */
				isBusy(): void;

				/**
				 * Function is called when the rendering of the control is completed.Applications must not call this
				 * hook method directly, it is called by the framework.Subclasses of Control should override this hook
				 * to implement any necessary actions after the rendering.
				 */
				onAfterRendering(): void;

				/**
				 * Function is called before the rendering of the control is started.Applications must not call this
				 * hook method directly, it is called by the framework.Subclasses of Control should override this hook
				 * to implement any necessary actions before the rendering.
				 */
				onBeforeRendering(): void;

				/**
				 * Puts <code>this</code> control into the specified container (<code>oRef</code>) at the givenposition
				 * (<code>oPosition</code>).First it is checked whether <code>oRef</code> is a container element /
				 * control (has amultiple aggregation with type <code>sap.ui.core.Control</code> and name 'content') or
				 * is an Id Stringof such an container.If this is not the case <code>oRef</code> can either be a Dom
				 * Reference or Id String of the UIArea(if it does not yet exist implicitly a new UIArea is
				 * created),The <code>oPosition</code> can be one of the following:<ul> <li>"first": The control is
				 * added as the first element to the container.</li> <li>"last": The control is added as the last
				 * element to the container (default).</li> <li>"only": All existing children of the container are
				 * removed (not destroyed!) and the control is added as new child.</li> <li><i>index</i>: The control
				 * is added at the specified <i>index</i> to the container.</li></ul>
				 * @param oRef container into which the control should be put
				 * @param oPosition Describes the position where the control should be put into the container
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				placeAt(
					oRef: string | sap.ui.core.Element | sap.ui.core.Control,
					oPosition: string | number
				): sap.ui.core.Control;

				/**
				 * Puts <code>this</code> control into the specified container (<code>oRef</code>) at the givenposition
				 * (<code>oPosition</code>).First it is checked whether <code>oRef</code> is a container element /
				 * control (has amultiple aggregation with type <code>sap.ui.core.Control</code> and name 'content') or
				 * is an Id Stringof such an container.If this is not the case <code>oRef</code> can either be a Dom
				 * Reference or Id String of the UIArea(if it does not yet exist implicitly a new UIArea is
				 * created),The <code>oPosition</code> can be one of the following:<ul> <li>"first": The control is
				 * added as the first element to the container.</li> <li>"last": The control is added as the last
				 * element to the container (default).</li> <li>"only": All existing children of the container are
				 * removed (not destroyed!) and the control is added as new child.</li> <li><i>index</i>: The control
				 * is added at the specified <i>index</i> to the container.</li></ul>
				 * @param oRef container into which the control should be put
				 * @param oPosition Describes the position where the control should be put into the container
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				placeAt(oPosition: string | number): sap.ui.core.Control;

				/**
				 * Removes the given string from the list of custom style classes that have been set previously.Regular
				 * style classes like "sapUiBtn" cannot be removed.
				 * @param sStyleClass the style to be removed
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				removeStyleClass(sStyleClass: string): sap.ui.core.Control;

				/**
				 * Tries to replace its DOM reference by re-rendering.
				 */
				rerender(): void;

				/**
				 * Set the controls busy state.
				 * @param bBusy The new busy state to be set
				 * @returns <code>this</code> to allow method chaining
				 */
				setBusy(bBusy: boolean): sap.ui.core.Control;

				/**
				 * Define the delay, after which the busy indicator will show up
				 * @param iDelay The delay in ms
				 * @returns <code>this</code> to allow method chaining
				 */
				setBusyIndicatorDelay(iDelay: number): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>fieldGroupIds</code>.The IDs of a logical field group that this
				 * control belongs to. All fields in a logical field group should share the same
				 * <code>fieldGroupId</code>.Once a logical field group is left, the validateFieldGroup event is
				 * raised.When called with a value of <code>null</code> or <code>undefined</code>, the default value of
				 * the property will be restored.Default value is <code>[]</code>.
				 * @since 1.31
				 * @param sFieldGroupIds New value for property <code>fieldGroupIds</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setFieldGroupIds(sFieldGroupIds: string[]): sap.ui.core.Control;

				/**
				 * Sets a new value for property <code>visible</code>.Whether the control should be visible on the
				 * screen. If set to false, a placeholder is rendered instead of the real controlWhen called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>true</code>.
				 * @param bVisible New value for property <code>visible</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVisible(bVisible: boolean): sap.ui.core.Control;

				/**
				 * The string given as "sStyleClass" will be be either added to or removed from the "class" attribute
				 * of this control's root HTML element,depending on the value of "bAdd": if bAdd is true, sStyleClass
				 * will be added.If bAdd is not given, sStyleClass will be removed if it is currently present and will
				 * be added if not present.If sStyleClass is null or empty string, the call is ignored.See
				 * addStyleClass and removeStyleClass for further documentation.
				 * @param sStyleClass the CSS class name to be added or removed
				 * @param bAdd whether sStyleClass should be added (or removed); when this parameter is not given,
				 * sStyleClass will be toggled (removed, if present, and added if not present)
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				toggleStyleClass(
					sStyleClass: string,
					bAdd: boolean
				): sap.ui.core.Control;

				/**
				 * Triggers the validateFieldGroup event for this control.Called by sap.ui.core.UIArea if a field group
				 * should be validated after is loses the focus or a validation key combibation was pressed.The
				 * validation key is defined in the UI area <code>UIArea._oFieldGroupValidationKey</code>
				 */
				triggerValidateFieldGroup(): void;
			}
			/**
			 * History handles the history of certain controls (e.g. sap.ui.commons.SearchField).
			 * @resource sap/ui/core/History.js
			 */
			class History extends sap.ui.base.Object {
				/**
				 * Returns a metadata object for class sap.ui.core.History.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * Fragments support the definition of light-weight stand-alone UI control trees.This class acts as
			 * factory which returns the UI control tree defined inside the Fragments. When used within declarative
			 * Views,the Fragment content is imported and seamlessly integrated into the View.Fragments are used
			 * similar as sap.ui.core.mvc.Views, but Fragments do not have a Controller on their own (they may know
			 * one, though),they are not a Control, they are not part of the UI tree and they have no
			 * representation in HTML.By default, in contrast to declarative Views, they do not do anything to
			 * guarantee ID uniqueness.But like Views they can be defined in several Formats (XML, declarative
			 * HTML, JavaScript; support for other types can be plugged in),the declaration syntax is the same as
			 * in declarative Views and the name and location of the Fragment files is similar to Views.Controller
			 * methods can also be referenced in the declarations, but as Fragments do not have their own
			 * controllers,this requires the Fragments to be used within a View which does have a controller.That
			 * controller is used, then.Do not call the Fragment constructor directly!Use-cases for Fragments are
			 * e.g.:- Modularization of UIs without fragmenting the controller structure- Re-use of UI parts-
			 * 100%-declarative definition of Views
			 * @resource sap/ui/core/Fragment.js
			 */
			class Fragment extends sap.ui.base.ManagedObject {
				/**
				 * Accepts an object literal <code>mSettings</code> that defines initialproperty values, aggregated and
				 * associated objects as well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a
				 * general description of the syntax of the settings object.
				 */
				constructor();

				/**
				 * Returns an Element/Control by its ID in the context of the Fragment with the given ID
				 * @param sFragmentId undefined
				 * @param sId undefined
				 */
				byId(sFragmentId: string, sId: string): void;

				/**
				 * Returns the ID which a Control with the given ID in the context of the Fragment with the given ID
				 * would have
				 * @param sFragmentId undefined
				 * @param sId undefined
				 */
				createId(sFragmentId: string, sId: string): void;

				/**
				 * Returns a metadata object for class sap.ui.core.Fragment.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>type</code>.
				 * @returns Value of property <code>type</code>
				 */
				getType(): string;

				/**
				 * Registers a new Fragment type
				 * @param sType the Fragment type. Types "XML", "HTML" and JS" are built-in and always available.
				 * @param oFragmentImpl an object having a property "init" of type "function" which is called on
				 * Fragment instantiation with the settings map as argument
				 */
				registerType(sType: string, oFragmentImpl: any): void;

				/**
				 * Sets a new value for property <code>type</code>.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sType New value for property <code>type</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setType(sType: string): sap.ui.core.Fragment;
			}

			namespace ListItem {
				interface Properties extends Item.Properties {
					additionalText?: string;
				}

				type Settings = Properties;
			}
			/**
			 * An item that is used in lists or list-similar controls such as DropdownBox, for example.The element
			 * foresees the usage of additional texts displayed in a second column.
			 * @resource sap/ui/core/ListItem.js
			 */
			class ListItem extends sap.ui.core.Item<ListItem.Properties> {
				/**
				 * Constructor for a new ListItem.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId?: string, mSettings?: ListItem.Settings);
				constructor(mSettings?: ListItem.Settings);

				bindProperty<K extends keyof ListItem.Properties>(
					sProperty: K,
					oBindingInfo: base.PropertyBindingInfo<ListItem.Properties[K]>
				): sap.ui.base.ManagedObject<any, any>;

				/**
				 * Gets current value of property <code>additionalText</code>.Some additional text of type string,
				 * optionally to be displayed along with this item.
				 * @returns Value of property <code>additionalText</code>
				 */
				getAdditionalText(): string;

				/**
				 * Gets current value of property <code>icon</code>.The icon belonging to this list item instance.This
				 * can be an URI to an image or an icon font URI.
				 * @returns Value of property <code>icon</code>
				 */
				getIcon(): string;

				/**
				 * Returns a metadata object for class sap.ui.core.ListItem.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Sets a new value for property <code>additionalText</code>.Some additional text of type string,
				 * optionally to be displayed along with this item.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sAdditionalText New value for property <code>additionalText</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setAdditionalText(sAdditionalText: string): sap.ui.core.ListItem;

				/**
				 * Sets a new value for property <code>icon</code>.The icon belonging to this list item instance.This
				 * can be an URI to an image or an icon font URI.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sIcon New value for property <code>icon</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setIcon(sIcon: string): sap.ui.core.ListItem;
			}
			/**
			 * The Manifest class.
			 * @resource sap/ui/core/Manifest.js
			 */
			class Manifest extends sap.ui.base.Object {
				/**
				 * Creates and initializes a manifest wrapper which provides API access tothe content of the manifest.
				 * @param oManifest the manifest object
				 * @param mOptions (optional) the configuration options
				 */
				constructor(oManifest: any, mOptions?: any);

				/**
				 * Returns the Component name which is defined in the manifest as<code>sap.ui5/componentName</code> or
				 * <code>sap.app/id</code>
				 * @returns the component name
				 */
				getComponentName(): string;

				/**
				 * Returns the configuration of a manifest section or the value for aspecific path. If no key is
				 * specified, the return value is null.Example:<code>  {    "sap.ui5": {      "dependencies": {
				 * "libs": {          "sap.m": {}        },        "components": {          "my.component.a": {}
				 * }      }  });</code>The configuration above can be accessed in the following ways:<ul><li><b>By
				 * section/namespace</b>: <code>oManifest.getEntry("sap.ui5")</code></li><li><b>By path</b>:
				 * <code>oManifest.getEntry("/sap.ui5/dependencies/libs")</code></li></ul>By section/namespace returns
				 * the configuration for the specified manifestsection and by path allows to specify a concrete path to
				 * a dedicated entryinside the manifest. The path syntax always starts with a slash (/).
				 * @param sKey Either the manifest section name (namespace) or a concrete path
				 * @returns Value of the key (could be any kind of value)
				 */
				getEntry(sKey: string): any | any;

				/**
				 * Returns the manifest defined in the metadata of the component.If not specified, the return value is
				 * null.
				 * @returns manifest.
				 */
				getJson(): any;

				/**
				 * Returns a metadata object for class sap.ui.core.Manifest.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the raw manifest defined in the metadata of the component.If not specified, the return value
				 * is null.
				 * @returns manifest
				 */
				getRawJson(): any;

				/**
				 * Function to load the manifest by URL
				 * @param mOptions the configuration options
				 * @returns Manifest object or for asynchronous calls an ECMA Script 6 Promise object will be returned.
				 */
				load(mOptions: any): sap.ui.core.Manifest | JQueryPromise<any>;
			}
			/**
			 * Provides eventing capabilities for applications like firing events and attaching or detaching event
			 *      handlers for events which are notified when events are fired.
			 * @resource sap/ui/core/EventBus.js
			 */
			class EventBus extends sap.ui.base.Object {
				/**
				 * Creates an instance of EventBus.
				 */
				constructor();

				/**
				 * Cleans up the internal structures and removes all event handlers.The object must not be used anymore
				 * after destroy was called.
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 * Returns a metadata object for class sap.ui.core.EventBus.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Fires an event using the specified settings and notifies all attached event handlers.
				 * @param sChannelId The channel of the event to fire. If not given, the default channel is used. The
				 * channel <code>"sap.ui"</code> is                        reserved by the UI5 framework. An
				 * application might listen to events on this channel but is not allowed                        to
				 * publish its own events there.
				 * @param sEventId The identifier of the event to fire
				 * @param oData The parameters which should be carried by the event
				 */
				publish(sChannelId: string, sEventId: string, oData?: any): void;

				/**
				 * Attaches an event handler to the event with the given identifier on the given event channel.
				 * @param sChannelId The channel of the event to subscribe to. If not given, the default channel is
				 * used.                        The channel <code>"sap.ui"</code> is reserved by the UI5 framework. An
				 * application might listen to                        events on this channel but is not allowed to
				 * publish its own events there.
				 * @param sEventId The identifier of the event to listen for
				 * @param fnFunction The handler function to call when the event occurs. This function will be called
				 * in the context of the                      <code>oListener</code> instance (if present) or on the
				 * event bus instance. The channel is provided as first argument of the handler, and
				 *   the event identifier is provided as the second argument. The parameter map carried by the event is
				 * provided as the third argument (if present).                      Handlers must not change the
				 * content of this map.
				 * @param oListener The object that wants to be notified when the event occurs (<code>this</code>
				 * context within the                       handler function). If it is not specified, the handler
				 * function is called in the context of the event bus.
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				subscribe(
					sChannelId: string,
					sEventId: string,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.EventBus;

				/**
				 * Attaches an event handler, called one time only, to the event with the given identifier on the given
				 * event channel.When the event occurs, the handler function is called and the handler registration is
				 * automatically removed afterwards.
				 * @since 1.32.0
				 * @param sChannelId The channel of the event to subscribe to. If not given, the default channel is
				 * used.                        The channel <code>"sap.ui"</code> is reserved by the UI5 framework. An
				 * application might listen to                        events on this channel but is not allowed to
				 * publish its own events there.
				 * @param sEventId The identifier of the event to listen for
				 * @param fnFunction The handler function to call when the event occurs. This function will be called
				 * in the context of the                      <code>oListener</code> instance (if present) or on the
				 * event bus instance. The channel is provided as first argument of the handler, and
				 *   the event identifier is provided as the second argument. The parameter map carried by the event is
				 * provided as the third argument (if present).                      Handlers must not change the
				 * content of this map.
				 * @param oListener The object that wants to be notified when the event occurs (<code>this</code>
				 * context within the                       handler function). If it is not specified, the handler
				 * function is called in the context of the event bus.
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				subscribeOnce(
					sChannelId: string,
					sEventId: string,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.EventBus;

				/**
				 * Removes a previously subscribed event handler from the event with the given identifier on the given
				 * event channel.The passed parameters must match those used for registration with {@link #subscribe }
				 * beforehand!
				 * @param sChannelId The channel of the event to unsubscribe from. If not given, the default channel is
				 * used.
				 * @param sEventId The identifier of the event to unsubscribe from
				 * @param fnFunction The handler function to unsubscribe from the event
				 * @param oListener The object that wanted to be notified when the event occurred
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				unsubscribe(
					sChannelId: string,
					sEventId: string,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.EventBus;
			}
			/**
			 * Base Class for Component.
			 * @resource sap/ui/core/Component.js
			 */
			abstract class Component extends sap.ui.base.ManagedObject {
				/**
				 * Creates and initializes a new Component with the given <code>sId</code> andsettings.The set of
				 * allowed entries in the <code>mSettings</code> object depends onthe concrete subclass and is
				 * described there. See {@link sap.ui.core.Component}for a general description of this argument.Accepts
				 * an object literal <code>mSettings</code> that defines initialproperty values, aggregated and
				 * associated objects as well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a
				 * general description of the syntax of the settings object.This class does not have its own settings,
				 * but all settings applicable to the base type{@link sap.ui.base.ManagedObject#constructor
				 * sap.ui.base.ManagedObject} can be used.
				 * @param sId Optional ID for the new control; generated automatically if           no non-empty ID is
				 * given. Note: this can be omitted, no matter           whether <code>mSettings</code> are given or
				 * not!
				 * @param mSettings Optional map or JSON-object with initial settings for the           new Component
				 * instance
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Cleans up the Component instance before destruction.Applications must not call this hook method
				 * directly, it is called by theframework when the element is {@link #destroy destroyed}.Subclasses of
				 * Component should override this hook to implement any necessarycleanup.
				 */
				exit(): void;

				/**
				 * Returns user specific data object
				 * @since 1.15.0
				 * @returns componentData
				 */
				getComponentData(): any;

				/**
				 * Returns the event bus of this component.
				 * @since 1.20.0
				 * @returns the event bus
				 */
				getEventBus(): sap.ui.core.EventBus;

				/**
				 */
				getInterface(): sap.ui.base.Interface;

				/**
				 * Returns the manifest defined in the metadata of the component.If not specified, the return value is
				 * null.
				 * @since 1.33.0
				 * @returns manifest.
				 */
				getManifest(): any;

				/**
				 * Returns the configuration of a manifest section or the value for aspecific path. If no section or
				 * key is specified, the return value is null.Example:<code>  {    "sap.ui5": {      "dependencies": {
				 *       "libs": {          "sap.m": {}        },        "components": {          "my.component.a": {}
				 *       }      }  });</code>The configuration above can be accessed in the following
				 * ways:<ul><li><b>By section/namespace</b>:
				 * <code>oComponent.getManifestEntry("sap.ui5")</code></li><li><b>By path</b>:
				 * <code>oComponent.getManifestEntry("/sap.ui5/dependencies/libs")</code></li></ul>By section/namespace
				 * returns the configuration for the specified manifestsection and by path allows to specify a concrete
				 * path to a dedicated entryinside the manifest. The path syntax always starts with a slash (/).
				 * @since 1.33.0
				 * @param sKey Either the manifest section name (namespace) or a concrete path
				 * @returns Value of the manifest section or the key (could be any kind of value)
				 */
				getManifestEntry(sKey: string): any | any;

				/**
				 * Returns the manifest object.
				 * @since 1.33.0
				 * @returns manifest.
				 */
				getManifestObject(): sap.ui.core.Manifest;

				/**
				 * Returns the metadata for the specific class of the current instance.
				 * @returns Metadata for the specific class of the current instance.
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the metadata for the Component class.
				 * @returns Metadata for the Component class.
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the Component instance in whose "context" the given ManagedObject has been createdor
				 * <code>undefined</code>.This is a convenience wrapper around {@link
				 * sap.ui.core.Component.getOwnerIdFor Component.getOwnerIdFor}.If the owner ID cannot be determined
				 * for reasons documented on <code>getOwnerForId</code>or when the Component for the determined ID no
				 * longer exists, <code>undefined</code>will be returned.
				 * @since 1.25.1
				 * @param oObject Object to retrieve the owner Component for
				 * @returns the owner Component or <code>undefined</code>.
				 */
				getOwnerComponentFor(
					oObject: sap.ui.base.ManagedObject
				): sap.ui.core.Component;

				/**
				 * Returns the ID of the object in whose "context" the given ManagedObject has been created.For objects
				 * that are not ManagedObjects or for which the owner is unknown,<code>undefined</code> will be
				 * returned as owner ID.<strong>Note</strong>: Ownership for objects is only checked by the framework
				 * at the timewhen they are created. It is not checked or updated afterwards. And it can only be
				 * detectedwhile the {@link sap.ui.core.Component.runAsOwner Component.runAsOwner} function is
				 * executing.Without further action, this is only the case while the content of an UIComponent is{@link
				 * sap.ui.core.UIComponent.createContent constructed} or when a{@link sap.ui.core.routing.Router
				 * Router} creates a new View and its content.<strong>Note</strong>: This method does not guarantee
				 * that the returned owner ID belongsto a Component. Currently, it always does. But future versions of
				 * UI5 might introduce amore fine grained ownership concept, e.g. taking Views into account. Callers
				 * thatwant to deal only with components as owners, should use the following method:{@link
				 * sap.ui.core.Component.getOwnerComponentFor Component.getOwnerComponentFor}.It guarantees that the
				 * returned object (if any) will be a Component.<strong>Further note</strong> that only the ID of the
				 * owner is recorded. In rare cases,when the lifecycle of a ManagedObject is not bound to the lifecycle
				 * of its owner,(e.g. by the means of aggregations), then the owner might have been destroyed
				 * alreadywhereas the ManagedObject is still alive. So even the existence of an owner ID isnot a
				 * guarantee for the existence of the corresponding owner.
				 * @since 1.15.1
				 * @param oObject Object to retrieve the owner ID for
				 * @returns ID of the owner or <code>undefined</code>
				 */
				getOwnerIdFor(oObject: sap.ui.base.ManagedObject): string;

				/**
				 * Returns a service interface for the {@link sap.ui.core.service.Service Service}declared in the
				 * descriptor for components (manifest.json). The declaration needsto be done in the
				 * <code>sap.ui5/services</code> section as follows:<pre>{  [...]  "sap.ui5": {    "services": {
				 * "myLocalServiceAlias": {        "factoryName": "my.ServiceFactory",        ["optional": true]      }
				 *    }  }  [...]}</pre>The service declaration is used to define a mapping between the localalias for
				 * the service that can be used in the Component and the name ofthe service factory which will be used
				 * to create a service instance.The <code>getService</code> function will look up the service factory
				 * and willcreate a new instance by using the service factory function{@link
				 * sap.ui.core.service.ServiceFactory#createInstance createInstance}The optional property defines that
				 * the service is not mandatory and theusage will not depend on the availability of this service. When
				 * requestingan optional service the <code>getService</code> function will reject butthere will be no
				 * error logged in the console.When creating a new instance of the service the Component context will
				 * bepassed as <code>oServiceContext</code> as follows:<pre>{  "scopeObject": this,     // the
				 * Component instance  "scopeType": "component" // the stereotype of the scopeObject}</pre>The service
				 * will be created only once per Component and reused in futurecalls to the <code>getService</code>
				 * function.<p>This function will return a <code>Promise</code> which provides the serviceinterface
				 * when resolved. If the <code>factoryName</code> could notbe found in the {@link
				 * sap.ui.core.service.ServiceFactoryRegistry Service Factory Registry}or the service declaration in
				 * the descriptor for components (manifest.json)is missing the Promise will reject.This is an example
				 * of how the <code>getService</code> function can be
				 * used:<pre>oComponent.getService("myLocalServiceAlias").then(function(oService) {
				 * oService.doSomething();}).catch(function(oError) {  jQuery.sap.log.error(oError);});</pre>
				 * @since 1.37.0
				 * @param sLocalServiceAlias Local service alias as defined in the manifest.json
				 * @returns Promise which will be resolved with the Service interface
				 */
				getService(sLocalServiceAlias: string): JQueryPromise<any>;

				/**
				 * Initializes the Component instance after creation.Applications must not call this hook method
				 * directly, it is called by theframework while the constructor of an Component is executed.Subclasses
				 * of Component should override this hook to implement any necessaryinitialization.
				 */
				init(...args: any[]): void;

				/**
				 * The hook which gets called when the static configuration of the componenthas been changed by some
				 * configuration extension.
				 * @since 1.15.1
				 * @param sConfigKey Error message.
				 */
				onConfigChange(sConfigKey: string): void;

				/**
				 * The window before unload hook. Override this method in your Component classimplementation, to handle
				 * cleanup before the real unload or to prompt a questionto the user, if the component should be
				 * exited.
				 * @since 1.15.1
				 * @returns a string if a prompt should be displayed to the user                 confirming closing the
				 * Component (e.g. when the Component is not yet saved).
				 */
				onWindowBeforeUnload(): string;

				/**
				 * The window error hook. Override this method in your Component class implementationto listen to
				 * unhandled errors.
				 * @since 1.15.1
				 * @param sMessage The error message.
				 * @param sFile File where the error occurred
				 * @param iLine Line number of the error
				 */
				onWindowError(sMessage: string, sFile: string, iLine: number): void;

				/**
				 * The window unload hook. Override this method in your Component classimplementation, to handle
				 * cleanup of the component once the windowwill be unloaded (e.g. closed).
				 * @since 1.15.1
				 */
				onWindowUnload(): void;

				/**
				 * Calls the function <code>fn</code> once and marks all ManagedObjectscreated during that call as
				 * "owned" by this Component.Nested calls of this method are supported (e.g. inside a newly
				 * created,nested component). The currently active owner Component will be rememberedbefore executing
				 * <code>fn</code> and restored afterwards.
				 * @since 1.25.1
				 * @param fn Function to execute
				 * @returns result of function <code>fn</code>
				 */
				runAsOwner(fn: any): any;
			}
			/**
			 * The ScrollBar control can be used for virtual scrolling of a certain area.This means: to simulate a
			 * very large scrollable area when technically the area is small and the control takes care of
			 * displaying the respective part only. E.g. a Table control can take care of only rendering the
			 * currently visible rows and use this ScrollBar control to make the user think he actually scrolls
			 * through a long list.
			 * @resource sap/ui/core/ScrollBar.js
			 */
			class ScrollBar extends sap.ui.core.Control {
				/**
				 * Constructor for a new ScrollBar.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>scroll</code> event of this
				 * <code>sap.ui.core.ScrollBar</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.core.ScrollBar</code> itself.Scroll event.
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.core.ScrollBar</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachScroll(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.ScrollBar;

				/**
				 * Binds the mouse wheel scroll event of the control that has the scrollbar to the scrollbar itself.
				 * @param oOwnerDomRef Dom ref of the control that uses the scrollbar
				 */
				bind(oOwnerDomRef: string): void;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>scroll</code> event of this
				 * <code>sap.ui.core.ScrollBar</code>.The passed function and listener object must match the ones used
				 * for event registration.
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachScroll(fnFunction: any, oListener: any): sap.ui.core.ScrollBar;

				/**
				 * Fires event <code>scroll</code> to attached listeners.Expects the following event
				 * parameters:<ul><li><code>action</code> of type <code>sap.ui.core.ScrollBarAction</code>Actions are:
				 * Click on track, button, drag of thumb, or mouse wheel click.</li><li><code>forward</code> of type
				 * <code>boolean</code>Direction of scrolling: back (up) or forward
				 * (down).</li><li><code>newScrollPos</code> of type <code>int</code>Current Scroll position either in
				 * pixels or in steps.</li><li><code>oldScrollPos</code> of type <code>int</code>Old Scroll position -
				 * can be in pixels or in steps.</li></ul>
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireScroll(mArguments: any): sap.ui.core.ScrollBar;

				/**
				 * Gets current value of property <code>contentSize</code>.Size of the scrollable content (in pixels).
				 * @returns Value of property <code>contentSize</code>
				 */
				getContentSize(): any;

				/**
				 * Returns a metadata object for class sap.ui.core.ScrollBar.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>scrollPosition</code>.Scroll position in steps or pixels.
				 * @returns Value of property <code>scrollPosition</code>
				 */
				getScrollPosition(): number;

				/**
				 * Gets current value of property <code>size</code>.Size of the Scrollbar (in pixels).
				 * @returns Value of property <code>size</code>
				 */
				getSize(): any;

				/**
				 * Gets current value of property <code>steps</code>.Number of steps to scroll. Used if the size of the
				 * content is not known as the data is loaded dynamically.
				 * @returns Value of property <code>steps</code>
				 */
				getSteps(): number;

				/**
				 * Gets current value of property <code>vertical</code>.Orientation. Defines if the Scrollbar is
				 * vertical or horizontal.Default value is <code>true</code>.
				 * @returns Value of property <code>vertical</code>
				 */
				getVertical(): boolean;

				/**
				 * Page Down is used to scroll one page forward.
				 */
				pageDown(): void;

				/**
				 * Page Up is used to scroll one page back.
				 */
				pageUp(): void;

				/**
				 * Sets a new value for property <code>contentSize</code>.Size of the scrollable content (in
				 * pixels).When called with a value of <code>null</code> or <code>undefined</code>, the default value
				 * of the property will be restored.
				 * @param sContentSize New value for property <code>contentSize</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setContentSize(sContentSize: any): sap.ui.core.ScrollBar;

				/**
				 * Sets a new value for property <code>scrollPosition</code>.Scroll position in steps or pixels.When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.
				 * @param iScrollPosition New value for property <code>scrollPosition</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setScrollPosition(iScrollPosition: number): sap.ui.core.ScrollBar;

				/**
				 * Sets a new value for property <code>size</code>.Size of the Scrollbar (in pixels).When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param sSize New value for property <code>size</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSize(sSize: any): sap.ui.core.ScrollBar;

				/**
				 * Sets a new value for property <code>steps</code>.Number of steps to scroll. Used if the size of the
				 * content is not known as the data is loaded dynamically.When called with a value of <code>null</code>
				 * or <code>undefined</code>, the default value of the property will be restored.
				 * @param iSteps New value for property <code>steps</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSteps(iSteps: number): sap.ui.core.ScrollBar;

				/**
				 * Sets a new value for property <code>vertical</code>.Orientation. Defines if the Scrollbar is
				 * vertical or horizontal.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.Default value is <code>true</code>.
				 * @param bVertical New value for property <code>vertical</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setVertical(bVertical: boolean): sap.ui.core.ScrollBar;

				/**
				 * Unbinds the mouse wheel scroll event of the control that has the scrollbar
				 * @param oOwnerDomRef Dom ref of the Control that uses the scrollbar
				 */
				unbind(oOwnerDomRef: string): void;
			}
			/**
			 * Contains a single key/value pair of custom data attached to an Element. See method data().
			 * @resource sap/ui/core/CustomData.js
			 */
			class CustomData extends sap.ui.core.Element {
				/**
				 * Constructor for a new CustomData.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Gets current value of property <code>key</code>.The key of the data in this CustomData object.When
				 * the data is just stored, it can be any string, but when it is to be written to HTML (writeToDom ==
				 * true) then it must also be a valid HTML attribute name (it must conform to the any type
				 * and may contain no colon) to avoid collisions, it also may not start with "sap-ui". When written to
				 * HTML, the key is prefixed with "data-".If any restriction is violated, a warning will be logged and
				 * nothing will be written to the DOM.
				 * @returns Value of property <code>key</code>
				 */
				getKey(): string;

				/**
				 * Returns a metadata object for class sap.ui.core.CustomData.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>value</code>.The data stored in this CustomData object.When the
				 * data is just stored, it can be any JS type, but when it is to be written to HTML (writeToDom ==
				 * true) then it must be a string.If this restriction is violated, a warning will be logged and nothing
				 * will be written to the DOM.
				 * @returns Value of property <code>value</code>
				 */
				getValue(): any;

				/**
				 * Gets current value of property <code>writeToDom</code>.If set to "true" and the value is of type
				 * "string" and the key conforms to the documented restrictions, this custom data is written to the
				 * HTML root element of the control as a "data-*" attribute.If the key is "abc" and the value is "cde",
				 * the HTML will look as follows:&lt;SomeTag ... data-abc="cde" ... &gt;Thus the application can
				 * provide stable attributes by data binding which can be used for styling or identification
				 * purposes.ATTENTION: use carefully to not create huge attributes or a large number of them.Default
				 * value is <code>false</code>.
				 * @since 1.9.0
				 * @returns Value of property <code>writeToDom</code>
				 */
				getWriteToDom(): boolean;

				/**
				 * Sets a new value for property <code>key</code>.The key of the data in this CustomData object.When
				 * the data is just stored, it can be any string, but when it is to be written to HTML (writeToDom ==
				 * true) then it must also be a valid HTML attribute name (it must conform to the any type
				 * and may contain no colon) to avoid collisions, it also may not start with "sap-ui". When written to
				 * HTML, the key is prefixed with "data-".If any restriction is violated, a warning will be logged and
				 * nothing will be written to the DOM.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param sKey New value for property <code>key</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setKey(sKey: string): sap.ui.core.CustomData;

				/**
				 * Sets a new value for property <code>value</code>.The data stored in this CustomData object.When the
				 * data is just stored, it can be any JS type, but when it is to be written to HTML (writeToDom ==
				 * true) then it must be a string.If this restriction is violated, a warning will be logged and nothing
				 * will be written to the DOM.When called with a value of <code>null</code> or <code>undefined</code>,
				 * the default value of the property will be restored.
				 * @param oValue New value for property <code>value</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setValue(oValue: any): sap.ui.core.CustomData;

				/**
				 * Sets a new value for property <code>writeToDom</code>.If set to "true" and the value is of type
				 * "string" and the key conforms to the documented restrictions, this custom data is written to the
				 * HTML root element of the control as a "data-*" attribute.If the key is "abc" and the value is "cde",
				 * the HTML will look as follows:&lt;SomeTag ... data-abc="cde" ... &gt;Thus the application can
				 * provide stable attributes by data binding which can be used for styling or identification
				 * purposes.ATTENTION: use carefully to not create huge attributes or a large number of them.When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.Default value is <code>false</code>.
				 * @since 1.9.0
				 * @param bWriteToDom New value for property <code>writeToDom</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWriteToDom(bWriteToDom: boolean): sap.ui.core.CustomData;
			}
			/**
			 * Data provides access to locale-specific data, like date formats, number formats, currencies, etc.
			 * @resource sap/ui/core/LocaleData.js
			 */
			class LocaleData extends sap.ui.base.Object {
				/**
				 * Creates an instance of the Data.
				 * @param oLocale the locale
				 */
				constructor(oLocale: sap.ui.core.Locale);

				/**
				 * Returns the defined pattern for representing the calendar week number.
				 * @since 1.32.0
				 * @param sStyle the style of the pattern. It can only be either "wide" or "narrow".
				 * @param iWeekNumber the week number
				 * @returns the week number string
				 */
				getCalendarWeek(sStyle: string, iWeekNumber: number): string;

				/**
				 * Get combined datetime pattern with given date and and time style
				 * @param sDateStyle the required style for the date part
				 * @param sTimeStyle the required style for the time part
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns the combined datetime pattern
				 */
				getCombinedDateTimePattern(
					sDateStyle: string,
					sTimeStyle: string,
					sCalendarType?: sap.ui.core.CalendarType
				): string;

				/**
				 * Returns the currency code which is corresponded with the given currency symbol.
				 * @since 1.27.0
				 * @param sCurrencySymbol The currency symbol which needs to be converted to currency code
				 * @returns The corresponded currency code defined for the given currency symbol. The given currency
				 * symbol is returned if no currency code can be found by using the given currency symbol.
				 */
				getCurrencyCodeBySymbol(sCurrencySymbol: string): string;

				/**
				 * Returns the number of digits of the specified currency
				 * @since 1.21.1
				 * @param sCurrency ISO 4217 currency code
				 * @returns digits of the currency
				 */
				getCurrencyDigits(sCurrency: string): number;

				/**
				 * Get currency format pattern
				 * @param sContext the context of the currency pattern (standard or accounting)
				 * @returns The pattern
				 */
				getCurrencyPattern(sContext: string): string;

				/**
				 * Returns the currency symbol for the specified currency, if no symbol is found the ISO 4217 currency
				 * code is returned
				 * @since 1.21.1
				 * @param sCurrency ISO 4217 currency code
				 * @returns the currency symbol
				 */
				getCurrencySymbol(sCurrency: string): string;

				/**
				 * Get custom datetime pattern for a given skeleton format.The format string does contain pattern
				 * symbols (e.g. "yMMMd" or "Hms") and will be converted into the pattern in the usedlocale, which
				 * matches the wanted symbols best. The symbols must be in canonical order, that is:Era (G), Year
				 * (y/Y), Quarter (q/Q), Month (M/L), Week (w/W), Day-Of-Week (E/e/c), Day (d/D),Hour (h/H/k/K/),
				 * Minute (m), Second (s), Timezone (z/Z/v/V/O/X/x)See
				 * http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
				 * @since 1.34
				 * @param sSkeleton the wanted skeleton format for the datetime pattern
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns the best matching datetime pattern
				 */
				getCustomDateTimePattern(
					sSkeleton: string,
					sCalendarType?: sap.ui.core.CalendarType
				): string;

				/**
				 * Get date pattern in format "short", "medium", "long" or "full"
				 * @param sStyle the required style for the date pattern
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns the selected date pattern
				 */
				getDatePattern(
					sStyle: string,
					sCalendarType?: sap.ui.core.CalendarType
				): string;

				/**
				 * Get datetime pattern in style "short", "medium", "long" or "full"
				 * @param sStyle the required style for the datetime pattern
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns the selected datetime pattern
				 */
				getDateTimePattern(
					sStyle: string,
					sCalendarType?: sap.ui.core.CalendarType
				): string;

				/**
				 * Get day periods in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the day period names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of day periods (AM, PM)
				 */
				getDayPeriods(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Get standalone day periods in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the day period names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of day periods (AM, PM)
				 */
				getDayPeriodsStandAlone(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Get day names in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the day names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of day names (starting with Sunday)
				 */
				getDays(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Get stand alone day names in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the day names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of day names (starting with Sunday)
				 */
				getDaysStandAlone(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Returns the short decimal formats (like 1K, 1M....)
				 * @since 1.25.0
				 * @param sStyle short or long
				 * @param sNumber 1000, 10000 ...
				 * @param sPlural one or other (if not exists other is used)
				 * @returns decimal format
				 */
				getDecimalFormat(
					sStyle: string,
					sNumber: string,
					sPlural: string
				): string;

				/**
				 * Get decimal format pattern
				 * @returns The pattern
				 */
				getDecimalPattern(): string;

				/**
				 * Returns the display name for a time unit (second, minute, hour, day, week, month, year)
				 * @since 1.34.0
				 * @param sType Type (second, minute, hour, day, week, month, year)
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"returns {string} display name
				 */
				getDisplayName(sType: string, sStyle?: string): void;

				/**
				 * Returns the map of era ids to era dates
				 * @since 1.32.0
				 * @param sCalendarType the type of calendar
				 * @returns the array of eras containing objects with either an _end or _start property with a date
				 */
				getEraDates(sCalendarType: sap.ui.core.CalendarType): any[];

				/**
				 * Returns array of eras
				 * @since 1.32.0
				 * @param sWidth the style of the era name. It can be 'wide', 'abbreviated' or 'narrow'
				 * @param sCalendarType the type of calendar
				 * @returns the array of eras
				 */
				getEras(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Returns the day that usually is regarded as the first dayof a week in the current locale. Days are
				 * encoded as integerwhere sunday=0, monday=1 etc.All week data information in the CLDR is provides for
				 * territories (countries).If the locale of this LocaleData doesn't contain country information (e.g.
				 * if itcontains only a language), then the "likelySubtag" information of the CLDRis taken into account
				 * to guess the "most likely" territory for the locale.
				 * @returns first day of week
				 */
				getFirstDayOfWeek(): number;

				/**
				 * Returns the interval format with the given Id (see CLDR documentation for valid Ids)or the fallback
				 * format if no interval format with that Id is known.The empty Id ("") might be used to retrieve the
				 * interval format fallback.
				 * @since 1.17.0
				 * @param sId Id of the interval format, e.g. "d-d"
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns interval format string with placeholders {0} and {1}
				 */
				getIntervalPattern(
					sId: string,
					sCalendarType?: sap.ui.core.CalendarType
				): string;

				/**
				 * Get locale specific language names
				 * @returns map of locale specific language names
				 */
				getLanguages(): any;

				/**
				 * Returns a metadata object for class sap.ui.core.LocaleData.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Get month names in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the month names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of month names (starting with January)
				 */
				getMonths(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Get stand alone month names in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the month names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of month names (starting with January)
				 */
				getMonthsStandAlone(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Get number symbol "decimal", "group", "plusSign", "minusSign", "percentSign"
				 * @param sType the required type of symbol
				 * @returns the selected number symbol
				 */
				getNumberSymbol(sType: string): string;

				/**
				 * Get orientation (left-to-right or right-to-left)
				 * @returns character orientation for this locale
				 */
				getOrientation(): string;

				/**
				 * Get percent format pattern
				 * @returns The pattern
				 */
				getPercentPattern(): string;

				/**
				 * Returns the preferred calendar type for the current locale which exists in {@link
				 * sap.ui.core.CalendarType}returns {sap.ui.core.CalendarType} the preferred calendar type
				 * @since 1.28.6
				 */
				getPreferredCalendarType(): void;

				/**
				 * Returns the preferred hour pattern symbol (h for 12, H for 24 hours) for the current localereturns
				 * {string} the preferred hour symbol
				 * @since 1.34
				 */
				getPreferredHourSymbol(): void;

				/**
				 * Get quarter names in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the quarter names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of quarters
				 */
				getQuarters(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Get stand alone quarter names in width "narrow", "abbreviated" or "wide"
				 * @param sWidth the required width for the quarter names
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns array of quarters
				 */
				getQuartersStandAlone(
					sWidth: string,
					sCalendarType?: sap.ui.core.CalendarType
				): any[];

				/**
				 * Returns the relative day resource pattern (like "Today", "Yesterday", "{0} days ago") based on the
				 * givendifference of days (0 means today, 1 means tommorrow, -1 means yesterday, ...).
				 * @since 1.25.0
				 * @param iDiff the difference in days
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative day resource pattern
				 */
				getRelativeDay(iDiff: number, sStyle?: string): string;

				/**
				 * Returns the relative resource pattern with unit 'hour' (like "in {0} hour(s)", "{0} hour(s) ago"
				 * under locale 'en') based on the givendifference value (positive value means in the future and
				 * negative value means in the past).There's no pattern defined for 0 difference and the function
				 * returns null if 0 is given. In the 0 difference case, you can use the getRelativeMinute or
				 * getRelativeSecondfunction to format the difference using unit 'minute' or 'second'.
				 * @since 1.31.0
				 * @param iDiff the difference in hours
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative resource pattern in unit 'hour'. The method returns null if 0 is given as
				 * parameter.
				 */
				getRelativeHour(iDiff: number, sStyle?: string): string | any;

				/**
				 * Returns the relative resource pattern with unit 'minute' (like "in {0} minute(s)", "{0} minute(s)
				 * ago" under locale 'en') based on the givendifference value (positive value means in the future and
				 * negative value means in the past).There's no pattern defined for 0 difference and the function
				 * returns null if 0 is given. In the 0 difference case, you can use the getRelativeSecondfunction to
				 * format the difference using unit 'second'.
				 * @since 1.31.0
				 * @param iDiff the difference in minutes
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative resource pattern in unit 'minute'. The method returns null if 0 is given as
				 * parameter.
				 */
				getRelativeMinute(iDiff: number, sStyle?: string): string | any;

				/**
				 * Returns the relative month resource pattern (like "This month", "Last month", "{0} months ago")
				 * based on the givendifference of months (0 means this month, 1 means next month, -1 means last month,
				 * ...).
				 * @since 1.25.0
				 * @param iDiff the difference in months
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative month resource pattern
				 */
				getRelativeMonth(iDiff: number, sStyle?: string): string;

				/**
				 * Returns the relative format pattern with given scale (year, month, week, ...) and difference value
				 * @since 1.34
				 * @param sScale the scale the relative pattern is needed for
				 * @param iDiff the difference in the given scale unit
				 * @param bFuture whether a future or past pattern should be used
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative format pattern
				 */
				getRelativePattern(
					sScale: string,
					iDiff: number,
					bFuture?: boolean,
					sStyle?: string
				): string;

				/**
				 * Returns relative time patterns for the given scales as an array of objects containing scale, value
				 * and pattern.The array may contain the following values: "year", "month", "week", "day", "hour",
				 * "minute" and "second". Ifno scales are given, patterns for all available scales will be returned.The
				 * return array will contain objects looking like:{    scale: "minute",    sign: 1,    pattern: "in {0}
				 * minutes"}
				 * @since 1.34
				 * @param aScales The scales for which the available patterns should be returned
				 * @param sStyle @since 1.32.10, 1.34.4 The style of the scale patterns. The valid values are "wide",
				 * "short" and "narrow".
				 * @returns An array of all relative time patterns
				 */
				getRelativePatterns(aScales: string[], sStyle?: string): any[];

				/**
				 * Returns the relative resource pattern with unit 'second' (like now, "in {0} seconds", "{0} seconds
				 * ago" under locale 'en') based on the givendifference value (0 means now, positive value means in the
				 * future and negative value means in the past).
				 * @since 1.31.0
				 * @param iDiff the difference in seconds
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative resource pattern in unit 'second'
				 */
				getRelativeSecond(iDiff: number, sStyle?: string): string;

				/**
				 * Returns the relative week resource pattern (like "This week", "Last week", "{0} weeks ago") based on
				 * the givendifference of weeks (0 means this week, 1 means next week, -1 means last week, ...).
				 * @since 1.31.0
				 * @param iDiff the difference in weeks
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative week resource pattern
				 */
				getRelativeWeek(iDiff: number, sStyle?: string): string;

				/**
				 * Returns the relative year resource pattern (like "This year", "Last year", "{0} year ago") based on
				 * the givendifference of years (0 means this year, 1 means next year, -1 means last year, ...).
				 * @since 1.25.0
				 * @param iDiff the difference in years
				 * @param sStyle @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short"
				 * and "narrow"
				 * @returns the relative year resource pattern
				 */
				getRelativeYear(iDiff: number, sStyle?: string): string;

				/**
				 * Get locale specific script names
				 * @returns map of locale specific script names
				 */
				getScripts(): any;

				/**
				 * Get locale specific territory names
				 * @returns map of locale specific territory names
				 */
				getTerritories(): any;

				/**
				 * Get time pattern in style "short", "medium", "long" or "full"
				 * @param sStyle the required style for the date pattern
				 * @param sCalendarType the type of calendar. If it's not set, it falls back to the calendar type
				 * either set in configuration or calculated from locale.
				 * @returns the selected time pattern
				 */
				getTimePattern(
					sStyle: string,
					sCalendarType?: sap.ui.core.CalendarType
				): string;

				/**
				 * Returns the last day of a weekend for the given locale.Days are encoded in the same way as for
				 * {@link #getFirstDayOfWeek}.All week data information in the CLDR is provides for territories
				 * (countries).If the locale of this LocaleData doesn't contain country information (e.g. if itcontains
				 * only a language), then the "likelySubtag" information of the CLDRis taken into account to guess the
				 * "most likely" territory for the locale.
				 * @returns last day of weekend
				 */
				getWeekendEnd(): number;

				/**
				 * Returns the first day of a weekend for the given locale.Days are encoded in the same way as for
				 * {@link #getFirstDayOfWeek}.All week data information in the CLDR is provides for territories
				 * (countries).If the locale of this LocaleData doesn't contain country information (e.g. if itcontains
				 * only a language), then the "likelySubtag" information of the CLDRis taken into account to guess the
				 * "most likely" territory for the locale.
				 * @returns first day of weekend
				 */
				getWeekendStart(): number;
			}
			/**
			 * A layout data base type.
			 * @resource sap/ui/core/LayoutData.js
			 */
			class LayoutData extends sap.ui.core.Element {
				/**
				 * Constructor for a new LayoutData.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Returns a metadata object for class sap.ui.core.LayoutData.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * Abstract class that can be extended in order to implement any extended tooltip. For example,
			 * RichTooltip Control is based on it. It provides the opening/closing behavior and the main "text"
			 * property.
			 * @resource sap/ui/core/TooltipBase.js
			 */
			class TooltipBase extends sap.ui.core.Control {
				/**
				 * Constructor for a new TooltipBase.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Attaches event handler <code>fnFunction</code> to the <code>closed</code> event of this
				 * <code>sap.ui.core.TooltipBase</code>.When called, the context of the event handler (its
				 * <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound
				 * to this <code>sap.ui.core.TooltipBase</code> itself.This event is fired when the Tooltip has been
				 * closed
				 * @since 1.11.0
				 * @param oData An application-specific payload object that will be passed to the event handler along
				 * with the event object when firing the event
				 * @param fnFunction The function to be called when the event occurs
				 * @param oListener Context object to call the event handler with. Defaults to this
				 * <code>sap.ui.core.TooltipBase</code> itself
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				attachClosed(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.core.TooltipBase;

				/**
				 * Detaches event handler <code>fnFunction</code> from the <code>closed</code> event of this
				 * <code>sap.ui.core.TooltipBase</code>.The passed function and listener object must match the ones
				 * used for event registration.
				 * @since 1.11.0
				 * @param fnFunction The function to be called, when the event occurs
				 * @param oListener Context object on which the given function had to be called
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				detachClosed(fnFunction: any, oListener: any): sap.ui.core.TooltipBase;

				/**
				 * Fires event <code>closed</code> to attached listeners.
				 * @since 1.11.0
				 * @param mArguments The arguments to pass along with the event
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				fireClosed(mArguments: any): sap.ui.core.TooltipBase;

				/**
				 * Gets current value of property <code>atPosition</code>.Optional. At position defines which position
				 * on the target control to align the positioned tooltip.Default value is <code>begin bottom</code>.
				 * @returns Value of property <code>atPosition</code>
				 */
				getAtPosition(): any;

				/**
				 * Gets current value of property <code>closeDelay</code>.Closing delay of the tooltip in
				 * millisecondsDefault value is <code>100</code>.
				 * @returns Value of property <code>closeDelay</code>
				 */
				getCloseDelay(): number;

				/**
				 * Gets current value of property <code>closeDuration</code>.Optional. Close Duration in
				 * milliseconds.Default value is <code>200</code>.
				 * @returns Value of property <code>closeDuration</code>
				 */
				getCloseDuration(): number;

				/**
				 * Gets current value of property <code>collision</code>.Optional. Collision - when the positioned
				 * element overflows the window in some direction, move it to an alternative position.Default value is
				 * <code>flip</code>.
				 * @returns Value of property <code>collision</code>
				 */
				getCollision(): any;

				/**
				 * Returns a metadata object for class sap.ui.core.TooltipBase.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>myPosition</code>.Optional. My position defines which position
				 * on the extended tooltip being positioned to align with the target control.Default value is
				 * <code>begin top</code>.
				 * @returns Value of property <code>myPosition</code>
				 */
				getMyPosition(): any;

				/**
				 * Gets current value of property <code>offset</code>.Optional. Offset adds these left-top values to
				 * the calculated position.Example: "10 3".Default value is <code>10 3</code>.
				 * @returns Value of property <code>offset</code>
				 */
				getOffset(): string;

				/**
				 * Gets current value of property <code>openDelay</code>.Opening delay of the tooltip in
				 * millisecondsDefault value is <code>500</code>.
				 * @returns Value of property <code>openDelay</code>
				 */
				getOpenDelay(): number;

				/**
				 * Gets current value of property <code>openDuration</code>.Optional. Open Duration in
				 * milliseconds.Default value is <code>200</code>.
				 * @returns Value of property <code>openDuration</code>
				 */
				getOpenDuration(): number;

				/**
				 * Gets current value of property <code>text</code>.The text that is shown in the tooltip that extends
				 * the TooltipBase class, for example in RichTooltip.Default value is <code></code>.
				 * @returns Value of property <code>text</code>
				 */
				getText(): string;

				/**
				 * Sets a new value for property <code>atPosition</code>.Optional. At position defines which position
				 * on the target control to align the positioned tooltip.When called with a value of <code>null</code>
				 * or <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code>begin bottom</code>.
				 * @param sAtPosition New value for property <code>atPosition</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setAtPosition(sAtPosition: any): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>closeDelay</code>.Closing delay of the tooltip in
				 * millisecondsWhen called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>100</code>.
				 * @param iCloseDelay New value for property <code>closeDelay</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setCloseDelay(iCloseDelay: number): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>closeDuration</code>.Optional. Close Duration in
				 * milliseconds.When called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>200</code>.
				 * @param iCloseDuration New value for property <code>closeDuration</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setCloseDuration(iCloseDuration: number): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>collision</code>.Optional. Collision - when the positioned
				 * element overflows the window in some direction, move it to an alternative position.When called with
				 * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>flip</code>.
				 * @param sCollision New value for property <code>collision</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setCollision(sCollision: any): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>myPosition</code>.Optional. My position defines which position
				 * on the extended tooltip being positioned to align with the target control.When called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>begin top</code>.
				 * @param sMyPosition New value for property <code>myPosition</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setMyPosition(sMyPosition: any): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>offset</code>.Optional. Offset adds these left-top values to the
				 * calculated position.Example: "10 3".When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is <code>10
				 * 3</code>.
				 * @param sOffset New value for property <code>offset</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setOffset(sOffset: string): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>openDelay</code>.Opening delay of the tooltip in
				 * millisecondsWhen called with a value of <code>null</code> or <code>undefined</code>, the default
				 * value of the property will be restored.Default value is <code>500</code>.
				 * @param iOpenDelay New value for property <code>openDelay</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setOpenDelay(iOpenDelay: number): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>openDuration</code>.Optional. Open Duration in milliseconds.When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.Default value is <code>200</code>.
				 * @param iOpenDuration New value for property <code>openDuration</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setOpenDuration(iOpenDuration: number): sap.ui.core.TooltipBase;

				/**
				 * Sets a new value for property <code>text</code>.The text that is shown in the tooltip that extends
				 * the TooltipBase class, for example in RichTooltip.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.Default value is
				 * <code></code>.
				 * @param sText New value for property <code>text</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setText(sText: string): sap.ui.core.TooltipBase;
			}
			/**
			 * Creates and initializes a new UIComponent with the given <code>sId</code> andsettings.The set of
			 * allowed entries in the <code>mSettings</code> object depends onthe concrete subclass and is
			 * described there. See {@link sap.ui.core.Component}for a general description of this argument.
			 * @resource sap/ui/core/UIComponent.js
			 */
			abstract class UIComponent extends sap.ui.core.Component {
				/**
				 * Base Class for UIComponent.If you are extending an UIComponent make sure you read the {@link
				 * #.extend} documentation since the metadata is special.Accepts an object literal
				 * <code>mSettings</code> that defines initialproperty values, aggregated and associated objects as
				 * well as event handlers.See {@link sap.ui.base.ManagedObject#constructor} for a general description
				 * of the syntax of the settings object.
				 * @param sId Optional ID for the new control; generated automatically if           no non-empty ID is
				 * given Note: this can be omitted, no matter           whether <code>mSettings</code> will be given or
				 * not!
				 * @param mSettings optional map/JSON-object with initial settings for the           new component
				 * instance
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Returns an element by its ID in the context of the component.
				 * @param sId Component local ID of the element
				 * @returns element by its ID or <code>undefined</code>
				 */
				byId(sId: string): sap.ui.core.Element;

				/**
				 * The method to create the content (UI Control Tree) of the Component.This method has to be
				 * overwritten in the implementation of the componentif the root view is not declared in the component
				 * metadata.
				 */
				createContent(): void;

				/**
				 * Convert the given component local element ID to a globally unique IDby prefixing it with the
				 * component ID.
				 * @param sId Component local ID of the element
				 * @returns prefixed id
				 */
				createId(sId: string): string;

				/**
				 * A method to be implemented by UIComponents, returning the flag whether to prefixthe IDs of controls
				 * automatically or not if the controls are created insidethe {@link
				 * sap.ui.core.UIComponent#createContent} function. By default thisfeature is not activated.You can
				 * overwrite this function and return <code>true</code> to activate the automaticprefixing. In addition
				 * the default behavior can be configured in the manifestby specifying the entry
				 * <code>sap.ui5/autoPrefixId</code>.
				 * @since 1.15.1
				 * @returns true, if the Controls IDs should be prefixed automatically
				 */
				getAutoPrefixId(): boolean;

				/**
				 */
				getEventingParent(): sap.ui.base.EventProvider;

				/**
				 * Returns the local ID of an element by removing the component ID prefix or<code>null</code> if the ID
				 * does not contain a prefix.
				 * @since 1.39.0
				 * @param sId Prefixed ID
				 * @returns ID without prefix or <code>null</code>
				 */
				getLocalId(sId: string): string;

				/**
				 * Returns a metadata object for class sap.ui.core.UIComponent.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the reference to the router instance which has been created bythe UIComponent once the
				 * routes in the routing metadata has been defined.
				 * @since 1.16.1
				 * @returns the router instance
				 */
				getRouter(): sap.m.routing.Router;

				/**
				 * Returns the reference to the router instance. The passed controller or viewhas to be created in the
				 * context of a UIComponent to return the routerinstance. Otherwise this function will return
				 * undefined.You may define the routerClass property in the config section of the routing to make the
				 * Component create your router extension.Example:routing: {	config: {		routerClass :
				 * myAppNamespace.MyRouterClass		...}...
				 * @since 1.16.1
				 * @param oControllerOrView either a view or controller
				 * @returns the router instance
				 */
				static getRouterFor(
					oControllerOrView: sap.ui.core.mvc.View | sap.ui.core.mvc.Controller
				): sap.m.routing.Router;

				/**
				 * Returns the reference to the Targets instance which has been created bythe UIComponent once the
				 * targets in the routing metadata has been defined.If routes have been defined, it will be the Targets
				 * instance created and used by the router.
				 * @since 1.28
				 * @returns the targets instance
				 */
				getTargets(): sap.ui.core.routing.Targets;

				/**
				 * Returns the reference to the UIArea of the container.
				 * @returns reference to the UIArea of the container
				 */
				getUIArea(): sap.ui.core.UIArea;

				/**
				 * Initializes the Component instance after creation.Applications must not call this hook method
				 * directly, it is called by theframework while the constructor of a Component is executed.Subclasses
				 * of Component should override this hook to implement any necessaryinitialization. <b>When overriding
				 * this function make sure to invoke theinit function of the UIComponent as well!</b>
				 */
				init(...args: any[]): void;

				/**
				 * Function is called when the rendering of the ComponentContainer is completed.Applications must not
				 * call this hook method directly, it is called from ComponentContainer.Subclasses of UIComponent
				 * override this hook to implement any necessary actions after the rendering.
				 */
				onAfterRendering(): void;

				/**
				 * Function is called when the rendering of the ComponentContainer is started.Applications must not
				 * call this hook method directly, it is called from ComponentContainer.Subclasses of UIComponent
				 * override this hook to implement any necessary actions before the rendering.
				 */
				onBeforeRendering(): void;

				/**
				 * Renders the the root control of the UIComponent.
				 * @param oRenderManager a RenderManager instance
				 */
				render(oRenderManager: sap.ui.core.RenderManager): void;

				/**
				 * Sets the reference to the ComponentContainer - later required for thedetermination of the UIArea for
				 * the UIComponent.
				 * @param oContainer reference to a ComponentContainer
				 * @returns reference to this instance to allow method chaining
				 */
				setContainer(
					oContainer: sap.ui.core.ComponentContainer
				): sap.ui.core.UIComponent;
			}
			/**
			 * An item that provides a visual separation. It borrows all its methods from the classes
			 * sap.ui.core.Item, sap.ui.core.Element,sap.ui.base.EventProvider, and sap.ui.base.Object.
			 * @resource sap/ui/core/SeparatorItem.js
			 */
			class SeparatorItem extends sap.ui.core.Item {
				/**
				 * Constructor for a new SeparatorItem.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Returns a metadata object for class sap.ui.core.SeparatorItem.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * An InvisibleText is used to bring hidden texts to the UI for screen reader support. The hidden text
			 * can e.g. be referencedin the ariaLabelledBy or ariaDescribedBy associations of other controls.The
			 * inherited properties busy, busyIndicatorDelay and visible and the aggregation tooltip is not
			 * supported by this control.
			 * @resource sap/ui/core/InvisibleText.js
			 */
			class InvisibleText extends sap.ui.core.Control {
				/**
				 * Constructor for a new InvisibleText.Accepts an object literal <code>mSettings</code> that defines
				 * initialproperty values, aggregated and associated objects as well as event handlers.See {@link
				 * sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings
				 * object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Returns a metadata object for class sap.ui.core.InvisibleText.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>text</code>.The text of the InvisibleText.Default value is
				 * <code></code>.
				 * @returns Value of property <code>text</code>
				 */
				getText(): string;

				/**
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				setBusy(): any;

				/**
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				setBusyIndicatorDelay(): any;

				/**
				 * Sets a new value for property <code>text</code>.The text of the InvisibleText.When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code></code>.
				 * @param sText New value for property <code>text</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setText(sText: string): sap.ui.core.InvisibleText;

				/**
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				setTooltip(): any;

				/**
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				setVisible(): any;

				/**
				 * Adds <code>this</code> control into the static, hidden area UI area container.
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				toStatic(): any;
			}
			/**
			 * RenderManager that will take care for rendering Controls.The RenderManager will be available from
			 * the sap.ui.core.Core instance (available via <code>sap.ui.getCore()</code>).<br/>Itcan be used to
			 * render Controls and Control-Trees.The convention for renderers belonging to some controls is the
			 * following:<ul><li>for a Control e.g. <code>sap.ui.controls.InputField</code> there shall be
			 * </li><li>a renderer named <code>sap.ui.controls.InputFieldRenderer</code></li><ul>
			 * @resource sap/ui/core/RenderManager.js
			 */
			class RenderManager extends sap.ui.base.Object {
				/**
				 * Creates an instance of the RenderManager.
				 */
				constructor();

				/**
				 * Adds a class to the class collection if the name is not empty or null.The class collection is
				 * flushed if it is written to the buffer using {@link #writeClasses}
				 * @param sName name of the class to be added; null values are ignored
				 * @returns this render manager instance to allow chaining
				 */
				addClass(sName: string): sap.ui.core.RenderManager;

				/**
				 * Adds a style property to the style collection if the value is not empty or nullThe style collection
				 * is flushed if it is written to the buffer using {@link #writeStyle}
				 * @param sName name of the CSS property to write
				 * @param value value to write
				 * @returns this render manager instance to allow chaining
				 */
				addStyle(
					sName: string,
					value: string | number | number
				): sap.ui.core.RenderManager;

				/**
				 * Cleans up the rendering state of the given control with rendering it.A control is responsible for
				 * the rendering of all its child controls.But in some cases it makes sense that a control does not
				 * render all itschildren based on a filter condition. For example a Carousel control only rendersthe
				 * current visible parts (and maybe some parts before and after the visible area)for performance
				 * reasons.If a child was rendered but should not be rendered anymore because the filter conditiondoes
				 * not apply anymore this child must be cleaned up correctly (e.g deregistering eventhandlers, ...).The
				 * following example shows how renderControl and cleanupControlWithoutRendering shouldbe used:render =
				 * function(rm, ctrl){  //...  var aAggregatedControls = //...  for(var i=0;
				 * i<aAgrregatedControls.length; i++){  	if(//... some filter expression){
				 * rm.renderControl(aAggregatedControls[i]);     }else{
				 * rm.cleanupControlWithoutRendering(aAggregatedControls[i]);     }  }  //...}Note:The method does not
				 * remove DOM of the given control. The callee of this method has to take over theresponsibility to
				 * cleanup the DOM of the control afterwards.For parents which are rendered with the normal mechanism
				 * as shown in the example above this requirementis fulfilled, because the control is not added to the
				 * rendering buffer (renderControl is not called) andthe DOM is replaced when the rendering cycle is
				 * finalized.
				 * @since 1.22.9
				 * @param oControl the control that should be cleaned up
				 */
				cleanupControlWithoutRendering(oControl: sap.ui.core.Control): void;

				/**
				 * Creates the ID to be used for the invisible Placeholder DOM element.This method can be used to get
				 * direct access to the placeholder DOM element.Also statically available as
				 * RenderManager.createInvisiblePlaceholderId()
				 * @param oElement The Element instance for which to create the placeholder ID
				 * @returns The ID used for the invisible Placeholder of this element
				 */
				createInvisiblePlaceholderId(oElement: sap.ui.core.Element): string;

				/**
				 * Cleans up the resources associated with this instance.After the instance has been destroyed, it must
				 * not be used anymore.Applications should call this function if they don't need the instance any
				 * longer.
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 * Searches "to-be-preserved" nodes for the given control id.
				 * @param sId control id to search content for.
				 * @returns a jQuery collection representing the found content
				 */
				findPreservedContent(sId: string): typeof jQuery;

				/**
				 * Renders the content of the rendering buffer into the provided DOMNode.This function must not be
				 * called within control renderers.Usage:<pre>// Create a new instance of the RenderManagervar rm =
				 * sap.ui.getCore().createRenderManager();// Use the writer API to fill the
				 * buffersrm.write(...);rm.renderControl(oControl);rm.write(...);...// Finally flush the buffer into
				 * the provided DOM node (The current content is removed)rm.flush(oDomNode);// If the instance is not
				 * needed anymore, destroy itrm.destroy();</pre>
				 * @param oTargetDomNode The node in the dom where the buffer should be flushed into.
				 * @param bDoNotPreserve flag, whether to not preserve (true) the content or to preserve it (false).
				 * @param vInsert flag, whether to append (true) or replace (false) the buffer of the target dom node
				 * or to insert at a certain position (int)
				 */
				flush(
					oTargetDomNode: sap.ui.core.Element,
					bDoNotPreserve: boolean,
					vInsert: boolean | number
				): void;

				/**
				 * Returns the configuration objectShortcut for <code>sap.ui.getCore().getConfiguration()</code>
				 * @returns the configuration object
				 */
				getConfiguration(): sap.ui.core.Configuration;

				/**
				 * Renders the given {@link sap.ui.core.Control} and finally returnsthe content of the rendering
				 * buffer.Ensures the buffer is restored to the state before calling this method.
				 * @param oControl the Control whose HTML should be returned.
				 * @returns the resulting HTML of the provided control
				 */
				getHTML(oControl: sap.ui.core.Control): string;

				/**
				 * Returns a metadata object for class sap.ui.core.RenderManager.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the hidden area reference belonging to this window instance.
				 * @returns the hidden area reference belonging to this core instance.
				 */
				getPreserveAreaRef(): sap.ui.core.Element;

				/**
				 * Returns the renderer class for a given control instance
				 * @param oControl the control that should be rendered
				 */
				getRenderer(oControl: sap.ui.core.Control): void;

				/**
				 * Returns the renderer class for a given control instance
				 * @param oControl the control that should be rendered
				 * @returns the renderer class for a given control instance
				 */
				getRenderer(oControl: sap.ui.core.Control): any;

				/**
				 * Collects descendants of the given root node that need to be preserved before the root nodeis wiped
				 * out. The "to-be-preserved" nodes are moved to a special, hidden 'preserve' area.A node is declared
				 * "to-be-preserved" when it has the <code>data-sap-ui-preserve</code>attribute set. When the optional
				 * parameter <code>bPreserveNodesWithId</code> is set to true,then nodes with an id are preserved as
				 * well and their <code>data-sap-ui-preserve</code> attributeis set automatically. This option is used
				 * by UIAreas when they render for the first time andsimplifies the handling of predefined HTML content
				 * in a web page.The "to-be-preserved" nodes are searched with a depth first search and moved to the
				 * 'preserve'area in the order that they are found. So for direct siblings the order should be stable.
				 * @param oRootNode to search for "to-be-preserved" nodes
				 * @param bPreserveRoot whether to preserve the root itself
				 * @param bPreserveNodesWithId whether to preserve nodes with an id as well
				 */
				preserveContent(
					oRootNode: sap.ui.core.Element,
					bPreserveRoot?: boolean,
					bPreserveNodesWithId?: boolean
				): void;

				/**
				 * Renders the given control to the provided DOMNode.If the control is already rendered in the provided
				 * DOMNode the DOM of the control is replaced. If the controlis already rendered somewhere else the
				 * current DOM of the control is removed and the new DOM is appendedto the provided DOMNode.This
				 * function must not be called within control renderers.
				 * @param oControl the Control that should be rendered.
				 * @param oTargetDomNode The node in the DOM where the result of the rendering should be inserted.
				 */
				render(
					oControl: sap.ui.core.Control,
					oTargetDomNode: sap.ui.core.Element
				): void;

				/**
				 * Turns the given control into its HTML representation and appends it to therendering buffer.If the
				 * given control is undefined or null, then nothing is rendered.
				 * @param oControl the control that should be rendered
				 * @returns this render manager instance to allow chaining
				 */
				renderControl(oControl: sap.ui.core.Control): sap.ui.core.RenderManager;

				/**
				 * @param sKey undefined
				 */
				translate(sKey: string): void;

				/**
				 * Write the given texts to the buffer
				 * @param sText (can be a number too)
				 * @returns this render manager instance to allow chaining
				 */
				write(sText: string | number): sap.ui.core.RenderManager;

				/**
				 * @returns this render manager instance to allow chaining
				 */
				writeAcceleratorKey(): sap.ui.core.RenderManager;

				/**
				 * Writes the accessibility state (see WAI-ARIA specification) of the provided element into the
				 * HTMLbased on the element's properties and associations.The ARIA properties are only written when the
				 * accessibility feature is activated in the UI5 configuration.The following properties/values to ARIA
				 * attribute mappings are done (if the element does have such properties):<code>editable===false</code>
				 * => <code>aria-readonly="true"</code><code>enabled===false</code> =>
				 * <code>aria-disabled="true"</code><code>visible===false</code> =>
				 * <code>aria-hidden="true"</code><code>required===true</code> =>
				 * <code>aria-required="true"</code><code>selected===true</code> =>
				 * <code>aria-selected="true"</code><code>checked===true</code> => <code>aria-checked="true"</code>In
				 * case of the required attribute also the Label controls which referencing the given element in their
				 * 'for' relationare taken into account to compute the <code>aria-required</code>
				 * attribute.Additionally the association <code>ariaDescribedBy</code> and <code>ariaLabelledBy</code>
				 * are used to writethe id lists of the ARIA attributes <code>aria-describedby</code> and
				 * <code>aria-labelledby</code>.Label controls which referencing the given element in their 'for'
				 * relation are automatically added to the<code>aria-labelledby</code> attributes.Note: This function
				 * is only a heuristic of a control property to ARIA attribute mapping. Control developershave to check
				 * whether it fullfills their requirements. In case of problems (for example the RadioButton has
				 * a<code>selected</code> property but must provide an <code>aria-checked</code> attribute) the
				 * auto-generatedresult of this function can be influenced via the parameter <code>mProps</code> as
				 * described below.The parameter <code>mProps</code> can be used to either provide additional
				 * attributes which should be added and/orto avoid the automatic generation of single ARIA attributes.
				 * The 'aria-' prefix will be prepended automatically to the keys(Exception: Attribute 'role' does not
				 * get the prefix 'aria-').Examples:<code>{hidden : true}</code> results in
				 * <code>aria-hidden="true"</code> independent of the precense or absence ofthe visibility
				 * property.<code>{hidden : null}</code> ensures that no <code>aria-hidden</code> attribute is written
				 * independent of the precenseor absence of the visibility property.The function behaves in the same
				 * way for the associations <code>ariaDescribedBy</code> and <code>ariaLabelledBy</code>.To append
				 * additional values to the auto-generated <code>aria-describedby</code> and
				 * <code>aria-labelledby</code> attributesthe following format can be used:<code>{describedby : {value:
				 * "id1 id2", append: true}}</code> => <code>aria-describedby="ida idb id1 id2"</code> (assuming that
				 * "ida idb"is the auto-generated part based on the association <code>ariaDescribedBy</code>).
				 * @param oElement the element whose accessibility state should be rendered
				 * @param mProps a map of properties that should be added additionally or changed.
				 * @returns this render manager instance to allow chaining
				 */
				writeAccessibilityState(
					oElement: sap.ui.core.Element,
					mProps?: any
				): sap.ui.core.RenderManager;

				/**
				 * Writes the attribute and its value into the HTML
				 * @param sName the name of the attribute
				 * @param value the value of the attribute
				 * @returns this render manager instance to allow chaining
				 */
				writeAttribute(
					sName: string,
					value: string | number | boolean
				): sap.ui.core.RenderManager;

				/**
				 * Writes the attribute and its value into the HTMLThe value is properly escaped to avoid XSS attacks.
				 * @param sName the name of the attribute
				 * @param vValue the value of the attribute
				 * @returns this render manager instance to allow chaining
				 */
				writeAttributeEscaped(
					sName: string,
					vValue: any
				): sap.ui.core.RenderManager;

				/**
				 * Writes and flushes the class collection (all CSS classes added by "addClass()" since the last
				 * flush).Also writes the custom style classes added by the application with "addStyleClass(...)".
				 * Custom classes areadded by default from the currently rendered control. If an oElement is given,
				 * this Element's custom styleclasses are added instead. If oElement === false, no custom style classes
				 * are added.
				 * @param oElement an Element from which to add custom style classes (instead of adding from the
				 * control itself)
				 * @returns this render manager instance to allow chaining
				 */
				writeClasses(
					oElement: sap.ui.core.Element | boolean
				): sap.ui.core.RenderManager;

				/**
				 * Writes the controls data into the HTML.Control Data consists at least of the id of a control
				 * @param oControl the control whose identifying information should be written to the buffer
				 * @returns this render manager instance to allow chaining
				 */
				writeControlData(
					oControl: sap.ui.core.Control
				): sap.ui.core.RenderManager;

				/**
				 * Writes the elements data into the HTML.Element Data consists at least of the id of a element
				 * @param oElement the element whose identifying information should be written to the buffer
				 * @returns this render manager instance to allow chaining
				 */
				writeElementData(
					oElement: sap.ui.core.Element
				): sap.ui.core.RenderManager;

				/**
				 * Escape text for HTML and write it to the buffer
				 * @param sText undefined
				 * @param bLineBreaks Whether to convert linebreaks into <br> tags
				 * @returns this render manager instance to allow chaining
				 */
				writeEscaped(
					sText: string,
					bLineBreaks: boolean
				): sap.ui.core.RenderManager;

				/**
				 * Writes necessary invisible control/element placeholder data into the HTML.Controls should only use
				 * this method if they can't live with the standard 'visible=false' implementation of the RenderManager
				 * whichrenders dummy HTMLSpanElement for better re-rendering performance. Even though HTML5 error
				 * tolerance accepts this for most of the cases andthese dummy elements are not in the render tree of
				 * the Browser, controls may need to generate a valid and semantic HTML output when therendered
				 * HTMLSpanElement is not an allowed element(e.g. &lt;span&gt; element within the &lt;tr&gt; or
				 * &lt;li&gt; group).The caller needs to start an opening HTML tag, then call this method, then
				 * complete the opening and closing
				 * @param oElement an instance of sap.ui.core.Element
				 * @returns this render manager instance to allow chaining
				 */
				writeInvisiblePlaceholderData(
					oElement: sap.ui.core.Element
				): sap.ui.core.RenderManager;

				/**
				 * Writes and flushes the style collection
				 * @returns this render manager instance to allow chaining
				 */
				writeStyles(): sap.ui.core.RenderManager;
			}
			/**
			 * Collects and stores the configuration of the current environment.The Configuration is initialized
			 * once when the {@link sap.ui.core.Core} is created.There are different ways to set the environment
			 * configuration (in ascending priority):<ol><li>System defined defaults<li>Server wide defaults, read
			 * from /sap-ui-config.json<li>Properties of the global configuration object
			 * window["sap-ui-config"]<li>A configuration string in the data-sap-ui-config attribute of the
			 * bootstrap tag<li>Individual data-sap-ui-xyz attributes of the bootstrap tag<li>Using URL
			 * parameters<li>Setters in this Configuration object (only for some parameters)</ol>That is,
			 * attributes of the DOM reference override the system defaults, URL parametersoverride the DOM
			 * attributes (where empty URL parameters set the parameter back to itssystem default). Calling setters
			 * at runtime will override any previous settingscalculated during object creation.The naming
			 * convention for parameters is:<ul><li>in the URL : sap-ui-<i>PARAMETER-NAME</i>="value"<li>in the DOM
			 * : data-sap-ui-<i>PARAMETER-NAME</i>="value"</ul>where <i>PARAMETER-NAME</i> is the name of the
			 * parameter in lower case.Values of boolean parameters are case insensitive where "true" and "x" are
			 * interpreted as true.
			 * @resource sap/ui/core/Configuration.js
			 */
			class Configuration extends sap.ui.base.Object {
				/**
				 * Creates a new Configuration object.
				 */
				constructor();

				/**
				 * Applies multiple changes to the configuration at once.If the changed settings contain localization
				 * related settings like <code>language</code>or <ode>calendarType</code>, then only a single
				 * <code>localizationChanged</code> event willbe fired. As the framework has to inform all existing
				 * components, elements, models etc.about localization changes, using <code>applySettings</code> can
				 * significantly reduce theoverhead for multiple changes, esp. when they occur after the UI has been
				 * created already.The <code>mSettings</code> can contain any property <code><i>xyz</i></code> for
				 * which asetter method <code>set<i>XYZ</i></code> exists in the API of this class.Similarly, values
				 * for the {@link sap.ui.core.Configuration.FormatSettings format settings}API can be provided in a
				 * nested object with name <code>formatSettings</code>.
				 * @since 1.38.6
				 * @param mSettings Configuration options to apply
				 * @returns Returns <code>this</code> to allow method chaining
				 */
				applySettings(mSettings: any): sap.ui.core.Configuration;

				/**
				 * Returns whether the accessibility mode is used or not
				 * @returns whether the accessibility mode is used or not
				 */
				getAccessibility(): boolean;

				/**
				 * Returns whether the animations are globally used
				 * @returns whether the animations are globally used
				 */
				getAnimation(): boolean;

				/**
				 * Base URLs to AppCacheBuster Etag-Index files
				 * @returns array of base URLs
				 */
				getAppCacheBuster(): string[];

				/**
				 * Object defining the callback hooks for the AppCacheBuster like e.g.<code>handleURL</code>,
				 * <code>onIndexLoad</code> or <code>onIndexLoaded</code>.
				 * @returns object containing the callback functions for the AppCacheBuster
				 */
				getAppCacheBusterHooks(): any;

				/**
				 * The loading mode (sync|async|batch) of the AppCacheBuster (sync is default)
				 * @returns sync | async
				 */
				getAppCacheBusterMode(): string;

				/**
				 * The name of the application to start or empty
				 * @returns name of the application
				 */
				getApplication(): string;

				/**
				 * Returns whether the framework automatically adds automaticallythe ARIA role 'application' to the
				 * html body or not.
				 * @since 1.27.0
				 */
				getAutoAriaBodyRole(): boolean;

				/**
				 * Returns the used compatibility version for the given feature.
				 * @param sFeature the key of desired feature
				 * @returns the used compatibility version
				 */
				getCompatibilityVersion(sFeature: string): any;

				/**
				 * Return whether the controller code is deactivated. During design mode the
				 * @since 1.26.4
				 * @returns whether the activation of the controller code is suppressed or not
				 */
				getControllerCodeDeactivated(): boolean;

				/**
				 * Returns whether the page runs in debug mode
				 * @returns whether the page runs in debug mode
				 */
				getDebug(): boolean;

				/**
				 * Return whether the design mode is active or not.
				 * @since 1.13.2
				 * @returns whether the design mode is active or not.
				 */
				getDesignMode(): boolean;

				/**
				 * Returns whether the Fiori2Adaptation is on
				 * @returns false - no adaptation, true - full adaptation, comma-separated list - partial
				 * adaptationPossible values: style, collapse, title, back, hierarchy
				 */
				getFiori2Adaptation(): boolean | string;

				/**
				 * Returns the format locale string with language and region code. Falls back tolanguage configuration,
				 * in case it has not been explicitly defined.
				 * @returns the format locale string with language and country code
				 */
				getFormatLocale(): string;

				/**
				 * Returns a configuration object that bundles the format settings of UI5.
				 * @returns A FormatSettings object.
				 */
				getFormatSettings(): sap.ui.core.Configuration.FormatSettings;

				/**
				 * frameOptions mode (allow/deny/trusted).
				 * @returns frameOptions mode
				 */
				getFrameOptions(): string;

				/**
				 * Returns whether the UI5 control inspector is displayedHas only an effect when the sap-ui-debug
				 * module has been loaded
				 * @returns whether the UI5 control inspector is displayed
				 */
				getInspect(): boolean;

				/**
				 * Returns a string that identifies the current language.The value returned by this methods in most
				 * cases corresponds to the exact value that has beenconfigured by the user or application or that has
				 * been determined from the user agent settings.It neither has been normalized nor validated against a
				 * specification or standard, althoughUI5 expects a value compliant with {@link
				 * http://www.ietf.org/rfc/bcp/bcp47.txt BCP47}.The exceptions mentioned above affect languages that
				 * have been specified via the URL parameter<code>sap-language</code>. That parameter by definition
				 * represents a SAP logon language code('ABAP language'). Most but not all of these language codes are
				 * valid ISO639 two-letter languagesand as such are valid BCP47 language tags. For better BCP47
				 * compliance, the frameworkmaps the following non-BCP47 SAP logon codes to a BCP47 substitute:<pre>
				 * "ZH"  -->  "zh-Hans"         // script 'Hans' added to distinguish it from zh-Hant   "ZF"  -->
				 * "zh-Hant"         // ZF ist not a valid ISO639 code, use the compliant language + script 'Hant'		 "
				 *   "1Q"  -->  "en-US-x-saptrc"  // special language code for supportability (tracing),
				 *                    represented as en-US with a priate extension   "2Q"  -->  "en-US-x-sappsd"  //
				 * special language code for supportability (pseudo translation),
				 * represented as en-US with a priate extension</pre>
				 * @returns The language string as configured
				 */
				getLanguage(): string;

				/**
				 * Returns a BCP47-compliant language tag for the current language.If the current {@link #getLanguage
				 * language} can't be interpreted as aBCP47-compliant language, then the value <code>undefined</code>
				 * is returned.
				 * @returns The language tag for the current language, conforming to BCP47
				 */
				getLanguageTag(): string;

				/**
				 * Returns a Locale object for the current language.The Locale is derived from the {@link #getLanguage
				 * language} property.
				 * @returns The locale
				 */
				getLocale(): sap.ui.core.Locale;

				/**
				 * Flag whether a Component should load the manifest first
				 * @since 1.33.0
				 * @returns true if a Component should load the manifest first
				 */
				getManifestFirst(): boolean;

				/**
				 * Returns a metadata object for class sap.ui.core.Configuration.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns whether there should be an exception on any duplicate element IDs
				 * @returns whether there should be an exception on any duplicate element IDs
				 */
				getNoDuplicateIds(): boolean;

				/**
				 * Returns whether the text origin information is collected
				 * @returns whether the text info is collected
				 */
				getOriginInfo(): boolean;

				/**
				 * The name of the root component to start or empty
				 * @returns name of the root component
				 */
				getRootComponent(): string;

				/**
				 * Returns whether the page uses the RTL text direction.If no mode has been explicitly set (neither
				 * true nor false),the mode is derived from the current language setting.
				 * @returns whether the page uses the RTL text direction
				 */
				getRTL(): boolean;

				/**
				 * Returns a SAP logon language for the current language.If the current {@link #getLanguage language}
				 * can't be interpreted as aBCP47-compliant language, or if the BCP47 language can't be converted toa
				 * SAP Logon language, then the value <code>undefined</code> is returned.
				 * @returns The SAP logon language code for the current language
				 */
				getSAPLogonLanguage(): string;

				/**
				 * Return whether the activation of the controller code is suppressed
				 * @since 1.13.2
				 * @returns whether the activation of the controller code is suppressed or not
				 */
				getSuppressDeactivationOfControllerCode(): boolean;

				/**
				 * Returns the theme name
				 * @returns the theme name
				 */
				getTheme(): string;

				/**
				 * Prefix to be used for automatically generated control IDs.Default is a double underscore "__".
				 * @returns the prefix to be used
				 */
				getUIDPrefix(): string;

				/**
				 * Returns the version of the framework.Similar to <code>sap.ui.version</code>.
				 * @returns the version
				 */
				getVersion(): any;

				/**
				 * URL of the whitelist service.
				 * @returns whitelist service URL
				 */
				getWhitelistService(): string;

				/**
				 * Sets the new calendar type to be used from now on in locale dependent functionalities (for
				 * example,formatting, translation texts, etc.).
				 * @since 1.28.6
				 * @param sCalendarType the new calendar type. Set it with null to clear the calendar type  and the
				 * calendar type is calculated based on the format settings and current locale.
				 * @returns <code>this</code> to allow method chaining
				 */
				setCalendarType(
					sCalendarType: sap.ui.core.CalendarType | any
				): sap.ui.core.Configuration;

				/**
				 * Sets a new formatLocale to be used from now on for retrieving localespecific formatters. Modifying
				 * this setting does not have an impact onthe retrieval of translated texts!Can either be set to a
				 * concrete value (a BCP-47 or Java locale compliantlanguage tag) or to <code>null</code>. When set to
				 * <code>null</code> (defaultvalue) then locale specific formatters are retrieved for the current
				 * language.After changing the formatLocale, the framework tries to update localizationspecific parts
				 * of the UI. See the documentation of {@link #setLanguage} fordetails and restrictions.
				 * @param sFormatLocale the new format locale as a BCP47 compliant language tag;  case doesn't matter
				 * and underscores can be used instead of a dashes to separate  components (compatibility with Java
				 * Locale Ids)
				 * @returns <code>this</code> to allow method chaining
				 */
				setFormatLocale(sFormatLocale: string | any): sap.ui.core.Configuration;

				/**
				 * Sets a new language to be used from now on for language/region dependentfunctionality (e.g.
				 * formatting, data types, translated texts, ...).When the language has changed, the Core will fire
				 * its{@link sap.ui.core.Core#event:localizationChanged localizationChanged} event.The framework
				 * <strong>does not</strong> guarantee that already created, languagedependent objects will be updated
				 * by this call. It therefore remains best practicefor applications to switch the language early, e.g.
				 * before any language dependentobjects are created. Applications that need to support more dynamic
				 * changes ofthe language should listen to the <code>localizationChanged</code> event and adaptall
				 * language dependent objects that they use (e.g. by rebuilding their UI).Currently, the framework
				 * notifies the following objects about a change of thelocalization settings before it fires the
				 * <code>localizationChanged</code> event:<ul><li>date and number data types that are used in property
				 * bindings or composite    bindings in existing Elements, Controls, UIAreas or
				 * Components</li><li>ResourceModels currently assigned to the Core, an UIArea, Component,    Element
				 * or Control</li><li>Elements or Controls that implement the <code>onlocalizationChanged</code> hook
				 *  (note the lowercase 'l' in onlocalizationChanged)</ul>It furthermore derives the RTL mode from the
				 * new language, if no explicit RTLmode has been set. If the RTL mode changes, the following additional
				 * actions will be taken:<ul><li>the URLs of already loaded library theme files will be
				 * changed</li><li>the <code>dir</code> attribute of the page will be changed to reflect the new
				 * mode.</li><li>all UIAreas will be invalidated (which results in a rendering of the whole UI5
				 * UI)</li></ul>This method does not handle SAP logon language codes.
				 * @param sLanguage the new language as a BCP47 compliant language tag; case doesn't matter  and
				 * underscores can be used instead of a dashes to separate components (compatibility with Java Locale
				 * Ids)
				 * @returns <code>this</code> to allow method chaining
				 */
				setLanguage(sLanguage: string): sap.ui.core.Configuration;

				/**
				 * Sets the character orientation mode to be used from now on.Can either be set to a concrete value
				 * (true meaning right-to-left,false meaning left-to-right) or to <code>null</code> which means thatthe
				 * character orientation mode should be derived from the currentlanguage (incl. region) setting.After
				 * changing the character orientation mode, the framework triesto update localization specific parts of
				 * the UI. See the documentation of{@link #setLanguage} for details and restrictions.
				 * @param bRTL new character orientation mode or <code>null</code>
				 * @returns <code>this</code> to allow method chaining
				 */
				setRTL(bRTL: boolean | any): sap.ui.core.Configuration;
			}
			/**
			 * Provides a trigger that triggers in a set interval and calls all       registered listeners. If the
			 * interval is <= 0 the trigger is       switched off and won't trigger at all.
			 * @resource sap/ui/core/IntervalTrigger.js
			 */
			class IntervalTrigger extends sap.ui.base.Object {
				/**
				 * Creates an instance of EventBus.
				 * @param iInterval is the interval the trigger should be used. If the           trigger is >0
				 * triggering starts/runs and if the interval is           set to <=0 triggering stops.
				 */
				constructor(iInterval: number);

				/**
				 * Adds a listener to the list that should be triggered.
				 * @param fnFunction is the called function that should be called when           the trigger want to
				 * trigger the listener.
				 * @param oListener that should be triggered.
				 */
				addListener(fnFunction: any, oListener?: any): void;

				/**
				 * Destructor method for objects.
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 */
				getInterface(): sap.ui.base.Interface;

				/**
				 * Returns a metadata object for class sap.ui.core.IntervalTrigger.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Removes corresponding listener from list.
				 * @param fnFunction is the previously registered function
				 * @param oListener that should be removed
				 */
				removeListener(fnFunction: any, oListener?: any): void;

				/**
				 * Sets the trigger interval. If the value is >0 triggering will start ifthere are any registered
				 * listeners. If the interval is set to <=0triggering will stop.
				 * @param iInterval sets the interval in milliseconds when a new           triggering should occur.
				 */
				setInterval(iInterval: number): void;
			}
			/**
			 * @resource sap/ui/core/ComponentMetadata.js
			 */
			class ComponentMetadata {
				/**
				 * Creates a new metadata object for a Component subclass.
				 * @param sClassName Fully qualified name of the class that is described by this metadata object
				 * @param oStaticInfo Static info to construct the metadata from
				 */
				constructor(sClassName: string, oStaticInfo: any);

				/**
				 * Returns the name of the Component (which is the namespace only with the module name)
				 * @returns Component name
				 */
				getComponentName(): string;

				/**
				 * Returns array of components specified in the metadata of the Component.If not specified or the array
				 * is empty, the return value is null.<p><b>Important:</b></br>If a Component is loaded using the
				 * manifest URL (or according the"manifest first" strategy), this function ignores the entries of
				 * themanifest file! It returns only the entries which have been defined inthe Component metadata or in
				 * the proper Component manifest.
				 * @returns Required Components.
				 */
				getComponents(): string[];

				/**
				 * Returns a copy of the configuration property to disallow modifications.If no key is specified it
				 * returns the complete configuration property
				 * @since 1.15.1
				 * @param sKey Key of the configuration property
				 * @param bDoNotMerge If set to <code>true</code>, only the local configuration is returned
				 * @returns the value of the configuration property
				 */
				getConfig(sKey: string, bDoNotMerge?: boolean): any;

				/**
				 * Returns the custom Component configuration entry with the specified key (this must be a JSON
				 * object).If no key is specified, the return value is null.Example:<code>
				 * sap.ui.core.Component.extend("sample.Component", {      metadata: {          "my.custom.config" : {
				 *             "property1" : true,              "property2" : "Something else"          }      }
				 * });</code>The configuration above can be accessed via
				 * <code>sample.Component.getMetadata().getCustomEntry("my.custom.config")</code>.
				 * @param sKey Key of the custom configuration (must be prefixed with a namespace)
				 * @param bMerged Indicates whether the custom configuration is merged with the parent custom
				 * configuration of the Component.
				 * @returns custom Component configuration with the specified key.
				 */
				getCustomEntry(sKey: string, bMerged: boolean): any;

				/**
				 * Returns the dependencies defined in the metadata of the Component. If not specified, the return
				 * value is null.<p><b>Important:</b></br>If a Component is loaded using the manifest URL (or according
				 * the"manifest first" strategy), this function ignores the entries of themanifest file! It returns
				 * only the entries which have been defined inthe Component metadata or in the proper Component
				 * manifest.
				 * @returns Component dependencies.
				 */
				getDependencies(): any;

				/**
				 * Returns the array of the included files that the Component requires suchas CSS and JavaScript. If
				 * not specified or the array is empty, the returnvalue is null.<p><b>Important:</b></br>If a Component
				 * is loaded using the manifest URL (or according the"manifest first" strategy), this function ignores
				 * the entries of themanifest file! It returns only the entries which have been defined inthe Component
				 * metadata or in the proper Component manifest.
				 * @returns Included files.
				 */
				getIncludes(): string[];

				/**
				 * Returns array of libraries specified in metadata of the Component, thatare automatically loaded when
				 * an instance of the component is created.If not specified or the array is empty, the return value is
				 * null.<p><b>Important:</b></br>If a Component is loaded using the manifest URL (or according
				 * the"manifest first" strategy), this function ignores the entries of themanifest file! It returns
				 * only the entries which have been defined inthe Component metadata or in the proper Component
				 * manifest.
				 * @returns Required libraries.
				 */
				getLibs(): string[];

				/**
				 * Returns the manifest defined in the metadata of the Component.If not specified, the return value is
				 * null.
				 * @since 1.27.1
				 * @returns manifest.
				 */
				getManifest(): any;

				/**
				 * Returns the configuration of a manifest section or the value for aspecific path. If no section or
				 * key is specified, the return value is null.Example:<code>  {    "sap.ui5": {      "dependencies": {
				 *       "libs": {          "sap.m": {}        },        "components": {          "my.component.a": {}
				 *       }      }  });</code>The configuration above can be accessed in the following
				 * ways:<ul><li><b>By section/namespace</b>:
				 * <code>oComponent.getMetadata().getManifestEntry("sap.ui5")</code></li><li><b>By path</b>:
				 * <code>oComponent.getMetadata().getManifestEntry("/sap.ui5/dependencies/libs")</code></li></ul>By
				 * section/namespace returns the configuration for the specified manifestsection and by path allows to
				 * specify a concrete path to a dedicated entryinside the manifest. The path syntax always starts with
				 * a slash (/).
				 * @since 1.27.1
				 * @param sKey Either the manifest section name (namespace) or a concrete path
				 * @param bMerged Indicates whether the custom configuration is merged with the parent custom
				 * configuration of the Component.
				 * @returns Value of the manifest section or the key (could be any kind of value)
				 */
				getManifestEntry(sKey: string, bMerged?: boolean): any | any;

				/**
				 * Returns the manifest object.
				 * @since 1.33.0
				 * @returns manifest.
				 */
				getManifestObject(): sap.ui.core.Manifest;

				/**
				 * Returns the version of the metadata which could be 1 or 2. 1 is for legacymetadata whereas 2 is for
				 * the manifest.
				 * @since 1.27.1
				 * @returns metadata version (1: legacy metadata, 2: manifest)
				 */
				getMetadataVersion(): number;

				/**
				 * Returns the raw manifest defined in the metadata of the Component.If not specified, the return value
				 * is null.
				 * @since 1.29.0
				 * @returns manifest
				 */
				getRawManifest(): any;

				/**
				 * Returns the required version of SAPUI5 defined in the metadata of theComponent. If returned value is
				 * null, then no special UI5 version isrequired.<p><b>Important:</b></br>If a Component is loaded using
				 * the manifest URL (or according the"manifest first" strategy), this function ignores the entries of
				 * themanifest file! It returns only the entries which have been defined inthe Component metadata or in
				 * the proper Component manifest.
				 * @returns Required version of UI5 or if not specified then null.
				 */
				getUI5Version(): string;

				/**
				 * Returns the version of the component. If not specified, the return valueis
				 * null.<p><b>Important:</b></br>If a Component is loaded using the manifest URL (or according
				 * the"manifest first" strategy), this function ignores the entries of themanifest file! It returns
				 * only the entries which have been defined inthe Component metadata or in the proper Component
				 * manifest.
				 * @returns The version of the component.
				 */
				getVersion(): string;

				/**
				 * Returns whether the class of this metadata is a component base classor not.
				 * @since 1.33.0
				 * @returns true if it is sap.ui.core.Component or sap.ui.core.UIComponent
				 */
				isBaseClass(): boolean;
			}
			/**
			 * Helper Class for enhancement of a Control with propagation of enabled property.<b>This constructor
			 * should be applied to the prototype of a
			 * control</b>Example:<code>sap.ui.core.EnabledPropagator.call(<i>Some-Control</i>.prototype,
			 * <i>Default-value,
			 * @resource sap/ui/core/EnabledPropagator.js
			 */
			class EnabledPropagator {
				constructor(bDefault: boolean, bLegacy?: boolean);
			}
			/**
			 * Allows to add multiple LayoutData to one control in case that a easy switch of layouts (e.g. in a
			 * Form) is needed.
			 * @resource sap/ui/core/VariantLayoutData.js
			 */
			class VariantLayoutData extends sap.ui.core.LayoutData {
				/**
				 * Constructor for a new VariantLayoutData.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Adds some multipleLayoutData to the aggregation <code>multipleLayoutData</code>.
				 * @param oMultipleLayoutData the multipleLayoutData to add; if empty, nothing is inserted
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				addMultipleLayoutData(
					oMultipleLayoutData: sap.ui.core.LayoutData
				): sap.ui.core.VariantLayoutData;

				/**
				 * Destroys all the multipleLayoutData in the aggregation <code>multipleLayoutData</code>.
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				destroyMultipleLayoutData(): sap.ui.core.VariantLayoutData;

				/**
				 * Returns a metadata object for class sap.ui.core.VariantLayoutData.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets content of aggregation <code>multipleLayoutData</code>.Allows multiple LayoutData.
				 */
				getMultipleLayoutData(): sap.ui.core.LayoutData[];

				/**
				 * Checks for the provided <code>sap.ui.core.LayoutData</code> in the aggregation
				 * <code>multipleLayoutData</code>.and returns its index if found or -1 otherwise.
				 * @param oMultipleLayoutData The multipleLayoutData whose index is looked for
				 * @returns The index of the provided control in the aggregation if found, or -1 otherwise
				 */
				indexOfMultipleLayoutData(
					oMultipleLayoutData: sap.ui.core.LayoutData
				): number;

				/**
				 * Inserts a multipleLayoutData into the aggregation <code>multipleLayoutData</code>.
				 * @param oMultipleLayoutData the multipleLayoutData to insert; if empty, nothing is inserted
				 * @param iIndex the <code>0</code>-based index the multipleLayoutData should be inserted at; for
				 *       a negative value of <code>iIndex</code>, the multipleLayoutData is inserted at position 0; for
				 * a value             greater than the current size of the aggregation, the multipleLayoutData is
				 * inserted at             the last position
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				insertMultipleLayoutData(
					oMultipleLayoutData: sap.ui.core.LayoutData,
					iIndex: number
				): sap.ui.core.VariantLayoutData;

				/**
				 * Removes all the controls from the aggregation <code>multipleLayoutData</code>.Additionally, it
				 * unregisters them from the hosting UIArea.
				 * @returns An array of the removed elements (might be empty)
				 */
				removeAllMultipleLayoutData(): sap.ui.core.LayoutData[];

				/**
				 * Removes a multipleLayoutData from the aggregation <code>multipleLayoutData</code>.
				 * @param vMultipleLayoutData The multipleLayoutData to remove or its index or id
				 * @returns The removed multipleLayoutData or <code>null</code>
				 */
				removeMultipleLayoutData(
					vMultipleLayoutData: number | string | sap.ui.core.LayoutData
				): sap.ui.core.LayoutData;
			}
			/**
			 * The LocalBusyIndicator is a special version of theBusyIndicator. This one doesn't block the whole
			 * screen - it justblocks the corresponding control and puts a local animation over thecontrol. To use
			 * the functionality of this control the correspondingcontrol needs to be enabled via the
			 * 'LocalBusyIndicatorSupport'accordingly to the ListBox control (see the init-function of theListBox).
			 * @resource sap/ui/core/LocalBusyIndicator.js
			 */
			class LocalBusyIndicator extends sap.ui.core.Control {
				/**
				 * Constructor for a new LocalBusyIndicator.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * Gets current value of property <code>height</code>.This property is the height of the control that
				 * has tobe covered. With this height the position of the animation can beproperly set.Default value is
				 * <code>100px</code>.
				 * @returns Value of property <code>height</code>
				 */
				getHeight(): any;

				/**
				 * Returns a metadata object for class sap.ui.core.LocalBusyIndicator.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>width</code>.This property is the width of the control that has
				 * tobe covered. With this width the position of the animation can beproperly set.Default value is
				 * <code>100px</code>.
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): any;

				/**
				 * Sets a new value for property <code>height</code>.This property is the height of the control that
				 * has tobe covered. With this height the position of the animation can beproperly set.When called with
				 * a value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>100px</code>.
				 * @param sHeight New value for property <code>height</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHeight(sHeight: any): sap.ui.core.LocalBusyIndicator;

				/**
				 * Sets a new value for property <code>width</code>.This property is the width of the control that has
				 * tobe covered. With this width the position of the animation can beproperly set.When called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.Default value is <code>100px</code>.
				 * @param sWidth New value for property <code>width</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWidth(sWidth: any): sap.ui.core.LocalBusyIndicator;
			}
			/**
			 * Static class for enabling declarative UI support.
			 * @resource sap/ui/core/DeclarativeSupport.js
			 */
			class DeclarativeSupport {
				constructor();

				/**
				 * Enhances the given DOM element by parsing the Control and Elements info and creatingthe SAPUI5
				 * controls for them.
				 * @param oElement the DOM element to compile
				 * @param oView The view instance to use
				 * @param isRecursive Whether the call of the function is recursive.
				 */
				compile(
					oElement: sap.ui.core.Element,
					oView?: sap.ui.core.mvc.HTMLView,
					isRecursive?: boolean
				): void;
			}
			/**
			 * Component Container
			 * @resource sap/ui/core/ComponentContainer.js
			 */
			class ComponentContainer extends sap.ui.core.Control {
				/**
				 * Constructor for a new ComponentContainer.Accepts an object literal <code>mSettings</code> that
				 * defines initialproperty values, aggregated and associated objects as well as event handlers.See
				 * {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the
				 * settings object.
				 * @param sId id for the new control, generated automatically if no id is given
				 * @param mSettings initial settings for the new control
				 */
				constructor(sId: string, mSettings?: any);

				/**
				 * ID of the element which is the current target of the association <code>component</code>, or
				 * <code>null</code>.
				 */
				getComponent(): any;

				/**
				 * Gets current value of property <code>handleValidation</code>.Enable/disable validation handling by
				 * MessageManager for this component.The resulting Messages will be propagated to the controls.Default
				 * value is <code>false</code>.
				 * @returns Value of property <code>handleValidation</code>
				 */
				getHandleValidation(): boolean;

				/**
				 * Gets current value of property <code>height</code>.Container height in CSS size
				 * @returns Value of property <code>height</code>
				 */
				getHeight(): any;

				/**
				 * Returns a metadata object for class sap.ui.core.ComponentContainer.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Gets current value of property <code>name</code>.Component name, the package where the component is
				 * contained. The property can only be applied initially.
				 * @returns Value of property <code>name</code>
				 */
				getName(): string;

				/**
				 * Gets current value of property <code>propagateModel</code>.Defines whether binding information is
				 * propagated to the component.Default value is <code>false</code>.
				 * @returns Value of property <code>propagateModel</code>
				 */
				getPropagateModel(): boolean;

				/**
				 * Gets current value of property <code>settings</code>.The settings object passed to the component
				 * when created. The property can only be applied initially.
				 * @returns Value of property <code>settings</code>
				 */
				getSettings(): any;

				/**
				 * Gets current value of property <code>url</code>.The URL of the component. The property can only be
				 * applied initially.
				 * @returns Value of property <code>url</code>
				 */
				getUrl(): any;

				/**
				 * Gets current value of property <code>width</code>.Container width in CSS size
				 * @returns Value of property <code>width</code>
				 */
				getWidth(): any;

				/**
				 * Sets the associated <code>component</code>.
				 * @param oComponent ID of an element which becomes the new target of this component association;
				 * alternatively, an element instance may be given
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setComponent(
					oComponent: any | sap.ui.core.UIComponent
				): sap.ui.core.ComponentContainer;

				/**
				 * Sets a new value for property <code>handleValidation</code>.Enable/disable validation handling by
				 * MessageManager for this component.The resulting Messages will be propagated to the controls.When
				 * called with a value of <code>null</code> or <code>undefined</code>, the default value of the
				 * property will be restored.Default value is <code>false</code>.
				 * @param bHandleValidation New value for property <code>handleValidation</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHandleValidation(
					bHandleValidation: boolean
				): sap.ui.core.ComponentContainer;

				/**
				 * Sets a new value for property <code>height</code>.Container height in CSS sizeWhen called with a
				 * value of <code>null</code> or <code>undefined</code>, the default value of the property will be
				 * restored.
				 * @param sHeight New value for property <code>height</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setHeight(sHeight: any): sap.ui.core.ComponentContainer;

				/**
				 * Sets a new value for property <code>name</code>.Component name, the package where the component is
				 * contained. The property can only be applied initially.When called with a value of <code>null</code>
				 * or <code>undefined</code>, the default value of the property will be restored.
				 * @param sName New value for property <code>name</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setName(sName: string): sap.ui.core.ComponentContainer;

				/**
				 * Sets a new value for property <code>propagateModel</code>.Defines whether binding information is
				 * propagated to the component.When called with a value of <code>null</code> or <code>undefined</code>,
				 * the default value of the property will be restored.Default value is <code>false</code>.
				 * @param bPropagateModel New value for property <code>propagateModel</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setPropagateModel(
					bPropagateModel: boolean
				): sap.ui.core.ComponentContainer;

				/**
				 * Sets a new value for property <code>settings</code>.The settings object passed to the component when
				 * created. The property can only be applied initially.When called with a value of <code>null</code> or
				 * <code>undefined</code>, the default value of the property will be restored.
				 * @param oSettings New value for property <code>settings</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setSettings(oSettings: any): sap.ui.core.ComponentContainer;

				/**
				 * Sets a new value for property <code>url</code>.The URL of the component. The property can only be
				 * applied initially.When called with a value of <code>null</code> or <code>undefined</code>, the
				 * default value of the property will be restored.
				 * @param sUrl New value for property <code>url</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setUrl(sUrl: any): sap.ui.core.ComponentContainer;

				/**
				 * Sets a new value for property <code>width</code>.Container width in CSS sizeWhen called with a value
				 * of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
				 * @param sWidth New value for property <code>width</code>
				 * @returns Reference to <code>this</code> in order to allow method chaining
				 */
				setWidth(sWidth: any): sap.ui.core.ComponentContainer;
			}
			/**
			 * Marker interface for controls which are suitable for use as label.
			 * @resource sap/ui/core/library.js
			 */
			interface Label {}
			/**
			 * 	Marker interface for toolbar controls.
			 * @resource sap/ui/core/library.js
			 */
			interface Toolbar {}
			/**
			 * Interface for the controls which are suitable to shrink.This means the control should still look
			 * fine when it gets smaller than its normal size,e.g. Text controls which can show ellipsis in case of
			 * shrink.Note: This marker interface can be implemented by controls to give a hint to the
			 * container.The control itself does not need to implement anything. A parent control that respects
			 * this interfacewill apply the "flex-shrink" as a CSS property which determines how much the item will
			 * shrink relativeto the rest of the items in the container when negative free space is distributed.
			 * @resource sap/ui/core/library.js
			 */
			interface IShrinkable {}
			/**
			 * Marker interface for controls that are not rendered "embedded" into other controls but need to be
			 * opened/closed.Such controls are handled differently during rendering.
			 * @resource sap/ui/core/library.js
			 */
			interface PopupInterface {}
			/**
			 * Font design for texts
			 */
			enum Design {
				"Monospace",
				"Standard"
			}
			/**
			 * State of the Input Method Editor (IME) for the control.Depending on its value, it allows users to
			 * enter and edit for example Chinese characters.
			 */
			enum ImeMode {
				"Active",
				"Auto",
				"Disabled",
				"Inactive"
			}
			/**
			 * Configuration options for text wrapping.
			 */
			enum Wrapping {
				"Hard",
				"None",
				"Off",
				"Soft"
			}
			/**
			 * Configuration options for the colors of a progress bar
			 */
			enum BarColor {
				"CRITICAL",
				"NEGATIVE",
				"NEUTRAL",
				"POSITIVE"
			}
			/**
			 * Priorities for general use.
			 */
			enum Priority {
				"High",
				"Low",
				"Medium",
				"None"
			}
			/**
			 * Defines the different possible states of an element that can be open or closed and does not
			 * onlytoggle between these states, but also spends some time in between (e.g. because of an
			 * animation).
			 */
			enum OpenState {
				"CLOSED",
				"CLOSING",
				"OPEN",
				"OPENING"
			}
			/**
			 * Semantic Colors of an icon.
			 */
			enum IconColor {
				"Critical",
				"Default",
				"Negative",
				"Neutral",
				"Positive"
			}
			/**
			 * Defines the possible values for horizontal and vertical scrolling behavior.
			 */
			enum Scrolling {
				"Auto",
				"Hidden",
				"None",
				"Scroll"
			}
			/**
			 * Configuration options for text alignments.
			 */
			enum TextAlign {
				"Begin",
				"Center",
				"End",
				"Initial",
				"Left",
				"Right"
			}
			/**
			 * Level of a title.
			 */
			enum TitleLevel {
				"Auto",
				"H1",
				"H2",
				"H3",
				"H4",
				"H5",
				"H6"
			}
			/**
			 * Marker for the correctness of the current value.
			 */
			enum ValueState {
				"Error",
				"None",
				"Success",
				"Warning"
			}
			/**
			 * Defines the different message types of a message
			 */
			enum MessageType {
				"Error",
				"Information",
				"None",
				"Success",
				"Warning"
			}
			/**
			 * Orientation of an UI element
			 */
			enum Orientation {
				"Horizontal",
				"Vertical"
			}
			/**
			 * The types of Calendar
			 */
			enum CalendarType {
				"Gregorian",
				"Islamic",
				"Japanese"
			}
			/**
			 * Configuration options for the direction of texts.
			 */
			enum TextDirection {
				"Inherit",
				"LTR",
				"RTL"
			}
			/**
			 * Configuration options for vertical alignments, for example of a layout cell content within the
			 * borders.
			 */
			enum VerticalAlign {
				"Bottom",
				"Inherit",
				"Middle",
				"Top"
			}
			/**
			 * Defines the accessible roles for ARIA support. This enumeration is used with the AccessibleRole
			 * control property.For more information, goto "Roles for Accessible Rich Internet Applications
			 * (WAI-ARIA Roles)" at the www.w3.org homepage.
			 */
			enum AccessibleRole {
				"Alert",
				"AlertDialog",
				"Application",
				"Banner",
				"Button",
				"Checkbox",
				"ColumnHeader",
				"Combobox",
				"ContentInfo",
				"Definition",
				"Description",
				"Dialog",
				"Directory",
				"Document",
				"Grid",
				"GridCell",
				"Group",
				"Heading",
				"Img",
				"Link",
				"List",
				"Listbox",
				"ListItem",
				"Log",
				"Main",
				"Marquee",
				"Menu",
				"Menubar",
				"MenuItem",
				"MenuItemCheckbox",
				"MenuItemRadio",
				"Navigation",
				"Note",
				"Option",
				"Presentation",
				"ProgressBar",
				"Radio",
				"RadioGroup",
				"Region",
				"Row",
				"RowHeader",
				"Search",
				"Secondary",
				"SeeAlso",
				"Separator",
				"Slider",
				"SpinButton",
				"Status",
				"Tab",
				"Tablist",
				"Tabpanel",
				"Textbox",
				"Timer",
				"Toolbar",
				"Tooltip",
				"Tree",
				"TreeGrid",
				"TreeItem"
			}
			/**
			 * Actions are: Click on track, button, drag of thumb, or mouse wheel click
			 */
			enum ScrollBarAction {
				"Drag",
				"MouseWheel",
				"Page",
				"Step"
			}
			/**
			 * Configuration options for horizontal alignments of controls
			 */
			enum HorizontalAlign {
				"Begin",
				"Center",
				"End",
				"Left",
				"Right"
			}
			/**
			 * Defines the accessible landmark roles for ARIA support. This enumeration is used with the
			 * AccessibleRole control property.For more information, goto "Roles for Accessible Rich Internet
			 * Applications (WAI-ARIA Roles)" at the www.w3.org homepage.
			 */
			enum AccessibleLandmarkRole {
				"Banner",
				"Complementary",
				"Main",
				"Navigation",
				"None",
				"Region",
				"Search"
			}
		}
	}
}
