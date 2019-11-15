/// <reference path="./base/index.d.ts" />
/// <reference path="./core/index.d.ts" />
/// <reference path="./Device/index.d.ts" />
/// <reference path="./layout/index.d.ts" />
/// <reference path="./model/index.d.ts" />
/// <reference path="./unified/index.d.ts" />

declare namespace sap {
	namespace ui {
		function define<T>(modulePaths: string[], loadedModules: (...modules: T[]) => void | Function | object): void;
	}
}