declare namespace sap {
	namespace ui {
		namespace model {
			/**
			 * FormatException classThis exception is thrown, when an error occurs while trying to convert a value
			 * of the model toa specific property value in the UI.
			 */
			function FormatException(): void;

			/**
			 * ParseException classThis exception is thrown, when a parse error occurs while converting astring
			 * value to a specific property type in the model.
			 */
			function ParseException(): void;

			/**
			 * ValidateException classThis exception is thrown, when a validation error occurs while checking
			 * thedefined constraints for a type.
			 */
			function ValidateException(): void;
			namespace xml {
				/**
				 * Model implementation for XML format
				 * @resource sap/ui/model/xml/XMLModel.js
				 */
				export class XMLModel extends sap.ui.model.ClientModel {
					/**
					 * Constructor for a new XMLModel.
					 * @param oData either the URL where to load the XML from or a XML
					 */
					constructor(oData: any);

					/**
					 * Returns a metadata object for class sap.ui.model.xml.XMLModel.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the object for the given <code>path</code>
					 * @param sPath the path to the object
					 * @param oContext the context which will be used to retrieve the object
					 * @returns the object
					 */
					getObject(sPath: string, oContext?: any): any;

					/**
					 * Returns the value for the property with the given <code>sPropertyName</code>
					 * @param sPath the path to the property
					 * @param oContext the context which will be used to retrieve the property
					 */
					getProperty(sPath: string, oContext?: any): any;

					/**
					 * Serializes the current XML data of the model into a string.
					 */
					getXML(): void;

					/**
					 * Load XML-encoded data from the server using a GET HTTP request and store the resulting XML data in
					 * the model.Note: Due to browser security restrictions, most "Ajax" requests are subject to the same
					 * origin policy,the request can not successfully retrieve data from a different domain, subdomain, or
					 * protocol.
					 * @param sURL A string containing the URL to which the request is sent.
					 * @param oParameters A map or string that is sent to the server with the request.
					 * @param bAsync if the request should be asynchron or not. Default is true.
					 * @param sType of request. Default is 'GET'
					 * @param bCache force no caching if false. Default is false
					 * @param mHeaders An object of additional header key/value pairs to send along with the request
					 */
					loadData(
						sURL: string,
						oParameters: any | string,
						bAsync: boolean,
						sType: string,
						bCache: string,
						mHeaders: any
					): void;

					/**
					 * Sets the provided XML encoded data object to the model
					 * @param oData the data to set to the model
					 */
					setData(oData: any): void;

					/**
					 * Sets an XML namespace to use in the binding path
					 * @param sNameSpace the namespace URI
					 * @param sPrefix the prefix for the namespace (optional)
					 */
					setNameSpace(sNameSpace: string, sPrefix?: string): void;

					/**
					 * Sets a new value for the given property <code>sPropertyName</code> in the model.If the model value
					 * changed all interested parties are informed.
					 * @param sPath path of the property to set
					 * @param oValue value to set the property to
					 * @param oContext the context which will be used to set the property
					 * @param bAsyncUpdate whether to update other bindings dependent on this property asynchronously
					 * @returns true if the value was set correctly and false if errors occurred like the entry was not
					 * found.
					 */
					setProperty(
						sPath: string,
						oValue: any,
						oContext?: any,
						bAsyncUpdate?: boolean
					): boolean;

					/**
					 * Sets the specified XML formatted string text to the model
					 * @param sXMLText the XML data as string
					 */
					setXML(sXMLText: string): void;
				}
			}
			namespace json {
				/**
				 * Model implementation for JSON formatThe observation feature is experimental! When observation is
				 * activated, the application can directly change theJS objects without the need to call setData,
				 * setProperty or refresh. Observation does only work for existingproperties in the JSON, it can not
				 * detect new properties or new array entries.
				 * @resource sap/ui/model/json/JSONModel.js
				 */
				export class JSONModel<T = any> extends sap.ui.model.ClientModel<T> {
					/**
					 * Constructor for a new JSONModel.
					 * @param oData either the URL where to load the JSON from or a JS object
					 * @param bObserve whether to observe the JSON data for property changes (experimental)
					 */
					constructor(oData?: T, bObserve?: boolean);

					/**
					 * Serializes the current JSON data of the model into a string.Note: May not work in Internet Explorer
					 * 8 because of lacking JSON support (works only if IE 8 mode is enabled)
					 * @returns sJSON the JSON data serialized as string
					 */
					getJSON(): string;

					/**
					 * Returns a metadata object for class sap.ui.model.json.JSONModel.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the value for the property with the given <code>sPropertyName</code>
					 * @param sPath the path to the property
					 * @param oContext the context which will be used to retrieve the property
					 */
					getProperty(sPath: string, oContext?: any): any;

					/**
					 * Load JSON-encoded data from the server using a GET HTTP request and store the resulting JSON data in
					 * the model.Note: Due to browser security restrictions, most "Ajax" requests are subject to the same
					 * origin policy,the request can not successfully retrieve data from a different domain, subdomain, or
					 * protocol.
					 * @param sURL A string containing the URL to which the request is sent.
					 * @param oParameters A map or string that is sent to the server with the request.Data that is sent to
					 * the server is appended to the URL as a query string.If the value of the data parameter is an object
					 * (map), it is converted to a string andurl-encoded before it is appended to the URL.
					 * @param bAsync By default, all requests are sent asynchronous(i.e. this is set to true by default).
					 * If you need synchronous requests, set this option to false.Cross-domain requests do not support
					 * synchronous operation. Note that synchronous requests maytemporarily lock the browser, disabling any
					 * actions while the request is active.
					 * @param sType The type of request to make ("POST" or "GET"), default is "GET".Note: Other HTTP
					 * request methods, such as PUT and DELETE, can also be used here, butthey are not supported by all
					 * browsers.
					 * @param bMerge whether the data should be merged instead of replaced
					 * @param bCache force no caching if false. Default is false
					 * @param mHeaders An object of additional header key/value pairs to send along with the request
					 */
					loadData(
						sURL: string,
						oParameters?: any | string,
						bAsync?: boolean,
						sType?: string,
						bMerge?: boolean,
						bCache?: string,
						mHeaders?: any
					): void;

					/**
					 * Sets the JSON encoded data to the model.
					 * @param oData the data to set on the model
					 * @param bMerge whether to merge the data instead of replacing it
					 */
					setData(oData: T, bMerge?: boolean): void;

					/**
					 * Sets the JSON encoded string data to the model.
					 * @param sJSONText the string data to set on the model
					 * @param bMerge whether to merge the data instead of replacing it
					 */
					setJSON(sJSONText: string, bMerge?: boolean): void;

					/**
					 * Sets a new value for the given property <code>sPropertyName</code> in the model.If the model value
					 * changed all interested parties are informed.
					 * @param sPath path of the property to set
					 * @param oValue value to set the property to
					 * @param oContext the context which will be used to set the property
					 * @param bAsyncUpdate whether to update other bindings dependent on this property asynchronously
					 * @returns true if the value was set correctly and false if errors occurred like the entry was not
					 * found.
					 */
					setProperty(
						sPath: string,
						oValue: any,
						oContext?: any,
						bAsyncUpdate?: boolean
					): boolean;
				}
			}
			namespace type {
				/**
				 * This class represents date simple types.
				 * @resource sap/ui/model/type/Date.js
				 */
				export class Date extends sap.ui.model.SimpleType {
					/**
					 * Constructor for a Date type.
					 * @param oFormatOptions options used to create a DateFormat for formatting / parsing. Supports the
					 * same options as {@link sap.ui.core.format.DateFormat.getDateInstance DateFormat.getDateInstance}
					 * @param oConstraints value constraints.
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.Date.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 */
					getOutputPattern(): void;
				}
				/**
				 * This class represents time simple types.
				 * @resource sap/ui/model/type/Time.js
				 */
				export class Time extends sap.ui.model.type.Date {
					/**
					 * Constructor for a Time type.
					 * @param oFormatOptions options used to create a DateFormat for formatting / parsing to/from external
					 * values and          optionally for a second DateFormat to convert between the data source format
					 * (Model) and the internally used JavaScript Date.format.          For both DateFormat objects, the
					 * same options are supported as for {@link sap.ui.core.format.DateFormat.getTimeInstance
					 * DateFormat.getTimeInstance}.          Note that this differs from the base type.
					 * @param oConstraints value constraints. Supports the same kind of constraints as its base type Date,
					 * but note the different format options (Date vs. Time)
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.Time.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * This class represents float simple types.
				 * @resource sap/ui/model/type/Float.js
				 */
				export class Float extends sap.ui.model.SimpleType {
					/**
					 * Constructor for a Float type.
					 * @param oFormatOptions formatting options. Supports the same options as {@link
					 * sap.ui.core.format.NumberFormat.getFloatInstance NumberFormat.getFloatInstance}
					 * @param oConstraints value constraints.
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.Float.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * This class represents string simple types.
				 * @resource sap/ui/model/type/String.js
				 */
				export class String extends sap.ui.model.SimpleType {
					/**
					 * Constructor for a String type.
					 * @param oFormatOptions formatting options. String doesn't support any formatting options
					 * @param oConstraints value constraints. All given constraints must be fulfilled by a value to be
					 * valid
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.String.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * This class represents integer simple types.
				 * @resource sap/ui/model/type/Integer.js
				 */
				export class Integer extends sap.ui.model.SimpleType {
					/**
					 * Constructor for a Integer type.
					 * @param oFormatOptions formatting options. Supports the same options as {@link
					 * sap.ui.core.format.NumberFormat.getIntegerInstance NumberFormat.getIntegerInstance}
					 * @param oConstraints value constraints.
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.Integer.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * This class represents boolean simple types.
				 * @resource sap/ui/model/type/Boolean.js
				 */
				export class Boolean extends sap.ui.model.SimpleType {
					/**
					 * Constructor for a Boolean type.
					 * @param oFormatOptions formatting options. Boolean doesn't support any specific format options
					 * @param oConstraints value constraints. Boolean doesn't support additional constraints
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.Boolean.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * This class represents the currency composite type.
				 * @resource sap/ui/model/type/Currency.js
				 */
				export class Currency extends sap.ui.model.CompositeType {
					/**
					 * Constructor for a Currency type.
					 * @param oFormatOptions formatting options. Supports the same options as {@link
					 * sap.ui.core.format.NumberFormat.getCurrencyInstance NumberFormat.getCurrencyInstance}
					 * @param oConstraints value constraints.
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Format the given array containing amount and currency code to an output value of type string.Other
					 * internal types than 'string' are not supported by the Currency type.If an source format is has been
					 * defined for this type, the formatValue does also accepta string value as input, which will be parsed
					 * into an array using the source format.If aValues is not defined or null, null will be returned.
					 * @param vValue the array of values or string value to be formatted
					 * @param sInternalType the target type
					 * @returns the formatted output value
					 */
					formatValue(vValue: any[] | string, sInternalType: string): any;

					/**
					 * Returns a metadata object for class sap.ui.model.type.Currency.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Parse a string value to an array containing amount and currency. Parsing of otherinternal types than
					 * 'string' is not supported by the Currency type.In case a source format has been defined, after
					 * parsing the currency is formattedusing the source format and a string value is returned instead.
					 * @param vValue the value to be parsed
					 * @param sInternalType the source type
					 * @param aCurrentValues the current values of all binding parts
					 * @returns the parse result array
					 */
					parseValue(
						vValue: any,
						sInternalType: string,
						aCurrentValues: any[]
					): any[] | string;
				}
				/**
				 * This class represents datetime simple types.
				 * @resource sap/ui/model/type/DateTime.js
				 */
				export class DateTime extends sap.ui.model.type.Date {
					/**
					 * Constructor for a DateTime type.
					 * @param oFormatOptions options used to create a DateFormat for formatting / parsing to/from external
					 * values and          optionally for a second DateFormat to convert between the data source format
					 * (Model) and the internally used JavaScript Date.format.          For both DateFormat objects, the
					 * same options are supported as for {@link sap.ui.core.format.DateFormat.getDateTimeInstance
					 * DateFormat.getDateTimeInstance}.          Note that this differs from the base type.
					 * @param oConstraints value constraints. Supports the same kind of constraints as its base type Date,
					 * but note the different format options (Date vs. DateTime)
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.DateTime.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * This class represents file size simple types.
				 * @resource sap/ui/model/type/FileSize.js
				 */
				export class FileSize extends sap.ui.model.SimpleType {
					/**
					 * Constructor for a FileSize type.
					 * @param oFormatOptions formatting options. Supports the same options as {@link
					 * sap.ui.core.format.FileSizeFormat.getInstance FileSizeFormat.getInstance}
					 * @param oConstraints value constraints.
					 */
					constructor(oFormatOptions: any, oConstraints?: any);

					/**
					 * Returns a metadata object for class sap.ui.model.type.FileSize.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
			}
			namespace odata {
				/**
				 * Adapter for TreeBindings to add the ListBinding functionality and use thetree structure in list
				 * based controls.
				 */
				function ODataTreeBindingAdapter(): void;

				/**
				 * Adapter for TreeBindings to add the ListBinding functionality and use thetree structure in list
				 * based controls.
				 */
				function ODataTreeBindingFlat(): void;
				namespace v4 {
					/**
					 * Implementation of an OData V4 model's context.  The context is a pointer to model data as returned
					 * by a query from a  {@link sap.ui.model.odata.v4.ODataContextBinding context binding} or a  {@link
					 * sap.ui.model.odata.v4.ODataListBinding list binding}. Contexts are always and only  created by such
					 * bindings. A context for a context binding points to the complete query  result. A context for a list
					 * binding points to one specific entry in the binding's  collection. A property binding does not have
					 * a context, you can access its value via  {@link sap.ui.model.odata.v4.ODataPropertyBinding#getValue
					 * getValue}.  Applications can access model data only via a context, either synchronously with the
					 * risk  that the values are not available yet ({@link #getProperty} and {@link #getObject}) or
					 * asynchronously ({@link #requestProperty} and {@link #requestObject}).
					 * @resource sap/ui/model/odata/v4/Context.js
					 */
					export class Context extends sap.ui.model.Context {
						/**
						 * Returns the "canonical path" of the entity for this context.According to "4.3.1 Canonical URL" of
						 * the specification "OData Version 4.0 Part 2: URLConventions", this is the "name of the entity set
						 * associated with the entity followed by thekey predicate identifying the entity within the
						 * collection".Use the canonical path in {@link sap.ui.core.Element#bindElement} to create an
						 * elementbinding.
						 * @since 1.39.0
						 */
						public getCanonicalPath: any;

						/**
						 * Returns a promise for the "canonical path" of the entity for this context.According to "4.3.1
						 * Canonical URL" of the specification "OData Version 4.0 Part 2: URLConventions", this is the "name of
						 * the entity set associated with the entity followed by thekey predicate identifying the entity within
						 * the collection".Use the canonical path in {@link sap.ui.core.Element#bindElement} to create an
						 * elementbinding.
						 * @since 1.39.0
						 */
						public requestCanonicalPath: any;

						/**
						 * Do <strong>NOT</strong> call this private constructor for a new <code>Context</code>. In theOData V4
						 * model you cannot create contexts at will: retrieve them from a binding or a viewelement instead.
						 * @param oModel The model
						 * @param oBinding A binding that belongs to the model
						 * @param sPath An absolute path without trailing slash
						 * @param iIndex Index of item (within the collection addressed by <code>sPath</code>) represented  by
						 * this context; used by list bindings, not context bindings
						 */
						constructor(
							oModel: sap.ui.model.odata.v4.ODataModel,
							oBinding:
								| sap.ui.model.odata.v4.ODataContextBinding
								| sap.ui.model.odata.v4.ODataListBinding,
							sPath: string,
							iIndex?: number
						);

						/**
						 * Returns the binding this context belongs to.
						 * @since 1.39.0
						 * @returns The context's binding
						 */
						getBinding():
							| sap.ui.model.odata.v4.ODataContextBinding
							| sap.ui.model.odata.v4.ODataListBinding;

						/**
						 * Returns the context's index within the binding's collection.
						 * @since 1.39.0
						 * @returns The context's index within the binding's collection or <code>undefined</code> if the
						 * context does not belong to a list binding.
						 */
						getIndex(): number;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v4.Context.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the value for the given path relative to this context. The function allows access tothe
						 * complete data the context points to (when <code>sPath</code> is "") or any part thereof.The data is
						 * a JSON structure as described in<a
						 * href="http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html">"OData
						 * JSON Format Version 4.0"</a>.Note that the function clones the result. Modify values via{@link
						 * sap.ui.model.odata.v4.ODataPropertyBinding#setValue}.Returns <code>undefined</code> if the data is
						 * not (yet) available. Use{@link #requestObject} for asynchronous access.
						 * @since 1.39.0
						 * @param sPath A relative path within the JSON structure
						 * @returns The requested value
						 */
						getObject(sPath: string): any;

						/**
						 * Returns the property value for the given path relative to this context. The path is expectedto point
						 * to a structural property with primitive type. Returns <code>undefined</code>if the data is not (yet)
						 * available. Use {@link #requestProperty} for asynchronous access.
						 * @since 1.39.0
						 * @param sPath A relative path within the JSON structure
						 * @param bExternalFormat If <code>true</code>, the value is returned in external format using a UI5
						 * type for the  given property path that formats corresponding to the property's EDM type and
						 * constraints.  If the type is not yet available, <code>undefined</code> is returned.
						 */
						getProperty(sPath: string, bExternalFormat?: boolean): any;

						/**
						 * Returns a promise on the value for the given path relative to this context. The functionallows
						 * access to the complete data the context points to (when <code>sPath</code> is "") orany part
						 * thereof. The data is a JSON structure as described in<a
						 * href="http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html">"OData
						 * JSON Format Version 4.0"</a>.Note that the function clones the result. Modify values via{@link
						 * sap.ui.model.odata.v4.ODataPropertyBinding#setValue}.
						 * @since 1.39.0
						 * @param sPath A relative path within the JSON structure
						 * @returns A promise on the requested value
						 */
						requestObject(sPath: string): JQueryPromise<any>;

						/**
						 * Returns a promise on the property value for the given path relative to this context. The pathis
						 * expected to point to a structural property with primitive type.
						 * @since 1.39.0
						 * @param sPath A relative path within the JSON structure
						 * @param bExternalFormat If <code>true</code>, the value is returned in external format using a UI5
						 * type for the  given property path that formats corresponding to the property's EDM type and
						 * constraints.
						 * @returns A promise on the requested value; it is rejected if the value is not primitive
						 */
						requestProperty(
							sPath: string,
							bExternalFormat?: boolean
						): JQueryPromise<any>;

						/**
						 * Returns a string representation of this object including the binding path.
						 * @since 1.39.0
						 * @returns A string description of this binding
						 */
						toString(): string;
					}
					/**
					 * Model implementation for OData V4.  Every resource path (relative to the service root URL, no query
					 * options) according to  "4 Resource Path" in specification "OData Version 4.0 Part 2: URL
					 * Conventions" is  a valid data binding path within this model if a leading slash is added; for
					 * example  "/" + "EMPLOYEES('A%2FB%26C')" to access an entity instance with key "A/B&C". Note that
					 * appropriate URI encoding is necessary. "4.5.1 Addressing Actions" needs an operation  binding, see
					 * {@link sap.ui.model.odata.v4.ODataContextBinding}.  Note that the OData V4 model has its own {@link
					 * sap.ui.model.odata.v4.Context} class.  The model does not support any public events; attaching an
					 * event handler leads to an error.
					 * @resource sap/ui/model/odata/v4/ODataModel.js
					 */
					export class ODataModel extends sap.ui.model.Model {
						/**
						 * Constructor for a new ODataModel.
						 * @param mParameters The parameters
						 */
						constructor(mParameters: any);

						/**
						 * Creates a new context binding for the given path, context and parameters.This binding is inactive
						 * and will not know the bound context initially.You have to call {@link
						 * sap.ui.model.Binding#initialize initialize()} to get it updatedasynchronously and register a change
						 * listener at the binding to be informed when the boundcontext is available.
						 * @since 1.37.0
						 * @param sPath The binding path in the model; must not end with a slash
						 * @param oContext The context which is required as base for a relative path
						 * @param mParameters Map of binding parameters which can be OData query options as specified in
						 * "OData Version 4.0 Part 2: URL Conventions" or the binding-specific parameters "$$groupId"  and
						 * "$$updateGroupId".  Note: If parameters are provided for a relative binding path, the binding
						 * accesses data  with its own service requests instead of using its parent binding.  The following
						 * OData query options are allowed:  <ul>  <li> All "5.2 Custom Query Options" except for those with a
						 * name starting with "sap-"  <li> The $expand, $filter, $orderby and $select "5.1 System Query
						 * Options"; OData V4 only  allows $filter and $orderby inside resource paths that identify a
						 * collection. In our case  here, this means you can only use them inside $expand.  </ul>  All other
						 * query options lead to an error.  Query options specified for the binding overwrite model query
						 * options.
						 * @returns The context binding
						 */
						bindContext(
							sPath: string,
							oContext?: sap.ui.model.odata.v4.Context,
							mParameters?: any
						): sap.ui.model.odata.v4.ODataContextBinding;

						/**
						 * Creates a new list binding for the given path and optional context which mustresolve to an absolute
						 * OData path for an entity set.
						 * @since 1.37.0
						 * @param sPath The binding path in the model; must not be empty or end with a slash
						 * @param oContext The context which is required as base for a relative path
						 * @param vSorters The dynamic sorters to be used initially. Call  {@link
						 * sap.ui.model.odata.v4.ODataListBinding#sort} to replace them. Static sorters, as  defined in the
						 * '$orderby' binding parameter, are always executed after the dynamic sorters.  Supported since
						 * 1.39.0.
						 * @param vFilters The dynamic application filters to be used initially. Call  {@link
						 * sap.ui.model.odata.v4.ODataListBinding#filter} to replace them. Static filters,  as defined in the
						 * '$filter' binding parameter, are always combined with the dynamic  filters using a logical
						 * <code>AND</code>.  Supported since 1.39.0.
						 * @param mParameters Map of binding parameters which can be OData query options as specified in
						 * "OData Version 4.0 Part 2: URL Conventions" or the binding-specific parameters "$$groupId"  and
						 * "$$updateGroupId".  Note: If parameters are provided for a relative binding path, the binding
						 * accesses data  with its own service requests instead of using its parent binding.  The following
						 * OData query options are allowed:  <ul>  <li> All "5.2 Custom Query Options" except for those with a
						 * name starting with "sap-"  <li> The $expand, $filter, $orderby and $select "5.1 System Query
						 * Options"  </ul>  All other query options lead to an error.  Query options specified for the binding
						 * overwrite model query options.
						 * @returns The list binding
						 */
						bindList(
							sPath: string,
							oContext?: sap.ui.model.odata.v4.Context,
							vSorters?: sap.ui.model.Sorter | sap.ui.model.Sorter[],
							vFilters?: sap.ui.model.Filter | sap.ui.model.Filter[],
							mParameters?: any
						): sap.ui.model.odata.v4.ODataListBinding;

						/**
						 * Creates a new property binding for the given path. This binding is inactive and will notknow the
						 * property value initially. You have to call {@link sap.ui.model.Binding#initializeinitialize()} to
						 * get it updated asynchronously and register a change listener at the bindingto be informed when the
						 * value is available.
						 * @since 1.37.0
						 * @param sPath The binding path in the model; must not be empty or end with a slash
						 * @param oContext The context which is required as base for a relative path
						 * @param mParameters Map of binding parameters which can be OData query options as specified in
						 * "OData Version 4.0 Part 2: URL Conventions" or the binding-specific parameters "$$groupId"  and
						 * "$$updateGroupId".  Note: Binding parameters may only be provided for absolute binding paths as only
						 * those  lead to a data service request.  All "5.2 Custom Query Options" are allowed except for those
						 * with a name starting with  "sap-". All other query options lead to an error.  Query options
						 * specified for the binding overwrite model query options.
						 * @returns The property binding
						 */
						bindProperty(
							sPath: string,
							oContext?: sap.ui.model.odata.v4.Context,
							mParameters?: any
						): sap.ui.model.odata.v4.ODataPropertyBinding;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						bindTree(
							sPath: string,
							oContext?: any,
							aFilters?: any[],
							mParameters?: any,
							aSorters?: any[]
						): sap.ui.model.TreeBinding;

						/**
						 * Cannot create contexts at this model at will; retrieve them from a binding instead.
						 * @since 1.37.0
						 */
						createBindingContext(
							sPath: string,
							oContext?: any,
							mParameters?: any,
							fnCallBack?: any,
							bReload?: boolean
						): sap.ui.model.Context;

						/**
						 * Destroys this model and its meta model.
						 * @since 1.38.0
						 */
						destroy(bSuppressInvalidate: boolean): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						destroyBindingContext(): void;

						/**
						 * Returns the meta model for this ODataModel.
						 * @since 1.37.0
						 * @returns The meta model for this ODataModel
						 */
						getMetaModel(): sap.ui.model.odata.v4.ODataMetaModel;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						getObject(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						getOriginalProperty(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						getProperty(): void;

						/**
						 * Returns <code>true</code> if there are pending changes that would be reset by{@link #refresh}.
						 * @since 1.39.0
						 * @returns <code>true</code> if there are pending changes
						 */
						hasPendingChanges(): boolean;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						isList(): void;

						/**
						 * Refreshes the model by calling refresh on all bindings which have a change event
						 * handlerattached.Note: When calling refresh multiple times, the result of the request triggered by
						 * the lastcall determines the model's data; it is <b>independent</b>of the order of calls to {@link
						 * #submitBatch} with the given group ID.
						 * @since 1.37.0
						 * @param sGroupId The group ID to be used for refresh; valid values are <code>undefined</code>,
						 * <code>'$auto'</code>, <code>'$direct'</code> or application group IDs as specified in  {@link
						 * #submitBatch}
						 */
						refresh(sGroupIdOrForceUpdate: string | boolean): void;

						/**
						 * Returns a promise for the "canonical path" of the entity for the given context.According to "4.3.1
						 * Canonical URL" of the specification "OData Version 4.0 Part 2: URLConventions", this is the "name of
						 * the entity set associated with the entity followed by thekey predicate identifying the entity within
						 * the collection".Use the canonical path in {@link sap.ui.core.Element#bindElement} to create an
						 * elementbinding.
						 * @since 1.37.0
						 * @param oEntityContext A context in this model which must point to a non-contained OData entity
						 * @returns A promise which is resolved with the canonical path (e.g. "/EMPLOYEES(ID='1')") in case of
						 * success, or rejected with an instance of <code>Error</code> in case of failure, e.g. when  the given
						 * context does not point to an entity
						 */
						requestCanonicalPath(
							oEntityContext: sap.ui.model.odata.v4.Context
						): JQueryPromise<any>;

						/**
						 * Resets all property changes associated with the given application group ID which have notyet been
						 * submitted via {@link #submitBatch}.
						 * @since 1.39.0
						 * @param sGroupId The application group ID, which is a non-empty string consisting of alphanumeric
						 * characters from the basic Latin alphabet, including the underscore. If it is
						 * <code>undefined</code>, the model's <code>updateGroupId</code> is used. Note that the  default
						 * <code>updateGroupId</code> is "$auto", which is invalid here.
						 */
						resetChanges(sGroupId: string): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						setLegacySyntax(): void;

						/**
						 * Submits the requests associated with the given application group ID in one batch request.
						 * @since 1.37.0
						 * @param sGroupId The application group ID, which is a non-empty string consisting of alphanumeric
						 * characters from the basic Latin alphabet, including the underscore.
						 * @returns A promise on the outcome of the HTTP request resolving with <code>undefined</code>; it is
						 * rejected with an error if the batch request itself fails
						 */
						submitBatch(sGroupId: string): JQueryPromise<any>;

						/**
						 * Returns a string representation of this object including the service URL.
						 * @since 1.37.0
						 * @returns A string description of this model
						 */
						toString(): string;
					}
					/**
					 * Implementation of an OData meta data model which offers access to OData V4 meta data.  The meta
					 * model does not support any public events; attaching an event handler leads to an  error.  This model
					 * is read-only.
					 * @resource sap/ui/model/odata/v4/ODataMetaModel.js
					 */
					export class ODataMetaModel extends sap.ui.model.MetaModel {
						/**
						 * Do <strong>NOT</strong> call this private constructor for a new <code>ODataMetaModel</code>,but
						 * rather use {@link sap.ui.model.odata.v4.ODataModel#getMetaModel getMetaModel} instead.
						 * @param oRequestor The meta data requestor
						 * @param sUrl The URL to the $metadata document of the service
						 */
						constructor(oRequestor: any, sUrl: string);

						/**
						 * Creates a list binding for this meta data model which iterates content from the given path(relative
						 * to the given context), sorted and filtered as indicated.By default, OData names are iterated and a
						 * trailing slash is implicitly added to the path(see {@link #requestObject requestObject} for the
						 * effects this has); technical propertiesand inline annotations are filtered out.A path which ends
						 * with an "@" segment can be used to iterate all inline or externaltargeting annotations; no trailing
						 * slash is added implicitly; technical properties and ODatanames are filtered out.
						 * @since 1.37.0
						 * @param sPath A relative or absolute path within the meta data model, for example "/EMPLOYEES"
						 * @param oContext The context to be used as a starting point in case of a relative path
						 * @param aSorters Initial sort order, see {@link sap.ui.model.ListBinding#sort sort}
						 * @param aFilters Initial application filter(s), see {@link sap.ui.model.ListBinding#filter filter}
						 * @returns A list binding for this meta data model
						 */
						bindList(
							sPath: string,
							oContext?: sap.ui.model.Context,
							aSorters?: sap.ui.model.Sorter | sap.ui.model.Sorter[],
							aFilters?: sap.ui.model.Filter | sap.ui.model.Filter[]
						): sap.ui.model.ListBinding;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						bindTree(
							sPath: string,
							oContext?: any,
							aFilters?: any[],
							mParameters?: any,
							aSorters?: any[]
						): sap.ui.model.TreeBinding;

						/**
						 * Returns the OData meta data model context corresponding to the given OData data model path.
						 * @since 1.37.0
						 * @param sPath An absolute data path within the OData data model, for example
						 * "/EMPLOYEES/0/ENTRYDATE"
						 * @returns The corresponding meta data context within the OData meta data model, for example with
						 * meta data path "/EMPLOYEES/ENTRYDATE"
						 */
						getMetaContext(sPath: string): sap.ui.model.Context;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v4.ODataMetaModel.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the meta data object for the given path relative to the given context.
						 * Returns<code>undefined</code> in case the meta data is not (yet) available. Use{@link #requestObject
						 * requestObject} for asynchronous access.
						 * @since 1.37.0
						 * @param sPath A relative or absolute path within the meta data model
						 * @param oContext The context to be used as a starting point in case of a relative path
						 * @returns The requested meta data object if it is already available, or <code>undefined</code>
						 */
						getObject(sPath: string, oContext?: sap.ui.model.Context): any;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						getOriginalProperty(): void;

						/**
						 * @since 1.37.0
						 */
						getProperty(): void;

						/**
						 * Returns the UI5 type for the given property path that formats and parses corresponding tothe
						 * property's EDM type and constraints. The property's type must be a primitive type. Use{@link
						 * #requestUI5Type requestUI5Type} for asynchronous access.
						 * @since 1.37.0
						 * @param sPath An absolute path to an OData property within the OData data model
						 * @returns The corresponding UI5 type from <code>sap.ui.model.odata.type</code>, if all required meta
						 * data to calculate this type is already available; if no specific type can be determined, a  warning
						 * is logged and <code>sap.ui.model.odata.type.Raw</code> is used
						 */
						getUI5Type(sPath: string): sap.ui.model.odata.type.ODataType;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						isList(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						refresh(): void;

						/**
						 * Requests the meta data value for the given path relative to the given context (see{@link #resolve
						 * resolve} on how this resolution happens and how slashes are inserted as aseparator). Returns a
						 * <code>Promise</code> which is resolved with the requested meta datavalue or rejected with an error
						 * (only in case meta data cannot be loaded). An invalid pathleads to an <code>undefined</code> result
						 * and a warning is logged. Use{@link #getObject getObject} for synchronous access.The basic idea is
						 * that every path described in "14.2.1 Attribute Target" in specification"OData Version 4.0 Part 3:
						 * Common Schema Definition Language" is a valid absolute pathwithin the meta data model if a leading
						 * slash is added; for example"/" +
						 * "MySchema.MyEntityContainer/MyEntitySet/MyComplexProperty/MyNavigationProperty". Also,every path
						 * described in "14.5.2 Expression edm:AnnotationPath","14.5.11 Expression edm:NavigationPropertyPath",
						 * "14.5.12 Expression edm:Path", and"14.5.13 Expression edm:PropertyPath" is a valid relative path
						 * within the meta data modelif a suitable prefix is added which addresses an entity container, entity
						 * set, singleton,complex type, entity type, or property; for
						 * example"/MySchema.MyEntityType/MyProperty" + "@vCard.Address#work/FullName".The absolute path is
						 * split into segments and followed step-by-step, starting at the globalscope of all known qualified
						 * OData names. There are two technical properties there:"$Version" (typically "4.0") and
						 * "$EntityContainer" with the name of the single entitycontainer for this meta data model's service.An
						 * empty segment in between is invalid. An empty segment at the end caused by a trailingslash
						 * differentiates between a name and the object it refers to. This way,"/$EntityContainer" refers to
						 * the name of the single entity container and"/$EntityContainer/" refers to the single entity
						 * container as an object.The segment "@sapui.name" refers back to the last OData name (simple
						 * identifier or qualifiedname) or annotation name encountered during path traversal immediately before
						 * "@sapui.name":<ul><li> "/EMPLOYEES@sapui.name" results in "EMPLOYEES" and
						 * "/EMPLOYEES/@sapui.name"results in the same as "/EMPLOYEES/$Type", that is, the qualified name of
						 * the entity set'stype (see below how "$Type" is inserted implicitly). Note how the separating slash
						 * againmakes a difference here.<li> "/EMPLOYEES/@com.sap.vocabularies.Common.v1.Label@sapui.name"
						 * results in"@com.sap.vocabularies.Common.v1.Label" and a slash does not make any difference as long
						 * asthe annotation does not have a "$Type" property.<li> A technical property (that is, a numerical
						 * segment or one starting with a "$")immediately before "@sapui.name" is invalid, for example
						 * "/$EntityContainer@sapui.name".</ul>The path must not continue after "@sapui.name".If the current
						 * object is a string value, that string value is treated as a relative path andfollowed step-by-step
						 * before the next segment is processed. Except for this, a path mustnot continue if it comes across a
						 * non-object value. Such a string value can be a qualifiedname (example path "/$EntityContainer/..."),
						 * a simple identifier (example path"/TEAMS/$NavigationPropertyBinding/TEAM_2_EMPLOYEES/...") or even a
						 * path according to"14.5.12 Expression edm:Path" etc. (example
						 * path"/TEAMS/$Type/@com.sap.vocabularies.UI.v1.LineItem/0/Value/$Path/...").Segments starting with an
						 * "@" character, for example "@com.sap.vocabularies.Common.v1.Label",address annotations at the
						 * current object. As the first segment, they refer to the singleentity container. For objects which
						 * can only be annotated inline (see "14.3 Elementedm:Annotation" minus "14.2.1 Attribute Target"), the
						 * object already contains theannotations as a property. For objects which can (only or also) be
						 * annotated via externaltargeting, the object does not contain any annotation as a property. Such
						 * annotations MUSTbe accessed via a path. BEWARE of a special case: Actions, functions and their
						 * parameterscan be annotated inline for a single overload or via external targeting for all overloads
						 * atthe same time. In this case, the object contains all annotations for the single overload asa
						 * property, but annotations MUST nevertheless be accessed via a path in order to includealso
						 * annotations for all overloads at the same time.Segments starting with an OData name followed by an
						 * "@" character, for example"/TEAMS@Org.OData.Capabilities.V1.TopSupported", address annotations at an
						 * entity set,singleton, or property, not at the corresponding type. In
						 * contrast,"/TEAMS/@com.sap.vocabularies.Common.v1.Deletable" (note the separating slash) addresses
						 * anannotation at the entity set's type. This is in line with the special rule of"14.5.12 Expression
						 * edm:Path" regarding annotations at a navigation property itself."@" can be used as a segment to
						 * address a map of all annotations of the current object. Thisis useful for iteration, for example
						 * via<code>&lt;template:repeat list="{entityType>@}" ...></code>.Annotations of an annotation are
						 * addressed not by two separate segments, but by a singlesegment
						 * like"@com.sap.vocabularies.Common.v1.Text@com.sap.vocabularies.Common.v1.TextArrangement".
						 * Eachannotation can have a qualifier, for example "@first#foo@second#bar". Note: If the
						 * firstannotation's value is a record, a separate segment addresses an annotation of that record,not
						 * an annotation of the first annotation itself.In a similar way, annotations of "7.2 Element
						 * edm:ReferentialConstraint","7.3 Element edm:OnDelete", "10.2 Element edm:Member" and"14.5.14.2
						 * Element edm:PropertyValue" are addressed by segments like"&lt;7.2.1 Attribute Property>@...",
						 * "$OnDelete@...", "&lt;10.2.1 Attribute Name>@..." and"&lt;14.5.14.2.1 Attribute Property>@..."
						 * (where angle brackets denote a variable part andsections refer to specification "OData Version 4.0
						 * Part 3: Common Schema DefinitionLanguage").A segment which represents an OData qualified name is
						 * looked up in the global scope ("scopelookup") and thus determines a schema child which is used later
						 * on. Unknown qualified namesare invalid. This way, "/acme.DefaultContainer/EMPLOYEES" addresses the
						 * "EMPLOYEES" child ofthe schema child named "acme.DefaultContainer". This also works
						 * indirectly("/$EntityContainer/EMPLOYEES") and implicitly ("/EMPLOYEES", see below).A segment which
						 * represents an OData simple identifier needs special preparations. The sameapplies to the empty
						 * segment after a trailing slash.<ol><li> If the current object has a "$Action", "$Function" or
						 * "$Type" property, it is used for   scope lookup first. This way, "/EMPLOYEES/ENTRYDATE" addresses
						 * the same object as   "/EMPLOYEES/$Type/ENTRYDATE", namely the "ENTRYDATE" child of the entity type
						 * corresponding to the "EMPLOYEES" child of the entity container. The other cases jump from   an
						 * action or function import to the corresponding action or function overloads.<li> Else if the segment
						 * is the first one within its path, the last schema child addressed   via scope lookup is used instead
						 * of the current object. This can only happen indirectly as   in
						 * "/TEAMS/$NavigationPropertyBinding/TEAM_2_EMPLOYEES/..." where the schema child is the   entity
						 * container and the navigation property binding can contain the simple identifier of   another entity
						 * set within the same container.   If the segment is the first one overall, "$EntityContainer" is
						 * inserted into the path   implicitly. In other words, the entity container is used as the initial
						 * schema child.   This way, "/EMPLOYEES" addresses the same object as "/$EntityContainer/EMPLOYEES",
						 * namely   the "EMPLOYEES" child of the entity container.<li> Afterwards, if the current object is an
						 * array, it represents overloads for an action or   function. Multiple overloads are invalid. The
						 * overload's "$ReturnType/$Type" is used for   scope lookup. This way, "/GetOldestWorker/AGE"
						 * addresses the same object as   "/GetOldestWorker/0/$ReturnType/$Type/AGE". For primitive return
						 * types, the special   segment "value" can be used to refer to the return type itself (see   {@link
						 * sap.ui.model.odata.v4.ODataContextBinding#execute}). This way,   "/GetOldestAge/value" addresses the
						 * same object as "/GetOldestAge/0/$ReturnType" (which   is needed for automatic type determination,
						 * see {@link #requestUI5Type}).</ol>A trailing slash can be used to continue a path and thus force
						 * scope lookup or OData simpleidentifier preparations, but then stay at the current object. This way,
						 * "/EMPLOYEES/$Type/"addresses the entity type itself corresponding to the "EMPLOYEES" child of the
						 * entitycontainer. Although the empty segment is not an OData simple identifier, it can be used as
						 * aplaceholder for one. In this way, "/EMPLOYEES/" addresses the same entity type
						 * as"/EMPLOYEES/$Type/". That entity type in turn is a map of all its OData children (that
						 * is,structural and navigation properties) and determines the set of possible child names thatmight be
						 * used after the trailing slash.Any other segment, including an OData simple identifier, is looked up
						 * as a property of thecurrent object.
						 * @since 1.37.0
						 * @param sPath A relative or absolute path within the meta data model
						 * @param oContext The context to be used as a starting point in case of a relative path, see  {@link
						 * #resolve resolve}
						 * @returns A promise which is resolved with the requested meta data value as soon as it is  available
						 */
						requestObject(
							sPath: string,
							oContext?: sap.ui.model.Context
						): JQueryPromise<any>;

						/**
						 * Requests the UI5 type for the given property path that formats and parses corresponding tothe
						 * property's EDM type and constraints. The property's type must be a primitive type. Use{@link
						 * #getUI5Type getUI5Type} for synchronous access.
						 * @since 1.37.0
						 * @param sPath An absolute path to an OData property within the OData data model
						 * @returns A promise that gets resolved with the corresponding UI5 type from
						 * <code>sap.ui.model.odata.type</code> or rejected with an error; if no specific type can be
						 * determined, a warning is logged and <code>sap.ui.model.odata.type.Raw</code> is used
						 */
						requestUI5Type(sPath: string): JQueryPromise<any>;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						setLegacySyntax(): void;

						/**
						 * Returns a string representation of this object including the URL to the $metadata document ofthe
						 * service.
						 * @since 1.37.0
						 * @returns A string description of this model
						 */
						toString(): string;
					}
					/**
					 * List binding for an OData V4 model.  An event handler can only be attached to this binding for the
					 * following events: 'change',  'dataReceived', 'dataRequested', and 'refresh'.  For other events, an
					 * error is thrown.
					 * @resource sap/ui/model/odata/v4/ODataListBinding.js
					 */
					export class ODataListBinding extends sap.ui.model.ListBinding {
						/**
						 * DO NOT CALL this private constructor for a new <code>ODataListBinding</code>,but rather use {@link
						 * sap.ui.model.odata.v4.ODataModel#bindList bindList} instead!
						 * @param oModel The OData V4 model
						 * @param sPath The binding path in the model; must not be empty or end with a slash
						 * @param oContext The parent context which is required as base for a relative path
						 * @param vSorters The dynamic sorters to be used initially. Call {@link #sort} to replace them. Static
						 *  sorters, as defined in the '$orderby' binding parameter, are always executed after the  dynamic
						 * sorters.  Supported since 1.39.0.
						 * @param vFilters The dynamic application filters to be used initially. Call {@link #filter} to
						 * replace them.  Static filters, as defined in the '$filter' binding parameter, are always combined
						 * with the  dynamic filters using a logical <code>AND</code>.  Supported since 1.39.0.
						 * @param mParameters Map of binding parameters which can be OData query options as specified in
						 * "OData Version 4.0 Part 2: URL Conventions" or the binding-specific parameters "$$groupId"  and
						 * "$$updateGroupId".  Note: If parameters are provided for a relative binding path, the binding
						 * accesses data  with its own service requests instead of using its parent binding.  The following
						 * OData query options are allowed:  <ul>  <li> All "5.2 Custom Query Options" except for those with a
						 * name starting with "sap-"  <li> The $expand, $filter, $orderby and $select "5.1 System Query
						 * Options"  </ul>  All other query options lead to an error.  Query options specified for the binding
						 * overwrite model query options.
						 */
						constructor(
							oModel: sap.ui.model.odata.v4.ODataModel,
							sPath: string,
							oContext?: sap.ui.model.odata.v4.Context,
							vSorters?: sap.ui.model.Sorter | sap.ui.model.Sorter[],
							vFilters?: sap.ui.model.Filter | sap.ui.model.Filter[],
							mParameters?: any
						);

						/**
						 * Destroys the object. The object must not be used anymore after this function was called.
						 * @since 1.40.1
						 */
						destroy(bSuppressInvalidate: boolean): void;

						/**
						 * Filters the list with the given filters.If there are pending changes an error is thrown. Use {@link
						 * #hasPendingChanges} to check ifthere are pending changes. If there are changes, call{@link
						 * sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or{@link
						 * sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling'filter'.
						 * @since 1.39.0
						 * @param vFilters The dynamic filters to be used; replaces the dynamic filters given in  {@link
						 * sap.ui.model.odata.v4.ODataModel#bindList}.  The filter executed on the list is created from the
						 * following parts, which are combined  with a logical 'and':  <ul>  <li> dynamic filters of type
						 * sap.ui.model.FilterType.Application  <li> dynamic filters of type sap.ui.model.FilterType.Control
						 * <li> the static filters, as defined in the '$filter' binding parameter  </ul>
						 * @param sFilterType The filter type to use
						 * @returns <code>this</code> to facilitate method chaining
						 */
						filter(
							vFilters: sap.ui.model.Filter | sap.ui.model.Filter[],
							sFilterType?: typeof sap.ui.model.FilterType
						): sap.ui.model.odata.v4.ODataListBinding;

						/**
						 * Returns already created binding contexts for all entities in this list binding for the
						 * rangedetermined by the given start index <code>iStart</code> and <code>iLength</code>.If at least
						 * one of the entities in the given range has not yet been loaded, fires a{@link
						 * sap.ui.model.Binding#attachChange 'change'} event on this list binding once theseentities have been
						 * loaded <b>asynchronously</b>. A further call to this method in the'change' event handler with the
						 * same index range then yields the updated array of contexts.
						 * @since 1.37.0
						 * @param iStart The index where to start the retrieval of contexts
						 * @param iLength The number of contexts to retrieve beginning from the start index; defaults to the
						 * model's  size limit, see {@link sap.ui.model.Model#setSizeLimit}
						 * @param iMaximumPrefetchSize The maximum number of contexts to read before and after the given range;
						 * with this,  controls can prefetch data that is likely to be needed soon, e.g. when scrolling down in
						 * a  table. Negative values will be treated as 0.
						 * @returns The array of already created contexts with the first entry containing the context for
						 * <code>iStart</code>
						 */
						getContexts(
							iStart: number,
							iLength?: number,
							iMaximumPrefetchSize?: number
						): sap.ui.model.odata.v4.Context[];

						/**
						 * Returns the contexts that were requested by a control last time. Does not trigger adata request. In
						 * the time between the {@link #event:dataRequested dataRequested} event andthe {@link
						 * #event:dataReceived dataReceived} event, the resulting array contains<code>undefined</code> at those
						 * indexes where the data is not yet available.
						 * @since 1.39.0
						 * @returns The contexts
						 */
						getCurrentContexts(): sap.ui.model.odata.v4.Context[];

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						getDistinctValues(sPath?: string): any[];

						/**
						 * Returns the number of entries in the list. As long as the client does not know the size onthe server
						 * an estimated length is returned.
						 * @since 1.37.0
						 * @returns The number of entries in the list
						 */
						getLength(): number;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v4.ODataListBinding.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns <code>true</code> if the binding has pending changes, meaning updates via two-waybinding
						 * that have not yet been sent to the server.
						 * @since 1.39.0
						 * @returns <code>true</code> if the binding has pending changes
						 */
						hasPendingChanges(): boolean;

						/**
						 * Initializes the OData list binding. Fires a 'change' event in case the binding has aresolved path.
						 * @since 1.37.0
						 */
						initialize(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						isInitial(): boolean;

						/**
						 * Returns <code>true</code> if the length has been determined by the data returned fromserver. If the
						 * length is a client side estimation <code>false</code> is returned.
						 * @since 1.37.0
						 * @returns If <code>true</true> the length is determined by server side data
						 */
						isLengthFinal(): boolean;

						/**
						 * Refreshes the binding. Prompts the model to retrieve data from the server using the givengroup ID
						 * and notifies the control that new data is available.Refresh is supported for absolute bindings.Note:
						 * When calling refresh multiple times, the result of the request triggered by the lastcall determines
						 * the binding's data; it is <b>independent</b>of the order of calls to {@link
						 * sap.ui.model.odata.v4.ODataModel#submitBatch} with the givengroup ID.
						 * @since 1.37.0
						 * @param sGroupId The group ID to be used for refresh; if not specified, the group ID for this binding
						 * is  used, see {@link sap.ui.model.odata.v4.ODataListBinding#constructor}.  Valid values are
						 * <code>undefined</code>, <code>'$auto'</code>, <code>'$direct'</code> or  application group IDs as
						 * specified in {@link sap.ui.model.odata.v4.ODataModel#submitBatch}.
						 */
						refresh(sGroupIdOrForceUpdate: string | boolean): void;

						/**
						 * Resets all pending property changes of this binding, meaning updates via two-way binding thathave
						 * not yet been sent to the server.
						 * @since 1.40.1
						 */
						resetChanges(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						resume(): void;

						/**
						 * Sort the entries represented by this list binding according to the given sorters.The sorters are
						 * stored at this list binding and they are used for each following datarequest.If there are pending
						 * changes an error is thrown. Use {@link #hasPendingChanges} to check ifthere are pending changes. If
						 * there are changes, call{@link sap.ui.model.odata.v4.ODataModel#submitBatch) to submit the changes
						 * or{@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling'sort'.
						 * @since 1.39.0
						 * @param vSorters The dynamic sorters to be used; they replace the dynamic sorters given in  {@link
						 * sap.ui.model.odata.v4.ODataModel#bindList}.  Static sorters, as defined in the '$orderby' binding
						 * parameter, are always executed after  the dynamic sorters.
						 * @returns <code>this</code> to facilitate method chaining
						 */
						sort(
							vSorters: sap.ui.model.Sorter | sap.ui.model.Sorter[]
						): sap.ui.model.odata.v4.ODataListBinding;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						suspend(): void;

						/**
						 * Returns a string representation of this object including the binding path. If the binding
						 * isrelative, the parent path is also given, separated by a '|'.
						 * @since 1.37.0
						 * @returns A string description of this binding
						 */
						toString(): string;
					}
					/**
					 * Context binding for an OData V4 model.  An event handler can only be attached to this binding for
					 * the following events: 'change',  'dataReceived', and 'dataRequested'.  For other events, an error is
					 * thrown.  A context binding can also be used as an <i>operation binding</i> to support bound actions,
					 *  action imports and function imports. If you want to control the execution time of an  operation,
					 * for example a function import named "GetNumberOfAvailableItems", create a  context binding for the
					 * path "/GetNumberOfAvailableItems(...)" (as specified here,  including the three dots). Such an
					 * operation binding is <i>deferred</i>, meaning that it  does not request automatically, but only when
					 * you call {@link #execute}. {@link #refresh}  is always ignored for actions and action imports. For
					 * function imports, it is ignored if  {@link #execute} has not yet been called. Afterwards it results
					 * in another call of the  function with the parameter values of the last execute.  The binding
					 * parameter for bound actions may be given in the binding path, for example
					 * <code>/TEAMS(Team_Id='TEAM_01')/tea_busi.AcChangeManagerOfTeam(...)</code>. This can be  used if the
					 * exact instance is known in advance. If you use a relative binding instead, the  operation path is a
					 * concatenation of the parent context's canonical path and the deferred  binding's path.
					 * <b>Example</b>: You have a table with a list binding to <code>/TEAMS</code>. In each row  you have a
					 * button to change the team's manager, with the relative binding
					 * <code>tea_busi.AcChangeManagerOfTeam(...)</code>. Then the parent context for such a button  refers
					 * to an instance of TEAMS, so its canonical path is  <code>/TEAMS(ID='<i>TeamID</i>')</code> and the
					 * resulting path for the action is
					 * <code>/TEAMS(ID='<i>TeamID</i>')/tea_busi.AcChangeManagerOfTeam</code>.  This also works if the
					 * relative path of the deferred operation binding starts with a  navigation property. Then this
					 * navigation property will be part of the operation's  resource path, which is still valid.  A
					 * deferred operation binding is not allowed to have another deferred operation binding as  parent.
					 * @resource sap/ui/model/odata/v4/ODataContextBinding.js
					 */
					export class ODataContextBinding extends sap.ui.model.ContextBinding {
						/**
						 * Returns the bound context.
						 * @since 1.39.0
						 */
						public getBoundContext: any;

						/**
						 * DO NOT CALL this private constructor for a new <code>ODataContextBinding</code>,but rather use
						 * {@link sap.ui.model.odata.v4.ODataModel#bindContext bindContext} instead!
						 * @param oModel The OData V4 model
						 * @param sPath The binding path in the model; must not end with a slash
						 * @param oContext The context which is required as base for a relative path
						 * @param mParameters Map of binding parameters which can be OData query options as specified in
						 * "OData Version 4.0 Part 2: URL Conventions" or the binding-specific parameters "$$groupId"  and
						 * "$$updateGroupId".  Note: If parameters are provided for a relative binding path, the binding
						 * accesses data  with its own service requests instead of using its parent binding.  The following
						 * OData query options are allowed:  <ul>  <li> All "5.2 Custom Query Options" except for those with a
						 * name starting with "sap-"  <li> The $expand, $filter, $orderby and $select "5.1 System Query
						 * Options"; OData V4 only  allows $filter and $orderby inside resource paths that identify a
						 * collection. In our case  here, this means you can only use them inside $expand.  </ul>  All other
						 * query options lead to an error.  Query options specified for the binding overwrite model query
						 * options.
						 */
						constructor(
							oModel: sap.ui.model.odata.v4.ODataModel,
							sPath: string,
							oContext?: sap.ui.model.odata.v4.Context,
							mParameters?: any
						);

						/**
						 * Destroys the object. The object must not be used anymore after this function was called.
						 * @since 1.40.1
						 */
						destroy(bSuppressInvalidate: boolean): void;

						/**
						 * Calls the OData operation that corresponds to this operation binding.Parameters for the operation
						 * must be set via {@link #setParameter} beforehand.The value of this binding is the result of the
						 * operation. To access a result of primitivetype, bind a control to the path "value", for
						 * example<code>&lt;Text text="{value}"/&gt;</code>. If the result has a complex or entity type, youcan
						 * bind properties as usual, for example <code>&lt;Text text="{street}"/&gt;</code>.
						 * @since 1.37.0
						 * @param sGroupId The group ID to be used for the request; if not specified, the group ID for this
						 * binding is  used, see {@link sap.ui.model.odata.v4.ODataContextBinding#constructor}.  Valid values
						 * are <code>undefined</code>, <code>'$auto'</code>, <code>'$direct'</code> or  application group IDs
						 * as specified in {@link sap.ui.model.odata.v4.ODataModel#submitBatch}.
						 * @returns A promise that is resolved without data when the operation call succeeded, or rejected
						 * with an instance of <code>Error</code> in case of failure.
						 */
						execute(sGroupId: string): JQueryPromise<any>;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v4.ODataContextBinding.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns <code>true</code> if the binding has pending changes, meaning updates via two-waybinding
						 * that have not yet been sent to the server.
						 * @since 1.39.0
						 * @returns <code>true</code> if the binding has pending changes
						 */
						hasPendingChanges(): boolean;

						/**
						 * Initializes the OData context binding. Fires a 'change' event in case the binding has abound
						 * context.
						 * @since 1.37.0
						 */
						initialize(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						isInitial(): boolean;

						/**
						 * Refreshes the binding. Prompts the model to retrieve data from the server using the givengroup ID
						 * and notifies the control that new data is available.Refresh is supported for absolute bindings.Note:
						 * When calling refresh multiple times, the result of the request triggered by the lastcall determines
						 * the binding's data; it is <b>independent</b>of the order of calls to {@link
						 * sap.ui.model.odata.v4.ODataModel#submitBatch} with the givengroup ID.
						 * @since 1.37.0
						 * @param sGroupId The group ID to be used for refresh; if not specified, the group ID for this binding
						 * is  used, see {@link sap.ui.model.odata.v4.ODataContextBinding#constructor}.  Valid values are
						 * <code>undefined</code>, <code>'$auto'</code>, <code>'$direct'</code> or  application group IDs as
						 * specified in {@link sap.ui.model.odata.v4.ODataModel#submitBatch}.
						 */
						refresh(sGroupIdOrForceUpdate: string | boolean): void;

						/**
						 * Resets all pending property changes of this binding, meaning updates via two-way binding thathave
						 * not yet been sent to the server.
						 * @since 1.40.1
						 */
						resetChanges(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						resume(): void;

						/**
						 * Sets a parameter for an operation call.
						 * @since 1.37.0
						 * @param sParameterName The parameter name
						 * @param vValue The parameter value
						 * @returns <code>this</code> to enable method chaining
						 */
						setParameter(
							sParameterName: string,
							vValue: any
						): sap.ui.model.odata.v4.ODataContextBinding;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						suspend(): void;

						/**
						 * Returns a string representation of this object including the binding path. If the binding
						 * isrelative, the parent path is also given, separated by a '|'.
						 * @since 1.37.0
						 * @returns A string description of this binding
						 */
						toString(): string;
					}
					/**
					 * Property binding for an OData V4 model.  An event handler can only be attached to this binding for
					 * the following events: 'change',  'dataReceived', and 'dataRequested'.  For other events, an error is
					 * thrown.
					 * @resource sap/ui/model/odata/v4/ODataPropertyBinding.js
					 */
					export class ODataPropertyBinding extends sap.ui.model
						.PropertyBinding {
						/**
						 * DO NOT CALL this private constructor for a new <code>ODataPropertyBinding</code>,but rather use
						 * {@link sap.ui.model.odata.v4.ODataModel#bindProperty bindProperty} instead!
						 * @param oModel The OData V4 model
						 * @param sPath The binding path in the model; must not be empty or end with a slash
						 * @param oContext The context which is required as base for a relative path
						 * @param mParameters Map of binding parameters which can be OData query options as specified in
						 * "OData Version 4.0 Part 2: URL Conventions" or the binding-specific parameters "$$groupId"  and
						 * "$$updateGroupId".  Note: Binding parameters may only be provided for absolute binding paths as only
						 * those  lead to a data service request.  All "5.2 Custom Query Options" are allowed except for those
						 * with a name starting with  "sap-". All other query options lead to an error.  Query options
						 * specified for the binding overwrite model query options.
						 */
						constructor(
							oModel: sap.ui.model.odata.v4.ODataModel,
							sPath: string,
							oContext?: sap.ui.model.odata.v4.Context,
							mParameters?: any
						);

						/**
						 * Destroys the object. The object must not be used anymore after this function was called.
						 * @since 1.39.0
						 */
						destroy(bSuppressInvalidate: boolean): void;

						/**
						 * Returns the current value.
						 * @since 1.37.0
						 * @returns The current value
						 */
						getValue(): any;

						/**
						 * Returns <code>true</code> if the binding has pending changes, that is updates via two-waybinding
						 * that have not yet been sent to the server.
						 * @since 1.39.0
						 * @returns <code>true</code> if the binding has pending changes
						 */
						hasPendingChanges(): boolean;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						isInitial(): boolean;

						/**
						 * Refreshes this binding; refresh is supported for absolute bindings only.A refresh retrieves data
						 * from the server using the given group ID and fires a change eventwhen new data is available.Note:
						 * When calling refresh multiple times, the result of the request triggered by the lastcall determines
						 * the binding's data; it is <b>independent</b>of the order of calls to {@link
						 * sap.ui.model.odata.v4.ODataModel#submitBatch} with the givengroup ID.
						 * @since 1.37.0
						 * @param sGroupId The group ID to be used for refresh; if not specified, the group ID for this binding
						 * is  used, see {@link sap.ui.model.odata.v4.ODataPropertyBinding#constructor}.  Valid values are
						 * <code>undefined</code>, <code>'$auto'</code>, <code>'$direct'</code> or  application group IDs as
						 * specified in {@link sap.ui.model.odata.v4.ODataModel#submitBatch}.
						 */
						refresh(sGroupIdOrForceUpdate: string | boolean): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						resume(): void;

						/**
						 * Sets the optional type and internal type for this binding; used for formatting and parsing.Fires a
						 * change event if the type has changed.
						 * @param oType The type for this binding
						 * @param sInternalType The internal type of the element property which owns this binding, for example
						 * "any",  "boolean", "float", "int", "string"; see {@link sap.ui.model.odata.type} for more
						 * information
						 */
						setType(oType: sap.ui.model.Type, sInternalType: string): void;

						/**
						 * Sets the new current value and updates the cache.
						 * @since 1.37.0
						 * @param vValue The new value which must be primitive
						 * @param sGroupId The group ID to be used for this update call; if not specified, the update group ID
						 * for  this binding (or its relevant parent binding) is used, see  {@link
						 * sap.ui.model.odata.v4.ODataPropertyBinding#constructor}.  Valid values are <code>undefined</code>,
						 * <code>'$auto'</code>, <code>'$direct'</code> or  application group IDs as specified in {@link
						 * sap.ui.model.odata.v4.ODataModel#submitBatch}.
						 */
						setValue(vValue: any, sGroupId?: string): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						suspend(): void;

						/**
						 * Returns a string representation of this object including the binding path. If the binding
						 * isrelative, the parent path is also given, separated by a '|'.
						 * @since 1.37.0
						 * @returns A string description of this binding
						 */
						toString(): string;
					}
				}
				namespace v2 {
					namespace ODataAnnotations {
						/**
						 * @resource sap/ui/model/odata/v2/ODataAnnotations.js
						 */
						export class constructor {
							/**
							 * Creates a new instance of the ODataAnnotations annotation loader.
							 * @param oMetadata Metadata object with the metadata information needed to parse the annotations
							 * @param mOptions Obligatory options
							 */
							constructor(
								oMetadata: sap.ui.model.odata.ODataMetadata,
								mOptions: any
							);
						}
					}
					/**
					 * Model implementation for oData format
					 * @resource sap/ui/model/odata/v2/ODataModel.js
					 */
					export class ODataModel extends sap.ui.model.Model {
						/**
						 * Constructor for a new ODataModel.
						 * @param sServiceUrl base uri of the service to request data from; additional URL parameters appended
						 * here will be appended to every request								can be passed with the mParameters object as well:
						 * [mParameters.serviceUrl] A serviceURl is required!
						 * @param mParameters (optional) a map which contains the following parameter properties:
						 */
						constructor(sServiceUrl: string, mParameters?: any);

						/**
						 * Adds (a) new URL(s) to the be parsed for OData annotations, which are then merged into the
						 * annotations objectwhich can be retrieved by calling the getServiceAnnotations()-method. If a
						 * $metadata url is passed the data willalso be merged into the metadata object, which can be reached
						 * by calling the getServiceMetadata() method.
						 * @param vUrl Either one URL as string or an array or URL strings
						 * @returns The Promise to load the given URL(s), resolved if all URLs have been loaded, rejected if at
						 * least one fails to load.					 If this promise resolves it returns the following parameters:
						 * annotations: The annotation object					 entitySets: An array of EntitySet objects containing the
						 * newly merged EntitySets from a $metadata requests.								 the structure is the same as in the
						 * metadata object reached by the getServiceMetadata() method.								 For non $metadata requests the
						 * array will be empty.
						 */
						addAnnotationUrl(vUrl: string | string[]): JQueryPromise<any>;

						/**
						 * Adds new xml content to be parsed for OData annotations, which are then merged into the annotations
						 * object whichcan be retrieved by calling the getServiceAnnotations()-method.
						 * @param sXMLContent The string that should be parsed as annotation XML
						 * @param bSuppressEvents Whether not to fire annotationsLoaded event on the annotationParser
						 * @returns The Promise to parse the given XML-String, resolved if parsed without errors, rejected if
						 * errors occur
						 */
						addAnnotationXML(
							sXMLContent: string,
							bSuppressEvents?: boolean
						): JQueryPromise<any>;

						/**
						 * Attach event-handler <code>fnFunction</code> to the 'annotationsFailed' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The function to call, when the event occurs. This function will be called on the
						 *         oListener-instance (if present) or in a 'static way'.
						 * @param oListener Object on which to call the given function. If empty, the global context (window)
						 * is used.
						 * @returns <code>this</code> to allow method chaining
						 */
						attachAnnotationsFailed(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Attach event-handler <code>fnFunction</code> to the 'annotationsLoaded' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The function to call, when the event occurs. This function will be called on the
						 *         oListener-instance (if present) or in a 'static way'.
						 * @param oListener Object on which to call the given function. If empty, the global context (window)
						 * is used.
						 * @returns <code>this</code> to allow method chaining
						 */
						attachAnnotationsLoaded(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Attach event-handler <code>fnFunction</code> to the 'batchRequestCompleted' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The function to call, when the event occurs. This function will be called on the
						 *         oListener-instance (if present) or in a 'static way'.
						 * @param oListener Object on which to call the given function. If empty, the global context (window)
						 * is used.
						 * @returns <code>this</code> to allow method chaining
						 */
						attachBatchRequestCompleted(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Attach event-handler <code>fnFunction</code> to the 'batchRequestFailed' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.<br/>
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The function to call, when the event occurs. This function will be called on the
						 *         oListener-instance (if present) or in a 'static way'.
						 * @param oListener Object on which to call the given function. If empty, this Model is used.
						 * @returns <code>this</code> to allow method chaining
						 */
						attachBatchRequestFailed(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Attach event-handler <code>fnFunction</code> to the 'requestSent' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The function to call, when the event occurs. This function will be called on the
						 *         oListener-instance (if present) or in a 'static way'.
						 * @param oListener Object on which to call the given function. If empty, the global context (window)
						 * is used.
						 * @returns <code>this</code> to allow method chaining
						 */
						attachBatchRequestSent(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Attach event-handler <code>fnFunction</code> to the 'metadataFailed' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The function to call, when the event occurs. This function will be called on the
						 *         oListener-instance (if present) or in a 'static way'.
						 * @param oListener Object on which to call the given function. If empty, the global context (window)
						 * is used.
						 * @returns <code>this</code> to allow method chaining
						 */
						attachMetadataFailed(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Attach event-handler <code>fnFunction</code> to the 'metadataLoaded' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The function to call, when the event occurs. This function will be called on the
						 *         oListener-instance (if present) or in a 'static way'.
						 * @param oListener Object on which to call the given function. If empty, the global context (window)
						 * is used.
						 * @returns <code>this</code> to allow method chaining
						 */
						attachMetadataLoaded(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Trigger a request to the function import odata service that was specified in the model
						 * constructor.If the ReturnType of the function import is either an EntityType or a collection of
						 * EntityType thechanges are reflected in the model, otherwise they are ignored, and the
						 * <code>response</code> canbe processed in the successHandler.
						 * @param sFunctionName A string containing the name of the function to call. The name is concatenated
						 * to the sServiceUrl which was       specified in the model constructor.
						 * @param mParameters Optional parameter map containing any of the following properties:
						 * @returns oRequestHandle An object which has a <code>contextCreated</code> function that returns a
						 * <code>Promise</code>.        This resolves with the created {@link sap.ui.model.Context}.        In
						 * addition it has an <code>abort</code> function to abort the current request.
						 */
						callFunction(sFunctionName: string, mParameters?: any): any;

						/**
						 * Trigger a POST request to the odata service that was specified in the model constructor. Please note
						 * that deep creates are not supportedand may not work.
						 * @param sPath A string containing the path to the collection where an entry		should be created. The
						 * path is concatenated to the sServiceUrl		which was specified in the model constructor.
						 * @param oData data of the entry that should be created.
						 * @param mParameters Optional parameter map containing any of the following properties:
						 * @returns an object which has an <code>abort</code> function to abort the current request.
						 */
						create(sPath: string, oData: any, mParameters?: any): any;

						/**
						 * Creates a binding context for the given pathIf the data of the context is not yet available, it can
						 * not be created, but first theentity needs to be fetched from the server asynchronously. In case no
						 * callback functionis provided, the request will not be triggered.
						 * @param sPath binding path
						 * @param oContext bindingContext
						 * @param mParameters a map which contains additional parameters for the binding
						 * @param fnCallBack function called when context is created
						 * @param bReload reload of data
						 */
						createBindingContext(
							sPath: string,
							oContext?: any,
							mParameters?: any,
							fnCallBack?: any,
							bReload?: boolean
						): sap.ui.model.Context;

						/**
						 * Creates a new entry object which is described by the metadata of the entity type of thespecified
						 * sPath Name. A context object is returned which can be used to bindagainst the newly created
						 * object.For each created entry a request is created and stored in a request queue.The request queue
						 * can be submitted by calling submitChanges. To delete a createdentry from the request queue call
						 * deleteCreatedEntry.The optional properties parameter can be used as follows:  - properties could be
						 * an array containing the property names which should be included    in the new entry. Other
						 * properties defined in the entity type are not included.  - properties could be an object which
						 * includes the desired properties and the values    which should be used for the created entry.If
						 * properties is not specified, all properties in the entity type will be included in thecreated
						 * entry.If there are no values specified the properties will have undefined values.Please note that
						 * deep creates (including data defined by navigationproperties) are not supported
						 * @param sPath Name of the path to the EntitySet
						 * @param mParameters A map of the following parameters:
						 * @returns oContext A Context object that point to the new created entry.
						 */
						createEntry(sPath: string, mParameters: any): sap.ui.model.Context;

						/**
						 * Creates the key from the given collection name and property map. Please make sure that the metadata
						 * document is loaded before using this function.
						 * @param sCollection The name of the collection
						 * @param oKeyProperties The object containing at least all the key properties of the entity type
						 * @returns [sKey] key of the entry
						 */
						createKey(sCollection: string, oKeyProperties: any): string;

						/**
						 * Deletes a created entry from the request queue and the model.
						 * @param oContext The context object pointing to the created entry
						 */
						deleteCreatedEntry(oContext: sap.ui.model.Context): void;

						/**
						 */
						destroy(bSuppressInvalidate: boolean): void;

						/**
						 * Detach event-handler <code>fnFunction</code> from the 'annotationsFailed' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.The passed function and listener object must match the
						 * ones previously used for event registration.
						 * @param fnFunction The function to call, when the event occurs.
						 * @param oListener Object on which the given function had to be called.
						 * @returns <code>this</code> to allow method chaining
						 */
						detachAnnotationsFailed(
							fnFunction: any,
							oListener: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Detach event-handler <code>fnFunction</code> from the 'annotationsLoaded' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.
						 * @param fnFunction The function to call, when the event occurs.
						 * @param oListener Object on which the given function had to be called.
						 * @returns <code>this</code> to allow method chaining
						 */
						detachAnnotationsLoaded(
							fnFunction: any,
							oListener: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Detach event-handler <code>fnFunction</code> from the 'batchRequestCompleted' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.The passed function and listener object must match the
						 * ones previously used for event registration.
						 * @param fnFunction The function to call, when the event occurs.
						 * @param oListener Object on which the given function had to be called.
						 * @returns <code>this</code> to allow method chaining
						 */
						detachBatchRequestCompleted(
							fnFunction: any,
							oListener: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Detach event-handler <code>fnFunction</code> from the 'batchRequestFailed' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.<br/>The passed function and listener object must
						 * match the ones previously used for event registration.
						 * @param fnFunction The function to call, when the event occurs.
						 * @param oListener Object on which the given function had to be called.
						 * @returns <code>this</code> to allow method chaining
						 */
						detachBatchRequestFailed(
							fnFunction: any,
							oListener: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Detach event-handler <code>fnFunction</code> from the 'batchRequestSent' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.The passed function and listener object must match the
						 * ones previously used for event registration.
						 * @param fnFunction The function to call, when the event occurs.
						 * @param oListener Object on which the given function had to be called.
						 * @returns <code>this</code> to allow method chaining
						 */
						detachBatchRequestSent(
							fnFunction: any,
							oListener: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Detach event-handler <code>fnFunction</code> from the 'metadataFailed' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.The passed function and listener object must match the
						 * ones previously used for event registration.
						 * @param fnFunction The function to call, when the event occurs.
						 * @param oListener Object on which the given function had to be called.
						 * @returns <code>this</code> to allow method chaining
						 */
						detachMetadataFailed(
							fnFunction: any,
							oListener: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Detach event-handler <code>fnFunction</code> from the 'metadataLoaded' event of this
						 * <code>sap.ui.model.odata.v2.ODataModel</code>.The passed function and listener object must match the
						 * ones previously used for event registration.
						 * @param fnFunction The function to call, when the event occurs.
						 * @param oListener Object on which the given function had to be called.
						 * @returns <code>this</code> to allow method chaining
						 */
						detachMetadataLoaded(
							fnFunction: any,
							oListener: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Fire event annotationsFailed to attached listeners.
						 * @param mArguments the arguments to pass along with the event.
						 * @returns <code>this</code> to allow method chaining
						 */
						fireAnnotationsFailed(
							mArguments: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Fire event annotationsLoaded to attached listeners.
						 * @param mArguments the arguments to pass along with the event.
						 * @returns <code>this</code> to allow method chaining
						 */
						fireAnnotationsLoaded(
							mArguments: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Fire event batchRequestCompleted to attached listeners.
						 * @param mArguments parameters to add to the fired event
						 * @returns <code>this</code> to allow method chaining
						 */
						fireBatchRequestCompleted(
							mArguments: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Fire event batchRequestFailed to attached listeners.
						 * @param mArguments the arguments to pass along with the event.
						 * @returns <code>this</code> to allow method chaining
						 */
						fireBatchRequestFailed(
							mArguments: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Fire event batchRequestSent to attached listeners.
						 * @param mArguments the arguments to pass along with the event.
						 * @returns <code>this</code> to allow method chaining
						 */
						fireBatchRequestSent(
							mArguments: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Fire event metadataFailed to attached listeners.
						 * @param mArguments the arguments to pass along with the event.
						 * @returns <code>this</code> to allow method chaining
						 */
						fireMetadataFailed(
							mArguments: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Fire event metadataLoaded to attached listeners.
						 * @param mArguments the arguments to pass along with the event.
						 * @returns <code>this</code> to allow method chaining
						 */
						fireMetadataLoaded(
							mArguments: any
						): sap.ui.model.odata.v2.ODataModel;

						/**
						 * Force the update on the server of an entity by setting its ETag to '*'.ETag handling must be active
						 * so the force update will work.
						 * @param sKey The key to an Entity e.g.: Customer(4711)
						 */
						forceEntityUpdate(sKey: string): void;

						/**
						 * Returns the definition of batchGroups per EntityType for TwoWay changes
						 * @returns mChangeBatchGroups Definition of bactchGRoups for "TwoWay" changes
						 */
						getChangeBatchGroups(): any;

						/**
						 * Returns the definition of groups per EntityType for TwoWay changes
						 * @returns mChangeGroups Definition of Groups for "TwoWay" changes
						 */
						getChangeGroups(): any;

						/**
						 * Return requested data as object if the data has already been loaded and stored in the model.
						 * @param sPath A string containing the path to the data object that should be returned.
						 * @param oContext the optional context which is used with the sPath to retrieve the requested data.
						 * @param bIncludeExpandEntries This parameter should be set when a URI or custom parameterwith a
						 * $expand System Query Option was used to retrieve associated entries embedded/inline.If true then the
						 * getProperty function returns a desired property value/entry and includes the associated expand
						 * entries (if any).If false the associated/expanded entry properties are removed and not included in
						 * thedesired entry as properties at all. This is useful for performing updates on the base entry only.
						 * Note: A copy and not a reference of the entry will be returned.
						 * @returns oData Object containing the requested data if the path is valid.
						 */
						getData(
							sPath: string,
							oContext?: any,
							bIncludeExpandEntries?: boolean
						): any;

						/**
						 * Returns the default count mode for retrieving the count of collections
						 * @since 1.20
						 * @returns sCountMode returns defaultCountMode
						 */
						getDefaultCountMode(): typeof sap.ui.model.odata.CountMode;

						/**
						 * Returns the array of batchGroupIds that are set as deferred
						 * @returns aGroupIds The array of deferred batchGroupIds
						 */
						getDeferredBatchGroups(): any[];

						/**
						 * Returns the array of GroupIds that are set as deferred
						 * @returns aGroupIds The array of deferred GroupIds
						 */
						getDeferredGroups(): any[];

						/**
						 * Returns the ETag for a given binding path/context or data object
						 * @param sPath The binding path
						 * @param oContext The binding context
						 * @param oEntity The entity data
						 * @returns The found ETag (or null if none could be found)
						 */
						getETag(
							sPath: string,
							oContext?: sap.ui.model.Context,
							oEntity?: any
						): string;

						/**
						 * Returns all headers and custom headers which are stored in the OData model.
						 * @returns the header map
						 */
						getHeaders(): any;

						/**
						 * Returns the key part from the entry URI or the given context or object
						 * @param vValue A string representation of an URI, the context or entry object
						 * @returns [sKey] key of the entry
						 */
						getKey(vValue: string | any | sap.ui.model.Context): string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v2.ODataModel.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns an instance of an OData meta model which offers a unified access to both OData V2meta data
						 * and V4 annotations. It uses the existing {@link sap.ui.model.odata.ODataMetadata}as a foundation and
						 * merges V4 annotations from the existing{@link sap.ui.model.odata.v2.ODataAnnotations} directly into
						 * the corresponding model element.<b>BEWARE:</b> Access to this OData meta model will fail before the
						 * promise returned by{@link sap.ui.model.odata.ODataMetaModel#loaded loaded} has been resolved!
						 * @returns The meta model for this ODataModel
						 */
						getMetaModel(): sap.ui.model.odata.ODataMetaModel;

						/**
						 * Returns the JSON object for an entity with the given <code>sPath</code> and optional
						 * <code>oContext</code>.With the <code>mParameters.select</code> parameter it is possible to specify
						 * comma separated property or navigation propertynames which should be included in the result object.
						 * This works like the OData <code>$select</code> parameter.With the <code>mParameters.expand</code>
						 * parameter it is possible to specify comma separated navigation property nameswhich should be
						 * included inline in the result object. This works like the OData <code>$expand</code> parameter.This
						 * method will return a copy and not a reference of the entity. It does not load any data and may not
						 * return all requesteddata if it is not available/loaded. If select entries are contained in the
						 * parameters and not all selected properties areavailable, this method will return undefined instead
						 * of incomplete data. If no select entries are defined, all propertiesavailable on the client will be
						 * returned.Example:<code>{select: "Products/ProductName, Products", expand:"Products"}</code> will
						 * return no properties of the entity itself, butonly the ProductName property of the Products
						 * navigation property. If Products/ProductName has not been loaded before, so is notavilable on the
						 * client, it will return undefined.
						 * @param sPath the path referencing the object
						 * @param oContext the context the path should be resolved with, in case it is relative
						 * @returns vValue the value for the given path/context or undefined if data or entity type could not
						 * be found or was incomplete
						 */
						getObject(sPath: string, oContext?: any): any;

						/**
						 * Returns the original value for the property with the given path and context.The original value is
						 * the value that was last responded by the server.
						 * @param sPath the path/name of the property
						 * @param oContext the context if available to access the property value
						 * @returns vValue the value of the property
						 */
						getOriginalProperty(sPath: string, oContext?: any): any;

						/**
						 * Returns the value for the property with the given <code>sPath</code>.If the path points to a
						 * navigation property which has been loaded via $expand then the
						 * <code>bIncludeExpandEntries</code>parameter determines if the navigation property should be included
						 * in the returned value or not.Please note that this currently works for 1..1 navigation properties
						 * only.
						 * @param sPath the path/name of the property
						 * @param oContext the context if available to access the property value
						 * @param bIncludeExpandEntries @deprecated Please use getObject function with select/expand parameters
						 * instead.This parameter should be set when a URI or custom parameter with a $expand System Query
						 * Option was used to retrieve associated entries embedded/inline.If true then the getProperty function
						 * returns a desired property value/entry and includes the associated expand entries (if any).Note: A
						 * copy and not a reference of the entry will be returned.
						 */
						getProperty(
							sPath: string,
							oContext?: any,
							bIncludeExpandEntries?: boolean
						): any;

						/**
						 * Returns the current security token. If the token has not been requested from the server it will be
						 * requested first.
						 * @returns the CSRF security token
						 */
						getSecurityToken(): string;

						/**
						 * Return the annotation object. Please note that the metadata is loaded asynchronously and this
						 * function might return undefined because themetadata has not been loaded yet.In this case attach to
						 * the <code>annotationsLoaded</code> event to get notified when the annotations are available and then
						 * call this function.
						 * @returns metdata object
						 */
						getServiceAnnotations(): any;

						/**
						 * Return the parsed XML metadata as a Javascript object. Please note that the metadata is loaded
						 * asynchronously and this function might return undefined because themetadata has not been loaded
						 * yet.In this case attach to the <code>metadataLoaded</code> event to get notified when the metadata
						 * is available and then call this function.
						 * @returns metdata object
						 */
						getServiceMetadata(): any;

						/**
						 * Checks if there exist pending changes in the model created by the setProperty method.
						 * @returns true/false
						 */
						hasPendingChanges(): boolean;

						/**
						 * Checks if there are pending requests, either ongoing or sequential
						 * @returns true/false
						 */
						hasPendingRequests(): boolean;

						/**
						 * Checks whether metadata loading has failed in the past.
						 * @since 1.38
						 * @returns returns whether metadata request has failed
						 */
						isMetadataLoadingFailed(): boolean;

						/**
						 * Returns a promise for the loaded state of the metadata. The promise won't get rejected in case the
						 * metadata loading failed butis only resolved if the metadata is loaded successfully.If
						 * <code>refreshMetadata</code> function is called after this promise is already resolved you should
						 * rely on the promise returned by<code>refreshMetadata</code> to get information about the refreshed
						 * metadata loaded state.
						 * @since 1.30
						 * @returns returns a promise on metadata loaded state
						 */
						metadataLoaded(): JQueryPromise<any>;

						/**
						 * Trigger a GET request to the odata service that was specified in the model constructor.The data will
						 * be stored in the model. The requested data is returned with the response.
						 * @param sPath A string containing the path to the data which should		be retrieved. The path is
						 * concatenated to the sServiceUrl		which was specified in the model constructor.
						 * @param mParameters Optional parameter map containing any of the following properties:
						 * @returns an object which has an <code>abort</code> function to abort the current request.
						 */
						read(sPath: string, mParameters?: any): any;

						/**
						 * Refresh the model.This will check all bindings for updated data and update the controls if data has
						 * been changed.
						 * @param bForceUpdate Force update of controls
						 * @param bRemoveData If set to true then the model data will be removed/cleared.					Please note that
						 * the data might not be there when calling e.g. getProperty too early before the refresh call
						 * returned.
						 * @param sGroupId The groupId. Requests belonging to the same groupId will be bundled in one batch
						 * request.
						 */
						refresh(
							bForceUpdate: boolean,
							bRemoveData?: boolean,
							sGroupId?: string
						): void;

						/**
						 * Refreshes the metadata for model, e.g. in case the request for metadata has failed.Returns a new
						 * promise which can be resolved or rejected depending on the metadata loading state.
						 * @returns returns a promise on metadata loaded state or null if metadata is not initialized or
						 * currently refreshed.
						 */
						refreshMetadata(): JQueryPromise<any>;

						/**
						 * refresh XSRF token by performing a GET request against the service root URL.
						 * @param fnSuccess a callback function which is called when the data has           					 been
						 * successfully retrieved.
						 * @param fnError a callback function which is called when the request failed. The handler can have the
						 * parameter: oError which contains additional error information.
						 * @returns an object which has an <code>abort</code> function to abort the current request.
						 */
						refreshSecurityToken(fnSuccess: any, fnError?: any): any;

						/**
						 * Trigger a DELETE request to the odata service that was specified in the model constructor.
						 * @param sPath A string containing the path to the data that should be removed.		The path is
						 * concatenated to the sServiceUrl which was specified in the model constructor.
						 * @param mParameters Optional, can contain the following attributes:
						 * @returns an object which has an <code>abort</code> function to abort the current request.
						 */
						remove(sPath: string, mParameters?: any): any;

						/**
						 * Resets the collected changes by the setProperty method.
						 * @param aPath Array of paths that should be resetted.							If no array is passed all changes will be
						 * resetted.
						 */
						resetChanges(aPath: any[]): void;

						/**
						 * Returns a promise, which will resolve with the security token as soon as it is available
						 * @returns the CSRF security token
						 */
						securityTokenAvailable(): JQueryPromise<any>;

						/**
						 * Definition of batchGroups per EntityType for "TwoWay" changes
						 * @param mGroups A map containing the definition of bacthGroups for TwoWay changes. The Map has
						 * thefollowing format:{		"EntityTypeName": {			batchGroupId: "ID",			[changeSetId: "ID",]			[single:
						 * true/false,]		}}bacthGroupId: Defines the bacthGroup for changes of the defined
						 * EntityTypeNamechangeSetId: Defines a changeSetId wich bundles the changes for the EntityType.single:
						 * Defines if every change will get an own changeSet (true)
						 */
						setChangeBatchGroups(mGroups: any): void;

						/**
						 * Definition of groups per EntityType for "TwoWay" changes
						 * @param mGroups A map containing the definition of bacthGroups for TwoWay changes. The Map has
						 * thefollowing format:{		"EntityTypeName": {			groupId: "ID",			[changeSetId: "ID",]			[single:
						 * true/false,]		}}GroupId: Defines the Group for changes of the defined EntityTypeNamechangeSetId:
						 * Defines a changeSetId wich bundles the changes for the EntityType.single: Defines if every change
						 * will get an own changeSet (true)
						 */
						setChangeGroups(mGroups: any): void;

						/**
						 * Sets the default way to retrieve the count of collections in this model.Count can be determined
						 * either by sending a separate $count request, including$inlinecount=allpages in data requests, both
						 * of them or not at all.
						 * @since 1.20
						 * @param sCountMode sets default count mode
						 */
						setDefaultCountMode(
							sCountMode: typeof sap.ui.model.odata.CountMode
						): void;

						/**
						 * Setting batch groups as deferred. Requests that belongs to a deferred batch group will be sent
						 * manuallyvia a submitChanges call.
						 * @param aGroupIds Array of batchGroupIds that should be set as deferred
						 */
						setDeferredBatchGroups(aGroupIds: any[]): void;

						/**
						 * Setting request groups as deferred. Requests that belongs to a deferred group will be sent
						 * manuallyvia a submitChanges call.
						 * @param aGroupIds Array of GroupIds that should be set as deferred
						 */
						setDeferredGroups(aGroupIds: any[]): void;

						/**
						 * Set custom headers which are provided in a key/value map. These headers are used for requests
						 * against the OData backend.Private headers which are set in the ODataModel cannot be modified.These
						 * private headers are: accept, accept-language, x-csrf-token, MaxDataServiceVersion,
						 * DataServiceVersion.To remove these headers simply set the mCustomHeaders parameter to null. Please
						 * also note that when calling this method again all previous custom headersare removed unless they are
						 * specified again in the mCustomHeaders parameter.
						 * @param mHeaders the header name/value map.
						 */
						setHeaders(mHeaders: any): void;

						/**
						 * Sets a new value for the given property <code>sPropertyName</code> in the model.If the
						 * changeBatchGroup for the changed EntityType is set to deferred changes could be submittedwith
						 * submitChanges. Otherwise the change will be submitted directly.
						 * @param sPath path of the property to set
						 * @param oValue value to set the property to
						 * @param oContext the context which will be used to set the property
						 * @param bAsyncUpdate whether to update other bindings dependent on this property asynchronously
						 * @returns true if the value was set correctly and false if errors occurred like the entry was not
						 * found or another entry was already updated.
						 */
						setProperty(
							sPath: string,
							oValue: any,
							oContext?: any,
							bAsyncUpdate?: boolean
						): boolean;

						/**
						 * Enable/Disable automatic updates of all Bindings after change operations
						 * @since 1.16.3
						 * @param bRefreshAfterChange Refresh after change
						 */
						setRefreshAfterChange(bRefreshAfterChange: boolean): void;

						/**
						 * Enable/Disable XCSRF-Token handling
						 * @param bTokenHandling whether to use token handling or not
						 */
						setTokenHandlingEnabled(bTokenHandling: boolean): void;

						/**
						 * @param bUseBatch whether the requests should be encapsulated in a batch request
						 */
						setUseBatch(bUseBatch: boolean): void;

						/**
						 * Submits the collected changes which were collected by the setProperty method. The update method is
						 * defined by the global <code>defaultUpdateMethod</code>parameter which is
						 * sap.ui.model.odata.UpdateMethod.Merge by default. In case of a sap.ui.model.odata.UpdateMethod.Merge
						 * request only the changed properties will be updated.If a URI with a $expand System Query Option was
						 * used then the expand entries will be removed from the collected changes.Changes to this entries
						 * should be done on the entry itself. So no deep updates are supported.Important: The success/error
						 * handler will only be called if batch support is enabled. If multiple batchGroups are submitted the
						 * handlers will be called for every batchGroup.
						 * @param mParameters a map which contains the following parameter properties:
						 * @returns an object which has an <code>abort</code> function to abort the current request or requests
						 */
						submitChanges(mParameters: any): any;

						/**
						 * Trigger a PUT/MERGE request to the odata service that was specified in the model constructor.The
						 * update method used is defined by the global <code>defaultUpdateMethod</code> parameter which is
						 * sap.ui.model.odata.UpdateMethod.Merge by default.Please note that deep updates are not supported and
						 * may not work. These should be done seperate on the entry directly.
						 * @param sPath A string containing the path to the data that should be updated.		The path is
						 * concatenated to the sServiceUrl which was specified		in the model constructor.
						 * @param oData data of the entry that should be updated.
						 * @param mParameters Optional, can contain the following attributes:
						 * @returns an object which has an <code>abort</code> function to abort the current request.
						 */
						update(sPath: string, oData: any, mParameters?: any): any;

						/**
						 * update all bindings
						 * @param bForceUpdate If set to false an update  will only be done when the value of a binding
						 * changed.
						 */
						updateBindings(bForceUpdate: boolean): void;
					}
					/**
					 * Tree binding implementation for odata models.To use the v2.ODataTreeBinding with an odata service,
					 * which exposes hierarchy annotations, pleaseconsult the "SAP Annotations for OData Version 2.0"
					 * Specification.The necessary property annotations, as well as accepted/default values are documented
					 * in the specification.In addition to these hieararchy annotations, the ODataTreeBinding also supports
					 * (cyclic) references between entities based on navigation properties.To do this you have to specify
					 * the binding parameter "navigation".The pattern for this is as follows: { entitySetName:
					 * "navigationPropertyName" }.Example: {	 "Employees": "toColleagues"}In OperationMode.Server, the
					 * filtering on the ODataTreeBinding is only supported with initial filters.However please be aware
					 * that this applies only to filters which do not obstruct the creation of a hierarchy.So filtering on
					 * a property (e.g. a "Customer") is fine, as long as the application can ensure, that the responses
					 * from the backend are enoughto construct a tree hierarchy. Subsequent paging requests for sibiling
					 * and child nodes must also return responses since the filters will be sent withevery
					 * request.Filtering with the filter() function is not supported for the OperationMode.Server.With
					 * OperationMode.Client and OperationMode.Auto, the ODataTreeBinding also supports control filters.In
					 * these OperationModes, the filters and sorters will be applied clientside, same as for the
					 * v2.ODataListBinding.The OperationModes "Client" and "Auto" are only supported for trees which will
					 * be constructed based upon hierarchy annotations.
					 * @resource sap/ui/model/odata/v2/ODataTreeBinding.js
					 */
					export class ODataTreeBinding extends sap.ui.model.TreeBinding {
						constructor(
							oModel: sap.ui.model.Model,
							sPath: string,
							oContext: sap.ui.model.Context,
							aApplicationFilters?: sap.ui.model.Filter[],
							mParameters?: any,
							aSorters?: sap.ui.model.Sorter[]
						);

						/**
						 * Applies the given filters to the ODataTreeBinding.Please note that "Control" filters are not
						 * suported for OperationMode.Server, here only "Application" filters are allowed.Filters given via the
						 * constructor are always Application filters and will be send with every backend-request.Please see
						 * the constructor documentation for more information.Since 1.34.0 complete clientside filtering is
						 * supported for OperationMode.Client and in OperationMode.Auto, in case the backend-count is lower
						 * than the threshold.In this case all control and application filters will be applied on the
						 * client.See also: {@link sap.ui.model.odata.OperationMode.Auto}, {@link sap.ui.model.FilterType}.For
						 * the OperationMode.Client and OperationMode.Auto, you may also specify the
						 * "useServersideApplicationFilters" constructor binding parameter.If this is set, the Application
						 * filters will always be applied on the backend, and thus trigger an OData request.Please see the
						 * constructor documentation for more information.
						 * @param aFilters undefined
						 * @param sFilterType Type of the filter which should be adjusted, if it is not given, the standard
						 * behaviour FilterType.Client applies
						 * @returns returns <code>this</code> to facilitate method chaining
						 */
						filter(
							aFilters: sap.ui.model.Filter[] | sap.ui.model.Filter,
							sFilterType: typeof sap.ui.model.FilterType
						): sap.ui.model.odata.v2.ODataTreeBinding;

						/**
						 * Returns the number of child nodes. This function is not available when the annotation
						 * "hierarchy-node-descendant-count-for"is exposed on the service.
						 * @param oContext the context element of the node
						 * @returns the number of children
						 */
						getChildCount(oContext: any): number;

						/**
						 * Get a download URL with the specified format considering thesort/filter/custom parameters.
						 * @since 1.28
						 * @param sFormat Value for the $format Parameter
						 * @returns URL which can be used for downloading
						 */
						getDownloadUrl(sFormat: string): string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v2.ODataTreeBinding.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the contexts of the child nodes for the given context. This function is not available when
						 * the annotation "hierarchy-node-descendant-count-for"is exposed on the service.
						 * @param oContext the context for which the child nodes should be retrieved
						 * @param iStartIndex the start index of the requested contexts
						 * @param iLength the requested amount of contexts
						 * @param iThreshold undefined
						 * @returns the contexts array
						 */
						getNodeContexts(
							oContext: any,
							iStartIndex: number,
							iLength: number,
							iThreshold?: number
						): any[];

						/**
						 * Returns root contexts for the tree. You can specify the start index and the length for paging
						 * requests.This function is not available when the annotation "hierarchy-node-descendant-count-for" is
						 * exposed on the service.
						 * @param iStartIndex the start index of the requested contexts
						 * @param iLength the requested amount of contexts. If none given, the default value is the size limit
						 * of the underlying												 sap.ui.model.odata.v2.ODataModel instance.
						 * @param iThreshold the number of entities which should be retrieved in addition to the given length.
						 * 		  A higher threshold reduces the number of backend requests, yet these request blow up in size,
						 * since more data is loaded.
						 * @returns an array containing the contexts for the entities returned by the backend, might be fewer
						 * than requested								  if the backend does not have enough data.
						 */
						getRootContexts(
							iStartIndex: number,
							iLength?: number,
							iThreshold?: number
						): sap.ui.model.Context[];

						/**
						 * Returns the rootLevel
						 */
						getRootLevel(): number;

						/**
						 * Returns if the node has child nodes.If the ODataTreeBinding is running with hierarchy annotations, a
						 * context with the property values "expanded" or "collapsed"for the drilldown state property, returns
						 * true. Entities with drilldown state "leaf" return false.This function is not available when the
						 * annotation "hierarchy-node-descendant-count-for" is exposed on the service.
						 * @param oContext the context element of the node
						 * @returns true if node has children
						 */
						hasChildren(oContext: sap.ui.model.Context): boolean;

						/**
						 * Initialize binding. Fires a change if data is already available ($expand) or a refresh.If metadata
						 * is not yet available, do nothing, method will be called again whenmetadata is loaded.
						 * @returns The binding instance
						 */
						initialize(): sap.ui.model.odata.v2.ODataTreeBinding;

						/**
						 * Refreshes the binding, check whether the model data has been changed and fire change eventif this is
						 * the case. For server side models this should refetch the data from the server.To update a control,
						 * even if no data has been changed, e.g. to reset a control after failedvalidation, please use the
						 * parameter bForceUpdate.
						 * @param bForceUpdate Update the bound control even if no data has been changed
						 * @param sGroupId The  group Id for the refresh
						 */
						refresh(bForceUpdate: boolean, sGroupId?: string): void;

						/**
						 * Sets the rootLevelThe root level is the level of the topmost tree nodes, which will be used as an
						 * entry point for OData services.This is only possible (and necessary) for OData services implementing
						 * the hierarchy annotation specification,or when providing the annotation information locally as a
						 * binding parameter. See the constructor for API documentation on this.
						 * @param iRootLevel undefined
						 */
						setRootLevel(iRootLevel: number): void;

						/**
						 * Sorts the Tree according to the given Sorter(s).In OperationMode.Client or OperationMode.Auto (if
						 * the given threshold is satisfied), the sorters are applied locally on the client.
						 * @param aSorters the Sorter or an Array of sap.ui.model.Sorter instances
						 * @returns returns <code>this</code> to facilitate method chaining
						 */
						sort(
							aSorters: sap.ui.model.Sorter[] | sap.ui.model.Sorter
						): sap.ui.model.ListBinding | void;
					}
					/**
					 * Annotation loader for OData V2 services
					 * @resource sap/ui/model/odata/v2/ODataAnnotations.js
					 */
					export class ODataAnnotations extends sap.ui.base.EventProvider {
						constructor();

						/**
						 * This event exists for compatibility with the old Annotation loaderAttaches the given callback to the
						 * <code>allFailed</code> event. This event is fired when no annotation from a group ofsources was
						 * successfully (loaded,) parsed and merged.The parameter <code>result</code> will be set on the event
						 * argument and contains an array of Errors in the order in whichthe sources had been added.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The event callback. This function will be called in the context of the oListener
						 *     object if given as the next argument.
						 * @param oListener Object to use as context of the callback. If empty, the global context is used.
						 * @returns <code>this</code>-reference to allow method chaining
						 */
						attachAllFailed(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Attaches the given callback to the <code>error</code> event, which is fired whenever a source cannot
						 * be loaded, parsed ormerged into the annotation data.The following parameters will be set on the
						 * event object that is given to the callback function:  <code>source</code> - A map containing the
						 * properties <code>type</code> - containing either "url" or "xml" - and <code>data</code> containing
						 *           the data given as source, either an URL or an XML string depending on how the source was
						 * added.  <code>error</code>  - An Error object describing the problem that occurred
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The event callback. This function will be called in the context of the oListener
						 *     object if given as the next argument.
						 * @param oListener Object to use as context of the callback. If empty, the global context is used.
						 * @returns <code>this</code>-reference to allow method chaining
						 */
						attachError(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Attaches the given callback to the <code>failed</code> event. This event is fired when at least one
						 * annotation from a groupof sources was not successfully (loaded,) parsed or merged.The parameter
						 * <code>result</code> will be set on the event argument and contains an array of Errors in the order
						 * in whichthe sources had been added.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The event callback. This function will be called in the context of the oListener
						 *     object if given as the next argument.
						 * @param oListener Object to use as context of the callback. If empty, the global context is used.
						 * @returns <code>this</code>-reference to allow method chaining
						 */
						attachFailed(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Attaches the given callback to the <code>loaded</code> event. This event is fired when all
						 * annotations from a group ofsources was successfully (loaded,) parsed and merged.The parameter
						 * <code>result</code> will be set on the event argument and contains an array of all loaded sources as
						 * wellas Errors in the order in which they had been added.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The event callback. This function will be called in the context of the oListener
						 *     object if given as the next argument.
						 * @param oListener Object to use as context of the callback. If empty, the global context is used.
						 * @returns <code>this</code>-reference to allow method chaining
						 */
						attachLoaded(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * This event exists for compatibility with the old Annotation loaderAttaches the given callback to the
						 * <code>someLoaded</code> event. This event is fired when at least one annotation from agroup of
						 * sources was successfully (loaded,) parsed and merged.The parameter <code>result</code> will be set
						 * on the event argument and contains an array of all loaded sources as wellas Errors in the order in
						 * which they had been added.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The event callback. This function will be called in the context of the oListener
						 *     object if given as the next argument.
						 * @param oListener Object to use as context of the callback. If empty, the global context is used.
						 * @returns <code>this</code>-reference to allow method chaining
						 */
						attachSomeLoaded(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Attaches the given callback to the <code>success</code> event, which is fired whenever a source has
						 * been successfully(loaded,) parsed and merged into the annotation data.The following parameters will
						 * be set on the event object that is given to the callback function:  <code>source</code> - A map
						 * containing the properties <code>type</code> - containing either "url" or "xml" - and
						 * <code>data</code> containing             the data given as source, either an URL or an XML string
						 * depending on how the source was added.
						 * @param oData The object, that should be passed along with the event-object when firing the event.
						 * @param fnFunction The event callback. This function will be called in the context of the oListener
						 *     object if given as the next argument.
						 * @param oListener Object to use as context of the callback. If empty, the global context is used.
						 * @returns <code>this</code>-reference to allow method chaining.
						 */
						attachSuccess(
							oData: any,
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Detaches the given callback from the <code>allFailed</code> event.The passed function and listener
						 * object must match the ones previously used for attaching to the event.
						 * @param fnFunction The event callback previously used with {@link
						 * sap.ui.model.odata.v2.ODataAnnotations#attachFailed}.
						 * @param oListener The same (if any) context object that was used when attaching to the
						 * <code>error</code> event.
						 * @returns <code>this</code>-reference to allow method chaining.
						 */
						detachAllFailed(
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Detaches the given callback from the <code>error</code> event.The passed function and listener
						 * object must match the ones previously used for attaching to the event.
						 * @param fnFunction The event callback previously used with {@link
						 * sap.ui.model.odata.v2.ODataAnnotations#attachError}.
						 * @param oListener The same (if any) context object that was used when attaching to the
						 * <code>error</code> event.
						 * @returns <code>this</code>-reference to allow method chaining.
						 */
						detachError(
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Detaches the given callback from the <code>failed</code> event.The passed function and listener
						 * object must match the ones previously used for attaching to the event.
						 * @param fnFunction The event callback previously used with {@link
						 * sap.ui.model.odata.v2.ODataAnnotations#attachFailed}.
						 * @param oListener The same (if any) context object that was used when attaching to the
						 * <code>error</code> event.
						 * @returns <code>this</code>-reference to allow method chaining.
						 */
						detachFailed(
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Detaches the given callback from the <code>loaded</code> event.The passed function and listener
						 * object must match the ones previously used for attaching to the event.
						 * @param fnFunction The event callback previously used with {@link
						 * sap.ui.model.odata.v2.ODataAnnotations#attachLoaded}.
						 * @param oListener The same (if any) context object that was used when attaching to the
						 * <code>error</code> event.
						 * @returns <code>this</code>-reference to allow method chaining.
						 */
						detachLoaded(
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Detaches the given callback from the <code>someLoaded</code> event.The passed function and listener
						 * object must match the ones previously used for attaching to the event.
						 * @param fnFunction The event callback previously used with {@link
						 * sap.ui.model.odata.v2.ODataAnnotations#attachSomeLoaded}.
						 * @param oListener The same (if any) context object that was used when attaching to the
						 * <code>error</code> event.
						 * @returns <code>this</code>-reference to allow method chaining.
						 */
						detachSomeLoaded(
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * Detaches the given callback from the <code>success</code> event.The passed function and listener
						 * object must match the ones previously used for attaching to the event.
						 * @param fnFunction The event callback previously used with {@link
						 * sap.ui.model.odata.v2.ODataAnnotations#attachSuccess}.
						 * @param oListener The same (if any) context object that was used when attaching to the
						 * <code>success</code> event.
						 * @returns <code>this</code>-reference to allow method chaining.
						 */
						detachSuccess(
							fnFunction: any,
							oListener?: any
						): sap.ui.model.odata.v2.ODataAnnotations;

						/**
						 * V1 API Compatibility method. @see sap.ui.model.odata.v2.ODataAnnotations#getDataReturns the parsed
						 * and merged annotation data object
						 * @returns returns annotations data
						 */
						getAnnotationsData(): any;

						/**
						 * Returns the parsed and merged annotation data object
						 * @returns returns annotations data
						 */
						getData(): any;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v2.ODataAnnotations.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns a promise that resolves when the annotation sources that were added up to this point were
						 * successfully(loaded,) parsed and merged
						 * @returns The Promise that resolves/rejects after the last added sources have been processed
						 */
						loaded(): JQueryPromise<any>;

						/**
						 * Set custom headers which are provided in a key/value map. These headers are used for all
						 * requests.The "Accept-Language" header cannot be modified and is set using the core's language
						 * setting.To remove these headers, simply set the <code>mHeaders</code> parameter to <code>{}</code>.
						 * Please also note that when calling this methodagain all previous custom headers are removed unless
						 * they are specified again in the <code>mCustomHeaders</code> parameter.
						 * @param mHeaders the header name/value map.
						 */
						setHeaders(mHeaders: any): void;
					}
					/**
					 * List binding implementation for oData format
					 * @resource sap/ui/model/odata/v2/ODataListBinding.js
					 */
					export class ODataListBinding extends sap.ui.model.ListBinding {
						constructor(
							oModel: sap.ui.model.Model,
							sPath: string,
							oContext: sap.ui.model.Context,
							aSorters?: any[],
							aFilters?: any[],
							mParameters?: any
						);

						/**
						 * Filters the list.When using sap.ui.model.Filter the filters are first grouped according to their
						 * binding path.All filters belonging to a group are combined with OR and after that theresults of all
						 * groups are combined with AND.Usually this means, all filters applied to a single table columnare
						 * combined with OR, while filters on different table columns are combined with AND.Please note that a
						 * custom filter function is only supported with operation mode
						 * <code>sap.ui.model.odata.OperationMode.Client</code>.
						 * @param aFilters Array of filter objects
						 * @param sFilterType Type of the filter which should be adjusted, if it is not given, the standard
						 * behaviour applies
						 * @returns returns <code>this</code> to facilitate method chaining
						 */
						filter(
							aFilters: sap.ui.model.Filter[] | sap.ui.model.odata.Filter[],
							sFilterType: typeof sap.ui.model.FilterType
						): sap.ui.model.ListBinding;

						/**
						 * Return contexts for the list
						 * @param iStartIndex the start index of the requested contexts
						 * @param iLength the requested amount of contexts
						 * @param iThreshold The threshold value
						 * @returns the array of contexts for each row of the bound list
						 */
						getContexts(
							iStartIndex: number,
							iLength?: number,
							iThreshold?: number
						): sap.ui.model.Context[];

						/**
						 * Get a download URL with the specified format considering thesort/filter/custom parameters.
						 * @since 1.24
						 * @param sFormat Value for the $format Parameter
						 * @returns URL which can be used for downloading
						 */
						getDownloadUrl(sFormat: string): string;

						/**
						 * Return the length of the list.In case the final length is unknown (e.g. when searching on a large
						 * dataset), this willreturn an estimated length.
						 * @returns the length
						 */
						getLength(): number;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v2.ODataListBinding.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Initialize binding. Fires a change if data is already available ($expand) or a refresh.If metadata
						 * is not yet available, do nothing, method will be called again whenmetadata is loaded.
						 * @returns oBinding The binding instance
						 */
						initialize(): sap.ui.model.odata.ODataListBinding;

						/**
						 * Refreshes the binding, check whether the model data has been changed and fire change eventif this is
						 * the case. For server side models this should refetch the data from the server.To update a control,
						 * even if no data has been changed, e.g. to reset a control after failedvalidation, please use the
						 * parameter bForceUpdate.
						 * @param bForceUpdate Update the bound control even if no data has been changed
						 * @param sGroupId The group Id for the refresh
						 */
						refresh(bForceUpdate: boolean, sGroupId?: string): void;

						/**
						 * Sorts the list.
						 * @param aSorters the Sorter or an array of sorter objects object which define the sort order
						 * @returns returns <code>this</code> to facilitate method chaining
						 */
						sort(
							aSorters: sap.ui.model.Sorter[] | sap.ui.model.Sorter
						): sap.ui.model.ListBinding | void;
					}
					/**
					 * The ContextBinding is a specific binding for a setting context for the model
					 * @resource sap/ui/model/odata/v2/ODataContextBinding.js
					 */
					export abstract class ODataContextBinding extends sap.ui.model
						.ContextBinding {
						/**
						 * Constructor for odata.ODataContextBinding
						 * @param oModel undefined
						 * @param sPath undefined
						 * @param oContext undefined
						 * @param mParameters a map which contains additional parameters for the binding.
						 */
						constructor(
							oModel: sap.ui.model.Model,
							sPath: string,
							oContext: any,
							mParameters?: any
						);

						/**
						 * Returns a metadata object for class sap.ui.model.odata.v2.ODataContextBinding.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * @param bForceUpdate Update the bound control even if no data has been changed
						 * @param sGroupId The group Id for the refresh
						 */
						refresh(bForceUpdate: boolean, sGroupId?: string): void;
					}
				}
				namespace type {
					/**
					 * This class represents a placeholder for all unsupported OData primitive types. It can  only be used
					 * to retrieve raw values "as is" (i.e. <code>formatValue(vValue, "any")</code>),  but not to actually
					 * convert to or from any other representation or to validate.
					 * @resource sap/ui/model/odata/type/Raw.js
					 */
					export class Raw extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for a placeholder for all unsupported OData primitive types.
						 * @param oFormatOptions Must be <code>undefined</code>
						 * @param oConstraints Must be <code>undefined</code>
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.
						 * @since 1.37.0
						 * @param vValue The raw value to be retrieved "as is"
						 * @param sTargetType The target type; must be "any"
						 * @returns The raw value "as is"
						 */
						formatValue(vValue: any, sTargetType: string): any;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Raw.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @since 1.37.0
						 * @returns The type's name
						 */
						getName(): string;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						parseValue(): void;

						/**
						 * Method not supported
						 * @since 1.37.0
						 */
						validateValue(): void;
					}
					/**
					 * This is an abstract base class for integer-based<a
					 * href="http://www.odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem">OData
					 * primitive types</a> like <code>Edm.Int16</code> or <code>Edm.Int32</code>.
					 * @resource sap/ui/model/odata/type/Int.js
					 */
					export class Int extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for a new <code>Int</code>.
						 * @param oFormatOptions type-specific format options; see subtypes
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.When formatting to <code>string</code> the format
						 * options are used.
						 * @param iValue the value in model representation to be formatted
						 * @param sTargetType the target type; may be "any", "int", "float" or "string".  See {@link
						 * sap.ui.model.odata.type} for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(iValue: number, sTargetType: string): number | string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Int.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Parses the given value, which is expected to be of the given source type, to an Int innumber
						 * representation.
						 * @param vValue the value to be parsed. The empty string and <code>null</code> are parsed to
						 * <code>null</code>.
						 * @param sSourceType the source type (the expected type of <code>vValue</code>); may be "float", "int"
						 * or  "string".  See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(vValue: number | string, sSourceType: string): number;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @param iValue the value to be validated
						 */
						validateValue(iValue: number): void;
					}
					/**
					 * This class represents the OData primitive type
					 * .odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Byte</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>number</code>.
					 * @resource sap/ui/model/odata/type/Byte.js
					 */
					export class Byte extends sap.ui.model.odata.type.Int {
						/**
						 * Constructor for a primitive type <code>Edm.Byte</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}
						 * @param oConstraints constraints; {@link sap.ui.model.odata.type.Int#validateValue validateValue}
						 * throws an  error if any constraint is violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Byte.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Returns the type's supported range as object with properties <code>minimum</code>
						 * and<code>maximum</code>.
						 * @returns the range
						 */
						getRange(): any;
					}
					/**
					 * This class represents the OData V4 primitive type <code>Edm.Date</code>.In {@link
					 * sap.ui.model.odata.v4.ODataModel} this type is represented as a<code>string</code> in the format
					 * "yyyy-mm-dd".
					 * @resource sap/ui/model/odata/type/Date.js
					 */
					export class Date extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for an OData primitive type <code>Edm.Date</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.DateFormat}
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.
						 * @param sValue the value to be formatted
						 * @param sTargetType the target type; may be "any" or "string".  See {@link sap.ui.model.odata.type}
						 * for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(sValue: string, sTargetType: string): string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Date.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value to a date.
						 * @param sValue the value to be parsed, maps <code>""</code> to <code>null</code>
						 * @param sSourceType the source type (the expected type of <code>sValue</code>); must be "string"  See
						 * {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(sValue: string, sSourceType: string): string;

						/**
						 * Validates whether the given value in model representation is valid and meets thegiven constraints.
						 * @param sValue the value to be validated
						 */
						validateValue(sValue: string): void;
					}
					/**
					 * This class represents the OData V2 primitive type
					 * .odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Time</code></a>.In
					 * {@link sap.ui.model.odata.v2.ODataModel ODataModel} this type is represented as anobject with two
					 * properties:<ul><li><code>__edmType</code> with the value "Edm.Time"<li><code>ms</code> with the
					 * number of milliseconds since midnight</ul>
					 * @resource sap/ui/model/odata/type/Time.js
					 */
					export class Time extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for an OData primitive type <code>Edm.Time</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.DateFormat}
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type
						 * @param oValue the value in model representation to be formatted.
						 * @param sTargetType the target type; may be "any" or "string".  See {@link sap.ui.model.odata.type}
						 * for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(oValue: any, sTargetType: string): string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Time.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value, which is expected to be of the given type, to a time object.
						 * @param sValue the value to be parsed, maps <code>""</code> to <code>null</code>
						 * @param sSourceType the source type (the expected type of <code>sValue</code>); must be "string".
						 * See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value as described in {@link #formatValue formatValue}
						 */
						parseValue(sValue: string, sSourceType: string): any;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @param oValue the value to be validated
						 */
						validateValue(oValue: any): void;
					}
					/**
					 * This class represents the OData primitive type
					 * .odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Guid</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>string</code>.
					 * @resource sap/ui/model/odata/type/Guid.js
					 */
					export class Guid extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for an OData primitive type <code>Edm.Guid</code>.
						 * @param oFormatOptions format options as defined in the interface of {@link sap.ui.model.SimpleType};
						 * this  type ignores them since it does not support any format options
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.
						 * @param sValue the value to be formatted
						 * @param sTargetType the target type; may be "any" or "string".  See {@link sap.ui.model.odata.type}
						 * for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(sValue: string, sTargetType: string): string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Guid.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value to a GUID.
						 * @param sValue the value to be parsed, maps <code>""</code> to <code>null</code>
						 * @param sSourceType the source type (the expected type of <code>sValue</code>); must be "string".
						 * See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(sValue: string, sSourceType: string): string;

						/**
						 * Validates whether the given value in model representation is valid and meets thegiven constraints.
						 * @param sValue the value to be validated
						 */
						validateValue(sValue: string): void;
					}
					/**
					 * This class represents the OData primitive type
					 * odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.SByte</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>number</code>.
					 * @resource sap/ui/model/odata/type/SByte.js
					 */
					export class SByte extends sap.ui.model.odata.type.Int {
						/**
						 * Constructor for a primitive type <code>Edm.SByte</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}
						 * @param oConstraints constraints; {@link sap.ui.model.odata.type.Int#validateValue validateValue}
						 * throws an  error if any constraint is violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.SByte.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Returns the type's supported range as object with properties <code>minimum</code>
						 * and<code>maximum</code>.
						 * @returns the range
						 */
						getRange(): any;
					}
					/**
					 * This class represents the OData primitive type
					 * odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Int64</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>string</code>.
					 * @resource sap/ui/model/odata/type/Int64.js
					 */
					export class Int64 extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for a primitive type <code>Edm.Int64</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}. In
						 * contrast to  NumberFormat <code>groupingEnabled</code> defaults to <code>true</code>.
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints: any);

						/**
						 * Formats the given value to the given target type.
						 * @param sValue the value to be formatted, which is represented as a string in the model
						 * @param sTargetType the target type; may be "any", "float", "int" or "string".  See {@link
						 * sap.ui.model.odata.type} for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(sValue: string, sTargetType: string): number | string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Int64.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value, which is expected to be of the given type, to an Int64 in<code>string</code>
						 * representation.
						 * @param vValue the value to be parsed; the empty string and <code>null</code> are parsed to
						 * <code>null</code>
						 * @param sSourceType the source type (the expected type of <code>vValue</code>); may be "float", "int"
						 * or  "string".  See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(vValue: string | number, sSourceType: string): string;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @param sValue the value to be validated
						 */
						validateValue(sValue: string): void;
					}
					/**
					 * This class represents the OData primitive type
					 * odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Int32</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>number</code>.
					 * @resource sap/ui/model/odata/type/Int32.js
					 */
					export class Int32 extends sap.ui.model.odata.type.Int {
						/**
						 * Constructor for a primitive type <code>Edm.Int32</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}. In
						 * contrast to  NumberFormat <code>groupingEnabled</code> defaults to <code>true</code>.
						 * @param oConstraints constraints; {@link sap.ui.model.odata.type.Int#validateValue validateValue}
						 * throws an  error if any constraint is violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Int32.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Returns the type's supported range as object with properties <code>minimum</code>
						 * and<code>maximum</code>.
						 * @returns the range
						 */
						getRange(): any;
					}
					/**
					 * This class represents the OData primitive type
					 * odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Int16</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>number</code>.
					 * @resource sap/ui/model/odata/type/Int16.js
					 */
					export class Int16 extends sap.ui.model.odata.type.Int {
						/**
						 * Constructor for a primitive type <code>Edm.Int16</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}. In
						 * contrast to  NumberFormat <code>groupingEnabled</code> defaults to <code>true</code>.
						 * @param oConstraints constraints; {@link sap.ui.model.odata.type.Int#validateValue validateValue}
						 * throws an  error if any constraint is violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Int16.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Returns the type's supported range as object with properties <code>minimum</code>
						 * and<code>maximum</code>.
						 * @returns the range
						 */
						getRange(): any;
					}
					/**
					 * This class represents the OData primitive type
					 * data.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Double</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>number</code>.
					 * @resource sap/ui/model/odata/type/Double.js
					 */
					export class Double extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for a primitive type <code>Edm.Double</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}. In
						 * contrast to  NumberFormat <code>groupingEnabled</code> defaults to <code>true</code>.
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type. When formatting to "string", very largeor very
						 * small values are formatted to the exponential format (e.g. "-3.14 E+15").
						 * @param vValue the value to be formatted, which is represented as a number in the model
						 * @param sTargetType the target type; may be "any", "float", "int", "string".  See {@link
						 * sap.ui.model.odata.type} for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(
							vValue: number | string,
							sTargetType: string
						): number | string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Double.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value, which is expected to be of the given type, to an Edm.Double
						 * in<code>number</code> representation.
						 * @since 1.29.0
						 * @param vValue the value to be parsed; the empty string and <code>null</code> are parsed to
						 * <code>null</code>; note that there is no way to enter <code>Infinity</code> or  <code>NaN</code>
						 * values
						 * @param sSourceType the source type (the expected type of <code>vValue</code>); may be "float", "int"
						 * or  "string".  See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(vValue: string | number, sSourceType: string): number;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @since 1.29.0
						 * @param fValue the value to be validated
						 */
						validateValue(fValue: number): void;
					}
					/**
					 * This class represents the OData primitive type
					 * data.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Single</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>number</code>.
					 * @resource sap/ui/model/odata/type/Single.js
					 */
					export class Single extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for a primitive type <code>Edm.Single</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}. In
						 * contrast to  NumberFormat <code>groupingEnabled</code> defaults to <code>true</code>.
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.
						 * @param vValue the value to be formatted, which is represented as a number in the model
						 * @param sTargetType the target type; may be "any", "float", "int", "string".  See {@link
						 * sap.ui.model.odata.type} for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(
							vValue: string | number,
							sTargetType: string
						): number | string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Single.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value, which is expected to be of the given type, to an Edm.Single
						 * in<code>number</code> representation.
						 * @since 1.29.0
						 * @param vValue the value to be parsed; the empty string and <code>null</code> are parsed to
						 * <code>null</code>; note that there is no way to enter <code>Infinity</code> or  <code>NaN</code>
						 * values
						 * @param sSourceType the source type (the expected type of <code>vValue</code>); may be "float", "int"
						 *  or "string".  See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(vValue: string | number, sSourceType: string): number;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @since 1.29.0
						 * @param fValue the value to be validated
						 */
						validateValue(fValue: number): void;
					}
					/**
					 * This class represents the OData primitive type
					 * data.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.String</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>string</code>.
					 * @resource sap/ui/model/odata/type/String.js
					 */
					export class String extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for an OData primitive type <code>Edm.String</code>.
						 * @param oFormatOptions format options as defined in the interface of {@link sap.ui.model.SimpleType};
						 * this  type ignores them since it does not support any format options
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.If <code>isDigitSequence</code> constraint of this
						 * type is set to <code>true</code> and thetarget type is any or string and the given value contains
						 * only digits, the leading zeros aretruncated.
						 * @param sValue the value to be formatted
						 * @param sTargetType the target type; may be "any", "boolean", "float", "int" or "string".  See {@link
						 * sap.ui.model.odata.type} for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> is always formatted
						 * to <code>null</code>; <code>null</code> is formatted to "" if the target type is "string".
						 */
						formatValue(
							sValue: string,
							sTargetType: string
						): string | number | boolean;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.String.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value which is expected to be of the given type to a string.If
						 * <code>isDigitSequence</code> constraint of this type is set to <code>true</code> andthe parsed
						 * string is a sequence of digits, then the parsed string is either enhanced withleading zeros, if
						 * <code>maxLength</code> constraint is given, or leading zeros are removedfrom parsed string.
						 * @param vValue the value to be parsed, maps <code>""</code> to <code>null</code>
						 * @param sSourceType the source type (the expected type of <code>vValue</code>).  See {@link
						 * sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(
							vValue: string | number | boolean,
							sSourceType: string
						): string;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @param sValue the value to be validated
						 */
						validateValue(sValue: string): void;
					}
					/**
					 * This class represents the OData primitive type
					 * ata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Boolean</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>boolean</code>.
					 * @resource sap/ui/model/odata/type/Boolean.js
					 */
					export class Boolean extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for an OData primitive type <code>Edm.Boolean</code>.
						 * @param oFormatOptions format options as defined in the interface of {@link sap.ui.model.SimpleType};
						 * this  type ignores them since it does not support any format options
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given boolean value to the given target type.
						 * @param bValue the value to be formatted
						 * @param sTargetType the target type; may be "any", "boolean" or "string". If it is "string", the
						 * result is  "Yes" or "No" in the current {@link sap.ui.core.Configuration#getLanguage language}.  See
						 * {@link sap.ui.model.odata.type} for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(bValue: boolean, sTargetType: string): boolean | string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Boolean.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value from the given type to a boolean.
						 * @param vValue the value to be parsed; the empty string and <code>null</code> are parsed to
						 * <code>null</code>
						 * @param sSourceType the source type (the expected type of <code>vValue</code>); may be "boolean" or
						 * "string".  See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(vValue: boolean | string, sSourceType: string): boolean;

						/**
						 * Validates whether the given value in model representation is valid and meets the givenconstraints.
						 * @param bValue the value to be validated
						 */
						validateValue(bValue: boolean): void;
					}
					/**
					 * This class represents the OData primitive type
					 * ata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.Decimal</code></a>.In
					 * both {@link sap.ui.model.odata.v2.ODataModel} and {@link sap.ui.model.odata.v4.ODataModel}this type
					 * is represented as a <code>string</code>. It never uses exponential format ("1e-5").
					 * @resource sap/ui/model/odata/type/Decimal.js
					 */
					export class Decimal extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for a primitive type <code>Edm.Decimal</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.NumberFormat}. In
						 * contrast to  NumberFormat <code>groupingEnabled</code> defaults to <code>true</code>.  Note that
						 * <code>maxFractionDigits</code> and <code>minFractionDigits</code> are set to  the value of the
						 * constraint <code>scale</code> unless it is "variable". They can however  be overwritten.
						 * @param oConstraints constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type. When formatting to "string" the type'sconstraint
						 * <code>scale</code> is taken into account.
						 * @param sValue the value to be formatted, which is represented as a string in the model
						 * @param sTargetType the target type; may be "any", "float", "int" or "string".  See {@link
						 * sap.ui.model.odata.type} for more information.
						 * @returns the formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(sValue: string, sTargetType: string): number | string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.Decimal.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;

						/**
						 * Parses the given value, which is expected to be of the given type, to a decimal
						 * in<code>string</code> representation.
						 * @param vValue the value to be parsed; the empty string and <code>null</code> are parsed to
						 * <code>null</code>
						 * @param sSourceType the source type (the expected type of <code>vValue</code>); may be "float", "int"
						 * or  "string".  See {@link sap.ui.model.odata.type} for more information.
						 * @returns the parsed value
						 */
						parseValue(vValue: string | number, sSourceType: string): string;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @param sValue the value to be validated
						 */
						validateValue(sValue: string): void;
					}
					/**
					 * This class represents the OData V2 primitive type
					 * ta.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"><code>Edm.DateTime</code></a>.If
					 * you want to display a date and a time, prefer {@linksap.ui.model.odata.type.DateTimeOffset},
					 * specifically designed for this purpose.Use <code>DateTime</code> with the SAP-specific annotation
					 * <code>display-format=Date</code>(resp. the constraint <code>displayFormat: "Date"</code>) to display
					 * only a date.In {@link sap.ui.model.odata.v2.ODataModel} this type is represented as
					 * a<code>Date</code>. With the constraint <code>displayFormat: "Date"</code>, the time zone isUTF and
					 * the time part is ignored, otherwise it is a date/time value in local time.
					 * @resource sap/ui/model/odata/type/DateTime.js
					 */
					export class DateTime extends sap.ui.model.odata.type.DateTimeBase {
						/**
						 * Constructor for a primitive type <code>Edm.DateTime</code>.
						 * @param oFormatOptions format options as defined in {@link sap.ui.core.format.DateFormat}
						 * @param oConstraints constraints; {@link sap.ui.model.odata.type.DateTimeBase#validateValue
						 * validateValue}  throws an error if any constraint is violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.DateTime.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @returns the type's name
						 */
						getName(): string;
					}
					/**
					 * This class represents the OData V4 primitive type {@link
					 * s/complete/part3-csdl/odata-v4.0-errata02-os-part3-csdl-complete.html#_The_edm:Documentation_Element
					 *  <code>Edm.TimeOfDay</code>}.  In {@link sap.ui.model.odata.v4.ODataModel} this type is represented
					 * as a  <code>string</code>.
					 * @resource sap/ui/model/odata/type/TimeOfDay.js
					 */
					export class TimeOfDay extends sap.ui.model.odata.type.ODataType {
						/**
						 * Constructor for an OData primitive type <code>Edm.TimeOfDay</code>.
						 * @param oFormatOptions Format options as defined in {@link sap.ui.core.format.DateFormat}
						 * @param oConstraints Constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.
						 * @since 1.37.0
						 * @param sValue The value to be formatted, which is represented as a string in the model
						 * @param sTargetType The target type, may be "any" or "string"; see {@link sap.ui.model.odata.type}
						 * for more  information
						 * @returns The formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(sValue: string, sTargetType: string): string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.TimeOfDay.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Returns the type's name.
						 * @since 1.37.0
						 * @returns The type's name
						 */
						getName(): string;

						/**
						 * Parses the given value, which is expected to be of the given type, to a string with anOData V4
						 * Edm.TimeOfDay value.
						 * @since 1.37.0
						 * @param sValue The value to be parsed, maps <code>""</code> to <code>null</code>
						 * @param sSourceType The source type (the expected type of <code>sValue</code>), must be "string"; see
						 *  {@link sap.ui.model.odata.type} for more information.
						 * @returns The parsed value
						 */
						parseValue(sValue: string, sSourceType: string): string;

						/**
						 * Validates the given value in model representation and meets the type's constraints.
						 * @since 1.37.0
						 * @param sValue The value to be validated
						 */
						validateValue(sValue: string): void;
					}
					/**
					 * This class is an abstract base class for all OData primitive types (see
					 * plete/part3-csdl/odata-v4.0-errata02-os-part3-csdl-complete.html#_The_edm:Documentation_ElementOData
					 * V4 Edm Types} and{@link
					 * http://www.odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystemOData V2 Edm
					 * Types}). All subtypes implement the interface of{@link sap.ui.model.SimpleType}. That means they
					 * implement next to the constructor:<ul><li>{@link sap.ui.model.SimpleType#getName
					 * getName}</li><li>{@link sap.ui.model.SimpleType#formatValue formatValue}</li><li>{@link
					 * sap.ui.model.SimpleType#parseValue parseValue}</li><li>{@link sap.ui.model.SimpleType#validateValue
					 * validateValue}</li></ul>All ODataTypes are immutable. All format options and constraints are given
					 * to theconstructor, they cannot be modified later.All ODataTypes use a locale-specific message when
					 * throwing an error caused by invaliduser input (e.g. if {@link
					 * sap.ui.model.odata.type.Double#parseValue Double.parseValue}cannot parse the given value to a
					 * number, or if any type's {@link #validateValuevalidateValue} gets a <code>null</code>, but the
					 * constraint <code>nullable</code> is<code>false</code>).
					 * @resource sap/ui/model/odata/type/ODataType.js
					 */
					export class ODataType extends sap.ui.model.SimpleType {
						/**
						 * Constructor for a new <code>ODataType</code>.
						 * @param oFormatOptions type-specific format options; see subtypes
						 * @param oConstraints type-specific constraints (e.g. <code>oConstraints.nullable</code>), see
						 * subtypes
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * @returns this
						 */
						getInterface(): sap.ui.base.Interface;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.ODataType.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;
					}
					/**
					 * This is an abstract base class for the OData primitive types  <code>Edm.DateTime</code> and
					 * <code>Edm.DateTimeOffset</code>.
					 * @resource sap/ui/model/odata/type/DateTimeBase.js
					 */
					export abstract class DateTimeBase extends sap.ui.model.odata.type
						.ODataType {
						/**
						 * Base constructor for the primitive types <code>Edm.DateTime</code>
						 * and<code>Edm.DateTimeOffset</code>.
						 * @param oFormatOptions Type-specific format options; see subtypes
						 * @param oConstraints Constraints; {@link #validateValue validateValue} throws an error if any
						 * constraint is  violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.
						 * @since 1.27.0
						 * @param oValue The value to be formatted, which is represented in the model as a <code>Date</code>
						 * instance (OData V2)
						 * @param sTargetType The target type, may be "any" or "string"; see {@link sap.ui.model.odata.type}
						 * for more  information
						 * @returns The formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(oValue: Date, sTargetType: string): Date | string;

						/**
						 * Returns a metadata object for class sap.ui.model.odata.type.DateTimeBase.
						 * @returns Metadata object describing this class
						 */
						getMetadata(): sap.ui.base.Metadata;

						/**
						 * Parses the given value to a <code>Date</code> instance (OData V2).
						 * @since 1.27.0
						 * @param sValue The value to be parsed; the empty string and <code>null</code> are parsed to
						 * <code>null</code>
						 * @param sSourceType The source type (the expected type of <code>sValue</code>), must be "string"; see
						 *  {@link sap.ui.model.odata.type} for more information
						 * @returns The parsed value
						 */
						parseValue(sValue: string, sSourceType: string): Date | string;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints.
						 * @since 1.27.0
						 * @param oValue The value to be validated
						 */
						validateValue(oValue: Date): void;
					}
					/**
					 * This class represents the OData primitive type <a
					 * href="http://www.odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem">
					 * <code>Edm.DateTimeOffset</code></a>.  In {@link sap.ui.model.odata.v2.ODataModel} this type is
					 * represented as a  <code>Date</code> instance in local time. In {@link
					 * sap.ui.model.odata.v4.ODataModel} this  type is represented as a <code>string</code> like
					 * "2014-11-27T13:47:26Z". See parameter  <code>oConstraints.V4</code> for more information.
					 * @resource sap/ui/model/odata/type/DateTimeOffset.js
					 */
					export class DateTimeOffset extends sap.ui.model.odata.type
						.DateTimeBase {
						/**
						 * Constructor for a primitive type <code>Edm.DateTimeOffset</code>.
						 * @param oFormatOptions Format options as defined in {@link sap.ui.core.format.DateFormat}
						 * @param oConstraints Constraints; {@link sap.ui.model.odata.type.DateTimeBase#validateValue
						 * validateValue}  throws an error if any constraint is violated
						 */
						constructor(oFormatOptions: any, oConstraints?: any);

						/**
						 * Formats the given value to the given target type.
						 * @since 1.27.0
						 * @param vValue The value to be formatted, which is represented in the model as a <code>Date</code>
						 * instance (OData V2) or as a string like "2014-11-27T13:47:26Z" (OData V4); both  representations are
						 * accepted independent of the model's OData version
						 * @param sTargetType The target type, may be "any" or "string"; see {@link sap.ui.model.odata.type}
						 * for more  information
						 * @returns The formatted output value in the target type; <code>undefined</code> or <code>null</code>
						 * are formatted to <code>null</code>
						 */
						formatValue(
							vValue: Date | string,
							sTargetType: string
						): Date | string;

						/**
						 * Returns the type's name.
						 * @returns The type's name
						 */
						getName(): string;

						/**
						 * Parses the given value to a <code>Date</code> instance (OData V2) or a string
						 * like"2014-11-27T13:47:26Z" (OData V4), depending on the model's OData version.
						 * @since 1.27.0
						 * @param sValue The value to be parsed; the empty string and <code>null</code> are parsed to
						 * <code>null</code>
						 * @param sSourceType The source type (the expected type of <code>sValue</code>), must be "string"; see
						 *  {@link sap.ui.model.odata.type} for more information
						 * @returns The parsed value
						 */
						parseValue(sValue: string, sSourceType: string): Date | string;

						/**
						 * Validates whether the given value in model representation is valid and meets thedefined constraints,
						 * depending on the model's OData version.
						 * @since 1.27.0
						 * @param vValue The value to be validated
						 */
						validateValue(vValue: any): void;
					}
				}
				namespace BatchMode {
					/**
					 * Batch grouping enabled
					 */
					var Group: any;

					/**
					 * No batch requests
					 */
					var None: any;
				}
				namespace CountMode {
					/**
					 * Count is retrieved by a separate request upfront and inline with each data request
					 */
					var Both: any;

					/**
					 * Count is retrieved by adding $inlinecount=allpages and is included in the data request
					 */
					var Inline: any;

					/**
					 * Count is retrieved by adding $inlinecount=allpages and is included in every data request
					 */
					var InlineRepeat: any;

					/**
					 * Count is not requested from the server
					 */
					var None: any;

					/**
					 * Count is retrieved by sending a separate $count request, before requesting data
					 */
					var Request: any;
				}
				namespace ODataUtils {
					/**
					 * Compares the given OData values based on their type. All date and time types can also becompared
					 * with a number. This number is then interpreted as the number of milliseconds thatthe corresponding
					 * date or time object should hold.
					 * @since 1.29.1
					 * @param vValue1 the first value to compare
					 * @param vValue2 the second value to compare
					 * @param bAsDecimal if <code>true</code>, the string values <code>vValue1</code> and
					 * <code>vValue2</code> are  compared as a decimal number (only sign, integer and fraction digits; no
					 * exponential  format). Otherwise they are recognized by looking at their types.
					 * @returns the result of the compare: <code>0</code> if the values are equal, <code>-1</code> if the
					 * first value is smaller, <code>1</code> if the first value is larger, <code>NaN</code> if  they
					 * cannot be compared
					 */
					function compare(
						vValue1: any,
						vValue2: any,
						bAsDecimal?: string
					): number;

					/**
					 * Formats a JavaScript value according to the given<a
					 * href="http://www.odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem">EDM
					 * type</a>.
					 * @param vValue the value to format
					 * @param sType the EDM type (e.g. Edm.Decimal)
					 * @returns the formatted value
					 */
					function formatValue(vValue: any, sType: string): string;

					/**
					 * Returns a comparator function optimized for the given EDM type.
					 * @since 1.29.1
					 * @param sEdmType the EDM type
					 * @returns the comparator function taking two values of the given type and returning <code>0</code>
					 * if the values are equal, <code>-1</code> if the first value is smaller, <code>1</code> if  the first
					 * value is larger and <code>NaN</code> if they cannot be compared (e.g. one value  is
					 * <code>null</code> or <code>undefined</code>)
					 */
					function getComparator(sEdmType: string): any;

					/**
					 * Adds an origin to the given service URL.If an origin is already present, it will only be replaced if
					 * the parameters object contains the flag "force: true".In case the URL already contains URL
					 * parameters, these will be kept.As a parameter, a sole alias is sufficient. The parameters
					 * vParameters.system and vParameters.client however have to be given in pairs.In case all three origin
					 * specifying parameters are given (system/client/alias), the alias has
					 * precedence.Examples:setOrigin("/backend/service/url/", "DEMO_123");- result:
					 * /backend/service/url;o=DEMO_123/setOrigin("/backend/service/url;o=OTHERSYS8?myUrlParam=true&x=4",
					 * {alias: "DEMO_123", force: true});- result
					 * /backend/service/url;o=DEMO_123?myUrlParam=true&x=4setOrigin("/backend/service/url/", {system:
					 * "DEMO", client: 134});- result /backend/service/url;o=sid(DEMO.134)/
					 * @since 1.30.7
					 * @param sServiceURL the URL which will be enriched with an origin
					 * @param vParameters if string then it is asumed its the system alias, else if the argument is an
					 * object then additional Parameters can be given
					 * @returns the service URL with the added origin.
					 */
					function setOrigin(
						sServiceURL: string,
						vParameters: any | string
					): string;
				}
				namespace UpdateMethod {
					/**
					 * MERGE method will send update requests in a MERGE request
					 */
					var Merge: any;

					/**
					 * PUT method will send update requests in a PUT request
					 */
					var Put: any;
				}
				namespace OperationMode {
					/**
					 * With OperationMode "Auto", operations are either processed on the client or on the server, depending
					 * on the given binding threshold.Please be aware, that the combination of OperationMode.Auto and
					 * CountMode.None is not supported.There are two possibilities which can happen, when using the "Auto"
					 * mode, depending on the configured "CountMode":1. CountMode "Request" and "Both"Initially the binding
					 * will issue a $count request without any filters/sorters.a) If the count is lower or equal to the
					 * threshold, the binding will behave like in operation mode "Client", and a data request for all
					 * entries is issued.b) If the count exceeds the threshold, the binding will behave like in operation
					 * mode "Server".2. CountModes "Inline" or "InlineRepeat"The initial request tries to fetch as many
					 * entries as the configured threshold, without any filters/sorters. In addition a $inlinecount is
					 * added.The binding assumes, that the threshold given by the application can be met. If this is not
					 * the case additional data requests might be needed.So the application has to have the necessary
					 * confidence that the threshold is high enough to make sure, that the data is not requested twice.a)
					 * If this request returns fewer (or just as many) entries as the threshold, the binding will behave
					 * exactly like when usingthe "Client" operation mode. Initially configured filters/sorters will be
					 * applied afterwards on the client.b) If the $inlinecount is higher than the threshold, the binding
					 * will behave like in operation mode "Server". In this case a new data requestcontaining the initially
					 * set filters/sorters will be issued.
					 */
					var Auto: any;

					/**
					 * Operations are executed on the client, all entries must be avilable to be able to do so.The initial
					 * request fetches the complete collection, filtering and sorting does not trigger further requests
					 */
					var Client: any;

					/**
					 * Operations are executed on the Odata service, by appending corresponding URL parameters ($filter,
					 * $orderby).Each change in filtering or sorting is triggering a new request to the server.
					 */
					var Server: any;
				}
				namespace AnnotationHelper {
					/**
					 * Creates a property setting (which is either a constant value or a binding infoobject) from the given
					 * parts and from the optional root formatter function.Each part can have one of the following
					 * types:<ul>  <li><code>boolean</code>, <code>number</code>, <code>undefined</code>: The part is  a
					 * constant value.  <li><code>string</code>: The part is a data binding expression with complex
					 * binding syntax (for example, as created by {@link #.format format}) and is parsed  accordingly to
					 * create either a constant value or a binding info object. Proper  backslash escaping must be used for
					 * constant values with curly braces.  <li><code>object</code>: The part is a binding info object if it
					 * has a "path" or  "parts" property, otherwise it is a constant value.</ul>If a binding info object is
					 * not the only part and has a "parts" property itself,then it must have no other properties except
					 * "formatter"; this is the case forexpression bindings and data binding expressions created by {@link
					 * #.format format}.If all parts are constant values, the resulting property setting is also a
					 * constantvalue computed by applying the root formatter function to the constant parts once.If at
					 * least one part is a binding info object, the resulting property setting isalso a binding info object
					 * and the root formatter function will be applied again andagain to the current values of all parts,
					 * no matter whether constant or variable.Note: The root formatter function should not rely on its
					 * <code>this</code> valuebecause it depends on how the function is called.Note: A single data binding
					 * expression can be given directly to{@link sap.ui.base.ManagedObject#applySettings applySettings}, no
					 * need to call thisfunction first.Example:<pre>function myRootFormatter(oValue1, oValue2, sFullName,
					 * sGreeting, iAnswer) {    return ...; //TODO compute something useful from the given
					 * values}oSupplierContext =
					 * oMetaModel.getMetaContext("/ProductSet('HT-1021')/ToSupplier");oValueContext =
					 * oMetaModel.createBindingContext("com.sap.vocabularies.UI.v1.DataPoint/Value",
					 * oSupplierContext);vPropertySetting =  sap.ui.model.odata.AnnotationHelper.createPropertySetting([
					 * sap.ui.model.odata.AnnotationHelper.format(oValueContext),    "{path : 'meta>Value', formatter :
					 * 'sap.ui.model.odata.AnnotationHelper.simplePath'}",    "{:= 'Mr. ' + ${/FirstName} + ' ' +
					 * ${/LastName}}",    "hello, world!",    42], myRootFormatter);oControl.applySettings({"someProperty"
					 * : vPropertySetting});</pre>
					 * @since 1.31.0
					 * @param vParts array of parts
					 * @param fnRootFormatter root formatter function; default: <code>Array.prototype.join(., " ")</code>
					 * in case of multiple parts, just like  {@link sap.ui.model.CompositeBinding#getExternalValue
					 * getExternalValue}
					 * @returns constant value or binding info object for a property as expected by  {@link
					 * sap.ui.base.ManagedObject#applySettings applySettings}
					 */
					function createPropertySetting(
						vParts: any[],
						fnRootFormatter?: any
					): any | any;

					/**
					 * A formatter function to be used in a complex binding inside an XML template viewin order to
					 * interpret OData V4 annotations. It knows about<ul>  <li> the "14.4 Constant Expressions" for
					 * "edm:Bool", "edm:Date",  "edm:DateTimeOffset", "edm:Decimal", "edm:Float", "edm:Guid", "edm:Int",
					 * "edm:TimeOfDay".  <li> the constant "14.4.11 Expression edm:String": This is turned into a fixed
					 * text (e.g. <code>"Width"</code>) or into a data binding expression (e.g. <code>
					 * ervices/schema/0/entityType/1/com.sap.vocabularies.UI.v1.FieldGroup#Dimensions/Data/0/Label/String}"
					 *  </code>). Data binding expressions are used in case XML template processing has  been started with
					 * the setting <code>bindTexts : true</code>. The purpose is to  reference translatable texts from
					 * OData V4 annotations, especially for XML  template processing at design time. Since 1.31.0, string
					 * constants that contain a  simple binding <code>"{@i18n>...}"</code> to the hard-coded model name
					 * "@i18n"  with arbitrary path are not turned into a fixed text, but kept as a data binding
					 * expression; this allows local annotation files to refer to a resource bundle for
					 * internationalization.  <li> the dynamic "14.5.1 Comparison and Logical Operators": These are turned
					 * into  expression bindings to perform the operations at run-time.  <li> the dynamic "14.5.3
					 * Expression edm:Apply":  <ul>    <li> "14.5.3.1.1 Function odata.concat": This is turned into a data
					 * binding    expression relative to an entity.    <li> "14.5.3.1.2 Function odata.fillUriTemplate":
					 * This is turned into an    expression binding to fill the template at run-time.    <li> "14.5.3.1.3
					 * Function odata.uriEncode": This is turned into an expression    binding to encode the parameter at
					 * run-time.    <li> Apply functions may be nested arbitrarily.  </ul>  <li> the dynamic "14.5.6
					 * Expression edm:If": This is turned into an expression  binding to be evaluated at run-time. The
					 * expression is a conditional expression  like <code>"{=condition ? expression1 :
					 * expression2}"</code>.  <li> the dynamic "14.5.10 Expression edm:Null": This is turned into a
					 * <code>null</code> value. In <code>odata.concat</code> it is ignored.  <li> the dynamic "14.5.12
					 * Expression edm:Path" and "14.5.13 Expression  edm:PropertyPath": This is turned into a data binding
					 * relative to an entity,  including type information and constraints as available from meta data,
					 * e.g. <code>"{path : 'Name', type : 'sap.ui.model.odata.type.String',  constraints :
					 * {'maxLength':'255'}}"</code>.  Depending on the used type, some additional constraints of this type
					 * are set:  <ul>    <li>Edm.DateTime: The "displayFormat" constraint is set to the value of the
					 * "sap:display-format" annotation of the referenced property.    <li>Edm.Decimal: The "precision" and
					 * "scale" constraints are set to the values    of the corresponding attributes of the referenced
					 * property.    <li>Edm.String: The "maxLength" constraint is set to the value of the    corresponding
					 * attribute of the referenced property and the "isDigitSequence"    constraint is set to the value of
					 * the    "com.sap.vocabularies.Common.v1.IsDigitSequence" annotation of the referenced    property.
					 * </ul></ul>Unsupported or incorrect values are turned into a string nevertheless, but indicatedas
					 * such. Proper escaping is used to make sure that data binding syntax is notcorrupted. An error
					 * describing the problem is logged to the console in such a case.Example:<pre>&lt;Text text="{path:
					 * 'meta>Value', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}" /></pre>
					 * @param oInterface the callback interface related to the current formatter call
					 * @param vRawValue the raw value from the meta model, which is embedded within an entity set or
					 * entity type:  <ul>  <li>if this function is used as formatter the value  is provided by the
					 * framework</li>  <li>if this function is called directly, provide the parameter only if it is
					 * already calculated</li>  <li>if the parameter is omitted, it is calculated automatically through
					 * <code>oInterface.getObject("")</code></li>  </ul>
					 * @returns the resulting string value to write into the processed XML
					 */
					function format(
						oInterface:
							| sap.ui.core.util.XMLPreprocessor.IContext
							| sap.ui.model.Context,
						vRawValue?: any
					): string;

					/**
					 * A formatter function to be used in a complex binding inside an XML template viewin order to
					 * interpret OData V4 annotations. It knows about the following dynamicexpressions:<ul><li>"14.5.2
					 * Expression edm:AnnotationPath"</li><li>"14.5.11 Expression
					 * edm:NavigationPropertyPath"</li><li>"14.5.12 Expression edm:Path"</li><li>"14.5.13 Expression
					 * edm:PropertyPath"</li></ul>It returns a binding expression for a navigation path in an OData model,
					 * starting atan entity.Currently supports navigation properties. Term casts and annotations
					 * ofnavigation properties terminate the navigation path.Examples:<pre>&lt;template:if test="{path:
					 * 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.getNavigationPath'}">
					 * &lt;form:SimpleForm binding="{path: 'facet>Target', formatter:
					 * 'sap.ui.model.odata.AnnotationHelper.getNavigationPath'}" />&lt;/template:if></pre>
					 * @param oInterface the callback interface related to the current formatter call
					 * @param vRawValue the raw value from the meta model, e.g. <code>{AnnotationPath :
					 * "ToSupplier/@com.sap.vocabularies.Communication.v1.Address"}</code> or <code>  {AnnotationPath :
					 * "@com.sap.vocabularies.UI.v1.FieldGroup#Dimensions"}</code>;  embedded within an entity set or
					 * entity type;  <ul>  <li>if this function is used as formatter the value  is provided by the
					 * framework</li>  <li>if this function is called directly, provide the parameter only if it is
					 * already calculated</li>  <li>if the parameter is omitted, it is calculated automatically through
					 * <code>oInterface.getObject("")</code></li>  </ul>
					 * @returns the resulting string value to write into the processed XML, e.g. "{ToSupplier}"  or "{}"
					 * (in case no navigation is needed); returns "" in case the navigation path  cannot be determined
					 * (this is treated as falsy in <code>template:if</code>  statements!)
					 */
					function getNavigationPath(
						oInterface:
							| sap.ui.core.util.XMLPreprocessor.IContext
							| sap.ui.model.Context,
						vRawValue?: any
					): string;

					/**
					 * Helper function for a <code>template:with</code> instruction that depending on howit is called goes
					 * to the entity set with the given name or to the one determinedby the last navigation property.
					 * Supports the following dynamic expressions:<ul><li>"14.5.2 Expression
					 * edm:AnnotationPath"</li><li>"14.5.11 Expression edm:NavigationPropertyPath"</li><li>"14.5.12
					 * Expression edm:Path"</li><li>"14.5.13 Expression edm:PropertyPath"</li></ul>Example:<pre>
					 * &lt;template:with path="facet>Target" helper="sap.ui.model.odata.AnnotationHelper.gotoEntitySet"
					 * var="entitySet"/>  &lt;template:with path="associationSetEnd>entitySet"
					 * helper="sap.ui.model.odata.AnnotationHelper.gotoEntitySet" var="entitySet"/></pre>
					 * @param oContext a context which must point to a simple string or to an annotation (or annotation
					 * property) of type <code>Edm.AnnotationPath</code>,  <code>Edm.NavigationPropertyPath</code>,
					 * <code>Edm.Path</code>, or  <code>Edm.PropertyPath</code> embedded within an entity set or entity
					 * type;  the context's model must be an {@link sap.ui.model.odata.ODataMetaModel}
					 * @returns the path to the entity set, or <code>undefined</code> if no such set is found. In  this
					 * case, a warning is logged to the console.
					 */
					function gotoEntitySet(oContext: sap.ui.model.Context): string;

					/**
					 * Helper function for a <code>template:with</code> instruction that goes to theentity type with the
					 * qualified name which <code>oContext</code> points at.Example: Assume that "entitySet" refers to an
					 * entity set within an OData meta model;the helper function is then called on the "entityType"
					 * property of that entity set(which holds the qualified name of the entity type) and in turn the path
					 * of thatentity type is assigned to the variable "entityType".<pre>  &lt;template:with
					 * path="entitySet>entityType" helper="sap.ui.model.odata.AnnotationHelper.gotoEntityType"
					 * var="entityType"></pre>
					 * @param oContext a context which must point to the qualified name of an entity type;  the context's
					 * model must be an {@link sap.ui.model.odata.ODataMetaModel}
					 * @returns the path to the entity type with the given qualified name,  or <code>undefined</code> if no
					 * such type is found. In this case, a warning is  logged to the console.
					 */
					function gotoEntityType(oContext: sap.ui.model.Context): string;

					/**
					 * Helper function for a <code>template:with</code> instruction that goes to thefunction import with
					 * the name which <code>oContext</code> points at.Example: Assume that "dataField" refers to a
					 * DataFieldForAction within anOData meta model;the helper function is then called on the "Action"
					 * property of that data field(which holds an object with the qualified name of the function import in
					 * the<code>String</code> property) and in turn the path of that function importis assigned to the
					 * variable "function".<pre>  &lt;template:with path="dataField>Action"
					 * helper="sap.ui.model.odata.AnnotationHelper.gotoFunctionImport" var="function"></pre>
					 * @since 1.29.1
					 * @param oContext a context which must point to an object with a <code>String</code> property, which
					 * holds the qualified name of the function import;  the context's model must be an {@link
					 * sap.ui.model.odata.ODataMetaModel}
					 * @returns the path to the function import with the given qualified name,  or <code>undefined</code>
					 * if no function import is found. In this case, a warning  is logged to the console.
					 */
					function gotoFunctionImport(oContext: sap.ui.model.Context): string;

					/**
					 * A formatter function to be used in a complex binding inside an XML template viewin order to
					 * interpret OData V4 annotations. It knows about the following dynamicexpressions:<ul><li>"14.5.2
					 * Expression edm:AnnotationPath"</li><li>"14.5.11 Expression
					 * edm:NavigationPropertyPath"</li><li>"14.5.12 Expression edm:Path"</li><li>"14.5.13 Expression
					 * edm:PropertyPath"</li></ul>It returns the information whether the navigation path ends with an
					 * association endwith multiplicity "*". It throws an error if the navigation path has an
					 * associationend with multiplicity "*" which is not the last one.Currently supports navigation
					 * properties. Term casts and annotations ofnavigation properties terminate the navigation
					 * path.Examples:<pre>&lt;template:if test="{path: 'facet>Target', formatter:
					 * 'sap.ui.model.odata.AnnotationHelper.isMultiple'}"></pre>
					 * @param oInterface the callback interface related to the current formatter call
					 * @param vRawValue the raw value from the meta model, e.g. <code>{AnnotationPath :
					 * "ToSupplier/@com.sap.vocabularies.Communication.v1.Address"}</code> or <code>  {AnnotationPath :
					 * "@com.sap.vocabularies.UI.v1.FieldGroup#Dimensions"}</code>;  embedded within an entity set or
					 * entity type;  <ul>  <li>if this function is used as formatter the value  is provided by the
					 * framework</li>  <li>if this function is called directly, provide the parameter only if it is
					 * already calculated</li>  <li>if the parameter is omitted, it is calculated automatically through
					 * <code>oInterface.getObject("")</code></li>  </ul>
					 * @returns <code>"true"</code> if the navigation path ends with an association end with   multiplicity
					 * "*", <code>""</code> in case the navigation path cannot be   determined, <code>"false"</code>
					 * otherwise (the latter are both treated as falsy   in <code>template:if</code> statements!)
					 */
					function isMultiple(
						oInterface:
							| sap.ui.core.util.XMLPreprocessor.IContext
							| sap.ui.model.Context,
						vRawValue?: any
					): string;

					/**
					 * Helper function for a <code>template:with</code> instruction that resolves a dynamic"14.5.2
					 * Expression edm:AnnotationPath","14.5.11 Expression edm:NavigationPropertyPath", "14.5.12 Expression
					 * edm:Path" or"14.5.13 Expression edm:PropertyPath".Currently supports navigation properties and term
					 * casts.Example:<pre>  &lt;template:with path="meta>Value"
					 * helper="sap.ui.model.odata.AnnotationHelper.resolvePath" var="target"></pre>
					 * @param oContext a context which must point to an annotation or annotation property of type
					 * <code>Edm.AnnotationPath</code>, <code>Edm.NavigationPropertyPath</code>,  <code>Edm.Path</code> or
					 * <code>Edm.PropertyPath</code>, embedded within an entity  set or entity type;  the context's model
					 * must be an {@link sap.ui.model.odata.ODataMetaModel}
					 * @returns the path to the target, or <code>undefined</code> in case the path cannot be  resolved. In
					 * this case, a warning is logged to the console.
					 */
					function resolvePath(oContext: sap.ui.model.Context): string;

					/**
					 * Formatter function that is used in a complex binding inside an XML template view.The function is
					 * used to interpret OData V4 annotations, supporting the sameannotations as {@link #.format format}
					 * but with a simplified output aimed atdesign-time templating with smart controls.In contrast to
					 * <code>format</code>, "14.5.12 Expression edm:Path" or"14.5.13 Expression edm:PropertyPath" is turned
					 * into a simple binding path withouttype or constraint information. In certain cases, a complex
					 * binding is required toallow for proper escaping of the path.Example:<pre>  &lt;sfi:SmartField
					 * value="{path: 'meta>Value', formatter: 'sap.ui.model.odata.AnnotationHelper.simplePath'}"/></pre>
					 * @param oInterface the callback interface related to the current formatter call
					 * @param vRawValue the raw value from the meta model, which is embedded within an entity set or
					 * entity type:  <ul>  <li>if this function is used as formatter the value  is provided by the
					 * framework</li>  <li>if this function is called directly, provide the parameter only if it is
					 * already calculated</li>  <li>if the parameter is omitted, it is calculated automatically through
					 * <code>oInterface.getObject("")</code></li>  </ul>
					 * @returns the resulting string value to write into the processed XML
					 */
					function simplePath(
						oInterface:
							| sap.ui.core.util.XMLPreprocessor.IContext
							| sap.ui.model.Context,
						vRawValue?: any
					): string;
				}

				/**
				 * Filter for the list binding
				 * @resource sap/ui/model/odata/Filter.js
				 */
				export class Filter extends sap.ui.base.Object {
					/**
					 * Constructor for Filter
					 * @param sPath the binding path for this filter
					 * @param aValues Array of FilterOperators and their values:
					 * @param bAND If true the values from aValues will be ANDed; otherwise ORed
					 */
					constructor(sPath: string, aValues: any[], bAND?: boolean);

					/**
					 * Converts the <code>sap.ui.model.odata.Filter</code> into a<code>sap.ui.model.Filter</code>.
					 * @returns a <code>sap.ui.model.Filter</code> object
					 */
					convert(): sap.ui.model.Filter;

					/**
					 * Returns a metadata object for class sap.ui.model.odata.Filter.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * Model implementation for oData formatBinding to V4 metadata annotations is experimental!
				 * @resource sap/ui/model/odata/ODataModel.js
				 */
				export class ODataModel extends sap.ui.model.Model {
					/**
					 * Constructor for a new ODataModel.
					 * @param sServiceUrl base uri of the service to request data from; additional URL parameters appended
					 * here will be appended to every request								can be passed with the mParameters object as well:
					 * [mParameters.serviceUrl] A serviceURl is required!
					 * @param mParameters (optional) a map which contains the following parameter properties:
					 */
					constructor(sServiceUrl: string, mParameters?: any);

					/**
					 * Adds (a) new URL(s) to the be parsed for OData annotations, which are then merged into the
					 * annotations objectwhich can be retrieved by calling the getServiceAnnotations()-method. If a
					 * $metadata url is passed the data willalso be merged into the metadata object, which can be reached
					 * by calling the getServiceMetadata() method.
					 * @param vUrl Either one URL as string or an array or URL strings
					 * @returns The Promise to load the given URL(s), resolved if all URLs have been loaded, rejected if at
					 * least one fails to load.					 If this promise resolves it returns the following parameters:
					 * annotations: The annotation object					 entitySets: An array of EntitySet objects containing the
					 * newly merged EntitySets from a $metadata requests.								 the structure is the same as in the
					 * metadata object reached by the getServiceMetadata() method.								 For non $metadata requests the
					 * array will be empty.
					 */
					addAnnotationUrl(vUrl: string | string[]): JQueryPromise<any>;

					/**
					 * Adds new xml content to be parsed for OData annotations, which are then merged into the annotations
					 * object whichcan be retrieved by calling the getServiceAnnotations()-method.
					 * @param sXMLContent The string that should be parsed as annotation XML
					 * @param bSuppressEvents Whether not to fire annotationsLoaded event on the annotationParser
					 * @returns The Promise to parse the given XML-String, resolved if parsed without errors, rejected if
					 * errors occur
					 */
					addAnnotationXML(
						sXMLContent: string,
						bSuppressEvents?: boolean
					): JQueryPromise<any>;

					/**
					 * Appends the change batch operations to the end of the batch stack. Only PUT, POST or DELETE batch
					 * operations should be included in the specified array.The operations in the array will be included in
					 * a single changeset. To embed change operations in different change sets call this method with the
					 * corresponding change operations again.If an illegal batch operation is added to the change set
					 * nothing will be performed and false will be returned.
					 * @param aChangeOperations an array of change batch operations created via
					 * <code>createBatchOperation</code> and <code>sMethod</code> = POST, PUT, MERGE or DELETE
					 */
					addBatchChangeOperations(aChangeOperations: any[]): void;

					/**
					 * Appends the read batch operations to the end of the batch stack. Only GET batch operations should be
					 * included in the specified array.If an illegal batch operation is added to the batch nothing will be
					 * performed and false will be returned.
					 * @param aReadOperations an array of read batch operations created via
					 * <code>createBatchOperation</code> and <code>sMethod</code> = GET
					 */
					addBatchReadOperations(aReadOperations: any[]): void;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'annotationsFailed' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachAnnotationsFailed(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'annotationsLoaded' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachAnnotationsLoaded(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'metadataFailed' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachMetadataFailed(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'metadataLoaded' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachMetadataLoaded(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Trigger a request to the function import odata service that was specified in the model constructor.
					 * @param sFunctionName A string containing the name of the function to call.		The name is concatenated
					 * to the sServiceUrl which was specified in the model constructor.
					 * @param mParameters Optional parameter map containing any of the following properties:
					 * @returns an object which has an <code>abort</code> function to abort the current request.
					 */
					callFunction(sFunctionName: string, mParameters?: any): any;

					/**
					 * Removes all operations in the current batch.
					 */
					clearBatch(): void;

					/**
					 * Trigger a POST request to the odata service that was specified in the model constructor. Please note
					 * that deep creates are not supportedand may not work.
					 * @param sPath A string containing the path to the collection where an entry		should be created. The
					 * path is concatenated to the sServiceUrl		which was specified in the model constructor.
					 * @param oData data of the entry that should be created.
					 * @param mParameters Optional parameter map containing any of the following properties:
					 * @returns an object which has an <code>abort</code> function to abort the current request.
					 */
					create(sPath: string, oData: any, mParameters?: any): any;

					/**
					 * Creates a single batch operation (read or change operation) which can be used in a batch request.
					 * @param sPath A string containing the path to the collection or entry where the batch operation
					 * should be performed.						The path is concatenated to the sServiceUrl which was specified in the
					 * model constructor.
					 * @param sMethod for the batch operation. Possible values are GET, PUT, MERGE, POST, DELETE
					 * @param oData optional data payload which should be created, updated, deleted in a change batch
					 * operation.
					 * @param oParameters optional parameter for additional information introduced in SAPUI5 1.9.1,
					 */
					createBatchOperation(
						sPath: string,
						sMethod: string,
						oData?: any,
						oParameters?: any
					): void;

					/**
					 * Creates a new entry object which is described by the metadata of the entity type of thespecified
					 * sPath Name. A context object is returned which can be used to bindagainst the newly created
					 * object.For each created entry a request is created and stored in a request queue.The request queue
					 * can be submitted by calling submitChanges. To delete a createdentry from the request queue call
					 * deleteCreateEntry.The optional vProperties parameter can be used as follows:  - vProperties could be
					 * an array containing the property names which should be included    in the new entry. Other
					 * properties defined in the entity type are not included.  - vProperties could be an object which
					 * includes the desired properties and the values    which should be used for the created entry.If
					 * vProperties is not specified, all properties in the entity type will be included in thecreated
					 * entry.If there are no values specified the properties will have undefined values.Please note that
					 * deep creates (including data defined by navigationproperties) are not supported
					 * @param sPath Name of the path to the collection
					 * @param vProperties An array that specifies a set of properties or the entry
					 * @returns oContext A Context object that point to the new created entry.
					 */
					createEntry(
						sPath: string,
						vProperties: any[] | any
					): sap.ui.model.Context;

					/**
					 * Creates the key from the given collection name and property map
					 * @param sCollection The name of the collection
					 * @param oKeyParameters The object containing at least all the key properties of the entity type
					 * @param bDecode Whether the URI decoding should be applied on the key
					 */
					createKey(
						sCollection: string,
						oKeyParameters: any,
						bDecode: boolean
					): void;

					/**
					 * Deletes a created entry from the request queue and the model.
					 * @param oContext The context object pointing to the created entry
					 */
					deleteCreatedEntry(oContext: sap.ui.model.Context): void;

					/**
					 */
					destroy(bSuppressInvalidate: boolean): void;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'annotationsFailed' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachAnnotationsFailed(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'annotationsLoaded' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachAnnotationsLoaded(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'metadataFailed' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachMetadataFailed(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'metadataLoaded' event of this
					 * <code>sap.ui.model.odata.ODataModel</code>.The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachMetadataLoaded(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataModel;

					/**
					 * Fire event annotationsFailed to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireAnnotationsFailed(mArguments: any): sap.ui.model.odata.ODataModel;

					/**
					 * Fire event annotationsLoaded to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireAnnotationsLoaded(mArguments: any): sap.ui.model.odata.ODataModel;

					/**
					 * Fire event metadataFailed to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireMetadataFailed(mArguments: any): sap.ui.model.odata.ODataModel;

					/**
					 * Fire event metadataLoaded to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireMetadataLoaded(mArguments: any): sap.ui.model.odata.ODataModel;

					/**
					 * Force no caching
					 * @param bForceNoCache whether to force no caching
					 */
					forceNoCache(bForceNoCache: boolean): void;

					/**
					 * Return requested data as object if the data has already been loaded and stored in the model.
					 * @param sPath A string containing the path to the data object that should be returned.
					 * @param oContext the optional context which is used with the sPath to retrieve the requested data.
					 * @param bIncludeExpandEntries This parameter should be set when a URI or custom parameterwith a
					 * $expand System Query Option was used to retrieve associated entries embedded/inline.If true then the
					 * getProperty function returns a desired property value/entry and includes the associated expand
					 * entries (if any).If false the associated/expanded entry properties are removed and not included in
					 * thedesired entry as properties at all. This is useful for performing updates on the base entry only.
					 * Note: A copy and not a reference of the entry will be returned.
					 * @returns oData Object containing the requested data if the path is valid.
					 */
					getData(
						sPath: string,
						oContext?: any,
						bIncludeExpandEntries?: boolean
					): any;

					/**
					 * Returns the default count mode for retrieving the count of collections
					 * @since 1.20
					 */
					getDefaultCountMode(): typeof sap.ui.model.odata.CountMode;

					/**
					 * Returns all headers and custom headers which are stored in the OData model.
					 * @returns the header map
					 */
					getHeaders(): any;

					/**
					 * Returns the key part from the entry URI or the given context or object
					 * @param oObject The context or object
					 * @param bDecode Whether the URI decoding should be applied on the key
					 */
					getKey(oObject: any | sap.ui.model.Context, bDecode: boolean): void;

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataModel.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns an instance of an OData meta model which offers a unified access to both OData V2meta data
					 * and V4 annotations. It uses the existing {@link sap.ui.model.odata.ODataMetadata}as a foundation and
					 * merges V4 annotations from the existing{@link sap.ui.model.odata.ODataAnnotations} directly into the
					 * corresponding model element.<b>BEWARE:</b> Access to this OData meta model will fail before the
					 * promise returned by{@link sap.ui.model.odata.ODataMetaModel#loaded loaded} has been resolved!
					 * @returns The meta model for this ODataModel
					 */
					getMetaModel(): sap.ui.model.odata.ODataMetaModel;

					/**
					 * Returns the value for the property with the given <code>sPath</code>.If the path points to a
					 * navigation property which has been loaded via $expand then the
					 * <code>bIncludeExpandEntries</code>parameter determines if the navigation property should be included
					 * in the returned value or not.Please note that this currently works for 1..1 navigation properties
					 * only.
					 * @param sPath the path/name of the property
					 * @param oContext the context if available to access the property value
					 * @param bIncludeExpandEntries This parameter should be set when a URI or custom parameterwith a
					 * $expand System Query Option was used to retrieve associated entries embedded/inline.If true then the
					 * getProperty function returns a desired property value/entry and includes the associated expand
					 * entries (if any).If false the associated/expanded entry properties are removed and not included in
					 * thedesired entry as properties at all. This is useful for performing updates on the base entry only.
					 * Note: A copy and not a reference of the entry will be returned.
					 */
					getProperty(
						sPath: string,
						oContext?: any,
						bIncludeExpandEntries?: boolean
					): any;

					/**
					 * Returns the current security token. If the token has not been requested from the server it will be
					 * requested first.
					 * @returns the CSRF security token
					 */
					getSecurityToken(): string;

					/**
					 * Return the annotation object. Please note that when using the model with bLoadMetadataAsync = true
					 * then this function might return undefined because themetadata has not been loaded yet.In this case
					 * attach to the <code>annotationsLoaded</code> event to get notified when the annotations are
					 * available and then call this function.
					 * @returns metdata object
					 */
					getServiceAnnotations(): any;

					/**
					 * Return the metadata object. Please note that when using the model with bLoadMetadataAsync = true
					 * then this function might return undefined because themetadata has not been loaded yet.In this case
					 * attach to the <code>metadataLoaded</code> event to get notified when the metadata is available and
					 * then call this function.
					 * @returns metdata object
					 */
					getServiceMetadata(): any;

					/**
					 * Checks if there exist pending changes in the model created by the setProperty method.
					 * @returns true/false
					 */
					hasPendingChanges(): boolean;

					/**
					 * Returns whether this model supports the $count on its collectionsThis method is deprecated, please
					 * use getDefaultCountMode instead.
					 */
					isCountSupported(): boolean;

					/**
					 * Trigger a GET request to the odata service that was specified in the model constructor.The data will
					 * not be stored in the model. The requested data is returned with the response.
					 * @param sPath A string containing the path to the data which should		be retrieved. The path is
					 * concatenated to the sServiceUrl		which was specified in the model constructor.
					 * @param mParameters Optional parameter map containing any of the following properties:
					 * @returns an object which has an <code>abort</code> function to abort the current request.
					 */
					read(sPath: string, mParameters?: any): any;

					/**
					 * Refresh the model.This will check all bindings for updated data and update the controls if data has
					 * been changed.
					 * @param bForceUpdate Force update of controls
					 * @param bRemoveData If set to true then the model data will be removed/cleared.					Please note that
					 * the data might not be there when calling e.g. getProperty too early before the refresh call
					 * returned.
					 */
					refresh(bForceUpdate: boolean, bRemoveData?: boolean): void;

					/**
					 * refreshes the metadata for model, e.g. in case the first request for metadata has failed
					 */
					refreshMetadata(): void;

					/**
					 * refresh XSRF token by performing a GET request against the service root URL.
					 * @param fnSuccess a callback function which is called when the data has           					 been
					 * successfully retrieved.
					 * @param fnError a callback function which is called when the request failed. The handler can have the
					 * parameter: oError which contains additional error information.
					 * @param bAsync true for asynchronous requests.
					 * @returns an object which has an <code>abort</code> function to abort the current request.
					 */
					refreshSecurityToken(
						fnSuccess?: any,
						fnError?: any,
						bAsync?: boolean
					): any;

					/**
					 * Trigger a DELETE request to the odata service that was specified in the model constructor.
					 * @param sPath A string containing the path to the data that should be removed.		The path is
					 * concatenated to the sServiceUrl which was specified in the model constructor.
					 * @param mParameters Optional, can contain the following attributes: oContext, fnSuccess, fnError,
					 * sETag:
					 * @returns an object which has an <code>abort</code> function to abort the current request.
					 */
					remove(sPath: string, mParameters?: any): any;

					/**
					 * Resets the collected changes by the setProperty method and reloads the data from the server.
					 * @param fnSuccess a callback function which is called when the data has           					 been
					 * successfully resetted. The handler can have the           	                 following parameters:
					 * oData and response.
					 * @param fnError a callback function which is called when the request failed
					 */
					resetChanges(fnSuccess: any, fnError?: any): void;

					/**
					 * Sets whether this OData service supports $count on its collections.This method is deprecated, please
					 * use setDefaultCountMode instead.
					 * @param bCountSupported undefined
					 */
					setCountSupported(bCountSupported: boolean): void;

					/**
					 * Sets the default way to retrieve the count of collections in this model.Count can be determined
					 * either by sending a separate $count request, including$inlinecount=allpages in data requests, both
					 * of them or not at all.
					 * @since 1.20
					 * @param sCountMode undefined
					 */
					setDefaultCountMode(
						sCountMode: typeof sap.ui.model.odata.CountMode
					): void;

					/**
					 * Set custom headers which are provided in a key/value map. These headers are used for requests
					 * against the OData backend.Private headers which are set in the ODataModel cannot be modified.These
					 * private headers are: accept, accept-language, x-csrf-token, MaxDataServiceVersion,
					 * DataServiceVersion.To remove these headers simply set the mCustomHeaders parameter to null. Please
					 * also note that when calling this method again all previous custom headersare removed unless they are
					 * specified again in the mCustomHeaders parameter.
					 * @param mHeaders the header name/value map.
					 */
					setHeaders(mHeaders: any): void;

					/**
					 * Sets a new value for the given property <code>sPropertyName</code> in the model without triggering a
					 * server request. This can be done by the submitChanges method. Note: Only one entry of one collection
					 * can be updated at once. Otherwise a fireRejectChange event is fired. Before updating a different
					 * entry the existing changes of the current entry have to be submitted or resetted by the
					 * corresponding methods: submitChanges, resetChanges. IMPORTANT: All pending changes are resetted in
					 * the model if the application triggeres any kind of refresh on that entry. Make sure to submit the
					 * pending changes first. To determine if there are any pending changes call the hasPendingChanges
					 * method.
					 * @param sPath path of the property to set
					 * @param oValue value to set the property to
					 * @param oContext the context which will be used to set the property
					 * @param bAsyncUpdate whether to update other bindings dependent on this property asynchronously
					 * @returns true if the value was set correctly and false if errors occurred like the entry was not
					 * found or another entry was already updated.
					 */
					setProperty(
						sPath: string,
						oValue: any,
						oContext?: any,
						bAsyncUpdate?: boolean
					): boolean;

					/**
					 * Enable/Disable automatic updates of all Bindings after change operations
					 * @since 1.16.3
					 * @param bRefreshAfterChange undefined
					 */
					setRefreshAfterChange(bRefreshAfterChange: boolean): void;

					/**
					 * Enable/Disable XCSRF-Token handling
					 * @param bTokenHandling whether to use token handling or not
					 */
					setTokenHandlingEnabled(bTokenHandling: boolean): void;

					/**
					 * Enable/Disable batch for all requests
					 * @param bUseBatch whether the requests should be encapsulated in a batch request
					 */
					setUseBatch(bUseBatch: boolean): void;

					/**
					 * Submits the collected changes in the batch which were collected via
					 * <code>addBatchReadOperations</code> or <code>addBatchChangeOperations</code>.The batch will be
					 * cleared afterwards. If the batch is empty no request will be performed and false will be
					 * returned.Note: No data will be stored in the model.
					 * @param fnSuccess a callback function which is called when the batch request has           					 been
					 * successfully sent. Note: There might have errors occured in the single batch operations. These
					 * errors can be accessed in the           aErrorResponses parameter in the callback handler.
					 * The handler can have the           	                 following parameters: oData, oResponse and
					 * aErrorResponses.
					 * @param fnError a callback function which is called when the batch request failed. The handler can
					 * have the parameter: oError which containsadditional error information.
					 * @param bAsync true for asynchronous request. Default is true.
					 * @param bImportData undefined
					 * @returns an object which has an <code>abort</code> function to abort the current request. Returns
					 * false if no request will be performed because the batch is empty.
					 */
					submitBatch(
						fnSuccess: any,
						fnError: any,
						bAsync: boolean,
						bImportData: boolean
					): any;

					/**
					 * Submits the collected changes which were collected by the setProperty method. A MERGE request will
					 * be triggered to only update the changed properties.If a URI with a $expand System Query Option was
					 * used then the expand entries will be removed from the collected changes.Changes to this entries
					 * should be done on the entry itself. So no deep updates are supported.
					 * @param fnSuccess a callback function which is called when the data has           					 been
					 * successfully updated. The handler can have the           	                 following parameters:
					 * oData and response.
					 * @param fnError a callback function which is called when the request failed. The handler can have the
					 * parameter: oError which containsadditional error information
					 * @param oParameters optional parameter for additional information introduced in SAPUI5 1.9.1
					 * @returns an object which has an <code>abort</code> function to abort the current request.
					 */
					submitChanges(fnSuccess: any, fnError?: any, oParameters?: any): any;

					/**
					 * Trigger a PUT/MERGE request to the odata service that was specified in the model constructor. Please
					 * note that deep updates are not supportedand may not work. These should be done seperate on the entry
					 * directly.
					 * @param sPath A string containing the path to the data that should be updated.		The path is
					 * concatenated to the sServiceUrl which was specified		in the model constructor.
					 * @param oData data of the entry that should be updated.
					 * @param mParameters Optional, can contain the following attributes:
					 * @returns an object which has an <code>abort</code> function to abort the current request.
					 */
					update(sPath: string, oData: any, mParameters?: any): any;

					/**
					 * update all bindings
					 * @param bForceUpdate If set to false an update  will only be done when the value of a binding
					 * changed.
					 */
					updateBindings(bForceUpdate: boolean): void;
				}
				/**
				 * Implementation to access oData metadata
				 * @resource sap/ui/model/odata/ODataMetadata.js
				 */
				export class ODataMetadata extends sap.ui.base.EventProvider {
					/**
					 * Constructor for a new ODataMetadata.
					 * @param sMetadataURI needs the correct metadata uri including $metadata
					 * @param mParams optional map of parameters.
					 */
					constructor(sMetadataURI: string, mParams?: any);

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'failed' event of this
					 * <code>sap.ui.model.odata.ODataMetadata</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachFailed(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataMetadata;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'loaded' event of this
					 * <code>sap.ui.model.odata.ODataMetadata</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachLoaded(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataMetadata;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'failed' event of this
					 * <code>sap.ui.model.odata.ODataMetadata</code>.The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachFailed(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataMetadata;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'loaded' event of this
					 * <code>sap.ui.model.odata.ODataMetadata</code>.The passed function and listener object must match the
					 * ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachLoaded(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataMetadata;

					/**
					 * Fire event failed to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireFailed(mArguments: any): sap.ui.model.odata.ODataMetadata;

					/**
					 * Fire event loaded to attached listeners.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireLoaded(): sap.ui.model.odata.ODataMetadata;

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataMetadata.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Return the metadata object
					 * @returns metdata object
					 */
					getServiceMetadata(): any;

					/**
					 * Get the the use-batch extension value if any
					 * @returns true/false
					 */
					getUseBatch(): boolean;

					/**
					 * Checks whether metadata loading has already failed
					 * @returns returns whether metadata request has failed
					 */
					isFailed(): boolean;

					/**
					 * Checks whether metadata is available
					 * @returns returns whether metadata is already loaded
					 */
					isLoaded(): boolean;

					/**
					 * Returns a promise for the loaded state of the metadata
					 * @returns returns a promise on metadata loaded state
					 */
					loaded(): JQueryPromise<any>;

					/**
					 * Refreshes the metadata creating a new request to the server.Returns a new promise which can be
					 * resolved or rejected depending on the metadata loading state.
					 * @returns returns a promise on metadata loaded state
					 */
					refresh(): JQueryPromise<any>;
				}
				/**
				 * Implementation of an OData meta model which offers a unified access to both OData V2meta data and V4
				 * annotations. It uses the existing {@link sap.ui.model.odata.ODataMetadata}as a foundation and merges
				 * V4 annotations from the existing{@link sap.ui.model.odata.ODataAnnotations} directly into the
				 * corresponding model element.Also, annotations from the "http://www.sap.com/Protocols/SAPData"
				 * namespace are lifted upfrom the <code>extensions</code> array and transformed from objects into
				 * simple propertieswith an "sap:" prefix for their name. Note that this happens in addition, thus
				 * thefollowing example shows both representations. This way, such annotations can be addressedvia a
				 * simple relative path instead of searching an array.<pre>		{			"name" : "BusinessPartnerID",
				 * "extensions" : [{				"name" : "label",				"value" : "Bus. Part. ID",				"namespace" :
				 * "http://www.sap.com/Protocols/SAPData"			}],			"sap:label" : "Bus. Part. ID"		}</pre>As of 1.29.0,
				 * the corresponding vocabulary-based annotations for the following"<a
				 * href="http://www.sap.com/Protocols/SAPData">SAP Annotations for OData Version 2.0</a>"are added, if
				 * they are not yet defined in the V4
				 * annotations:<ul><li><code>label</code>;</li><li><code>creatable</code>, <code>deletable</code>,
				 * <code>deletable-path</code>,<code>pageable</code>, <code>requires-filter</code>,
				 * <code>searchable</code>,<code>topable</code>, <code>updatable</code> and <code>updatable-path</code>
				 * on entity sets;</li><li><code>creatable</code>, <code>display-format</code> ("UpperCase" and
				 * "NonNegative"),<code>field-control</code>, <code>filterable</code>,
				 * <code>filter-restriction</code>,<code>heading</code>, <code>precision</code>,
				 * <code>quickinfo</code>,<code>required-in-filter</code>, <code>sortable</code>, <code>text</code>,
				 * <code>unit</code>,<code>updatable</code> and <code>visible</code> on
				 * properties;</li><li><code>semantics</code>; the following values are supported:<ul><li>"bday",
				 * "city", "country", "email" (including support for types, for example"email;type=home,pref"),
				 * "familyname", "givenname", "honorific", "middlename", "name","nickname", "note", "org", "org-unit",
				 * "org-role", "photo", "pobox", "region", "street","suffix", "tel" (including support for types, for
				 * example "tel;type=cell,pref"), "title" and"zip" (mapped to V4 annotation
				 * <code>com.sap.vocabularies.Communication.v1.Contact</code>);</li><li>"class", "dtend", "dtstart",
				 * "duration", "fbtype", "location", "status", "transp" and"wholeday" (mapped to V4
				 * annotation<code>com.sap.vocabularies.Communication.v1.Event</code>);</li><li>"body", "from",
				 * "received", "sender" and "subject" (mapped to V4
				 * annotation<code>com.sap.vocabularies.Communication.v1.Message</code>);</li><li>"completed", "due",
				 * "percent-complete" and "priority" (mapped to V4
				 * annotation<code>com.sap.vocabularies.Communication.v1.Task</code>).</li></ul></ul>For example:<pre>
				 * {			"name" : "BusinessPartnerID",			...			"sap:label" : "Bus. Part. ID",
				 * "com.sap.vocabularies.Common.v1.Label" : {				"String" : "Bus. Part. ID"			}		}</pre>This model is
				 * read-only and thus only supports{@link sap.ui.model.BindingMode.OneTime OneTime} binding mode. No
				 * events({@link sap.ui.model.Model#event:parseError parseError},{@link
				 * sap.ui.model.Model#event:requestCompleted requestCompleted},{@link
				 * sap.ui.model.Model#event:requestFailed requestFailed},{@link sap.ui.model.Model#event:requestSent
				 * requestSent}) are fired!Within the meta model, the objects are arranged in
				 * arrays.<code>/dataServices/schema</code>, for example, is an array of schemas where each schema
				 * hasan <code>entityType</code> property with an array of entity types, and so on.
				 * So,<code>/dataServices/schema/0/entityType/16</code> can be the path to the entity type withname
				 * "Order" in the schema with namespace "MySchema". However, these paths are not stable:If an entity
				 * type with lower index is removed from the schema, the path to<code>Order</code> changes to
				 * <code>/dataServices/schema/0/entityType/15</code>.To avoid problems with changing indexes, {@link
				 * sap.ui.model.Model#getObject getObject} and{@link sap.ui.model.Model#getProperty getProperty}
				 * support XPath-like queries for theindexes (since 1.29.1). Each index can be replaced by a query in
				 * square brackets. You can,for example, address the schema using the
				 * path<code>/dataServices/schema/[${namespace}==='MySchema']</code> or the entity
				 * <code>/dataServices/schema/[${namespace}==='MySchema']/entityType/[sap.ui.core==='Order']</code>.The
				 * syntax inside the square brackets is the same as in expression binding. The query isexecuted for
				 * each object in the array until the result is true (truthy) for the first time.This object is then
				 * chosen.<b>BEWARE:</b> Access to this OData meta model will fail before the promise returned by{@link
				 * #loaded loaded} has been resolved!
				 * @resource sap/ui/model/odata/ODataMetaModel.js
				 */
				export class ODataMetaModel extends sap.ui.model.MetaModel {
					/**
					 * DO NOT CALL this private constructor for a new <code>ODataMetaModel</code>,but rather use {@link
					 * sap.ui.model.odata.ODataModel#getMetaModel getMetaModel} instead!
					 * @param oMetadata the OData model's meta data object
					 * @param oAnnotations the OData model's annotations object
					 * @param oODataModelInterface the private interface object of the OData model which provides friend
					 * access to  selected methods
					 */
					constructor(
						oMetadata: sap.ui.model.odata.ODataMetadata,
						oAnnotations?: sap.ui.model.odata.ODataAnnotations,
						oODataModelInterface?: any
					);

					/**
					 * Returns the OData meta model context corresponding to the given OData model path.
					 * @param sPath an absolute path pointing to an entity or property, e.g.
					 * "/ProductSet(1)/ToSupplier/BusinessPartnerID"; this equals the  <a
					 * href="http://www.odata.org/documentation/odata-version-2-0/uri-conventions#ResourcePath">  resource
					 * path</a> component of a URI according to OData V2 URI conventions
					 * @returns the context for the corresponding meta data object, i.e. an entity type or its property,
					 * or <code>null</code> in case no path is given
					 */
					getMetaContext(sPath: string): sap.ui.model.Context;

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataMetaModel.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the OData association end corresponding to the given entity type's navigationproperty of
					 * given name.
					 * @param oEntityType an entity type as returned by {@link #getODataEntityType getODataEntityType}
					 * @param sName the name of a navigation property within this entity type
					 * @returns the OData association end or <code>null</code> if no such association end is found
					 */
					getODataAssociationEnd(oEntityType: any, sName: string): any;

					/**
					 * Returns the OData association <em>set</em> end corresponding to the given entity type'snavigation
					 * property of given name.
					 * @param oEntityType an entity type as returned by {@link #getODataEntityType getODataEntityType}
					 * @param sName the name of a navigation property within this entity type
					 * @returns the OData association set end or <code>null</code> if no such association set end is found
					 */
					getODataAssociationSetEnd(oEntityType: any, sName: string): any;

					/**
					 * Returns the OData complex type with the given qualified name, either as a path or as anobject, as
					 * indicated.
					 * @param sQualifiedName a qualified name, e.g. "ACME.Address"
					 * @param bAsPath determines whether the complex type is returned as a path or as an object
					 * @returns (the path to) the complex type with the given qualified name; <code>undefined</code> (for
					 * a path) or <code>null</code> (for an object) if no such type is found
					 */
					getODataComplexType(
						sQualifiedName: string,
						bAsPath?: boolean
					): any | string;

					/**
					 * Returns the OData default entity container.
					 * @param bAsPath determines whether the entity container is returned as a path or as an object
					 * @returns (the path to) the default entity container; <code>undefined</code> (for a path) or
					 * <code>null</code> (for an object) if no such container is found
					 */
					getODataEntityContainer(bAsPath: boolean): any | string;

					/**
					 * Returns the OData entity set with the given simple name from the default entity container.
					 * @param sName a simple name, e.g. "ProductSet"
					 * @param bAsPath determines whether the entity set is returned as a path or as an object
					 * @returns (the path to) the entity set with the given simple name; <code>undefined</code> (for a
					 * path) or <code>null</code> (for an object) if no such set is found
					 */
					getODataEntitySet(sName: string, bAsPath?: boolean): any | string;

					/**
					 * Returns the OData entity type with the given qualified name, either as a path or as anobject, as
					 * indicated.
					 * @param sQualifiedName a qualified name, e.g. "ACME.Product"
					 * @param bAsPath determines whether the entity type is returned as a path or as an object
					 * @returns (the path to) the entity type with the given qualified name; <code>undefined</code> (for a
					 * path) or <code>null</code> (for an object) if no such type is found
					 */
					getODataEntityType(
						sQualifiedName: string,
						bAsPath?: boolean
					): any | string;

					/**
					 * Returns the OData function import with the given simple or qualified name from the defaultentity
					 * container or the respective entity container specified in the qualified name.
					 * @since 1.29.0
					 * @param sName a simple or qualified name, e.g. "Save" or "MyService.Entities/Save"
					 * @param bAsPath determines whether the function import is returned as a path or as an object
					 * @returns (the path to) the function import with the given simple name; <code>undefined</code> (for
					 * a path) or <code>null</code> (for an object) if no such function import is found
					 */
					getODataFunctionImport(
						sName: string,
						bAsPath?: boolean
					): any | string;

					/**
					 * Returns the given OData type's property (not navigation property!) of given name.If an array is
					 * given instead of a single name, it is consumed (via<code>Array.prototype.shift</code>) piece by
					 * piece. Each element is interpreted as aproperty name of the current type, and the current type is
					 * replaced by that property's type.This is repeated until an element is encountered which cannot be
					 * resolved as a property nameof the current type anymore; in this case, the last property found is
					 * returned and<code>vName</code> contains only the remaining names, with <code>vName[0]</code> being
					 * theone which was not found.Examples:<ul><li> Get address property of business partner:<pre>var
					 * oEntityType = oMetaModel.getODataEntityType("GWSAMPLE_BASIC.BusinessPartner"),    oAddressProperty =
					 * oMetaModel.getODataProperty(oEntityType, "Address");oAddressProperty.name ===
					 * "Address";oAddressProperty.type === "GWSAMPLE_BASIC.CT_Address";</pre></li><li> Get street property
					 * of address type:<pre>var oComplexType = oMetaModel.getODataComplexType("GWSAMPLE_BASIC.CT_Address"),
					 *    oStreetProperty = oMetaModel.getODataProperty(oComplexType, "Street");oStreetProperty.name ===
					 * "Street";oStreetProperty.type === "Edm.String";</pre></li><li> Get address' street property directly
					 * from business partner:<pre>var aParts = ["Address",
					 * "Street"];oMetaModel.getODataProperty(oEntityType, aParts) === oStreetProperty;aParts.length ===
					 * 0;</pre></li><li> Trying to get address' foo property directly from business partner:<pre>aParts =
					 * ["Address", "foo"];oMetaModel.getODataProperty(oEntityType, aParts) ===
					 * oAddressProperty;aParts.length === 1;aParts[0] === "foo";</pre></li></ul>
					 * @param oType a complex type as returned by {@link #getODataComplexType getODataComplexType}, or  an
					 * entity type as returned by {@link #getODataEntityType getODataEntityType}
					 * @param vName the name of a property within this type (e.g. "Address"), or an array of such names
					 * (e.g.  <code>["Address", "Street"]</code>) in order to drill-down into complex types;  <b>BEWARE</b>
					 * that this array is modified by removing each part which is understood!
					 * @param bAsPath determines whether the property is returned as a path or as an object
					 * @returns (the path to) the last OData property found; <code>undefined</code> (for a path) or
					 * <code>null</code> (for an object) if no property was found at all
					 */
					getODataProperty(
						oType: any,
						vName: string | string[],
						bAsPath?: boolean
					): any | string;

					/**
					 * Returns a <code>Promise</code> which is resolved with a map representing
					 * the<code>com.sap.vocabularies.Common.v1.ValueList</code> annotations of the given property
					 * orrejected with an error.The key in the map provided on successful resolution is the qualifier of
					 * the annotation orthe empty string if no qualifier is defined. The value in the map is the JSON
					 * object forthe annotation. The map is empty if the property has
					 * no<code>com.sap.vocabularies.Common.v1.ValueList</code> annotations.
					 * @since 1.29.1
					 * @param oPropertyContext a model context for a structural property of an entity type or a complex
					 * type, as  returned by {@link #getMetaContext getMetaContext}
					 * @returns a Promise that gets resolved as soon as the value lists as well as the required model
					 * elements have been loaded
					 */
					getODataValueLists(
						oPropertyContext: sap.ui.model.Context
					): JQueryPromise<any>;

					/**
					 * Returns a promise which is fulfilled once the meta model data is loaded and can be used.
					 * @returns a Promise
					 */
					loaded(): JQueryPromise<any>;

					/**
					 * Refresh not supported by OData meta model!
					 */
					refresh(): void;

					/**
					 * Legacy syntax not supported by OData meta model!
					 * @param bLegacySyntax must not be true!
					 */
					setLegacySyntax(bLegacySyntax: boolean): void;
				}
				/**
				 * List binding implementation for oData format
				 * @resource sap/ui/model/odata/ODataListBinding.js
				 */
				export class ODataListBinding extends sap.ui.model.ListBinding {
					constructor(
						oModel: sap.ui.model.Model,
						sPath: string,
						oContext: sap.ui.model.Context,
						aSorters?: any[],
						aFilters?: any[],
						mParameters?: any
					);

					/**
					 * Filters the list.When using sap.ui.model.Filter the filters are first grouped according to their
					 * binding path.All filters belonging to a group are combined with OR and after that theresults of all
					 * groups are combined with AND.Usually this means, all filters applied to a single table columnare
					 * combined with OR, while filters on different table columns are combined with AND.Please note that a
					 * custom filter function is not supported.
					 * @param aFilters Array of filter objects
					 * @param sFilterType Type of the filter which should be adjusted, if it is not given, the standard
					 * behaviour applies
					 * @returns returns <code>this</code> to facilitate method chaining
					 */
					filter(
						aFilters: sap.ui.model.Filter[] | sap.ui.model.odata.Filter[],
						sFilterType: typeof sap.ui.model.FilterType
					): sap.ui.model.ListBinding;

					/**
					 * Return contexts for the list
					 * @param iStartIndex the start index of the requested contexts
					 * @param iLength the requested amount of contexts
					 * @param iThreshold undefined
					 * @returns the array of contexts for each row of the bound list
					 */
					getContexts(
						iStartIndex: number,
						iLength?: number,
						iThreshold?: number
					): sap.ui.model.Context[];

					/**
					 * Get a download URL with the specified format considering thesort/filter/custom parameters.
					 * @since 1.24
					 * @param sFormat Value for the $format Parameter
					 * @returns URL which can be used for downloading
					 */
					getDownloadUrl(sFormat: string): string;

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataListBinding.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Initialize binding. Fires a change if data is already available ($expand) or a refresh.If metadata
					 * is not yet available, do nothing, method will be called again whenmetadata is loaded.
					 */
					initialize(): void;

					/**
					 * Refreshes the binding, check whether the model data has been changed and fire change eventif this is
					 * the case. For server side models this should refetch the data from the server.To update a control,
					 * even if no data has been changed, e.g. to reset a control after failedvalidation, please use the
					 * parameter bForceUpdate.
					 * @param bForceUpdate Update the bound control even if no data has been changed
					 */
					refresh(sGroupIdOrForceUpdate: string | boolean): void;

					/**
					 * Sorts the list.
					 * @param aSorters the Sorter or an array of sorter objects object which define the sort order
					 * @returns returns <code>this</code> to facilitate method chaining
					 */
					sort(
						aSorters: sap.ui.model.Sorter[] | sap.ui.model.Sorter
					): sap.ui.model.ListBinding | void;
				}
				/**
				 * Implementation to access oData Annotations
				 * @resource sap/ui/model/odata/ODataAnnotations.js
				 */
				export class ODataAnnotations extends sap.ui.base.EventProvider {
					constructor(
						aAnnotationURI: string | string[],
						oMetadata: sap.ui.model.odata.ODataMetadata,
						mParams: any
					);

					/**
					 * Adds either one URL or an array of URLs to be loaded and parsed. The result will be merged into the
					 * annotationsdata which can be retrieved using the getAnnotations-method.
					 * @param vUrl Either one URL as string or an array of URL strings
					 * @returns The Promise to load the given URL(s), resolved if all URLs have been loaded, rejected if at
					 *        least one failed to load. The argument is an object containing the annotations object,
					 * success (an array        of sucessfully loaded URLs), fail (an array ob of failed URLs).
					 */
					addUrl(vUrl: string | string[]): JQueryPromise<any>;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'failed' event of this
					 * <code>sap.ui.model.odata.ODataAnnotations</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachFailed(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataAnnotations;

					/**
					 * Attach event-handler <code>fnFunction</code> to the 'loaded' event of this
					 * <code>sap.ui.model.odata.ODataAnnotations</code>.
					 * @param oData The object, that should be passed along with the event-object when firing the event.
					 * @param fnFunction The function to call, when the event occurs. This function will be called on the
					 *         oListener-instance (if present) or in a 'static way'.
					 * @param oListener Object on which to call the given function. If empty, the global context (window)
					 * is used.
					 * @returns <code>this</code> to allow method chaining
					 */
					attachLoaded(
						oData: any,
						fnFunction: any,
						oListener?: any
					): sap.ui.model.odata.ODataAnnotations;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'failed' event of this
					 * <code>sap.ui.model.odata.ODataAnnotations</code>.The passed function and listener object must match
					 * the ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachFailed(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataAnnotations;

					/**
					 * Detach event-handler <code>fnFunction</code> from the 'loaded' event of this
					 * <code>sap.ui.model.odata.ODataAnnotations</code>.The passed function and listener object must match
					 * the ones previously used for event registration.
					 * @param fnFunction The function to call, when the event occurs.
					 * @param oListener Object on which the given function had to be called.
					 * @returns <code>this</code> to allow method chaining
					 */
					detachLoaded(
						fnFunction: any,
						oListener: any
					): sap.ui.model.odata.ODataAnnotations;

					/**
					 * Fire event failed to attached listeners.
					 * @param mArguments the arguments to pass along with the event.
					 * @returns <code>this</code> to allow method chaining
					 */
					fireFailed(mArguments: any): sap.ui.model.odata.ODataAnnotations;

					/**
					 * Fire event loaded to attached listeners.
					 * @param mArguments Map of arguments that will be given as parameters to teh event handler
					 * @returns <code>this</code> to allow method chaining
					 */
					fireLoaded(mArguments: any): sap.ui.model.odata.ODataAnnotations;

					/**
					 * returns the raw annotation data
					 * @returns returns annotations data
					 */
					getAnnotationsData(): any;

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataAnnotations.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Checks whether annotations loading of at least one of the given URLs has already failed.Note: For
					 * asynchronous annotations {@link #attachFailed} has to be used.
					 * @returns whether annotations request has failed
					 */
					isFailed(): boolean;

					/**
					 * Checks whether annotations from at least one source are available
					 * @returns returns whether annotations is already loaded
					 */
					isLoaded(): boolean;

					/**
					 * Set custom headers which are provided in a key/value map. These headers are used for all
					 * requests.The Accept-Language header cannot be modified and is set using the Core's language
					 * setting.To remove these headers simply set the mHeaders parameter to {}. Please also note that when
					 * calling this methodagain all previous custom headers are removed unless they are specified again in
					 * the mCustomHeaders parameter.
					 * @param mHeaders the header name/value map.
					 */
					setHeaders(mHeaders: any): void;

					/**
					 * Sets an XML document
					 * @param oXMLDocument The XML document to parse for annotations
					 * @param sXMLContent The XML content as string to parse for annotations
					 * @param mOptions Additional options
					 * @returns Whether or not parsing was successful
					 */
					setXML(
						oXMLDocument: any,
						sXMLContent: string,
						mOptions?: any
					): boolean;
				}
				/**
				 * OData implementation of the sap.ui.core.message.MessageParser class. Parses message responses from
				 * the back-end.
				 * @resource sap/ui/model/odata/ODataMessageParser.js
				 */
				export abstract class ODataMessageParser extends sap.ui.core.message
					.MessageParser {
					/**
					 * OData implementation of the sap.ui.core.message.MessageParser class. Parses message responses from
					 * the back-end.
					 */
					constructor();

					/**
					 * Returns the name of the header field that is used to parse the server messages
					 * @returns The name of the header field
					 */
					getHeaderField(): string;

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataMessageParser.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Parses the given response for messages, calculates the delta and fires the messageChange-eventon the
					 * MessageProcessor if messages are found.
					 * @param oResponse The response from the server containing body and headers
					 * @param oRequest The original request that lead to this response
					 * @param mGetEntities A map containing the entities requested from the back-end as keys
					 * @param mChangeEntities A map containing the entities changed on the back-end as keys
					 */
					parse(
						oResponse?: any,
						oRequest?: any,
						mGetEntities?: any,
						mChangeEntities?: any
					): void;

					/**
					 * Sets the header field name that should be used for parsing the JSON messages
					 * @param sFieldName The name of the header field that should be used as source of the message object
					 * @returns Instance reference for method chaining
					 */
					setHeaderField(
						sFieldName: string
					): sap.ui.model.odata.ODataMessageParser;
				}
				/**
				 * The ContextBinding is a specific binding for a setting context for the model
				 * @resource sap/ui/model/odata/ODataContextBinding.js
				 */
				export abstract class ODataContextBinding extends sap.ui.model
					.ContextBinding {
					/**
					 * Constructor for odata.ODataContextBinding
					 * @param oModel undefined
					 * @param sPath undefined
					 * @param oContext undefined
					 * @param mParameters undefined
					 */
					constructor(
						oModel: sap.ui.model.Model,
						sPath: string,
						oContext: any,
						mParameters?: any
					);

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataContextBinding.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;
				}
				/**
				 * Property binding implementation for oData format
				 * @resource sap/ui/model/odata/ODataPropertyBinding.js
				 */
				export class ODataPropertyBinding extends sap.ui.model.PropertyBinding {
					constructor(
						oModel: sap.ui.model.Model,
						sPath: string,
						oContext: sap.ui.model.Context,
						mParameters?: any
					);

					/**
					 * Returns a metadata object for class sap.ui.model.odata.ODataPropertyBinding.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the current value of the bound target
					 * @returns the current value of the bound target
					 */
					getValue(): any;

					/**
					 * Initialize the binding. The message should be called when creating a binding.If metadata is not yet
					 * available, do nothing, method will be called again whenmetadata is loaded.
					 */
					initialize(): void;
				}
			}
			namespace message {
				/**
				 * Model implementation for Messages	 *
				 * @resource sap/ui/model/message/MessageModel.js
				 */
				export class MessageModel extends sap.ui.model.ClientModel {
					/**
					 * Constructor for a new JSONModel.
					 * @param oMessageManager The MessageManager instance
					 */
					constructor(oMessageManager: sap.ui.core.message.MessageManager);

					/**
					 * Returns a metadata object for class sap.ui.model.message.MessageModel.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the value for the property with the given <code>sPropertyName</code>
					 * @param sPath the path to the property
					 * @param oContext the context which will be used to retrieve the property
					 */
					getProperty(sPath: string, oContext?: any): any;

					/**
					 * Sets the message data to the model.
					 * @param oData the data to set on the model
					 */
					setData(oData: any): void;

					/**
					 * Sets a new value for the given property <code>sPropertyName</code> in the model.If the model value
					 * changed all interested parties are informed.
					 * @param sPath path of the property to set
					 * @param oValue value to set the property to
					 * @param oContext the context which will be used to set the property
					 */
					setProperty(sPath: string, oValue: any, oContext?: any): void;
				}
			}
			namespace control {}
			namespace resource {
				namespace ResourceModel {
					interface Properties {
						bundleUrl?: string;
						bundleName?: string;
						bundleLocal?: string;
						bundle?: sap.base.i18n.ResourceBundle;
						async?: boolean;
						defaultBindingMode?: sap.ui.model.BindingMode;
						enhanceWith?: sap.base.i18n.ResourceBundle;
					}
				}
				/**
				 * Model implementation for resource bundles
				 * @resource sap/ui/model/resource/ResourceModel.js
				 */
				export class ResourceModel extends sap.ui.model.Model {
					/**
					 * Constructor for a new ResourceModel.
					 * @param oData parameters used to initialize the ResourceModel; at least either bundleUrl or
					 * bundleName must be set on this object; if both are set, bundleName wins
					 */
					constructor(oData: any);

					/**
					 * Enhances the resource model with a custom resource bundle. The resource modelcan be enhanced with
					 * multiple resource bundles. The last enhanced resourcebundle wins against the previous ones and the
					 * original ones. This functioncan be called several times.
					 * @since 1.16.1
					 * @param oData parameters used to initialize the ResourceModel; at least either bundleUrl or
					 * bundleName must be set on this object; if both are set, bundleName wins - or an instance of an
					 * existing {@link jQuery.sap.util.ResourceBundle}
					 * @returns Promise in async case (async ResourceModel) which is resolved when the the enhancement is
					 * finished
					 */
					enhance(oData: sap.base.i18n.ResourceBundle | { bundleUrl?: string; bundleName?: string; bundleLocale?: string }): JQueryPromise<any>;

					/**
					 * Returns a metadata object for class sap.ui.model.resource.ResourceModel.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Returns the value for the property with the given <code>sPropertyName</code>
					 * @param sPath the path to the property
					 */
					getProperty(sPath: string): any;

					/**
					 * Returns the resource bundle of this model
					 * @returns loaded resource bundle or ECMA Script 6 Promise in asynchronous case
					 */
					getResourceBundle(): sap.base.i18n.ResourceBundle | JQueryPromise<sap.base.i18n.ResourceBundle>;
				}
			}
			namespace analytics {
				/**
				 * If called on an instance of an (v1/v2) ODataModel it will enrich it with analytics capabilities.
				 */
				function ODataModelAdapter(): void;
				namespace odata4analytics {
					/**
					 * Specify which components of the dimension shall be included in the valueset.
					 * @param bIncludeText Indicator whether or not to include the dimension text (if           available)
					 * in the value set.
					 * @param bIncludeAttributes Indicator whether or not to include all dimension attributes           (if
					 * available) in the value set.
					 */
					function includeDimensionTextAttributes(
						bIncludeText: any,
						bIncludeAttributes: any
					): void;
					namespace Model {
						/**
						 * Handle to an OData model by the URI pointing to it.
						 * @resource sap/ui/model/analytics/odata4analytics.js
						 */
						export class ReferenceByURI {
							/**
							 * Create a reference to an OData model by the URI of the related OData service.
							 * @param sURI holding the URI.
							 */
							constructor(sURI: string);
						}
						/**
						 * Handle to an already instantiated SAP UI5 OData model.
						 * @resource sap/ui/model/analytics/odata4analytics.js
						 */
						export class ReferenceByModel {
							/**
							 * Create a reference to an OData model already loaded elsewhere with the helpof SAP UI5.
							 * @param oModel holding the OData model.
							 */
							constructor(oModel: any);
						}
						/**
						 * Handle to an already instantiated SAP UI5 OData model.
						 * @resource sap/ui/model/analytics/odata4analytics.js
						 */
						export class ReferenceWithWorkaround {
							/**
							 * Create a reference to an OData model having certain workarounds activated. Aworkaround is an
							 * implementation that changes the standard behavior of the APIto overcome some gap or limitation in
							 * the OData provider. The workaroundimplementation can be conditionally activated by passing the
							 * identifier inthe contructor.Known workaround identifiers are:<li>"CreateLabelsFromTechnicalNames" -
							 * If a property has no label text, itgets generated from the property
							 * name.</li><li>"IdentifyTextPropertiesByName" -If a dimension property has no text andanother
							 * property with the same name and an appended "Name", "Text" etc.exists, they are linked via
							 * annotation.</li>
							 * @param oModel holding a reference to the OData model, obtained           by
							 * odata4analytics.Model.ReferenceByModel or by           sap.odata4analytics.Model.ReferenceByURI.
							 * @param aWorkaroundID listing all workarounds to be applied.
							 */
							constructor(oModel: any, aWorkaroundID: string[]);
						}
					}
					namespace SortOrder {}
					/**
					 * Representation of an OData model with analytical annotations defined       by OData4SAP.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class Model {
						/**
						 * Create a representation of the analytical semantics of OData service metadata
						 * @param oModelReference An instance of ReferenceByURI, ReferenceByModel or
						 * ReferenceWithWorkaround for locating the OData service.
						 * @param mParameter Additional parameters for controlling the model construction. Currently supported
						 * are:           <li> sAnnotationJSONDoc - A JSON document providing extra annotations to the elements
						 * of the                structure of the given service           </li>           <li> modelVersion -
						 * Parameter to define which ODataModel version should be used, in you use
						 * 'odata4analytics.Model.ReferenceByURI': 1 (default), 2                see also:
						 * AnalyticalVersionInfo constants           </li>
						 */
						constructor(oModelReference: any, mParameter?: any);

						/**
						 * Find analytic query result by name
						 * @param sName Fully qualified name of query result entity set
						 * @returns The query result object         with this name or null if it does not exist
						 */
						findQueryResultByName(
							sName: string
						): sap.ui.model.analytics.odata4analytics.QueryResult;

						/**
						 * Get the names of all query results (entity sets) offered by the model
						 * @returns List of all query result names
						 */
						getAllQueryResultNames(): string[];

						/**
						 * Get all query results offered by the model
						 * @returns An object with individual JS properties for each query         result included in the
						 * model. The JS object properties all are         objects of type odata4analytics.QueryResult. The
						 * names         of the JS object properties are given by the entity set names         representing the
						 * query results.
						 */
						getAllQueryResults(): any;

						/**
						 * Get underlying OData model provided by SAP UI5
						 * @returns The SAP UI5 representation of the model.
						 */
						getODataModel(): any;
					}
					/**
					 * Representation of a property annotated with       sap:aggregation-role="measure".
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class Measure {
						/**
						 * Create a representation of a measure provided by an analytic query. Do not create your own
						 * instances.
						 * @param oQueryResult The query result containing this measure
						 * @param oProperty The DataJS object object representing the measure
						 */
						constructor(
							oQueryResult: sap.ui.model.analytics.odata4analytics.QueryResult,
							oProperty: any
						);

						/**
						 * Get the text property associated to the raw value property holding theformatted value related to
						 * this measure
						 * @returns The DataJS object representing the property holding the         formatted value text of
						 * this measure or null if this measure         does not have a unit
						 */
						getFormattedValueProperty(): any;

						/**
						 * Get label
						 * @returns The (possibly language-dependent) label text for this         measure
						 */
						getLabelText(): string;

						/**
						 * Get the name of the measure
						 * @returns The name of the measure, which is identical to the name         of the measure raw value
						 * property in the entity type
						 */
						getName(): string;

						/**
						 * Get the raw value property
						 * @returns The DataJS object representing the property holding the         raw value of this measure
						 */
						getRawValueProperty(): any;

						/**
						 * Get the unit property related to this measure
						 * @returns The DataJS object representing the unit property or         null if this measure does not
						 * have a unit
						 */
						getUnitProperty(): any;

						/**
						 * Get indicator whether or not the measure is updatable
						 * @returns True iff the measure is updatable
						 */
						isUpdatable(): boolean;
					}
					/**
					 * Representation of a property annotated with sap:parameter.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class Parameter {
						/**
						 * Create a representation of a single parameter contained in a parameterization. Do not create your
						 * own instances.
						 * @param oParameterization The parameterization containing this parameter
						 * @param oProperty The DataJS object object representing the text property
						 */
						constructor(
							oParameterization: sap.ui.model.analytics.odata4analytics.Parameterization,
							oProperty: any
						);

						/**
						 * Get parameterization containing this parameter
						 * @returns The parameterization        object
						 */
						getContainingParameterization(): sap.ui.model.analytics.odata4analytics.Parameterization;

						/**
						 * Get label
						 * @returns The (possibly language-dependent) label text for this         parameter
						 */
						getLabelText(): string;

						/**
						 * Get the name of the parameter
						 * @returns The name of the parameter, which is identical with the         name of the property
						 * representing the parameter in the         parameterization entity type
						 */
						getName(): string;

						/**
						 * Get property for the parameter representing the peer boundary of the sameinterval
						 * @returns The parameter representing         the peer boundary of the same interval. This means that
						 * if         *this* parameter is a lower boundary, the returned object
						 */
						getPeerIntervalBoundaryParameter(): sap.ui.model.analytics.odata4analytics.Parameter;

						/**
						 * Get property
						 */
						getProperty(): any;

						/**
						 * Get text property related to this parameter
						 * @returns The DataJS object representing the text property or         null if it does not exist
						 */
						getTextProperty(): any;

						/**
						 * Get the URI to locate the entity set holding the value set, if it isavailable.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 */
						getURIToValueEntitySet(sServiceRootURI: string): void;

						/**
						 * Get indicator if the parameter represents an interval boundary
						 * @returns True iff it represents an interval boundary, otherwise         false
						 */
						isIntervalBoundary(): boolean;

						/**
						 * Get indicator if the parameter represents the lower boundary of aninterval
						 * @returns True iff it represents the lower boundary of an         interval, otherwise false
						 */
						isLowerIntervalBoundary(): boolean;

						/**
						 * Get indicator whether or not the parameter is optional
						 * @returns True iff the parameter is optional
						 */
						isOptional(): boolean;

						/**
						 * Get indicator if a set of values is available for this parameter.Typically, this is true for
						 * parameters with a finite set of known valuessuch as products, business partners in different roles,
						 * organizationunits, and false for integer or date parameters
						 * @returns True iff a value set is available, otherwise false
						 */
						isValueSetAvailable(): boolean;
					}
					/**
					 * Representation of a property annotated with       sap:aggregation-role="dimension".
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class Dimension {
						/**
						 * Create a representation of a dimension provided by an analytic query. Do not create your own
						 * instances.
						 * @param oQueryResult The query result containing this dimension
						 * @param oProperty The DataJS object object representing the dimension
						 */
						constructor(
							oQueryResult: sap.ui.model.analytics.odata4analytics.QueryResult,
							oProperty: any
						);

						/**
						 * Find attribute by name
						 * @param sName Attribute name
						 * @returns The dimension attribute         object with this name or null if it does not exist
						 */
						findAttributeByName(
							sName: string
						): sap.ui.model.analytics.odata4analytics.Dimension;

						/**
						 * Get the names of all attributes included in this dimension
						 * @returns List of all attribute names
						 */
						getAllAttributeNames(): string[];

						/**
						 * Get all attributes of this dimension
						 * @returns An object with individual JS properties for each         attribute of this dimension. The
						 * JS object properties all are         objects of type odata4analytics.DimensionAttribute. The
						 * names of the JS object properties are given by the OData entity         type property names
						 * representing the dimension attribute keys.
						 */
						getAllAttributes(): any;

						/**
						 * Get query result containing this dimension
						 * @returns The query result object
						 */
						getContainingQueryResult(): sap.ui.model.analytics.odata4analytics.QueryResult;

						/**
						 * Get associated hierarchy
						 * @returns The hierarchy object or null if there is none. It can         be an instance of class
						 *   odata4analytics.RecursiveHierarchy (TODO later: or a         leveled hierarchy). Use methods
						 * isLeveledHierarchy and         isRecursiveHierarchy to determine object type.
						 */
						getHierarchy(): any;

						/**
						 * Get the key property
						 * @returns The DataJS object representing the property for the         dimension key
						 */
						getKeyProperty(): any;

						/**
						 * Get label
						 * @returns The (possibly language-dependent) label text for this         dimension
						 */
						getLabelText(): string;

						/**
						 * Get master data entity set for this dimension
						 * @returns The master data entity set        for this dimension, or null, if it does not exist
						 */
						getMasterDataEntitySet(): sap.ui.model.analytics.odata4analytics.EntitySet;

						/**
						 * Get the name of the dimension
						 * @returns The name of this dimension, which is identical to the         name of the dimension key
						 * property in the entity type
						 */
						getName(): string;

						/**
						 * Get super-ordinate dimension
						 * @returns The super-ordinate dimension or null if there is none
						 */
						getSuperOrdinateDimension(): any;

						/**
						 * Get text property related to this dimension
						 * @returns The DataJS object representing the text property or         null if it does not exist
						 */
						getTextProperty(): any;

						/**
						 * Get indicator whether or not master data is available for this dimension
						 * @returns True iff master data is available
						 */
						hasMasterData(): boolean;
					}
					/**
					 * Representation of a OData entity set.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class EntitySet {
						/**
						 * Create a representation of an OData entity set in the context of an analyticquery. Do not create
						 * your own instances.
						 * @param oModel DataJS object for the OData model containing this entity           set
						 * @param oSchema DataJS object for the schema surrounding the container of           this entity set
						 * @param oContainer DataJS object for the container holding this entity set
						 * @param oEntitySet DataJS object for the entity set
						 * @param oEntityType DataJS object for the entity type
						 */
						constructor(
							oModel: any,
							oSchema: any,
							oContainer: any,
							oEntitySet: any,
							oEntityType: any
						);

						/**
						 * Get entity type used for this entity set
						 * @returns The DataJS object representing the entity type
						 */
						getEntityType(): any;

						/**
						 * Get the fully qualified name for this entity type
						 * @returns The fully qualified name
						 */
						getQName(): string;

						/**
						 * Get full description for this entity set
						 * @returns The DataJS object representing the entity set
						 */
						getSetDescription(): any;

						/**
						 * Get names of properties in this entity set that can be updated
						 * @returns An object with individual JS properties for each         updatable property. For testing
						 * whether propertyName is the name         of an updatable property, use
						 * <code>getUpdatablePropertyNameSet()[propertyName]</code>. The         included JS object properties
						 * are all set to true.
						 */
						getUpdatablePropertyNameSet(): any;
					}
					/**
					 * Representation of a OData entity type.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class EntityType {
						/**
						 * Create a representation of an OData entity type in the context of an analyticquery. Do not create
						 * your own instances.
						 * @param oModel DataJS object for the OData model containing this entity           type
						 * @param oSchema DataJS object for the schema containing this entity type
						 * @param oEntityType DataJS object for the entity type
						 */
						constructor(oModel: any, oSchema: any, oEntityType: any);

						/**
						 * Find property by name
						 * @param sPropertyName Property name
						 * @returns The DataJS object representing the property or null if         it does not exist
						 */
						findPropertyByName(sPropertyName: string): any;

						/**
						 * Get the names of all properties with an associated hierarchy
						 * @returns List of all property names
						 */
						getAllHierarchyPropertyNames(): string[];

						/**
						 * Get names of properties that can be filtered, that is they can be used in$filter expressions
						 * @returns Array with names of properties that can be         filtered.
						 */
						getFilterablePropertyNames(): string[];

						/**
						 * Get heading of the property with specified name (identified by propertymetadata annotation
						 * sap:heading)
						 * @param sPropertyName Property name
						 * @returns The heading string
						 */
						getHeadingOfProperty(sPropertyName: string): string;

						/**
						 * Get the hierarchy associated to a given property Based on the currentspecification, hierarchies are
						 * always recursive. TODO: Extend behaviorwhen leveled hierarchies get in scope
						 * @param sName Parameter name
						 * @returns The hierarchy         object or null if it does not exist
						 */
						getHierarchy(
							sName: string
						): sap.ui.model.analytics.odata4analytics.RecursiveHierarchy;

						/**
						 * Get key properties of this type
						 * @returns The list of key property names
						 */
						getKeyProperties(): string[];

						/**
						 * Get label of the property with specified name (identified by propertymetadata annotation sap:label)
						 * @param sPropertyName Property name
						 * @returns The label string
						 */
						getLabelOfProperty(sPropertyName: string): string;

						/**
						 * Get all properties
						 * @returns Object with (JavaScript) properties, one for each (OData        entity type) property.
						 * These (JavaScript) properties hold the        DataJS object representing the property
						 */
						getProperties(): any;

						/**
						 * Get properties for which filter restrictions have been specified
						 * @returns Object with (JavaScript) properties, one for each         (OData entity type) property. The
						 * property value is from         odata4analytics.EntityType.propertyFilterRestriction and
						 * indicates the filter restriction for this property.
						 */
						getPropertiesWithFilterRestrictions(): any;

						/**
						 * Get the fully qualified name for this entity type
						 * @returns The fully qualified name
						 */
						getQName(): string;

						/**
						 * Get quick info of the property with specified name (identified by propertymetadata annotation
						 * sap:quickinfo)
						 * @param sPropertyName Property name
						 * @returns The quick info string
						 */
						getQuickInfoOfProperty(sPropertyName: string): string;

						/**
						 * Get names of properties that must be filtered, that is they must appearin every $filter expression
						 * @returns Array with names of properties that must be         filtered.
						 */
						getRequiredFilterPropertyNames(): string[];

						/**
						 * Get names of properties that can be sorted, that is they can be used in$orderby expressions
						 * @returns Array with names of properties that can be         sorted.
						 */
						getSortablePropertyNames(): string[];

						/**
						 * Get the super-ordinate property related to the property with specifiedname (identified by property
						 * metadata annotation sap:super-ordinate)
						 * @param sPropertyName Property name
						 * @returns The DataJS object representing the super-ordinate         property or null if it does not
						 * exist
						 */
						getSuperOrdinatePropertyOfProperty(sPropertyName: string): any;

						/**
						 * Get the text property related to the property with specified name(identified by property metadata
						 * annotation sap:text)
						 * @param sPropertyName Property name
						 * @returns The DataJS object representing the text property or         null if it does not exist
						 */
						getTextPropertyOfProperty(sPropertyName: string): any;

						/**
						 * Get full description for this entity type
						 * @returns The DataJS object representing the entity type
						 */
						getTypeDescription(): any;
					}
					/**
					 * Representation of an entity type annotated with       sap:semantics="aggregate".
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class QueryResult {
						/**
						 * Create a representation of an analytic query. Do not create your own instances.
						 * @param oModel The analytical model containing this query result entity           set
						 * @param oEntityType The OData entity type for this query
						 * @param oEntitySet The OData entity set for this query offered by the           OData service
						 * @param oParameterization The parameterization of this query, if any
						 */
						constructor(
							oModel: sap.ui.model.analytics.odata4analytics.Model,
							oEntityType: sap.ui.model.analytics.odata4analytics.EntityType,
							oEntitySet: sap.ui.model.analytics.odata4analytics.EntitySet,
							oParameterization: sap.ui.model.analytics.odata4analytics.Parameterization
						);

						/**
						 * Find dimension by name
						 * @param sName Dimension name
						 * @returns The dimension object with         this name or null if it does not exist
						 */
						findDimensionByName(
							sName: string
						): sap.ui.model.analytics.odata4analytics.Dimension;

						/**
						 * Find dimension by property name
						 * @param sName Property name
						 * @returns The dimension object to         which the given property name is related, because the
						 * property         holds the dimension key, its text, or is an attribute of this         dimension. If
						 * no such dimension exists, null is returned.
						 */
						findDimensionByPropertyName(
							sName: string
						): sap.ui.model.analytics.odata4analytics.Dimension;

						/**
						 * Find measure by name
						 * @param sName Measure name
						 * @returns The measure object with this         name or null if it does not exist
						 */
						findMeasureByName(
							sName: string
						): sap.ui.model.analytics.odata4analytics.Measure;

						/**
						 * Find measure by property name
						 * @param sName Property name
						 * @returns The measure object to which         the given property name is related, because the
						 * property holds         the raw measure value or its formatted value. If no such measure
						 * exists, null is returned.
						 */
						findMeasureByPropertyName(
							sName: string
						): sap.ui.model.analytics.odata4analytics.Measure;

						/**
						 * Get the names of all dimensions included in the query result
						 * @returns List of all dimension names
						 */
						getAllDimensionNames(): string[];

						/**
						 * Get all dimensions included in this query result
						 * @returns An object with individual JS properties for each         dimension included in the query
						 * result. The JS object properties         all are objects of type odata4analytics.Dimension. The
						 *    names of the JS object properties are given by the OData entity         type property names
						 * representing the dimension keys.
						 */
						getAllDimensions(): any;

						/**
						 * Get the names of all measures included in the query result
						 * @returns List of all measure names
						 */
						getAllMeasureNames(): string[];

						/**
						 * Get all measures included in this query result
						 * @returns An object with individual JS properties for each         measure included in the query
						 * result. The JS object properties         all are objects of type odata4analytics.Measure. The
						 *  names of the JS object properties are given by the OData entity         type property names
						 * representing the measure raw values.
						 */
						getAllMeasures(): any;

						/**
						 * Get the entity set representing this query result in the OData model
						 * @returns The OData entity set         representing this query result
						 */
						getEntitySet(): sap.ui.model.analytics.odata4analytics.EntitySet;

						/**
						 * Get the entity type defining the type of this query result in the ODatamodel
						 * @returns The OData entity type for         this query result
						 */
						getEntityType(): sap.ui.model.analytics.odata4analytics.EntityType;

						/**
						 * Get the analytical model containing the entity set for this query result
						 * @returns The analytical representation of the OData model
						 */
						getModel(): any;

						/**
						 * Get the name of the query result
						 * @returns The fully qualified name of the query result, which is         identical with the name of
						 * the entity set representing the query         result in the OData service
						 */
						getName(): string;

						/**
						 * Get the parameterization of this query result
						 * @returns The object for the         parameterization or null if the query result is not
						 * parameterized
						 */
						getParameterization(): sap.ui.model.analytics.odata4analytics.Parameterization;

						/**
						 * Get property holding the totaled property list
						 * @returns The DataJS object representing this property
						 */
						getTotaledPropertiesListProperty(): any;
					}
					/**
					 * Representation of a $orderby expression for an OData entity type.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class SortExpression {
						/**
						 * Create a representation of an order by expression for a given entity type. Itcan be rendered as
						 * value for the $orderby system query option.
						 * @param oModel DataJS object for the OData model containing this entity           type
						 * @param oSchema DataJS object for the schema containing this entity type
						 * @param oEntityType object for the entity type
						 */
						constructor(
							oModel: any,
							oSchema: any,
							oEntityType: sap.ui.model.analytics.odata4analytics.EntityType
						);

						/**
						 * Add a condition to the order by expression. It replaces any previously specifiedsort order for the
						 * property.
						 * @param sPropertyName The name of the property bound in the condition
						 * @param sSortOrder sorting order used for the condition
						 * @returns This object for method         chaining
						 */
						addSorter(
							sPropertyName: string,
							sSortOrder: any
						): sap.ui.model.analytics.odata4analytics.SortExpression;

						/**
						 * Clear expression from any sort conditions that may have been setpreviously
						 */
						clear(): void;

						/**
						 * Get description for this entity type
						 * @returns The object representing the         entity type
						 */
						getEntityType(): sap.ui.model.analytics.odata4analytics.EntityType;

						/**
						 * Get the first SAPUI5 Sorter object.
						 * @returns first sorter object or null if empty
						 */
						getExpressionAsUI5Sorter(): sap.ui.model.Sorter;

						/**
						 * Get an array of SAPUI5 Sorter objects corresponding to this expression.
						 * @returns List of sorter objects representing         this expression
						 */
						getExpressionsAsUI5SorterArray(): sap.ui.model.Sorter[];

						/**
						 * Get the value for the OData system query option $orderby corresponding tothis expression.
						 * @param oSelectedPropertyNames Object with properties requested for $select
						 * @returns The $orderby value for the sort expressions
						 */
						getURIOrderByOptionValue(oSelectedPropertyNames: any): string;

						/**
						 * Removes the order by expression for the given property name from the listof order by expression. If
						 * no order by expression with this property nameexists the method does nothing.
						 * @param sPropertyName The name of the property to be removed from the           condition
						 */
						removeSorter(sPropertyName: string): void;
					}
					/**
					 * Representation of a $filter expression for an OData entity type.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class FilterExpression {
						/**
						 * Create a representation of a filter expression for a given entity type. It can be rendered as value
						 * for the $filter systemquery option.
						 * @param oModel DataJS object for the OData model containing this entity type
						 * @param oSchema DataJS object for the schema containing this entity type
						 * @param oEntityType object for the entity type
						 */
						constructor(
							oModel: any,
							oSchema: any,
							oEntityType: sap.ui.model.analytics.odata4analytics.EntityType
						);

						/**
						 * Add a condition to the filter expression.Multiple conditions on the same property are combined with
						 * a logical OR first, and in a second step conditions fordifferent properties are combined with a
						 * logical AND.
						 * @param sPropertyName The name of the property bound in the condition
						 * @param sOperator operator used for the condition
						 * @param oValue value to be used for this condition
						 * @param oValue2 (optional) as second value to be used for this condition
						 * @returns This object for method chaining
						 */
						addCondition(
							sPropertyName: string,
							sOperator: sap.ui.model.FilterOperator,
							oValue: any,
							oValue2: any
						): sap.ui.model.analytics.odata4analytics.FilterExpression;

						/**
						 * Add a set condition to the filter expression.A set condition tests if the value of a property is
						 * included in a set of given values. It is a convenience method forthis particular use case
						 * eliminating the need for multiple API calls.
						 * @param sPropertyName The name of the property bound in the condition
						 * @param aValues values defining the set
						 * @returns This object for method chaining
						 */
						addSetCondition(
							sPropertyName: string,
							aValues: any[]
						): sap.ui.model.analytics.odata4analytics.FilterExpression;

						/**
						 * Add an array of UI5 filter conditions to the filter expression.The UI5 filter condition is combined
						 * with the other given conditions using a logical AND. This methodis particularly useful for passing
						 * forward already created UI5 filter arrays.
						 * @param aUI5Filter Array of UI5 filter objects
						 * @returns This object for method chaining
						 */
						addUI5FilterConditions(
							aUI5Filter: sap.ui.model.Filter[]
						): sap.ui.model.analytics.odata4analytics.FilterExpression;

						/**
						 * Check if request is compliant with basic filter constraints expressed in metadata:(a) all properties
						 * required in the filter expression have been referenced (b) the single-value filter restrictions have
						 * been obeyed
						 * @returns The value true. In case the expression violates some of the rules, an exception with some
						 * explanatory         message is thrown
						 */
						checkValidity(): boolean;

						/**
						 * Clear expression from any conditions that may have been set previously
						 */
						clear(): void;

						/**
						 * Get description for this entity type
						 * @returns The object representing the entity type
						 */
						getEntityType(): sap.ui.model.analytics.odata4analytics.EntityType;

						/**
						 * Get an array of SAPUI5 Filter objects corresponding to this expression.
						 * @returns List of filter objects representing this expression
						 */
						getExpressionAsUI5FilterArray(): sap.ui.model.Filter[];

						/**
						 * Get the value for the OData system query option $filter corresponding to this expression.
						 * @returns The $filter value for the filter expression
						 */
						getURIFilterOptionValue(): string;

						/**
						 * Remove all conditions for some property from the filter expression.All previously set conditions for
						 * some property are removed from the filter expression.
						 * @param sPropertyName The name of the property bound in the condition
						 * @returns This object for method chaining
						 */
						removeConditions(
							sPropertyName: string
						): sap.ui.model.analytics.odata4analytics.FilterExpression;
					}
					/**
					 * Representation of an entity type annotated with       sap:semantics="parameters".
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class Parameterization {
						/**
						 * Create a representation of a parameterization for an analytic query. Do not create your own
						 * instances.
						 * @param oEntityType The OData entity type for this parameterization
						 * @param oEntitySet The OData entity set for this parameterization offered           by the OData
						 * service
						 */
						constructor(
							oEntityType: sap.ui.model.analytics.odata4analytics.EntityType,
							oEntitySet: sap.ui.model.analytics.odata4analytics.EntitySet
						);

						/**
						 * Find parameter by name
						 * @param sName Parameter name
						 * @returns The parameter object with         this name or null if it does not exist
						 */
						findParameterByName(
							sName: string
						): sap.ui.model.analytics.odata4analytics.Parameter;

						/**
						 * Get the names of all parameters part of the parameterization
						 * @returns List of all parameter names
						 */
						getAllParameterNames(): string[];

						/**
						 * Get all parameters included in this parameterization
						 * @returns An object with individual JS properties for each         parameter included in the query
						 * result. The JS object properties         all are objects of type odata4analytics.Parameter. The
						 *    names of the JS object properties are given by the OData entity         type property names
						 * representing the parameter keys.
						 */
						getAllParameters(): any;

						/**
						 * Get the entity set representing this query result in the OData model
						 * @returns The OData entity set         representing this query result
						 */
						getEntitySet(): sap.ui.model.analytics.odata4analytics.EntitySet;

						/**
						 * Get the entity type defining the type of this query result in the ODatamodel
						 * @returns The OData entity type for         this query result
						 */
						getEntityType(): sap.ui.model.analytics.odata4analytics.EntityType;

						/**
						 * Get the name of the parameter
						 * @returns The name of the parameterization, which is identical         with the name of the entity
						 * set representing the         parameterization in the OData service
						 */
						getName(): string;

						/**
						 * Get navigation property to query result
						 * @returns The parameter object with         this name or null if it does not exist
						 */
						getNavigationPropertyToQueryResult(): sap.ui.model.analytics.odata4analytics.QueryResult;
					}
					/**
					 * Representation of a recursive hierarchy.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class RecursiveHierarchy {
						/**
						 * Create a representation of a recursive hierarchy defined on one multipleproperties in an OData
						 * entity type query. Do not create your own instances.
						 * @param oEntityType object for the entity type
						 * @param oNodeIDProperty DataJS object for the property holding the           hierarchy node ID
						 * identifying the hierarchy node to which the           OData entry belongs
						 * @param oParentNodeIDProperty DataJS object for the property holding the           node ID of the
						 * parent of the hierarchy node pointed to by the           value of oNodeIDProperty
						 * @param oNodeLevelProperty DataJS object for the property holding the           level number for the
						 * of the hierarchy node pointed to by the value           of oNodeIDProperty
						 * @param oNodeValueProperty DataJS object for the property holding the data           value for the of
						 * the hierarchy node pointed to by the value of           oNodeIDProperty
						 */
						constructor(
							oEntityType: EntityType,
							oNodeIDProperty: any,
							oParentNodeIDProperty: any,
							oNodeLevelProperty: any,
							oNodeValueProperty: any
						);

						/**
						 * Get the property holding the node ID of the hierarchy node
						 * @returns The DataJS object representing this property
						 */
						getNodeIDProperty(): any;

						/**
						 * Get the property holding the level of the hierarchy node
						 * @returns The DataJS object representing this property
						 */
						getNodeLevelProperty(): any;

						/**
						 * Get the property holding the value that is structurally organized by thehierarchy
						 * @returns The DataJS object representing this property
						 */
						getNodeValueProperty(): any;

						/**
						 * Get the property holding the parent node ID of the hierarchy node
						 * @returns The DataJS object representing this property
						 */
						getParentNodeIDProperty(): any;

						/**
						 * Get indicator if this is a leveled hierarchy
						 * @returns False
						 */
						isLeveledHierarchy(): boolean;

						/**
						 * Get indicator if this is a recursive hierarchy
						 * @returns True
						 */
						isRecursiveHierarchy(): boolean;
					}
					/**
					 * Creation of URIs for fetching query results.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class QueryResultRequest {
						/**
						 * Create a request object for interaction with a query result.
						 * @param oQueryResult Description of a query parameterization
						 * @param oParameterizationRequest Request object for           interactions with the parameterization
						 * of this query. Only           required if the query service includes parameters.
						 */
						constructor(
							oQueryResult: sap.ui.model.analytics.odata4analytics.QueryResult,
							oParameterizationRequest?: sap.ui.model.analytics.odata4analytics.ParameterizationRequest
						);

						/**
						 * Add one or more dimensions to the aggregation level
						 * @param aDimensionName Array of dimension names to be added to the already defined
						 * aggregation level.
						 */
						addToAggregationLevel(aDimensionName: any): void;

						/**
						 * Get the names of the dimensions included in the aggregation level
						 * @returns The dimension names included in the aggregation level
						 */
						getAggregationLevel(): any[];

						/**
						 * Get details about a dimensions included in the aggregation level
						 * @param sDImensionName Name of a dimension included in the aggregation level of this
						 * request, for which details shall be returned
						 * @returns An object with three properties named key and text,         both with Boolean values
						 * indicating whether the key and text of         this dimension are included in this request. The
						 * third property         named attributes is an array of attribute names of this         dimension
						 * included in this request, or null, if there are none.
						 */
						getAggregationLevelDetails(sDImensionName: any): any;

						/**
						 * Get the filter expression for this request.Expressions are represented by separate objects. If none
						 * exists so far, anew expression object gets created.
						 * @returns The filter object         associated to this request.
						 */
						getFilterExpression(): sap.ui.model.analytics.odata4analytics.FilterExpression;

						/**
						 * Get the names of the measures included in the query result request
						 * @returns The measure names included in the query result request
						 */
						getMeasureNames(): any[];

						/**
						 * Retrieves the current parametrization request
						 */
						getParameterizationRequest(): any;

						/**
						 * Get the description of the query result on which this request operates on
						 * @returns Description of a query         result
						 */
						getQueryResult(): sap.ui.model.analytics.odata4analytics.QueryResult;

						/**
						 * Returns the current page boundaries as object with properties<code>start</code> and
						 * <code>end</code>. If the end of the page isunbounded, <code>end</code> is null.
						 * @returns the current page boundaries as object
						 */
						getResultPageBoundaries(): any;

						/**
						 * Get the sort expression for this request.Expressions are represented by separate objects. If none
						 * exists so far, anew expression object gets created.
						 * @returns The sort object         associated to this request.
						 */
						getSortExpression(): sap.ui.model.analytics.odata4analytics.SortExpression;

						/**
						 * Get the value of an query option for the OData request URI correspondingto this request.
						 * @param sQueryOptionName Identifies the query option: $select,           $filter,$orderby ... or any
						 * custom query option
						 * @returns The value of the requested query option or null, if         this option is not used for the
						 * OData request.
						 */
						getURIQueryOptionValue(sQueryOptionName: string): string;

						/**
						 * Get the URI to locate the entity set for the query result.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 * @returns The resource path of the URI pointing to the entity         set. It is a relative URI
						 * unless a service root is given, which         would then prefixed in order to return a complete URL.
						 */
						getURIToQueryResultEntitySet(sServiceRootURI: string): string;

						/**
						 * Get the unescaped URI to fetch the query result.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 * @param sResourcePath (optional) OData resource path to be considered.           If provided, it
						 * overwrites any parameterization object that           might have been specified separately.
						 * @returns The unescaped URI that contains the OData resource path         and OData system query
						 * options to express the aggregation level,         filter expression and further options.
						 */
						getURIToQueryResultEntries(
							sServiceRootURI: string,
							sResourcePath: string
						): string;

						/**
						 * Specify which dimension components shall be included in the query result.The settings get applied to
						 * the currently defined aggregation level.
						 * @param sDimensionName Name of the dimension for which the settings get applied.           Specify
						 * null to apply the settings to all dimensions in the           aggregation level.
						 * @param bIncludeKey Indicator whether or not to include the dimension key in the           query
						 * result. Pass null to keep current setting.
						 * @param bIncludeText Indicator whether or not to include the dimension text (if           available)
						 * in the query result. Pass null to keep current           setting.
						 * @param aAttributeName Array of dimension attribute names to be included in the           result.
						 * Pass null to keep current setting. This argument is           ignored if sDimensionName is null.
						 */
						includeDimensionKeyTextAttributes(
							sDimensionName: any,
							bIncludeKey: any,
							bIncludeText: any,
							aAttributeName: any
						): void;

						/**
						 * Specify which measure components shall be included in the query result.The settings get applied to
						 * the currently set measures.
						 * @param sMeasureName Name of the measure for which the settings get applied.           Specify null
						 * to apply the settings to all currently set           measures.
						 * @param bIncludeRawValue Indicator whether or not to include the raw value in the query
						 * result. Pass null to keep current setting.
						 * @param bIncludeFormattedValue Indicator whether or not to include the formatted value (if
						 * available) in the query result. Pass null to keep current           setting.
						 * @param bIncludeUnit Indicator whether or not to include the unit (if available) in           the
						 * query result. Pass null to keep current setting.
						 */
						includeMeasureRawFormattedValueUnit(
							sMeasureName: any,
							bIncludeRawValue: any,
							bIncludeFormattedValue: any,
							bIncludeUnit: any
						): void;

						/**
						 * Remove one or more dimensions from the aggregation level. The method alsoremoved a potential sort
						 * expression on the dimension.
						 * @param aDimensionName Array of dimension names to be removed from the already           defined
						 * aggregation level.
						 */
						removeFromAggregationLevel(aDimensionName: any): void;

						/**
						 * Set the aggregation level for the query result request. By default, thequery result will include the
						 * properties holding the keys of the givendimensions. This setting can be changed
						 * usingincludeDimensionKeyTextAttributes.
						 * @param aDimensionName Array of dimension names to be part of the aggregation level.           If
						 * null, the aggregation level includes all dimensions, if           empty, no dimension is included.
						 */
						setAggregationLevel(aDimensionName: any): void;

						/**
						 * Set the filter expression for this request.Expressions are represented by separate objects. Calling
						 * this methodreplaces the filter object maintained by this request.
						 * @param oFilter The filter object to be associated with this request.
						 */
						setFilterExpression(
							oFilter: sap.ui.model.analytics.odata4analytics.FilterExpression
						): void;

						/**
						 * Set the measures to be included in the query result request. By default,the query result will
						 * include the properties holding the raw values ofthe given measures. This setting can be changed
						 * usingincludeMeasureRawFormattedValueUnit.
						 * @param aMeasureName Array of measure names to be part of the query result request.           If
						 * null, the request includes all measures, if empty, no           measure is included.
						 */
						setMeasures(aMeasureName: any): void;

						/**
						 * Set the parameterization request required for interactions with the queryresult of parameterized
						 * queries. This method provides an alternative wayto assign a parameterization request to a query
						 * result request.
						 * @param oParameterizationRequest Request object for interactions with the parameterization of
						 *   this query
						 */
						setParameterizationRequest(oParameterizationRequest: any): void;

						/**
						 * Set further options to be applied for the OData request to fetch thequery result
						 * @param bIncludeEntityKey Indicates whether or not the entity key           should be returned for
						 * every entry in the query result.           Default is not to include it. Pass null to keep current
						 *         setting.
						 * @param bIncludeCount Indicates whether or not the result shall           include a count for the
						 * returned entities. Default is not to           include it. Pass null to keep current setting.
						 * @param bReturnNoEntities Indicates whether or not the result shall           be empty. This will
						 * translate to $top=0 in the OData request and override           any setting done with
						 * setResultPageBoundaries. The default is not to           suppress entities in the result. Pass null
						 * to keep current setting.           The main use case for this option is to create a request
						 *  with $inlinecount returning an entity count.
						 */
						setRequestOptions(
							bIncludeEntityKey: Boolean,
							bIncludeCount: Boolean,
							bReturnNoEntities: Boolean
						): void;

						/**
						 * Set the resource path to be considered for the OData request URI of thisquery request object. This
						 * method provides an alternative way to assign apath comprising a parameterization. If a path is
						 * provided, it overwritesany parameterization object that might have been specified separately.
						 * @param sResourcePath Resource path pointing to the entity set of the query result.           Must
						 * include a valid parameterization if query contains           parameters.
						 */
						setResourcePath(sResourcePath: any): void;

						/**
						 * Specify that only a page of the query result shall be returned. A page isdescribed by its
						 * boundaries, that are row numbers for the first and lastrows in the query result to be returned.
						 * @param start The first row of the query result to be returned.           Numbering starts at 1.
						 * Passing null is equivalent to start           with the first row.
						 * @param end The last row of the query result to be returned. Passing           null is equivalent to
						 * get all rows up to the end of the query           result.
						 */
						setResultPageBoundaries(start: Number, end: Number): void;

						/**
						 * Set the sort expression for this request.Expressions are represented by separate objects. Calling
						 * this methodreplaces the sort object maintained by this request.
						 * @param oSorter The sort object to be associated with this request.
						 */
						setSortExpression(
							oSorter: sap.ui.model.analytics.odata4analytics.SortExpression
						): void;
					}
					/**
					 * Representation of a dimension attribute.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class DimensionAttribute {
						/**
						 * Create a representation of a dimension attribute provided by an analyticquery. Do not create your
						 * own instances.
						 * @param oQueryResult The query result containing this dimension attribute
						 * @param oProperty The DataJS object object representing the dimension           attribute
						 */
						constructor(
							oQueryResult: sap.ui.model.analytics.odata4analytics.QueryResult,
							oProperty: any
						);

						/**
						 * Get dimension
						 * @returns The dimension object         containing this attribute
						 */
						getDimension(): sap.ui.model.analytics.odata4analytics.Dimension;

						/**
						 * Get the key property
						 * @returns The DataJS object representing the property for the key         of this dimension attribute
						 */
						getKeyProperty(): any;

						/**
						 * Get label
						 * @returns The (possibly language-dependent) label text for this         dimension attribute
						 */
						getLabelText(): string;

						/**
						 * Get the name of the dimension attribute
						 * @returns The name of the dimension attribute, which is identical         to the name of the property
						 * in the entity type holding the         attribute value
						 */
						getName(): string;

						/**
						 * Get text property related to this dimension attribute
						 * @returns The DataJS object representing the text property or         null if it does not exist
						 */
						getTextProperty(): any;
					}
					/**
					 * Creation of URIs for query parameterizations.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class ParameterizationRequest {
						/**
						 * Create a request object for interaction with a query parameterization.
						 * @param oParameterization Description of a query parameterization
						 */
						constructor(
							oParameterization: sap.ui.model.analytics.odata4analytics.Parameterization
						);

						/**
						 * Get the description of the parameterization on which this requestoperates on
						 * @returns Description of a         query parameterization
						 */
						getParameterization(): sap.ui.model.analytics.odata4analytics.Parameterization;

						/**
						 * Get the URI to locate the entity set for the query parameterization.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 */
						getURIToParameterizationEntitySet(sServiceRootURI: string): void;

						/**
						 * Get the URI to locate the parameterization entity for the values assignedto all parameters
						 * beforehand. Notice that a value must be supplied forevery parameter including those marked as
						 * optional. For optionalparameters, assign the special value that the service provider uses as
						 * an"omitted" value. For example, for services based on BW Easy Queries, thiswould be an empty string.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 */
						getURIToParameterizationEntry(sServiceRootURI: string): void;

						/**
						 * Assign a value to a parameter
						 * @param sParameterName Name of the parameter. In case of a range           value, provide the name of
						 * the lower boundary parameter.
						 * @param sValue Assigned value. Pass null to remove a value assignment.
						 * @param sToValue Omit it or set it to null for single values. If set,           it will be assigned
						 * to the upper boundary parameter
						 */
						setParameterValue(
							sParameterName: string,
							sValue: string,
							sToValue: string
						): void;
					}
					/**
					 * Creation of URIs for fetching a query parameter value set.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class ParameterValueSetRequest {
						/**
						 * Create a request object for interaction with a query parameter value help.
						 * @param oParameter Description of a query parameter
						 */
						constructor(
							oParameter: sap.ui.model.analytics.odata4analytics.Parameter
						);

						/**
						 * Get the filter expression for this request.Expressions are represented by separate objects. If none
						 * exists so far, anew expression object gets created.
						 * @returns The filter object         associated to this request.
						 */
						getFilterExpression(): sap.ui.model.analytics.odata4analytics.FilterExpression;

						/**
						 * Get the sort expression for this request.Expressions are represented by separate objects. If none
						 * exists so far, anew expression object gets created.
						 * @returns The sort object         associated to this request.
						 */
						getSortExpression(): sap.ui.model.analytics.odata4analytics.SortExpression;

						/**
						 * Get the value of an query option for the OData request URI correspondingto this request.
						 * @param sQueryOptionName Identifies the query option: $select,           $filter,... or any custom
						 * query option
						 * @returns The value of the requested query option or null, if         this option is not used for the
						 * OData request.
						 */
						getURIQueryOptionValue(sQueryOptionName: string): string;

						/**
						 * Get the unescaped URI to fetch the parameter value set.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 * @returns The unescaped URI that contains the OData resource path         and OData system query
						 * options to express the request for the         parameter value set..
						 */
						getURIToParameterValueSetEntries(sServiceRootURI: string): string;

						/**
						 * Specify which components of the parameter shall be included in the valueset.
						 * @param bIncludeText Indicator whether or not to include the parameter text (if           available)
						 * in the value set. Pass null to keep current           setting.
						 */
						includeParameterText(bIncludeText: any): void;

						/**
						 * Set the filter expression for this request.Expressions are represented by separate objects. Calling
						 * this methodreplaces the filter object maintained by this request.
						 * @param oFilter The filter object to be associated with this request.
						 */
						setFilterExpression(
							oFilter: sap.ui.model.analytics.odata4analytics.FilterExpression
						): void;

						/**
						 * Set the sort expression for this request.Expressions are represented by separate objects. Calling
						 * this methodreplaces the sort object maintained by this request.
						 * @param oSorter The sort object to be associated with this request.
						 */
						setSortExpression(
							oSorter: sap.ui.model.analytics.odata4analytics.SortExpression
						): void;
					}
					/**
					 * Creation of URIs for fetching a query dimension value set.
					 * @resource sap/ui/model/analytics/odata4analytics.js
					 */
					export class DimensionMemberSetRequest {
						/**
						 * Create a request object for interaction with a dimension value help. Such avalue help is served by
						 * either the query result entity set, in which case thereturned dimension members are limited to those
						 * also used in the query resultdata. Or, the value help is populated by a master data entity set, if
						 * madeavailable by the service. In this case, the result will include all validmembers for that
						 * dimension.
						 * @param oDimension Description of a dimension
						 * @param oParameterizationRequest (optional) Request object for           interactions with the
						 * parameterization of the query result or (not           yet supported) master data entity set Such an
						 * object is required           if the entity set holding the dimension members includes
						 * parameters.
						 * @param bUseMasterData (optional) Indicates use of master data for           determining the
						 * dimension members.
						 */
						constructor(
							oDimension: sap.ui.model.analytics.odata4analytics.Dimension,
							oParameterizationRequest: sap.ui.model.analytics.odata4analytics.ParameterizationRequest,
							bUseMasterData: boolean
						);

						/**
						 * Get the filter expression for this request.Expressions are represented by separate objects. If none
						 * exists so far, anew expression object gets created.
						 * @returns The filter object         associated to this request.
						 */
						getFilterExpression(): sap.ui.model.analytics.odata4analytics.FilterExpression;

						/**
						 * Returns the current page boundaries as object with properties<code>start</code> and
						 * <code>end</code>. If the end of the page isunbounded, <code>end</code> is null.
						 * @returns the current page boundaries as object
						 */
						getResultPageBoundaries(): any;

						/**
						 * Get the sort expression for this request.Expressions are represented by separate objects. If none
						 * exists so far, anew expression object gets created.
						 * @returns The sort object         associated to this request.
						 */
						getSortExpression(): sap.ui.model.analytics.odata4analytics.SortExpression;

						/**
						 * Get the value of an query option for the OData request URI correspondingto this request.
						 * @param sQueryOptionName Identifies the query option: $select,           $filter,... or any custom
						 * query option
						 * @returns The value of the requested query option or null, if         this option is not used for the
						 * OData request.
						 */
						getURIQueryOptionValue(sQueryOptionName: string): string;

						/**
						 * Get the URI to locate the entity set for the dimension memebers.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 * @returns The resource path of the URI pointing to the entity         set. It is a relative URI
						 * unless a service root is given, which         would then prefixed in order to return a complete URL.
						 */
						getURIToDimensionMemberEntitySet(sServiceRootURI: string): string;

						/**
						 * Get the unescaped URI to fetch the dimension members, optionallyaugmented by text and attributes.
						 * @param sServiceRootURI (optional) Identifies the root of the OData           service
						 * @returns The unescaped URI that contains the OData resource path         and OData system query
						 * options to express the request for the         parameter value set..
						 */
						getURIToDimensionMemberEntries(sServiceRootURI: string): string;

						/**
						 * Set the filter expression for this request.Expressions are represented by separate objects. Calling
						 * this methodreplaces the filter object maintained by this request.
						 * @param oFilter The filter object to be associated with this request.
						 */
						setFilterExpression(
							oFilter: sap.ui.model.analytics.odata4analytics.FilterExpression
						): void;

						/**
						 * Set the parameterization request required for retrieving dimensionmembers directly from the query
						 * result, if it is parameterized.
						 * @param oParameterizationRequest Request object for interactions with the parameterization of
						 *   this query result
						 */
						setParameterizationRequest(oParameterizationRequest: any): void;

						/**
						 * Set further options to be applied for the OData request
						 * @param bIncludeCount Indicates whether or not the result shall           include a count for the
						 * returned entities. Default is not to           include it. Pass null to keep current setting.
						 */
						setRequestOptions(bIncludeCount: Boolean): void;

						/**
						 * Specify that only a page of the query result shall be returned. A page isdescribed by its
						 * boundaries, that are row numbers for the first and lastrows in the query result to be returned.
						 * @param start The first row of the query result to be returned.           Numbering starts at 1.
						 * Passing null is equivalent to start           with the first row.
						 * @param end The last row of the query result to be returned. Passing           null is equivalent to
						 * get all rows up to the end of the query           result.
						 */
						setResultPageBoundaries(start: Number, end: Number): void;

						/**
						 * Set the sort expression for this request.Expressions are represented by separate objects. Calling
						 * this methodreplaces the sort object maintained by this request.
						 * @param oSorter The sort object to be associated with this request.
						 */
						setSortExpression(
							oSorter: sap.ui.model.analytics.odata4analytics.SortExpression
						): void;
					}
				}
				/**
				 * Tree binding implementation for OData entity sets with aggregate semantics.Note on the handling of
				 * different count modes:The AnalyticalBinding always uses the OData $inlinecount system query option
				 * to determine the totalcount of matching entities. It ignores the default count mode set in the
				 * ODataModel instance and thecount mode specified in the binding parameters. If the default count mode
				 * is None, a warning is addedto the log to remind the application that OData requests generated by the
				 * AnalyticalBinding will includea $inlinecount. If a count mode has been specified in the binding
				 * parameters, an error message will belogged if it is None, because the binding will still add the
				 * $inlinecount to OData requests. If abinding count mode is set to Request or Both, a warning will be
				 * logged to remind the application thatthe OData requests generated by the AnalyticalBinding will
				 * include a $inlinecount.
				 * @resource sap/ui/model/analytics/AnalyticalBinding.js
				 */
				export class AnalyticalBinding extends sap.ui.model.TreeBinding {
					/**
					 * Sets filters for matching only a subset of the entities in the bound OData entity set.Invoking this
					 * function resets the state of the binding. Subsequent data requests such as calls to
					 * getNodeContexts() willneed to trigger OData requests in order to fetch the data that are in line
					 * with these filters.
					 * @param aFilter an Array of sap.ui.model.Filter objects or a single Filter instance.
					 * @param sFilterType Type of the filter which should be adjusted.
					 * @returns returns <code>this</code> to facilitate method chaining
					 */
					filter(
						aFilter: sap.ui.model.Filter[] | sap.ui.model.Filter,
						sFilterType?: typeof sap.ui.model.FilterType
					): sap.ui.model.analytics.AnalyticalBinding;

					/**
					 * Gets the analytical information for a column with a given name.
					 * @param sColumnName the column name.
					 * @returns analytical information for the column; see {@link #updateAnalyticalInfo}           for an
					 * explanation of the object structure
					 */
					getAnalyticalInfoForColumn(sColumnName: any): any;

					/**
					 * Gets analytical metadata for the bound OData entity set.
					 * @returns analytical metadata for the bound OData entity set
					 */
					getAnalyticalQueryResult(): sap.ui.model.analytics.odata4analytics.QueryResult;

					/**
					 * Gets details about the dimension properties included in the bound OData entity set.
					 * @returns details for every dimension property addressed by its name. The details object provides
					 * these properties: name of the dimension,keyPropertyName for the name of the property holding the
					 * dimension key, textPropertyName for the name of the property holding thetext for the dimension,
					 * aAttributeName listing all properties holding dimension attributes, grouped as indicator whether or
					 * not thisdimension is currently grouped, and analyticalInfo, which contains the binding information
					 * for this dimension passed from theAnalyticalBinding's consumer via call to function
					 * updateAnalyticalInfo.
					 */
					getDimensionDetails(): any;

					/**
					 * Get a download URL with the specified format considering thesort/filter/custom parameters.The
					 * download URL also takes into account the selected dimensions and measures,depending on the given
					 * column definitions of the AnalyticalTable.This is based on the visible/inResult flags of the
					 * columns, as well as integrity dependencies,e.g. for mandatory Unit properties.
					 * @since 1.24
					 * @param sFormat Value for the $format Parameter
					 * @returns URL which can be used for downloading
					 */
					getDownloadUrl(sFormat: string): string;

					/**
					 * Gets the names of the filterable properties in the bound OData entity set.
					 * @returns names of properties that can be filtered.
					 */
					getFilterablePropertyNames(): any[];

					/**
					 * Gets a printable name for a group.The printable name follows the pattern is
					 * <code>&lt;label&gt;:&lt;key-value&gt;[-&lt;text-value&gt;]</code>,where <code>label</code> is the
					 * label of the dimension property used at the aggregation level for the group,<code>key-value</code>
					 * is the key value of that dimension for the group, and <code>text-value</code> is thevalue of the
					 * associated text property, if it is also used in the binding.Whenever a formatter function has been
					 * defined for a column displaying the key or text of this dimension, the return valueof this function
					 * is applied for the group name instead of the respective key or text value.
					 * @param oContext the parent context identifying the requested group.
					 * @param iLevel the level number of oContext (because the context might occur at multiple levels)
					 * @returns a printable name for the group.
					 */
					getGroupName(oContext: sap.ui.model.Context, iLevel: number): string;

					/**
					 * Gets the total number of contexts contained in a group, if known.For a given group, be aware that
					 * the group size might vary over time. In principle, this can happen if thebound set of OData entities
					 * includes measure properties with amount or quantity values. The AnalyticalBindingrecognizes
					 * situations where the OData service returns multiple entries for a single group entry due to the fact
					 * that ameasure property cannot be aggregated properly, because an amount exists in multiple
					 * currencies or a quantity existsin multiple units. In such situations, the AnalyticalBinding
					 * substitutes these entries by a single representative, andthe group size gets reduced by the count of
					 * duplicate entries. Finally, since the Binding does not always fetch all children ofa group at once,
					 * but only a page with a certain range, such size changes might happen after every page access.
					 * @param oContext the parent context identifying the requested group of child contexts.
					 * @param iLevel the level number of oContext (because the context might occur at multiple levels)
					 * @returns The currently known group size, or -1, if not yet determined
					 */
					getGroupSize(oContext: sap.ui.model.Context, iLevel: number): number;

					/**
					 * Gets details about the measure properties included in the bound OData entity set.
					 * @returns details for every measure property addressed by its name. The details object provides these
					 * properties: name of the measure,rawValuePropertyName for the name of the property holding the raw
					 * value, unitPropertyName for the name of the property holding the relatedvalue unit or currency, if
					 * any, and analyticalInfo, which contains the binding information for this measure passed from
					 * theAnalyticalBinding's consumer via call to function updateAnalyticalInfo.
					 */
					getMeasureDetails(): any;

					/**
					 * Returns a metadata object for class sap.ui.model.analytics.AnalyticalBinding.
					 * @returns Metadata object describing this class
					 */
					getMetadata(): sap.ui.base.Metadata;

					/**
					 * Gets child contexts for a specified parent context.Contexts are returned in a stable order imposed
					 * by thedimension property that defines this aggregation level beneath the parent context: Either a
					 * sort order has been specified for this property,or the entries are returned in ascending order of
					 * the values of this dimension property by default.If any of the requested data is missing, an OData
					 * request will be triggered to load it.
					 * @param mParameters specifying the aggregation level for which contexts shall be fetched. Supported
					 * parameters are:<ul><li>oContext: parent context identifying the requested group of child
					 * contexts</li><li>level: level number for oContext, because it might occur at multiple levels;
					 * context with group ID <code>"/"</code> has level 0</li><li>numberOfExpandedLevels: number of child
					 * levels that shall be fetched automatically</li><li>startIndex: index of first child entry to return
					 * from the parent context (zero-based)</li><li>length: number of entries to return; counting begins at
					 * the given start index</li><li>threshold: number of additional entries that shall be locally
					 * available in the binding for subsequentaccesses to child entries of the given parent context.
					 * </li></ul>
					 * @returns Array containing the requested contexts of class sap.ui.model.Context, limited by the
					 * number of entries contained           in the entity set at that aggregation level.           The
					 * array will contain less than the requested number of contexts, if some are not locally available and
					 * an OData request is           pending to fetch them. In this case, if the parameter
					 * numberOfExpandedLevels > 0, the array will be completely empty.
					 */
					getNodeContexts(mParameters: any): any[];

					/**
					 * Gets the metadata of a property with a given name.
					 * @param sPropertyName The property name.
					 */
					getProperty(sPropertyName: string): any;

					/**
					 * Gets the label of a property with a given name.
					 * @param sPropertyName The property name.
					 * @returns The heading maintained for this property or null if it does not exist.
					 */
					getPropertyHeading(sPropertyName: string): string;

					/**
					 * Gets the label of a property with a given name.
					 * @param sPropertyName The property name.
					 * @returns The label maintained for this property or null if it does not exist.
					 */
					getPropertyLabel(sPropertyName: string): string;

					/**
					 * Gets the quick info of a property with a given name.
					 * @param sPropertyName The property name.
					 * @returns The quick info maintained for this property or null if it does not exist.
					 */
					getPropertyQuickInfo(sPropertyName: string): string;

					/**
					 * Gets the context for the root aggregation level representing the grand total for all bound measure
					 * properties.The context is assigned to parent group ID <code>null</code>. If the binding is
					 * configured not to provide a grand total,this context is empty. If data for this context is not
					 * locally available yet, an OData request will be triggered to load it.This function must be called
					 * whenever the bound set of OData entities changes, e.g., by changing selected dimensions,modifying
					 * filter conditions, etc.
					 * @param mParameters specifying how the top-most aggregation level shall be fetched. Supported
					 * parameters are:<ul><li>numberOfExpandedLevels: number of child levels that shall be fetched
					 * automatically</li><li>startIndex: index of first entry to return from parent group ID
					 * <code>"/"</code> (zero-based)</li><li>length: number of entries to return at and after the given
					 * start index</li><li>threshold: number of additional entries that shall be locally available in the
					 * binding for subsequentaccesses to contexts of parent group ID <code>"/"</code> or below, if
					 * auto-expanding is selected</li></ul>
					 * @returns Array with a single object of class sap.ui.model.Context for the root context,           or
					 * an empty array if an OData request is pending to fetch requested contexts that are not yet locally
					 * available.
					 */
					getRootContexts(mParameters: any): any[];

					/**
					 * Gets the names of the sortable properties in the bound OData entity set.
					 * @returns names of properties that can be used for sorting the result entities.
					 */
					getSortablePropertyNames(): any[];

					/**
					 * Gets the total number of entities in the bound OData entity set.Counting takes place at the lowest
					 * aggregation level defined by the possible value combinations for the complete set ofdimension
					 * properties included in the bound entity set. This means that intermediate aggregate entities
					 * withsub-totals at higher aggregation levels are not counted.
					 * @returns the total number of addressed entities in the OData entity set
					 */
					getTotalSize(): number;

					/**
					 * Determines if the binding has the entries of a given aggregation level locally available.If so, no
					 * further OData request is required to fetch any of them.
					 * @param oContext the parent context identifying the aggregation level.
					 * @param iLevel the level number of oContext (because the context might occur at multiple levels).
					 * @returns property of sap.ui.model.analytics.AnalyticalBinding.ContextsAvailabilityStatus,indicating
					 * whether all, some, or none of the entries are locally available.
					 */
					hasAvailableNodeContexts(
						oContext: sap.ui.model.Context,
						iLevel: number
					): boolean;

					/**
					 * Determines if the contexts in a specified group have further children. If so,any of these group
					 * contexts can be a parent context of a nested sub-group ina subsequent aggregation level.
					 * @param oContext the parent context identifying the requested group of child contexts.
					 * @param mParameters The only supported parameter is level as the level number of oContext (because
					 * the context might occur at multiple levels)
					 * @returns true if and only if the contexts in the specified group have further children.
					 */
					hasChildren(
						oContext: sap.ui.model.Context,
						mParameters: any
					): boolean;

					/**
					 * Determines if any of the properties included in the bound OData entity set is a measure property.
					 * @returns true if and only one or more properties are measure properties.
					 */
					hasMeasures(): boolean;

					/**
					 * Determines if a given name refers to a measure property
					 * @param sPropertyName The property name.
					 * @returns true if and only if the bound OData entity set includes a measure property with this name.
					 */
					isMeasure(sPropertyName: string): boolean;

					/**
					 * Loads child contexts of multiple groups.
					 * @param mGroupIdRanges specifies index ranges of child contexts to be loaded for multiple groups
					 * identified by their ID. A group index range is           given by an object consisting of
					 * startIndex, length, threshold. For every group ID, the map holds an array of such range objects.
					 */
					loadGroups(mGroupIdRanges: any): void;

					/**
					 * Determines if the binding has been configured to provide a grand total for the selected measure
					 * properties.
					 * @returns true if and only if the binding provides a context for the grand totals of all selected
					 * measure properties.
					 */
					providesGrandTotal(): boolean;

					/**
					 * Refreshes the binding, check whether the model data has been changed and fire change event if this
					 * is the case. For service side models this should refetchthe data from the service. To update a
					 * control, even if no data has been changed, e.g. to reset a control after failed validation, please
					 * use the parameterbForceUpdate.
					 * @param bForceUpdate Update the bound control even if no data has been changed
					 */
					refresh(sGroupIdOrForceUpdate: string | boolean): void;

					/**
					 * Sets sorters for retrieving the entities in the bound OData entity set in a specific order.Invoking
					 * this function resets the state of the binding. Subsequent data requests such as calls to
					 * getNodeContexts() willneed to trigger OData requests in order to fetch the data that are in line
					 * with these sorters.
					 * @param aSorter an sorter object or an array of sorter objects which define the sort order.
					 * @returns returns <code>this</code> to facilitate method chaining.
					 */
					sort(
						aSorters: sap.ui.model.Sorter[] | sap.ui.model.Sorter
					): sap.ui.model.ListBinding | void;

					/**
					 * Updates the binding's structure with new analytical information.Analytical information is the
					 * mapping of UI columns to properties in the bound OData entity set. Every column object containsthe
					 * name of the bound property and in addition:<ol>  <li>A column bound to a dimension property has
					 * further boolean properties:    <ul>      <li>grouped: dimension will be used for building
					 * groups</li>      <li>visible: if the column is visible, values for the related property will be
					 * fetched from the OData service</li>      <li>inResult: if the column is not visible, but declared to
					 * be part of the result, values for the related property      will also be fetched from the OData
					 * service</li>    </ul>  </li>  <li>A column bound to a measure property has further boolean
					 * properties:    <ul>      <li>total: totals and sub-totals will be provided for the measure at all
					 * aggregation levels</li>    </ul>  </li></ol>Invoking this function resets the state of the binding
					 * and subsequent data requests such as calls to getNodeContexts() willneed to trigger OData requests
					 * in order to fetch the data that are in line with this analytical information.Please be aware that a
					 * call of this function might lead to additional back-end requests, as well as a control re-rendering
					 * later on.Whenever possible use the API of the analytical control, instead of relying on the binding.
					 * @param aColumns an array with objects holding the analytical information for every column, from left
					 * to right.
					 */
					updateAnalyticalInfo(aColumns: any[]): void;
				}
				/**
				 * Simple Response Collection Component, collects the responses for each sub-request inside a bigger
				 * batch request.Also handles clean-up after all responses (either success or error) have been
				 * collected.Instantiated in AnalyticalBinding.prototype._executeBatchRequest()
				 * @resource sap/ui/model/analytics/BatchResponseCollector.js
				 */
				export class BatchResponseCollector {
					/**
					 * Constructor for a batch response collecting component.
					 * @param mParams optional Setup-Parameter, @see BatchResponseCollector#setup
					 */
					constructor(mParams: any);

					/**
					 * Collects responses of type BatchResponseCollector.TYPE_SUCCESS and
					 * BatchResponseCollector.TYPE_ERROR.Keeps track of all collected responses and fires the necessary
					 * events after all responses for therequests, given in the constructor, have returned.
					 * @param oResponse the response which should be collected
					 * @param sResponseType the type of the response, either BatchResponseCollector.TYPE_SUCCESS									or
					 * BatchResponseCollector.TYPE_ERROR
					 */
					collect(oResponse: any, sResponseType?: string): void;

					/**
					 * Convenience function to collect an error response.Internally BatchResponseCollector#collect is
					 * called, the second parameter is set to BatchResponseCollector.TYPE_ERROR
					 * @param oResponse the erroneous response object
					 */
					error(oResponse: any): void;

					/**
					 * Setup-Function to initialize/reset the BatchResponseCollector.
					 * @param mParams optional Setup-Parameter
					 */
					setup(mParams: any): void;

					/**
					 * Convenience function to collect a success response.Internally BatchResponseCollector#collect is
					 * called with second parameter BatchResponseCollector.TYPE_SUCCESS
					 * @param oResponse the successful response, which should be collected
					 */
					success(oResponse: any): void;
				}
				/**
				 * @resource sap/ui/model/analytics/AnalyticalTreeBindingAdapter.js
				 */
				export class AnalyticalTreeBindingAdapter {
					/**
					 * Retrieves the currently set number of expanded levels from the Binding (commonly an
					 * AnalyticalBinding).
					 * @returns the number of expanded levels
					 */
					getNumberOfExpandedLevels(): number;

					/**
					 * Checks if the AnalyticalBinding has totaled measures available.Used for rendering sum rows.
					 * @returns wether the binding has totaled measures or not
					 */
					hasTotaledMeasures(): boolean;

					/**
					 * Sets the number of expanded levels on the TreeBinding (commonly an AnalyticalBinding).This is NOT
					 * the same as AnalyticalTreeBindingAdapter#collapse or AnalyticalTreeBindingAdapter#expand.Setting the
					 * number of expanded levels leads to different requests.This function is used by the AnalyticalTable
					 * for the ungroup/ungroup-all feature.
					 * @param iLevels the number of levels which should be expanded, minimum is 0
					 */
					setNumberOfExpandedLevels(iLevels: number): void;
				}
			}
			namespace FilterType {
				/**
				 * Filters which are changed by the application
				 */
				var Application: any;

				/**
				 * Filters which are set by the different controls
				 */
				var Control: any;
			}
			enum BindingMode {
				/**
				 * BindingMode default means that the binding mode of the model is used
				 */
				Default = "Default",

				/**
				 * BindingMode one time means value is only read from the model once
				 */
				OneTime = "OneTime",

				/**
				 * BindingMode one way means from model to view
				 */
				OneWay = "OneWay",

				/**
				 * BindingMode two way means from model to view and vice versa
				 */
				TwoWay = "TwoWay"
			}
			namespace ChangeReason {
				/**
				 * A context was added to a binding.
				 */
				var Add: any;

				/**
				 * Binding changes a model property value
				 */
				var Binding: any;

				/**
				 * The list has changed
				 */
				var Change: any;

				/**
				 * The tree node was collapsed
				 */
				var Collapse: any;

				/**
				 * The list context has changed
				 */
				var Context: any;

				/**
				 * The tree node was expanded
				 */
				var Expand: any;

				/**
				 * The List was filtered
				 */
				var Filter: any;

				/**
				 * The list was refreshed
				 */
				var Refresh: any;

				/**
				 * The list was sorted
				 */
				var Sort: any;
			}
			enum FilterOperator {
				/**
				 * FilterOperator between.When used on strings, the BT operator might not behave intuitively. For
				 * example,when filtering a list of Names with BT "A", "B", all Names starting with "A" will beincluded
				 * as well as the name "B" itself, but no other name starting with "B".
				 */
				BT,

				/**
				 * FilterOperator contains
				 */
				Contains,

				/**
				 * FilterOperator ends with
				 */
				EndsWith,

				/**
				 * FilterOperator equals
				 */
				EQ,

				/**
				 * FilterOperator greater or equals
				 */
				GE,

				/**
				 * FilterOperator greater than
				 */
				GT,

				/**
				 * FilterOperator less or equals
				 */
				LE,

				/**
				 * FilterOperator less than
				 */
				LT,

				/**
				 * FilterOperator not equals
				 */
				NE,

				/**
				 * FilterOperator starts with
				 */
				StartsWith
			}
			namespace TreeBindingUtils {
				/**
				 * Merges together oNewSection into a set of other sections (aSections)The array/objects are not
				 * modified, the function returns a new section array.
				 * @param aSections the sections into which oNewSection will be merged
				 * @param oNewSection the section which should be merged into aNewSections
				 * @returns a new array containing all sections from aSections merged with oNewSection
				 */
				function mergeSections(aSections: any[], oNewSection: any): any[];
			}
			/**
			 * This is an abstract base class for type objects.
			 * @resource sap/ui/model/Type.js
			 */
			export abstract class Type extends sap.ui.base.Object {
				/**
				 * Constructor for a new Type.
				 */
				constructor();

				/**
				 * Returns a metadata object for class sap.ui.model.Type.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the name of this type.
				 * @returns the name of this type
				 */
				getName(): string;
			}
			/**
			 * This is an abstract base class for model objects.
			 * @resource sap/ui/model/Model.js
			 */
			export abstract class Model<T = any> extends sap.ui.core.message
				.MessageProcessor {
				/**
				 * Constructor for a new Model.Every Model is a MessageProcessor that is able to handle Messages with
				 * the normal binding path syntax in the target.
				 */
				constructor();

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'parseError' event of this
				 * <code>sap.ui.model.Model</code>.<br/>
				 * @param oData The object, that should be passed along with the event-object when firing the event.
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, the global context (window)
				 * is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachParseError(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.model.Model;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'propertyChange' event of this
				 * <code>sap.ui.model.Model</code>.
				 * @param oData The object, that should be passed along with the event-object when firing the event.
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, the global context (window)
				 * is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachPropertyChange(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.model.Model;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'requestCompleted' event of this
				 * <code>sap.ui.model.Model</code>.
				 * @param oData The object, that should be passed along with the event-object when firing the event.
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, the global context (window)
				 * is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachRequestCompleted(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.model.Model;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'requestFailed' event of this
				 * <code>sap.ui.model.Model</code>.<br/>
				 * @param oData The object, that should be passed along with the event-object when firing the event.
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, this Model is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachRequestFailed(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.model.Model;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'requestSent' event of this
				 * <code>sap.ui.model.Model</code>.
				 * @param oData The object, that should be passed along with the event-object when firing the event.
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, the global context (window)
				 * is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachRequestSent(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.model.Model;

				/**
				 * Create ContextBinding
				 * @param sPath the path pointing to the property that should be bound or an object        which
				 * contains the following parameter properties: path, context, parameters
				 * @param oContext the context object for this databinding (optional)
				 * @param mParameters additional model specific parameters (optional)
				 * @param oEvents event handlers can be passed to the binding ({change:myHandler})
				 */
				bindContext(
					sPath: string | any,
					oContext?: any,
					mParameters?: any,
					oEvents?: any
				): sap.ui.model.ContextBinding;

				/**
				 * Implement in inheriting classes
				 * @param sPath the path pointing to the list / array that should be bound
				 * @param oContext the context object for this databinding (optional)
				 * @param aSorters initial sort order (can be either a sorter or an array of sorters) (optional)
				 * @param aFilters predefined filter/s (can be either a filter or an array of filters) (optional)
				 * @param mParameters additional model specific parameters (optional)
				 */
				bindList(
					sPath: string,
					oContext?: sap.ui.model.Context,
					aSorters?: sap.ui.model.Sorter[],
					aFilters?: sap.ui.model.Filter[],
					mParameters?: any
				): sap.ui.model.ListBinding;

				/**
				 * Implement in inheriting classes
				 * @param sPath the path pointing to the property that should be bound
				 * @param oContext the context object for this databinding (optional)
				 * @param mParameters additional model specific parameters (optional)
				 */
				bindProperty(
					sPath: string,
					oContext?: any,
					mParameters?: any
				): sap.ui.model.PropertyBinding;

				/**
				 * Implement in inheriting classes
				 * @param sPath the path pointing to the tree / array that should be bound
				 * @param oContext the context object for this databinding (optional)
				 * @param aFilters predefined filter/s contained in an array (optional)
				 * @param mParameters additional model specific parameters (optional)
				 * @param aSorters predefined sap.ui.model.sorter/s contained in an array (optional)
				 */
				bindTree(
					sPath: string,
					oContext?: any,
					aFilters?: any[],
					mParameters?: any,
					aSorters?: any[]
				): sap.ui.model.TreeBinding;

				/**
				 * Implement in inheriting classes
				 * @param sPath the path to create the new context from
				 * @param oContext the context which should be used to create the new binding context
				 * @param mParameters the parameters used to create the new binding context
				 * @param fnCallBack the function which should be called after the binding context has been created
				 * @param bReload force reload even if data is already available. For server side models this should
				 *               refetch the data from the server
				 * @returns the binding context, if it could be created synchronously
				 */
				createBindingContext(
					sPath: string,
					oContext?: any,
					mParameters?: any,
					fnCallBack?: any,
					bReload?: boolean
				): sap.ui.model.Context;

				/**
				 * Destroys the model and clears the model data.A model implementation may override this function and
				 * perform model specific cleanup tasks e.g.abort requests, prevent new requests, etc.
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 * Implement in inheriting classes
				 * @param oContext to destroy
				 */
				destroyBindingContext(oContext: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'parseError' event of this
				 * <code>sap.ui.model.Model</code>.<br/>The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachParseError(fnFunction: any, oListener: any): sap.ui.model.Model;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'propertyChange' event of this
				 * <code>sap.ui.model.Model</code>.The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachPropertyChange(
					fnFunction: any,
					oListener: any
				): sap.ui.model.Model;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'requestCompleted' event of this
				 * <code>sap.ui.model.Model</code>.The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachRequestCompleted(
					fnFunction: any,
					oListener: any
				): sap.ui.model.Model;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'requestFailed' event of this
				 * <code>sap.ui.model.Model</code>.<br/>The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachRequestFailed(
					fnFunction: any,
					oListener: any
				): sap.ui.model.Model;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'requestSent' event of this
				 * <code>sap.ui.model.Model</code>.The passed function and listener object must match the ones
				 * previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachRequestSent(fnFunction: any, oListener: any): sap.ui.model.Model;

				/**
				 * Fire event parseError to attached listeners.
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireParseError(mArguments: any): sap.ui.model.Model;

				/**
				 * Fire event propertyChange to attached listeners.
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				firePropertyChange(mArguments: any): sap.ui.model.Model;

				/**
				 * Fire event requestCompleted to attached listeners.
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireRequestCompleted(mArguments: any): sap.ui.model.Model;

				/**
				 * Fire event requestFailed to attached listeners.
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireRequestFailed(mArguments: any): sap.ui.model.Model;

				/**
				 * Fire event requestSent to attached listeners.
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireRequestSent(mArguments: any): sap.ui.model.Model;

				/**
				 * Get the default binding mode for the model
				 * @returns default binding mode of the model
				 */
				getDefaultBindingMode(): typeof sap.ui.model.BindingMode;

				/**
				 * Get messages for path
				 * @param sPath The binding path
				 */
				getMessagesByPath(sPath: string): void;

				/**
				 * Returns a metadata object for class sap.ui.model.Model.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the meta model associated with this model if it is available for the concretemodel type.
				 * @returns The meta model or undefined if no meta model exists.
				 */
				getMetaModel(): sap.ui.model.MetaModel;

				/**
				 * Implement in inheriting classes
				 * @param sPath the path to where to read the object
				 * @param oContext the context with which the path should be resolved
				 * @param mParameters additional model specific parameters
				 */
				getObject(sPath: string, oContext?: any, mParameters?: any): void;

				/**
				 * Returns the original value for the property with the given path and context.The original value is
				 * the value that was last responded by a server if using a server model implementation.
				 * @param sPath the path/name of the property
				 * @param oContext the context if available to access the property value
				 * @returns vValue the value of the property
				 */
				getOriginalProperty(sPath: string, oContext?: any): any;

				/**
				 * Implement in inheriting classes
				 * @param sPath the path to where to read the attribute value
				 * @param oContext the context with which the path should be resolved
				 */
				getProperty(sPath: string, oContext?: any): void;

				/**
				 * Check if the specified binding mode is supported by the model.
				 * @param sMode the binding mode to check
				 */
				isBindingModeSupported(sMode: typeof sap.ui.model.BindingMode): void;

				/**
				 * Returns whether legacy path syntax is used
				 */
				isLegacySyntax(): boolean;

				/**
				 * Refresh the model.This will check all bindings for updated data and update the controls if data has
				 * been changed.
				 * @param bForceUpdate Update controls even if data has not been changed
				 */
				refresh(sGroupIdOrForceUpdate?: string | boolean): void;

				/**
				 * Set the default binding mode for the model. If the default binding mode should be changed,this
				 * method should be called directly after model instance creation and before any binding
				 * creation.Otherwise it is not guaranteed that the existing bindings will be updated with the new
				 * binding mode.
				 * @param sMode the default binding mode to set for the model
				 * @returns this pointer for chaining
				 */
				setDefaultBindingMode(
					sMode: typeof sap.ui.model.BindingMode
				): sap.ui.model.Model;

				/**
				 * Enables legacy path syntax handlingThis defines, whether relative bindings, which do not have a
				 * definedbinding context, should be compatible to earlier releases which meansthey are resolved
				 * relative to the root element or handled strict andstay unresolved until a binding context is set
				 * @param bLegacySyntax the path syntax to use
				 */
				setLegacySyntax(bLegacySyntax: boolean): void;

				/**
				 * Sets messages
				 * @param mMessages Messages for this model
				 */
				setMessages(mMessages: any): void;

				/**
				 * Set the maximum number of entries which are used for list bindings.
				 * @param iSizeLimit collection size limit
				 */
				setSizeLimit(iSizeLimit: number): void;
			}

			namespace Filter {
				interface InfoBase {
					comparator?: Function;
					caseSensitive?: boolean;
				}

				interface SingleInfo extends InfoBase {
					path: string;
				}

				interface MultiInfo extends InfoBase {
					filters: sap.ui.model.Filter[];
					and?: boolean;
				}

				interface TestInfo extends SingleInfo {
					test: (...args: any) => boolean;
				}

				interface OperatorInfo extends SingleInfo {
					operator: sap.ui.model.FilterOperator;
					value1: any;
					value2?: any;
				}

				type Info = OperatorInfo | TestInfo | MultiInfo;
			}

			/**
			 * Filter for the list binding.
			 * @resource sap/ui/model/Filter.js
			 */
			export class Filter extends sap.ui.base.Object {
				/**
				 * Constructor for Filter.You either pass a single object literal with the filter parameters or use the
				 * individual constructor arguments.No matter which variant is used, only certain combinations of
				 * parameters are supported(the following list uses the names from the object literal):<ul><li>A
				 * <code>path</code>, <code>operator</code> and one or two values (<code>value1</code>,
				 * <code>value2</code>), depending on the operator</li><li>A <code>path</code> and a custom filter
				 * function <code>test</code></li><li>An array of other filters named <code>filters</code> and a
				 * Boolean flag <code>and</code> that specifies whether to combine    the filters with an AND
				 * (<code>true</code>) or an OR (<code>false</code>) operator.</li></ul>An error will be logged to the
				 * console if an invalid combination of parameters is provided.Please note that a model implementation
				 * may not support a custom filter function, e.g. if the model does not perform client side
				 * filtering.It also depends on the model implementation if the filtering is case sensitive or not.See
				 * particular model documentation for details.
				 * @param vFilterInfo Filter info object or a path or an array of filters
				 * @param vOperator Either a filter operator or a custom filter function or a Boolean flag that defines
				 * how to combine multiple filters
				 * @param oValue1 First value to use with the given filter operator
				 * @param oValue2 Second value to use with the given filter operator (only for some operators)
				 */
				constructor(
					vFilterInfo: string,
					vOperator?: sap.ui.model.FilterOperator | any | boolean,
					oValue1?: any,
					oValue2?: any
				);
				constructor(vFilterInfo: Filter.Info);
				constructor(vFilterInfo: sap.ui.model.Filter[]);

				/**
				 * Returns a metadata object for class sap.ui.model.Filter.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * Sorter for the list bindingThis object defines the sort order for the list binding.
			 * @resource sap/ui/model/Sorter.js
			 */
			export class Sorter extends sap.ui.base.Object {
				/**
				 * Constructor for Sorter
				 * @param sPath the binding path used for sorting
				 * @param bDescending whether the sort order should be descending
				 * @param vGroup configure grouping of the content, can either be true to enable grouping       based
				 * on the raw model property value, or a function which calculates the group value out of the
				 * context (e.g. oContext.getProperty("date").getYear() for year grouping). The control needs to
				 * implement the grouping behaviour for the aggregation which you want to group. In case a function
				 *   is provided it must either return a primitive type value as the group key or an object containing
				 *      a "key" property an may contain additional properties needed for group visualization.
				 * @param fnComparator a custom comparator function, which is used for clientside sorting instead
				 * of the default comparator method.
				 */
				constructor(
					sPath: string,
					bDescending?: boolean,
					vGroup?: boolean | any,
					fnComparator?: any
				);

				/**
				 * Compares two valuesThis is the default comparator function used for clientside sorting, if no custom
				 * comparator is given in theconstructor. It does compare just by using equal/less than/greater than
				 * with automatic type casting, exceptfor null values, which are always last, and string values where
				 * localeCompare is used.The comparator method returns -1, 0 or 1, depending on the order of the two
				 * items and issuitable to be used as a comparator method for Array.sort.
				 * @param a the first value to compare
				 * @param b the second value to compare
				 * @returns -1, 0 or 1 depending on the compare result
				 */
				defaultComparator(a: any, b: any): number;

				/**
				 * Returns a group object, at least containing a key property for group detection.May contain
				 * additional properties as provided by a custom group function.
				 * @param oContext the binding context
				 * @returns An object containing a key property and optional custom properties
				 */
				getGroup(oContext: sap.ui.model.Context): any;

				/**
				 * Returns a metadata object for class sap.ui.model.Sorter.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * The Binding is the object, which holds the necessary information for a data binding,like the binding
			 * path and the binding context, and acts like an interface to themodel for the control, so it is the
			 * event provider for changes in the data modeland provides getters for accessing properties or lists.
			 * @resource sap/ui/model/Binding.js
			 */
			export abstract class Binding extends sap.ui.base.EventProvider {
				/**
				 * Constructor for Binding class.
				 * @param oModel the model
				 * @param sPath the path
				 * @param oContext the context object
				 * @param mParameters undefined
				 */
				constructor(
					oModel: sap.ui.model.Model,
					sPath: string,
					oContext: sap.ui.model.Context,
					mParameters?: any
				);

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'AggregatedDataStateChange' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachAggregatedDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'change' event of this
				 * <code>sap.ui.model.Model</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachChange(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'dataReceived' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachDataReceived(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'dataRequested' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachDataRequested(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'DataStateChange' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Attach multiple events.
				 * @param oEvents undefined
				 */
				attachEvents(oEvents: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'refresh' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachRefresh(fnFunction: any, oListener?: any): void;

				/**
				 * Removes all control messages for this binding from the MessageManager in addition to the standard
				 * clean-up tasks.
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'AggregatedDataStateChange' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachAggregatedDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'change' event of this
				 * <code>sap.ui.model.Model</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachChange(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'dataReceived' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachDataReceived(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'dataRequested' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachDataRequested(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'DataStateChange' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Detach multiple events-
				 * @param oEvents undefined
				 */
				detachEvents(oEvents: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'refresh' event of this
				 * <code>sap.ui.model.Binding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachRefresh(fnFunction: any, oListener?: any): void;

				/**
				 * Fire event dataReceived to attached listeners. This event may also be fired when an error occured.
				 * @param mArguments the arguments to pass along with the event.
				 */
				fireDataReceived(mArguments: any): void;

				/**
				 * Fire event dataRequested to attached listeners.
				 * @param mArguments the arguments to pass along with the event.
				 */
				fireDataRequested(mArguments: any): void;

				/**
				 * Returns a metadata object for class sap.ui.model.Binding.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				getPath(): string;

				/**
				 * Initialize the binding. The message should be called when creating a binding.The default
				 * implementation calls checkUpdate(true).
				 */
				initialize(): void;

				/**
				 * Returns whether the binding is initial, which means it did not get an initial value yet
				 * @returns whether binding is initial
				 */
				isInitial(): boolean;

				/**
				 * Returns whether the binding is relative, which means it did not start with a /
				 * @returns whether binding is relative
				 */
				isRelative(): boolean;

				/**
				 * Returns true if the binding is suspended or false if not.
				 * @returns whether binding is suspended
				 */
				isSuspended(): boolean;

				/**
				 * Refreshes the binding, check whether the model data has been changed and fire change eventif this is
				 * the case. For server side models this should refetch the data from the server.To update a control,
				 * even if no data has been changed, e.g. to reset a control after failedvalidation, please use the
				 * parameter bForceUpdate.
				 * @param bForceUpdate Update the bound control even if no data has been changed
				 */
				refresh(sGroupIdOrForceUpdate: string | boolean): void;

				/**
				 * Resumes the binding update. Change events will be fired again.When the binding is resumed, a change
				 * event will be fired immediately, if the data has changed while the bindingwas suspended. For
				 * serverside models, a request to the server will be triggered, if a refresh was requestedwhile the
				 * binding was suspended.
				 */
				resume(): void;

				/**
				 * Suspends the binding update. No change events will be fired.A refresh call with bForceUpdate set to
				 * true will also update the binding and fire a change in suspended mode.Special operations on
				 * bindings, which require updates to work properly (as paging or filtering in list bindings)will also
				 * update and cause a change event although the binding is suspended.
				 */
				suspend(): void;

				/**
				 * Determines if the binding should be updated by comparing the current model against a specified
				 * model.
				 * @param oModel The model instance to compare against
				 * @returns true if this binding should be updated
				 */
				updateRequired(oModel: any): boolean;
			}
			/**
			 * The Context is a pointer to an object in the model data, which is used toallow definition of
			 * relative bindings, which are resolved relative to thedefined object.Context elements are created
			 * either by the ListBinding for each list entryor by using createBindingContext.
			 * @resource sap/ui/model/Context.js
			 */
			export abstract class Context extends sap.ui.base.Object {
				/**
				 * Constructor for Context class.
				 * @param oModel the model
				 * @param sPath the path
				 * @param oContext the context object
				 */
				constructor(oModel: sap.ui.model.Model, sPath: string, oContext: any);

				/**
				 * Returns a metadata object for class sap.ui.model.Context.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Getter for model
				 * @returns the model
				 */
				getModel(): sap.ui.model.Model;

				/**
				 * Gets the (model dependent) object the context points to or the object with the given relative
				 * binding path
				 * @param sPath the binding path
				 * @param mParameters additional model specific parameters (optional)
				 * @returns the context object
				 */
				getObject(sPath?: string, mParameters?: any): any;

				/**
				 * Getter for path of the context itself or a subpath
				 * @param sPath the binding path
				 * @returns the binding path
				 */
				getPath(sPath?: string): string;

				/**
				 * Gets the property with the given relative binding path
				 * @param sPath the binding path
				 */
				getProperty(sPath: string): any;
			}
			/**
			 * Model implementation for meta models
			 * @resource sap/ui/model/MetaModel.js
			 */
			export abstract class MetaModel extends sap.ui.model.Model {
				/**
				 * Constructor for a new MetaModel.
				 */
				constructor();

				/**
				 * Returns a metadata object for class sap.ui.model.MetaModel.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * Provides and update the status data of a binding.Depending on the models state and controls state
			 * changes, the data state is used to propagated changes to a control.The control can react on these
			 * changes by implementing the <code>refreshDataState</code> method for the control.Here the the data
			 * state object is passed as a parameter.Using the {@link #getChanges getChanges} method the control
			 * can determine the changed properties and their old and new value.<pre>    //sample implementation to
			 * handle message changes    myControl.prototype.refreshDataState = function(oDataState) {       var
			 * aMessages = oDataState.getChanges().messages;       if (aMessages) {           for (var i = 0; i
			 * &lt; aMessages.length; i++) {               console.log(aMessages.message);           }       }    }
			 *    //sample implementation to handle laundering state    myControl.prototype.refreshDataState =
			 * function(oDataState) {       var bLaundering = oDataState.getChanges().laundering || false;
			 * this.setBusy(bLaundering);    }    //sample implementation to handle dirty state
			 * myControl.prototype.refreshDataState = function(oDataState) {       if (oDataState.isDirty())
			 * console.log("Control " + this.getId() + " is now dirty");    }</pre>Using the {@link #getProperty
			 * getProperty} method the control can read the properties of the data state. The properties are<ul>
			 * <li><code>value</code> The value formatted by the formatter of the binding
			 * <li><code>originalValue</code> The original value of the model formatted by the formatter of the
			 * binding    <li><code>invalidValue</code> The control value that was tried to be applied to the model
			 * but was rejected by a type validation    <li><code>modelMessages</code> The messages that were
			 * applied to the binding by the <code>sap.ui.model.MessageModel</code>
			 * <li><code>controlMessages</code> The messages that were applied due to type validation errors
			 * <li><code>messages</code> All messages of the data state     <li><code>dirty</code> true if the
			 * value was not yet confirmed by the server</ul>
			 * @resource sap/ui/model/DataState.js
			 */
			export class DataState extends sap.ui.base.Object {
				constructor();

				/**
				 * Returns or sets whether the data state is changed.As long as changed was not set to false the data
				 * state is dirtyand the corresponding binding will fire data state change events.
				 * @param bNewState the optional new state
				 * @returns whether the data state was changed.
				 */
				changed(bNewState: boolean): boolean;

				/**
				 * Returns the changes of the data state in a map that the control can use in
				 * the<code>refreshDataState</code> method.The changed property's name is the key in the map. Each
				 * element in the map contains an object of below structure.<pre>   {       oldValue : The old value of
				 * the property,       value    : The new value of the property   }</pre>The map only contains the
				 * changed properties.
				 * @returns the changed of the data state
				 */
				getChanges(): any;

				/**
				 * Returns the array of state messages of the control or undefined.
				 * @returns the array of messages of the control or null if no {link:sap.ui.core.messages.ModelManager
				 * ModelManager} is used.
				 */
				getControlMessages(
					the?: sap.ui.core.Message[]
				): sap.ui.model.DataState | sap.ui.core.Message[];

				/**
				 * Returns the dirty value of a binding that was rejected by a type validation.This value was of an
				 * incorrect type and could not be applied to the model. If thevalue was not rejected it will return
				 * null. In this case the currentmodel value can be accessed using the <code>getValue</code> method.
				 * @returns the value that was rejected or null
				 */
				getInvalidValue(): any;

				/**
				 * Returns the array of all state messages or null.This combines the model and control messages.
				 * @returns the array of all messages or null if no {link:sap.ui.core.messages.ModelManager
				 * ModelManager} is used.
				 */
				getMessages(): sap.ui.core.Message[];

				/**
				 * Returns a metadata object for class sap.ui.model.DataState.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the array of state messages of the model or undefined
				 * @returns the array of messages of the model or null if no {link:sap.ui.core.messages.ModelManager
				 * ModelManager} is used.
				 */
				getModelMessages(): sap.ui.core.Message[];

				/**
				 * Returns the formatted original value of the data.The original value is the last confirmed value.
				 * @returns the original confirmed value of the server
				 */
				getOriginalValue(): any;

				/**
				 * Returns the formatted value of the data state.
				 * @returns The value of the data.
				 */
				getValue(): any;

				/**
				 * Returns whether the data state is dirty in the UI control.A data state is dirty in the UI control if
				 * the entered value did not yet pass the type validation.
				 * @returns true if the data state is dirty
				 */
				isControlDirty(): boolean;

				/**
				 * Returns whether the data state is dirty.A data state is dirty if the value was changedbut is not yet
				 * confirmed by a server or the entered value did not yet pass the type validation.
				 * @returns true if the data state is dirty
				 */
				isDirty(): boolean;

				/**
				 * Returns whether the data state is in laundering.If data is send to the server the data state becomes
				 * laundering until thedata was accepted or rejected.
				 * @returns true if the data is laundering
				 */
				isLaundering(): boolean;

				/**
				 * Sets an array of control state messages.
				 * @param the control messages
				 * @returns <code>this</code> to allow method chaining
				 */
				setControlMessages(the: sap.ui.core.Message[]): sap.ui.model.DataState;

				/**
				 * Sets the dirty value that was rejected by the type validation.
				 * @param vInvalidValue the value that was rejected by the type validation or null if the value was
				 * valid
				 * @returns <code>this</code> to allow method chaining
				 */
				setInvalidValue(vInvalidValue: any): sap.ui.model.DataState;

				/**
				 * Sets the laundering state of the data state.
				 * @param bLaundering true if the state is laundering
				 * @returns <code>this</code> to allow method chaining
				 */
				setLaundering(bLaundering: boolean): sap.ui.model.DataState;

				/**
				 * Sets an array of model state messages.
				 * @param the model messages for this data state.
				 * @returns <code>this</code> to allow method chaining
				 */
				setModelMessages(the: any[]): sap.ui.model.DataState;

				/**
				 * Sets the formatted original value of the data.
				 * @param vOriginalValue the original value
				 * @returns <code>this</code> to allow method chaining
				 */
				setOriginalValue(vOriginalValue: boolean): sap.ui.model.DataState;

				/**
				 * Sets the formatted value of the data state,
				 * @param vValue the value
				 * @returns <code>this</code> to allow method chaining
				 */
				setValue(vValue: any): sap.ui.model.DataState;
			}
			/**
			 * This is an abstract base class for simple types.
			 * @resource sap/ui/model/SimpleType.js
			 */
			export abstract class SimpleType extends sap.ui.model.Type {
				/**
				 * Constructor for a new SimpleType.
				 * @param oFormatOptions options as provided by concrete subclasses
				 * @param oConstraints constraints as supported by concrete subclasses
				 */
				constructor(oFormatOptions: any, oConstraints?: any);

				/**
				 * Format the given value in model representation to an output value in the giveninternal type. This
				 * happens according to the format options, if target type is 'string'.If oValue is not defined or
				 * null, null will be returned.
				 * @param oValue the value to be formatted
				 * @param sInternalType the target type
				 * @returns the formatted output value
				 */
				formatValue(oValue: any, sInternalType: string): any;

				/**
				 * Returns a metadata object for class sap.ui.model.SimpleType.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Parse a value of an internal type to the expected value of the model type.
				 * @param oValue the value to be parsed
				 * @param sInternalType the source type
				 * @returns the parse result
				 */
				parseValue(
					oValue: any,
					sInternalType: string,
					aCurrentValues?: any[]
				): any;

				/**
				 * Validate whether a given value in model representation is valid and meets thedefined constraints (if
				 * any).
				 * @param oValue the value to be validated
				 */
				validateValue(oValue: any): void;
			}
			/**
			 * The ListBinding is a specific binding for lists in the model, which can be usedto populate Tables or
			 * ItemLists.
			 * @resource sap/ui/model/ListBinding.js
			 */
			export class ListBinding extends sap.ui.model.Binding {
				/**
				 * Constructor for ListBinding
				 * @param oModel undefined
				 * @param sPath undefined
				 * @param oContext undefined
				 * @param aSorters initial sort order (can be either a sorter or an array of sorters)
				 * @param aFilters predefined filter/s (can be either a filter or an array of filters)
				 * @param mParameters undefined
				 */
				constructor(
					oModel: sap.ui.model.Model,
					sPath: string,
					oContext: sap.ui.model.Context,
					aSorters?: any[],
					aFilters?: any[],
					mParameters?: any
				);

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'filter' event of this
				 * <code>sap.ui.model.ListBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachFilter(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'sort' event of this
				 * <code>sap.ui.model.ListBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachSort(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'filter' event of this
				 * <code>sap.ui.model.ListBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachFilter(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'sort' event of this
				 * <code>sap.ui.model.ListBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachSort(fnFunction: any, oListener?: any): void;

				/**
				 * Filters the list according to the filter definitions
				 * @param aFilters Array of filter objects
				 * @param sFilterType Type of the filter which should be adjusted, if it is not given, the standard
				 * behaviour applies
				 * @returns returns <code>this</code> to facilitate method chaining
				 */
				filter(
					aFilters: any[],
					sFilterType?: typeof sap.ui.model.FilterType
				): sap.ui.model.ListBinding;

				/**
				 * Returns an array of binding contexts for the bound target list.<strong>Note:</strong>The public
				 * usage of this method is deprecated, as calls from outside of controls will leadto unexpected side
				 * effects. For avoidance use {@link sap.ui.model.ListBinding.prototype.getCurrentContexts}instead.
				 * @param iStartIndex the startIndex where to start the retrieval of contexts
				 * @param iLength determines how many contexts to retrieve beginning from the start index.
				 * @returns the array of contexts for each row of the bound list
				 */
				getContexts(
					iStartIndex: number,
					iLength?: number
				): sap.ui.model.Context[];

				/**
				 * Returns an array of currently used binding contexts of the bound controlThis method does not trigger
				 * any data requests from the backend or delta calculation, but just returns the contextarray as last
				 * requested by the control. This can be used by the application to get access to the data
				 * currentlydisplayed by a list control.
				 * @since 1.28
				 * @returns the array of contexts for each row of the bound list
				 */
				getCurrentContexts(): sap.ui.model.Context[];

				/**
				 * Returns list of distinct values for the given relative binding path
				 * @param sPath the relative binding path
				 * @returns the array of distinct values.
				 */
				getDistinctValues(sPath?: string): any[];

				/**
				 * Gets the group for the given context.Must only be called if isGrouped() returns that grouping is
				 * enabled for this binding. The grouping will beperformed using the first sorter (in case multiple
				 * sorters are defined).
				 * @param oContext the binding context
				 * @returns the group object containing a key property and optional custom properties
				 */
				getGroup(oContext: sap.ui.model.Context): any;

				/**
				 * Returns the number of entries in the list. This might be an estimated or preliminary length, in
				 * casethe full length is not known yet, see method isLengthFinal().
				 * @since 1.24
				 * @returns returns the number of entries in the list
				 */
				getLength(): number;

				/**
				 * Returns a metadata object for class sap.ui.model.ListBinding.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Indicates whether grouping is enabled for the binding.Grouping is enabled for a list binding, if at
				 * least one sorter exists on the binding and the first sorteris a grouping sorter.
				 * @returns whether grouping is enabled
				 */
				isGrouped(): boolean;

				/**
				 * Returns whether the length which can be retrieved using getLength() is a known, final length,or an
				 * preliminary or estimated length which may change if further data is requested.
				 * @since 1.24
				 * @returns returns whether the length is final
				 */
				isLengthFinal(): boolean;

				/**
				 * Sorts the list according to the sorter object
				 * @param aSorters the Sorter object or an array of sorters which defines the sort order
				 * @returns returns <code>this</code> to facilitate method chaining
				 */
				sort(
					aSorters: sap.ui.model.Sorter[] | sap.ui.model.Sorter
				): sap.ui.model.ListBinding | void;
			}
			/**
			 * The TreeBinding is a specific binding for trees in the model, which can be usedto populate Trees.
			 * @resource sap/ui/model/TreeBinding.js
			 */
			export class TreeBinding extends sap.ui.model.Binding {
				/**
				 * Constructor for TreeBinding
				 * @param oModel undefined
				 * @param sPath the path pointing to the tree / array that should be bound
				 * @param oContext the context object for this databinding (optional)
				 * @param aFilters predefined filter/s contained in an array (optional)
				 * @param mParameters additional model specific parameters (optional)
				 * @param aSorters predefined sap.ui.model.sorter/s contained in an array (optional)
				 */
				constructor(
					oModel: sap.ui.model.Model,
					sPath: string,
					oContext?: any,
					aFilters?: any[],
					mParameters?: any,
					aSorters?: any[]
				);

				/**
				 * Attach event-handler <code>fnFunction</code> to the '_filter' event of this
				 * <code>sap.ui.model.TreeBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachFilter(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the '_filter' event of this
				 * <code>sap.ui.model.TreeBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachFilter(fnFunction: any, oListener?: any): void;

				/**
				 * Filters the tree according to the filter definitions.
				 * @param aFilters Array of sap.ui.model.Filter objects
				 * @param sFilterType Type of the filter which should be adjusted, if it is not given, the standard
				 * behaviour applies
				 */
				filter(
					aFilters: sap.ui.model.Filter[],
					sFilterType: typeof sap.ui.model.FilterType
				): void;

				/**
				 * Returns the number of child nodes of a specific context
				 * @param oContext the context element of the node
				 * @returns the number of children
				 */
				getChildCount(oContext: any): number;

				/**
				 * Returns a metadata object for class sap.ui.model.TreeBinding.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the current value of the bound target
				 * @param oContext the context element of the node
				 * @param iStartIndex the startIndex where to start the retrieval of contexts
				 * @param iLength determines how many contexts to retrieve beginning from the start index.
				 * @returns the array of child contexts for the given node
				 */
				getNodeContexts(
					oContext: any,
					iStartIndex: number,
					iLength: number,
					iThreshold?: number
				): any[];

				/**
				 * Returns the current value of the bound target
				 * @param iStartIndex the startIndex where to start the retrieval of contexts
				 * @param iLength determines how many contexts to retrieve beginning from the start index.
				 * @returns the array of child contexts for the root node
				 */
				getRootContexts(iStartIndex: number, iLength: number): any[];

				/**
				 * Returns if the node has child nodes
				 * @param oContext the context element of the node
				 * @returns true if node has children
				 */
				hasChildren(oContext: Context, mParameters?: any): boolean;

				/**
				 * Sorts the tree according to the sorter definitions.
				 * @param aSorters Array of sap.ui.model.Sorter objects
				 */
				sort(
					aSorters: sap.ui.model.Sorter[] | sap.ui.model.Sorter
				): sap.ui.model.ListBinding | void;
			}
			/**
			 * Model implementation for Client models
			 * @resource sap/ui/model/ClientModel.js
			 */
			export abstract class ClientModel<T = any> extends sap.ui.model.Model<T> {
				/**
				 * Constructor for a new ClientModel.
				 * @param oData URL where to load the data from
				 */
				constructor(oData?: T);

				/**
				 */
				destroy(bSuppressInvalidate: boolean): void;

				/**
				 * Force no caching.
				 * @param bForceNoCache whether to force not to cache
				 */
				forceNoCache(bForceNoCache: boolean): void;

				/**
				 * Returns the current data of the model.Be aware that the returned object is a reference to the model
				 * data so all changes to that data will also change the model data.
				 */
				getData(): T;

				/**
				 * Returns a metadata object for class sap.ui.model.ClientModel.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * update all bindings
				 * @param bForceUpdate true/false: Default = false. If set to false an update					will only be done
				 * when the value of a binding changed.
				 */
				updateBindings(bForceUpdate: boolean): void;
			}
			/**
			 * This is an abstract base class for composite types. Composite types have multiple input values and
			 * knowhow to merge/split them upon formatting/parsing the value. Typical use case a currency or amount
			 * values.Subclasses of CompositeTypes can define boolean properties in the constructor:-
			 * bUseRawValues: the format and parse method will handle raw model values, types of embedded bindings
			 * are ignored- bParseWithValues: the parse method call will include the current binding values as a
			 * third parameter
			 * @resource sap/ui/model/CompositeType.js
			 */
			export abstract class CompositeType extends sap.ui.model.SimpleType {
				/**
				 * Constructor for a new CompositeType.
				 * @param oFormatOptions options as provided by concrete subclasses
				 * @param oConstraints constraints as supported by concrete subclasses
				 */
				constructor(oFormatOptions: any, oConstraints?: any);

				/**
				 * Format the given set of values in model representation to an output value in the giveninternal type.
				 * This happens according to the format options, if target type is 'string'.If aValues is not defined
				 * or null, null will be returned.
				 * @param aValues the values to be formatted
				 * @param sInternalType the target type
				 * @returns the formatted output value
				 */
				formatValue(aValues: any[], sInternalType: string): any;

				/**
				 * Returns a metadata object for class sap.ui.model.CompositeType.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Parse a value of an internal type to the expected set of values of the model type.
				 * @param oValue the value to be parsed
				 * @param sInternalType the source type
				 * @param aCurrentValues the current values of all binding parts
				 * @returns the parse result array
				 */
				parseValue(
					oValue: any,
					sInternalType: string,
					aCurrentValues?: any[]
				): any;

				/**
				 * Validate whether a given value in model representation is valid and meets thedefined constraints (if
				 * any).
				 * @param aValues the set of values to be validated
				 */
				validateValue(aValues: any[]): void;
			}
			/**
			 * @resource sap/ui/model/SelectionModel.js
			 */
			export class SelectionModel extends sap.ui.base.EventProvider {
				/**
				 * SelectionMode: Multi Selection
				 */
				public MULTI_SELECTION: any;

				/**
				 * SelectionMode: Single Selection
				 */
				public SINGLE_SELECTION: any;

				/**
				 * Constructs an instance of a sap.ui.model.SelectionModel.
				 * @param iSelectionMode <code>sap.ui.model.SelectionModel.SINGLE_SELECTION</code> or
				 * <code>sap.ui.model.SelectionModel.MULTI_SELECTION</code>
				 */
				constructor(iSelectionMode: number);

				/**
				 * Changes the selection to be the union of the current selectionand the range between
				 * <code>iFromIndex</code> and <code>iToIndex</code> inclusive.If <code>iFromIndex</code> is smaller
				 * than <code>iToIndex</code>, both parameters are swapped.In <code>SINGLE_SELECTION</code> selection
				 * mode, this is equivalentto calling <code>setSelectionInterval</code>, and only the second indexis
				 * used.If this call results in a change to the current selection or lead selection, then
				 * a<code>SelectionChanged</code> event is fired.
				 * @param iFromIndex one end of the interval.
				 * @param iToIndex other end of the interval
				 * @returns <code>this</code> to allow method chaining
				 */
				addSelectionInterval(
					iFromIndex: number,
					iToIndex: number
				): sap.ui.model.SelectionModel;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'selectionChanged' event of this
				 * <code>sap.ui.model.SelectionModel</code>.<br/>
				 * @param oData The object, that should be passed along with the event-object when firing the event.
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, this Model is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachSelectionChanged(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.model.SelectionModel;

				/**
				 * Change the selection to the empty set and clears the lead selection.If this call results in a change
				 * to the current selection or lead selection, then a<code>SelectionChanged</code> event is fired.
				 * @returns <code>this</code> to allow method chaining
				 */
				clearSelection(): sap.ui.model.SelectionModel;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'selectionChanged' event of this
				 * <code>sap.ui.model.SelectionModel</code>.<br/>The passed function and listener object must match the
				 * ones previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachSelectionChanged(
					fnFunction: any,
					oListener: any
				): sap.ui.model.SelectionModel;

				/**
				 * Fire event 'selectionChanged' to attached listeners.Expects following event
				 * parameters:<ul><li>'leadIndex' of type <code>int</code> Lead selection index.</li><li>'rowIndices'
				 * of type <code>int[]</code> Other selected indices (if available)</li></ul>
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireSelectionChanged(mArguments: any): sap.ui.model.SelectionModel;

				/**
				 * Return the second index argument from the most recent call tosetSelectionInterval(),
				 * addSelectionInterval() or removeSelectionInterval().
				 * @returns lead selected index
				 */
				getLeadSelectedIndex(): number;

				/**
				 * Returns a metadata object for class sap.ui.model.SelectionModel.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the selected indices as array.
				 * @returns array of selected indices
				 */
				getSelectedIndices(): number;

				/**
				 * Returns the current selection mode.
				 * @returns the current selection mode
				 */
				getSelectionMode(): number;

				/**
				 * Returns true if the specified index is selected.
				 * @param iIndex undefined
				 * @returns true if the specified index is selected.
				 */
				isSelectedIndex(iIndex: number): boolean;

				/**
				 * Moves all selected indices starting at the position <code>iStartIndex</code>
				 * <code>iMove</code>items.This can be used if new items are inserted to the item set and you want to
				 * keep the selection.To handle a deletion of items use <code>sliceSelectionInterval</code>.If this
				 * call results in a change to the current selection or lead selection, then
				 * a<code>SelectionChanged</code> event is fired.
				 * @param iStartIndex start at this position
				 * @param iMove undefined
				 * @returns <code>this</code> to allow method chaining
				 */
				moveSelectionInterval(
					iStartIndex: number,
					iMove: number
				): sap.ui.model.SelectionModel;

				/**
				 * Changes the selection to be the set difference of the current selectionand the indices between
				 * <code>iFromIndex</code> and <code>iToIndex</code> inclusive.If <code>iFromIndex</code> is smaller
				 * than <code>iToIndex</code>, both parameters are swapped.If the range of removed selection indices
				 * includes the current lead selection,then the lead selection will be unset (set to -1).If this call
				 * results in a change to the current selection or lead selection, then a<code>SelectionChanged</code>
				 * event is fired.
				 * @param iFromIndex one end of the interval.
				 * @param iToIndex other end of the interval
				 * @returns <code>this</code> to allow method chaining
				 */
				removeSelectionInterval(
					iFromIndex: number,
					iToIndex: number
				): sap.ui.model.SelectionModel;

				/**
				 * Selects all rows up to the <code>iToIndex</iToIndex>.If this call results in a change to the current
				 * selection, then a<code>SelectionChanged</code> event is fired.
				 * @param iToIndex end of the interval
				 * @returns <code>this</code> to allow method chaining
				 */
				selectAll(iToIndex: number): sap.ui.model.SelectionModel;

				/**
				 * Changes the selection to be equal to the range <code>iFromIndex</code> and
				 * <code>iToIndex</code>inclusive. If <code>iFromIndex</code> is smaller than <code>iToIndex</code>,
				 * both parameters are swapped.In <code>SINGLE_SELECTION</code> selection mode, only
				 * <code>iToIndex</iToIndex> is used.If this call results in a change to the current selection, then
				 * a<code>SelectionChanged</code> event is fired.
				 * @param iFromIndex one end of the interval.
				 * @param iToIndex other end of the interval
				 * @returns <code>this</code> to allow method chaining
				 */
				setSelectionInterval(
					iFromIndex: number,
					iToIndex: number
				): sap.ui.model.SelectionModel;

				/**
				 * Sets the selection mode. The following list describes the acceptedselection
				 * modes:<ul><li><code>sap.ui.model.SelectionModel.SINGLE_SELECTION</code> -  Only one list index can
				 * be selected at a time. In this mode,  <code>setSelectionInterval</code> and
				 * <code>addSelectionInterval</code> are  equivalent, both replacing the current selection with the
				 * index  represented by the second argument (the
				 * "lead").<li><code>sap.ui.model.SelectionModel.MULTI_SELECTION</code> -  In this mode, there's no
				 * restriction on what can be selected.</ul>
				 * @param iSelectionMode selection mode
				 */
				setSelectionMode(iSelectionMode: number): void;

				/**
				 * Slices a the indices between the two indices from the selection.If <code>iFromIndex</code> is
				 * smaller than <code>iToIndex</code>, both parameters are swapped.If the range of removed selection
				 * indices includes the current lead selection,then the lead selection will be unset (set to -1).If
				 * this call results in a change to the current selection or lead selection, then
				 * a<code>SelectionChanged</code> event is fired.
				 * @param iFromIndex one end of the interval.
				 * @param iToIndex other end of the interval
				 * @returns <code>this</code> to allow method chaining
				 */
				sliceSelectionInterval(
					iFromIndex: number,
					iToIndex: number
				): sap.ui.model.SelectionModel;
			}
			/**
			 * The ContextBinding is a specific binding for a setting context for the model
			 * @resource sap/ui/model/ContextBinding.js
			 */
			export abstract class ContextBinding extends sap.ui.model.Binding {
				/**
				 * Constructor for ContextBinding
				 * @param oModel undefined
				 * @param sPath undefined
				 * @param oContext undefined
				 * @param mParameters undefined
				 * @param oEvents object defining event handlers
				 */
				constructor(
					oModel: sap.ui.model.Model,
					sPath: string,
					oContext: any,
					mParameters?: any,
					oEvents?: any
				);

				/**
				 * Returns a metadata object for class sap.ui.model.ContextBinding.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * The PropertyBinding is used to access single data values in the data model.
			 * @resource sap/ui/model/PropertyBinding.js
			 */
			export class PropertyBinding extends sap.ui.model.Binding {
				/**
				 * Constructor for PropertyBinding
				 * @param oModel undefined
				 * @param sPath undefined
				 * @param oContext undefined
				 * @param mParameters undefined
				 */
				constructor(
					oModel: sap.ui.model.Model,
					sPath: string,
					oContext: sap.ui.model.Context,
					mParameters?: any
				);

				/**
				 * Returns the binding mode
				 * @returns the binding mode
				 */
				getBindingMode(): typeof sap.ui.model.BindingMode;

				/**
				 * Returns the current external value of the bound target which is formatted via a type or formatter
				 * function.
				 * @returns the current value of the bound target
				 */
				getExternalValue(): any;

				/**
				 * Returns the formatter function
				 * @returns the formatter function
				 */
				getFormatter(): any;

				/**
				 * Returns a metadata object for class sap.ui.model.PropertyBinding.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the type if any for the binding.
				 * @returns the binding type
				 */
				getType(): sap.ui.model.Type;

				/**
				 * Returns the current value of the bound target
				 * @returns the current value of the bound target
				 */
				getValue(): any;

				/**
				 * Resumes the binding update. Change events will be fired again.When the binding is resumed and the
				 * control value was changed in the meantime, the control value will be set to thecurrent value from
				 * the model and a change event will be fired.
				 */
				resume(): void;

				/**
				 * Sets the binding mode
				 * @param sBindingMode the binding mode
				 */
				setBindingMode(sBindingMode: typeof sap.ui.model.BindingMode): void;

				/**
				 * Sets the value for this binding. The value is parsed and validated against its type and then set to
				 * the binding.A model implementation should check if the current default binding mode permitssetting
				 * the binding value and if so set the new value also in the model.
				 * @param oValue the value to set for this binding
				 */
				setExternalValue(oValue: any): void;

				/**
				 * Sets the optional formatter function for the binding.
				 * @param fnFormatter the formatter function for the binding
				 */
				setFormatter(fnFormatter: any): void;

				/**
				 * Sets the optional type and internal type for the binding. The type and internal type are used to do
				 * the parsing/formatting correctly.The internal type is the property type of the element which the
				 * value is formatted to.
				 * @param oType the type for the binding
				 * @param sInternalType the internal type of the element property which this binding is bound against.
				 */
				setType(oType: sap.ui.model.Type, sInternalType: string): void;

				/**
				 * Sets the value for this binding. A model implementation should check if the current default binding
				 * mode permitssetting the binding value and if so set the new value also in the model.
				 * @param oValue the value to set for this binding
				 */
				setValue(oValue: any): void;
			}
			/**
			 * The CompositeBinding is used to bundle multiple property bindings which are be used to provide a
			 * single binding againstthese property bindings.
			 * @resource sap/ui/model/CompositeBinding.js
			 */
			export class CompositeBinding extends sap.ui.model.PropertyBinding {
				/**
				 * Constructor for CompositeBinding
				 */
				constructor();

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'AggregatedDataStateChange' event of
				 * this<code>sap.ui.model.CompositeBinding</code>. The CombinedDataStateChange event is fired
				 * asynchronously, meaningthat the datastate object given as parameter of the event contains all
				 * changes that were applied to the datastatein the running thread.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachAggregatedDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the '_change' event of this
				 * <code>sap.ui.model.CompositeBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachChange(fnFunction: any, oListener?: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'DataStateChange' event of this
				 * <code>sap.ui.model.CompositeBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				attachDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'AggregatedDataStateChange' event of this
				 * <code>sap.ui.model.CompositeBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachAggregatedDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the '_change' event of this
				 * <code>sap.ui.model.CompositeBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachChange(fnFunction: any, oListener?: any): void;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'DataStateChange' event of this
				 * <code>sap.ui.model.CompositeBinding</code>.<br/>
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener object on which to call the given function.
				 */
				detachDataStateChange(fnFunction: any, oListener?: any): void;

				/**
				 * Returns the property bindings contained in this composite binding.
				 * @returns the property bindings in this composite binding
				 */
				getBindings(): any[];

				/**
				 * Returns the current external value of the bound target which is formatted via a type or formatter
				 * function.
				 * @returns the current value of the bound target
				 */
				getExternalValue(): any;

				/**
				 * Returns a metadata object for class sap.ui.model.CompositeBinding.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the raw values of the property bindings in an array.
				 * @returns the values of the internal property bindings in an array
				 */
				getValue(): any;

				/**
				 * Initialize the binding. The message should be called when creating a binding.The default
				 * implementation calls checkUpdate(true).Prevent checkUpdate to be triggered while initializing
				 * nestend bindings, it issufficient to call checkUpdate when all nested bindings are initialized.
				 */
				initialize(): void;

				/**
				 * Suspends the binding update. No change events will be fired.A refresh call with bForceUpdate set to
				 * true will also update the binding and fire a change in suspended mode.Special operations on
				 * bindings, which require updates to work properly (as paging or filtering in list bindings)will also
				 * update and cause a change event although the binding is suspended.
				 */
				resume(): void;

				/**
				 * Sets the external value of a composite binding. If no CompositeType is assigned to the binding, the
				 * defaultimplementation assumes a space separated list of values. This will cause the setValue to be
				 * called for eachnested binding, except for undefined values in the array.
				 * @param oValue the value to set for this binding
				 */
				setExternalValue(oValue: any): void;

				/**
				 * Sets the optional type and internal type for the binding. The type and internal type are used to do
				 * the parsing/formatting correctly.The internal type is the property type of the element which the
				 * value is formatted to.
				 * @param oType the type for the binding
				 * @param sInternalType the internal type of the element property which this binding is bound against.
				 */
				setType(oType: sap.ui.model.CompositeType, sInternalType: string): void;

				/**
				 * Sets the values. This will cause the setValue to be called for each nested binding, exceptfor
				 * undefined values in the array.
				 * @param aValues the values to set for this binding
				 */
				setValue(aValues: any[]): void;

				/**
				 * Suspends the binding update. No change events will be fired.A refresh call with bForceUpdate set to
				 * true will also update the binding and fire a change in suspended mode.Special operations on
				 * bindings, which require updates to work properly (as paging or filtering in list bindings)will also
				 * update and cause a change event although the binding is suspended.
				 */
				suspend(): void;

				/**
				 * Determines if the property bindings in the composite binding should be updated by calling
				 * updateRequired on all property bindings with the specified model.
				 * @param oModel The model instance to compare against
				 * @returns true if this binding should be updated
				 */
				updateRequired(oModel: any): boolean;
			}
			/**
			 * @resource sap/ui/model/TreeBindingAdapter.js
			 */
			export class TreeBindingAdapter {
				/**
				 * Calculate the request length based on the given information
				 * @param iMaxGroupSize the maximum group size
				 * @param oSection the information of the current section
				 */
				_calculateRequestLength(iMaxGroupSize: number, oSection: any): void;

				/**
				 * Attach event-handler <code>fnFunction</code> to the 'selectionChanged' event of this
				 * <code>sap.ui.model.SelectionModel</code>.<br/>Event is fired if the selection of tree nodes is
				 * changed in any way.
				 * @param oData The object, that should be passed along with the event-object when firing the event.
				 * @param fnFunction The function to call, when the event occurs. This function will be called on the
				 *         oListener-instance (if present) or in a 'static way'.
				 * @param oListener Object on which to call the given function. If empty, this Model is used.
				 * @returns <code>this</code> to allow method chaining
				 */
				attachSelectionChanged(
					oData: any,
					fnFunction: any,
					oListener?: any
				): sap.ui.model.SelectionModel;

				/**
				 * Detach event-handler <code>fnFunction</code> from the 'selectionChanged' event of this
				 * <code>sap.ui.model.SelectionModel</code>.<br/>The passed function and listener object must match the
				 * ones previously used for event registration.
				 * @param fnFunction The function to call, when the event occurs.
				 * @param oListener Object on which the given function had to be called.
				 * @returns <code>this</code> to allow method chaining
				 */
				detachSelectionChanged(
					fnFunction: any,
					oListener: any
				): sap.ui.model.SelectionModel;

				/**
				 * Fire event 'selectionChanged' to attached listeners.Expects following event
				 * parameters:<ul><li>'leadIndex' of type <code>int</code> Lead selection index.</li><li>'rowIndices'
				 * of type <code>int[]</code> Other selected indices (if available)</li></ul>
				 * @param mArguments the arguments to pass along with the event.
				 * @returns <code>this</code> to allow method chaining
				 */
				fireSelectionChanged(mArguments: any): sap.ui.model.SelectionModel;

				/**
				 * Retrieves the requested part from the tree and returns node objects.
				 * @param iStartIndex undefined
				 * @param iLength undefined
				 * @param iThreshold undefined
				 * @returns Tree Node
				 */
				getNodes(iStartIndex: any, iLength: any, iThreshold: any): any;
			}
			/**
			 * Provides and update the status data of a binding.Depending on the models state and controls state
			 * changes, the data state is used to propagated changes to a control.The control can react on these
			 * changes by implementing the <code>refreshDataState</code> method for the control.Here the the data
			 * state object is passed as a parameter.Using the {@link #getChanges getChanges} method the control
			 * can determine the changed properties and their old and new value.<pre>    //sample implementation to
			 * handle message changes    myControl.prototype.refreshDataState = function(oDataState) {       var
			 * aMessages = oDataState.getChanges().messages;       if (aMessages) {           for (var i = 0; i
			 * &lt; aMessages.length; i++) {               console.log(aMessages.message);           }       }    }
			 *    //sample implementation to handle laundering state    myControl.prototype.refreshDataState =
			 * function(oDataState) {       var bLaundering = oDataState.getChanges().laundering || false;
			 * this.setBusy(bLaundering);    }    //sample implementation to handle dirty state
			 * myControl.prototype.refreshDataState = function(oDataState) {       if (oDataState.isDirty())
			 * console.log("Control " + this.getId() + " is now dirty");    }</pre>Using the {@link #getProperty
			 * getProperty} method the control can read the properties of the data state. The properties are<ul>
			 * <li><code>value</code> The value formatted by the formatter of the binding
			 * <li><code>originalValue</code> The original value of the model formatted by the formatter of the
			 * binding    <li><code>invalidValue</code> The control value that was tried to be applied to the model
			 * but was rejected by a type validation    <li><code>modelMessages</code> The messages that were
			 * applied to the binding by the <code>sap.ui.model.MessageModel</code>
			 * <li><code>controlMessages</code> The messages that were applied due to type validation errors
			 * <li><code>messages</code> All messages of the data state     <li><code>dirty</code> true if the
			 * value was not yet confirmed by the server</ul>
			 * @resource sap/ui/model/CompositeDataState.js
			 */
			export class CompositeDataState extends sap.ui.model.DataState {
				constructor();

				/**
				 * Returns or sets whether the data state is changed.As long as changed was not set to false the data
				 * state is dirtyand the corresponding binding will fire data state change events.
				 * @param bNewState the optional new state
				 * @returns whether the data state was changed.
				 */
				changed(bNewState: boolean): boolean;

				/**
				 * Returns the changes of the data state in a map that the control can use in
				 * the<code>refreshDataState</code> method.The changed property's name is the key in the map. Each
				 * element in the map contains an object of below structure.<pre>   {       oldValue : The old value of
				 * the property,       value    : The new value of the property   }</pre>The map only contains the
				 * changed properties.
				 * @returns the changed of the data state
				 */
				getChanges(): any;

				/**
				 * Sets an array of control state messages.
				 * @param the control messages
				 * @returns <code>this</code> to allow method chaining
				 */
				getControlMessages(
					the?: sap.ui.core.Message[]
				): sap.ui.model.DataState | sap.ui.core.Message[];

				/**
				 * Returns an array of the properties set on the inner datastates
				 */
				getInternalProperty(): void;

				/**
				 * Returns the dirty value of a binding that was rejected by a type validation.This value was of an
				 * incorrect type and could not be applied to the model. If thevalue was not rejected it will return
				 * null. In this case the currentmodel value can be accessed using the <code>getValue</code> method.
				 * @returns the value that was rejected or null
				 */
				getInvalidValue(): any;

				/**
				 * Returns the array of all state messages or null.This combines the model and control messages.
				 * @returns the array of all messages or null if no {link:sap.ui.core.messages.ModelManager
				 * ModelManager} is used.
				 */
				getMessages(): sap.ui.core.Message[];

				/**
				 * Returns a metadata object for class sap.ui.model.CompositeDataState.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;

				/**
				 * Returns the array of state messages of the model or undefined
				 * @returns the array of messages of the model or null if no {link:sap.ui.core.messages.ModelManager
				 * ModelManager} is used.
				 */
				getModelMessages(): sap.ui.core.Message[];

				/**
				 * Returns whether the data state is dirty in the UI control.A data state is dirty in the UI control if
				 * the entered value did not yet pass the type validation.
				 * @returns true if the data state is dirty
				 */
				isControlDirty(): boolean;

				/**
				 * Returns whether the data state is dirty.A data state is dirty if the value was changedbut is not yet
				 * confirmed by a server or the entered value did not yet pass the type validation.
				 * @returns true if the data state is dirty
				 */
				isDirty(): boolean;

				/**
				 * Returns whether the data state is in laundering.If data is send to the server the data state becomes
				 * laundering until thedata was accepted or rejected.
				 * @returns true if the data is laundering
				 */
				isLaundering(): boolean;
			}
			/**
			 * The ContextBinding is a specific binding for a setting context for the model
			 * @resource sap/ui/model/ClientContextBinding.js
			 */
			export abstract class ClientContextBinding extends sap.ui.model
				.ContextBinding {
				/**
				 * Constructor for ClientContextBinding
				 * @param oModel undefined
				 * @param sPath undefined
				 * @param oContext undefined
				 * @param mParameters undefined
				 */
				constructor(
					oModel: sap.ui.model.Model,
					sPath: string,
					oContext: any,
					mParameters?: any
				);

				/**
				 * Returns a metadata object for class sap.ui.model.ClientContextBinding.
				 * @returns Metadata object describing this class
				 */
				getMetadata(): sap.ui.base.Metadata;
			}
			/**
			 * @resource sap/ui/model/ClientTreeBindingAdapter.js
			 */
			export class ClientTreeBindingAdapter {}
			/**
			 * @resource sap/ui/model/TreeBindingCompatibilityAdapter.js
			 */
			export class TreeBindingCompatibilityAdapter {}
		}
	}
}
