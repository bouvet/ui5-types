declare namespace sap {
	namespace ui {
		function define<T>(modulePaths: string[], loadedModules: (...modules: T[]) => void | Function | object): void;

		function getCore(): sap.ui.core.Core;
	}
}

