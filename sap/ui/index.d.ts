/// <reference path="./base/index.d.ts" />
/// <reference path="./core/index.d.ts" />
/// <reference path="./Device/index.d.ts" />
/// <reference path="./layout/index.d.ts" />
/// <reference path="./model/index.d.ts" />
/// <reference path="./unified/index.d.ts" />

interface Control<T> {
	new (): T;
}

declare namespace sap {
	namespace ui {
		function define(modulePaths: string[], loadedModules: (...modules: Control<sap.ui.base.Object>[]) => void);
	}
}