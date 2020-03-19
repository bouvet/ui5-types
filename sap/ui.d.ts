declare namespace sap {
	namespace ui {
		function define<T>(modulePaths: string[], loadedModules: (...modules: T[]) => void | Function | object): void;

		interface Core {
			byId<T extends sap.ui.core.Control>(id: string): T;
		}
		function getCore(): Core;
	}
}

