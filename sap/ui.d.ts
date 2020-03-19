declare namespace sap {
	namespace ui {
		function define<T>(modulePaths: string[], loadedModules: (...modules: T[]) => void | Function | object): void;

		interface Core {
			byId<T extends sap.ui.core.Control>(id: string): T;
			getModel<T extends sap.ui.model.Model>(id: string): T;
			setModel<T extends sap.ui.model.Model>(model: T, id: string): void;
		}
		function getCore(): Core;
	}
}

